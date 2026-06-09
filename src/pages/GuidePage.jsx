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
        title="Canton Fair 2026: Dates, Location, phases, Travel, Hotels & Importer Guide"
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
            <h1 style={{ color: '#fff', fontSize: 'clamp(1.96rem, 7.0vw, 2.8rem)', marginBottom: '20px' }}>140th Canton Fair 2026: Dates, Time, Location, phases, Travel, Hotels and Importer Guide</h1>
            <p style={{ color: '#e0e0e0', fontSize: 'clamp(0.84rem, 3.0vw, 1.2rem)' }}>Everything you need to know – venues, visa, transport, and registration.</p>
          </div>
        </section>
        <article className="blog-article" style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
          <div className="article-meta" style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '20px' }}>
            <span>By Holidays Navigator</span> • <time dateTime="2026-06-08">June 8, 2026</time>
          </div>
        <section className="overview-section" style={{ padding: '60px 0' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.75rem, 6.3vw, 2.5rem)', marginBottom: '20px', textAlign: 'center' }}>📅 <strong>What Is Canton Fair 2026?</strong></h2>
            <p style={{ fontSize: 'clamp(0.77rem, 2.8vw, 1.1rem)', textAlign: 'center', maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }}>The Canton Fair is one of the biggest trade shows in the world, held in Guangzhou, China. It brings together thousands of suppliers, manufacturers, and buyers from different countries. People visit the fair to discover new products, connect with trusted suppliers, and grow their businesses. Held twice every year, the Canton Fair is a leading global trade exhibition. The upcoming 140th Canton Fair marks the 140th edition of this internationally recognized business event.</p>
          </div>
        </section>
        <section className="main-content page-section-light" style={{ padding: '60px 0' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.75rem, 6.3vw, 2.5rem)', marginBottom: '30px', textAlign: 'center' }}>Event , Dates & Phases </h2>
            <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: 'clamp(0.77rem, 2.8vw, 1.1rem)', color: 'var(--text-muted)', lineHeight: '1.8' }}>
               <p> <strong>Event : </strong> Canton Fair 2026 Autumn Session </p>
              <p><strong>Phases:</strong> The Canton Fair is conducted in three phases.</p>

<p><strong>Phase 1 : </strong> Electronics & Machinery (October 15 – October 19)</p>

<p><strong>Phase 2 : </strong> Consumer Goods & Home Decor (October 23 – October 27)</p>

<p><strong>Phase 3 : </strong> Textiles, Garments & Shoes (October 31 – November 04)</p>
<p><strong>Time : </strong> 9:30 AM – 6:00 PM (Applicable to all three phases).</p>
<p><strong>Entry & Exit</strong> : You can enter and exit the fair freely during opening hours with a valid buyer badge.</p>

<p><strong>Location : </strong> China Import and Export Fair Complex (Pazhou Complex), No. 380 Yuejiang Middle Road, Haizhu District, Guangzhou, China.</p>
 

 
  
            </div>
          </div>
        </section>
        <section className="transport-section page-section-light" style={{ padding: '40px 0' }}>
          <div className="container">
              <h2 style={{ fontSize: 'clamp(1.75rem, 6.3vw, 2.5rem)', marginBottom: '30px', textAlign: 'center' }}>Travel Information</h2>
            <div style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              
              <p><strong> ✈️ Arriving from Guangzhou Airport : </strong>After landing at Guangzhou Baiyun International Airport, visitors can travel to the Canton Fair Complex by metro, taxi, or private transfer. The journey usually takes around 45–60 minutes depending on traffic conditions.</p>

               
              <p><strong> 🚄 Travelling from Hong Kong : </strong>Visitors coming from Hong Kong can reach Guangzhou by high-speed train and continue to the exhibition venue by metro or taxi. Ferry services may also be available for certain routes.</p>

               
              <p> <strong>🚇 Getting Around Guangzhou  : </strong>Guangzhou has a well-connected public transportation network, including metro lines, buses, and taxis. The metro is the most convenient option for reaching the Canton Fair venue.</p>
                <br />
              <p style={{ fontWeight:   2900 }}><strong>Travel Tip: </strong>  During the Canton Fair, transportation services can be very busy. It is recommended to start your journey early and allow extra travel time.</p>
            </div>
          </div>
        </section>
        <section className="hotels-section page-section" style={{ padding: '40px 0' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(1.75rem, 6.3vw, 2.5rem)', marginBottom: '30px', textAlign: 'center' }}><strong>Hotels &amp; Accommodation</strong></h2>
            <div style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--text-muted)', lineHeight: '1.8' }}>
              <p>Hotels near <strong>Pazhou Complex</strong> or in <strong>Haizhu / Tianhe / Yuexiu Districts</strong> are most convenient.</p>

              <p><strong>Recommended options:</strong></p>
              <p>Langham Place Guangzhou</p>
<p>Shangri-La Hotel Guangzhou</p>
<p>InterContinental Guangzhou Exhibition Center</p>
<p>Pazhou Hotel (Budget-Friendly)</p>
<p>Hotels with Shuttle Service to the Fair</p>

              <p style={{ marginTop: '12px', fontStyle: 'italic' }}>  <strong>Planning Ahead : </strong>   As thousands of international visitors attend the Canton Fair, nearby hotels are often in high demand. Early booking is recommended for a comfortable stay.</p>
            </div>
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
        </article>
        <ContactCTA />
      </main>
    </>
  );
}

export default GuidePage;
