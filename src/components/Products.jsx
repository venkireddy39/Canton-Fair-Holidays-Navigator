import React, { useRef, useState, useEffect } from 'react';
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
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationRef = useRef(null);
  const isManuallyScrolling = useRef(false);

  const startAutoScroll = () => {
    if (isHovered || isManuallyScrolling.current || !scrollRef.current) return;
    
    scrollRef.current.scrollLeft += 0.15; // Extremely slow scroll speed
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    if (scrollLeft >= scrollWidth - clientWidth - 2) {
      scrollRef.current.scrollLeft = 0; // Loop back
    }
    
    animationRef.current = requestAnimationFrame(startAutoScroll);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(startAutoScroll);
    return () => cancelAnimationFrame(animationRef.current);
  }, [isHovered]);

  const handleManualScroll = (direction) => {
    if (!scrollRef.current) return;
    
    isManuallyScrolling.current = true;
    cancelAnimationFrame(animationRef.current);
    
    const amount = direction === 'left' ? -344 : 344;
    scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    
    // Resume auto-scroll after the smooth manual scroll completes
    setTimeout(() => {
      isManuallyScrolling.current = false;
      if (!isHovered) {
        animationRef.current = requestAnimationFrame(startAutoScroll);
      }
    }, 600);
  };

  return (
    <section id="products" style={{ position: 'relative' }}>
      <div className="container">
        <div className="section-header">
          <span className="hero-subtitle" style={{ fontSize: '14px', marginBottom: '10px' }}>What You Can Source</span>
          <h2>Major Sourcing Categories</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px', marginBottom: '20px' }}>
            Direct access to millions of products across all major physical industries
          </p>
        </div>

        <style>
          {`
            .carousel-wrapper {
              display: flex;
              gap: 24px;
              overflow-x: auto;
              scrollbar-width: none; /* Firefox */
              padding: 10px 0 30px 0;
              -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
              mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
            }
            .carousel-wrapper::-webkit-scrollbar {
              display: none; /* Safari and Chrome */
            }
            .carousel-item {
              flex-shrink: 0;
            }
          `}
        </style>

        <div 
          className="carousel-wrapper" 
          ref={scrollRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {[...categories, ...categories, ...categories, ...categories].map((cat, index) => (
            <div key={index} className="carousel-item">
              <motion.div
                className="glass-card"
                style={{
                  width: '320px', /* Fixed width for consistent scrolling */
                  flexShrink: 0,
                  padding: '30px 24px',
                  border: '1px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'border-color 0.3s ease, transform 0.3s ease'
                }}
                whileHover={{
                  transform: 'translateY(-5px)',
                  borderColor: 'rgba(0, 180, 216, 0.3)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
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
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginTop: '10px' }}>
          <button 
            onClick={() => handleManualScroll('left')}
            aria-label="Scroll left"
            style={{
              background: 'transparent',
              color: 'var(--text-muted)',
              border: 'none',
              fontSize: '28px',
              fontWeight: '600',
              fontFamily: 'monospace',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-green)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            &lt;
          </button>
          <button 
            onClick={() => handleManualScroll('right')}
            aria-label="Scroll right"
            style={{
              background: 'transparent',
              color: 'var(--text-muted)',
              border: 'none',
              fontSize: '28px',
              fontWeight: '600',
              fontFamily: 'monospace',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'color 0.3s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent-green)'}
            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
