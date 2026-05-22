import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, ShieldCheck } from 'lucide-react';

const PackageOverview = ({ onBookNow }) => {
  return (
    <section id="packages" style={{ background: 'var(--secondary-blue)' }}>
      <div className="container">
        <div className="overview-grid">
          <motion.div
            className="overview-details"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Canton Fair Travel Package</h2>
            <h3>Elevate Your Business Journey</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '18px' }}>
              We've meticulously planned every detail of your Canton Fair experience. From smooth visa processing to premium accommodations, focus on your business while we handle the logistics.
            </p>

            <div className="detail-item">
              <Clock className="detail-icon" />
              <span><strong>Duration:</strong> 05 Nights / 06 Days</span>
            </div>
            <div className="detail-item">
              <CheckCircle2 className="detail-icon" />
              <span><strong>Location:</strong> Guangzhou, China</span>
            </div>
            <div className="detail-item">
              <ShieldCheck className="detail-icon" />
              <span><strong>Security:</strong> Full Travel Assistance</span>
            </div>
          </motion.div>

          <motion.div
            className="glass-card price-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="urgency-badge">Limited Slots Available</div>
            <h3 style={{ fontSize: '24px', color: 'var(--text-light)' }}>All-Inclusive Package</h3>
            <div className="price-value">INR 60,000/-</div>
            <p style={{ color: 'var(--text-muted)', marginBottom: '30px' }}>Per Person on Twin Sharing</p>
            <button
              onClick={() => onBookNow()}
              className="cta-button"
              style={{
                justifyContent: 'center',
                border: 'none',
                cursor: 'pointer',
                width: '100%',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              Secure Your Spot
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PackageOverview;
