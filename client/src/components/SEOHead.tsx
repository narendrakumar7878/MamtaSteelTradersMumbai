import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonicalUrl?: string;
}

export default function SEOHead({ 
  title, 
  description, 
  keywords = "steel traders, stainless steel pipes, steel sheets, flanges, Mumbai steel suppliers, industrial steel products",
  ogImage = "https://images.unsplash.com/photo-1565001969194-ca0b2d2b3fb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=630",
  canonicalUrl
}: SEOHeadProps) {
  const fullTitle = `${title} | Mamta Steel Traders - Premium Steel Solutions Provider`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
