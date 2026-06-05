import React from 'react';
import SeoHelmet from '../components/SeoHelmet';
import ContactCTA from '../components/ContactCTA';
import { ShieldCheck, Award, Users2, Landmark } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <>
      <SeoHelmet
        title="About Us | Holidays Navigator - Corporate Travel Consultant"
        description="Learn more about Holidays Navigator, your premium corporate travel consultant specializing in trade delegation tours, China visa compliance, and sourcing packages."
        canonical="https://holidaysnavigator.com/about-us"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'About Us', url: '/about-us' }
        ]}
      />

      <section className="page-hero">
        <div className="page-hero-content">
          <h1>About Holidays Navigator</h1>
          <p>
            Your premium, certified corporate travel consultant specializing in Canton Fair trade delegations and sourcing packages.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left' }}>
            <h2 className="text-3xl font-bold text-light mb-6">Who We Are</h2>
            <p className="text-muted mb-6" style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>
              Holidays Navigator is a certified corporate travel consultancy headquartered in Hyderabad, India. 
              We are dedicated to helping business owners, manufacturers, and importers unlock global trade opportunities. 
              With specialized expertise in trade delegation tours, China business visa compliance, and end-to-end industrial sourcing packages, 
              we bridge the gap between global buyers and Chinese production hubs.
            </p>
            <p className="text-muted mb-8" style={{ fontSize: '1.15rem', lineHeight: '1.8' }}>
              Whether you are attending the Canton Fair for the first time or represent an established enterprise with recurrent sourcing cycles, 
              our travel blueprints guarantee maximum productivity, full visa compliance, and premium logistics support.
            </p>

            <h3 className="text-2xl font-bold text-light mb-6">Our Core Value Pillars</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '30px' }}>
              
              <div className="glass-card" style={{ padding: '25px', borderRadius: '16px', background: 'var(--card-bg)' }}>
                <div style={{ color: 'var(--accent-gold)', marginBottom: '15px' }}>
                  <ShieldCheck size={36} />
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-light)', marginBottom: '10px' }}>Visa Compliance</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Rigorous advisory for the China Business (M) Visa to ensure absolute entry compliance and hassle-free travel.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '25px', borderRadius: '16px', background: 'var(--card-bg)' }}>
                <div style={{ color: 'var(--accent-gold)', marginBottom: '15px' }}>
                  <Award size={36} />
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-light)', marginBottom: '10px' }}>Logistics Excellence</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Handpicked premium twin-sharing hotels close to the Pazhou Complex combined with daily private trade shuttles.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '25px', borderRadius: '16px', background: 'var(--card-bg)' }}>
                <div style={{ color: 'var(--accent-gold)', marginBottom: '15px' }}>
                  <Users2 size={36} />
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-light)', marginBottom: '10px' }}>Delegation Networks</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Collaborative linkages with certified chambers of commerce to optimize networking and supplier relations.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '25px', borderRadius: '16px', background: 'var(--card-bg)' }}>
                <div style={{ color: 'var(--accent-gold)', marginBottom: '15px' }}>
                  <Landmark size={36} />
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-light)', marginBottom: '10px' }}>Industrial Sourcing</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Tailored itineraries grouped around 54 trade sections matching Phase 1, 2, and 3 Canton Fair sourcing profiles.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
