import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';
import { GB, FR } from 'country-flag-icons/react/3x2';
import './LanguageSwitcher.css';

export const LanguageSwitcher = () => {
  const { locale, changeLanguage } = useContext(LanguageContext);

  return (
    <div className="language-switcher">
      <button 
        className={`lang-btn ${locale === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
        aria-label="Switch to English"
      >
        <GB title="English" className="flag-icon" />
      </button>
      <button 
        className={`lang-btn ${locale === 'fr' ? 'active' : ''}`}
        onClick={() => changeLanguage('fr')}
        aria-label="Switch to French"
      >
        <FR title="Français" className="flag-icon" />
      </button>
    </div>
  );
};
