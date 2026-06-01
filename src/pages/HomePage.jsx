import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutFair from '../components/AboutFair';
import PhaseTimeline from '../components/PhaseTimeline';
import ContactCTA from '../components/ContactCTA';
import Products from '../components/Products';
import GuangzhouMarkets from '../components/GuangzhouMarkets';
import PackageOverview from '../components/PackageOverview';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import TrustSection from '../components/TrustSection';
import AboutUs from '../components/AboutUs';
import FAQ from '../components/FAQ';
import LocationMap from '../components/LocationMap';
import SeoHelmet from '../components/SeoHelmet';
import { Link } from 'react-router-dom';

function HomePage() {
  const context = useOutletContext();
  const onBookNow = context?.onBookNow;

  const faqItems = [
    { question: "Which Canton Fair phase should I attend?", answer: "Phase 1 focuses on Electronics & Machinery, Phase 2 on Consumer Goods & Home Decor, and Phase 3 on Textiles, Garments & Shoes. Choose the phase that matches your sourcing needs." },
    { question: "Is an invitation required?", answer: "Yes, an official invitation letter from the Canton Fair is mandatory for securing a China Business (M) Visa. We assist our clients in obtaining this invitation." },
    { question: "How many days are needed?", answer: "We typically recommend our 5 Nights / 6 Days package for a single phase. This provides enough time to explore the fair, hold meetings, and visit local markets." },
    { question: "Do you provide hotel and visa support?", answer: "Absolutely. Our comprehensive packages include premium business hotel accommodation, complete China Business Visa processing assistance, and registration support." },
    { question: "Can airport transfer be arranged?", answer: "Yes, we provide shared SIC transfers between your hotel and the Canton Fair complex, and airport pickups can be arranged based on your flight schedule." }
  ];

  return (
    <>
      <SeoHelmet
        title="Canton Fair 2026 Travel Packages from India | Hotels, Visa & Transfers"
        description="Plan your Canton Fair 2026 trip with visa support, hotels, airport transfers, and exhibition guidance from Holidays Navigator."
        canonical="https://holidaysnavigator.com/"
        breadcrumb={[
          { name: 'Home', url: '/' }
        ]}
        faq={faqItems}
        article={false}
      />
      
      <Hero onBookNow={onBookNow} />
      <PackageOverview onBookNow={onBookNow} />
      <WhyChooseUs />
      <TrustSection />
      <Services />
      
      {/* Deep content summarized with Read More Links */}
      <section style={{ padding: '80px 0', background: 'var(--bg-light)' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: '2.5rem' }}>Canton Fair 2026 Resources</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
              Explore comprehensive guides on exhibition phases, sourcing markets, and visa applications.
            </p>
          </div>
          <div className="related-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1000px' }}>
            <Link to="/canton-fair-2026-guide" className="related-card" style={{ padding: '24px' }}>Canton Fair 2026 Complete Guide</Link>
            <Link to="/canton-fair-phase-1-products" className="related-card" style={{ padding: '24px' }}>Phase 1: Electronics & Machinery</Link>
            <Link to="/canton-fair-phase-2-products" className="related-card" style={{ padding: '24px' }}>Phase 2: Consumer Goods</Link>
            <Link to="/canton-fair-phase-3-products" className="related-card" style={{ padding: '24px' }}>Phase 3: Textiles & Garments</Link>
            <Link to="/guangzhou-business-visa-guide" className="related-card" style={{ padding: '24px' }}>China Business Visa Process</Link>
            <Link to="/best-hotels-near-canton-fair" className="related-card" style={{ padding: '24px' }}>Best Hotels Near Pazhou</Link>
          </div>
        </div>
      </section>

      <ContactCTA />
      
      <FAQ />
      <LocationMap />
    </>
  );
}

export default HomePage;
