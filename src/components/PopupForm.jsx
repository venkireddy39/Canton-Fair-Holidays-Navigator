import React, { useEffect, useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import { X, User, Phone } from 'lucide-react';
import './BookingModal.css';
import './PopupForm.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const PopupForm = ({ onClose }) => {
  const modalRef = useRef(null);

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
        onClose(false);
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

  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonCountdown, setButtonCountdown] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const executeSubmit = async () => {
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const response = await fetch(`${API_URL}/api/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || data.message || 'Something went wrong. Please try again.');
      }

      setShowSuccess(true);
      setFormData({ name: '', phone: '' });

      setTimeout(() => {
        setShowSuccess(false);
        onClose(true);
      }, 2500);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrorMsg(error.message || 'Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting || buttonCountdown !== null) return;

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and phone number.');
      return;
    }

    setErrorMsg('');
    setButtonCountdown(5);

    const interval = setInterval(() => {
      setButtonCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setButtonCountdown(null);
          executeSubmit();
          return null;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const modalContent = (
    <div className="modal-overlay popup-right-overlay" ref={modalRef}>
      <div className="modal-backdrop" onClick={() => onClose(false)} />

      <div 
        className="modal-container popup-right-container"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
      >
        {showSuccess ? (
          <div className="success-modal-green">
            <div className="success-tick-circle">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#22c55e"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <h2 className="success-title" id="popup-title">Thank You!</h2>
            <p className="success-desc">Your details have been successfully submitted.</p>
          </div>
        ) : (
          <div className="modal-content">
            <button
              className="modal-close-btn"
              onClick={() => onClose(false)}
              aria-label="Close lead form modal"
            >
              <X size={28} />
            </button>

            <div className="modal-header">
              <h2 id="popup-title">
                <span className="title-gold">Let's Connect!</span>
              </h2>
              <p>Please enter your details to learn more about the Canton Fair packages.</p>
            </div>

            <form onSubmit={handleSubmit} className="animated-form">
              {errorMsg && (
                <div
                  style={{
                    color: '#ff4d4d',
                    fontSize: '14px',
                    marginBottom: '-10px',
                    textAlign: 'center',
                  }}
                >
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
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      name: e.target.value,
                    })
                  }
                  required
                  disabled={buttonCountdown !== null || isSubmitting}
                />
                <User size={18} className="input-icon" />
                <label htmlFor="popup-name" className="floating-label">
                  Name
                </label>
              </div>

              <div className="input-group">
                <input
                  type="tel"
                  id="popup-phone"
                  className="animated-input"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      phone: e.target.value,
                    })
                  }
                  required
                  disabled={buttonCountdown !== null || isSubmitting}
                />
                <Phone size={18} className="input-icon" />
                <label htmlFor="popup-phone" className="floating-label">
                  Phone Number
                </label>
              </div>

              <button
                type="submit"
                className={`cta-button ${buttonCountdown !== null ? 'counting' : ''}`}
                disabled={buttonCountdown !== null || isSubmitting}
                style={{
                  justifyContent: 'center',
                  border: 'none',
                  cursor: buttonCountdown !== null || isSubmitting ? 'not-allowed' : 'pointer',
                  width: '100%',
                  padding: '16px 24px',
                  fontSize: '18px',
                  borderRadius: '8px',
                  opacity: buttonCountdown !== null || isSubmitting ? 0.8 : 1,
                  background:
                    buttonCountdown !== null
                      ? 'linear-gradient(135deg, #1e3a8a, #3b82f6)'
                      : 'var(--primary-color)',
                }}
              >
                {buttonCountdown !== null
                  ? `Submitting in ${buttonCountdown}s...`
                  : isSubmitting
                    ? 'Submitting...'
                    : 'Submit'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default PopupForm;