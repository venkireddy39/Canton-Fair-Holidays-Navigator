import SeoHelmet from '../components/SeoHelmet';
import ContactCTA from '../components/ContactCTA';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, Building2, Book, MailCheck, CheckCircle2 } from 'lucide-react';

export default function VisaPage() {
  return (
    <>
      <SeoHelmet
        title="Guangzhou Business Visa Guide | China Visa for Canton Fair 2026"
        description="Step-by-step guide to securing your China Business (M) Visa for the Canton Fair 2026. Discover document requirements, processing times, and pro tips."
        canonical="https://yourdomain.com/guangzhou-business-visa-guide"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Visa Guide', url: '/guangzhou-business-visa-guide' }
        ]}
        faq={[
          {
            question: "How long does a Business visa take to process?",
            answer: "Typically 3-5 business days after submission, plus courier time."
          },
          {
            question: "What documents are mandatory?",
            answer: "Invitation letter from the fair, passport, completed visa application form, recent photo, and proof of travel itinerary."
          },
          {
            question: "Can I apply for a visa on arrival?",
            answer: "No – a Business visa must be obtained in advance."
          }
        ]}
        article={true}
      />

      <section className="page-hero">
        <div className="page-hero-content">
        <h1>China Business Visa Guide for Canton Fair 2026</h1>
        <p>
          All you need to secure a visa for the Canton Fair 2026.
        </p>
      </div>
      </section>

      <section className="page-section" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '40px', marginBottom: '60px' }}>
            {/* Checklist */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              style={{ background: 'var(--card-bg)', padding: '40px', borderRadius: '20px', border: '1px solid var(--border-color)', boxShadow: '0 15px 35px rgba(0,0,0,0.05)' }}
            >
              <h2 style={{ fontSize: 'clamp(1.26rem, 4.5vw, 1.8rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <FileText className="text-accent-cyan" size={28} /> Mandatory Documents
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={20} className="text-accent-green" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Valid passport (at least 6 months remaining with 2 blank pages)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={20} className="text-accent-green" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Official Invitation Letter from the Canton Fair Organising Committee</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={20} className="text-accent-green" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Completed China Visa Application Form (V-2019)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={20} className="text-accent-green" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Recent 2-inch passport-style photo (color, light background)</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', color: 'var(--text-muted)' }}>
                  <CheckCircle2 size={20} className="text-accent-green" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span>Proof of accommodation / hotel reservation</span>
                </li>
              </ul>
            </motion.div>

            {/* Warning/Note */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              style={{ background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(14, 165, 233, 0.02))', padding: '40px', borderRadius: '20px', border: '1px solid rgba(14, 165, 233, 0.2)' }}
            >
              <h2 style={{ fontSize: 'clamp(1.26rem, 4.5vw, 1.8rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '20px' }}>Important Note</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '20px' }}>
                If you are attending the fair for sourcing and networking, you require an <strong>"M" (Business) Visa</strong>. A standard tourist visa is strictly not recommended for commercial activities.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
                Wait times at Visa Application Centers spike significantly starting in September. We heavily advise applying <strong>at least 45 days prior</strong> to your travel date.
              </p>
            </motion.div>
          </div>

          <h2 style={{ fontSize: 'clamp(1.75rem, 6.3vw, 2.5rem)', fontWeight: '800', color: 'var(--text-light)', textAlign: 'center', marginBottom: '40px' }}>3-Step Application Process</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              style={{ background: 'var(--card-bg)', padding: '30px', borderRadius: '16px', border: '1px solid var(--border-color)', display: 'flex', gap: '20px', alignItems: 'center' }}
            >
              <div style={{ width: '60px', height: '60px', background: 'rgba(0, 180, 216, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <MailCheck size={30} className="text-accent-cyan" />
              </div>
              <div>
                <h3 style={{ fontSize: 'clamp(0.98rem, 3.5vw, 1.4rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '5px' }}>1. Obtain the Invitation Letter</h3>
                <p style={{ color: 'var(--text-muted)' }}>Register on the official Canton Fair website utilizing your buyer badge credentials. A PDF invitation will be issued typically within 24 hours.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              style={{ background: 'var(--card-bg)', padding: '30px', borderRadius: '16px', border: '1px solid var(--border-color)', display: 'flex', gap: '20px', alignItems: 'center' }}
            >
              <div style={{ width: '60px', height: '60px', background: 'rgba(0, 180, 216, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Book size={30} className="text-accent-cyan" />
              </div>
              <div>
                <h3 style={{ fontSize: 'clamp(0.98rem, 3.5vw, 1.4rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '5px' }}>2. Complete the Online Form</h3>
                <p style={{ color: 'var(--text-muted)' }}>Fill out the comprehensive online V-2019 form via the official COVA website, print the completed document, and sign the declaration page.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              style={{ background: 'var(--card-bg)', padding: '30px', borderRadius: '16px', border: '1px solid var(--border-color)', display: 'flex', gap: '20px', alignItems: 'center' }}
            >
              <div style={{ width: '60px', height: '60px', background: 'rgba(0, 180, 216, 0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Building2 size={30} className="text-accent-cyan" />
              </div>
              <div>
                <h3 style={{ fontSize: 'clamp(0.98rem, 3.5vw, 1.4rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '5px' }}>3. Submit Application</h3>
                <p style={{ color: 'var(--text-muted)' }}>Schedule an appointment and submit your application with physical documents at the nearest Chinese Embassy, Consulate, or Visa Application Center (CVASC).</p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      <section className="page-section page-section-light">
        <div className="container text-center">
          <h3 className="explore-more-title">Explore More</h3>
          <div className="related-grid">
            <Link to="/canton-fair-packages" className="related-card">Travel Packages</Link>
            <Link to="/canton-fair-2026-guide" className="related-card">Fair Guide</Link>
            <Link to="/best-hotels-near-canton-fair" className="related-card">Hotels</Link>
            <Link to="/canton-fair-airport-transfer" className="related-card">Airport Transfer</Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
