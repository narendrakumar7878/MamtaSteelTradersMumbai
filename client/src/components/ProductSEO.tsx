import { Helmet } from "react-helmet-async";

interface ProductSEOProps {
  title: string;
  description: string;
  keywords?: string;
  category?: string;
  productName?: string;
  specifications?: string[];
  canonicalUrl?: string;
}

export default function ProductSEO({
  title,
  description,
  keywords,
  category,
  productName,
  specifications = [],
  canonicalUrl
}: ProductSEOProps) {
  const fullTitle = `${title} | Mamta Steel Traders - Premium Steel Supplier in Mumbai`;
  const siteUrl = "https://mamta-steel-traders.com";
  const imageUrl = `${siteUrl}/images/products/steel-products-banner.jpg`;
  
  // Generate structured data for product
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": productName || title,
    "description": description,
    "category": category || "Steel Products",
    "manufacturer": {
      "@type": "Organization",
      "name": "Mamta Steel Traders",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shop No. 123, Steel Market",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400001",
        "addressCountry": "IN"
      },
      "telephone": "+91-9819322576",
      "email": "mamtasteeltraders@gmail.com"
    },
    "brand": {
      "@type": "Brand",
      "name": "Mamta Steel Traders"
    },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "seller": {
        "@type": "Organization",
        "name": "Mamta Steel Traders"
      }
    },
    "image": imageUrl,
    ...(specifications.length > 0 && {
      "additionalProperty": specifications.map(spec => ({
        "@type": "PropertyValue",
        "name": "Specification",
        "value": spec
      }))
    })
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Mamta Steel Traders" />
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={`${siteUrl}${canonicalUrl}`} />}
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="product" />
      <meta property="og:url" content={`${siteUrl}${canonicalUrl || ''}`} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Mamta Steel Traders" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={title} />
      
      {/* Additional Meta Tags */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Mumbai" />
      <meta name="geo.position" content="19.0760;72.8777" />
      <meta name="ICBM" content="19.0760, 72.8777" />
      
      {/* Business Related Meta */}
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Mobile Optimization */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="format-detection" content="telephone=yes" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
}