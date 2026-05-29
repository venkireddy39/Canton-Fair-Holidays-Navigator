import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Which Canton Fair phase should I attend?",
    answer: "Phase 1 focuses on Electronics & Machinery, Phase 2 on Consumer Goods & Home Decor, and Phase 3 on Textiles, Garments & Shoes. Choose the phase that matches your sourcing needs."
  },
  {
    question: "Is an invitation required?",
    answer: "Yes, an official invitation letter from the Canton Fair is mandatory for securing a China Business (M) Visa. We assist our clients in obtaining this invitation."
  },
  {
    question: "How many days are needed?",
    answer: "We typically recommend our 5 Nights / 6 Days package for a single phase. This provides enough time to explore the fair, hold meetings, and visit local markets."
  },
  {
    question: "Do you provide hotel and visa support?",
    answer: "Absolutely. Our comprehensive packages include premium business hotel accommodation, complete China Business Visa processing assistance, and registration support."
  },
  {
    question: "Can airport transfer be arranged?",
    answer: "Yes, we provide shared SIC transfers between your hotel and the Canton Fair complex, and airport pickups can be arranged based on your flight schedule."
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
                  border: '1px solid var(--border-color)',
                  overflow: 'hidden',
                  background: isOpen ? 'var(--faq-open-bg)' : 'var(--faq-closed-bg)',
                  transition: 'background 0.3s ease, border-color 0.3s ease'
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  id={`faq-btn-${index}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
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
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-btn-${index}`}
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
