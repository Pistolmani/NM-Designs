import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ka' : 'en';
    i18n.changeLanguage(newLang);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="navbar-logo-mark">
            <img src="/logo.jpg" alt="" className="navbar-logo-image" />
          </span>
          <span className="navbar-logo-text">NM Designs</span>
        </Link>

        <nav className="navbar-desktop">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            {t('nav.home')}
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            {t('nav.projects')}
          </NavLink>
          <NavLink to="/studio" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            {t('nav.studio')}
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
            {t('nav.contact')}
          </NavLink>

          <div className="navbar-lang-toggle">
            <button onClick={toggleLanguage} className="lang-btn">
              {i18n.language === 'en' ? 'KA' : 'EN'}
            </button>
          </div>
        </nav>

        <button
          className="navbar-mobile-toggle"
          onClick={() => setIsOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="navbar-mobile-menu">
          <nav className="mobile-nav-links">
            <Link to="/" onClick={closeMobileMenu}>
              {t('nav.home')}
            </Link>
            <Link to="/projects" onClick={closeMobileMenu}>
              {t('nav.projects')}
            </Link>
            <Link to="/studio" onClick={closeMobileMenu}>
              {t('nav.studio')}
            </Link>
            <Link to="/contact" onClick={closeMobileMenu}>
              {t('nav.contact')}
            </Link>
            <button onClick={toggleLanguage} className="mobile-lang-btn">
              {i18n.language === 'en' ? t('nav.lang.switch') : 'English'}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
