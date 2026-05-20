import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Users, ShoppingBag, Globe } from 'lucide-react';

const stats = [
  {
    icon: <Layers size={28} color="var(--accent-gold)" />,
    value: "1.5M+ Sq.m",
    title: "Exhibition Area",
    desc: "Held in the world's largest exhibition complex in Guangzhou."
  },
  {
    icon: <Users size={28} color="var(--accent-green)" />,
    value: "25,000+",
    title: "Top Exhibitors",
    desc: "Direct access to first-tier Chinese manufacturers and suppliers."
  },
  {
    icon: <ShoppingBag size={28} color="var(--accent-gold)" />,
    value: "150K+",
    title: "Product Varieties",
    desc: "Showcasing cutting-edge innovations and premium consumer goods."
  },
  {
    icon: <Globe size={28} color="var(--accent-green)" />,
    value: "200K+",
    title: "Global Buyers",
    desc: "Representing more than 200 countries and regions worldwide."
  }
];

const AboutFair = () => {
  return (
    <section id="about-fair" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Subtle background glow effect */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '400px',
          height: '400px',
          background: 'rgba(0, 180, 216, 0.05)',
          filter: 'blur(100px)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-10%',
          width: '300px',
          height: '300px',
          background: 'rgba(255, 215, 0, 0.03)',
          filter: 'blur(80px)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="about-fair-grid">
          
          {/* Left Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-subtitle" style={{ fontSize: '14px', marginBottom: '10px' }}>Global Business Gateway</span>
            <h2 style={{ fontSize: '38px', marginBottom: '20px', lineHeight: '1.2' }}>
              About the <span className="gradient-text">Canton Fair</span>
            </h2>
            <p style={{ color: 'var(--text-light)', fontSize: '17px', marginBottom: '20px', lineHeight: '1.7' }}>
              The <strong>China Import and Export Fair</strong>, commonly known as the <strong>Canton Fair</strong>, is the ultimate platform for global sourcing. Established in 1957 and co-hosted twice a year by China's Ministry of Commerce, it stands as the absolute pinnacle of international trade exhibitions.
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '16px', marginBottom: '30px', lineHeight: '1.7' }}>
              Whether you are an established enterprise looking to optimize supply chains or an ambitious entrepreneur searching for innovative products, attending the 140th Canton Fair in 2026 is your gateway to global manufacturing giants.
            </p>
            
            {/* Highlighted box */}
            <div className="glass-card" style={{ padding: '20px', borderLeft: '4px solid var(--accent-gold)', background: 'var(--card-highlight-bg)' }}>
              <p style={{ fontSize: '15px', color: 'var(--text-light)', margin: 0, fontStyle: 'italic' }}>
                "Canton Fair is not just an exhibition—it is the birthplace of global retail trends and international joint ventures."
              </p>
            </div>
          </motion.div>

          {/* Right Metrics Grid Column */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="glass-card" 
                style={{ 
                  padding: '30px 24px', 
                  transition: 'transform 0.3s ease, border-color 0.3s ease',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  transform: 'translateY(-5px)',
                  borderColor: 'rgba(0, 180, 216, 0.3)',
                  boxShadow: '0 10px 30px rgba(2, 12, 27, 0.5)'
                }}
              >
                <div style={{ marginBottom: '15px', display: 'inline-block' }}>
                  {stat.icon}
                </div>
                <h3 style={{ fontSize: '28px', color: 'var(--text-light)', marginBottom: '5px', fontFamily: 'var(--font-sans)', fontWeight: '700' }}>
                  {stat.value}
                </h3>
                <h4 style={{ fontSize: '16px', color: 'var(--accent-gold)', marginBottom: '10px', fontWeight: '600', fontFamily: 'var(--font-sans)' }}>
                  {stat.title}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '13px', margin: 0, lineHeight: '1.5' }}>
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutFair;
