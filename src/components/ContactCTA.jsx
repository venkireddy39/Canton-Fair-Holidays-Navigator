import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  AlertCircle,
  User,
  Send,
  Mail,
  Building2,
  ChevronDown
} from 'lucide-react';
import { motion } from 'framer-motion';
import './ContactForm.css';

const API_URL = import.meta.env.VITE_API_URL || "";

const BUSINESS_CATEGORIES = [
  'Electronics & Technology',
  'Machinery & Hardware',
  'Home Decor & Furniture',
  'Apparel, Textiles & Shoes',
  'Office & Consumer Goods',
  'Automobile & Accessories',
  'Food & Beverages',
  'Health & Beauty',
  'Building & Construction',
  'Agriculture & Farming',
  'Other'
];

const ContactCTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    business_name: '',
    business_category: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({
    name: '',
    phone: '',
    email: '',
    business_name: '',
    business_category: ''
  });

  const [errorMsg, setErrorMsg] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [shakeForm, setShakeForm] = useState(false);

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const errors = {
      name: '',
      phone: '',
      email: '',
      business_name: '',
      business_category: ''
    };

    let hasError = false;

    if (!formData.name.trim()) {
      errors.name = 'Please enter your name';
      hasError = true;
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Please enter phone number';
      hasError = true;
    }

    if (!formData.email.trim()) {
      errors.email = 'Please enter email';
      hasError = true;
    }

    if (!formData.business_name.trim()) {
      errors.business_name = 'Please enter business name';
      hasError = true;
    }

    if (!formData.business_category.trim()) {
      errors.business_category = 'Select category';
      hasError = true;
    }

    if (hasError) {
      setFieldErrors(errors);
      setShakeForm(true);
      setTimeout(() => setShakeForm(false), 500);
      return;
    }

    setFieldErrors({
      name: '',
      phone: '',
      email: '',
      business_name: '',
      business_category: ''
    });

    setIsSubmitting(true);

    try {
      await fetch(`${API_URL}/api/leads`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          business_name: formData.business_name.trim(),
          business_category: formData.business_category
        })
      });

      setShowSuccess(true);

      setFormData({
        name: '',
        phone: '',
        email: '',
        business_name: '',
        business_category: ''
      });

      setTimeout(() => {
        setShowSuccess(false);
      }, 4000);

    } catch (error) {
      console.error(error);
      setErrorMsg('Submission failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-two-col">

          <motion.div
            className="contact-info-side glass-card"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="contact-hero-image"></div>
            
            <div className="contact-info-body">
              <h2 style={{ fontSize: '36px', marginBottom: '20px' }}>
                Contact and Booking
              </h2>

              <p style={{
                fontSize: '18px',
                color: 'var(--text-light)',
                marginBottom: '30px'
              }}>
                Book your Canton Fair package today.
              </p>

              <div className="contact-action-buttons">
                <a
                  href="https://wa.me/919533444455"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-btn"
                >
                  <MessageCircle size={24} />
                  Chat on WhatsApp
                </a>

                <div className="mobile-call-buttons">
                  <a href="tel:+919533444455" className="call-btn">
                    <Phone size={20} />
                    Call +91 9533444455
                  </a>
                  <a href="tel:+919121388338" className="call-btn">
                    <Phone size={20} />
                    Call +91 9121388338
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-side"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="contact-form-card">

              {showSuccess ? (
                <div className="contact-form-success">
                  <div className="contact-success-icon">
                    ✓
                  </div>
                  <h3>Thank You!</h3>
                  <p>
                    Your details submitted successfully.
                  </p>
                </div>
              ) : (
                <>
                  <div className="contact-form-header">
                    <h3>
                      <span className="contact-form-title-accent">
                        Quick Enquiry
                      </span>
                    </h3>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className={`contact-inline-form ${shakeForm ? 'form-shake' : ''
                      }`}
                  >

                    <div className={`contact-input-group ${fieldErrors.name ? 'has-error' : ''}`}>
                      <User size={18} className="contact-input-icon" />
                      <input
                        type="text"
                        className="contact-input"
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => handleFieldChange('name', e.target.value)}
                      />
                    </div>

                    <div className={`contact-input-group ${fieldErrors.phone ? 'has-error' : ''}`}>
                      <Phone size={18} className="contact-input-icon" />
                      <input
                        type="tel"
                        className="contact-input"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={(e) =>
                          handleFieldChange(
                            'phone',
                            e.target.value.replace(/\D/g, '')
                          )
                        }
                      />
                    </div>

                    <div className={`contact-input-group ${fieldErrors.email ? 'has-error' : ''}`}>
                      <Mail size={18} className="contact-input-icon" />
                      <input
                        type="email"
                        className="contact-input"
                        placeholder="Email ID"
                        value={formData.email}
                        onChange={(e) =>
                          handleFieldChange('email', e.target.value)
                        }
                      />
                    </div>

                    <div className={`contact-input-group ${fieldErrors.business_name ? 'has-error' : ''}`}>
                      <Building2 size={18} className="contact-input-icon" />
                      <input
                        type="text"
                        className="contact-input"
                        placeholder="Business Name"
                        value={formData.business_name}
                        onChange={(e) =>
                          handleFieldChange(
                            'business_name',
                            e.target.value
                          )
                        }
                      />
                    </div>

                    <div className={`contact-input-group ${fieldErrors.business_category ? 'has-error' : ''}`}>
                      <ChevronDown size={18} className="contact-input-icon" />
                      <select
                        className="contact-input"
                        value={formData.business_category}
                        onChange={(e) =>
                          handleFieldChange(
                            'business_category',
                            e.target.value
                          )
                        }
                      >
                        <option value="">
                          Business Category
                        </option>

                        {BUSINESS_CATEGORIES.map((cat) => (
                          <option key={cat} value={cat}>
                            {cat}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="contact-submit-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Submitting...'
                      ) : (
                        <>
                          <Send size={18} />
                          Submit Enquiry
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactCTA;