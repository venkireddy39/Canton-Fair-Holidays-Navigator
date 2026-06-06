import { useState, useEffect } from 'react';
import SeoHelmet from '../components/SeoHelmet';
import ContactCTA from '../components/ContactCTA';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './Terms.css'; // We will create this

const sectionsData = [
  {
    id: 'overview',
    title: 'Package Inclusions & Exclusions',
    content: (
      <>
        <p className="terms-accordion-text">The Canton Fair package may include the following services as specified in the booking confirmation:</p>
        <ul className="terms-accordion-list">
          <li>Hotel accommodation</li>
          <li>Visa assistance or group visa processing (where applicable)</li>
          <li>Canton Fair registration assistance</li>
          <li>Scheduled shuttle transfers provided by the hotel or designated operators</li>
          <li>Other inclusions specifically mentioned in the confirmed itinerary</li>
        </ul>
        <p className="terms-accordion-text"><strong>Explicit Exclusions:</strong> International airfare, travel insurance, forex, personal expenses, meals not specified, and any other services not expressly included are excluded from the package price.</p>
      </>
    )
  },
  {
    id: 'booking',
    title: 'Booking & Payment Guidelines',
    content: (
      <ul className="terms-accordion-list">
        <li>Full or partial payment as communicated by the Company is required to confirm the booking.</li>
        <li>Hotel reservations and other travel services are subject to availability at the time of booking.</li>
        <li>Hotel rooms, rates, and allocations during Canton Fair periods are highly restricted and may change without prior notice until booking confirmation is issued.</li>
        <li><strong>100% payment must be completed before commencement of travel.</strong></li>
      </ul>
    )
  },
  {
    id: 'visa',
    title: 'Visa Support & Registration Disclaimer',
    content: (
      <>
        <p className="terms-accordion-text"><strong>Visa Assistance</strong></p>
        <ul className="terms-accordion-list">
          <li>The Company only provides visa assistance and documentation support.</li>
          <li>Granting, rejecting, delaying, or issuing a visa is solely at the discretion of the concerned Embassy, Consulate, Immigration Authority, or Government Agency.</li>
          <li>The Company does not guarantee visa approval under any circumstances.</li>
          <li>Visa refusal, delay, administrative processing, incomplete documentation, immigration restrictions, or failure to obtain a visa shall not be considered grounds for a full refund.</li>
          <li>Any visa fees, processing fees, documentation expenses, courier charges, translation charges, or related expenses already incurred shall be non-refundable.</li>
          <li>For group visa applications, clients must submit all required documents within the timelines communicated by the Company. Delays by the client may result in cancellation of visa processing without refund of applicable charges already incurred.</li>
        </ul>
        <p className="terms-accordion-text"><strong>Canton Fair Registration</strong></p>
        <ul className="terms-accordion-list">
          <li>The Company only provides assistance in registration procedures.</li>
          <li>Canton Fair registration approval, issuance of badges, admission permissions, and participation eligibility are solely subject to the rules and decisions of the Canton Fair organizers and relevant authorities.</li>
          <li>The Company shall not be liable for any refusal, delay, suspension, cancellation, or modification of registration by the organizers.</li>
        </ul>
      </>
    )
  },
  {
    id: 'hotel-transfers',
    title: 'Accommodation & Transport Policy',
    content: (
      <>
        <p className="terms-accordion-text"><strong>Hotel Accommodation</strong></p>
        <ul className="terms-accordion-list">
          <li>Hotel bookings are made with third-party suppliers and hotels.</li>
          <li>Hotel cancellation, amendment, date change, name change, no-show charges, and refund eligibility are governed by the respective hotel's policy.</li>
          <li>Hotel payments are generally remitted to suppliers immediately after confirmation; therefore, cancellation charges may apply immediately after booking.</li>
          <li>Requests for changes or amendments shall be subject to hotel approval and applicable charges.</li>
          <li>Early departure, late arrival, no-show, or unused hotel nights shall not be eligible for any refund.</li>
        </ul>
        <p className="terms-accordion-text"><strong>Shuttle Transfers</strong></p>
        <ul className="terms-accordion-list">
          <li>Shuttle transfers are operated by hotels or third-party transportation providers.</li>
          <li>Transfer schedules are subject to operational requirements, traffic conditions, weather conditions, and decisions of the service provider.</li>
          <li>Missed transfers due to passenger delay, late arrival, flight delays, immigration delays, or personal reasons shall not be refundable.</li>
        </ul>
      </>
    )
  },
  {
    id: 'cancellation',
    title: 'Cancellation & Refund Structure',
    content: (
      <>
        <p className="terms-accordion-text">All cancellation requests must be submitted <strong>in writing by email</strong>. The date on which the Company receives the written cancellation request shall determine the applicable cancellation charges.</p>
        <p className="terms-accordion-text"><strong>Standard Cancellation Charges</strong></p>
        <ul className="terms-accordion-list">
          <li>90 days or more: <strong>5%</strong> of total package cost</li>
          <li>46–89 days: <strong>25%</strong> of total package cost</li>
          <li>30–45 days: <strong>50%</strong> of total package cost</li>
          <li>Within 29 days: <strong>100%</strong> of total package cost (Non-refundable)</li>
        </ul>
        <p className="terms-accordion-text"><strong>Additional Supplier Charges</strong></p>
        <p className="terms-accordion-text">In addition to the above cancellation charges, any non-refundable charges imposed by hotels, suppliers, visa authorities, service providers, or third parties shall be deducted from the refund amount.</p>
      </>
    )
  },
  {
    id: 'visa-rejections',
    title: 'Visa Rejection & Special No-Refund Cases',
    content: (
      <>
        <p className="terms-accordion-text"><strong>Visa Rejection Contingency</strong></p>
        <p className="terms-accordion-text">If a visa application is rejected, any refund shall be strictly subject to:</p>
        <ul className="terms-accordion-list">
          <li>Hotel cancellation policies</li>
          <li>Supplier cancellation charges</li>
          <li>Administrative charges incurred by the Company</li>
          <li>Non-refundable services already booked or processed</li>
        </ul>
        <p className="terms-accordion-text"><em>*Visa rejection shall not automatically entitle the client to a full refund.</em></p>
        <p className="terms-accordion-text"><strong>Cases Not Eligible for Refunds</strong></p>
        <p className="terms-accordion-text">No refund shall be available under any circumstances for:</p>
        <ul className="terms-accordion-list">
          <li>Visa fees and visa-related expenses already incurred</li>
          <li>Travel insurance premiums</li>
          <li>Registration-related expenses already incurred</li>
          <li>Unused hotel nights</li>
          <li>Missed transfers</li>
          <li>No-show cases</li>
          <li>Services voluntarily not utilized by the client</li>
          <li>Early departure from the tour</li>
          <li>Any service marked non-refundable at the time of booking</li>
        </ul>
      </>
    )
  },
  {
    id: 'flights-insurance',
    title: 'Flights & Insurance Guidelines',
    content: (
      <>
        <p className="terms-accordion-text"><strong>Flight Tickets</strong></p>
        <ul className="terms-accordion-list">
          <li>Air tickets are not included unless specifically mentioned.</li>
          <li>Where flight tickets are booked through the Company, airline cancellation, refund, rescheduling, and amendment rules shall apply. Airline charges and applicable service charges shall be deducted before processing any refund.</li>
        </ul>
        <p className="terms-accordion-text"><strong>Travel Insurance</strong></p>
        <ul className="terms-accordion-list">
          <li>Travel insurance is optional and charged separately unless specifically included.</li>
          <li>Insurance premiums are non-refundable after issuance. All claims shall be governed by the terms and conditions of the insurance provider.</li>
        </ul>
      </>
    )
  },
  {
    id: 'legal',
    title: 'Force Majeure, Liability & Jurisdiction',
    content: (
      <>
        <p className="terms-accordion-text"><strong>Force Majeure Clause</strong></p>
        <p className="terms-accordion-text">The Company shall not be liable for any loss, delay, cancellation, additional expense, or failure to perform due to circumstances beyond its reasonable control, including but not limited to:</p>
        <ul className="terms-accordion-list">
          <li>Natural disasters / Acts of God</li>
          <li>Floods, earthquakes, storms, or severe weather</li>
          <li>Epidemics or pandemics</li>
          <li>Government restrictions / border closures</li>
          <li>Trade restrictions / political unrest</li>
          <li>Civil disturbances</li>
          <li>Strikes or labor disputes</li>
          <li>Airline disruptions / transportation failures</li>
          <li>Changes imposed by Canton Fair organizers</li>
        </ul>
        <p className="terms-accordion-text"><em>Any refunds in such situations shall be strictly subject to recoveries received from suppliers and service providers.</em></p>
        <p className="terms-accordion-text"><strong>Limitation of Liability</strong></p>
        <ul className="terms-accordion-list">
          <li>The Company acts solely as an intermediary between clients and service providers including hotels, transport operators, visa agencies, insurance providers, airlines, and event organizers.</li>
          <li>The Company shall not be responsible for acts, omissions, delays, negligence, bankruptcy, insolvency, service failures, or operational decisions of third-party providers.</li>
          <li>Under no circumstances shall the Company's liability exceed the amount actually received by the Company from the client for the relevant booking.</li>
        </ul>
        <p className="terms-accordion-text"><strong>Client Responsibilities</strong></p>
        <ul className="terms-accordion-list">
          <li>Providing accurate information and documents.</li>
          <li>Holding a valid passport with required validity.</li>
          <li>Complying with immigration and customs regulations.</li>
          <li>Obtaining required permits and approvals.</li>
          <li>Verifying travel advisories and entry requirements.</li>
          <li>Any loss resulting from incorrect, incomplete, or delayed documentation submitted by the client shall be the client's responsibility.</li>
        </ul>
        <p className="terms-accordion-text"><strong>Governing Law & Jurisdiction</strong></p>
        <ul className="terms-accordion-list">
          <li>These Terms & Conditions shall be governed by the laws of India.</li>
          <li>Any dispute arising out of or relating to the booking shall be subject exclusively to the jurisdiction of the competent courts located in Hyderabad, Telangana.</li>
        </ul>
      </>
    )
  }
];

