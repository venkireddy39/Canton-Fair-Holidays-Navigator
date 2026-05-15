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
      className="floating-whatsapp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="whatsapp-tooltip">Chat with us!</span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
