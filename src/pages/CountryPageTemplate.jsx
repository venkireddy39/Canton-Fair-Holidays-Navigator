import React from 'react';
import SeoHelmet from '../components/SeoHelmet';
import ContactCTA from '../components/ContactCTA';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Plane, ShieldCheck, Building2, Ticket, CheckCircle2 } from 'lucide-react';

export default function CountryPageTemplate({ country, seoTitle, seoDescription, slug }) {
  return (
    <>
      <SeoHelmet
        title={seoTitle}
        description={seoDescription}
        canonical={`https://holidaysnavigator.com/${slug}`}
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: `Canton Fair from ${country}`, url: `/${slug}` }
        ]}
        faq={[
          {
            question: `How can I travel from ${country} to the Canton Fair?`,
            answer: `We provide complete travel assistance from ${country}, including flight booking guidance, Guangzhou airport transfers, and premium hotel stays near the Pazhou complex.`
          },
          {
            question: `Do you help with the China Business Visa for citizens of ${country}?`,
            answer: `Yes, we offer expert assistance in securing your official Canton Fair invitation letter and processing your China Business (M) Visa.`
          }
        ]}
        article={true}
      />

      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Canton Fair 2026 Travel Packages from {country}</h1>
          <p>
            Complete travel, visa, and business support tailored for entrepreneurs from {country}.
          </p>
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-light)', marginBottom: '20px' }}>
              Your Gateway to the Canton Fair from {country}
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto' }}>
              Attending the world's largest trade fair has never been easier. We handle the complex logistics so you can focus on sourcing products, networking, and growing your business.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '60px' }}>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="glass-card" style={{ padding: '30px', borderRadius: '16px', border: '1px solid var(--border-color)' }}
            >
              <div style={{ width: '50px', height: '50px', background: 'rgba(0, 180, 216, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Plane size={24} className="text-accent-cyan" />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-light)', marginBottom: '15px' }}>Flight & Transport</h3>
              <p style={{ color: 'var(--text-muted)' }}>Expert guidance on the best flight routes from {country} to Guangzhou (CAN) or Hong Kong (HKG), plus seamless airport pickups.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="glass-card" style={{ padding: '30px', borderRadius: '16px', border: '1px solid var(--border-color)' }}
            >
              <div style={{ width: '50px', height: '50px', background: 'rgba(0, 180, 216, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <ShieldCheck size={24} className="text-accent-cyan" />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-light)', marginBottom: '15px' }}>Visa Processing</h3>
              <p style={{ color: 'var(--text-muted)' }}>We assist with the official Canton Fair invitation letter and guide you through the China Business (M) Visa application process.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="glass-card" style={{ padding: '30px', borderRadius: '16px', border: '1px solid var(--border-color)' }}
            >
              <div style={{ width: '50px', height: '50px', background: 'rgba(0, 180, 216, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Building2 size={24} className="text-accent-cyan" />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-light)', marginBottom: '15px' }}>Premium Hotels</h3>
              <p style={{ color: 'var(--text-muted)' }}>Stay in handpicked business hotels near the Pazhou exhibition complex, complete with free Wi-Fi, halal/vegetarian breakfast options, and daily shuttles.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="glass-card" style={{ padding: '30px', borderRadius: '16px', border: '1px solid var(--border-color)' }}
            >
              <div style={{ width: '50px', height: '50px', background: 'rgba(0, 180, 216, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Ticket size={24} className="text-accent-cyan" />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-light)', marginBottom: '15px' }}>Fair Registration</h3>
              <p style={{ color: 'var(--text-muted)' }}>Skip the long queues. We help you pre-register online so your official Buyer Badge is ready for immediate entry.</p>
            </motion.div>
          </div>

          <div style={{ background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(14, 165, 233, 0.02))', padding: '40px', borderRadius: '20px', border: '1px solid rgba(14, 165, 233, 0.2)' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--text-light)', marginBottom: '20px' }}>Why Travel with Us?</h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={20} className="text-accent-green" /> <span>End-to-end travel coordination from {country}.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={20} className="text-accent-green" /> <span>Local Indian, Middle Eastern, and African community networking.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={20} className="text-accent-green" /> <span>Dedicated translation and sourcing assistance.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)' }}>
                <CheckCircle2 size={20} className="text-accent-green" /> <span>24/7 on-ground support in Guangzhou.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="page-section page-section-light">
        <div className="container text-center">
          <h3 className="text-2xl font-bold text-light mb-6">Explore More</h3>
          <div className="related-grid">
            <Link to="/canton-fair-packages" className="related-card">Travel Packages</Link>
            <Link to="/canton-fair-2026-guide" className="related-card">Fair Guide</Link>
            <Link to="/guangzhou-business-visa-guide" className="related-card">Visa Requirements</Link>
            <Link to="/best-hotels-near-canton-fair" className="related-card">Premium Hotels</Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
