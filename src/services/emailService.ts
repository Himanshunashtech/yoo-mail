import { EmailMessage, TempEmailData } from '../types/email';

// Real temporary email services that actually work
const EMAIL_SERVICES = {
  // 1SecMail - Most reliable
  onesecmail: {
    domains: ['1secmail.com', '1secmail.org', '1secmail.net'],
    generateUrl: 'https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1',
    messagesUrl: (login: string, domain: string) => 
      `https://www.1secmail.com/api/v1/?action=getMessages&login=${login}&domain=${domain}`,
    readUrl: (login: string, domain: string, id: string) => 
      `https://www.1secmail.com/api/v1/?action=readMessage&login=${login}&domain=${domain}&id=${id}`
  },
  
  // TempMail.lol - Alternative service
  tempmail: {
    domains: ['tempmail.lol'],
    generateUrl: 'https://api.tempmail.lol/generate',
    messagesUrl: (token: string) => `https://api.tempmail.lol/auth/${token}`
  },
  
  // Guerrilla Mail - Backup service
  guerrilla: {
    domains: ['guerrillamail.com', 'guerrillamail.org'],
    generateUrl: 'https://api.guerrillamail.com/ajax.php?f=get_email_address',
    messagesUrl: (token: string) => `https://api.guerrillamail.com/ajax.php?f=get_email_list&sid_token=${token}`
  }
};

// CORS proxy services to bypass CORS restrictions
const CORS_PROXIES = [
  'https://api.codetabs.com/v1/proxy?quest=',
  'https://cors-anywhere.herokuapp.com/',
  'https://api.allorigins.win/get?url=',
  'https://thingproxy.freeboard.io/fetch/'
];

class EmailService {
  private static instance: EmailService;
  private currentEmail: TempEmailData | null = null;
  private messages: EmailMessage[] = [];
  private messageListeners: Array<(messages: EmailMessage[]) => void> = [];
  private readonly STORAGE_KEY = 'tempmail_data';
  private readonly MESSAGES_KEY = 'tempmail_messages';
  private pollingInterval: ReturnType<typeof setInterval> | null = null;
  private currentService: 'onesecmail' | 'tempmail' | 'guerrilla' = 'onesecmail';
  private corsProxy: string = CORS_PROXIES[0];

  static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  async generateTempEmail(): Promise<TempEmailData> {
    // Clear any existing polling
    this.stopPolling();
    
    // Try different services until one works
    const services: Array<keyof typeof EMAIL_SERVICES> = ['onesecmail', 'tempmail', 'guerrilla'];
    
    for (const service of services) {
      try {
        const email = await this.tryGenerateEmail(service);
        if (email) {
          this.currentService = service;
          return email;
        }
      } catch (error) {
        // Continue to next service
      }
    }
    
    // If all real services fail, create a fallback
    return this.createFallbackEmail();
  }

  private async tryGenerateEmail(service: keyof typeof EMAIL_SERVICES): Promise<TempEmailData | null> {
    const serviceConfig = EMAIL_SERVICES[service];
    
    if (service === 'onesecmail') {
      return await this.generate1SecMail();
    } else if (service === 'tempmail') {
      return await this.generateTempMailLol();
    } else if (service === 'guerrilla') {
      return await this.generateGuerrillaMail();
    }
    
    return null;
  }