export default function TermsPage() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  useEffect(() => {
    // Optionally open the first one on mount to look like the screenshot 
    // or keep all closed initially. The screenshot shows the first one open.
    setOpenSection('overview');
  }, []);

  return (
    <>
      <SeoHelmet
        title="Terms & Conditions | Holidays Navigator"
        description="Official terms and conditions for Canton Fair packages."
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

      <section className="terms-page-container">
        <div className="terms-page-wrapper">
          <div className="terms-intro-text">
            <p>
              The travel site www.holidaysnavigator.com is part of Amazing Holidays Navigator Private Limited. It is a certified travel company existing compliant with the laws of the Republic of India. By accessing or using this site or using any of its services, you are agreed on terms and conditions mentioned below, including any supplementary guidelines and future modifications.
            </p>
            <p>
              Holidays Navigator may change, alter or remove any part of these below written Terms and Conditions without any prior notice. Any changes done in this Terms and Conditions of Use will be applicable the moment they are posted on the site. You need to re-check the "Terms & Conditions" link to be fully aware of the entire scenario.
            </p>
          </div>

          <div className="terms-accordion-container">
            {sectionsData.map((section) => {
              const isOpen = openSection === section.id;
              return (
                <div key={section.id} className="terms-accordion-item">
                  <button 
                    className={`terms-accordion-header ${isOpen ? 'active' : ''}`}
                    onClick={() => toggleSection(section.id)}
                  >
                    <span>{section.title}</span>
                    {isOpen ? <ChevronUp size={20} className="terms-chevron" /> : <ChevronDown size={20} className="terms-chevron" />}
                  </button>
                  {isOpen && (
                    <div className="terms-accordion-body">
                      {section.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="page-section page-section-light">
        <div className="container text-center">
          <h3 className="explore-more-title">Explore More</h3>
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
