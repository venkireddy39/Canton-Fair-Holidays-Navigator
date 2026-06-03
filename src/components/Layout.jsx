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
        fontSize: '0.95rem'
      }}>
        <div className="container" style={{ 
          maxWidth: '1200px', 
          margin: '0 auto', 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
          gap: '40px',
          paddingBottom: '40px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          {/* Brand Info */}
          <div>
            <h3 style={{ color: 'var(--text-light)', fontSize: '1.2rem', fontWeight: '700', marginBottom: '20px' }}>Holidays Navigator</h3>
            <p style={{ lineHeight: '1.6', marginBottom: '15px' }}>
              Your premium, certified corporate travel consultant specializing in trade delegation tours, China business visa compliance, and industrial sourcing packages for the Canton Fair.
            </p>
            <p style={{ fontSize: '0.85rem', margin: 0 }}>
              <strong>Address:</strong> Kakatiya Hills, Madhapur, Hyderabad, Telangana 500033
            </p>
          </div>

          {/* Sourcing Hub Clusters */}
          <div>
            <h4 style={{ color: 'var(--text-light)', fontSize: '1.05rem', fontWeight: '700', marginBottom: '20px' }}>Sourcing Clusters</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="/canton-fair-2026-guide" style={{ color: 'inherit', textDecoration: 'none' }}>Canton Fair 2026 Guide</a></li>
              <li><a href="/best-hotels-near-canton-fair" style={{ color: 'inherit', textDecoration: 'none' }}>Hotels Near Pazhou Complex</a></li>
              <li><a href="/guangzhou-business-visa-guide" style={{ color: 'inherit', textDecoration: 'none' }}>China Business Visa Process</a></li>
              <li><a href="/how-to-register-for-canton-fair" style={{ color: 'inherit', textDecoration: 'none' }}>Buyer Badge Registration</a></li>
            </ul>
          </div>

          {/* Expert Travel Resources */}
          <div>
            <h4 style={{ color: 'var(--text-light)', fontSize: '1.05rem', fontWeight: '700', marginBottom: '20px' }}>Sourcing Insights</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="/blog" style={{ color: 'inherit', textDecoration: 'none' }}>Canton Fair Blog Hub</a></li>
              <li><a href="/blog/top-products-trending-at-canton-fair-2026" style={{ color: 'inherit', textDecoration: 'none' }}>2026 Sourcing Trends</a></li>
              <li><a href="/blog/canton-fair-travel-guide-indian-importers" style={{ color: 'inherit', textDecoration: 'none' }}>Indian Importers Guide</a></li>
              <li><a href="/blog/import-export-guide-china-india" style={{ color: 'inherit', textDecoration: 'none' }}>China-India Freight Guide</a></li>
            </ul>
          </div>

          {/* Corporate Contact */}
          <div>
            <h4 style={{ color: 'var(--text-light)', fontSize: '1.05rem', fontWeight: '700', marginBottom: '20px' }}>Corporate Support</h4>
            <p style={{ lineHeight: '1.6', marginBottom: '10px' }}>
              Have questions regarding delegation package bookings? Chat with an expert instantly.
            </p>
            <p style={{ margin: '0 0 5px 0' }}>
              <strong>Email:</strong> info.holidaysnavigator@gmail.com
            </p>
            <p style={{ margin: 0 }}>
              <strong>Phone:</strong> +91 95334 44455
            </p>
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
          fontSize: '0.85rem'
        }}>
          <p style={{ margin: 0 }}>
            &copy; {new Date().getFullYear()} Holidays Navigator. All Rights Reserved. Coordinated in collaboration with certified trade chambers.
          </p>
          <div style={{ display: 'flex', gap: '20px', marginRight: '230px' }}>
            <a href="https://www.instagram.com/holidaysnavigator?igsh=MWtuczJqenJtdGN2ZA==" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>Instagram</a>
            <a href="https://www.linkedin.com/company/holidaysnavigator/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
          </div>
        </div>
      </footer>

      <React.Suspense fallback={null}>
        <Chatbot />
        <FloatingWhatsApp />
        {isModalOpen && <BookingModal onClose={handleCloseModal} customText={modalText} customTitle={modalTitle} />}
      </React.Suspense>

      {isPopupFormOpen && <PopupForm onClose={handleClosePopup} />}
    </div>
  );
}
