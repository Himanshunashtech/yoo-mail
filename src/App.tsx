import React, { useState, useEffect } from 'react';
import { Mail, Clock, Copy, Check, RefreshCw, Plus, Inbox } from 'lucide-react';
import { emailService } from './services/emailService';
import { TempEmailData, EmailMessage } from './types/email';
import { EmailViewer } from './components/EmailViewer';
import { EmailDashboard } from './components/EmailDashboard';
import { LandingPage } from './components/LandingPage';
// import { ReloadInterstitialAd } from './components/ReloadInterstitialAd';
// import { BannerAd } from './components/AdSenseAd';
import { useLanguage } from './hooks/useLanguage';

function App() {
  const { currentLanguage, translation, changeLanguage } = useLanguage();
  const [showLanding, setShowLanding] = useState(true);
  const [showDashboard, setShowDashboard] = useState(false);
  const [showInterstitialAd, setShowInterstitialAd] = useState(false);
  const [emailData, setEmailData] = useState<TempEmailData | null>(null);
  const [messages, setMessages] = useState<EmailMessage[]>([]);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const [extending, setExtending] = useState(false);
  const [generating, setGenerating] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState<EmailMessage | null>(null);

  useEffect(() => {
    // Show interstitial ad on app reload/load
    const hasShownAdThisSession = sessionStorage.getItem('interstitial_ad_shown');
    if (!hasShownAdThisSession) {
      setShowInterstitialAd(true);
      sessionStorage.setItem('interstitial_ad_shown', 'true');
    }

    // Check if user has an existing email session
    const existingEmail = emailService.getStoredEmail();
    if (existingEmail && new Date() < existingEmail.expiresAt) {
      setShowLanding(false);
      setEmailData(existingEmail);
      setMessages(emailService.getMessages());
    }
    
    // Cleanup on unmount
    return () => {
      emailService.destroy();
    };
  }, []);

  useEffect(() => {
    if (!showLanding) {
      const unsubscribe = emailService.subscribeToMessages(setMessages);
      return unsubscribe;
    }
  }, [showLanding]);

  // Timer effect
  useEffect(() => {
    if (!emailData || showLanding) return;

    const updateTimer = () => {
      const now = new Date().getTime();
      const expiry = emailData.expiresAt.getTime();
      const remaining = Math.max(0, expiry - now);
      setTimeLeft(remaining);

      // When timer reaches zero, clear the email and messages
      if (remaining === 0) {
        emailService.clearExpiredEmail();
        setMessages([]);
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [emailData, showLanding]);

  const handleGetStarted = async () => {
    setLoading(true);
    setShowLanding(false);
    
    try {
      // First, try to load existing email from storage
      const existingEmail = emailService.getStoredEmail();
      if (existingEmail && new Date() < existingEmail.expiresAt) {
        setEmailData(existingEmail);
        setMessages(emailService.getMessages());
      } else {
        // Only generate new email if no valid existing email
        const newEmailData = await emailService.generateTempEmail();
        setEmailData(newEmailData);
      }
    } catch (error) {
      // Error handled silently
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateNewEmail = async () => {
    setGenerating(true);
    try {
      // Clear existing data explicitly
      emailService.generateNewEmail();
      setMessages([]);
      
      // Generate new email
      const newEmailData = await emailService.generateTempEmail();
      setEmailData(newEmailData);
      setCopied(false); // Reset copy state
    } catch (error) {
      // Error handled silently
    } finally {
      setTimeout(() => setGenerating(false), 1000);
    }
  };

  const handleExtendEmail = async () => {
    // Don't allow extending if email is expired
    if (timeLeft <= 0) return;
    
    setExtending(true);
    try {
      const extendedEmail = await emailService.extendEmail();
      if (extendedEmail) {
        setEmailData(extendedEmail);
      }
    } catch (error) {
      // Error handled silently
    } finally {
      setTimeout(() => setExtending(false), 1000);
    }
  };

  const handleCopyEmail = async () => {
    if (emailData?.email && timeLeft > 0) {
      await navigator.clipboard.writeText(emailData.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleMarkAsRead = (messageId: string) => {
    emailService.markAsRead(messageId);
  };

  const handleMessageClick = (message: EmailMessage) => {
    setSelectedMessage(message);
    handleMarkAsRead(message.id);
  };

  const handleDeleteMessage = (messageId: string) => {
    emailService.deleteMessage(messageId);
    setMessages(prevMessages => prevMessages.filter(msg => msg.id !== messageId));
  };

  const handleDeleteAllMessages = () => {
    if (confirm(translation.deleteAll + '?')) {
      emailService.deleteAllMessages();
      setMessages([]);
    }
  };

  const handleBackToLanding = () => {
    setShowLanding(true);
  };

  const handleOpenInbox = () => {
    setShowDashboard(true);
  };

  const handleCloseDashboard = () => {
    setShowDashboard(false);
  };

  const formatTime = (ms: number): string => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Show interstitial ad on reload
  // if (showInterstitialAd) {
  //   return (
  //     <ReloadInterstitialAd onClose={() => setShowInterstitialAd(false)} />
  //   );
  // }

  if (showLanding) {
    return (
      <LandingPage 
        onGetStarted={handleGetStarted} 
        translation={translation}
        currentLanguage={currentLanguage}
        onLanguageChange={changeLanguage}
      />
    );
  }

  if (showDashboard) {
    return (
      <EmailDashboard
        emailData={emailData}
        messages={messages}
        timeLeft={timeLeft}
        onClose={handleCloseDashboard}
        onDeleteMessage={handleDeleteMessage}
        onDeleteAllMessages={handleDeleteAllMessages}
        onMarkAsRead={handleMarkAsRead}
        onExtendEmail={handleExtendEmail}
        onGenerateNewEmail={handleGenerateNewEmail}
        extending={extending}
        generating={generating}
        translation={translation}
      />
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-6"></div>
          <p className="text-2xl font-semibold text-gray-700 mb-2">Setting up your temporary email...</p>
          <p className="text-gray-500">This will only take a moment</p>
        </div>
      </div>
    );
  }

  const isExpired = timeLeft <= 0;
  const isLowTime = timeLeft <= 120000; // Less than 2 minutes

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-3 rounded-xl">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Yoo! mail</h1>
            </div>
          </div>
          <p className="text-lg text-gray-600">
            {isExpired ? 'Your temporary email has expired' : 'Your temporary email is ready to use'}
          </p>
          <button
            onClick={handleBackToLanding}
            className="mt-2 text-blue-600 hover:text-blue-700 text-sm underline"
          >
            {translation.backToHomepage}
          </button>
        </div>

        {/* Top Banner Ad */}
          {/* <div className="mb-6">
            <BannerAd className="w-full flex justify-center" />
          </div> */}

        {/* Email Display */}
        <div className={`bg-white rounded-2xl shadow-xl p-8 mb-6 border ${
          isExpired ? 'border-red-200 bg-red-50' : 'border-gray-100'
        }`}>
          <div className="text-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              {isExpired ? translation.expiredEmail : translation.yourTempEmail}
            </h2>
            <div className={`rounded-xl p-6 mb-4 border ${
              isExpired 
                ? 'bg-red-100 border-red-200' 
                : 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-100'
            }`}>
              <p className={`text-2xl md:text-3xl font-bold break-all mb-2 ${
                isExpired ? 'text-red-700 line-through' : 'text-gray-900'
              }`}>
                {emailData?.email || 'No active email'}
              </p>
              <p className={`text-sm ${
                isExpired ? 'text-red-600' : 'text-gray-500'
              }`}>
                {isExpired 
                  ? translation.emailExpired
                  : `${translation.validUntil} ${emailData?.expiresAt.toLocaleTimeString()}`
                }
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleCopyEmail}
                disabled={isExpired}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-200 font-medium ${
                  isExpired
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : copied 
                      ? 'bg-green-100 text-green-700 border border-green-200' 
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105'
                }`}
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                {isExpired ? 'Email Expired' : copied ? translation.copied : translation.copyEmailAddress}
              </button>
              
              <button
                onClick={handleGenerateNewEmail}
                disabled={generating}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-200 font-medium ${
                  generating 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-green-600 text-white hover:bg-green-700 hover:shadow-lg hover:scale-105'
                }`}
              >
                <Plus className={`w-5 h-5 ${generating ? 'animate-spin' : ''}`} />
                {generating ? translation.generating : translation.generateNewEmail}
              </button>

              <button
                onClick={handleOpenInbox}
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 hover:shadow-lg hover:scale-105 transition-all duration-200 font-medium"
              >
                <Inbox className="w-5 h-5" />
                {translation.openInbox} ({messages.length})
              </button>
            </div>
          </div>
        </div>

        {/* Middle Banner Ad */}
        {/* <div className="mb-6">
          <BannerAd className="w-full flex justify-center" />
        </div> */}

        {/* Timer */}
        <div className={`bg-white rounded-2xl shadow-xl p-6 mb-6 border ${
          isExpired ? 'border-red-200 bg-red-50' : isLowTime ? 'border-yellow-200 bg-yellow-50' : 'border-gray-100'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Clock className={`w-6 h-6 ${
                isExpired ? 'text-red-600' : isLowTime ? 'text-yellow-600' : 'text-blue-600'
              }`} />
              <div>
                <h3 className={`font-semibold ${
                  isExpired ? 'text-red-900' : isLowTime ? 'text-yellow-900' : 'text-gray-900'
                }`}>
                  {isExpired ? 'Email Expired' : translation.timeRemaining}
                </h3>
                <p className={`text-3xl font-mono font-bold ${
                  isExpired ? 'text-red-700' : isLowTime ? 'text-yellow-700' : 'text-blue-700'
                }`}>
                  {isExpired ? '0:00' : formatTime(timeLeft)}
                </p>
              </div>
            </div>
            
            <button
              onClick={handleExtendEmail}
              disabled={extending || isExpired}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-200 font-medium ${
                extending || isExpired
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg hover:scale-105'
              }`}
            >
              <RefreshCw className={`w-5 h-5 ${extending ? 'animate-spin' : ''}`} />
              {isExpired ? translation.cannotExtend : extending ? translation.extending : translation.extend}
            </button>
          </div>
          
          {isExpired && (
            <div className="mt-4 p-4 bg-red-100 rounded-xl border border-red-200">
              <p className="text-red-800 font-medium mb-2">
                ⚠️ This email has expired and can no longer receive messages
              </p>
              <p className="text-red-700">
                Click "Generate New Email" to get a fresh address and start receiving emails again.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500">
          <p>{translation.footerText}</p>
        </div>
      </div>

      {/* Email Viewer Modal */}
      {selectedMessage && (
        <EmailViewer
          message={selectedMessage}
          onClose={() => setSelectedMessage(null)}
          onDelete={handleDeleteMessage}
          translation={translation}
        />
      )}
    </div>
  );
}

export default App;