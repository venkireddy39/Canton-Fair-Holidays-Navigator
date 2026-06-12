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
            <h1 style={{ color: '#fff', fontSize: 'clamp(1.96rem, 7.0vw, 2.8rem)', marginBottom: '20px' }}>
              140th Canton Fair 2026: Dates, Time, Location, phases, Travel, Hotels and Importer Guide
            </h1>
            <p style={{ color: '#e0e0e0', fontSize: 'clamp(0.84rem, 3.0vw, 1.2rem)' }}>
              Everything you need to know – venues, visa, transport, and registration.
            </p>
          </div>
        </section>

        <article className="blog-article" style={{ maxWidth: '900px', margin: '40px auto', padding: '0 20px' }}>
          <div className="article-meta" style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '20px' }}>
            <span>By Holidays Navigator</span> • <time dateTime="2026-06-08">June 8, 2026</time>
          </div>

          <section className="overview-section" style={{ padding: '60px 0' }}>
            <div className="container">
              <h2 style={{ fontSize: 'clamp(1.75rem, 6.3vw, 2.5rem)', marginBottom: '20px', textAlign: 'center' }}>
                📅 <strong>What Is Canton Fair 2026?</strong>
              </h2>
              <p style={{ fontSize: 'clamp(0.77rem, 2.8vw, 1.1rem)', textAlign: 'center', maxWidth: '800px', margin: '0 auto', color: 'var(--text-muted)' }}>
                The Canton Fair is one of the biggest trade shows in the world, held in Guangzhou, China. It brings together thousands of suppliers, manufacturers, and buyers from different countries. People visit the fair to discover new products, connect with trusted suppliers, and grow their businesses. Held twice every year, the Canton Fair is a leading global trade exhibition. The upcoming 140th Canton Fair marks the 140th edition of this internationally recognized business event.
              </p>
            </div>
          </section>


          <section className="main-content page-section-light" style={{ padding: '60px 0' }}>
            <div className="container">
              <h2 style={{ fontSize: 'clamp(1.75rem, 6.3vw, 2.5rem)', marginBottom: '30px', textAlign: 'center' }}>
                Event, Dates & Phases
              </h2>

              <div
                style={{
                  maxWidth: '800px',
                  margin: '0 auto',
                  fontSize: 'clamp(0.77rem, 2.8vw, 1.1rem)',
                  color: 'var(--text-muted)',
                  textAlign: 'left',
                  lineHeight: '1.5',
                }}
              >
                <div style={{ lineHeight: "1.2" }}>
                  <p style={{ margin: 0, padding: 0 }}><b>Event : </b> Canton Fair 2026 Autumn Session</p>
                  <p style={{ margin: 0, padding: 0 }}><b>Phases :</b> The Canton Fair is conducted in three phases.</p>
                  <p style={{ margin: 0, padding: 0 }}><b>Phase 1 :</b> Electronics & Machinery (October 15 – October 19)</p>
                  <p style={{ margin: 0, padding: 0 }}><b>Phase 2 :</b> Consumer Goods & Home Decor (October 23 – October 27)</p>
                  <p style={{ margin: 0, padding: 0 }}><b>Phase 3 :</b> Textiles, Garments & Shoes (October 31 – November 04)</p>
                  <p style={{ margin: 0, padding: 0 }}><b>Time :</b> 9:30 AM – 6:00 PM (Applicable to all three phases)</p>
                  <p style={{ margin: 0, padding: 0 }}><b>Entry & Exit :</b> You can enter and exit the fair freely during opening hours with a valid buyer badge.</p>
                  <p style={{ margin: 0, padding: 0 }}><b>Location :</b> China Import and Export Fair Complex (Pazhou Complex), No. 380 Yuejiang Middle Road, Haizhu District, Guangzhou, <u>China</u>.</p>
                </div>

              </div>
            </div>
          </section>

          <section className="transport-section page-section-light" style={{ padding: '40px 0' }}>
            <div className="container">
              <h2 style={{ fontSize: 'clamp(1.75rem, 6.3vw, 2.5rem)', marginBottom: '30px', textAlign: 'center' }}>
                Travel Information
              </h2>
              <div style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--text-muted)', lineHeight: '1.8', textAlign: 'left' }}>
                <p><strong> ✈️ Arriving from Guangzhou Airport : </strong>After landing at Guangzhou Baiyun International Airport, visitors can travel to the Canton Fair Complex by metro, taxi, or private transfer. The journey usually takes around 45–60 minutes depending on traffic conditions.</p>

                <p><strong> 🚄 Travelling from Hong Kong : </strong>Visitors coming from Hong Kong can reach Guangzhou by high-speed train and continue to the exhibition venue by metro or taxi. Ferry services may also be available for certain routes.</p>

                <p><strong>🚇 Getting Around Guangzhou : </strong>Guangzhou has a well-connected public transportation network, including metro lines, buses, and taxis. The metro is the most convenient option for reaching the Canton Fair venue.</p>

                <p style={{ fontWeight: 2900 }}><strong>Travel Tip: </strong>During the Canton Fair, transportation services can be very busy. It is recommended to start your journey early and allow extra travel time.</p>
              </div>
            </div>
          </section>

          <section className="hotels-section page-section" style={{ padding: '40px 0' }}>
            <div className="container">
              <h2 style={{ fontSize: 'clamp(1.75rem, 6.3vw, 2.5rem)', marginBottom: '30px', textAlign: 'center' }}>
                <strong>Hotels &amp; Accommodation</strong>
              </h2>
              <div style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--text-muted)', lineHeight: '1.8', textAlign: 'left' }}>
                <p>Hotels near <strong>Pazhou Complex</strong> or in <strong>Haizhu / Tianhe / Yuexiu Districts</strong> are most convenient.</p>

                <p><strong>Recommended options:</strong></p>
                <p>Guangzhou Marriott Hotel Canton</p>
                <p>Langham Place Guangzhou</p>
                <p>Shangri-La Hotel Guangzhou</p>
                <p>InterContinental Guangzhou Exhibition Center</p>
                <p>Pazhou Hotel (Budget-Friendly)</p>
                <p>Fairfield by Marriott Guangzhou Tianhe Park</p>
                <p><u>Hotels with Shuttle Service to the Fair</u></p>

                <p style={{ marginTop: '12px', fontStyle: 'italic' }}>
                  <strong>Planning Ahead : </strong>As thousands of international visitors attend the Canton Fair, nearby hotels are often in high demand. Early booking is recommended for a comfortable stay.
                </p>
              </div>
            </div>
          </section>
          <section className="importers-section page-section" style={{ padding: '40px 0' }}>
            <div className="container">
              <h2 style={{ fontSize: 'clamp(1.75rem, 6.3vw, 2.5rem)', marginBottom: '20px', textAlign: 'center' }}>
                <strong>How the Canton Fair Supports Importers</strong>
              </h2>

              <div style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--text-muted)', lineHeight: '1.8', textAlign: 'left' }}>
                <p>
                  The Canton Fair provides a valuable opportunity for businesses looking to source products directly from manufacturers. By attending the event, buyers can:
                </p>

                <ul>
                  <li>Meet suppliers in person and evaluate product quality firsthand.</li>
                  <li>Discuss pricing, minimum order quantities (MOQs), and delivery schedules directly with manufacturers.</li>
                  <li>Discover new products and explore potential business opportunities.</li>
                  <li>Establish long-term partnerships with reliable suppliers.</li>
                </ul>

                <p>
                  For many importers, face-to-face communication offers greater confidence than relying solely on online sourcing platforms.
                </p>
              </div>
            </div>
          </section><br></br>

          <section className="importing-guide page-section-light" style={{ padding: '40px 0' }}>
            <div className="container">
              <h2 style={{ fontSize: 'clamp(1.75rem, 6.3vw, 2.5rem)', marginBottom: '20px', textAlign: 'center' }}>
                <strong>Step-by-Step Importing Guide for New Visitors</strong>
              </h2>

              <div style={{ maxWidth: '900px', margin: '0 auto', color: 'var(--text-muted)', lineHeight: '1.8', textAlign: 'left' }}>

                <p><b>1. Prepare Your Travel Plans : </b>
                  Arrange your visa, flights, accommodation, and travel schedule well in advance to avoid last-minute issues.</p>

                <p><b>2. Complete Buyer Registration : </b>
                  Register before arriving at the fair to save time and simplify the entry process.</p>

                <p><b>3. Shortlist Potential Suppliers : </b>
                  Review exhibitor information and create a list of suppliers that match your business requirements.</p>

                <p><b>4. Attend the Exhibition : </b>
                  Visit supplier booths, collect catalogs, compare products, and discuss pricing and sample options.</p>

                <p><b>5. Evaluate and Confirm Orders : </b>
                  After the event, review supplier quotations, request samples if needed, and finalize purchasing agreements.</p>

                <p><b>6. Organize Shipping and Delivery : </b>
                  Choose a suitable shipping method and coordinate freight, customs clearance, and final delivery arrangements.</p><br></br>
                <h3>Helpful Tips for First-Time Visitors</h3>
                <p>✔ Reserve flights and accommodation early, as demand increases significantly during the fair period.</p>

                <p>✔ Carry business cards to make networking and supplier introductions easier.</p>

                <p>✔ Use translation tools when communicating with suppliers who have limited English proficiency.</p>

                <p>✔ Schedule meetings with key suppliers before arriving to maximize your time.</p>

                <p>✔ Wear comfortable clothing and footwear, as the exhibition complex covers a large area.</p>

                <p>✔ Bring essential items such as a power bank, notebook, water bottle, and snacks.</p> <br></br>
                <h3>Experiences Shared by Previous Visitors</h3>

                <p>Hotels and public transportation near the exhibition venue become extremely busy during the event.
                  Completing registration before arrival makes entry much faster and more convenient.Having business cards readily available helps streamline registration and supplier interactions. Planning meetings in advance improves productivity and reduces time spent searching for exhibitors.</p>
              </div>
            </div>
          </section>

          <section className="page-section-light" style={{ padding: '60px 0' }}>
            <div className="container">
              <h3
                style={{
                  fontSize: 'clamp(1.75rem, 2 vw, 1.5rem)',
                  marginBottom: '30px',
                  textAlign: 'center'
                }}
              >
                Planning Your Canton Fair Trip? We're Here to Help
              </h3>

              <div
                style={{
                  maxWidth: '900px',
                  margin: '0 auto',
                  color: 'var(--text-muted)',
                  lineHeight: '1.8',
                  textAlign: 'left'
                }}
              >
                <p>
                  If you're planning to attend the Canton Fair but need help with travel arrangements,
                  accommodation, registration, or local transportation, <u>Holidays</u> <u>Navigator</u> can make
                  your journey smoother & more convenient.
                </p>

                <p><strong>✔ Travel Planning Support:</strong> Assistance with flights, hotels, and airport transfers.</p>

                <p><strong>✔ Canton Fair Guidance:</strong> Helpful information about registration, venue access, and visitor preparation.</p>

                <p><strong>✔ Hotel Recommendations:</strong> Suggestions for comfortable accommodation near the Canton Fair Complex.</p>

                <p><strong>✔ Local Transportation Tips:</strong> Guidance on metro routes, taxis, and getting around Guangzhou efficiently.</p>

                <p><strong>✔ Practical Travel Resources:</strong> Useful tips and information to help first-time and returning visitors have a hassle-free experience.</p>

                <p>
                  Whether you are attending the Canton Fair for the first time or are a regular visitor,
                  Holidays Navigator helps you plan a more organized, comfortable, and productive trip.
                </p>

                <p>
                  <strong> With Holidays Navigator, you can focus on exploring business opportunities while we help simplify your travel experience.</strong>
                </p>
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
              <h2 style={{ fontSize: 'clamp(1.75rem, 6.3vw, 2.5rem)', marginBottom: '40px', textAlign: 'center' }}>
                Frequently Asked Questions
              </h2>

              <ul style={{ maxWidth: '800px', margin: '0 auto', listStyle: 'none', padding: 0 }}>
                {faqItems.map((item, idx) => (
                  <li key={idx} style={{ marginBottom: '25px', padding: '20px', background: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                    <strong style={{ fontSize: 'clamp(0.84rem, 3.0vw, 1.2rem)', display: 'block', marginBottom: '10px', color: 'var(--text-light)' }}>
                      {item.question}
                    </strong>
                    <span style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.73rem, 2.6vw, 1.05rem)', lineHeight: '1.6', display: 'block' }}>
                      {item.answer}
                    </span>
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