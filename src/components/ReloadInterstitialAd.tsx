import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

interface ReloadInterstitialAdProps {
  onClose: () => void;
}

export const ReloadInterstitialAd: React.FC<ReloadInterstitialAdProps> = ({ onClose }) => {
  const [countdown, setCountdown] = useState(5);
  const [canClose, setCanClose] = useState(false);

  useEffect(() => {
    // Initialize AdSense interstitial ad
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      // Ad error handled silently
    }

    // Countdown timer
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          setCanClose(true);
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]">
      <div className="relative w-full h-full max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden">
        {/* Close button - only shows after countdown */}
        {canClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        )}

        {/* Countdown display */}
        {!canClose && (
          <div className="absolute top-4 right-4 z-10 bg-blue-600 text-white px-4 py-2 rounded-full font-semibold">
            {countdown}s
          </div>
        )}

        {/* Ad content area */}
        <div className="w-full h-full flex items-center justify-center">
          {/* AdSense Interstitial Ad */}
          <ins
            className="adsbygoogle"
            style={{ 
              display: 'block',
              width: '100%',
              height: '100%',
              minHeight: '400px'
            }}
            data-ad-client="ca-pub-YOUR-ADSENSE-ID"
            data-ad-slot="YOUR-INTERSTITIAL-AD-SLOT"
            data-ad-format="interstitial"
            data-full-width-responsive="true"
          />
          
          {/* Fallback content if ad doesn't load */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl font-bold">Ad</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Advertisement</h2>
              <p className="text-gray-600 mb-4">
                This helps us keep Yoo! mail free for everyone
              </p>
              {!canClose && (
                <p className="text-sm text-gray-500">
                  You can close this in {countdown} seconds
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};