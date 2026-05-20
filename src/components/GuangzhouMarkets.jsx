import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Tv, Award, Gift } from 'lucide-react';

const markets = [
  {
    icon: <ShoppingCart size={28} />,
    title: "Baima Garment Market",
    sub: "Apparel & Fashion Hub",
    desc: "Guangzhou's largest and most famous high-end clothing market. Featuring thousands of fashion manufacturers."
  },
  {
    icon: <Gift size={28} />,
    title: "One Link Plaza",
    sub: "Gifts & Home Accessories",
    desc: "The world's premium wholesale sourcing destination for toys, home ornaments, holiday supplies, and gifts."
  },
  {
    icon: <Award size={28} />,
    title: "Zhanxi Watch Market",
    sub: "Watches & Accessories",
    desc: "Global epicenter for wristwatches, components, and precision accessories. Millions of varieties available."
  },
  {
    icon: <Tv size={28} />,
    title: "Nanfang Building",
    sub: "Electronics & Accessories",
    desc: "Massive multi-story wholesale complex specializing in mobile phone accessories, smart gadgets, and spares."
  }
];

const GuangzhouMarkets = () => {
  return (
    <section id="markets" style={{ background: 'var(--secondary-blue)', position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="hero-subtitle" style={{ fontSize: '14px', marginBottom: '10px' }}>Beyond the Exhibition</span>
          <h2>Guangzhou Wholesale Markets</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>
            Explore local wholesale markets to source direct, low-MOQ inventory on your off-days
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px' }}>
          {markets.map((m, index) => (
            <motion.div
              key={index}
              className="glass-card"
              style={{
                padding: '35px 28px',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'border-color 0.3s ease, transform 0.3s ease'
              }}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{
                transform: 'translateY(-5px)',
                borderColor: 'rgba(255, 215, 0, 0.3)',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div 
                style={{ 
                  color: 'var(--accent-gold)',
                  background: 'rgba(255, 215, 0, 0.08)',
                  width: '54px',
                  height: '54px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                {m.icon}
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '4px', color: 'var(--text-light)', fontFamily: 'var(--font-sans)', fontWeight: '600' }}>
                {m.title}
              </h3>
              <h4 style={{ fontSize: '14px', color: 'var(--accent-green)', marginBottom: '15px', fontWeight: '500', fontFamily: 'var(--font-sans)' }}>
                {m.sub}
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
                {m.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuangzhouMarkets;
