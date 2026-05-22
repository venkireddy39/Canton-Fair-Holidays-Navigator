import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutFair from './components/AboutFair';
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
const PopupForm = React.lazy(() => import('./components/PopupForm'));
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPopupFormOpen, setIsPopupFormOpen] = useState(false);

  useEffect(() => {
    // For testing purposes, you can uncomment the line below to reset the popup state every time you refresh:
    // localStorage.removeItem('hasSubmittedPopup');

    const alreadySubmitted = localStorage.getItem('hasSubmittedPopup') === 'true';
    console.log("App mounted. alreadySubmitted:", alreadySubmitted);
    
    if (alreadySubmitted) {
      console.log("Popup was already submitted previously. It will not show again unless localStorage is cleared.");
      return;
    }

    console.log("Setting timer for popup... waiting 5 seconds.");
    const timer = setTimeout(() => {
      console.log("Timer fired! Setting isPopupFormOpen to true");
      setIsPopupFormOpen(true);
    }, 5000); // Reduced to 5 seconds for easier testing

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
      // Re-trigger popup after 10 seconds if closed without submitting
      setTimeout(() => {
        const alreadySubmitted = localStorage.getItem('hasSubmittedPopup') === 'true';
        if (!alreadySubmitted) {
          setIsPopupFormOpen(true);
        }
      }, 10000);
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

        {/* 15 Second Popup Form */}
        {isPopupFormOpen && (
          <PopupForm onClose={handleClosePopup} />
        )}
      </React.Suspense>
    </div>
  );
}

export default App;
