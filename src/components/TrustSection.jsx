import React from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, Users, Globe, Building2, Flame } from 'lucide-react';

const TrustSection = () => {
  const stats = [
    { 
      id: 1,
      icon: <Users size={32} className="stat-icon-color" />,
      number: "500+", 
      label: "Entrepreneurs Assisted", 
      desc: "Delivering stress-free business travel experiences to Canton Fair." 
    },
    { 
      id: 2,
      icon: <ShieldCheck size={32} className="stat-icon-color" />,
      number: "100%", 
      label: "Visa Advisory Success", 
      desc: "Comprehensive China Business Visa guidelines and documentation support." 
    },
    { 
      id: 3,
      icon: <Globe size={32} className="stat-icon-color" />,
      number: "10+", 
      label: "Years Sourcing Presence", 
      desc: "Trusted relationships with premium trade delegations." 
    },
    { 
      id: 4,
      icon: <Building2 size={32} className="stat-icon-color" />,
      number: "15+", 
      label: "Partner Hotels Near Pazhou", 
      desc: "Handpicked premium twin-sharing hotel rooms with private shuttles." 
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rajesh Malhotra",
      role: "CEO, Malco Electronics",
      location: "New Delhi, India",
      rating: 5,
      feedback: "Sourcing for our retail chain was extremely complex until we booked with Holidays Navigator. The business visa processing was seamless, and the hotel shuttle saved us hours of daily commute to the Pazhou complex. A game changer for Phase 1!"
    },
    {
      id: 2,
      name: "Ahmed Al-Mansoori",
      role: "Managing Director, Mansoori Trade LLC",
      location: "Dubai, UAE",
      rating: 5,
      feedback: "Highly professional service! The premium twin-sharing room accommodation was outstanding, and having access to translators on-ground helped us negotiate critical supplier contracts smoothly. Will book again for the next phase."
    },
    {
      id: 3,
      name: "Samuel Osei",
      role: "Founder, AfroGlow Importers",
      location: "Accra, Ghana",
      rating: 5,
      feedback: "Holidays Navigator took away all the logistics headaches. I could focus entirely on vetting manufacturers. The pre-registration support for the Canton Fair badge was extremely helpful. Highly recommended!"
    }
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80",
      alt: "Premium Business Hotel lobby and check-in experience in Guangzhou",
      title: "Handpicked Premium Hotels"
    },
    {
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      alt: "Zhujiang New Town Skyline and Guangzhou business district",
      title: "Guangzhou Sourcing Hub"
    },
    {
      url: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=600&q=80",
      alt: "Entrepreneurs collaborating during Canton Fair delegation meetings",
      title: "Delegation Cooperation"
    },
    {
      url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80",
      alt: "Business negotiations at factory sourcing display",
      title: "Supplier Negotiations"
    }
  ];

  return (
    <section id="trust-signals" style={{ padding: '80px 0', background: 'var(--bg-dark)' }}>
      <div className="container">
        
        {/* Authority Metrics / Numbers */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', marginBottom: '15px' }}>
              Proven Sourcing Success in Numbers
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>
              We build trust through performance. Here is how we empower trade importers globally.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '30px' 
          }}>
            {stats.map((stat) => (
              <motion.div 
                key={stat.id}
                className="glass-card"
                style={{ 
                  padding: '30px 25px', 
                  borderRadius: '16px', 
                  textAlign: 'center',
                  border: '1px solid var(--border-color)',
                  background: 'var(--card-bg)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                  {stat.icon}
                </div>
                <div style={{ 
                  fontSize: '2.8rem', 
                  fontWeight: '800', 
                  color: 'var(--accent-green)',
                  fontFamily: 'var(--font-sans)',
                  lineHeight: '1.1',
                  marginBottom: '10px'
                }}>
                  {stat.number}
                </div>
                <h4 style={{ 
                  fontSize: '1.1rem', 
                  color: 'var(--text-light)', 
                  fontWeight: '700',
                  marginBottom: '10px' 
                }}>
                  {stat.label}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Trust Gallery */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', marginBottom: '15px' }}>
              Guangzhou Business & Sourcing Atmosphere
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>
              Authentic destination snapshots from premium hotels, business negotiations, and trade delegation support.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', 
            gap: '20px' 
          }}>
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                style={{ 
                  position: 'relative', 
                  borderRadius: '16px', 
                  overflow: 'hidden', 
                  height: '240px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                  border: '1px solid var(--border-color)'
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <img 
                  src={img.url} 
                  alt={img.alt} 
                  loading="lazy" 
                  style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  right: 0, 
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95), transparent)', 
                  padding: '20px 15px',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'flex-end'
                }}>
                  <span style={{ fontSize: '1rem', fontWeight: '700', fontFamily: 'var(--font-sans)' }}>
                    {img.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Authentic Customer Testimonials */}
        <div>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', marginBottom: '15px' }}>
              What Successful Sourcing Importers Say
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '18px', maxWidth: '700px', margin: '0 auto' }}>
              Real feedback from entrepreneurs who leveraged our visa advisory, premium hotel shuttle, and trade logistics.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '30px' 
          }}>
            {testimonials.map((test) => (
              <motion.div
                key={test.id}
                className="glass-card"
                style={{ 
                  padding: '35px 30px', 
                  borderRadius: '16px', 
                  border: '1px solid var(--border-color)',
                  background: 'var(--card-bg)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.05)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="var(--accent-gold)" color="var(--accent-gold)" />
                    ))}
                  </div>
                  <p style={{ 
                    color: 'var(--text-muted)', 
                    fontSize: '1.05rem', 
                    lineHeight: '1.65', 
                    fontStyle: 'italic',
                    marginBottom: '25px'
                  }}>
                    "{test.feedback}"
                  </p>
                </div>
                
                <div style={{ 
                  borderTop: '1px solid var(--border-color)', 
                  paddingTop: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}>
                  <div style={{ 
                    width: '45px', 
                    height: '45px', 
                    borderRadius: '50%', 
                    background: 'linear-gradient(135deg, var(--accent-green), var(--accent-cyan))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: '800',
                    fontSize: '1.1rem'
                  }}>
                    {test.name[0]}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--text-light)', fontWeight: '700', margin: 0 }}>
                      {test.name}
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', margin: 0 }}>
                      {test.role} • <span style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>{test.location}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
