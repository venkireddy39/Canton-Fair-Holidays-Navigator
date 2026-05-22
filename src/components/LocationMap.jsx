import React, { useState, useRef, useCallback, memo } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone, Building } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './LocationMap.css';

// Create a custom premium marker using Leaflet's divIcon
const customMarkerIcon = new L.divIcon({
  className: 'custom-marker',
  html: `<div class="marker-pin"></div><div class="marker-pulse"></div>`,
  iconSize: [30, 30],
  iconAnchor: [15, 15],
  popupAnchor: [0, -15]
});

// Performance optimized 3D Tilt Address Card using React.memo and useCallback
const AddressCard3D = memo(({ directionsUrl }) => {
  const cardRef = useRef(null);
  
  // Track dynamic inline styles for 3D tilt, realistic shadows, and perspective scale
  const [tiltStyle, setTiltStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.5s cubic-bezier(0.03, 0.98, 0.52, 0.99), box-shadow 0.5s ease'
  });

  // Track coordinates and visibility of the dynamic radial spotlight glow
  const [glowStyle, setGlowStyle] = useState({
    opacity: 0,
    background: 'radial-gradient(circle 220px at 0px 0px, rgba(236, 72, 153, 0.15), rgba(0, 180, 216, 0.2) 50%, transparent 100%)',
    transition: 'opacity 0.5s ease'
  });

  // Mouse Move listener: performs smooth 3D tilt rotations and updates shadow angle & radial spotlight position
  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    
    // Mouse cursor coordinates relative to the card's bounding rectangle
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Middle points of the card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate tilt rotations (max angle: 10 degrees on both X and Y axes)
    const rotateX = ((centerY - y) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;
    
    // Shadow offsets calculations (simulating dynamic light angles opposing rotation)
    const shadowX = -rotateY * 2;
    const shadowY = rotateX * 2;
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
      boxShadow: `${shadowX}px ${shadowY}px 30px rgba(0, 0, 0, 0.45), 0 15px 30px rgba(0, 0, 0, 0.3)`,
      transition: 'transform 0.1s cubic-bezier(0.03, 0.98, 0.52, 0.99)'
    });
    
    setGlowStyle({
      opacity: 1,
      background: `radial-gradient(circle 220px at ${x}px ${y}px, rgba(236, 72, 153, 0.18), rgba(0, 180, 216, 0.18) 50%, transparent 100%)`,
      transition: 'opacity 0.25s ease'
    });
  }, []);

  // Mouse Leave listener: smoothly resets card tilt back to normal position
  const handleMouseLeave = useCallback(() => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.6s cubic-bezier(0.03, 0.98, 0.52, 0.99), box-shadow 0.6s ease'
    });
    setGlowStyle({
      opacity: 0,
      background: 'radial-gradient(circle 220px at 0px 0px, rgba(236, 72, 153, 0.18), rgba(0, 180, 216, 0.18) 50%, transparent 100%)',
      transition: 'opacity 0.6s ease'
    });
  }, []);

  // Accessibility: Full Keyboard focus / focus ring emulation
  const handleFocus = useCallback(() => {
    setTiltStyle(prev => ({
      ...prev,
      boxShadow: '0 0 0 3px var(--accent-cyan), 0 20px 40px rgba(0, 0, 0, 0.5)',
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1.02, 1.02, 1.02)'
    }));
  }, []);

  const handleBlur = useCallback(() => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      boxShadow: '0 15px 30px rgba(0, 0, 0, 0.3)',
      transition: 'transform 0.5s ease, box-shadow 0.5s ease'
    });
  }, []);

  return (
    <motion.div 
      ref={cardRef}
      className="office-details-card glass-card card-3d"
      style={tiltStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      tabIndex={0}
      role="region"
      aria-label="Holidays Navigator Office Location Details and Contact Info"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* Dynamic Glow Spotlight Overlay */}
      <div className="card-glow-overlay" style={glowStyle} />

      {/* 3D Depth Grid Background Image Overlay with Hover Transition */}
      <div className="card-3d-bg-grid" />
      
      {/* 3D Parallax Content Elements (Using preserve-3d and scale depths) */}
      <div className="office-header" style={{ transform: 'translateZ(35px)', transformStyle: 'preserve-3d' }}>
        <div className="office-icon-wrapper" style={{ transform: 'translateZ(15px)' }}>
          <Building size={24} />
        </div>
        <h3 style={{ transform: 'translateZ(20px)' }}>Holidays Navigator</h3>
      </div>

      <div className="office-info" style={{ transform: 'translateZ(25px)', transformStyle: 'preserve-3d' }}>
        <div className="info-row" style={{ transform: 'translateZ(10px)' }}>
          <MapPin className="info-icon" />
          <div>
            <h4>Address</h4>
            <p>
              Holidays Navigator,<br/>
              4th Floor, Trendz Uptown,<br/>
              Kakatiya Hills, Guttala Begumpet,<br/>
              Kavuri Hills, Madhapur,<br/>
              Hyderabad, Telangana 500033
            </p>
          </div>
        </div>

        <div className="info-row" style={{ transform: 'translateZ(10px)' }}>
          <Phone className="info-icon" />
          <div>
            <h4>Contact Numbers</h4>
            <a href="tel:+919533444455" className="phone-link">+91 9533444455</a>
            <a href="tel:+919121388338" className="phone-link">+91 9121388338</a>
          </div>
        </div>
      </div>

      <div className="location-actions" style={{ transform: 'translateZ(30px)' }}>
        <a href={directionsUrl} target="_blank" rel="noreferrer" className="action-button primary">
          <Navigation size={18} />
          Get Directions
        </a>
      </div>
    </motion.div>
  );
});

AddressCard3D.displayName = 'AddressCard3D';

const LocationMap = () => {
  // Exact Office Coordinates
  const officeLocation = [17.4426077, 78.3981897];
  const directionsUrl = 'https://www.google.com/maps/place/Holidays+Navigator/@17.4426128,78.3956148,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9960394cb051:0x7f298b8b46d990d5!8m2!3d17.4426077!4d78.3981897!16s%2Fg%2F11tdtddp9b?entry=ttu&g_ep=EgoyMDI2MDUxNy4wIKXMDSoASAFQAw%3D%3D';

  return (
    <section id="location" className="location-section">
      <div className="container">
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Visit Our Office</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px' }}>Drop by to discuss your Canton Fair travel plans</p>
        </motion.div>

        <div className="location-grid">
          {/* Map Container */}
          <motion.div 
            className="map-wrapper"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="map-gradient-border">
              <MapContainer 
                center={officeLocation} 
                zoom={16} 
                scrollWheelZoom={false}
                className="leaflet-map-container"
              >
                {/* Premium Light Theme Map Tiles from CartoDB */}
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />
                <Marker position={officeLocation} icon={customMarkerIcon}>
                  <Popup className="premium-popup">
                    <strong>Holidays Navigator Office</strong><br />
                    4th Floor, Trendz Uptown
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </motion.div>

          {/* Performance Optimized 3D Tilt Address Card */}
          <AddressCard3D directionsUrl={directionsUrl} />
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
