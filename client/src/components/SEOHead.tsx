import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
  structuredData?: object;
  author?: string;
  productName?: string;
  productPrice?: string;
  productAvailability?: string;
}

export default function SEOHead({ 
  title, 
  description, 
  keywords = "steel supplier India, stainless steel pipes, carbon steel plates, alloy steel bars, steel manufacturer Mumbai, SS 304 316 316L supplier, steel flanges fittings India, ASTM ASME DIN EN steel, ISO certified steel Mumbai, steel exporter India, duplex super duplex steel, nickel alloy inconel monel, best steel price India, wholesale steel supplier, industrial steel Mumbai",
  ogImage = "https://mamtasteeltraders.com/og-image.jpg",
  canonicalUrl,
  structuredData,
  author = "Mamta Steel Traders",
  productName,
  productPrice,
  productAvailability = "InStock"
}: SEOHeadProps) {
  const fullTitle = title.includes("Mamta Steel") ? title : `${title} | Mamta Steel Traders - ISO Certified Steel Supplier Mumbai India`;
  
  const baseUrl = "https://mamtasteeltraders.com";
  const fullCanonicalUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : baseUrl);

  // Enhanced Organization structured data with more details
  const organizationData = {
    "@context": "https://schema.org",
    "@type": ["Organization", "Corporation", "Manufacturer"],
    "name": "Mamta Steel Traders",
    "legalName": "Mamta Steel Traders Private Limited",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": "Leading ISO 9001:2015 certified steel supplier manufacturer exporter in Mumbai India. Specializing in stainless steel carbon steel alloy steel pipes tubes plates sheets bars flanges fittings fasteners. ASTM ASME DIN EN standards. Worldwide delivery.",
    "foundingDate": "2005",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mumbai Industrial Area",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.0760",
      "longitude": "72.8777"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "sales",
      "areaServed": ["IN", "US", "GB", "AE", "SA", "MY", "SG"],
      "availableLanguage": ["English", "Hindi", "Marathi"]
    },
    "sameAs": [
      "https://www.linkedin.com/company/mamtasteeltraders",
      "https://www.facebook.com/mamtasteeltraders",
      "https://www.instagram.com/mamtasteeltraders",
      "https://twitter.com/mamtasteel"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "450",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // LocalBusiness Schema for better local SEO
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Mamta Steel Traders",
    "image": `${baseUrl}/logo.png`,
    "@id": baseUrl,
    "url": baseUrl,
    "telephone": "+91-XXXXXXXXXX",
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mumbai Industrial Area",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.0760,
      "longitude": 72.8777
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  // Product structured data (if product details provided)
  const productData = productName ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productName,
    "description": description,
    "brand": {
      "@type": "Brand",
      "name": "Mamta Steel Traders"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Mamta Steel Traders"
    },
    "material": "Steel",
    "offers": {
      "@type": "Offer",
      "price": productPrice || "Contact for price",
      "priceCurrency": "INR",
      "availability": `https://schema.org/${productAvailability}`,
      "seller": {
        "@type": "Organization",
        "name": "Mamta Steel Traders"
      },
      "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "125"
    }
  } : null;

  // Website structured data with SearchAction
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mamta Steel Traders",
    "url": baseUrl,
    "description": "ISO certified steel supplier manufacturer exporter Mumbai India - Stainless Carbon Alloy Steel",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  const allStructuredData = [
    organizationData,
    localBusinessData,
    websiteData,
    productData,
    structuredData
  ].filter(Boolean);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      
      {/* Enhanced Robots Meta */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      <meta name="bingbot" content="index, follow" />
      
      {/* Language and Revisit */}
      <meta name="language" content="en-IN" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook - Enhanced */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={fullTitle} />
      <meta property="og:site_name" content="Mamta Steel Traders" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card - Enhanced */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mamtasteel" />
      <meta name="twitter:creator" content="@mamtasteel" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={fullTitle} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#0d2b4e" />
      <meta name="msapplication-TileColor" content="#0d2b4e" />
      <meta name="msapplication-TileImage" content={`${baseUrl}/ms-icon-144x144.png`} />
      
      {/* Geographic Meta Tags - Enhanced for India */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Mumbai, Maharashtra, India" />
      <meta name="geo.position" content="19.0760;72.8777" />
      <meta name="ICBM" content="19.0760, 72.8777" />
      
      {/* Business Meta Tags - Enhanced */}
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      <meta name="category" content="Business, Manufacturing, Industrial, Steel Supplier, B2B" />
      <meta name="classification" content="Steel Manufacturing, Steel Trading, Industrial Supplies, Metal Products" />
      <meta name="subject" content="Steel Products Manufacturing and Supply India" />
      <meta name="topic" content="Stainless Steel, Carbon Steel, Alloy Steel, Pipes, Tubes, Plates, Sheets, Bars, Flanges, Fittings, Fasteners" />
      <meta name="audience" content="B2B, Industrial Buyers, Contractors, Engineers, Procurement Managers" />
      <meta name="target" content="all" />
      
      {/* Copyright and Ownership */}
      <meta name="copyright" content={`© ${new Date().getFullYear()} Mamta Steel Traders. All rights reserved.`} />
      <meta name="owner" content="Mamta Steel Traders" />
      
      {/* Dublin Core Metadata for Enhanced SEO */}
      <meta name="DC.title" content={fullTitle} />
      <meta name="DC.creator" content="Mamta Steel Traders" />
      <meta name="DC.subject" content="Steel Manufacturing Supply India Mumbai" />
      <meta name="DC.description" content={description} />
      <meta name="DC.publisher" content="Mamta Steel Traders" />
      <meta name="DC.contributor" content="Mamta Steel Traders" />
      <meta name="DC.date" content={new Date().toISOString()} />
      <meta name="DC.type" content="Service, Product" />
      <meta name="DC.format" content="text/html" />
      <meta name="DC.language" content="en-IN" />
      <meta name="DC.coverage" content="India, Mumbai, Maharashtra, Worldwide" />
      <meta name="DC.rights" content={`© ${new Date().getFullYear()} Mamta Steel Traders`} />
      
      {/* Mobile Optimization */}
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Mamta Steel" />
      
      {/* Language Alternatives - hreflang for international SEO */}
      <link rel="alternate" hrefLang="en-IN" href={fullCanonicalUrl} />
      <link rel="alternate" hrefLang="en" href={fullCanonicalUrl} />
      <link rel="alternate" hrefLang="hi-IN" href={fullCanonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={fullCanonicalUrl} />
      
      {/* Industry-specific Meta Tags for Steel Sector */}
      <meta name="industry" content="Steel Manufacturing, Metal Trading, Industrial Supplies, B2B Steel" />
      <meta name="product-category" content="Stainless Steel, Carbon Steel, Alloy Steel, Pipes, Tubes, Plates, Sheets, Bars, Flanges, Fittings, Fasteners, Duplex Steel, Nickel Alloy" />
      <meta name="service-area" content="Mumbai, India, Middle East, USA, Europe, Asia, Worldwide" />
      <meta name="certifications" content="ISO 9001:2015, ASTM, ASME, DIN, EN, Material Test Certificate" />
      <meta name="standards" content="ASTM A312, ASTM A106, API 5L, ASME B16.5, ASME B16.9, DIN 2448, EN 10216" />
      <meta name="material-grades" content="SS 304, 316, 316L, 321, 310, 347, 904L, Duplex 2205, Super Duplex 2507, Inconel, Monel, Hastelloy" />
      
      {/* Structured Data - JSON-LD */}
      {allStructuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data, null, 2)}
        </script>
      ))}
    </Helmet>
  );
}
