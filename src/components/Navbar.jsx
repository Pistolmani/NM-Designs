import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ka' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          NM Designs
        </Link>
        
        {/* Desktop Nav */}
        <nav className="navbar-desktop">
          <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t('nav.home')}</NavLink>
          <NavLink to="/projects" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t('nav.projects')}</NavLink>
          <NavLink to="/studio" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t('nav.studio')}</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t('nav.contact')}</NavLink>
          
          <div className="navbar-lang-toggle">
            <button onClick={toggleLanguage} className="lang-btn">
              {i18n.language === 'en' ? 'KA' : 'EN'}
            </button>
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <button className="navbar-mobile-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="navbar-mobile-menu">
           <nav className="mobile-nav-links">
              <Link to="/">{t('nav.home')}</Link>
              <Link to="/projects">{t('nav.projects')}</Link>
              <Link to="/studio">{t('nav.studio')}</Link>
              <Link to="/contact">{t('nav.contact')}</Link>
              <button onClick={toggleLanguage} className="mobile-lang-btn">
                {i18n.language === 'en' ? 'ქართული' : 'English'}
              </button>
           </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
