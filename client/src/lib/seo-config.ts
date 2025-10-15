// Global SEO Configuration for Mamta Steel Traders
// Optimized for worldwide and India steel industry searches

export const siteConfig = {
  siteName: "Mamta Steel Traders",
  siteUrl: "https://mamtasteeltraders.com",
  defaultTitle: "Mamta Steel Traders | ISO Certified Steel Supplier Mumbai India | Stainless Steel Carbon Steel Alloy Steel Manufacturer Exporter",
  defaultDescription: "Leading ISO 9001:2015 certified steel supplier in Mumbai India. Manufacturer & exporter of stainless steel pipes tubes plates sheets bars flanges fittings fasteners. ASTM ASME DIN EN certified. SS 304 316L 321 310 904L duplex carbon alloy steel. Best price worldwide delivery.",
  keywords: [
    // Primary Keywords - Global
    "steel supplier", "steel manufacturer", "steel exporter", "steel trader", "steel stockist",
    "stainless steel supplier", "carbon steel supplier", "alloy steel supplier",
    
    // Location-based Keywords - India
    "steel supplier mumbai", "steel manufacturer mumbai", "steel supplier india",
    "stainless steel mumbai", "steel trader mumbai", "steel stockist mumbai",
    "steel supplier maharashtra", "steel exporter india", "mumbai steel company",
    
    // Product-specific Keywords
    "stainless steel pipes", "stainless steel tubes", "stainless steel plates", "stainless steel sheets",
    "stainless steel bars", "stainless steel flanges", "stainless steel fittings", "stainless steel fasteners",
    "carbon steel pipes", "carbon steel plates", "alloy steel pipes", "alloy steel plates",
    "seamless pipes", "welded pipes", "round bars", "flat bars", "hex bars",
    
    // Material Grades
    "SS 304", "SS 316", "SS 316L", "SS 321", "SS 310", "SS 347", "SS 904L",
    "duplex 2205", "super duplex 2507", "inconel", "monel", "hastelloy",
    "ASTM A312", "ASTM A106", "API 5L", "ASME B16.5", "ASME B16.9",
    
    // Standards & Certifications
    "ISO certified steel", "ASTM steel", "ASME steel", "DIN steel", "EN steel",
    "mill test certificate", "material test certificate",
    
    // Industry Applications
    "oil gas steel", "petrochemical steel", "chemical processing steel",
    "pharmaceutical steel", "food processing steel", "construction steel",
    
    // Long-tail Keywords
    "best steel supplier mumbai", "cheap steel supplier india", "wholesale steel mumbai",
    "stainless steel 304 price mumbai", "carbon steel pipes manufacturer india",
    "alloy steel plates exporter", "seamless pipes supplier mumbai"
  ],
  author: "Mamta Steel Traders",
  language: "en-IN",
  locale: "en_IN",
  organization: {
    name: "Mamta Steel Traders",
    legalName: "Mamta Steel Traders Private Limited",
    foundingDate: "2005",
    address: {
      streetAddress: "Mumbai Industrial Area",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      postalCode: "400001",
      addressCountry: "India"
    },
    contactPoint: {
      telephone: "+91-XXXXXXXXXX",
      contactType: "Sales",
      areaServed: "Worldwide",
      availableLanguage: ["en", "hi", "mr"]
    },
    sameAs: [
      "https://www.linkedin.com/company/mamta-steel-traders",
      "https://www.facebook.com/mamtasteeltraders",
      "https://www.instagram.com/mamtasteeltraders",
      "https://twitter.com/mamtasteel"
    ]
  },
  social: {
    twitter: "@mamtasteel",
    facebook: "mamtasteeltraders",
    instagram: "mamtasteeltraders",
    linkedin: "mamta-steel-traders"
  }
};

// Generate comprehensive keywords string
export const getKeywordsString = () => siteConfig.keywords.join(", ");

// Generate Organization Schema
export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["Organization", "Corporation", "Manufacturer"],
  "name": siteConfig.organization.name,
  "legalName": siteConfig.organization.legalName,
  "url": siteConfig.siteUrl,
  "logo": `${siteConfig.siteUrl}/logo.png`,
  "foundingDate": siteConfig.organization.foundingDate,
  "description": siteConfig.defaultDescription,
  "address": {
    "@type": "PostalAddress",
    ...siteConfig.organization.address
  },
  "contactPoint": {
    "@type": "ContactPoint",
    ...siteConfig.organization.contactPoint
  },
  "sameAs": siteConfig.organization.sameAs,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "450",
    "bestRating": "5",
    "worstRating": "1"
  }
});

// Generate LocalBusiness Schema
export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": siteConfig.organization.name,
  "image": `${siteConfig.siteUrl}/logo.png`,
  "@id": siteConfig.siteUrl,
  "url": siteConfig.siteUrl,
  "telephone": siteConfig.organization.contactPoint.telephone,
  "priceRange": "₹₹₹",
  "address": {
    "@type": "PostalAddress",
    ...siteConfig.organization.address
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
  },
  "sameAs": siteConfig.organization.sameAs
});

// Generate Website Schema
export const getWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": siteConfig.siteName,
  "url": siteConfig.siteUrl,
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${siteConfig.siteUrl}/search?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
});

// Generate Breadcrumb Schema
export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// Product categories for sitemap
export const productCategories = [
  "Stainless Steel Pipes & Tubes",
  "Carbon Steel Pipes & Tubes",
  "Alloy Steel Pipes & Tubes",
  "Stainless Steel Plates & Sheets",
  "Carbon Steel Plates & Sheets",
  "Alloy Steel Plates & Sheets",
  "Stainless Steel Round Bars",
  "Carbon Steel Round Bars",
  "Alloy Steel Round Bars",
  "Stainless Steel Flanges",
  "Carbon Steel Flanges",
  "Alloy Steel Flanges",
  "Buttweld Fittings",
  "Forged Fittings",
  "Socket Weld Fittings",
  "Stainless Steel Fasteners",
  "High Tensile Fasteners",
  "Duplex Steel Products",
  "Super Duplex Steel Products",
  "Nickel Alloy Products",
  "Inconel Products",
  "Monel Products",
  "Hastelloy Products"
];
