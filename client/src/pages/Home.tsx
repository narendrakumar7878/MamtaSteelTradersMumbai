import SEOHead from "@/components/SEOHead";
import HeroCarousel from "@/components/HeroCarousel";
import ProductShowcase from "@/components/ProductShowcase";
import ContactSection from "@/components/ui/contactsection";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <>
      <SEOHead
        title="Home"
        description="Leading manufacturer and supplier of stainless steel pipes, sheets, flanges in Mumbai. ISO 9001:2015 certified. Premium quality steel products for industrial applications."
        keywords="Mamta Steel Traders, steel manufacturers Mumbai, stainless steel pipes, steel sheets, flanges, industrial steel products"
      />
      <HeroCarousel />
      <ProductShowcase />
      <ContactSection />
      <StatsSection />
    </>
  );
}
