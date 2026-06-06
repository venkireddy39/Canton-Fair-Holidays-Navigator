import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-subtitle" aria-hidden="true">Premium Entrepreneur Travel Packages</span>
          <h1>Canton Fair 2026 Travel Packages from India - Hotels, Visa & Transfers</h1>
          <p style={{ fontSize: 'clamp(0.80rem, 2.9vw, 1.15rem)', lineHeight: '1.7', maxWidth: '700px', marginBottom: '30px' }}>
            Hotels, visa support, airport transfers, interpreter assistance and business travel guidance for Canton Fair visitors.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="cta-button" style={{ padding: '16px 32px', fontSize: 'clamp(13px, 1.8vw, 18px)' }}>
              Plan My Canton Fair Trip
            </a>
            <a
              href="https://wa.me/919533444455?text=Hi%2C%20I%20want%20to%20know%20about%20Canton%20Fair%202026%20travel%20packages"
              target="_blank"
              rel="noopener noreferrer"
              className="outline-button"
              style={{ background: 'transparent', cursor: 'pointer', fontSize: 'clamp(13px, 1.8vw, 18px)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              Talk to Expert
            </a>
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
