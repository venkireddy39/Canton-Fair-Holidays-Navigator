import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink, Phone, Building } from 'lucide-react';
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

const LocationMap = () => {
  // Exact Office Coordinates
  const officeLocation = [17.4426077, 78.3981897];
  const googleMapsUrl = "https://www.google.com/maps/place/Holidays+Navigator/@17.4426,78.3982,17z/data=!4m6!3m5!1s0x3bcb9960394cb051:0x7f298b8b46d990d5!8m2!3d17.4426077!4d78.3981897";
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${officeLocation[0]},${officeLocation[1]}`;

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
                {/* Premium Dark Theme Map Tiles from CartoDB */}
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
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

          {/* Office Details Card */}
          <motion.div 
            className="office-details-card glass-card"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="office-header">
              <div className="office-icon-wrapper">
                <Building size={32} />
              </div>
              <h3>Holidays Navigator</h3>
            </div>

            <div className="office-info">
              <div className="info-row">
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

              <div className="info-row">
                <Phone className="info-icon" />
                <div>
                  <h4>Contact Numbers</h4>
                  <a href="tel:+919533444455" className="phone-link">+91 9533444455</a>
                  <a href="tel:+919121388338" className="phone-link">+91 9121388338</a>
                </div>
              </div>
            </div>

            <div className="location-actions">
              <a href={googleMapsUrl} target="_blank" rel="noreferrer" className="action-button primary">
                <ExternalLink size={18} />
                Open in Maps
              </a>
              <a href={directionsUrl} target="_blank" rel="noreferrer" className="action-button secondary">
                <Navigation size={18} />
                Get Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LocationMap;
