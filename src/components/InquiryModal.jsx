import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { X, User, Phone, Mail, Send, CheckCircle } from 'lucide-react';
import './InquiryModal.css';

const InquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Prevent background scrolling when modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);
    // Simulate premium API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const modalContent = (
    <div className="inquiry-overlay">
      <div className="inquiry-backdrop" onClick={onClose} />
      <div className="inquiry-container">
        <button className="inquiry-close" onClick={onClose} aria-label="Close inquiry">
          <X size={24} />
        </button>

        {!submitted ? (
          <div className="inquiry-form-wrapper">
            <div className="inquiry-header">
              <h3>
                Plan Your <span className="text-gold">Canton Fair</span> Journey
              </h3>
              <p>Leave your details below and our expert travel desk will customize your business trip.</p>
            </div>

            <form onSubmit={handleSubmit} className="inquiry-form">
              <div className="input-group">
                <label htmlFor="name">Full Name <span className="required">*</span></label>
                <div className="input-field">
                  <User size={18} className="field-icon" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="phone">Phone Number <span className="required">*</span></label>
                <div className="input-field">
                  <Phone size={18} className="field-icon" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="Enter your mobile number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="input-group">
                <label htmlFor="message">Message <span className="optional">(Optional)</span></label>
                <div className="input-field textarea-field">
                  <textarea
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="Share details like preferred travel dates, number of seats, or specific needs..."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="inquiry-submit-btn" disabled={loading}>
                {loading ? (
                  <span className="spinner"></span>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          <div className="inquiry-success-wrapper">
            <CheckCircle size={64} className="success-icon" />
            <h3>Inquiry Submitted!</h3>
            <p>
              Thank you, <span className="text-cyan">{formData.name}</span>. Our premium business travel concierge has received your request and will call you at <span className="text-gold">{formData.phone}</span> within 2 hours.
            </p>
            <button className="inquiry-done-btn" onClick={onClose}>
              Continue Exploring
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default InquiryModal;
