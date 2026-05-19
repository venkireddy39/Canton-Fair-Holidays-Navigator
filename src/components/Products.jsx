import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Hammer, Home as HomeIcon, Shirt, Briefcase } from 'lucide-react';

const categories = [
  {
    icon: <Cpu size={28} />,
    title: "Electronics & Smart Tech",
    items: ["Smart Home Devices", "Consumer Electronics", "LED & Lighting", "Home Appliances"]
  },
  {
    icon: <Hammer size={28} />,
    title: "Machinery & Hardware",
    items: ["Industrial Equipment", "Power Tools", "Hardware & Fasteners", "Electrical Systems"]
  },
  {
    icon: <HomeIcon size={28} />,
    title: "Home Decor & Furniture",
    items: ["Modern Furniture", "Gifts & Ceramics", "Kitchenware", "Gardening Equipment"]
  },
  {
    icon: <Shirt size={28} />,
    title: "Apparel, Textiles & Shoes",
    items: ["Garments & Apparel", "Fashion Accessories", "Textiles & Fabrics", "Footwear"]
  },
  {
    icon: <Briefcase size={28} />,
    title: "Office & Consumer Goods",
    items: ["Office Supplies", "Toys & Baby Products", "Medical Devices", "Beauty Products"]
  }
];

const Products = () => {
  return (
    <section id="products" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="hero-subtitle" style={{ fontSize: '14px', marginBottom: '10px' }}>What You Can Source</span>
          <h2>Major Sourcing Categories</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>
            Direct access to millions of products across all major physical industries
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              className="glass-card"
              style={{
                padding: '30px 24px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'border-color 0.3s ease, transform 0.3s ease'
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                transform: 'translateY(-5px)',
                borderColor: 'rgba(0, 180, 216, 0.3)',
                boxShadow: '0 10px 25px rgba(2, 12, 27, 0.4)'
              }}
            >
              <div 
                style={{ 
                  color: 'var(--accent-green)',
                  background: 'rgba(0, 180, 216, 0.08)',
                  width: '54px',
                  height: '54px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}
              >
                {cat.icon}
              </div>
              <h3 style={{ fontSize: '20px', marginBottom: '15px', color: 'var(--text-light)', fontFamily: 'var(--font-sans)', fontWeight: '600' }}>
                {cat.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {cat.items.map((item, idx) => (
                  <li 
                    key={idx} 
                    style={{ 
                      fontSize: '14px', 
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                  >
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--accent-gold)' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
