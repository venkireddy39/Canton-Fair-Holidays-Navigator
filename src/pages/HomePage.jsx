import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutFair from '../components/AboutFair';
import PhaseTimeline from '../components/PhaseTimeline';
import ContactCTA from '../components/ContactCTA';
import Products from '../components/Products';
import GuangzhouMarkets from '../components/GuangzhouMarkets';
import PackageOverview from '../components/PackageOverview';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import TrustSection from '../components/TrustSection';
import AboutUs from '../components/AboutUs';
import FAQ from '../components/FAQ';
import LocationMap from '../components/LocationMap';
import SeoHelmet from '../components/SeoHelmet';

function HomePage() {
  const context = useOutletContext();
  const onBookNow = context?.onBookNow;

  const faqItems = [
    { question: "Which Canton Fair phase should I attend?", answer: "Phase 1 focuses on Electronics & Machinery, Phase 2 on Consumer Goods & Home Decor, and Phase 3 on Textiles, Garments & Shoes. Choose the phase that matches your sourcing needs." },
    { question: "Is an invitation required?", answer: "Yes, an official invitation letter from the Canton Fair is mandatory for securing a China Business (M) Visa. We assist our clients in obtaining this invitation." },
    { question: "How many days are needed?", answer: "We typically recommend our 5 Nights / 6 Days package for a single phase. This provides enough time to explore the fair, hold meetings, and visit local markets." },
    { question: "Do you provide hotel and visa support?", answer: "Absolutely. Our comprehensive packages include premium business hotel accommodation, complete China Business Visa processing assistance, and registration support." },
    { question: "Can airport transfer be arranged?", answer: "Yes, we provide shared SIC transfers between your hotel and the Canton Fair complex, and airport pickups can be arranged based on your flight schedule." }
  ];

  return (
    <>
      <SeoHelmet
        title="Canton Fair 2026 Travel Packages from India | Hotels, Visa & Transfers"
        description="Plan your Canton Fair 2026 trip with visa support, hotels, airport transfers, and exhibition guidance from Holidays Navigator."
        canonical="https://holidaysnavigator.com/"
        breadcrumb={[
          { name: 'Home', url: '/' }
        ]}
        faq={faqItems}
        article={false}
      />
      
      <Hero onBookNow={onBookNow} />
      <WhyChooseUs />
      <TrustSection />
      <Services />
      <FAQ />
      <ContactCTA />
      
      {/* Other components moved down to not overload the main flow */}
      <AboutFair />
      <PhaseTimeline onBookNow={onBookNow} />
      <Products />
      <GuangzhouMarkets />
      <PackageOverview onBookNow={onBookNow} />
      <AboutUs />
      <LocationMap />
    </>
  );
}

export default HomePage;
