import React from 'react';
import { motion } from 'framer-motion';

const phases = [
  {
    phase: "Phase 1",
    dates: "April 15–19, 2026",
    status: "closed",
    desc: "Electronics, Home Appliances, Machinery & Tools",
    deadline: ""
  },
  {
    phase: "Phase 2",
    dates: "April 23–27, 2026",
    status: "open",
    desc: "Consumer Goods, Gifts, Home Decorations",
    deadline: "Bookings Open till Mar 15th"
  },
  {
    phase: "Phase 3",
    dates: "May 1–5, 2026",
    status: "open",
    desc: "Textiles, Garments, Shoes, Office Supplies",
    deadline: "Bookings Open till Mar 25th"
  }
];

const PhaseTimeline = () => {
  return (
    <section id="timeline" style={{ background: 'var(--secondary-blue)' }}>
      <div className="container">
        <div className="section-header">
          <h2>Canton Fair Phases</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>Choose the phase that aligns with your business needs</p>
        </div>
        
        <div className="timeline">
          {phases.map((item, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="timeline-content glass-card">
                <h3 className="gradient-text" style={{ fontSize: '24px', marginBottom: '8px' }}>{item.phase}</h3>
                <div className="timeline-date">{item.dates}</div>
                <p style={{ color: 'var(--text-light)', marginBottom: '12px' }}>{item.desc}</p>
                
                {item.status === 'closed' ? (
                  <span className="status-badge status-closed">Bookings Closed</span>
                ) : (
                  <span className="status-badge status-open">{item.deadline}</span>
                )}
              </div>
              <div className="timeline-dot"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhaseTimeline;
