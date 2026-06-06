import { motion } from 'framer-motion';
import { FileText, Building2, Car, MessageSquare, Factory, Navigation } from 'lucide-react';

const services = [
  { icon: <Building2 size={32} />, title: "Hotels", desc: "Premium business hotel accommodation near the Canton Fair complex." },
  { icon: <FileText size={32} />, title: "Visa Support", desc: "Expert processing assistance for your China Business Visa." },
  { icon: <Car size={32} />, title: "Airport Pickup", desc: "Seamless airport transfers and daily exhibition shuttle services." },
  { icon: <MessageSquare size={32} />, title: "Translation Assistance", desc: "Professional interpreters to help you negotiate smoothly." },
  { icon: <Factory size={32} />, title: "Factory Visits", desc: "Arranged trips to local manufacturing hubs and wholesale markets." },
  { icon: <Navigation size={32} />, title: "Exhibition Guidance", desc: "Strategic planning to help you navigate the 1.5 million sqm fair." }
];

const Services = () => {
  return (
    <section id="services">
      <div className="container">
        <div className="section-header">
          <h2>What's Included in Our Canton Fair Travel Packages</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(13px, 1.8vw, 18px)' }}>Comprehensive services including Guangzhou hotels, Canton Fair visa support, and airport transfer.</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              id={service.title === "Visa Processing" ? "visa" : undefined}
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
