import React from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import SeoHelmet from '../components/SeoHelmet';
import ContactCTA from '../components/ContactCTA';
import { Calendar, MapPin, ShieldCheck, CheckCircle, Clock, Award, Star, ArrowRight } from 'lucide-react';

export default function PackagesPage() {
  const context = useOutletContext();
  const onBookNow = context?.onBookNow;

  const inclusions = [
    "5 Nights premium business hotel accommodation near the Canton Fair complex.",
    "Complete China Business (M) Visa assistance (including official invitation support).",
    "Daily buffet breakfast at the hotel.",
    "Seamless shared shuttle services (SIC) between the hotel and Pazhou complex.",
    "Guangzhou airport pickups and drop-offs.",
    "Expert on-ground coordination and business travel guidance.",
    "Assistance with buyer badge pre-registration."
  ];

  const exclusions = [
    "International flight tickets (available upon request).",
    "Lunch and dinners (plenty of dining options near hotels and the complex).",
    "Interpreter/translation services (can be hired separately).",
    "Personal expenses, laundry, and tips."
  ];

  const faqItems = [
    {
      question: "What does the INR 60,000/- package include?",
      answer: "It includes 5 nights of hotel accommodation on twin sharing basis, China Business Visa assistance, daily breakfast, airport transfers, and daily shuttles to the Canton Fair."
    },
    {
      question: "Can I get a single occupancy room instead of twin sharing?",
      answer: "Yes, single occupancy is available with an additional single supplement charge. Please get in touch with our team for custom rates."
    },
    {
      question: "Are flights included in this price?",
      answer: "No, flights are not included. However, we have special group fares and can arrange your flight bookings from Mumbai, Delhi, Bengaluru, Chennai, or any other city in India."
    },
    {
      question: "How do I secure my spot?",
      answer: "You can click on 'Book Your Package' or 'Get Free Quote' to fill out the form, or message us directly on WhatsApp. A deposit is required to confirm the booking."
    }
  ];

  return (
    <>
      <SeoHelmet
        title="Canton Fair 2026 Travel Packages | All-Inclusive Tour Packages"
        description="Book complete Canton Fair 2026 travel packages from India. All-inclusive packages starting at INR 60,000/- with premium hotels, business visa support, and transfers."
        canonical="https://holidaysnavigator.com/canton-fair-packages"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Travel Packages', url: '/canton-fair-packages' }
        ]}
        faq={faqItems}
        article={false}
      />

      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Canton Fair 2026 Travel Packages</h1>
          <p>
            Premium and hassle-free travel arrangements for Indian entrepreneurs. From invitation letter & visa support to hotel bookings & local transfers, we've got you covered.
          </p>
        </div>
      </section>

      {/* Package Pricing & Quick Details */}
      <section className="page-section" style={{ background: 'var(--bg-dark)' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px', alignItems: 'center' }}>
            
            {/* Left Details */}
            <div>
              <span className="hero-subtitle" style={{ color: 'var(--accent-gold)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '15px' }}>
                EXECUTIVE BUSINESS TRAVEL
              </span>
              <h2 style={{ textAlign: 'left', fontSize: '2.5rem', marginBottom: '20px', color: 'var(--text-light)' }}>
                Hassle-Free Sourcing Tour
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '30px' }}>
                Attending the Canton Fair is a massive milestone for your business. We understand the complexities of international trade travel. Our custom packages are designed to let you focus entirely on finding premium suppliers and products while we handle all travel logistics.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ background: 'rgba(0, 180, 216, 0.1)', padding: '12px', borderRadius: '10px', color: 'var(--accent-cyan)' }}>
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-light)', margin: 0, fontSize: '1.1rem' }}>05 Nights / 06 Days</h4>
                    <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.9rem' }}>Perfect duration to cover any of the 3 phases.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ background: 'rgba(0, 180, 216, 0.1)', padding: '12px', borderRadius: '10px', color: 'var(--accent-cyan)' }}>
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-light)', margin: 0, fontSize: '1.1rem' }}>Guangzhou, China</h4>
                    <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.9rem' }}>Stay close to Pazhou Complex and top markets.</p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ background: 'rgba(0, 180, 216, 0.1)', padding: '12px', borderRadius: '10px', color: 'var(--accent-cyan)' }}>
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-light)', margin: 0, fontSize: '1.1rem' }}>100% Visa Guarantee Support</h4>
                    <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '0.9rem' }}>Comprehensive documentation & application review.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Pricing Card */}
            <div className="premium-card" style={{ padding: '40px', textAlign: 'center', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255, 77, 77, 0.15)', color: '#ff4d4d', padding: '6px 14px', borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                Selling Out Fast
              </div>
              <Star style={{ color: 'var(--accent-gold)', marginBottom: '15px', margin: '0 auto 15px auto' }} size={40} fill="var(--accent-gold)" />
              <h3 style={{ fontSize: '1.8rem', color: 'var(--text-light)', marginBottom: '10px' }}>All-Inclusive Package</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '20px' }}>Twin Sharing Accommodation</p>
              
              <div style={{ fontSize: '3.5rem', fontWeight: '800', color: 'var(--accent-gold)', margin: '15px 0' }}>
                ₹60,000<span style={{ fontSize: '1.5rem', fontWeight: '400', color: 'var(--text-muted)' }}>/- per person</span>
              </div>
              
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '30px', lineHeight: '1.6' }}>
                Secure your booking today with a minimal token advance. Group discounts available for team sizes of 3 or more.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center' }}>
                <button
                  onClick={() => onBookNow && onBookNow()}
                  className="premium-btn"
                  style={{ width: '100%', border: 'none', cursor: 'pointer', fontSize: '1.1rem', justifyContent: 'center' }}
                >
                  Book Your Package Now
                </button>
                <a
                  href="https://wa.me/919533444455?text=Hi%2C%20I%20want%20to%20book%20a%20Canton%20Fair%202026%20package"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="outline-button"
                  style={{ textDecoration: 'none', textAlign: 'center', width: '100%', fontSize: '1rem', boxSizing: 'border-box', display: 'block' }}
                >
                  WhatsApp Expert
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Inclusions & Exclusions */}
      <section className="page-section" style={{ background: 'rgba(0, 119, 182, 0.02)' }}>
        <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            
            {/* Inclusions Card */}
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', padding: '30px', borderRadius: '16px' }}>
              <h3 style={{ color: 'var(--accent-green)', fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                Package Inclusions
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {inclusions.map((item, idx) => (
                  <li key={idx} style={{ color: 'var(--text-muted)', marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '1rem', lineHeight: '1.5' }}>
                    <CheckCircle size={18} style={{ color: 'var(--accent-green)', flexShrink: 0, marginTop: '3px' }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions Card */}
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', padding: '30px', borderRadius: '16px' }}>
              <h3 style={{ color: '#ff4d4d', fontSize: '1.5rem', fontWeight: '700', marginBottom: '20px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
                Package Exclusions
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {exclusions.map((item, idx) => (
                  <li key={idx} style={{ color: 'var(--text-muted)', marginBottom: '15px', display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '1rem', lineHeight: '1.5' }}>
                    <span style={{ color: '#ff4d4d', fontWeight: 'bold', fontSize: '1.2rem', lineHeight: '1', flexShrink: 0 }}>×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Sourcing Timeline Guide */}
      <section className="page-section" style={{ background: 'var(--bg-dark)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '15px', color: 'var(--text-light)' }}>Simple Booking Process</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '55px', fontSize: '1.1rem' }}>Get ready for Canton Fair 2026 in 4 easy steps</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', textAlign: 'left' }}>
            <div style={{ display: 'flex', gap: '20px', background: 'var(--card-bg)', border: '1px solid var(--border-color)', padding: '20px', borderRadius: '12px' }}>
              <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-gold)' }}>01</span>
              <div>
                <h4 style={{ color: 'var(--text-light)', fontSize: '1.2rem', marginBottom: '5px' }}>Submit Enquiry</h4>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>Fill out our brief details form or contact our visa experts via phone/WhatsApp.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', background: 'var(--card-bg)', border: '1px solid var(--border-color)', padding: '20px', borderRadius: '12px' }}>
              <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-gold)' }}>02</span>
              <div>
                <h4 style={{ color: 'var(--text-light)', fontSize: '1.2rem', marginBottom: '5px' }}>Select Phase & Hotel</h4>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>Choose the specific exhibition phase you want to attend and choose room preference (Twin/Single).</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', background: 'var(--card-bg)', border: '1px solid var(--border-color)', padding: '20px', borderRadius: '12px' }}>
              <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-gold)' }}>03</span>
              <div>
                <h4 style={{ color: 'var(--text-light)', fontSize: '1.2rem', marginBottom: '5px' }}>Visa Processing</h4>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>We arrange the official Canton Fair invitation letter and process your China Business Visa.</p>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', background: 'var(--card-bg)', border: '1px solid var(--border-color)', padding: '20px', borderRadius: '12px' }}>
              <span style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--accent-gold)' }}>04</span>
              <div>
                <h4 style={{ color: 'var(--text-light)', fontSize: '1.2rem', marginBottom: '5px' }}>Fly & Grow Your Business</h4>
                <p style={{ color: 'var(--text-muted)', margin: 0 }}>Receive your visa, flight vouchers, and comprehensive guide book. Land in Guangzhou and begin sourcing.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Resources */}
      <section className="page-section page-section-light">
        <div className="container text-center">
          <h3 className="text-2xl font-bold text-light mb-6">Essential Sourcing Guides</h3>
          <div className="related-grid">
            <Link to="/canton-fair-2026-guide" className="related-card">Canton Fair Guide</Link>
            <Link to="/canton-fair-phase-1-products" className="related-card">Phase 1 Electronics</Link>
            <Link to="/canton-fair-phase-2-products" className="related-card">Phase 2 Consumer Goods</Link>
            <Link to="/canton-fair-phase-3-products" className="related-card">Phase 3 Textiles</Link>
            <Link to="/guangzhou-business-visa-guide" className="related-card">China Visa Guide</Link>
            <Link to="/best-hotels-near-canton-fair" className="related-card">Premium Hotels</Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
