import React from 'react';
import SeoHelmet from '../components/SeoHelmet';
import ContactCTA from '../components/ContactCTA';
import { Link } from 'react-router-dom';
import { Car, Clock, Users, ShieldCheck, Wifi, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AirportTransferPage() {
  return (
    <>
      <SeoHelmet
        title="Canton Fair Airport Transfers | Guangzhou Baiyun to Exhibition"
        description="Book seamless Canton Fair airport transfers. Get pre-booked, private rides from Guangzhou Baiyun International Airport directly to your hotel or fair venue."
        canonical="https://yourdomain.com/canton-fair-airport-transfer"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Airport Transfer', url: '/canton-fair-airport-transfer' }
        ]}
        faq={[
          {
            question: "How far is the fair from the airport?",
            answer: "Approximately 40 km – a 45-minute drive depending on traffic."
          },
          {
            question: "Can I book a private car?",
            answer: "Yes – we partner with premium car services that offer door-to-door pickup."
          },
          {
            question: "Do drivers wait for delayed flights?",
            answer: "Yes – we monitor flight status and will wait up to 30 minutes."
          }
        ]}
      />

      <section className="page-hero">
        <div className="page-hero-content">
        <h1>Private Canton Fair Airport Transfers | Guangzhou Baiyun Options</h1>
        <p>
          Stress-free rides from Guangzhou Baiyun International Airport to the Canton Fair.
        </p>
      </div>
      </section>

      <section className="page-section">
        <h2 className="text-3xl font-bold text-light mb-4">Why Book a Transfer?</h2>
        <p className="text-muted max-w-3xl mx-auto">
          Avoid the hassle of public transport, get a driver who knows the best routes, and arrive refreshed.
        </p>
      </section>



      <section className="page-section page-section-light">
        <div className="container text-center">
          <h3 className="text-2xl font-bold text-light mb-6">Related Pages</h3>
          <div className="related-grid">
            <Link to="/canton-fair-packages" className="related-card">Travel Packages</Link>
            <Link to="/canton-fair-2026-guide" className="related-card">Fair Guide</Link>
            <Link to="/best-hotels-near-canton-fair" className="related-card">Hotels</Link>
            <Link to="/guangzhou-business-visa-guide" className="related-card">Visa Guide</Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
