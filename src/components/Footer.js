import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Github } from 'react-bootstrap-icons';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-content">
          <div className="footer-section">
            <h5>KitaPo</h5>
            <p className="text-muted">
              Track your crypto portfolio with real-time data and advanced analytics.
            </p>
            <div className="social-links">
              <a href="https://twitter.com/kitapo" target="_blank" rel="noopener noreferrer">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com/company/kitapo" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/kitapo" target="_blank" rel="noopener noreferrer">
                <Github size={20} />
              </a>
              <a href="https://facebook.com/kitapo" target="_blank" rel="noopener noreferrer">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/market">Market</Link></li>
              <li><Link to="/transactions">Transactions</Link></li>
              <li><Link to="/settings">Settings</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h5>Resources</h5>
            <ul className="footer-links">
              <li><a href="/help">Help Center</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/api">API Documentation</a></li>
              <li><a href="/status">System Status</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h5>Legal</h5>
            <ul className="footer-links">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/security">Security</a></li>
              <li><a href="/compliance">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} KitaPo. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
