import { useEffect, useRef } from "react";
import ReactDOM from 'react-dom';
import { X, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import './BookingModal.css';

const BookingModal = ({ onClose, customText, customTitle }) => {
  const modalRef = useRef(null);

  // Prevent scrolling, implement focus trapping & focus restoration, and Escape key listener
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const previousFocus = document.activeElement;

    // Focus the first interactive element inside the modal
    if (modalRef.current) {
      const focusable = modalRef.current.querySelectorAll('button, a, input, select, textarea, [tabindex="0"]');
      if (focusable.length) {
        focusable[0].focus();
      }
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
      if (e.key === 'Tab') {
        if (!modalRef.current) return;
        const focusable = modalRef.current.querySelectorAll('button, a, [href], input, select, textarea, [tabindex="0"]');
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            last.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === last) {
            first.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
      if (previousFocus) {
        previousFocus.focus();
      }
    };
  }, [onClose]);

  const modalContent = (
    <div className="modal-overlay" ref={modalRef}>
      {/* Backdrop */}
      <motion.div 
        className="modal-backdrop" 
        onClick={onClose} 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Modal Content */}
      <div className="modal-container">
        <motion.div 
          className="modal-content premium-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <button className="modal-close-btn" onClick={onClose} aria-label="Close booking modal">
            <X size={24} />
          </button>

          <div className="modal-hero-image">
            <div className="modal-badge">VIP Travel Package</div>
          </div>

          <div className="modal-body">
            <motion.div 
              className="modal-header"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h2 id="modal-title">
                {customTitle ? (
                  <>
                    <span className="title-gold">{customTitle.split(' ').slice(0, -1).join(' ')}</span>{' '}
                    <span className="title-cyan">{customTitle.split(' ').slice(-1)[0]}</span>
                  </>
                ) : (
                  <>
                    <span className="title-gold">Secure Your Spot</span> <span className="title-cyan">Now</span>
                  </>
                )}
              </h2>
              <p>{customText || "Experience seamless business travel with our all-inclusive premium package designed for Canton Fair 2026."}</p>
            </motion.div>

            <motion.div 
              className="modal-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.a 
                href="tel:+919533444455" 
                className="modal-btn call-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <Phone size={22} fill="currentColor" aria-hidden="true" />
                <span>Call Now</span>
              </motion.a>

              <motion.a
                href={`https://wa.me/919533444455?text=${encodeURIComponent(customText ? `Hi Holidays Navigator, I want ${customText}.` : "Hi Holidays Navigator, I want to plan my Canton Fair tour. Let me know the details.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="modal-btn whatsapp-btn"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircle size={22} fill="currentColor" aria-hidden="true" />
                <span>WhatsApp Now</span>
              </motion.a>
            </motion.div>

            <motion.div 
              className="modal-footer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p>Limited slots available. Book early to ensure visa processing.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default BookingModal;
