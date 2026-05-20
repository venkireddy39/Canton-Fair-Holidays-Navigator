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
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme : 'dark';
  });

  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
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
      <Header onBookNow={handleOpenModal} theme={theme} onToggleTheme={handleToggleTheme} />
      <main>
        <Hero onBookNow={handleOpenModal} />
        <AboutFair />
        <PhaseTimeline onBookNow={handleOpenModal} />
        <Products />
        <GuangzhouMarkets />
        <PackageOverview onBookNow={handleOpenModal} />
        <Services />
        <WhyChooseUs />
        <FAQ />
        <LocationMap />
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
    </div>
  );
}

export default App;
