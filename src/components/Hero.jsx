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
          <p>
            <motion.span 
              className="text-highlight"
              initial={{ backgroundPosition: '100% 0', borderColor: 'transparent' }}
              whileInView={{ backgroundPosition: '0% 0', borderColor: 'rgba(212, 122, 0, 0.35)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              Join the world's largest trade fair.
            </motion.span> Experience seamless business travel with our all-inclusive premium package designed exclusively for <motion.span 
              className="text-highlight"
              initial={{ backgroundPosition: '100% 0', borderColor: 'transparent' }}
              whileInView={{ backgroundPosition: '0% 0', borderColor: 'rgba(212, 122, 0, 0.35)' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            >
              entrepreneurs and business professionals.
            </motion.span>
          </p>

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
            <div className="hero-highlight-item">
              <Calendar className="detail-icon" />
              <span>05 Nights / 06 Days</span>
            </div>
            <div className="hero-highlight-item">
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
