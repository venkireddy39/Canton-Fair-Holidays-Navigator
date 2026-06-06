import SeoHelmet from '../components/SeoHelmet';
import ContactCTA from '../components/ContactCTA';
import { phases } from '../data/phases';
import { Link } from 'react-router-dom';

const phase = phases[0]; // Phase 1

export default function Phase1Page() {
  return (
    <>
      <SeoHelmet
        title="Canton Fair Phase 1 Products Guide | Electronics & Machinery 2026"
        description="Discover Canton Fair Phase 1 product categories, focusing on consumer electronics, smart home tech, industrial machinery, and automotive parts for 2026."
        canonical="https://yourdomain.com/canton-fair-phase-1-products"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Phase 1 Products', url: '/canton-fair-phase-1-products' }
        ]}
        faq={[
          {
            question: "What categories are covered in Phase 1?",
            answer: "Consumer electronics, smart home devices, industrial machinery, automotive parts, renewable energy solutions and more."
          },
          {
            question: "How can I book a meeting with a supplier?",
            answer: "Click the “Register for Phase 1” button on the phase details or use the persistent “Call Now” button."
          }
        ]}
        article={true}
      />

      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Canton Fair Phase 1 Products | Electronics & Machinery Sourcing</h1>
          <p>{phase.desc}</p>
        </div>
      </section>

      <section className="page-section">
        <h2 className="text-3xl font-bold text-light mb-4">Phase 1 Dates & Overview – {phase.dates}</h2>
        <p className="text-muted max-w-3xl mx-auto">
          {phase.desc}
        </p>
      </section>

      <section className="page-section" style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ marginBottom: '50px' }}>
            <h3 className="text-2xl font-bold text-dark mb-4" style={{ color: 'var(--text-light)', borderBottom: '2px solid var(--accent-cyan)', paddingBottom: '10px', display: 'inline-block' }}>Comprehensive Exhibition Categories</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.77rem, 2.8vw, 1.1rem)', marginBottom: '20px', lineHeight: '1.8' }}>
              Phase 1 of the Canton Fair is the cornerstone event for technology, manufacturing, and heavy industry. It gathers the most innovative suppliers and manufacturers from across China, offering an unparalleled platform for sourcing cutting-edge electronics, industrial machinery, and smart home solutions.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px', marginTop: '30px' }}>
              <div style={{ background: 'var(--bg-dark)', padding: '25px', borderRadius: '12px', borderLeft: '4px solid var(--accent-cyan)' }}>
                <h4 style={{ fontWeight: '700', marginBottom: '15px', color: 'var(--text-light)', fontSize: 'clamp(0.84rem, 3.0vw, 1.2rem)' }}>Electronics & Household</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)', lineHeight: '2' }}>
                  <li>✓ Consumer Electronics</li>
                  <li>✓ Electronic & Electrical Products</li>
                  <li>✓ Computer & Communication</li>
                  <li>✓ Household Electrical Appliances</li>
                  <li>✓ Lighting Equipment</li>
                </ul>
              </div>
              <div style={{ background: 'var(--bg-dark)', padding: '25px', borderRadius: '12px', borderLeft: '4px solid var(--accent-green)' }}>
                <h4 style={{ fontWeight: '700', marginBottom: '15px', color: 'var(--text-light)', fontSize: 'clamp(0.84rem, 3.0vw, 1.2rem)' }}>Machinery & Vehicles</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)', lineHeight: '2' }}>
                  <li>✓ General & Processing Machinery</li>
                  <li>✓ Power Machinery & Electric Power</li>
                  <li>✓ Large Machinery & Equipment</li>
                  <li>✓ Vehicles & Spare Parts</li>
                  <li>✓ Hardware & Tools</li>
                </ul>
              </div>
              <div style={{ background: 'var(--bg-dark)', padding: '25px', borderRadius: '12px', borderLeft: '4px solid var(--accent-gold)' }}>
                <h4 style={{ fontWeight: '700', marginBottom: '15px', color: 'var(--text-light)', fontSize: 'clamp(0.84rem, 3.0vw, 1.2rem)' }}>Materials & Energy</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)', lineHeight: '2' }}>
                  <li>✓ Building & Decorative Materials</li>
                  <li>✓ Sanitary & Bathroom Equipment</li>
                  <li>✓ Chemical Products</li>
                  <li>✓ New Energy Resources</li>
                  <li>✓ Smart Home Systems</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-dark mb-4" style={{ color: 'var(--text-light)', borderBottom: '2px solid var(--accent-green)', paddingBottom: '10px', display: 'inline-block' }}>Expert Sourcing Tips for Phase 1</h3>
            <div style={{ background: 'rgba(0, 180, 216, 0.05)', padding: '30px', borderRadius: '16px', border: '1px solid rgba(0, 180, 216, 0.2)' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                  <span style={{ background: 'var(--accent-cyan)', color: '#fff', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>1</span>
                  <div>
                    <strong style={{ color: 'var(--text-light)', display: 'block', marginBottom: '5px' }}>Verify Certifications Rigorously</strong>
                    <span style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>For electronics and machinery, ensure the supplier has valid CE, FCC, RoHS, or UL certifications. Always ask to see the original certificates and verify them online if possible.</span>
                  </div>
                </li>
                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                  <span style={{ background: 'var(--accent-cyan)', color: '#fff', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>2</span>
                  <div>
                    <strong style={{ color: 'var(--text-light)', display: 'block', marginBottom: '5px' }}>Negotiate OEM/ODM Terms</strong>
                    <span style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Phase 1 suppliers are highly capable of custom manufacturing. Discuss tooling costs, minimum order quantities (MOQ) for custom branding, and intellectual property protection upfront.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '15px' }}>
                  <span style={{ background: 'var(--accent-cyan)', color: '#fff', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>3</span>
                  <div>
                    <strong style={{ color: 'var(--text-light)', display: 'block', marginBottom: '5px' }}>Request Live Demonstrations</strong>
                    <span style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Never buy machinery or complex electronics without a live demo. Pay attention to the build quality, interface language options, and ask about after-sales technical support and spare parts availability.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-section-light">
        <div className="container text-center">
          <h3 className="explore-more-title">Explore More</h3>
          <div className="related-grid">

            <Link to="/canton-fair-phase-2-products" className="related-card">Phase 2 Products</Link>
            <Link to="/canton-fair-phase-3-products" className="related-card">Phase 3 Products</Link>
            <Link to="/canton-fair-packages" className="related-card">Travel Packages</Link>
            <Link to="/canton-fair-2026-guide" className="related-card">Fair Guide</Link>
            <Link to="/best-hotels-near-canton-fair" className="related-card">Hotels</Link>
            <Link to="/guangzhou-business-visa-guide" className="related-card">Visa Guide</Link>
            <Link to="/canton-fair-airport-transfer" className="related-card">Airport Transfer</Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
