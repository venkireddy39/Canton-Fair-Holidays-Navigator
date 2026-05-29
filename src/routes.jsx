import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import GuidePage from './pages/GuidePage';
import Phase1Page from './pages/Phase1Page';
import Phase2Page from './pages/Phase2Page';
import Phase3Page from './pages/Phase3Page';
import HotelsPage from './pages/HotelsPage';
import VisaPage from './pages/VisaPage';
import AirportTransferPage from './pages/AirportTransferPage';
import RegisterGuidePage from './pages/RegisterGuidePage';
import CountryPageTemplate from './pages/CountryPageTemplate';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'canton-fair-2026-guide', element: <GuidePage /> },
      { path: 'canton-fair-phase-1-products', element: <Phase1Page /> },
      { path: 'canton-fair-phase-2-products', element: <Phase2Page /> },
      { path: 'canton-fair-phase-3-products', element: <Phase3Page /> },
      { path: 'best-hotels-near-canton-fair', element: <HotelsPage /> },
      { path: 'guangzhou-business-visa-guide', element: <VisaPage /> },
      { path: 'canton-fair-airport-transfer', element: <AirportTransferPage /> },
      { path: 'how-to-register-for-canton-fair', element: <RegisterGuidePage /> },
      { path: 'canton-fair-from-india', element: <CountryPageTemplate country="India" slug="canton-fair-from-india" seoTitle="Canton Fair 2026 Travel Packages from India | Visa & Flights" seoDescription="Plan your Canton Fair 2026 trip from India. Complete travel packages, China Business Visa assistance, and hotel bookings." /> },
      { path: 'canton-fair-from-uae', element: <CountryPageTemplate country="UAE" slug="canton-fair-from-uae" seoTitle="Canton Fair 2026 Travel Packages from UAE | Dubai & Abu Dhabi" seoDescription="Travel from the UAE to the Canton Fair 2026. Premium packages including flights, visa support, and luxury hotels near Pazhou." /> },
      { path: 'canton-fair-from-africa', element: <CountryPageTemplate country="Africa" slug="canton-fair-from-africa" seoTitle="Canton Fair 2026 Travel Packages from Africa | Sourcing & Visas" seoDescription="Your complete guide to attending the Canton Fair from Africa. Secure your China visa, book flights, and organize your sourcing trip." /> },
      { path: 'blog', element: <BlogList /> },
      { path: 'blog/:slug', element: <BlogPost /> },
    ]
  }
]);

export { router };
