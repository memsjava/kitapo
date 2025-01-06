import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Dashboard } from './components/Dashboard';
import { Market } from './components/Market';
import { Transactions } from './components/Transactions';
import { Settings } from './components/Settings';
import { Home } from './components/Home';

function App() {
  return (
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
  );
}

export default App;
