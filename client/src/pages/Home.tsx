import SEOHead from "@/components/SEOHead";
import HeroCarousel from "@/components/HeroCarousel";
import SSProduct from "@/components/SSProduct";
import ProductShowcase from "@/components/ProductShowcase";
import ContactSection from "@/components/ContactSection";
import StatsSection from "@/components/StatsSection";
import IndustryServe from "@/components/IndustryServe";

export default function Home() {
  return (
    <>
      <SEOHead
        title="Mamta Steel Traders - Stainless Steel, Alloy Steel, Carbon Steel & Mild Steel Supplier"
        description="Mamta Steel Traders is major importer, stockist, supplier of stainless steel 304, 316, 316L, 310, 321, 904L, alloy steel SA387, carbon steel EN8, EN9, EN19, mild steel grades. Pipes, tubes, sheets, plates, bars, flanges, fittings supplier in India."
        keywords="Mamta Steel Traders, stainless steel supplier, 304 stainless steel, 316 stainless steel, 316L, 310, 321, 904L, alloy steel SA387, carbon steel EN8, EN9, EN19, mild steel IS2062, steel pipes, steel tubes, steel sheets, steel plates, steel bars, flanges, fittings, steel stockist India"
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
