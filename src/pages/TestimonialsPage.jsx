import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import SeoHelmet from '../components/SeoHelmet';
import ContactCTA from '../components/ContactCTA';

const testimonials = [
  {
    id: 1,
    name: "Rajesh marreddy venkata sudhakar",
    role: "★ ★ ★ ★ ★",
    location: "New Delhi, India",
    rating: 5,
    feedback: "Holidays navigator a good choice as travel partner. The service they provided to us right from planning, ticket booking, local conveyance, guide etc., was excellent. I recommend you all to take Holidays Navigator as your travel partner and you enjoy your vacation."
  },
  {
    id: 2,
    name: "CA Mounika",
    role: "★ ★ ★ ★ ★",
    location: "Andhra Pradesh, India",
    rating: 5,
    feedback: "We have taken couple of trips with Holidays Navigator. We got the best price. The process of booking a vacation is simple with them. They understood our requirements clearly and helped with the exact itinerary."
  },
  {
    id: 3,
    name: "Amit pandya",
    role: "★ ★ ★ ★ ★",
    location: "Maharashtra, India",
    rating: 5,
    feedback: "Extremely satisfied and well organized trip. I recommend all to take Holidays Navigator as your travel partner.👍"
  },
  {
    id: 4,
    name: "Phaniteja goteti",
    role: "★ ★ ★ ★ ★",
    location: "Hyderabad, India",
    rating: 5,
    feedback: "I recently had the pleasure of booking my flight tickets through Holiday Navigators, and I can confidently say that it was one of the best and responsible service provider I come across. From the moment I contacted them to the day I returned from my trip, Holiday Navigators went above and beyond to ensure my journey was seamless and memorable. Thank you, Holiday Navigators, for making my trip truly exceptional!"
  },
  {
    id: 5,
    name: "133.Sravya Samhitha",
    role: "★ ★ ★ ★ ★",
    location: "Karnataka, India",
    rating: 5,
    feedback: "It was a great experience with Holidays Navigator. Our driver was very well aware of all the places n guided us every day. The hotels given were amazing. Would like to plan a trip with Holidays navigator again for sure."
  },
  {
    id: 6,
    name: "Teja Sai",
    role: "★ ★ ★ ★ ★",
    location: "Bangalore, India",
    rating: 5,
    feedback: "Firstly we had been to many trips with holidays navigator. The greatest part with them is they not only just book your tickets and send to trip unlike other travel companies, they are available anytime even in midnight to hear your call regarding any issue. They make sure you have the best trip possible. Everything there is provided as per our convenience and best possible way. Thank you for making the trips possible👍💥"
  },
  {
    id: 7,
    name: "Vikas Sharma",
    role: "★ ★ ★ ★ ★",
    location: "Mumbai, India",
    rating: 5,
    feedback: "Attending the Canton Fair was a major step for my import business, and Holidays Navigator handled everything perfectly. From the business visa invitation support to the daily shuttles to Pazhou, the organization was top-notch."
  },
  {
    id: 8,
    name: "Meenakshi Sundaram",
    role: "★ ★ ★ ★ ★",
    location: "Chennai, India",
    rating: 5,
    feedback: "Highly professional service! The premium twin-sharing hotel accommodation was clean, comfortable, and very close to the exhibition hall. The team was constantly in touch to make sure we had zero issues."
  }
];

export default function TestimonialsPage() {
  return (
    <>
      <SeoHelmet
        title="Canton Fair Client Testimonials & Reviews | Holidays Navigator"
        description="Read reviews and testimonials from business owners, importers, and entrepreneurs who traveled to the Canton Fair with Holidays Navigator."
        canonical="https://holidaysnavigator.com/canton-fair-testimonials"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Canton Fair Testimonials', url: '/canton-fair-testimonials' }
        ]}
      />

      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Canton Fair Testimonials</h1>
          <p>
            Hear from the business owners, entrepreneurs, and trade delegations who choose our Canton Fair travel packages and sourcing services.
          </p>
        </div>
      </section>

      <section className="page-section" style={{ background: 'var(--bg-dark)', padding: '60px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', marginBottom: '15px' }}>
              What Our Clients Say
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(14px, 1.8vw, 18px)', maxWidth: '700px', margin: '0 auto' }}>
              Our success is measured by the growth and satisfaction of our clients. Here is what they have to say about their experiences.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: '30px'
          }}>
            {testimonials.map((test) => (
              <motion.div
                key={test.id}
                className="glass-card"
                style={{
                  padding: '35px 30px',
                  borderRadius: '16px',
                  border: '1px solid var(--border-color)',
                  background: 'var(--card-bg)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.05)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="var(--accent-gold)" color="var(--accent-gold)" />
                    ))}
                  </div>
                  <p style={{
                    color: 'var(--text-muted)',
                    fontSize: 'clamp(0.73rem, 2.6vw, 1.05rem)',
                    lineHeight: '1.65',
                    fontStyle: 'italic',
                    marginBottom: '25px'
                  }}>
                    "{test.feedback}"
                  </p>
                </div>

                <div style={{
                  borderTop: '1px solid var(--border-color)',
                  paddingTop: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '15px'
                }}>
                  <div style={{
                    width: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '2px solid var(--accent-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: '800',
                    fontSize: 'clamp(0.77rem, 2.8vw, 1.1rem)'
                  }}>
                    {test.id === 1 ? (
                      <img
                        src="/testimonials1.png"
                        alt={`${test.name}, Canton Fair customer`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : test.id === 2 ? (
                      <img
                        src="https://tse3.mm.bing.net/th/id/OIP.6lC6Yk0OD4Kw8otd01kzyQHaFF?pid=Api&P=0&h=180"
                        alt={`${test.name}, CA professional`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : test.id === 3 ? (
                      <img
                        src="/testimonials2.png"
                        alt={`${test.name}, business owner`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : test.id === 4 ? (
                      <img
                        src="/testimonials3.png"
                        alt={`${test.name}, entrepreneur`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : test.id === 5 ? (
                      <img
                        src="/testimonials4.png"
                        alt={`${test.name}, Canton Fair customer`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : test.id === 6 ? (
                      <img
                        src="/testimonials5.png"
                        alt={test.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : (
                      test.name[0]
                    )}
                  </div>
                  <div>
                    <h4 style={{ fontSize: 'clamp(0.77rem, 2.8vw, 1.1rem)', color: 'var(--text-light)', fontWeight: '700', margin: 0 }}>
                      {test.name}
                    </h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.59rem, 2.1vw, 0.85rem)', margin: 0 }}>
                      {test.role} • <span style={{ color: 'var(--accent-gold)', fontWeight: '600' }}>{test.location}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section page-section-light" style={{ padding: '60px 0', borderTop: '1px solid var(--border-color)' }}>
        <div className="container text-center">
          <h3 className="explore-more-title" style={{ marginBottom: '30px' }}>Explore More</h3>
          <div className="related-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: '20px'
          }}>
            <Link to="/about-us" className="related-card">About Us</Link>
            <Link to="/privacy-policy" className="related-card">Privacy Policy</Link>
            <Link to="/canton-fair-packages" className="related-card">Travel Packages</Link>
            <Link to="/terms-and-conditions" className="related-card">Terms & Conditions</Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
