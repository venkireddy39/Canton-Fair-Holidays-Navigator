import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { X, Phone, MessageCircle } from 'lucide-react';
import './BookingModal.css';

const BookingModal = ({ onClose }) => {
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
      <div className="modal-backdrop" onClick={onClose} />

      {/* Modal Content */}
      <div className="modal-container">
        <div 
          className="modal-content"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <button className="modal-close-btn" onClick={onClose} aria-label="Close booking modal">
            <X size={28} />
          </button>

          <div className="modal-header">
            <h2 id="modal-title">
              <span className="title-gold">Secure Your Spot</span> <span className="title-cyan">Now</span>
            </h2>
            <p>Contact Holidays Navigator to reserve your Canton Fair 2026 package.</p>
          </div>

          <div className="modal-actions">
            <a href="tel:+919533444455" className="modal-btn call-btn">
              <Phone size={22} fill="currentColor" aria-hidden="true" />
              <span>Call Now</span>
            </a>

            <a
              href="https://wa.me/919533444455?text=Hi%20Holidays%20Navigator,%20I%20want%20to%20plan%20my%20Canton%20Fair%20tour.%20Let%20me%20know%20the%20details."
              target="_blank"
              rel="noopener noreferrer"
              className="modal-btn whatsapp-btn"
            >
              <MessageCircle size={22} fill="currentColor" aria-hidden="true" />
              <span>WhatsApp Now</span>
            </a>
          </div>

          <div className="modal-footer">
            <p>Limited slots available. Book early to ensure visa processing.</p>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default BookingModal;
