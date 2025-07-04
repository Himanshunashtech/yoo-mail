import React, { useEffect } from 'react';

interface AdSenseAdProps {
  adSlot: string;
  adFormat?: string;
  fullWidthResponsive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const AdSenseAd: React.FC<AdSenseAdProps> = ({
  adSlot,
  adFormat = 'auto',
  fullWidthResponsive = true,
  className = '',
  style = {}
}) => {
  useEffect(() => {
    try {
      // Push the ad to AdSense
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.log('AdSense error:', error);
    }
  }, []);

  return (
    <div className={`adsense-container ${className}`} style={style}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-YOUR-ADSENSE-ID"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  );
};

// Interstitial Ad Component (Full-screen ad on reload)
export const InterstitialAd: React.FC = () => {
  useEffect(() => {
    try {
      // Push interstitial ad - removed page-level ads config to prevent duplicate initialization
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.log('Interstitial ad error:', error);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-YOUR-ADSENSE-ID"
      data-ad-slot="YOUR-INTERSTITIAL-AD-SLOT"
      data-ad-format="interstitial"
      data-full-width-responsive="true"
    />
  );
};

// Banner Ad Component
export const BannerAd: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <AdSenseAd
      adSlot="YOUR-BANNER-AD-SLOT"
      adFormat="horizontal"
      className={className}
      style={{ minHeight: '90px' }}
    />
  );
};

// Square Ad Component
export const SquareAd: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <AdSenseAd
      adSlot="YOUR-SQUARE-AD-SLOT"
      adFormat="rectangle"
      className={className}
      style={{ minHeight: '250px', minWidth: '300px' }}
    />
  );
};

// Sidebar Ad Component
export const SidebarAd: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <AdSenseAd
      adSlot="YOUR-SIDEBAR-AD-SLOT"
      adFormat="vertical"
      className={className}
      style={{ minHeight: '600px', minWidth: '160px' }}
    />
  );
};