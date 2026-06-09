import SeoHelmet from '../components/SeoHelmet';
import ContactCTA from '../components/ContactCTA';
import { Link, useOutletContext } from 'react-router-dom';
import { Star, MapPin, Wifi, Coffee, Car, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HotelsPage() {
  const { onBookNow } = useOutletContext();
  return (
    <>
      <SeoHelmet
        title="Best Hotels Near Canton Fair 2026 | Top Accommodation Deals"
        description="Find the best hotels near the Canton Fair 2026. Explore premium accommodations, check proximity to the exhibition halls, and secure top deals."
        canonical="https://yourdomain.com/best-hotels-near-canton-fair"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Hotels', url: '/best-hotels-near-canton-fair' }
        ]}
        faq={[
          {
            question: "Which hotel is closest to the exhibition centre?",
            answer: "The Guangzhou Marriott Hotel Canton is only 5 minutes by car from the venue."
          },
          {
            question: "Do the hotels provide shuttle service?",
            answer: "Most premium hotels offer a paid shuttle to the exhibition centre."
          }
        ]}
        article={true}
      />

      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Best Hotels Near Canton Fair 2026 | Premium Accommodations</h1>
          <p>
            Choose comfort, convenience and business-ready facilities.
          </p>
        </div>
      </section>

      <section className="page-section">
        <h2 className="text-3xl font-bold text-light mb-4">Top Picks</h2>
        <p className="text-muted max-w-3xl mx-auto">
          We selected hotels that offer premium amenities, easy transport to the fair, and competitive rates.
        </p>
      </section>

      <section className="page-section" style={{ paddingTop: '20px' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '40px' }}>

            {/* Hotel Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              style={{ background: 'var(--card-bg)', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img src="https://cache.marriott.com//content/dam/marriott-renditions/CANTI/canti-exterior-0030-hor-wide.jpg?output-quality=90&interpolation=progressive-bilinear&downsize=512px:*" alt="Guangzhou Marriott Hotel Canton exterior facade, premium 5-star hotel 5 minutes from Canton Fair" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                <div style={{ position: 'absolute', top: '15px', left: '15px', background: '#0ea5e9', padding: '6px 10px', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#ffffff', fontSize: '0.75rem' }}>BOOK NOW</div>
                <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(255,255,255,0.9)', padding: '5px 12px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold', color: '#f59e0b' }}>
                  <Star size={16} fill="#f59e0b" /> 4.8
                </div>
              </div>
              <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#f59e0b', marginBottom: '10px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" />)}
                </div>
                <h3 style={{ fontSize: 'clamp(1.12rem, 4.0vw, 1.6rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '10px' }}>Guangzhou Marriott Hotel Canton</h3>
                <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '20px' }}>
                  <MapPin size={16} className="text-accent-cyan" /> 5 min drive from complex
                </p>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'clamp(0.63rem, 2.3vw, 0.9rem)' }}><Wifi size={16} /> Free WiFi</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'clamp(0.63rem, 2.3vw, 0.9rem)' }}><Car size={16} /> Shuttle</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'clamp(0.63rem, 2.3vw, 0.9rem)' }}><Coffee size={16} /> Breakfast</span>
                </div>
                <a href="#book" className="premium-btn" style={{ width: '100%', textAlign: 'center', marginTop: 'auto', fontSize: '0.9rem' }} onClick={(e) => onBookNow(e, 'Guangzhou Marriott Hotel Canton', 'to know the more information related to Best Hotels Near Canton Fair | Premium Accommodations')}>For more information click here</a>
              </div>
            </motion.div>

            {/* Hotel Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              style={{ background: 'var(--card-bg)', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/536113994.jpg?k=f1a5000c22be1aeda9350e17704189725abe34b31dd88b7b7ba36ea8691b1630&o=" alt="Langham Place Guangzhou luxury hotel building, 2-minute walk to Canton Fair exhibition complex" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                <div style={{ position: 'absolute', top: '15px', left: '15px', background: '#0ea5e9', padding: '6px 10px', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#ffffff', fontSize: '0.75rem' }}>BOOK NOW</div>
                <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(255,255,255,0.9)', padding: '5px 12px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold', color: '#f59e0b' }}>
                  <Star size={16} fill="#f59e0b" /> 4.9
                </div>
              </div>
              <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#f59e0b', marginBottom: '10px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" />)}
                </div>
                <h3 style={{ fontSize: 'clamp(1.12rem, 4.0vw, 1.6rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '10px' }}>Langham Place, Guangzhou</h3>
                <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '20px' }}>
                  <MapPin size={16} className="text-accent-cyan" /> 2 min walk to complex
                </p>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'clamp(0.63rem, 2.3vw, 0.9rem)' }}><ShieldCheck size={16} /> Luxury</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'clamp(0.63rem, 2.3vw, 0.9rem)' }}><Wifi size={16} /> High Speed</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'clamp(0.63rem, 2.3vw, 0.9rem)' }}><Coffee size={16} /> Dining</span>
                </div>
                <a href="#book" className="premium-btn" style={{ width: '100%', textAlign: 'center', marginTop: 'auto', fontSize: '0.9rem' }} onClick={(e) => onBookNow(e, 'Langham Place, Guangzhou', 'to know the more information related to Best Hotels Near Canton Fair | Premium Accommodations')}>For more information click here</a>
              </div>
            </motion.div>

            {/* Hotel Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
              style={{ background: 'var(--card-bg)', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/864736650.webp?k=db3dab5ce60c425e068237e404180c15c68bf2560ce0725893e4efcc45079f1d&o=" alt="Shangri-La Guangzhou 5-star hotel with comprehensive business facilities near Canton Fair exhibition" loading="lazy" onError={(e) => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1551882547-ff40c0d589d9?q=80&w=800&auto=format&fit=crop' }} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                <div style={{ position: 'absolute', top: '15px', left: '15px', background: '#0ea5e9', padding: '6px 10px', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#ffffff', fontSize: '0.75rem' }}>BOOK NOW</div>
                <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(255,255,255,0.9)', padding: '5px 12px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold', color: '#f59e0b' }}>
                  <Star size={16} fill="#f59e0b" /> 4.7
                </div>
              </div>
              <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#f59e0b', marginBottom: '10px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" />)}
                </div>
                <h3 style={{ fontSize: 'clamp(1.12rem, 4.0vw, 1.6rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '10px' }}>Shangri-La Hotel, Guangzhou</h3>
                <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '20px' }}>
                  <MapPin size={16} className="text-accent-cyan" /> 2 min walk to complex
                </p>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'clamp(0.63rem, 2.3vw, 0.9rem)' }}><Star size={16} /> River View</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'clamp(0.63rem, 2.3vw, 0.9rem)' }}><Coffee size={16} /> Lounge</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'clamp(0.63rem, 2.3vw, 0.9rem)' }}><Wifi size={16} /> Free WiFi</span>
                </div>
                <a href="#book" className="premium-btn" style={{ width: '100%', textAlign: 'center', marginTop: 'auto', fontSize: '0.9rem' }} onClick={(e) => onBookNow(e, 'Shangri-La Hotel, Guangzhou', 'to know the more information related to Best Hotels Near Canton Fair | Premium Accommodations')}>For more information click here</a>
              </div>
            </motion.div>

            {/* Hotel Card 4 - InterContinental Guangzhou Exhibition Center (demo data) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
              style={{ background: 'var(--card-bg)', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img src="https://tse4.mm.bing.net/th/id/OIP.a-_WVvD_G-mjFGLDSeZAdAAAAA?pid=Api&P=0&h=180" alt="InterContinental Guangzhou Exhibition Center exterior" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                <div style={{ position: 'absolute', top: '15px', left: '15px', background: '#0ea5e9', padding: '6px 10px', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#ffffff', fontSize: '0.75rem' }}>BOOK NOW</div>
                <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(255,255,255,0.9)', padding: '5px 12px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold', color: '#f59e0b' }}>
                  <Star size={16} fill="#f59e0b" /> 4.6
                </div>
              </div>
              <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#f59e0b', marginBottom: '10px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" />)}
                </div>
                <h3 style={{ fontSize: 'clamp(1.12rem, 4.0vw, 1.6rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '10px' }}>InterContinental Guangzhou Exhibition Center</h3>
                <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '20px' }}>
                  <MapPin size={16} className="text-accent-cyan" /> 3 min drive from complex
                </p>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'clamp(0.63rem, 2.3vw, 0.9rem)' }}><Star size={16} /> River View</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'clamp(0.63rem, 2.3vw, 0.9rem)' }}><Car size={16} /> Airport Transfer</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'clamp(0.63rem, 2.3vw, 0.9rem)' }}><Coffee size={16} /> Onsite Dining</span>
                </div>
                <a href="#book" className="premium-btn" style={{ width: '100%', textAlign: 'center', marginTop: 'auto', fontSize: '0.9rem' }} onClick={(e) => onBookNow(e, 'InterContinental Guangzhou Exhibition Center', 'to know the more information related to Best Hotels Near Canton Fair | Premium Accommodations')}>For more information click here</a>
              </div>
            </motion.div>

            {/* Hotel Card 5 - Pazhou Hotel (demo data) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
              style={{ background: 'var(--card-bg)', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/822760750.webp?k=d8cf81ef2deab253fd001f7fd0587c32971299a7557a7ef1fa331f002cbf029c&o=" alt="Pazhou Hotel exterior" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                <div style={{ position: 'absolute', top: '15px', left: '15px', background: '#0ea5e9', padding: '6px 10px', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#ffffff', fontSize: '0.75rem' }}>BOOK NOW</div>
                <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(255,255,255,0.9)', padding: '5px 12px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold', color: '#f59e0b' }}>
                  <Star size={16} fill="#f59e0b" /> 4.2
                </div>
              </div>
              <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#f59e0b', marginBottom: '10px' }}>
                  {[...Array(4)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" />)}
                </div>
                <h3 style={{ fontSize: 'clamp(1.12rem, 4.0vw, 1.6rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '10px' }}>Pazhou Hotel</h3>
                <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '20px' }}>
                  <MapPin size={16} className="text-accent-cyan" /> 5 min drive from complex
                </p>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'clamp(0.63rem, 2.3vw, 0.9rem)' }}><Wifi size={16} /> Free WiFi</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'clamp(0.63rem, 2.3vw, 0.9rem)' }}><Coffee size={16} /> Café</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'clamp(0.63rem, 2.3vw, 0.9rem)' }}><ShieldCheck size={16} /> Budget Friendly</span>
                </div>
                <a href="#book" className="premium-btn" style={{ width: '100%', textAlign: 'center', marginTop: 'auto', fontSize: '0.9rem' }} onClick={(e) => onBookNow(e, 'Pazhou Hotel', 'to know the more information related to Best Hotels Near Canton Fair | Premium Accommodations')}>For more information click here</a>
              </div>
            </motion.div>

            {/* Hotel Card 6 - Canton Fair Suites (demo data) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }}
              style={{ background: 'var(--card-bg)', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border-color)', boxShadow: '0 15px 35px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                <img src="https://tse1.mm.bing.net/th/id/OIP._g8y9hLCx4cs36qgVflqcwHaFF?pid=Api&P=0&h=180" alt="Fairfield by Marriott Guangzhou Tianhe Park exterior" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'} />
                <div style={{ position: 'absolute', top: '15px', left: '15px', background: '#0ea5e9', padding: '6px 10px', borderRadius: '12px', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 700, color: '#ffffff', fontSize: '0.75rem' }}>BOOK NOW</div>
                <div style={{ position: 'absolute', top: '15px', right: '15px', background: 'rgba(255,255,255,0.9)', padding: '5px 12px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold', color: '#f59e0b' }}>
                  <Star size={16} fill="#f59e0b" /> 4.5
                </div>
              </div>
              <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#f59e0b', marginBottom: '10px' }}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#f59e0b" />)}
                </div>
                <h3 style={{ fontSize: 'clamp(1.12rem, 4.0vw, 1.6rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '10px' }}>Fairfield by Marriott Guangzhou Tianhe Park</h3>
                <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '20px' }}>
                  <MapPin size={16} className="text-accent-cyan" /> 15 min drive from complex
                </p>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '30px', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'clamp(0.63rem, 2.3vw, 0.9rem)' }}><Wifi size={16} /> Free WiFi</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'clamp(0.63rem, 2.3vw, 0.9rem)' }}><Coffee size={16} /> Breakfast</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: 'clamp(0.63rem, 2.3vw, 0.9rem)' }}><ShieldCheck size={16} /> Business Rooms</span>
                </div>
                <a href="#book" className="premium-btn" style={{ width: '100%', textAlign: 'center', marginTop: 'auto', fontSize: '0.9rem' }} onClick={(e) => onBookNow(e, 'Fairfield by Marriott Guangzhou Tianhe Park', 'to know the more information related to Best Hotels Near Canton Fair | Premium Accommodations')}>For more information click here</a>
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
            <Link to="/guangzhou-business-visa-guide" className="related-card">Visa Guide</Link>
            <Link to="/canton-fair-airport-transfer" className="related-card">Airport Transfer</Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
