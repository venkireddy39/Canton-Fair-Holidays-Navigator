import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Gift, Shirt, Calendar, ArrowRight, Lock, CheckCircle2 } from 'lucide-react';

const phases = [
  {
    phase: "Phase 1",
    title: "Electronics & Machinery",
    dates: "October 15–19, 2026",
    status: "open",
    desc: "Electronics, Smart Home Appliances, Heavy & Light Machinery, Energy & Tools, Lighting Equipment, Electrical Products & Vehicles.",
    icon: Cpu,
    deadline: "Bookings Open",
    highlights: ["Consumer Electronics & Smart Devices", "Industrial Machinery & Tools", "Automotive Parts & Accessories", "Renewable Energy & Lighting Solutions"]
  },
  {
    phase: "Phase 2",
    title: "Consumer Goods & Home Deco",
    dates: "October 23–27, 2026",
    status: "open",
    desc: "Consumer Daily Goods, Premium Gifts & Giveaways, Home Decorations & Art Crafts, Luxury Furniture, Ceramic Tableware & Office Supplies.",
    icon: Gift,
    deadline: "Bookings Open",
    highlights: ["Premium Kitchenware & Tableware", "Home Decoration & Art Crafts", "Gifts & Corporate Giveaways", "Office Stationery & Outdoor Furniture"]
  },
  {
    phase: "Phase 3",
    title: "Textiles, Garments & Shoes",
    dates: "October 31 – November 4, 2026",
    status: "open",
    desc: "Modern Textiles, Premium Garments, Active Shoes, Fashion Accessories, Bags, Travel Luggage, Medical Devices & Health Products.",
    icon: Shirt,
    deadline: "Bookings Open",
    highlights: ["Men & Women Fashion & Apparel", "Sportswear, Casual & Formal Shoes", "Office Supplies, Luggage & Bags", "Medical Equipment & Healthcare Products"]
  }
];

