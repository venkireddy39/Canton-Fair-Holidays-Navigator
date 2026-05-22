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
          <a href="#home" className="home-link">Home</a>
          <a href="#about-fair">Canton Fair</a>
          <a href="#timeline">Phases</a>
          <a href="#products">Products</a>
          <a href="#markets">Guangzhou Markets</a>
          <a href="#packages">Packages</a>
          <a href="#services">Our services</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button onClick={onBookNow} className="cta-button desktop-cta" style={{ border: 'none', cursor: 'pointer' }}>
            <PhoneCall size={18} />
            <span>Book Now</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-btn" aria-label="Toggle mobile menu" aria-expanded={mobileMenuOpen} onClick={toggleMenu}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-links">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about-fair" onClick={closeMenu}>Canton Fair</a>
          <a href="#timeline" onClick={closeMenu}>Phases</a>
          <a href="#products" onClick={closeMenu}>Products</a>
          <a href="#markets" onClick={closeMenu}>Guangzhou Markets</a>
          <a href="#visa" onClick={closeMenu}>Visa</a>
          <a href="#packages" onClick={closeMenu}>Packages</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
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
