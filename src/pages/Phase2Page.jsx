import SeoHelmet from '../components/SeoHelmet';
import ContactCTA from '../components/ContactCTA';
import { phases } from '../data/phases';
import { Link } from 'react-router-dom';

const phase = phases[1]; // Phase 2

export default function Phase2Page() {
  return (
    <>
      <SeoHelmet
        title="Canton Fair Phase 2 Products | Consumer Goods & Home Decor 2026"
        description="Explore Canton Fair Phase 2 for consumer goods, premium gifts, luxury home decorations, and furniture sourcing in 2026."
        canonical="https://yourdomain.com/canton-fair-phase-2-products"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Phase 2 Products', url: '/canton-fair-phase-2-products' }
        ]}
        faq={[
          {
            question: "What categories are covered in Phase 2?",
            answer: "Consumer daily goods, premium gifts, home decorations, luxury furniture, ceramic tableware, and office supplies."
          }
        ]}
        article={true}
      />

      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Canton Fair Phase 2 Products | Consumer Goods & Home Decor Sourcing</h1>
          <p>{phase.desc}</p>
        </div>
      </section>

      <section className="page-section">
        <h2 className="text-3xl font-bold text-light mb-4">Phase 2 Dates & Overview – {phase.dates}</h2>
        <p className="text-muted max-w-3xl mx-auto">
          {phase.desc}
        </p>
      </section>

      <section className="page-section" style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ marginBottom: '50px' }}>
            <h3 className="text-2xl font-bold text-dark mb-4" style={{ color: 'var(--text-light)', borderBottom: '2px solid var(--accent-cyan)', paddingBottom: '10px', display: 'inline-block' }}>Comprehensive Exhibition Categories</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.77rem, 2.8vw, 1.1rem)', marginBottom: '20px', lineHeight: '1.8' }}>
              Phase 2 of the Canton Fair is the ultimate destination for consumer goods, gifting, and interior design. It focuses on products that enhance daily life, offering buyers an incredible variety of home decor, premium gifts, and lifestyle accessories.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px', marginTop: '30px' }}>
              <div style={{ background: 'var(--bg-dark)', padding: '25px', borderRadius: '12px', borderLeft: '4px solid var(--accent-cyan)' }}>
                <h4 style={{ fontWeight: '700', marginBottom: '15px', color: 'var(--text-light)', fontSize: 'clamp(0.84rem, 3.0vw, 1.2rem)' }}>Consumer Goods</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)', lineHeight: '2' }}>
                  <li>✓ Kitchenware & Tableware</li>
                  <li>✓ General Ceramics</li>
                  <li>✓ Household Items</li>
                  <li>✓ Personal Care Products</li>
                  <li>✓ Toiletries</li>
                </ul>
              </div>
              <div style={{ background: 'var(--bg-dark)', padding: '25px', borderRadius: '12px', borderLeft: '4px solid var(--accent-green)' }}>
                <h4 style={{ fontWeight: '700', marginBottom: '15px', color: 'var(--text-light)', fontSize: 'clamp(0.84rem, 3.0vw, 1.2rem)' }}>Gifts & Toys</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)', lineHeight: '2' }}>
                  <li>✓ Watches, Spectacles & Clocks</li>
                  <li>✓ Toys & Amusements</li>
                  <li>✓ Gifts & Premiums</li>
                  <li>✓ Festival Products</li>
                  <li>✓ Party Supplies</li>
                </ul>
              </div>
              <div style={{ background: 'var(--bg-dark)', padding: '25px', borderRadius: '12px', borderLeft: '4px solid var(--accent-gold)' }}>
                <h4 style={{ fontWeight: '700', marginBottom: '15px', color: 'var(--text-light)', fontSize: 'clamp(0.84rem, 3.0vw, 1.2rem)' }}>Home Decorations</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)', lineHeight: '2' }}>
                  <li>✓ Art Ceramics & Glass Artware</li>
                  <li>✓ Furniture (Indoor & Outdoor)</li>
                  <li>✓ Weaving, Rattan & Iron Arts</li>
                  <li>✓ Gardening Products</li>
                  <li>✓ Stone & Iron Products</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-dark mb-4" style={{ color: 'var(--text-light)', borderBottom: '2px solid var(--accent-green)', paddingBottom: '10px', display: 'inline-block' }}>Expert Sourcing Tips for Phase 2</h3>
            <div style={{ background: 'rgba(0, 180, 216, 0.05)', padding: '30px', borderRadius: '16px', border: '1px solid rgba(0, 180, 216, 0.2)' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                  <span style={{ background: 'var(--accent-cyan)', color: '#fff', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>1</span>
                  <div>
                    <strong style={{ color: 'var(--text-light)', display: 'block', marginBottom: '5px' }}>Focus on Packaging and Presentation</strong>
                    <span style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>For consumer goods and gifts, retail packaging is critical. Ask suppliers if they offer customized packaging solutions, display boxes, or white-labeling services directly from the factory.</span>
                  </div>
                </li>
                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                  <span style={{ background: 'var(--accent-cyan)', color: '#fff', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>2</span>
                  <div>
                    <strong style={{ color: 'var(--text-light)', display: 'block', marginBottom: '5px' }}>Consolidate Orders (LCL vs FCL)</strong>
                    <span style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Home decor and furniture take up significant volume. If ordering from multiple suppliers, plan your logistics carefully to consolidate Less than Container Load (LCL) shipments into Full Container Loads (FCL) to save on freight.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '15px' }}>
                  <span style={{ background: 'var(--accent-cyan)', color: '#fff', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>3</span>
                  <div>
                    <strong style={{ color: 'var(--text-light)', display: 'block', marginBottom: '5px' }}>Check Material Compliance</strong>
                    <span style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Ensure that ceramics, paints, and plastics used in tableware and toys comply with your country's safety regulations (e.g., FDA approval for food contact, lead-free paint certifications).</span>
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

            <Link to="/canton-fair-phase-3-products" className="related-card">Phase 3 Products</Link>
            <Link to="/canton-fair-phase-1-products" className="related-card">Phase 1 Products</Link>
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
