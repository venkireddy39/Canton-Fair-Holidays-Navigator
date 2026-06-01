import React, { useState, useEffect } from 'react';
import { PhoneCall, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const pageNames = {
  '/': 'Home',
  '/canton-fair-2026-guide': 'Canton Fair 2026 Guide',
  '/canton-fair-phase-1-products': 'Phase 1 Products',
  '/canton-fair-phase-2-products': 'Phase 2 Products',
  '/canton-fair-phase-3-products': 'Phase 3 Products',
  '/best-hotels-near-canton-fair': 'Hotels Near Canton Fair',
  '/guangzhou-business-visa-guide': 'Guangzhou Visa Guide',
  '/canton-fair-airport-transfer': 'Airport Transfer',
  '/how-to-register-for-canton-fair': 'Registration Guide',
  '/canton-fair-from-india': 'Canton Fair From India',
  '/canton-fair-from-uae': 'Canton Fair From UAE',
  '/canton-fair-from-africa': 'Canton Fair From Africa',
  '/blog': 'Blog'
};

const Header = ({ onBookNow }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const currentPage =
    location.pathname.startsWith('/blog/') ? 'Blog Article' : pageNames[location.pathname];

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" className="logo logo-container" aria-label="Holidays Navigator Home">
            <img
              src={scrolled ? "/nobackgrounddark.png" : "/nobackgroundlight.png"}
              alt="Holidays Navigator travel agency logo"
              title="Holidays Navigator"
              className="logo-img"
              fetchPriority="high"
              width="200"
              height="50"
            />
          </Link>

          <nav className="nav-links desktop-nav" aria-label="Main navigation">
            <Link to="/">Home</Link>
            <Link to="/canton-fair-2026-guide">Canton Fair</Link>
            <Link to="/canton-fair-phase-1-products">Phase 1</Link>
            <Link to="/canton-fair-phase-2-products">Phase 2</Link>
            <Link to="/canton-fair-phase-3-products">Phase 3</Link>
            <Link to="/guangzhou-business-visa-guide">Visa</Link>
            <Link to="/best-hotels-near-canton-fair">Hotels</Link>
            <Link to="/blog">Blog</Link>
          </nav>

          <div className="header-actions" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button onClick={onBookNow} className="cta-button desktop-cta" style={{ border: 'none', cursor: 'pointer' }}>
              <PhoneCall size={18} />
              <span>Get Free Quote</span>
            </button>
          </div>

          <button
            className="mobile-menu-btn"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <div className={`mobile-menu-backdrop ${mobileMenuOpen ? 'open' : ''}`} onClick={closeMenu} />

        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav-links" aria-label="Mobile navigation">
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/canton-fair-2026-guide" onClick={closeMenu}>Canton Fair Guide</Link>
            <Link to="/canton-fair-phase-1-products" onClick={closeMenu}>Phase 1 Products</Link>
            <Link to="/canton-fair-phase-2-products" onClick={closeMenu}>Phase 2 Products</Link>
            <Link to="/canton-fair-phase-3-products" onClick={closeMenu}>Phase 3 Products</Link>
            <Link to="/guangzhou-business-visa-guide" onClick={closeMenu}>Visa Guide</Link>
            <Link to="/best-hotels-near-canton-fair" onClick={closeMenu}>Hotels</Link>
            <Link to="/canton-fair-airport-transfer" onClick={closeMenu}>Airport Transfer</Link>
            <Link to="/how-to-register-for-canton-fair" onClick={closeMenu}>Registration Guide</Link>
            <Link to="/blog" onClick={closeMenu}>Blog</Link>

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

      {location.pathname !== '/' && currentPage && (
        <nav
          aria-label="Breadcrumb"
          className="breadcrumb"
          style={{
            padding: '95px 20px 10px',
            maxWidth: '1200px',
            margin: '0 auto',
            fontSize: '0.9rem'
          }}
        >
          <Link to="/">Home</Link>
          <span> / </span>
          <span>{currentPage}</span>
        </nav>
      )}
    </>
  );
};

export default Header;