import React from 'react';
import SeoHelmet from '../components/SeoHelmet';
import ContactCTA from '../components/ContactCTA';
import { phases } from '../data/phases';
import { Shirt } from 'lucide-react';
import { Link } from 'react-router-dom';

const phase = phases[2]; // Phase 3

export default function Phase3Page() {
  return (
    <>
      <SeoHelmet
        title="Canton Fair Phase 3 Products | Textiles, Garments & Footwear 2026"
        description="Source modern textiles, premium apparel, shoes, and health devices at Canton Fair Phase 3 in 2026."
        canonical="https://yourdomain.com/canton-fair-phase-3-products"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Phase 3 Products', url: '/canton-fair-phase-3-products' }
        ]}
        faq={[
          {
            question: "What categories are covered in Phase 3?",
            answer: "Modern textiles, premium garments, active shoes, fashion accessories, bags, travel luggage, medical devices, and health products."
          }
        ]}
        article={true}
      />

      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Canton Fair Phase 3 Products | Textiles, Apparel & Footwear Sourcing</h1>
          <p>{phase.desc}</p>
        </div>
      </section>

      <section className="page-section">
        <h2 className="text-3xl font-bold text-light mb-4">Phase 3 Dates & Overview – {phase.dates}</h2>
        <p className="text-muted max-w-3xl mx-auto">
          {phase.desc}
        </p>
      </section>

      <section className="page-section" style={{ background: '#fff' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ marginBottom: '50px' }}>
            <h3 className="text-2xl font-bold text-dark mb-4" style={{ color: 'var(--text-light)', borderBottom: '2px solid var(--accent-cyan)', paddingBottom: '10px', display: 'inline-block' }}>Comprehensive Exhibition Categories</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '20px', lineHeight: '1.8' }}>
              Phase 3 of the Canton Fair is the definitive exhibition for apparel, textiles, footwear, and health products. It connects buyers with top-tier textile mills, garment manufacturers, and health device producers capable of massive scale and intricate customization.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '30px' }}>
              <div style={{ background: 'var(--bg-dark)', padding: '25px', borderRadius: '12px', borderLeft: '4px solid var(--accent-cyan)' }}>
                <h4 style={{ fontWeight: '700', marginBottom: '15px', color: 'var(--text-light)', fontSize: '1.2rem' }}>Apparel & Textiles</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)', lineHeight: '2' }}>
                  <li>✓ Men's & Women's Clothing</li>
                  <li>✓ Kids' Wear & Underwear</li>
                  <li>✓ Sports & Casual Wear</li>
                  <li>✓ Textile Raw Materials & Fabrics</li>
                  <li>✓ Carpets & Tapestries</li>
                </ul>
              </div>
              <div style={{ background: 'var(--bg-dark)', padding: '25px', borderRadius: '12px', borderLeft: '4px solid var(--accent-green)' }}>
                <h4 style={{ fontWeight: '700', marginBottom: '15px', color: 'var(--text-light)', fontSize: '1.2rem' }}>Shoes & Accessories</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)', lineHeight: '2' }}>
                  <li>✓ Fashion Shoes & Sneakers</li>
                  <li>✓ Fashion Accessories & Fittings</li>
                  <li>✓ Cases & Bags</li>
                  <li>✓ Furs, Leather & Downs</li>
                  <li>✓ Travel & Recreation Products</li>
                </ul>
              </div>
              <div style={{ background: 'var(--bg-dark)', padding: '25px', borderRadius: '12px', borderLeft: '4px solid var(--accent-gold)' }}>
                <h4 style={{ fontWeight: '700', marginBottom: '15px', color: 'var(--text-light)', fontSize: '1.2rem' }}>Health & Medical</h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--text-muted)', lineHeight: '2' }}>
                  <li>✓ Medicines & Health Products</li>
                  <li>✓ Medical Devices & Equipment</li>
                  <li>✓ Hospital Consumables</li>
                  <li>✓ Sports & Fitness Gear</li>
                  <li>✓ Pet Products & Food</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-dark mb-4" style={{ color: 'var(--text-light)', borderBottom: '2px solid var(--accent-green)', paddingBottom: '10px', display: 'inline-block' }}>Expert Sourcing Tips for Phase 3</h3>
            <div style={{ background: 'rgba(0, 180, 216, 0.05)', padding: '30px', borderRadius: '16px', border: '1px solid rgba(0, 180, 216, 0.2)' }}>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                  <span style={{ background: 'var(--accent-cyan)', color: '#fff', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>1</span>
                  <div>
                    <strong style={{ color: 'var(--text-light)', display: 'block', marginBottom: '5px' }}>Verify Sizing Standards</strong>
                    <span style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Asian sizing standards differ significantly from US and EU standards. Always bring your own tech packs with exact measurements and request a physical sample in your target size before placing bulk apparel orders.</span>
                  </div>
                </li>
                <li style={{ marginBottom: '20px', display: 'flex', gap: '15px' }}>
                  <span style={{ background: 'var(--accent-cyan)', color: '#fff', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>2</span>
                  <div>
                    <strong style={{ color: 'var(--text-light)', display: 'block', marginBottom: '5px' }}>Inspect Fabric Quality and Blends</strong>
                    <span style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>Don't just trust the label. Feel the fabric weight (GSM) and request documentation on the exact material blend (e.g., % of cotton vs polyester). Test zippers, buttons, and stitching quality on the spot.</span>
                  </div>
                </li>
                <li style={{ display: 'flex', gap: '15px' }}>
                  <span style={{ background: 'var(--accent-cyan)', color: '#fff', width: '30px', height: '30px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>3</span>
                  <div>
                    <strong style={{ color: 'var(--text-light)', display: 'block', marginBottom: '5px' }}>Medical Device Approvals</strong>
                    <span style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>If sourcing medical equipment or health products, the barrier to entry is high. Ensure the factory has export licenses and the necessary FDA or CE Class II/III medical certifications required for your country.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="page-section page-section-light">
        <div className="container text-center">
          <h3 className="text-2xl font-bold text-light mb-6">Explore Other Sections</h3>
          <div className="related-grid">
            <Link to="/canton-fair-phase-1-products" className="related-card">Phase 1 Products</Link>
            <Link to="/canton-fair-phase-2-products" className="related-card">Phase 2 Products</Link>
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
