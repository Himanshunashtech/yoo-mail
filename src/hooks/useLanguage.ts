import { useState, useEffect } from 'react';
import { getTranslation, Translation } from '../utils/translations';

export const useLanguage = () => {
  const [currentLanguage, setCurrentLanguage] = useState<string>(() => {
    // Try to get language from localStorage first
    const saved = localStorage.getItem('yoomail_language');
    if (saved) return saved;
    
    // Then try to detect from browser
    const browserLang = navigator.language.split('-')[0];
    const supportedLanguages = ['en', 'es', 'fr', 'de', 'it', 'pt', 'ru', 'ja', 'zh', 'ar'];
    
    return supportedLanguages.includes(browserLang) ? browserLang : 'en';
  });

  const [translation, setTranslation] = useState<Translation>(() => 
    getTranslation(currentLanguage)
  );

  useEffect(() => {
    setTranslation(getTranslation(currentLanguage));
    localStorage.setItem('yoomail_language', currentLanguage);
    
    // Update document language and title
    document.documentElement.lang = currentLanguage;
    document.title = translation.title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', translation.description);
    }
  }, [currentLanguage, translation.title, translation.description]);

  const changeLanguage = (language: string) => {
    setCurrentLanguage(language);
  };

  return {
    currentLanguage,
    translation,
    changeLanguage
  };
};