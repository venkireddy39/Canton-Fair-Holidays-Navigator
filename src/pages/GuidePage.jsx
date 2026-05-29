import React from 'react';
import SeoHelmet from '../components/SeoHelmet';
import { Link } from 'react-router-dom';
import ContactCTA from '../components/ContactCTA';

function GuidePage() {
  const faqItems = [
    { question: 'When does the 2026 Canton Fair start?', answer: 'Phase 1 starts on October 15, 2026, followed by Phase 2 on October 23 and Phase 3 on October 31.' },
    { question: 'Where is the Canton Fair held?', answer: 'The fair takes place at the China Import and Export Fair Complex in Guangzhou, China.' },
    { question: 'How can I register for the fair?', answer: 'You can register online via the official Canton Fair website or through our dedicated registration guide page.' },
  ];

  return (
    <>
      <SeoHelmet
        title="Complete Canton Fair 2026 Guide | Schedules, Venues & Logistics"
        description="Your complete guide to the Canton Fair 2026 in Guangzhou. Explore phase schedules, venues, registration steps, recommended hotels, and visa requirements."
        canonical="https://holidaysnavigator.com/canton-fair-2026-guide"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Canton Fair Guide', url: '/canton-fair-2026-guide' }
        ]}
        faq={faqItems}
        article={true}
      />
      <main className="page-container">
        <section className="page-hero">
        <div className="page-hero-content">
          <h1 style={{ color: '#fff', fontSize: '2.8rem', marginBottom: '20px' }}>Complete Canton Fair 2026 Guide | Schedules, Venues & Logistics</h1>
          <p style={{ color: '#e0e0e0', fontSize: '1.2rem' }}>Everything you need to know – phases, venues, hotels, visa, transport, and registration.</p>
        </div>
      </section>
        <section className="overview-section" style={{ padding: '40px 20px' }}>
          <h2>Overview</h2>
          <p>The Canton Fair is the world’s largest trade fair, attracting millions of visitors. Our guide helps you navigate each phase, find accommodation, handle visa requirements, and book airport transfers.</p>
        </section>
        <section className="main-content" style={{ padding: '40px 20px' }}>
          <h2>Key Highlights</h2>
          <ul>
            <li>Phase 1 – Electronics & Machinery (Oct 15‑19)</li>
            <li>Phase 2 – Consumer Goods & Home Décor (Oct 23‑27)</li>
            <li>Phase 3 – Textiles, Garments & Shoes (Oct 31‑Nov 4)</li>
            <li>Best hotels near the venue</li>
            <li>Visa application guide for international visitors</li>
            <li>Airport transfer options and registration steps</li>
          </ul>
        </section>
        <section className="benefits-section" style={{ padding: '40px 20px', background: 'var(--bg-light)' }}>
          <h2>Why Use Our Guide?</h2>
          <div className="cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr)', gap: '20px' }}>
            <div className="card" style={{ padding: '20px', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
              <h3>Comprehensive</h3>
              <p>All phases, logistics, and tips in one place.</p>
            </div>
            <div className="card" style={{ padding: '20px', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
              <h3>Up‑to‑date</h3>
              <p>Official information verified for 2026.</p>
            </div>
            <div className="card" style={{ padding: '20px', border: '1px solid var(--border-color)', borderRadius: '12px' }}>
              <h3>Easy Booking</h3>
              <p>Direct links to hotels, visas, and transport.</p>
            </div>
          </div>
        </section>
        <section className="internal-links" style={{ padding: '40px 20px' }}>
          <h2>Explore More</h2>
          <ul>
            <li><Link to="/canton-fair-phase-1-products">Phase 1 Products</Link></li>
            <li><Link to="/canton-fair-phase-2-products">Phase 2 Products</Link></li>
            <li><Link to="/canton-fair-phase-3-products">Phase 3 Products</Link></li>
            <li><Link to="/best-hotels-near-canton-fair">Best Hotels Near Canton Fair</Link></li>
            <li><Link to="/guangzhou-business-visa-guide">Guangzhou Business Visa Guide</Link></li>
            <li><Link to="/canton-fair-airport-transfer">Airport Transfer Options</Link></li>
            <li><Link to="/how-to-register-for-canton-fair">How to Register</Link></li>
          </ul>
        </section>
        <section className="faq-section" style={{ padding: '40px 20px' }}>
          <h2>Frequently Asked Questions</h2>
          <ul>
            {faqItems.map((item, idx) => (
              <li key={idx} style={{ marginBottom: '15px' }}>
                <strong>{item.question}</strong><br />{item.answer}
              </li>
            ))}
          </ul>
        </section>
        <ContactCTA />
      </main>
    </>
  );
}

export default GuidePage;
