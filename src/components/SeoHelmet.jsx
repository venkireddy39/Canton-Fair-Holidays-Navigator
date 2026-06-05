import React from 'react';
import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://holidaysnavigator.com';
const LOGO_URL = `${BASE_URL}/Logo.png`;

export default function SeoHelmet({
  title,
  description,
  canonical,
  ogImage = `${BASE_URL}/ogimage.jpg`,
  breadcrumb = [],
  faq = [],
  article = false,
  datePublished = '2025-01-01T08:00:00+08:00',
  dateModified = new Date().toISOString()
}) {
  const orgSchema = {
    "@type": "Organization",
    "name": "Holidays Navigator",
    "url": BASE_URL,
    "logo": LOGO_URL,
    "description": "Premium travel agency for international business travel and Canton Fair.",
    "sameAs": [
      "https://www.instagram.com/holidaysnavigator",
      "https://www.linkedin.com/company/holidaysnavigator"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9533444455",
      "contactType": "customer service"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4th Floor, Trendz Uptown, Kakatiya Hills, Guttala Begumpet, Kavuri Hills, Madhapur",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500033",
      "addressCountry": "IN"
    }
  };

  const travelAgencySchema = {
    "@type": "TravelAgency",
    "name": "Holidays Navigator",
    "url": BASE_URL,
    "logo": LOGO_URL,
    "image": ogImage,
    "telephone": "+91-9533444455",
    "priceRange": "₹50,000 - ₹2,50,000",
    "description": "Premium travel agency offering entrepreneur travel packages for Canton Fair including visa support, hotel booking, airport transfers and business travel guidance.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4th Floor, Trendz Uptown, Kakatiya Hills, Guttala Begumpet, Kavuri Hills, Madhapur",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "500033",
      "addressCountry": "IN"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "50"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Rajesh Malhotra"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Business visa and hotel arrangements were seamless. Highly professional support for Canton Fair travel."
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Ahmed Al-Mansoori"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Premium accommodation and excellent sourcing assistance. Strongly recommended."
      }
    ]
  };

  const touristTripSchema = {
    "@type": "TouristTrip",
    "name": "Canton Fair 140 2026 Travel Package",
    "description": "Canton Fair 140 2026 business travel package including hotel booking, visa support, airport transfers, registration assistance and Guangzhou travel guidance.",
    "touristType": "Business Travelers",
    "provider": {
      "@type": "TravelAgency",
      "name": "Holidays Navigator",
      "url": BASE_URL
    },
    "offers": {
      "@type": "Offer",
      "price": "60000",
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "url": BASE_URL
    }
  };

  const breadcrumbJson = breadcrumb.length
    ? {
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumb.map((item, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": item.name,
        "item": item.url.startsWith('http')
          ? item.url
          : `${BASE_URL}${item.url}`
      }))
    }
    : null;

  const faqJson = faq.length
    ? {
      "@type": "FAQPage",
      "mainEntity": faq.map(q => ({
        "@type": "Question",
        "name": q.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": q.answer
        }
      }))
    }
    : null;

  const articleJson = article
    ? {
      "@type": "Article",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": canonical || BASE_URL
      },
      "headline": title,
      "description": description,
      "image": ogImage,
      "author": {
        "@type": "Organization",
        "name": "Holidays Navigator"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Holidays Navigator",
        "logo": {
          "@type": "ImageObject",
          "url": LOGO_URL
        }
      },
      "datePublished": datePublished,
      "dateModified": dateModified
    }
    : null;

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      orgSchema,
      travelAgencySchema,
      touristTripSchema,
      breadcrumbJson,
      faqJson,
      articleJson
    ].filter(Boolean)
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {canonical && <link rel="canonical" href={canonical} />}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:url" content={canonical || BASE_URL} />
      <meta property="og:type" content={article ? "article" : "website"} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      <script type="application/ld+json">
        {JSON.stringify(jsonLdGraph)}
      </script>
    </Helmet>
  );
}