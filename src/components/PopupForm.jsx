import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { X, User, Phone } from 'lucide-react';
import './BookingModal.css'; // Reusing BookingModal CSS for consistent styling
import './PopupForm.css';

const PopupForm = ({ onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch('http://localhost:5000/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert(`Thank you ${formData.name}, we will contact you at ${formData.phone} shortly!`);
        onClose();
      } else {
        const data = await response.json();
        setErrorMsg(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMsg('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const modalContent = (
    <div className="modal-overlay">
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-container">
        <div className="modal-content">
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={28} />
          </button>

          <div className="modal-header">
            <h2>
              <span className="title-gold">Let's Connect!</span>
            </h2>
            <p>Please enter your details to learn more about the Canton Fair packages.</p>
          </div>

          <form onSubmit={handleSubmit} className="animated-form">
            {errorMsg && (
              <div style={{ color: '#ff4d4d', fontSize: '14px', marginBottom: '-10px', textAlign: 'center' }}>
                {errorMsg}
              </div>
            )}
            <div className="input-group">
              <input 
                type="text" 
                id="popup-name"
                className="animated-input"
                placeholder="Enter your name" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
              />
              <User size={18} className="input-icon" />
              <label htmlFor="popup-name" className="floating-label">Name</label>
            </div>
            
            <div className="input-group">
              <input 
                type="tel" 
                id="popup-phone"
                className="animated-input"
                placeholder="Enter your phone number" 
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
              />
              <Phone size={18} className="input-icon" />
              <label htmlFor="popup-phone" className="floating-label">Phone Number</label>
            </div>
            
            <button 
              type="submit" 
              className="cta-button" 
              disabled={isSubmitting}
              style={{ 
                justifyContent: 'center', 
                border: 'none', 
                cursor: isSubmitting ? 'not-allowed' : 'pointer', 
                width: '100%', 
                padding: '16px 24px',
                fontSize: '18px',
                borderRadius: '8px',
                opacity: isSubmitting ? 0.7 : 1
              }}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default PopupForm;
