import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <h3>NM Designs</h3>
          <p>{t('home.hero')}</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h4>Social</h4>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer">Pinterest</a>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <a href="mailto:hello@nmdesigns.com">hello@nmdesigns.com</a>
            {/* The WhatsApp link is included but placed discretely in the footer instead of a primary CTA floating button */}
            <a href="https://wa.me/something" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {currentYear} NM Designs. All rights reserved.</p>
        <p>Tbilisi, Georgia</p>
      </div>
    </footer>
  );
};

export default Footer;
