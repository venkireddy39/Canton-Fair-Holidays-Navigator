import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Users } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section id="why-us">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Holidays Navigator</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>Your trusted partner for international business travel</p>
        </div>
        
        <div className="features-grid">
          <motion.div 
            className="feature-card glass-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Award className="feature-icon" size={48} />
            <h3 style={{ marginBottom: '15px' }}>Industry Expertise</h3>
            <p style={{ color: 'var(--text-muted)' }}>Years of experience in organizing business delegations to Canton Fair.</p>
          </motion.div>
          
          <motion.div 
            className="feature-card glass-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Briefcase className="feature-icon" size={48} />
            <h3 style={{ marginBottom: '15px' }}>Business Focused</h3>
            <p style={{ color: 'var(--text-muted)' }}>Packages tailored specifically for entrepreneurs and importers.</p>
          </motion.div>
          
          <motion.div 
            className="feature-card glass-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Users className="feature-icon" size={48} />
            <h3 style={{ marginBottom: '15px' }}>Networking</h3>
            <p style={{ color: 'var(--text-muted)' }}>Travel with a community of like-minded Indian entrepreneurs.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
