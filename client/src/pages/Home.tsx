import SEOHead from "@/components/SEOHead";
import HeroCarousel from "@/components/HeroCarousel";
import SSProduct from "@/components/SSProduct";
import ProductShowcase from "@/components/ProductShowcase";
import ContactSection from "@/components/ContactSection";
import StatsSection from "@/components/StatsSection";
import IndustryServe from "@/components/IndustryServe";

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mamta Steel Traders",
    "description": "Leading steel supplier and manufacturer in India. ISO 9001:2015 & MSME certified. Supplier of stainless steel pipes, carbon steel plates, alloy steel bars, flanges, fittings, fasteners. Best prices for bulk orders.",
    "image": "https://mamtasteeltraders.com/logo.png",
    "priceRange": "₹₹₹",
    "telephone": "+91-XXXXXXXXXX",
    "email": "sales@mamtasteeltraders.com",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressLocality": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.0760",
      "longitude": "72.8777"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:30",
      "closes": "20:30"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Steel Products Catalog",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Stainless Steel Pipes & Tubes",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "SS 304 Pipes",
                "description": "High-quality stainless steel 304 seamless and welded pipes"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "SS 316L Pipes",
                "description": "Corrosion-resistant stainless steel 316L pipes for industrial use"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Steel Plates & Sheets",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "MS Plates",
                "description": "Premium mild steel plates for construction and fabrication"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "SS Sheets",
                "description": "Stainless steel sheets in various grades and finishes"
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Steel Flanges & Fittings",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Weld Neck Flanges",
                "description": "ANSI, DIN, JIS standard weld neck flanges"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "Pipe Fittings",
                "description": "Buttweld and socket weld pipe fittings"
              }
            }
          ]
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "250"
    }
  };

  return (
    <>
      <SEOHead
        title="Mamta Steel Traders - Leading Steel Supplier India | SS Pipes, MS Plates, Flanges, Fittings"
        description="Mamta Steel Traders - India's trusted steel supplier & manufacturer. ISO 9001:2015 & MSME certified. Stainless steel (304, 316L, 310, 321), carbon steel, alloy steel pipes, plates, sheets, bars, flanges, fittings. Best prices for bulk orders. Pan India delivery."
        keywords="steel supplier India, stainless steel pipes India, MS plates supplier, SS 304 pipes, SS 316L pipes, steel flanges India, pipe fittings, TMT bars, carbon steel plates, alloy steel bars, steel manufacturer India, industrial steel supplier, bulk steel supplier, steel stockist India, Mamta Steel Traders"
        canonicalUrl="https://mamtasteeltraders.com"
        structuredData={structuredData}
      />
      <HeroCarousel />
      <SSProduct />
      <ProductShowcase />
      <ContactSection />
      <StatsSection />
      <IndustryServe />
    </>
  );
}
