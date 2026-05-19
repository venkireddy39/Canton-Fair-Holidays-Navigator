import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Hero = ({ onBookNow }) => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-subtitle">Entrepreneur Travel Package</span>
          <h1>Canton Fair 140 <br /><span className="gradient-text">2026 Edition</span></h1>
          <p>Join the world's largest trade fair. Experience seamless business travel with our all-inclusive premium package designed exclusively for entrepreneurs and business professionals.</p>

          <div className="hero-buttons">
            <a href="#packages" className="cta-button" style={{ padding: '16px 32px', fontSize: '18px' }}>
              View Package Details
            </a>
            <button
              onClick={(e) => {
                e.preventDefault();
                onBookNow();
              }}
              className="outline-button"
              style={{ background: 'transparent', cursor: 'pointer', fontSize: '18px' }}
            >
              Secure Spot Now
            </button>
          </div>

          <motion.div
            className="hero-highlights"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{ display: 'flex', gap: '30px', marginTop: '40px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-light)' }}>
              <Calendar className="detail-icon" />
              <span>05 Nights / 06 Days</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-light)' }}>
              <MapPin className="detail-icon" />
              <span>Guangzhou, China</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
