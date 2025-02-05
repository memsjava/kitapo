import React, { createContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(localStorage.getItem('language') || 'en');

  const changeLanguage = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem('language', newLocale);
    // Dispatch a storage event to notify other components
    window.dispatchEvent(new Event('storage'));
  };

  useEffect(() => {
    const handleStorageChange = () => {
      const currentLanguage = localStorage.getItem('language');
      if (currentLanguage !== locale) {
        setLocale(currentLanguage || 'en');
      }
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [locale]);

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
