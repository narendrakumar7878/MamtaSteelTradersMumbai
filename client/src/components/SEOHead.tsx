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
  keywords = "steel supplier India, stainless steel pipes, MS plates, SS sheets, steel flanges, pipe fittings, TMT bars, steel manufacturer, industrial steel, bulk steel supplier India",
  ogImage = "https://mamtasteeltraders.com/og-image.jpg",
  canonicalUrl,
  structuredData,
  author = "Mamta Steel Traders",
  productName,
  productPrice,
  productAvailability = "InStock"
}: SEOHeadProps) {
  const fullTitle = title.includes("Mamta Steel") ? title : `${title} | Mamta Steel Traders - Premium Steel Supplier India`;
  
  const baseUrl = "https://mamtasteeltraders.com";
  const fullCanonicalUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : baseUrl);

  // Organization structured data
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mamta Steel Traders",
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": "Leading steel supplier and manufacturer in India - ISO 9001:2015 certified supplier of stainless steel, carbon steel, alloy steel pipes, plates, flanges, fittings, bars",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressLocality": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    "sameAs": [
      "https://www.facebook.com/mamtasteeltraders",
      "https://www.linkedin.com/company/mamtasteeltraders"
    ]
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
    "offers": {
      "@type": "Offer",
      "price": productPrice || "Contact for price",
      "priceCurrency": "INR",
      "availability": `https://schema.org/${productAvailability}`,
      "seller": {
        "@type": "Organization",
        "name": "Mamta Steel Traders"
      }
    }
  } : null;

  // Website structured data
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Mamta Steel Traders",
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  const allStructuredData = [
    organizationData,
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
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Mamta Steel Traders" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1e3a5f" />
      <meta name="msapplication-TileColor" content="#1e3a5f" />
      
      {/* Geographic Meta Tags */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      
      {/* Business Meta Tags */}
      <meta name="coverage" content="Worldwide" />
      <meta name="distribution" content="Global" />
      <meta name="rating" content="General" />
      
      {/* Structured Data - JSON-LD */}
      {allStructuredData.map((data, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}
