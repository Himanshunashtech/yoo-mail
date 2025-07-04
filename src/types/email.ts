export interface EmailMessage {
  id: string;
  from: string;
  subject: string;
  body: string;
  timestamp: Date;
  isRead: boolean;
}

export interface TempEmailData {
  email: string;
  domain: string;
  token: string;
  expiresAt: Date;
}

export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  order_id: string;
  handler: (response: any) => void;
  prefill: {
    email: string;
  };
  theme: {
    color: string;
  };
}

// Extend window object for AdSense
declare global {
  interface Window {
    adsbygoogle: any[];
  }
}