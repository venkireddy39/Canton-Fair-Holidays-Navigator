import React, { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import {
  X,
  User,
  Phone,
  Mail,
  Building2,
  ChevronDown,
} from "lucide-react";
import "./BookingModal.css";
import "./PopupForm.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const BUSINESS_CATEGORIES = [
  "Electronics & Technology",
  "Machinery & Hardware",
  "Home Decor & Furniture",
  "Apparel, Textiles & Shoes",
  "Office & Consumer Goods",
  "Automobile & Accessories",
  "Food & Beverages",
  "Health & Beauty",
  "Building & Construction",
  "Agriculture & Farming",
  "Other",
];

const PopupForm = ({ onClose }) => {
  const modalRef = useRef(null);
  const submittedRef = useRef(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    business_name: "",
    business_category: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonCountdown, setButtonCountdown] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [shakeForm, setShakeForm] = useState(false);

  const [fieldErrors, setFieldErrors] = useState({
    name: "",
    phone: "",
    email: "",
    business_name: "",
    business_category: "",
  });

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (fieldErrors[field]) {
      setFieldErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const executeSubmit = async () => {
    if (submittedRef.current) return;
    submittedRef.current = true;
    setIsSubmitting(true);

    try {
      const submitData = {
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        business_name: formData.business_name.trim(),
        business_category: formData.business_category,
      };

      const response = await fetch(`${API_URL}/api/leads`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setShowSuccess(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        business_name: "",
        business_category: "",
      });

      setTimeout(() => {
        setShowSuccess(false);
        onClose(true);
      }, 2500);
    } catch (err) {
      console.error("Submit Error:", err);
      submittedRef.current = false;
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting || buttonCountdown !== null) return;

    const errors = {
      name: "",
      phone: "",
      email: "",
      business_name: "",
      business_category: "",
    };

    let hasError = false;

    if (!formData.name.trim()) {
      errors.name = "Please enter your name";
      hasError = true;
    }

    if (!formData.phone.trim()) {
      errors.phone = "Please enter phone number";
      hasError = true;
    }

    if (!formData.email.trim()) {
      errors.email = "Please enter email";
      hasError = true;
    }

    if (!formData.business_name.trim()) {
      errors.business_name = "Please enter business name";
      hasError = true;
    }

    if (!formData.business_category.trim()) {
      errors.business_category = "Please select category";
      hasError = true;
    }

    if (hasError) {
      setFieldErrors(errors);
      setShakeForm(true);
      setTimeout(() => setShakeForm(false), 500);
      return;
    }

    setFieldErrors({
      name: "",
      phone: "",
      email: "",
      business_name: "",
      business_category: "",
    });

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

  const getEmoji = () => {
    switch (buttonCountdown) {
      case 5:
        return "✈️";
      case 4:
        return "🏨";
      case 3:
        return "🧳";
      case 2:
        return "🌍";
      case 1:
        return "✅";
      default:
        return "";
    }
  };

  const ErrorIcon = () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );

  return ReactDOM.createPortal(
    <div className="modal-overlay popup-center-overlay" ref={modalRef}>
      <div className="modal-backdrop" onClick={() => onClose(false)} />

      <div className="modal-container popup-center-container">
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
            <h2 className="success-title">Thank You!</h2>
            <p className="success-desc">
              Your details have been successfully submitted.
            </p>
          </div>
        ) : (
          <div className="modal-content">
            <button
              type="button"
              className="modal-close-btn"
              onClick={() => onClose(false)}
              aria-label="Close popup form"
            >
              <X size={24} />
            </button>

            <div className="modal-header">
              <h2>
                <span className="title-gold">Let's Connect!</span>
              </h2>
              <p>
                Please enter your details to learn more about the Canton Fair
                packages.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className={`animated-form ${shakeForm ? "form-shake" : ""}`}
              noValidate
            >
              <div className={`input-group ${fieldErrors.name ? "input-error" : ""}`}>
                <input
                  type="text"
                  id="popup-name"
                  className="animated-input"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => handleFieldChange("name", e.target.value)}
                  disabled={buttonCountdown !== null || isSubmitting}
                />
                <User size={18} className="input-icon" />
                <label htmlFor="popup-name" className="floating-label">
                  Name
                </label>
                {fieldErrors.name && (
                  <span className="field-error-msg">
                    <ErrorIcon />
                    {fieldErrors.name}
                  </span>
                )}
              </div>

              <div className={`input-group ${fieldErrors.phone ? "input-error" : ""}`}>
                <input
                  type="tel"
                  id="popup-phone"
                  className="animated-input"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) =>
                    handleFieldChange("phone", e.target.value.replace(/\D/g, ""))
                  }
                  disabled={buttonCountdown !== null || isSubmitting}
                />
                <Phone size={18} className="input-icon" />
                <label htmlFor="popup-phone" className="floating-label">
                  Phone Number
                </label>
                {fieldErrors.phone && (
                  <span className="field-error-msg">
                    <ErrorIcon />
                    {fieldErrors.phone}
                  </span>
                )}
              </div>

              <div className={`input-group ${fieldErrors.email ? "input-error" : ""}`}>
                <input
                  type="email"
                  id="popup-email"
                  className="animated-input"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleFieldChange("email", e.target.value)}
                  disabled={buttonCountdown !== null || isSubmitting}
                />
                <Mail size={18} className="input-icon" />
                <label htmlFor="popup-email" className="floating-label">
                  Email ID
                </label>
                {fieldErrors.email && (
                  <span className="field-error-msg">
                    <ErrorIcon />
                    {fieldErrors.email}
                  </span>
                )}
              </div>

              <div
                className={`input-group ${fieldErrors.business_name ? "input-error" : ""
                  }`}
              >
                <input
                  type="text"
                  id="popup-business"
                  className="animated-input"
                  placeholder="Enter your business name"
                  value={formData.business_name}
                  onChange={(e) =>
                    handleFieldChange("business_name", e.target.value)
                  }
                  disabled={buttonCountdown !== null || isSubmitting}
                />
                <Building2 size={18} className="input-icon" />
                <label htmlFor="popup-business" className="floating-label">
                  Business Name
                </label>
                {fieldErrors.business_name && (
                  <span className="field-error-msg">
                    <ErrorIcon />
                    {fieldErrors.business_name}
                  </span>
                )}
              </div>

              <div
                className={`input-group select-group ${fieldErrors.business_category ? "input-error" : ""
                  }`}
              >
                <select
                  id="popup-category"
                  className="animated-input animated-select"
                  value={formData.business_category}
                  onChange={(e) =>
                    handleFieldChange("business_category", e.target.value)
                  }
                  disabled={buttonCountdown !== null || isSubmitting}
                >
                  <option value="" disabled hidden>
                    Select your business category
                  </option>
                  {BUSINESS_CATEGORIES.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>

                <ChevronDown size={18} className="input-icon select-chevron" />

                <label
                  htmlFor="popup-category"
                  className={`floating-label ${formData.business_category ? "label-active" : ""
                    }`}
                >
                  Business Category
                </label>

                {fieldErrors.business_category && (
                  <span className="field-error-msg">
                    <ErrorIcon />
                    {fieldErrors.business_category}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className={`cta-button ${buttonCountdown !== null ? "counting" : ""
                  }`}
                disabled={buttonCountdown !== null || isSubmitting}
              >
                {buttonCountdown !== null ? (
                  <div className="countdown-emoji-container">
                    <span>{buttonCountdown}s</span>
                    <span className="emoji-anime" key={buttonCountdown}>
                      {getEmoji()}
                    </span>
                  </div>
                ) : isSubmitting ? (
                  "Submitting..."
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>,
    document.body
  );
};

export default PopupForm;