import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Chatbot from './Chatbot';
import FloatingWhatsApp from './FloatingWhatsApp';
import BookingModal from './BookingModal';
import PopupForm from './PopupForm';

export default function Layout() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopupFormOpen, setIsPopupFormOpen] = useState(false);
  const [modalText, setModalText] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  useEffect(() => {
    const alreadySubmitted = localStorage.getItem('hasSubmittedPopup') === 'true';
    if (alreadySubmitted) return;

    const timer = setTimeout(() => {
      setIsPopupFormOpen(true);
    }, 25000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = (submitted = false) => {
    setIsPopupFormOpen(false);
    if (submitted) {
      localStorage.setItem('hasSubmittedPopup', 'true');
    } else {
      setTimeout(() => {
        const alreadySubmitted = localStorage.getItem('hasSubmittedPopup') === 'true';
        if (!alreadySubmitted) setIsPopupFormOpen(true);
      }, 20000);
    }
  };

  const handleOpenModal = (e, text, title) => {
    if (e && e.preventDefault) e.preventDefault();
    if (typeof text === 'string') {
      setModalText(text);
    } else {
      setModalText('');
    }
    if (typeof title === 'string') {
      setModalTitle(title);
    } else {
      setModalTitle('');
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalText('');
    setModalTitle('');
  };

  return (
    <div className="app">
      {/* Skip Navigation Link — Accessibility */}
      <a href="#main-content" className="skip-nav-link">Skip to main content</a>

      <Header onBookNow={handleOpenModal} />

      <main id="main-content" role="main">
        <Outlet context={{ onBookNow: handleOpenModal }} />
      </main>

      <footer role="contentinfo" aria-label="Site Footer" style={{
        background: 'var(--bg-dark)',
        borderTop: '1px solid var(--border-color)',
        padding: '60px 20px 30px',
        color: 'var(--text-muted)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'clamp(0.66rem, 2.4vw, 0.95rem)'
      }}>
        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
          gap: '40px',
          paddingBottom: '40px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          {/* Brand Info */}
          <div>
            <h3 style={{ color: 'var(--text-light)', fontSize: 'clamp(0.84rem, 3.0vw, 1.2rem)', fontWeight: '700', marginBottom: '20px' }}>Holidays Navigator</h3>
            <div style={{ marginTop: '20px', lineHeight: '1.8' }}>
              <p style={{ margin: '0 0 5px 0' }}>
                <strong> </strong> <a href="mailto: info.holidaysnavigator@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>info.holidaysnavigator@gmail.com</a><br />
              </p>
              <p style={{ margin: 0 }}>
                <strong> </strong>{' '}
                <a href="tel:+919533444455" style={{ color: 'inherit', textDecoration: 'none' }}>+91 95334 44455</a>
                {' '}&nbsp;{' '}
                <a href="tel:+919121388338" style={{ color: 'inherit', textDecoration: 'none' }}>+91 91213 88338</a><br />
              </p>

            </div>
            <p style={{ fontSize: 'clamp(0.59rem, 2.1vw, 0.85rem)', margin: 0 }}>
              <strong>Address:</strong> 4th Floor, Trendz Uptown, Kakatiya Hills, Madhapur, Hyderabad, Telangana 500033
            </p>
          </div>

          {/* Sourcing Hub Clusters */}
          <div>
            <h4 style={{ color: 'var(--text-light)', fontSize: 'clamp(0.73rem, 2.6vw, 1.05rem)', fontWeight: '700', marginBottom: '20px' }}>Sourcing Clusters</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="/canton-fair-2026-guide" style={{ color: 'inherit', textDecoration: 'none' }}>Canton Fair 2026 Guide</a></li>
              <li><a href="/best-hotels-near-canton-fair" style={{ color: 'inherit', textDecoration: 'none' }}>Hotels Near Pazhou Complex</a></li>
              <li><a href="/guangzhou-business-visa-guide" style={{ color: 'inherit', textDecoration: 'none' }}>China Business Visa Process</a></li>
              <li><a href="/how-to-register-for-canton-fair" style={{ color: 'inherit', textDecoration: 'none' }}>Buyer Badge Registration</a></li>
            </ul>
          </div>

          {/* Expert Travel Resources */}
          <div>
            <h4 style={{ color: 'var(--text-light)', fontSize: 'clamp(0.73rem, 2.6vw, 1.05rem)', fontWeight: '700', marginBottom: '20px' }}>Sourcing Insights</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Canton Fair Blog Hub</a></li>
              <li><a href="/blog/top-products-trending-at-canton-fair-2026" style={{ color: 'inherit', textDecoration: 'none' }}>2026 Sourcing Trends</a></li>
              <li><a href="/blog/canton-fair-travel-guide-indian-importers" style={{ color: 'inherit', textDecoration: 'none' }}>Indian Importers Guide</a></li>
              <li><a href="/blog/import-export-guide-china-india" style={{ color: 'inherit', textDecoration: 'none' }}>China-India Freight Guide</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 style={{ color: 'var(--text-light)', fontSize: 'clamp(0.73rem, 2.6vw, 1.05rem)', fontWeight: '700', marginBottom: '20px' }}>Support</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="/about-us" style={{ color: 'inherit', textDecoration: 'none' }}>About Us</a></li>
              <li><a href="/#contact" style={{ color: 'inherit', textDecoration: 'none' }}>Contact</a></li>
              <li><a href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a></li>
              <li><a href="/terms-and-conditions" style={{ color: 'inherit', textDecoration: 'none' }}>Terms &amp; Conditions</a></li>
            </ul>

          </div>
        </div>

        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingTop: '30px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '20px',
          fontSize: 'clamp(0.59rem, 2.1vw, 0.85rem)'
        }}>
          <p style={{ margin: 0 }}>
            &copy; {new Date().getFullYear()} Holidays Navigator. All Rights Reserved. Coordinated in collaboration with certified trade chambers.
          </p>
          <div style={{ display: 'flex', gap: '20px', marginRight: '230px' }}>
            <a href="https://www.instagram.com/holidaysnavigator?igsh=MWtuczJqenJtdGN2ZA==" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Instagram</a>
            <a href="https://www.linkedin.com/company/holidaysnavigator/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
            <a href="https://www.youtube.com/@holidaysnavigator" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>YouTube</a>
          </div>
        </div>
      </footer>

      <React.Suspense fallback={null}>
        {/* <Chatbot /> */}
        <FloatingWhatsApp />
        {isModalOpen && <BookingModal onClose={handleCloseModal} customText={modalText} customTitle={modalTitle} />}
      </React.Suspense>

      {isPopupFormOpen && <PopupForm onClose={handleClosePopup} />}
    </div>
  );
}
