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
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <img src="/logo.jpeg" alt="Holidays Navigator Logo" style={{ height: '40px', width: 'auto' }} />
          <h1 style={{ fontSize: '24px', margin: 0, display: 'flex', flexDirection: 'column' }}>
            Holidays Navigator
            <span style={{ fontSize: '14px', fontFamily: 'var(--font-sans)', color: 'var(--accent-gold)' }}>Premium Travel Experiences</span>
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="nav-links desktop-nav">
          <a href="#overview">Overview</a>
          <a href="#services">Includes</a>
          <a href="#timeline">Phases</a>

          <a href="#why-us">Why Us</a>
          <a href="#location">Location</a>
        </nav>

        <button onClick={onBookNow} className="cta-button desktop-cta" style={{ border: 'none', cursor: 'pointer' }}>
          <PhoneCall size={18} />
          <span>Book Now</span>
        </button>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {mobileMenuOpen ? <X size={28} color="white" /> : <Menu size={28} color="white" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          <a href="#overview" onClick={closeMenu}>Overview</a>
          <a href="#services" onClick={closeMenu}>Includes</a>
          <a href="#timeline" onClick={closeMenu}>Phases</a>
          <a href="#location" onClick={closeMenu}>Location</a>
          <a href="#why-us" onClick={closeMenu}>Why Us</a>
          <button 
            onClick={(e) => {
              closeMenu();
              onBookNow(e);
            }} 
            className="mobile-cta-button"
            style={{ border: 'none', cursor: 'pointer' }}
          >
            <PhoneCall size={18} />
            Book Now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
