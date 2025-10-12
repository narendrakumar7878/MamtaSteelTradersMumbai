import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Helmet } from "react-helmet-async";

import ssPipeImg from "@/assets/SS PIPE MAMTA STEEL TRADERS.jpg";
import ssPlateImg from "@/assets/SS PLATE  MAMTA STEEL TRADERS.jpg";
import ssFlangeImg from "@/assets/SS FLANGE  MAMTA STEEL TRADERS.jpg";
import ssRoundBarImg from "@/assets/SS ROUND BAR  MAMTA STEEL TRADERS.jpg";
import ssFittingImg from "@/assets/SS FORGE FITTING  MAMTA STEEL TRADERS.jpg";
import ssRodImg from "@/assets/SS ROD  MAMTA STEEL TRADERS.jpg";

const slides = [
  {
    image: ssPipeImg,
    title: "Premium Stainless Steel Pipes & Tubes Supplier in India",
    description:
      "Leading manufacturer and supplier of high-quality stainless steel pipes, seamless tubes, and welded pipes. ISO 9001:2015 certified with grades 304, 316L, 310S. Best prices for industrial, commercial and residential projects.",
    alt: "Premium Stainless Steel Pipes and Tubes - SS 304, 316L - Mamta Steel Traders India",
    keywords: "stainless steel pipes, ss pipes, seamless pipes, welded pipes, 304 pipes, 316L pipes",
  },
  {
    image: ssPlateImg,
    title: "Industrial Steel Plates & Sheets Manufacturer India",
    description:
      "Top quality MS plates, SS plates, checkered sheets, hot rolled steel sheets, and cold rolled plates. Best steel plate supplier in India for construction, fabrication, and structural applications with ISO certification.",
    alt: "Industrial Steel Plates Sheets MS SS - Steel Plate Supplier India - Mamta Steel Traders",
    keywords: "steel plates, MS plates, SS plates, checkered sheets, hot rolled plates, steel sheets",
  },
  {
    image: ssFlangeImg,
    title: "High-Pressure Steel Flanges & Pipe Fittings Supplier",
    description:
      "Premium quality weld neck flanges, slip-on flanges, blind flanges, threaded flanges and pipe fittings. ANSI, DIN, JIS standards. Best flange manufacturer in India for oil & gas, petrochemical industries with full test certificates.",
    alt: "Steel Flanges Pipe Fittings Weld Neck Slip-On Blind Flanges Supplier India - Mamta Steel",
    keywords: "steel flanges, weld neck flanges, slip-on flanges, pipe fittings, ANSI flanges, DIN flanges",
  },
  {
    image: ssRoundBarImg,
    title: "Structural Steel Bars & Round Bars Manufacturer India",
    description:
      "High tensile strength steel bars, round bars, square bars, hex bars, and reinforcement bars. TMT bars manufacturer in India for construction, engineering projects. Best quality steel bars with ISI certification and competitive prices.",
    alt: "Steel Bars Round Bars TMT Bars Square Bars Manufacturer India - Mamta Steel Traders",
    keywords: "steel bars, round bars, TMT bars, square bars, reinforcement bars, hex bars",
  },
  {
    image: ssFittingImg,
    title: "Industrial Steel Valves & Components Supplier India",
    description:
      "Gate valves, ball valves, check valves, butterfly valves, and industrial steel components. Leading valve supplier in India for oil & gas, petrochemical, power generation with full traceability and test certificates.",
    alt: "Industrial Steel Valves Gate Valves Ball Valves Supplier India - Mamta Steel Traders",
    keywords: "steel valves, gate valves, ball valves, check valves, butterfly valves, industrial valves",
  },
  {
    image: ssRodImg,
    title: "Welding Electrodes & Steel Tools Supplier India",
    description:
      "Professional-grade welding electrodes, cutting tools, grinding wheels, and specialized steel fabrication tools. Best welding electrode supplier in India for fabrication, construction, industrial maintenance with competitive prices.",
    alt: "Welding Electrodes Steel Tools Cutting Tools Supplier India - Mamta Steel Traders",
    keywords: "welding electrodes, steel tools, cutting tools, grinding wheels, fabrication tools",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const goToSlide = (index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const nextSlide = () => goToSlide((currentSlide + 1) % slides.length);
  const prevSlide = () =>
    goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);

  useEffect(() => {
    autoplayRef.current = setInterval(nextSlide, 6000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [currentSlide]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentSlide]);

  const touchStartRef = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartRef.current === null) return;
    const diff = touchStartRef.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
    touchStartRef.current = null;
  };

  const currentSlideData = slides[currentSlide];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mamta Steel Traders",
    "description": "Leading steel supplier in India - Pipes, Tubes, Plates, Sheets, Flanges, Fittings, Bars, Valves, and Welding Electrodes",
    "url": "https://mamtasteeltraders.com",
    "logo": "https://mamtasteeltraders.com/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9819322576",
      "contactType": "sales",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Steel Products",
      "itemListElement": slides.map((slide, index) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Product",
          "name": slide.title,
          "description": slide.description,
          "image": slide.image,
        }
      }))
    }
  };

  return (
    <>
      <Helmet>
        <title>Mamta Steel Traders - Leading Steel Supplier in India | Pipes, Plates, Flanges, Bars</title>
        <meta name="description" content="Mamta Steel Traders - Premium steel supplier in India. ISO certified manufacturer of stainless steel pipes, plates, sheets, flanges, fittings, bars, valves. Best prices, bulk orders welcome. Contact for quotes." />
        <meta name="keywords" content="steel supplier india, stainless steel pipes, MS plates, SS plates, steel flanges, pipe fittings, TMT bars, round bars, steel valves, welding electrodes, steel trader, steel manufacturer india" />
        <meta property="og:title" content="Mamta Steel Traders - Leading Steel Supplier in India" />
        <meta property="og:description" content="ISO certified steel supplier - Pipes, Plates, Flanges, Bars, Valves. Best quality steel products at competitive prices. Bulk orders welcome." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mamtasteeltraders.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mamta Steel Traders - Steel Supplier India" />
        <meta name="twitter:description" content="Leading steel supplier in India. Premium quality pipes, plates, flanges, bars at best prices." />
        <link rel="canonical" href="https://mamtasteeltraders.com" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <section
        className="relative w-full overflow-hidden"
        data-testid="hero-carousel"
        aria-label="Steel products showcase carousel"
        itemScope
        itemType="https://schema.org/ItemList"
      >
        <meta itemProp="name" content="Mamta Steel Traders Products" />
        <meta itemProp="description" content="Premium steel products - pipes, plates, flanges, bars, valves" />
        
        <div
          ref={carouselRef}
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-live="polite"
          aria-atomic="true"
        >
          {slides.map((slide, index) => (
            <article
              key={index}
              className="relative h-96 md:h-[500px] lg:h-[600px] flex-shrink-0 w-full"
              itemScope
              itemType="https://schema.org/Product"
              aria-hidden={index !== currentSlide}
            >
              <meta itemProp="name" content={slide.title} />
              <meta itemProp="description" content={slide.description} />
              <meta itemProp="keywords" content={slide.keywords} />
              
              <img
                src={slide.image}
                alt={slide.alt}
                className="absolute inset-0 w-full h-full object-cover"
                loading={index === 0 ? "eager" : "lazy"}
                itemProp="image"
                title={slide.title}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" aria-hidden="true" />
              <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="text-white max-w-4xl text-center">
                  <h1 
                    className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-orange-400"
                    itemProp="headline"
                  >
                    {slide.title}
                  </h1>
                  <p 
                    className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 text-gray-100"
                    itemProp="description"
                  >
                    {slide.description}
                  </p>
                  <div className="flex justify-center">
                    <Link href="/contact">
                      <Button
                        className="bg-orange-500 hover:bg-orange-600 text-white border-2 border-orange-500 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold transition-all transform hover:scale-105 shadow-lg"
                        data-testid="button-contact-bulk"
                        aria-label="Contact Mamta Steel Traders for bulk steel orders and price quotes"
                      >
                        <div className="flex flex-col items-center">
                          <span className="text-sm sm:text-base font-bold">Contact for Bulk Order</span>
                          
                        </div>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <button
          onClick={prevSlide}
          disabled={isTransitioning}
          className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 hover:scale-125 z-20"
          aria-label="Previous steel product slide"
          title="View previous steel product"
        >
          <ChevronLeft className="w-8 h-8 drop-shadow-lg" aria-hidden="true" />
        </button>

        <button
          onClick={nextSlide}
          disabled={isTransitioning}
          className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 hover:scale-125 z-20"
          aria-label="Next steel product slide"
          title="View next steel product"
        >
          <ChevronRight className="w-8 h-8 drop-shadow-lg" aria-hidden="true" />
        </button>

        <nav className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20" aria-label="Carousel navigation dots">
          {slides.map((slide, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-3 h-3 rounded-full transition-all ${
                i === currentSlide
                  ? "bg-orange-500 ring-2 ring-white/50"
                  : "bg-white/60 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${i + 1}: ${slide.title}`}
              aria-current={i === currentSlide ? "true" : "false"}
              title={slide.title}
            />
          ))}
        </nav>
      </section>
    </>
  );
}
