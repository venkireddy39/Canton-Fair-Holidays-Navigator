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
            <h1 style={{ color: '#fff', fontSize: 'clamp(1.96rem, 7.0vw, 2.8rem)', marginBottom: '20px' }}>Complete Canton Fair 2026 Guide | Schedules, Venues & Logistics</h1>
            <p style={{ color: '#e0e0e0', fontSize: 'clamp(0.84rem, 3.0vw, 1.2rem)' }}>Everything you need to know – phases, venues, hotels, visa, transport, and registration.</p>
          </div>
        </section>
        <section className="overview-section" style={{ padding: '60px 0' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.75rem, 6.3vw, 2.5rem)', marginBottom: '20px', textAlign: 'center' }}>Overview</h2>
            <p style={{ fontSize: 'clamp(0.77rem, 2.8vw, 1.1rem)', textAlign: 'center', maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }}>The Canton Fair is the world’s largest trade fair, attracting millions of visitors. Our guide helps you navigate each phase, find accommodation, handle visa requirements, and book airport transfers.</p>
          </div>
        </section>
        <section className="main-content page-section-light" style={{ padding: '60px 0' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.75rem, 6.3vw, 2.5rem)', marginBottom: '30px', textAlign: 'center' }}>Key Highlights</h2>
            <ul style={{ maxWidth: '800px', margin: '0 auto', fontSize: 'clamp(0.77rem, 2.8vw, 1.1rem)', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              <li>Phase 1 – Electronics & Machinery (Oct 15‑19)</li>
              <li>Phase 2 – Consumer Goods & Home Décor (Oct 23‑27)</li>
              <li>Phase 3 – Textiles, Garments & Shoes (Oct 31‑Nov 4)</li>
              <li>Best hotels near the venue</li>
              <li>Visa application guide for international visitors</li>
              <li>Airport transfer options and registration steps</li>
            </ul>
          </div>
        </section>
        <section className="benefits-section" style={{ padding: '60px 0', background: 'var(--bg-light)' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.75rem, 6.3vw, 2.5rem)', marginBottom: '40px', textAlign: 'center' }}>Why Use Our Guide?</h2>
            <div className="cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '30px' }}>
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
          </div>
        </section>
        <section className="page-section-light">
          <div className="container text-center">
            <h3 className="explore-more-title">Explore More</h3>
            <div className="related-grid">
              <Link to="/canton-fair-phase-1-products" className="related-card">Phase 1 Products</Link>
              <Link to="/canton-fair-phase-2-products" className="related-card">Phase 2 Products</Link>
              <Link to="/canton-fair-phase-3-products" className="related-card">Phase 3 Products</Link>
              <Link to="/best-hotels-near-canton-fair" className="related-card">Best Hotels Near Canton Fair</Link>
              <Link to="/guangzhou-business-visa-guide" className="related-card">Guangzhou Business Visa Guide</Link>
              <Link to="/canton-fair-airport-transfer" className="related-card">Airport Transfer Options</Link>
              <Link to="/how-to-register-for-canton-fair" className="related-card">How to Register</Link>
            </div>
          </div>
        </section>
        <section className="faq-section" style={{ padding: '80px 0' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.75rem, 6.3vw, 2.5rem)', marginBottom: '40px', textAlign: 'center' }}>Frequently Asked Questions</h2>
            <ul style={{ maxWidth: '800px', margin: '0 auto', listStyle: 'none', padding: 0 }}>
              {faqItems.map((item, idx) => (
                <li key={idx} style={{ marginBottom: '25px', padding: '20px', background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                  <strong style={{ fontSize: 'clamp(0.84rem, 3.0vw, 1.2rem)', display: 'block', marginBottom: '10px', color: 'var(--text-light)' }}>{item.question}</strong>
                  <span style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.73rem, 2.6vw, 1.05rem)', lineHeight: '1.6', display: 'block' }}>{item.answer}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <ContactCTA />
      </main>
    </>
  );
}

export default GuidePage;
