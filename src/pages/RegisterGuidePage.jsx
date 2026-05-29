import React from 'react';
import SeoHelmet from '../components/SeoHelmet';
import ContactCTA from '../components/ContactCTA';
import { Link } from 'react-router-dom';

export default function RegisterGuidePage() {
  return (
    <>
      <SeoHelmet
        title="How to Register for Canton Fair 2026 | Buyer & Exhibitor Guide"
        description="Complete step-by-step guide on how to register for the Canton Fair 2026. Find registration deadlines, requirements, and portal details."
        canonical="https://yourdomain.com/how-to-register-for-canton-fair"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Register', url: '/how-to-register-for-canton-fair' }
        ]}
        faq={[
          {
            question: "When does registration open?",
            answer: "The online portal opens on 1 April 2026 for all three phases."
          },
          {
            question: "Can I register for multiple phases?",
            answer: "Yes – you may select any combination of Phase 1, 2 and 3 during the same submission."
          },
          {
            question: "What is the refund policy?",
            answer: "Full refund up to 30 days before the phase start date."
          }
        ]}
      />

      <section className="page-hero">
        <div className="page-hero-content">
        <h1>How to Register for Canton Fair 2026 | Official Registration Guide</h1>
        <p>
          All the info you need to secure your spot – deadlines, fees, and document checklist.
        </p>
      </div>
      </section>

      <section className="page-section">
        <h2 className="text-3xl font-bold text-light mb-4">Registration Timeline</h2>
        <p className="text-muted max-w-3xl mx-auto">
          Early-bird registration runs until 30 June, regular until 31 August, late-comers accepted on a first-come basis.
        </p>
      </section>

      <section className="page-section">
        <div className="container max-w-3xl mx-auto" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <ul className="list-decimal list-inside text-light space-y-3" style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li>Create an account on the official Canton Fair portal.</li>
            <li>Select the desired phase(s) and product categories.</li>
            <li>Upload your company profile and product catalogue (PDF, max 10 MB).</li>
            <li>Pay the registration fee (online via Alipay, WeChat Pay or credit card).</li>
            <li>Receive the confirmation email with your exhibitor number.</li>
            <li>Book accommodation and airport transfer (links below).</li>
          </ul>
        </div>
      </section>

      <section className="page-section page-section-light">
        <div className="container text-center">
          <h3 className="text-2xl font-bold text-light mb-6">Helpful Links</h3>
          <div className="related-grid">
            <Link to="/canton-fair-2026-guide" className="related-card">Fair Guide</Link>
            <Link to="/canton-fair-airport-transfer" className="related-card">Airport Transfer</Link>
            <Link to="/guangzhou-business-visa-guide" className="related-card">Visa Guide</Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
