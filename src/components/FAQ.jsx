import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What is included in the INR 35,000/- package?",
    answer: "Our premium package includes expert Business Visa processing assistance, comfortable premium twin-sharing business hotel stay, return flight booking assistance, Canton Fair official buyer badge registration, shared daily coach transfers between your hotel and the Pazhou Exhibition Complex, and 24/7 support throughout your travel."
  },
  {
    question: "How long does China Visa processing take?",
    answer: "China Business Visa processing takes a minimum of 15+ working days. Because slots and processing queues are extremely limited close to the event, we highly recommend booking early so we can secure your entry documents in time."
  },
  {
    question: "What documents do I need to prepare for the Visa?",
    answer: "You will need: (1) A valid passport with at least 6 months validity, (2) Passport-sized business photographs, (3) Personal or company bank statements from the past 6 months, (4) GST registration or company certificate, and (5) An official invitation letter from the Canton Fair (which our team assists you in securing)."
  },
  {
    question: "Is the Canton Fair Buyer Badge included?",
    answer: "Yes, official pre-registration is included. We assist you with online pre-registration and coordinate badge collection directly, helping you skip the long buyer badge queues at the Pazhou complex on day one."
  },
  {
    question: "Can I request a single room or customize the travel dates?",
    answer: "Yes! Single occupancy room upgrades are available for a nominal surcharge. We also support fully customized itineraries or extended stays if you want to explore other industrial zones in China."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" style={{ position: 'relative' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="section-header">
          <span className="hero-subtitle" style={{ fontSize: '14px', marginBottom: '10px' }}>Got Questions?</span>
          <h2>Frequently Asked Questions</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>
            Everything you need to know about the Canton Fair travel package
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index} 
                className="glass-card"
                style={{ 
                  borderRadius: '12px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  overflow: 'hidden',
                  background: isOpen ? 'rgba(17, 34, 64, 0.6)' : 'rgba(17, 34, 64, 0.3)',
                  transition: 'background 0.3s ease, border-color 0.3s ease'
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  style={{
                    width: '100%',
                    padding: '24px 30px',
                    background: 'transparent',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    textAlign: 'left',
                    color: 'var(--text-light)',
                    fontSize: '18px',
                    fontWeight: '600',
                    gap: '15px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <HelpCircle size={20} color="var(--accent-gold)" style={{ flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-sans)' }}>{faq.question}</span>
                  </div>
                  {isOpen ? (
                    <ChevronUp size={20} color="var(--accent-green)" />
                  ) : (
                    <ChevronDown size={20} color="var(--text-muted)" />
                  )}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div 
                        style={{ 
                          padding: '0 30px 24px 65px', 
                          color: 'var(--text-muted)', 
                          fontSize: '15px', 
                          lineHeight: '1.7' 
                        }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