const PhaseTimeline = ({ onBookNow }) => {
  const [activeTab, setActiveTab] = useState(0); // Default to Phase 1

  const activePhaseInfo = phases[activeTab];
  const ActiveIconComponent = activePhaseInfo.icon;

  return (
    <section id="timeline" style={{ background: 'var(--bg-dark)', padding: '40px 0', position: 'relative' }}>
      <style>{`
        #timeline .section-header {
          margin-bottom: 24px;
        }

        .phase-tabs-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 20px;
        }

        .phase-tab {
          background: var(--card-highlight-bg, rgba(10, 25, 47, 0.4));
          border: 1px solid var(--border-color);
          border-radius: 12px;
          padding: 12px 8px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          gap: 12px;
          position: relative;
          overflow: hidden;
        }

        .phase-tab:hover {
          transform: translateY(-2px);
          border-color: rgba(236, 72, 153, 0.3);
          background: var(--card-bg, rgba(10, 25, 47, 0.7));
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .phase-tab.active {
          background: linear-gradient(135deg, #ec4899 0%, #f43f5e 100%);
          border-color: transparent;
          box-shadow: 0 8px 20px rgba(236, 72, 153, 0.3);
          transform: scale(1.01);
        }

        .phase-tab-icon-wrapper {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(0, 119, 182, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .phase-tab.active .phase-tab-icon-wrapper {
          background: rgba(255, 255, 255, 0.2);
        }

        .phase-tab-icon {
          color: var(--accent-cyan);
          transition: all 0.3s ease;
        }

        .phase-tab.active .phase-tab-icon {
          color: #ffffff;
          filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1));
        }

        .phase-tab-text-group {
          text-align: left;
        }

        .phase-tab-title {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-light);
          margin-bottom: 2px;
          letter-spacing: 0.3px;
        }

        .phase-tab-dates {
          font-size: 11px;
          color: var(--text-muted);
          font-weight: 500;
        }

        .phase-tab.active .phase-tab-dates {
          color: rgba(255, 255, 255, 0.9);
        }

        .phase-details-box {
          background: var(--details-box-bg);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 20px 24px;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
          position: relative;
        }

        .phase-details-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          border-bottom: 1px solid var(--border-color);
          padding-bottom: 12px;
          gap: 10px;
        }

        .phase-details-title-group h3 {
          font-size: 20px;
          font-weight: 800;
          color: var(--text-light);
          margin-bottom: 2px;
        }

        .phase-details-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--accent-gold);
          font-size: 13px;
          font-weight: 600;
        }

        .phase-details-badge {
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.3px;
        }

        .phase-details-badge.closed {
          background: rgba(239, 68, 68, 0.12);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.18);
        }

        .phase-details-badge.open {
          background: rgba(16, 185, 129, 0.12);
          color: #10b981;
          border: 1px solid rgba(16, 185, 129, 0.18);
        }

        .phase-details-content {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 24px;
          align-items: center;
        }

        .phase-details-left p {
          font-size: 13px;
          line-height: 1.5;
          color: var(--text-light);
          margin-bottom: 14px;
        }

        .phase-details-highlights {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--text-light);
          font-size: 12px;
        }

        .highlight-item svg {
          color: var(--accent-cyan);
          flex-shrink: 0;
        }

        .phase-details-right {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: rgba(0, 119, 182, 0.02);
          border-radius: 12px;
          border: 1px solid var(--border-color);
          padding: 16px;
          text-align: center;
        }

        .phase-details-right h4 {
          font-size: 12px;
          color: var(--text-muted);
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .phase-action-btn {
          background: linear-gradient(135deg, #ec4899 0%, #f43f5e 100%);
          color: #ffffff;
          padding: 10px 20px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(236, 72, 153, 0.2);
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        .phase-action-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(236, 72, 153, 0.3);
        }

        .phase-action-btn.disabled {
          background: rgba(0, 0, 0, 0.05) !important;
          color: var(--text-muted) !important;
          cursor: not-allowed;
          box-shadow: none !important;
          transform: none !important;
        }

        @media (max-width: 1024px) {
          .phase-details-content {
            grid-template-columns: 1fr;
            gap: 30px;
          }
        }

        @media (max-width: 768px) {
          .phase-tabs-container {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .phase-details-box {
            padding: 30px 20px;
          }
          .phase-details-title-group h3 {
            font-size: 26px;
          }
          .phase-details-highlights {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      
      <div className="container">
        <div className="section-header">
          <h2>Canton Fair Phases</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>
            Select a phase below to view date schedules and covered industry categories
          </p>
        </div>

        {/* Phase tab items matching user image layout */}
        <div className="phase-tabs-container" role="tablist" aria-label="Canton Fair Phases">
          {phases.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={index}
                id={`phase-tab-${index}`}
                role="tab"
                aria-selected={activeTab === index}
                aria-controls={`phase-panel-${index}`}
                tabIndex={0}
                className={`phase-tab ${activeTab === index ? 'active' : ''}`}
                onClick={() => setActiveTab(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveTab(index);
                  }
                }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
                style={{ width: '100%', fontFamily: 'inherit' }}
              >
                <div className="phase-tab-icon-wrapper">
                  <Icon size={20} className="phase-tab-icon" />
                </div>
                <div className="phase-tab-text-group">
                  <div className="phase-tab-title">{item.phase}</div>
                  <div className="phase-tab-dates">{item.dates}</div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Matter Details Box dynamically rendered below */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            id={`phase-panel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`phase-tab-${activeTab}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="phase-details-box"
          >
            <div className="phase-details-header">
              <div className="phase-details-title-group">
                <h3>{activePhaseInfo.phase}: {activePhaseInfo.title}</h3>
                <div className="phase-details-meta">
                  <Calendar size={18} />
                  <span>{activePhaseInfo.dates}</span>
                </div>
              </div>
              
              <span className={`phase-details-badge ${activePhaseInfo.status}`}>
                {activePhaseInfo.status === 'closed' ? 'Bookings Closed' : 'Bookings Active'}
              </span>
            </div>

            <div className="phase-details-content">
              <div className="phase-details-left">
                <p>{activePhaseInfo.desc}</p>
                
                <h4 style={{ color: 'var(--text-light)', fontSize: '16px', marginBottom: '16px', fontWeight: '700' }}>
                  Major Categories Highlighted:
                </h4>
                
                <div className="phase-details-highlights">
                  {activePhaseInfo.highlights.map((highlight, idx) => (
                    <div key={idx} className="highlight-item">
                      <CheckCircle2 size={16} />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="phase-details-right">
                <h4>Secure Your Canton Fair Tour</h4>
                
                {activePhaseInfo.status === 'closed' ? (
                  <button className="phase-action-btn disabled" disabled>
                    <Lock size={18} />
                    <span>Closed for Registration</span>
                  </button>
                ) : (
                  <button 
                    className="phase-action-btn"
                    onClick={(e) => {
                      if (onBookNow) onBookNow(e);
                    }}
                  >
                    <span>Register for {activePhaseInfo.phase}</span>
                    <ArrowRight size={18} />
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PhaseTimeline;
