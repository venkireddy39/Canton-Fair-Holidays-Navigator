import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Users } from 'lucide-react';

const WhyChooseUs = () => {
  return (
    <section id="why-us">
      <div className="container">
        <div className="section-header">
          <h2>Why Choose Holidays Navigator for Canton Fair Business Travel</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>Your trusted partner for Canton Fair assistance and international business travel</p>
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
            <h3 style={{ marginBottom: '15px' }}>Canton Fair Expertise</h3>
            <p style={{ color: 'var(--text-muted)' }}>Years of specialized experience guiding Indian entrepreneurs to the world's largest trade fair.</p>
          </motion.div>
          
          <motion.div 
            className="feature-card glass-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Briefcase className="feature-icon" size={48} />
            <h3 style={{ marginBottom: '15px' }}>Business Travel Support</h3>
            <p style={{ color: 'var(--text-muted)' }}>From visa processing to premium hotel bookings, we handle all logistics for a hassle-free trip.</p>
          </motion.div>
          
          <motion.div 
            className="feature-card glass-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Users className="feature-icon" size={48} />
            <h3 style={{ marginBottom: '15px' }}>Local Assistance</h3>
            <p style={{ color: 'var(--text-muted)' }}>On-ground coordination and translation assistance to help you close business deals smoothly.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
