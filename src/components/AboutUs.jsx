import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Award, CalendarDays, ShieldAlert, BadgeCheck, FileCheck } from 'lucide-react';

const AboutUs = () => {
  const credentials = [
    {
      icon: <BadgeCheck size={28} className="stat-icon-color" />,
      title: "Licensed B2B Agency",
      desc: "Accredited travel consultant providing legal business visa advisory, safe accommodation procurement, and verified delegation operations."
    },
    {
      icon: <Award size={28} className="stat-icon-color" />,
      title: "10+ Years Experience",
      desc: "Specialized in organizing business travel delegations, factory audit transport, translation logistics, and sourcing exhibition trips globally."
    },
    {
      icon: <FileCheck size={28} className="stat-icon-color" />,
      title: "EEAT Document Verification",
      desc: "Rigorous vetting of China Business Invitation Letters and registration protocols to eliminate rejection risks."
    }
  ];

  return (
    <section id="about-us" style={{ padding: '80px 0', background: 'rgba(255, 255, 255, 0.02)', borderTop: '1px solid var(--border-color)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
          
          {/* Left Column: Mission & E-E-A-T signals */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero-subtitle" style={{ fontSize: '14px', marginBottom: '10px', display: 'block', color: 'var(--accent-gold)', fontWeight: '700' }}>
              Corporate Credibility & E-E-A-T
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '20px', lineHeight: '1.25', fontFamily: 'var(--font-serif)' }}>
              About <span className="gradient-text">Holidays Navigator</span>
            </h2>
            
            <p style={{ color: 'var(--text-light)', fontSize: '1.1rem', marginBottom: '18px', lineHeight: '1.7', fontWeight: '500' }}>
              Holidays Navigator is a registered B2B corporate travel agency based in India. We specialize in seamless, premium, end-to-end travel logistics for international trade delegations.
            </p>
            
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '25px', lineHeight: '1.7' }}>
              For over a decade, we have partnered with manufacturing associations, retail chains, and solo importers to bridge the gap between local sourcing needs and global factory networks. Our primary expertise lies in ensuring visa advisory compliance, securing premium lodging directly linked to exhibition complexes, and providing on-ground assistance that eliminates logistics stress.
            </p>

            <div style={{ 
              background: 'var(--card-highlight-bg)', 
              padding: '20px', 
              borderRadius: '12px',
              borderLeft: '4px solid var(--accent-gold)',
              marginBottom: '20px'
            }}>
              <h4 style={{ color: 'var(--text-light)', fontSize: '1.1rem', fontWeight: '700', marginBottom: '5px' }}>
                Corporate Transparent Office Details
              </h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5', margin: 0 }}>
                Holidays Navigator, 4th Floor, Trendz Uptown, Kakatiya Hills, Guttala Begumpet, Madhapur, Hyderabad, Telangana 500033.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Dynamic Credentials list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
            {credentials.map((cred, idx) => (
              <motion.div
                key={idx}
                className="glass-card"
                style={{ 
                  padding: '25px 30px', 
                  borderRadius: '16px', 
                  border: '1px solid var(--border-color)',
                  background: 'var(--card-bg)',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div style={{ 
                  background: 'rgba(0, 119, 182, 0.06)', 
                  padding: '12px', 
                  borderRadius: '12px',
                  color: 'var(--accent-gold)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {cred.icon}
                </div>
                <div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    color: 'var(--text-light)', 
                    fontWeight: '700', 
                    marginBottom: '8px',
                    fontFamily: 'var(--font-sans)'
                  }}>
                    {cred.title}
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
                    {cred.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
