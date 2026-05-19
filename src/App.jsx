import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutFair from './components/AboutFair';
import PackageOverview from './components/PackageOverview';
import Services from './components/Services';
import PhaseTimeline from './components/PhaseTimeline';
import Products from './components/Products';
import GuangzhouMarkets from './components/GuangzhouMarkets';
import FAQ from './components/FAQ';
import LocationMap from './components/LocationMap';
import WhyChooseUs from './components/WhyChooseUs';
import ContactCTA from './components/ContactCTA';
import Chatbot from './components/Chatbot';
import { AnimatePresence } from 'framer-motion';
import BookingModal from './components/BookingModal';
import InquiryModal from './components/InquiryModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [hasSubmittedInquiry, setHasSubmittedInquiry] = useState(false);

  // Initial 10-second auto-trigger on page visit
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isModalOpen) {
        setIsInquiryOpen(true);
      }
    }, 10000); // 10 seconds initial delay
    return () => clearTimeout(timer);
  }, []);

  const handleCloseInquiry = () => {
    setIsInquiryOpen(false);

    // If they closed without submitting, pop it up again after 5 seconds!
    if (!hasSubmittedInquiry) {
      setTimeout(() => {
        // Double check they haven't submitted or opened the booking modal in the meantime
        if (!hasSubmittedInquiry && !isModalOpen) {
          setIsInquiryOpen(true);
        }
      }, 5000); // 5 seconds repeat delay
    }
  };

  const handleInquirySubmitSuccess = () => {
    setHasSubmittedInquiry(true);
  };

  const handleOpenModal = (e) => {
    console.log("Opening Modal...");
    if (e && e.preventDefault) e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    console.log("Closing Modal...");
    setIsModalOpen(false);
  };

  return (
    <div className="app">
      <Header onBookNow={handleOpenModal} />
      <main>
        <Hero onBookNow={handleOpenModal} />
        <AboutFair />
        <PhaseTimeline />
        <Products />
        <GuangzhouMarkets />
        <PackageOverview onBookNow={handleOpenModal} />
        <Services />
        <WhyChooseUs />
        <LocationMap />
        <FAQ />
        <ContactCTA />
      </main>

      <footer style={{ padding: '20px 0', textAlign: 'center', background: 'var(--bg-dark)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <p style={{ color: 'var(--text-muted)' }}>
          &copy; {new Date().getFullYear()} Holidays Navigator. All Rights Reserved.
        </p>
      </footer>

      {/* Floating Chatbot (Left) */}
      <Chatbot />

      {/* Floating WhatsApp (Right) */}
      <FloatingWhatsApp />

      {/* Booking Modal */}
      {isModalOpen && (
        <BookingModal onClose={handleCloseModal} />
      )}

      {/* Inquiry Modal (10s Auto-trigger) */}
      <InquiryModal 
        isOpen={isInquiryOpen} 
        onClose={handleCloseInquiry} 
        onSubmitSuccess={handleInquirySubmitSuccess} 
      />
    </div>
  );
}

export default App;
