import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutFair from './components/AboutFair';
import PopupForm from './components/PopupForm';
import { AnimatePresence } from 'framer-motion';
import './App.css';

// Lazy loaded components for performance optimization (Code Splitting)
const PackageOverview = React.lazy(() => import('./components/PackageOverview'));
const Services = React.lazy(() => import('./components/Services'));
const PhaseTimeline = React.lazy(() => import('./components/PhaseTimeline'));
const Products = React.lazy(() => import('./components/Products'));
const GuangzhouMarkets = React.lazy(() => import('./components/GuangzhouMarkets'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const LocationMap = React.lazy(() => import('./components/LocationMap'));
const WhyChooseUs = React.lazy(() => import('./components/WhyChooseUs'));
const ContactCTA = React.lazy(() => import('./components/ContactCTA'));
const Chatbot = React.lazy(() => import('./components/Chatbot'));
const BookingModal = React.lazy(() => import('./components/BookingModal'));
const FloatingWhatsApp = React.lazy(() => import('./components/FloatingWhatsApp'));
// PopupForm is now eagerly imported above to avoid lazy-loading issues

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopupFormOpen, setIsPopupFormOpen] = useState(false);

  useEffect(() => {
    const alreadySubmitted = localStorage.getItem('hasSubmittedPopup') === 'true';
    console.log("App mounted. alreadySubmitted:", alreadySubmitted);

    if (alreadySubmitted) {
      console.log("Popup was already submitted previously. It will not show again.");
      return;
    }

    console.log("Setting timer for popup... waiting 25 seconds.");
    const timer = setTimeout(() => {
      console.log("Timer fired! Setting isPopupFormOpen to true");
      setIsPopupFormOpen(true);
    }, 25000); // 25 seconds for first time

    return () => {
      console.log("Clearing popup timer");
      clearTimeout(timer);
    };
  }, []);

  const handleClosePopup = (submitted = false) => {
    setIsPopupFormOpen(false);
    if (submitted) {
      localStorage.setItem('hasSubmittedPopup', 'true');
    } else {
      // Re-trigger popup after 20 seconds if closed without submitting
      setTimeout(() => {
        const alreadySubmitted = localStorage.getItem('hasSubmittedPopup') === 'true';
        if (!alreadySubmitted) {
          setIsPopupFormOpen(true);
        }
      }, 20000);
    }
  };

  const handleOpenModal = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <Header onBookNow={handleOpenModal} />
      <main>
        <Hero onBookNow={handleOpenModal} />
        <AboutFair />

        <React.Suspense fallback={<div style={{ padding: '50px', textAlign: 'center', color: 'var(--text-light)' }}>Loading...</div>}>
          <PhaseTimeline onBookNow={handleOpenModal} />
          <Products />
          <GuangzhouMarkets />
          <PackageOverview onBookNow={handleOpenModal} />
          <Services />
          <WhyChooseUs />
          <FAQ />
          <LocationMap />
          <ContactCTA />
        </React.Suspense>
      </main>

      <footer style={{ padding: '20px 0', textAlign: 'center', background: 'var(--bg-dark)', borderTop: '1px solid var(--border-color)' }}>
        <p style={{ color: 'var(--text-muted)' }}>
          &copy; {new Date().getFullYear()} Holidays Navigator. All Rights Reserved.
        </p>
      </footer>

      <React.Suspense fallback={null}>
        {/* Floating Chatbot (Left) */}
        <Chatbot />

        {/* Floating WhatsApp (Right) */}
        <FloatingWhatsApp />

        {/* Booking Modal */}
        {isModalOpen && (
          <BookingModal onClose={handleCloseModal} />
        )}

      </React.Suspense>

      {/* Popup Form — rendered outside Suspense to avoid lazy-load issues */}
      {isPopupFormOpen && (
        <PopupForm onClose={handleClosePopup} />
      )}
    </div>
  );
}

export default App;
