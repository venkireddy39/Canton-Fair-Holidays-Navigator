import React, { useState, useEffect } from 'react';
import SeoHelmet from '../components/SeoHelmet';
import ContactCTA from '../components/ContactCTA';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  CheckCircle2,
  CreditCard,
  FileText,
  Hotel,
  Bus,
  AlertOctagon,
  Plane,
  Shield,
  CloudLightning,
  Scale,
  UserCheck,
  Info,
  XCircle
} from 'lucide-react';

export default function TermsPage() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    { id: 'overview', title: '1. Inclusions & Overview', icon: ShieldCheck },
    { id: 'booking', title: '2. Booking & Payment', icon: CreditCard },
    { id: 'visa', title: '3. Visa & Fair Registration', icon: FileText },
    { id: 'hotel-transfers', title: '4. Hotel & Shuttle', icon: Hotel },
    { id: 'cancellation', title: '5. Cancellation Policy', icon: AlertOctagon },
    { id: 'visa-rejections', title: '6. Rejections & No Refunds', icon: XCircle },
    { id: 'flights-insurance', title: '7. Flights & Insurance', icon: Plane },
    { id: 'legal', title: '8. Legal & Force Majeure', icon: Scale }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      <SeoHelmet
        title="Canton Fair Package Terms & Conditions | Holidays Navigator"
        description="Official terms and conditions for Canton Fair 2026 packages. Read our guidelines on package inclusions, visa disclaimers, hotel block bookings, and refund policies."
        canonical="https://holidaysnavigator.com/terms-and-conditions"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Terms & Conditions', url: '/terms-and-conditions' }
        ]}
      />

      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Terms &amp; Conditions</h1>
          <p>Effective Date: June 1, 2026</p>
        </div>
      </section>

      <section className="page-section" style={{ paddingTop: '40px', background: 'var(--bg-dark)' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px',
          }} className="terms-grid-layout">
            
            {/* Styled CSS for Sidebar Navigation and layout responsiveness */}
            <style dangerouslySetInnerHTML={{ __html: `
              @media (min-width: 992px) {
                .terms-grid-layout {
                  grid-template-columns: 320px 1fr !important;
                }
                .terms-sidebar-sticky {
                  position: sticky;
                  top: 100px;
                  max-height: calc(100vh - 140px);
                  overflow-y: auto;
                  margin-left: -60px;
                }
              }
              .terms-nav-item {
                display: flex;
                align-items: center;
                gap: 12px;
                padding: 12px 16px;
                border-radius: 10px;
                color: var(--text-muted);
                font-weight: 500;
                cursor: pointer;
                transition: all 0.3s ease;
                border: 1px solid transparent;
                background: transparent;
                text-align: left;
                width: 100%;
              }
              .terms-nav-item:hover {
                color: var(--text-light);
                background: rgba(0, 119, 182, 0.05);
              }
              .terms-nav-item.active {
                color: #fff;
                background: linear-gradient(135deg, var(--accent-green), var(--accent-cyan));
                box-shadow: 0 4px 15px rgba(14, 165, 233, 0.25);
              }
              .terms-section-card {
                background: var(--card-bg);
                backdrop-filter: blur(10px);
                border: 1px solid var(--border-color);
                border-radius: 20px;
                padding: 40px;
                margin-bottom: 40px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
              }
              .terms-bullet-list {
                list-style: none;
                padding: 0;
                margin: 0;
                display: flex;
                flex-direction: column;
                gap: 12px;
              }
              .terms-bullet-item {
                display: flex;
                align-items: flex-start;
                gap: 12px;
                color: var(--text-muted);
                font-size: 1.05rem;
                line-height: 1.6;
              }
              .terms-bullet-icon {
                color: var(--accent-green);
                flex-shrink: 0;
                margin-top: 4px;
              }
              .terms-warning-box {
                background: rgba(212, 122, 0, 0.06);
                border-left: 4px solid var(--accent-gold);
                border-radius: 0 12px 12px 0;
                padding: 20px;
                margin: 20px 0;
              }
              .terms-table {
                width: 100%;
                border-collapse: collapse;
                margin: 20px 0;
              }
              .terms-table th, .terms-table td {
                padding: 14px 18px;
                border: 1px solid var(--border-color);
                text-align: left;
              }
              .terms-table th {
                background: rgba(0, 119, 182, 0.08);
                color: var(--text-light);
                font-weight: 700;
              }
              .terms-table td {
                color: var(--text-muted);
              }
              .terms-table tr:nth-child(even) {
                background: rgba(255, 255, 255, 0.3);
              }
            `}} />

            {/* Sidebar Navigation */}
            <div className="terms-sidebar-sticky">
              <div style={{
                background: 'var(--card-bg)',
                backdropFilter: 'blur(10px)',
                border: '1px solid var(--border-color)',
                borderRadius: '20px',
                padding: '24px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)'
              }}>
                <h2 style={{ fontSize: 'clamp(0.88rem, 3.1vw, 1.25rem)', fontWeight: '800', marginBottom: '20px', color: 'var(--text-light)', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', textAlign: 'left' }}>
                  Sections
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {sections.map((sec) => {
                    const IconComp = sec.icon;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => scrollToSection(sec.id)}
                        className={`terms-nav-item ${activeSection === sec.id ? 'active' : ''}`}
                      >
                        <IconComp size={18} />
                        <span>{sec.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Terms Content Area */}
            <div>
              {/* Preamble */}
              <div style={{ marginBottom: '35px' }}>
                <p style={{ fontSize: 'clamp(0.80rem, 2.9vw, 1.15rem)', color: 'var(--text-muted)', lineHeight: '1.8', fontStyle: 'italic' }}>
                  These Terms &amp; Conditions govern all Canton Fair packages offered by <strong>Amazing Holidays Navigator Private Limited ("Company")</strong>. By making a booking and/or payment, the client acknowledges and agrees to the terms stated herein.
                </p>
              </div>

              {/* SECTION 1: Overview & Inclusions */}
              <motion.div
                id="overview"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="terms-section-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px' }}>
                  <ShieldCheck className="text-accent-green" size={28} />
                  <h2 style={{ fontSize: 'clamp(1.12rem, 4.0vw, 1.6rem)', fontWeight: '700', color: 'var(--text-light)', margin: 0 }}>Package Inclusions &amp; Exclusions</h2>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.73rem, 2.6vw, 1.05rem)', marginBottom: '20px' }}>
                  The Canton Fair package may include the following services as specified in the booking confirmation:
                </p>
                <ul className="terms-bullet-list" style={{ marginBottom: '25px' }}>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Hotel accommodation</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Visa assistance or group visa processing (where applicable)</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Canton Fair registration assistance</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Scheduled shuttle transfers provided by the hotel or designated operators</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Other inclusions specifically mentioned in the confirmed itinerary</span>
                  </li>
                </ul>
                <div className="terms-warning-box" style={{ margin: 0 }}>
                  <h4 style={{ color: 'var(--text-light)', fontWeight: '700', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Info size={18} className="text-accent-gold" /> Explicit Exclusions
                  </h4>
                  <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: 'clamp(0.69rem, 2.5vw, 0.98rem)' }}>
                    International airfare, travel insurance, forex, personal expenses, meals not specified, and any other services not expressly included are excluded from the package price.
                  </p>
                </div>
              </motion.div>

              {/* SECTION 2: Booking & Payment */}
              <motion.div
                id="booking"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="terms-section-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px' }}>
                  <CreditCard className="text-accent-cyan" size={28} />
                  <h2 style={{ fontSize: 'clamp(1.12rem, 4.0vw, 1.6rem)', fontWeight: '700', color: 'var(--text-light)', margin: 0 }}>Booking &amp; Payment Guidelines</h2>
                </div>
                <ul className="terms-bullet-list">
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Full or partial payment as communicated by the Company is required to confirm the booking.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Hotel reservations and other travel services are subject to availability at the time of booking.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Hotel rooms, rates, and allocations during Canton Fair periods are highly restricted and may change without prior notice until booking confirmation is issued.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span><strong>100% payment must be completed before commencement of travel.</strong></span>
                  </li>
                </ul>
              </motion.div>

              {/* SECTION 3: Visa & Fair Registration */}
              <motion.div
                id="visa"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="terms-section-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px' }}>
                  <FileText className="text-accent-green" size={28} />
                  <h2 style={{ fontSize: 'clamp(1.12rem, 4.0vw, 1.6rem)', fontWeight: '700', color: 'var(--text-light)', margin: 0 }}>Visa Support &amp; Registration Disclaimer</h2>
                </div>
                
                <h3 style={{ fontSize: 'clamp(0.88rem, 3.1vw, 1.25rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '15px' }}>Visa Assistance</h3>
                <ul className="terms-bullet-list" style={{ marginBottom: '25px' }}>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>The Company only provides visa assistance and documentation support.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Granting, rejecting, delaying, or issuing a visa is solely at the discretion of the concerned Embassy, Consulate, Immigration Authority, or Government Agency.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>The Company does not guarantee visa approval under any circumstances.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Visa refusal, delay, administrative processing, incomplete documentation, immigration restrictions, or failure to obtain a visa shall not be considered grounds for a full refund.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Any visa fees, processing fees, documentation expenses, courier charges, translation charges, or related expenses already incurred shall be non-refundable.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>For group visa applications, clients must submit all required documents within the timelines communicated by the Company. Delays by the client may result in cancellation of visa processing without refund of applicable charges already incurred.</span>
                  </li>
                </ul>

                <h3 style={{ fontSize: 'clamp(0.88rem, 3.1vw, 1.25rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '15px', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>Canton Fair Registration</h3>
                <ul className="terms-bullet-list">
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>The Company only provides assistance in registration procedures.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Canton Fair registration approval, issuance of badges, admission permissions, and participation eligibility are solely subject to the rules and decisions of the Canton Fair organizers and relevant authorities.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>The Company shall not be liable for any refusal, delay, suspension, cancellation, or modification of registration by the organizers.</span>
                  </li>
                </ul>
              </motion.div>

              {/* SECTION 4: Hotel & Shuttle */}
              <motion.div
                id="hotel-transfers"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="terms-section-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px' }}>
                  <Hotel className="text-accent-cyan" size={28} />
                  <h2 style={{ fontSize: 'clamp(1.12rem, 4.0vw, 1.6rem)', fontWeight: '700', color: 'var(--text-light)', margin: 0 }}>Accommodation &amp; Transport Policy</h2>
                </div>

                <h3 style={{ fontSize: 'clamp(0.88rem, 3.1vw, 1.25rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '15px' }}>Hotel Accommodation</h3>
                <ul className="terms-bullet-list" style={{ marginBottom: '25px' }}>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Hotel bookings are made with third-party suppliers and hotels.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Hotel cancellation, amendment, date change, name change, no-show charges, and refund eligibility are governed by the respective hotel's policy.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Hotel payments are generally remitted to suppliers immediately after confirmation; therefore, cancellation charges may apply immediately after booking.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Requests for changes or amendments shall be subject to hotel approval and applicable charges.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Early departure, late arrival, no-show, or unused hotel nights shall not be eligible for any refund.</span>
                  </li>
                </ul>

                <h3 style={{ fontSize: 'clamp(0.88rem, 3.1vw, 1.25rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '15px', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>Shuttle Transfers</h3>
                <ul className="terms-bullet-list">
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Shuttle transfers are operated by hotels or third-party transportation providers.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Transfer schedules are subject to operational requirements, traffic conditions, weather conditions, and decisions of the service provider.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Missed transfers due to passenger delay, late arrival, flight delays, immigration delays, or personal reasons shall not be refundable.</span>
                  </li>
                </ul>
              </motion.div>

              {/* SECTION 5: Cancellation Policy */}
              <motion.div
                id="cancellation"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="terms-section-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px' }}>
                  <AlertOctagon className="text-accent-gold" size={28} />
                  <h2 style={{ fontSize: 'clamp(1.12rem, 4.0vw, 1.6rem)', fontWeight: '700', color: 'var(--text-light)', margin: 0 }}>Cancellation &amp; Refund Structure</h2>
                </div>
                
                <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.73rem, 2.6vw, 1.05rem)', marginBottom: '20px' }}>
                  All cancellation requests must be submitted <strong>in writing by email</strong>. The date on which the Company receives the written cancellation request shall determine the applicable cancellation charges.
                </p>

                <h3 style={{ fontSize: 'clamp(0.88rem, 3.1vw, 1.25rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '15px' }}>Standard Cancellation Charges</h3>
                <table className="terms-table">
                  <thead>
                    <tr>
                      <th>Timeframe Before Departure</th>
                      <th>Cancellation Fee (% of Total Cost)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>90 days or more</td>
                      <td><strong>5%</strong> of total package cost</td>
                    </tr>
                    <tr>
                      <td>46–89 days</td>
                      <td><strong>25%</strong> of total package cost</td>
                    </tr>
                    <tr>
                      <td>30–45 days</td>
                      <td><strong>50%</strong> of total package cost</td>
                    </tr>
                    <tr>
                      <td>Within 29 days</td>
                      <td><strong>100%</strong> of total package cost (Non-refundable)</td>
                    </tr>
                  </tbody>
                </table>

                <h3 style={{ fontSize: 'clamp(0.88rem, 3.1vw, 1.25rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '15px', marginTop: '25px' }}>Additional Supplier Charges</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.73rem, 2.6vw, 1.05rem)', margin: 0 }}>
                  In addition to the above cancellation charges, any non-refundable charges imposed by hotels, suppliers, visa authorities, service providers, or third parties shall be deducted from the refund amount.
                </p>
              </motion.div>

              {/* SECTION 6: Rejections & No Refunds */}
              <motion.div
                id="visa-rejections"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="terms-section-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px' }}>
                  <XCircle className="text-accent-gold" style={{ color: '#ef4444' }} size={28} />
                  <h2 style={{ fontSize: 'clamp(1.12rem, 4.0vw, 1.6rem)', fontWeight: '700', color: 'var(--text-light)', margin: 0 }}>Visa Rejection &amp; Special No-Refund Cases</h2>
                </div>

                <h3 style={{ fontSize: 'clamp(0.88rem, 3.1vw, 1.25rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '15px' }}>Visa Rejection Contingency</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.73rem, 2.6vw, 1.05rem)', marginBottom: '15px' }}>
                  If a visa application is rejected, any refund shall be strictly subject to:
                </p>
                <ul className="terms-bullet-list" style={{ marginBottom: '20px' }}>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" style={{ color: '#ef4444' }} />
                    <span>Hotel cancellation policies</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" style={{ color: '#ef4444' }} />
                    <span>Supplier cancellation charges</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" style={{ color: '#ef4444' }} />
                    <span>Administrative charges incurred by the Company</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" style={{ color: '#ef4444' }} />
                    <span>Non-refundable services already booked or processed</span>
                  </li>
                </ul>
                <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', marginBottom: '25px' }}>
                  *Visa rejection shall not automatically entitle the client to a full refund.
                </p>

                <h3 style={{ fontSize: 'clamp(0.88rem, 3.1vw, 1.25rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '15px', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>Cases Not Eligible for Refunds</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.73rem, 2.6vw, 1.05rem)', marginBottom: '15px' }}>
                  No refund shall be available under any circumstances for:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '15px' }}>
                  <ul className="terms-bullet-list">
                    <li className="terms-bullet-item">
                      <XCircle size={16} style={{ color: '#ef4444', marginTop: '4px', flexShrink: 0 }} />
                      <span>Visa fees and visa-related expenses already incurred</span>
                    </li>
                    <li className="terms-bullet-item">
                      <XCircle size={16} style={{ color: '#ef4444', marginTop: '4px', flexShrink: 0 }} />
                      <span>Travel insurance premiums</span>
                    </li>
                    <li className="terms-bullet-item">
                      <XCircle size={16} style={{ color: '#ef4444', marginTop: '4px', flexShrink: 0 }} />
                      <span>Registration-related expenses already incurred</span>
                    </li>
                    <li className="terms-bullet-item">
                      <XCircle size={16} style={{ color: '#ef4444', marginTop: '4px', flexShrink: 0 }} />
                      <span>Unused hotel nights</span>
                    </li>
                    <li className="terms-bullet-item">
                      <XCircle size={16} style={{ color: '#ef4444', marginTop: '4px', flexShrink: 0 }} />
                      <span>Missed transfers</span>
                    </li>
                  </ul>
                  <ul className="terms-bullet-list">
                    <li className="terms-bullet-item">
                      <XCircle size={16} style={{ color: '#ef4444', marginTop: '4px', flexShrink: 0 }} />
                      <span>No-show cases</span>
                    </li>
                    <li className="terms-bullet-item">
                      <XCircle size={16} style={{ color: '#ef4444', marginTop: '4px', flexShrink: 0 }} />
                      <span>Services voluntarily not utilized by the client</span>
                    </li>
                    <li className="terms-bullet-item">
                      <XCircle size={16} style={{ color: '#ef4444', marginTop: '4px', flexShrink: 0 }} />
                      <span>Early departure from the tour</span>
                    </li>
                    <li className="terms-bullet-item">
                      <XCircle size={16} style={{ color: '#ef4444', marginTop: '4px', flexShrink: 0 }} />
                      <span>Any service marked non-refundable at the time of booking</span>
                    </li>
                  </ul>
                </div>
              </motion.div>

              {/* SECTION 7: Flights & Insurance */}
              <motion.div
                id="flights-insurance"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="terms-section-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px' }}>
                  <Plane className="text-accent-cyan" size={28} />
                  <h2 style={{ fontSize: 'clamp(1.12rem, 4.0vw, 1.6rem)', fontWeight: '700', color: 'var(--text-light)', margin: 0 }}>Flights &amp; Insurance Guidelines</h2>
                </div>

                <h3 style={{ fontSize: 'clamp(0.88rem, 3.1vw, 1.25rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '15px' }}>Flight Tickets</h3>
                <ul className="terms-bullet-list" style={{ marginBottom: '25px' }}>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Air tickets are not included unless specifically mentioned.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Where flight tickets are booked through the Company, airline cancellation, refund, rescheduling, and amendment rules shall apply. Airline charges and applicable service charges shall be deducted before processing any refund.</span>
                  </li>
                </ul>

                <h3 style={{ fontSize: 'clamp(0.88rem, 3.1vw, 1.25rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '15px', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>Travel Insurance</h3>
                <ul className="terms-bullet-list">
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Travel insurance is optional and charged separately unless specifically included.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Insurance premiums are non-refundable after issuance. All claims shall be governed by the terms and conditions of the insurance provider.</span>
                  </li>
                </ul>
              </motion.div>

              {/* SECTION 8: Legal & Force Majeure */}
              <motion.div
                id="legal"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="terms-section-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px' }}>
                  <Scale className="text-accent-green" size={28} />
                  <h2 style={{ fontSize: 'clamp(1.12rem, 4.0vw, 1.6rem)', fontWeight: '700', color: 'var(--text-light)', margin: 0 }}>Force Majeure, Liability &amp; Jurisdiction</h2>
                </div>

                <h3 style={{ fontSize: 'clamp(0.88rem, 3.1vw, 1.25rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '15px' }}>Force Majeure Clause</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.73rem, 2.6vw, 1.05rem)', marginBottom: '15px' }}>
                  The Company shall not be liable for any loss, delay, cancellation, additional expense, or failure to perform due to circumstances beyond its reasonable control, including but not limited to:
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '10px', marginBottom: '20px' }}>
                  <ul className="terms-bullet-list" style={{ gap: '8px' }}>
                    <li className="terms-bullet-item"><CheckCircle2 size={14} className="terms-bullet-icon" /> <span>Natural disasters / Acts of God</span></li>
                    <li className="terms-bullet-item"><CheckCircle2 size={14} className="terms-bullet-icon" /> <span>Floods, earthquakes, storms, or severe weather</span></li>
                    <li className="terms-bullet-item"><CheckCircle2 size={14} className="terms-bullet-icon" /> <span>Epidemics or pandemics</span></li>
                    <li className="terms-bullet-item"><CheckCircle2 size={14} className="terms-bullet-icon" /> <span>Government restrictions / border closures</span></li>
                    <li className="terms-bullet-item"><CheckCircle2 size={14} className="terms-bullet-icon" /> <span>Trade restrictions / political unrest</span></li>
                    <li className="terms-bullet-item"><CheckCircle2 size={14} className="terms-bullet-icon" /> <span>Civil disturbances</span></li>
                  </ul>
                  <ul className="terms-bullet-list" style={{ gap: '8px' }}>
                    <li className="terms-bullet-item"><CheckCircle2 size={14} className="terms-bullet-icon" /> <span>Strikes or labor disputes</span></li>
                    <li className="terms-bullet-item"><CheckCircle2 size={14} className="terms-bullet-icon" /> <span>Airline disruptions / transportation failures</span></li>
                    <li className="terms-bullet-item"><CheckCircle2 size={14} className="terms-bullet-icon" /> <span>Changes imposed by Canton Fair organizers</span></li>
                  </ul>
                </div>
                <p style={{ color: 'var(--text-muted)', fontSize: 'clamp(0.70rem, 2.5vw, 1rem)', fontStyle: 'italic', marginBottom: '25px' }}>
                  Any refunds in such situations shall be strictly subject to recoveries received from suppliers and service providers.
                </p>

                <h3 style={{ fontSize: 'clamp(0.88rem, 3.1vw, 1.25rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '15px', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>Limitation of Liability</h3>
                <ul className="terms-bullet-list" style={{ marginBottom: '25px' }}>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>The Company acts solely as an intermediary between clients and service providers including hotels, transport operators, visa agencies, insurance providers, airlines, and event organizers.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>The Company shall not be responsible for acts, omissions, delays, negligence, bankruptcy, insolvency, service failures, or operational decisions of third-party providers.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Under no circumstances shall the Company's liability exceed the amount actually received by the Company from the client for the relevant booking.</span>
                  </li>
                </ul>

                <h3 style={{ fontSize: 'clamp(0.88rem, 3.1vw, 1.25rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '15px', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>Client Responsibilities</h3>
                <ul className="terms-bullet-list" style={{ marginBottom: '25px' }}>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Providing accurate information and documents.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Holding a valid passport with required validity.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Complying with immigration and customs regulations.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Obtaining required permits and approvals.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Verifying travel advisories and entry requirements.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Any loss resulting from incorrect, incomplete, or delayed documentation submitted by the client shall be the client's responsibility.</span>
                  </li>
                </ul>

                <h3 style={{ fontSize: 'clamp(0.88rem, 3.1vw, 1.25rem)', fontWeight: '700', color: 'var(--text-light)', marginBottom: '15px', borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>Governing Law &amp; Jurisdiction</h3>
                <ul className="terms-bullet-list">
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>These Terms &amp; Conditions shall be governed by the laws of India.</span>
                  </li>
                  <li className="terms-bullet-item">
                    <CheckCircle2 size={18} className="terms-bullet-icon" />
                    <span>Any dispute arising out of or relating to the booking shall be subject exclusively to the jurisdiction of the competent courts located in Hyderabad, Telangana.</span>
                  </li>
                </ul>
              </motion.div>
            </div>

          </div>

        </div>
      </section>

      <section className="page-section page-section-light">
        <div className="container text-center">
          <h3 className="text-2xl font-bold text-light mb-6">Related Corporate Information</h3>
          <div className="related-grid">
            <Link to="/about-us" className="related-card">About Us</Link>
            <Link to="/privacy-policy" className="related-card">Privacy Policy</Link>
            <Link to="/canton-fair-packages" className="related-card">Travel Packages</Link>
            <Link to="/guangzhou-business-visa-guide" className="related-card">Visa Guide</Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
