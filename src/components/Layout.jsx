import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CursorGlow from './CursorGlow';

const Layout = ({ children }) => {
  return (
    <div className="site-shell">
      <CursorGlow />
      <div className="site-atmosphere" aria-hidden="true" />
      <Navbar />
      <main className="site-main">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
