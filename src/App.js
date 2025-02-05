import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Dashboard } from './components/Dashboard';
import { Market } from './components/Market';
import { Transactions } from './components/Transactions';
import { Settings } from './components/Settings';
import { Home } from './components/Home';
import { LanguageProvider } from './context/LanguageContext';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import enMessages from './translations/en.json';
import frMessages from './translations/fr.json';

const messages = {
  en: enMessages,
  fr: frMessages
};

function App() {
  const [currentLocale, setCurrentLocale] = React.useState(localStorage.getItem('language') || 'en');

  React.useEffect(() => {
    const handleStorageChange = () => {
      setCurrentLocale(localStorage.getItem('language') || 'en');
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <LanguageProvider>
      <IntlProvider
        messages={messages[currentLocale]}
        locale={currentLocale}
        defaultLocale="en"
      >
        <Router>
          <div className="App">
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Dashboard />} />
              <Route path="/market" element={<Market />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/dashboard" element={<Navigate to="/portfolio" replace />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </IntlProvider>
    </LanguageProvider>
  );
}

export default App;
