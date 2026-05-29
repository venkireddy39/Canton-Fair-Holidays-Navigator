import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  const whatsappUrl = "https://wa.me/919533444455?text=Hi%20Holidays%20Navigator,%20I%20want%20to%20plan%20my%20Canton%20Fair%20tour.%20Let%20me%20know%20the%20details.";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-container"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      whileHover={{ y: -3, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      aria-label="Talk to a Canton Fair Expert on WhatsApp"
    >
      <div className="whatsapp-icon-wrapper">
        <MessageCircle size={22} fill="currentColor" />
        <span className="pulsing-badge" />
      </div>
      <span className="whatsapp-text">Talk to a Canton Fair Expert</span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
