import React, { useState, useEffect } from 'react';
import { PhoneCall, Menu, X } from 'lucide-react';
import './Header.css'; // Let's import specific Header styles for the menu

const Header = ({ onBookNow }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`} role="banner" aria-label="Site Header">
      <div className="header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo logo-container">
          <img
            src={scrolled ? "/nobackgrounddark.png" : "/nobackgroundlight.png"}
            alt="Holidays Navigator Logo"
            title="Holidays Navigator"
            className="logo-img"
            fetchpriority="high"
            width="200"
            height="50"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="nav-links desktop-nav">
          <a href="/#home" className="home-link">Home</a>
          <a href="/canton-fair-2026-guide">Canton Fair</a>
          <a href="/canton-fair-phase-1-products">Products</a>
          <a href="/#packages">Packages</a>
          <a href="/#services">Services</a>
          <a href="/blog">Blog</a>
          <a href="/#faq">FAQ</a>
          <a href="/#contact">Contact</a>
        </nav>

        <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button onClick={onBookNow} className="cta-button desktop-cta" style={{ border: 'none', cursor: 'pointer' }}>
            <PhoneCall size={18} />
            <span>Get Free Quote</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" aria-label="Toggle mobile menu" aria-expanded={mobileMenuOpen} onClick={toggleMenu}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Backdrop */}
      <div
        className={`mobile-menu-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          <a href="/#home" onClick={closeMenu}>Home</a>
          <a href="/canton-fair-2026-guide" onClick={closeMenu}>Canton Fair</a>
          <a href="/canton-fair-phase-1-products" onClick={closeMenu}>Products</a>
          <a href="/guangzhou-business-visa-guide" onClick={closeMenu}>Visa</a>
          <a href="/#packages" onClick={closeMenu}>Packages</a>
          <a href="/blog" onClick={closeMenu}>Blog</a>
          <a href="/#faq" onClick={closeMenu}>FAQ</a>
          <a href="/#contact" onClick={closeMenu}>Contact</a>
          <button
            onClick={(e) => {
              closeMenu();
              onBookNow(e);
            }}
            className="mobile-cta-button"
            style={{ border: 'none', cursor: 'pointer', marginTop: '10px' }}
          >
            <PhoneCall size={18} />
            Get Quote
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