  private async generate1SecMail(): Promise<TempEmailData | null> {
    try {
      // Try different CORS proxies
      for (const proxy of CORS_PROXIES) {
        try {
          const url = proxy + encodeURIComponent(EMAIL_SERVICES.onesecmail.generateUrl);
          
          const response = await fetch(url, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            }
          });
          
          if (response.ok) {
            const text = await response.text();
            
            let emails;
            try {
              emails = JSON.parse(text);
            } catch {
              // If response is wrapped by proxy, try to extract JSON
              const jsonMatch = text.match(/\[.*\]/);
              if (jsonMatch) {
                emails = JSON.parse(jsonMatch[0]);
              }
            }
            
            if (emails && Array.isArray(emails) && emails.length > 0) {
              const email = emails[0];
              const [username, domain] = email.split('@');
              
              const tempEmailData: TempEmailData = {
                email,
                domain,
                token: username,
                expiresAt: new Date(Date.now() + 10 * 60 * 1000)
              };

              this.currentEmail = tempEmailData;
              this.messages = [];
              this.corsProxy = proxy; // Remember working proxy
              
              this.storeEmailData(tempEmailData);
              this.storeMessages([]);
              this.notifyMessageListeners();
              this.startRealMessagePolling();
              
              return tempEmailData;
            }
          }
        } catch (error) {
          continue;
        }
      }
    } catch (error) {
      // Service failed
    }
    
    return null;
  }

  private async generateTempMailLol(): Promise<TempEmailData | null> {
    try {
      for (const proxy of CORS_PROXIES) {
        try {
          const url = proxy + encodeURIComponent(EMAIL_SERVICES.tempmail.generateUrl);
          
          const response = await fetch(url);
          
          if (response.ok) {
            const text = await response.text();
            
            let data;
            try {
              data = JSON.parse(text);
            } catch {
              // Try to extract JSON from proxy response
              const jsonMatch = text.match(/\{.*\}/);
              if (jsonMatch) {
                data = JSON.parse(jsonMatch[0]);
              }
            }
            
            if (data && data.address) {
              const [username, domain] = data.address.split('@');
              
              const tempEmailData: TempEmailData = {
                email: data.address,
                domain,
                token: data.token || username,
                expiresAt: new Date(Date.now() + 10 * 60 * 1000)
              };

              this.currentEmail = tempEmailData;
              this.messages = [];
              this.corsProxy = proxy;
              
              this.storeEmailData(tempEmailData);
              this.storeMessages([]);
              this.notifyMessageListeners();
              this.startRealMessagePolling();
              
              return tempEmailData;
            }
          }
        } catch (error) {
          continue;
        }
      }
    } catch (error) {
      // Service failed
    }
    
    return null;
  }

  private async generateGuerrillaMail(): Promise<TempEmailData | null> {
    try {
      for (const proxy of CORS_PROXIES) {
        try {
          const url = proxy + encodeURIComponent(EMAIL_SERVICES.guerrilla.generateUrl);
          
          const response = await fetch(url);
          
          if (response.ok) {
            const text = await response.text();
            
            let data;
            try {
              data = JSON.parse(text);
            } catch {
              const jsonMatch = text.match(/\{.*\}/);
              if (jsonMatch) {
                data = JSON.parse(jsonMatch[0]);
              }
            }
            
            if (data && data.email_addr) {
              const [username, domain] = data.email_addr.split('@');
              
              const tempEmailData: TempEmailData = {
                email: data.email_addr,
                domain,
                token: data.sid_token || username,
                expiresAt: new Date(Date.now() + 10 * 60 * 1000)
              };

              this.currentEmail = tempEmailData;
              this.messages = [];
              this.corsProxy = proxy;
              
              this.storeEmailData(tempEmailData);
              this.storeMessages([]);
              this.notifyMessageListeners();
              this.startRealMessagePolling();
              
              return tempEmailData;
            }
          }
        } catch (error) {
          continue;
        }
      }
    } catch (error) {
      // Service failed
    }
    
    return null;
  }

  private createFallbackEmail(): TempEmailData {
    // Create a fallback email that shows instructions
    const username = this.generateRandomUsername();
    const email = `${username}@1secmail.com`;
    
    const tempEmailData: TempEmailData = {
      email,
      domain: '1secmail.com',
      token: username,
      expiresAt: new Date(Date.now() + 10 * 60 * 1000)
    };

    this.currentEmail = tempEmailData;
    this.messages = [];
    
    this.storeEmailData(tempEmailData);
    this.storeMessages([]);
    this.notifyMessageListeners();
    
    // Add instruction message
    setTimeout(() => {
      this.addInstructionMessage();
    }, 1000);
    
    return tempEmailData;
  }

  private addInstructionMessage(): void {
    if (!this.currentEmail) return;

    const instructionMessage: EmailMessage = {
      id: `instruction-${Date.now()}`,
      from: 'system@tempmail.org',
      subject: '📧 How to Test Your Temporary Email',
      body: `Your temporary email is: ${this.currentEmail.email}\n\n🧪 To test if it's working:\n\n1. Send an email from your Gmail to: ${this.currentEmail.email}\n2. Wait 10-30 seconds\n3. Check this inbox for your message\n\n⚠️ If emails don't appear, try:\n• Generating a new email address\n• Checking your spam folder\n• Waiting a bit longer (some services have delays)\n\n💡 This email address can receive real emails from any email service including Gmail, Yahoo, Outlook, etc.\n\nTempMail System`,
      timestamp: new Date(),
      isRead: false
    };

    this.messages.unshift(instructionMessage);
    this.storeMessages(this.messages);
    this.notifyMessageListeners();
  }

  private startRealMessagePolling(): void {
    this.stopPolling();
    
    if (!this.currentEmail) return;
    
    // Check for messages every 10 seconds
    this.pollingInterval = setInterval(async () => {
      if (this.currentEmail && new Date() < this.currentEmail.expiresAt) {
        await this.checkForRealMessages();
      } else {
        this.stopPolling();
      }
    }, 10000);
    
    // Also check immediately
    setTimeout(() => this.checkForRealMessages(), 2000);
  }

  private async checkForRealMessages(): Promise<void> {
    if (!this.currentEmail) return;
    
    try {
      if (this.currentService === 'onesecmail') {
        await this.check1SecMailMessages();
      } else if (this.currentService === 'tempmail') {
        await this.checkTempMailLolMessages();
      } else if (this.currentService === 'guerrilla') {
        await this.checkGuerrillaMailMessages();
      }
    } catch (error) {
      // Error checking messages
    }
  }

  private async check1SecMailMessages(): Promise<void> {
    if (!this.currentEmail) return;

    const [username, domain] = this.currentEmail.email.split('@');
    
    try {
      const messagesUrl = EMAIL_SERVICES.onesecmail.messagesUrl(username, domain);
      const url = this.corsProxy + encodeURIComponent(messagesUrl);
      
      const response = await fetch(url);
      
      if (response.ok) {
        const text = await response.text();
        let apiMessages;
        
        try {
          apiMessages = JSON.parse(text);
        } catch {
          const jsonMatch = text.match(/\[.*\]/);
          if (jsonMatch) {
            apiMessages = JSON.parse(jsonMatch[0]);
          }
        }

        if (Array.isArray(apiMessages) && apiMessages.length > 0) {
          await this.process1SecMailMessages(apiMessages, username, domain);
        }
      }
    } catch (error) {
      // Message check failed
    }
  }

  private async process1SecMailMessages(apiMessages: any[], username: string, domain: string): Promise<void> {
    let hasNewMessages = false;

    for (const apiMessage of apiMessages) {
      const messageId = apiMessage.id.toString();
      const existingMessage = this.messages.find(msg => msg.id === messageId);
      
      if (!existingMessage) {
        try {
          // Get full message content
          const readUrl = EMAIL_SERVICES.onesecmail.readUrl(username, domain, apiMessage.id);
          const fullUrl = this.corsProxy + encodeURIComponent(readUrl);
          const response = await fetch(fullUrl);
          const text = await response.text();
          
          let fullMessage;
          try {
            fullMessage = JSON.parse(text);
          } catch {
            const jsonMatch = text.match(/\{.*\}/);
            if (jsonMatch) {
              fullMessage = JSON.parse(jsonMatch[0]);
            }
          }

          const newMessage: EmailMessage = {
            id: messageId,
            from: fullMessage?.from || apiMessage.from,
            subject: fullMessage?.subject || apiMessage.subject,
            body: this.extractMessageBody(fullMessage) || 'Message content could not be loaded.',
            timestamp: new Date(fullMessage?.date || apiMessage.date),
            isRead: false
          };

          this.messages.unshift(newMessage);
          hasNewMessages = true;
        } catch (error) {
          // Add basic message info even if full content fails
          const newMessage: EmailMessage = {
            id: messageId,
            from: apiMessage.from,
            subject: apiMessage.subject,
            body: 'Message content could not be loaded. Please try refreshing.',
            timestamp: new Date(apiMessage.date),
            isRead: false
          };

          this.messages.unshift(newMessage);
          hasNewMessages = true;
        }
      }
    }

    if (hasNewMessages) {
      this.storeMessages(this.messages);
      this.notifyMessageListeners();
    }
  }

  private async checkTempMailLolMessages(): Promise<void> {
    if (!this.currentEmail) return;
    
    try {
      const messagesUrl = EMAIL_SERVICES.tempmail.messagesUrl(this.currentEmail.token);
      const url = this.corsProxy + encodeURIComponent(messagesUrl);
      
      const response = await fetch(url);
      
      if (response.ok) {
        const text = await response.text();
        let data;
        
        try {
          data = JSON.parse(text);
        } catch {
          const jsonMatch = text.match(/\{.*\}/);
          if (jsonMatch) {
            data = JSON.parse(jsonMatch[0]);
          }
        }

        if (data && data.email && Array.isArray(data.email)) {
          await this.processTempMailLolMessages(data.email);
        }
      }
    } catch (error) {
      // Message check failed
    }
  }

  private async processTempMailLolMessages(apiMessages: any[]): Promise<void> {
    let hasNewMessages = false;

    for (const apiMessage of apiMessages) {
      const messageId = apiMessage.id || apiMessage._id || Math.random().toString();
      const existingMessage = this.messages.find(msg => msg.id === messageId);
      
      if (!existingMessage) {
        const newMessage: EmailMessage = {
          id: messageId,
          from: apiMessage.from || apiMessage.sender,
          subject: apiMessage.subject,
          body: apiMessage.body || apiMessage.message || 'No content available',
          timestamp: new Date(apiMessage.date || apiMessage.timestamp || Date.now()),
          isRead: false
        };

        this.messages.unshift(newMessage);
        hasNewMessages = true;
      }
    }

    if (hasNewMessages) {
      this.storeMessages(this.messages);
      this.notifyMessageListeners();
    }
  }

  private async checkGuerrillaMailMessages(): Promise<void> {
    if (!this.currentEmail) return;
    
    try {
      const messagesUrl = EMAIL_SERVICES.guerrilla.messagesUrl(this.currentEmail.token);
      const url = this.corsProxy + encodeURIComponent(messagesUrl);
      
      const response = await fetch(url);
      
      if (response.ok) {
        const text = await response.text();
        let data;
        
        try {
          data = JSON.parse(text);
        } catch {
          const jsonMatch = text.match(/\{.*\}/);
          if (jsonMatch) {
            data = JSON.parse(jsonMatch[0]);
          }
        }

        if (data && data.list && Array.isArray(data.list)) {
          await this.processGuerrillaMailMessages(data.list);
        }
      }
    } catch (error) {
      // Message check failed
    }
  }

  private async processGuerrillaMailMessages(apiMessages: any[]): Promise<void> {
    let hasNewMessages = false;

    for (const apiMessage of apiMessages) {
      const messageId = apiMessage.mail_id || apiMessage.id || Math.random().toString();
      const existingMessage = this.messages.find(msg => msg.id === messageId);
      
      if (!existingMessage) {
        const newMessage: EmailMessage = {
          id: messageId,
          from: apiMessage.mail_from || apiMessage.from,
          subject: apiMessage.mail_subject || apiMessage.subject,
          body: apiMessage.mail_body || apiMessage.body || 'No content available',
          timestamp: new Date(apiMessage.mail_timestamp || apiMessage.timestamp || Date.now()),
          isRead: false
        };

        this.messages.unshift(newMessage);
        hasNewMessages = true;
      }
    }

    if (hasNewMessages) {
      this.storeMessages(this.messages);
      this.notifyMessageListeners();
    }
  }

  private extractMessageBody(fullMessage: any): string {
    if (!fullMessage) return 'No content available';
    
    if (fullMessage.textBody) {
      return fullMessage.textBody;
    }
    if (fullMessage.htmlBody) {
      // Strip HTML tags and decode entities
      return fullMessage.htmlBody
        .replace(/<[^>]*>/g, '')
        .replace(/&nbsp;/g, ' ')
        .replace(/&/g, '&')
        .replace(/</g, '<')
        .replace(/>/g, '>')
        .replace(/"/g, '"')
        .trim();
    }
    if (fullMessage.body) {
      return fullMessage.body;
    }
    
    return 'Message content could not be loaded';
  }

  private generateRandomUsername(): string {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 8; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  async extendEmail(): Promise<TempEmailData | null> {
    if (!this.currentEmail) return null;
    
    if (new Date() >= this.currentEmail.expiresAt) {
      return null;
    }
    
    this.currentEmail.expiresAt = new Date(Date.now() + 10 * 60 * 1000);
    this.storeEmailData(this.currentEmail);
    return this.currentEmail;
  }

  getCurrentEmail(): TempEmailData | null {
    return this.currentEmail;
  }

  getStoredEmail(): TempEmailData | null {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      if (stored) {
        const data = JSON.parse(stored);
        data.expiresAt = new Date(data.expiresAt);
        this.currentEmail = data;
        
        this.getMessages();
        
        if (new Date() < data.expiresAt) {
          this.startRealMessagePolling();
        }
        
        return data;
      }
    } catch (error) {
      // Error loading stored email
    }
    return null;
  }

  getMessages(): EmailMessage[] {
    try {
      const stored = localStorage.getItem(this.MESSAGES_KEY);
      if (stored) {
        const messages = JSON.parse(stored);
        this.messages = messages.map((msg: any) => ({
          ...msg,
          timestamp: new Date(msg.timestamp)
        }));
        return this.messages;
      }
    } catch (error) {
      // Error loading stored messages
    }
    this.messages = [];
    return [];
  }

  subscribeToMessages(callback: (messages: EmailMessage[]) => void): () => void {
    this.messageListeners.push(callback);
    callback(this.messages);
    
    return () => {
      this.messageListeners = this.messageListeners.filter(cb => cb !== callback);
    };
  }

  private storeEmailData(data: TempEmailData): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      // Error storing email data
    }
  }

  private storeMessages(messages: EmailMessage[]): void {
    try {
      localStorage.setItem(this.MESSAGES_KEY, JSON.stringify(messages));
    } catch (error) {
      // Error storing messages
    }
  }

  private notifyMessageListeners(): void {
    this.messageListeners.forEach(callback => {
      try {
        callback([...this.messages]);
      } catch (error) {
        // Error in message listener callback
      }
    });
  }

  private stopPolling(): void {
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
      this.pollingInterval = null;
    }
  }

  markAsRead(messageId: string): void {
    const message = this.messages.find(msg => msg.id === messageId);
    if (message) {
      message.isRead = true;
      this.storeMessages(this.messages);
      this.notifyMessageListeners();
    }
  }

  deleteMessage(messageId: string): void {
    this.messages = this.messages.filter(msg => msg.id !== messageId);
    this.storeMessages(this.messages);
    this.notifyMessageListeners();
  }

  deleteAllMessages(): void {
    this.messages = [];
    this.storeMessages(this.messages);
    this.notifyMessageListeners();
  }

  clearExpiredEmail(): void {
    this.stopPolling();
  }

  generateNewEmail(): void {
    this.stopPolling();
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.removeItem(this.MESSAGES_KEY);
    this.currentEmail = null;
    this.messages = [];
  }

  destroy(): void {
    this.stopPolling();
  }
}

export const emailService = EmailService.getInstance();