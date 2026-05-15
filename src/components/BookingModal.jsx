import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageCircle } from 'lucide-react';
import './BookingModal.css';

const BookingModal = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Modal Content */}
          <div className="modal-container">
            <motion.div
              className="modal-content glass-card"
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            >
              <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
                <X size={24} />
              </button>
              
              <div className="modal-header">
                <h2>Secure Your Spot Now</h2>
                <p>Contact Holidays Navigator to reserve your Canton Fair 2026 package.</p>
              </div>
              
              <div className="modal-actions">
                <a href="tel:+919533444455" className="modal-btn call-btn">
                  <Phone size={20} />
                  <span>Call Now</span>
                </a>
                
                <a 
                  href="https://wa.me/919533444455?text=Hi%20Holidays%20Navigator,%20I%20want%20to%20plan%20my%20Canton%20Fair%20tour.%20Let%20me%20know%20the%20details." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="modal-btn whatsapp-btn"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp Now</span>
                </a>
              </div>
              
              <div className="modal-footer">
                <p>Limited slots available. Book early to ensure visa processing.</p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
