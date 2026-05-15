import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { X, Phone, MessageCircle } from 'lucide-react';
import './BookingModal.css';

const BookingModal = ({ onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const modalContent = (
    <div className="modal-overlay">
      {/* Backdrop */}
      <div className="modal-backdrop" onClick={onClose} />
      
      {/* Modal Content */}
      <div className="modal-container">
        <div className="modal-content">
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={28} />
          </button>
          
          <div className="modal-header">
            <h2>
              <span className="title-gold">Secure Your Spot</span> <span className="title-cyan">Now</span>
            </h2>
            <p>Contact Holidays Navigator to reserve your Canton Fair 2026 package.</p>
          </div>
          
          <div className="modal-actions">
            <a href="tel:+919533444455" className="modal-btn call-btn">
              <Phone size={22} fill="currentColor" />
              <span>Call Now</span>
            </a>
            
            <a 
              href="https://wa.me/919533444455?text=Hi%20Holidays%20Navigator,%20I%20want%20to%20plan%20my%20Canton%20Fair%20tour.%20Let%20me%20know%20the%20details." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="modal-btn whatsapp-btn"
            >
              <MessageCircle size={22} fill="currentColor" />
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
