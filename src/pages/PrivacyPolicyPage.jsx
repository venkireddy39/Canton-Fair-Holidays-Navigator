import React from 'react';
import SeoHelmet from '../components/SeoHelmet';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SeoHelmet
        title="Privacy Policy | Holidays Navigator"
        description="Read the privacy policy of Holidays Navigator. Learn how we handle your personal data during visa processing, bookings, and sourcing assistance."
        canonical="https://holidaysnavigator.com/privacy-policy"
        breadcrumb={[
          { name: 'Home', url: '/' },
          { name: 'Privacy Policy', url: '/privacy-policy' }
        ]}
      />

      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Privacy Policy</h1>
          <p>Effective Date: June 1, 2026</p>
        </div>
      </section>

      <section className="page-section">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'left', lineHeight: '1.8' }}>
            <h2 className="text-2xl font-bold text-light mb-4">1. Information We Collect</h2>
            <p className="text-muted mb-6">
              At Holidays Navigator, we respect your privacy. We collect personal information necessary for your business travel and visa compliance, including names, contact numbers, email addresses, passport/visa details, company certificates, and flight itineraries.
            </p>

            <h2 className="text-2xl font-bold text-light mb-4">2. How We Use Your Data</h2>
            <p className="text-muted mb-6">
              Your data is utilized solely for:
            </p>
            <ul className="text-muted mb-6" style={{ paddingLeft: '20px' }}>
              <li>Facilitating official Canton Fair Buyer Badge registration.</li>
              <li>Processing China Business (M) Visa invitations and documentation support.</li>
              <li>Completing hotel bookings, airport transfers, and interpreter configurations.</li>
              <li>Providing instant business assistance via WhatsApp or email.</li>
            </ul>

            <h2 className="text-2xl font-bold text-light mb-4">3. Data Security & Storage</h2>
            <p className="text-muted mb-6">
              We employ strict technical and organizational safeguards to secure your sensitive personal identifiers. Visa documents are encrypted and accessible only to authorized processing officers. We do not sell or lease buyer profile data to third-party marketing companies.
            </p>

            <h2 className="text-2xl font-bold text-light mb-4">4. Third-Party Disclosures</h2>
            <p className="text-muted mb-6">
              To fulfill your travel packages, we share information with certified partners (hotels, airlines, transportation services, and official trade organizers). All sharing is compliant with regulatory guidelines.
            </p>

            <h2 className="text-2xl font-bold text-light mb-4">5. Contact Information</h2>
            <p className="text-muted mb-6">
              For privacy queries or database updates, reach us at:
              <br />
              <strong>Email:</strong> info.holidaysnavigator@gmail.com
              <br />
              <strong>Office:</strong> Kakatiya Hills, Madhapur, Hyderabad, Telangana 500033
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
