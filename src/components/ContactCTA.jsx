import React from 'react';
import { Phone, MessageCircle, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactCTA = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <motion.div
          className="contact-card glass-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>Ready to Grow Your Business?</h2>
          <p style={{ fontSize: '18px', color: 'var(--text-light)', marginBottom: '30px' }}>
            Book your Canton Fair 140 package today and secure your spot among India's top entrepreneurs.
          </p>

          <a
            href="https://wa.me/919533444455?text=Hi%20Holidays%20Navigator,%20I%20want%20to%20plan%20my%20Canton%20Fair%20tour.%20Let%20me%20know%20the%20details."
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            <MessageCircle size={24} />
            Chat on WhatsApp
          </a>

          <div className="contact-phones">
            <div className="phone-item">
              <Phone size={20} color="var(--accent-gold)" />
              <a href="tel:+919533444455">+91 9533444455</a>
            </div>
            <div className="phone-item">
              <Phone size={20} color="var(--accent-gold)" />
              <a href="tel:+919121388338">+91 9121388338</a>
            </div>
          </div>

          <div className="visa-note" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <AlertCircle size={16} color="var(--accent-gold)" />
            <span>Note: Visa processing takes minimum 15+ working days. Apply early!</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;
