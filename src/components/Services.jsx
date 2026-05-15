import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Building2, Headset, Plane, Ticket, Bus } from 'lucide-react';

const services = [
  { icon: <FileText size={32} />, title: "Visa Processing", desc: "Expert assistance with China Business Visa applications." },
  { icon: <Building2 size={32} />, title: "Premium Hotel", desc: "Comfortable stay in handpicked premium business hotels." },
  { icon: <Plane size={32} />, title: "Flight Booking", desc: "Hassle-free return flight arrangements included." },
  { icon: <Ticket size={32} />, title: "Canton Registration", desc: "Official Canton Fair buyer badge registration assistance." },
  { icon: <Bus size={32} />, title: "SIC Transfers", desc: "Comfortable shared transfers between hotel and exhibition." },
  { icon: <Headset size={32} />, title: "24/7 Assistance", desc: "On-ground and virtual support throughout your journey." }
];

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="section-header">
          <h2>What's Included</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>Comprehensive services for a worry-free business trip</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="glass-card service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
