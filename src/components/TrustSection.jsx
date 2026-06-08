import { motion } from 'framer-motion';
import { Star, ShieldCheck, Users, Globe, Building2 } from 'lucide-react';

const TrustSection = () => {
  const stats = [
    {
      id: 1,
      icon: <Users size={32} className="stat-icon-color" />,
      number: "500+",
      label: "Entrepreneurs Assisted",
      desc: "Delivering stress-free business travel experiences to Canton Fair."
    },
    {
      id: 2,
      icon: <ShieldCheck size={32} className="stat-icon-color" />,
      number: "100%",
      label: "Visa Advisory Success",
      desc: "Comprehensive China Business Visa guidelines and documentation support."
    },
    {
      id: 3,
      icon: <Globe size={32} className="stat-icon-color" />,
      number: "10+",
      label: "Years Sourcing Presence",
      desc: "Trusted relationships with premium trade delegations."
    },
    {
      id: 4,
      icon: <Building2 size={32} className="stat-icon-color" />,
      number: "15+",
      label: "Partner Hotels Near Pazhou",
      desc: "Handpicked premium twin-sharing hotel rooms with private shuttles."
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Rajesh marreddy venkata sudhakar",
      role: "★ ★ ★ ★ ★  ",
      location: "New Delhi, India",
      rating: 5,
      feedback: " Holidays navigator a good choice as travel partner. The service they provided to us right from planning, ticket booking, local conveyance, guide etc., was excellent. I recommend you all to take Holidays Navigator as your travel partner and you enjoy your vacation."
    },
    {
      id: 2,
      name: "CA Mounika",
      role: "★ ★ ★ ★ ★  ",
      location: "Andhra Pradesh, india",
      rating: 5,
      feedback: "We have taken couple of trips with Holidays Navigator. We got the best price. The process of booking a vacation is simple with them. They understood our requirements clearly and helped with the exact itinerary."
    },
    {
      id: 3,
      name: "Amit pandya",
      role: " ★ ★ ★ ★ ★  ",
      location: "Maharashtra, india",
      rating: 5,
      feedback: "Extremely statisfied and well organized trip. I recommend all to take Holidays Navigator as your travel partner.👍"
    },
    {
      id: 4,
      name: "Phaniteja goteti",
      role: "★ ★ ★ ★ ★  ",
      location: "Hyderabad, India",
      rating: 5,
      feedback: "I recently had the pleasure of booking my flight tickets through Holiday Navigators, and I can confidently say that it was one of the best and responsible service provider I come across. From the moment I contacted them to the day I returned from my trip, Holiday Navigators went above and beyond to ensure my journey was seamless and memorable. Thank you, Holiday Navigators, for making my trip truly exceptional!"
    },
    {
      id: 5,
      name: "133.Sravya Samhitha",
      role: "★ ★ ★ ★ ★  ",
      location: "Karnataka, India",
      rating: 5,
      feedback: "It was a great experience with Holidays Navigator. Our driver was very well aware of all the places n guided us every day.The hotels given were amazing . Would like to plan a trip with Holidays navigator again for sure ."
    },
    {
      id: 6,
      name: "Teja Sai",
      role: "★ ★ ★ ★ ★  ",
      location: "Bangalore, India",
      rating: 5,
      feedback: "Firstly we had been to many trips with holidays navigator. The greatest part with them is they not only just book your tickets and send to trip unlike other travel companies, they are available anytime even in midnight to hear your call regarding any issue. They make sure you have the best trip possible.  Everything there is provided as per our convenience and best possible way. Thank you for making the trips possible👍💥"
    }
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80",
      alt: "Premium Business Hotel lobby and check-in experience in Guangzhou",
      title: "Handpicked Premium Hotels"
    },
    {
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      alt: "Zhujiang New Town Skyline and Guangzhou business district",
      title: "Guangzhou Sourcing Hub"
    },
    {
      url: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=600&q=80",
      alt: "Entrepreneurs collaborating during Canton Fair delegation meetings",
      title: "Delegation Cooperation"
    },
    {
      url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=600&q=80",
      alt: "Business negotiations at factory sourcing display",
      title: "Supplier Negotiations"
    }
  ];

  return (
    <section id="trust-signals" style={{ padding: '80px 0', background: 'var(--bg-dark)' }}>
      <div className="container">

        {/* Authority Metrics / Numbers */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 className="gradient-text" style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', marginBottom: '15px' }}>
              Proven Sourcing Success in Numbers
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(13px, 1.8vw, 18px)', maxWidth: '700px', margin: '0 auto' }}>
              We build trust through performance. Here is how we empower trade importers globally.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: '30px'
          }}>
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                className="glass-card"
                style={{
                  padding: '30px 25px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  border: '1px solid var(--border-color)',
                  background: 'var(--card-bg)'
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                  {stat.icon}
                </div>
                <div style={{
                  fontSize: 'clamp(1.96rem, 7.0vw, 2.8rem)',
                  fontWeight: '800',
                  color: 'var(--accent-green)',
                  fontFamily: 'var(--font-sans)',
                  lineHeight: '1.1',
                  marginBottom: '10px'
                }}>
                  {stat.number}
                </div>
                <h4 style={{
                  fontSize: 'clamp(0.77rem, 2.8vw, 1.1rem)',
                  color: 'var(--text-light)',
                  fontWeight: '700',
                  marginBottom: '10px'
                }}>
                  {stat.label}
                </h4>
                <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.66rem, 2.4vw, 0.95rem)', lineHeight: '1.5' }}>
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Trust Gallery */}
        <div style={{ marginBottom: '80px' }}>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', marginBottom: '15px' }}>
              Guangzhou Business & Sourcing Atmosphere
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(13px, 1.8vw, 18px)', maxWidth: '700px', margin: '0 auto' }}>
              Authentic destination snapshots from premium hotels, business negotiations, and trade delegation support.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
            gap: '20px'
          }}>
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  height: '240px',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.05)',
                  border: '1px solid var(--border-color)'
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95), transparent)',
                  padding: '20px 15px',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'flex-end'
                }}>
                  <span style={{ fontSize: 'clamp(0.70rem, 2.5vw, 1rem)', fontWeight: '700', fontFamily: 'var(--font-sans)' }}>
                    {img.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Authentic Customer Testimonials */}
        <div>
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '50px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.6rem)', marginBottom: '15px' }}>Testimonials</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(13px, 1.8vw, 18px)', maxWidth: '700px', margin: '0 auto' }}>Building long-term relationships through trusted service, professional support, and memorable travel experiences.</p>
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
                        alt={test.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : test.id === 2 ? (
                      <img
                        src="https://tse3.mm.bing.net/th/id/OIP.6lC6Yk0OD4Kw8otd01kzyQHaFF?pid=Api&P=0&h=180"
                        alt={test.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : test.id === 3 ? (
                      <img
                        src="/testimonials2.png"
                        alt={test.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : test.id === 4 ? (
                      <img
                        src="/testimonials3.png"
                        alt={test.name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    ) : test.id === 5 ? (
                      <img
                        src="/testimonials4.png"
                        alt={test.name}
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
      </div>

    </section>
  );
};

export default TrustSection;
