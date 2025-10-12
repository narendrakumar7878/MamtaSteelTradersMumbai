import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

import ssPipeImg from "@/assets/SS PIPE MAMTA STEEL TRADERS.jpg";
import ssPlateImg from "@/assets/SS PLATE  MAMTA STEEL TRADERS.jpg";
import ssFlangeImg from "@/assets/SS FLANGE  MAMTA STEEL TRADERS.jpg";
import ssRoundBarImg from "@/assets/SS ROUND BAR  MAMTA STEEL TRADERS.jpg";
import ssFittingImg from "@/assets/SS FORGE FITTING  MAMTA STEEL TRADERS.jpg";
import ssRodImg from "@/assets/SS ROD  MAMTA STEEL TRADERS.jpg";

const slides = [
  {
    image: ssPipeImg,
    title: "Premium Stainless Steel Pipes & Tubes",
    description:
      "High-quality stainless steel pipes and tubes, available in all grades for industrial and commercial use. ISO-certified manufacturing with global supply.",
    alt: "Stainless Steel Pipes and Tubes",
  },
  {
    image: ssPlateImg,
    title: "Industrial Steel Plates & Sheets",
    description:
      "Premium MS/SS plates, checkered sheets, and hot-rolled steel sheets for construction, manufacturing, and structural applications with superior durability.",
    alt: "Industrial Steel Plates and Sheets",
  },
  {
    image: ssFlangeImg,
    title: "High-Pressure Steel Flanges & Fittings",
    description:
      "Precision-engineered weld neck, slip-on, threaded flanges and pipe fittings in ANSI, DIN, and JIS standards for critical industrial applications.",
    alt: "Steel Flanges and Pipe Fittings",
  },
  {
    image: ssRoundBarImg,
    title: "Structural Steel Bars & Rounds",
    description:
      "High-tensile strength steel bars, round bars, and reinforcement bars for construction, engineering, and manufacturing projects with certified quality.",
    alt: "Steel Bars and Round Bars",
  },
  {
    image: ssFittingImg,
    title: "Industrial Steel Valves & Components",
    description:
      "Gate valves, ball valves, and industrial steel components for oil & gas, petrochemical, and power generation industries with full traceability.",
    alt: "Industrial Steel Valves",
  },
  {
    image: ssRodImg,
    title: "Welding Electrodes & Steel Tools",
    description:
      "Professional-grade welding electrodes, cutting tools, and specialized steel tools for fabrication, construction, and industrial maintenance applications.",
    alt: "Welding Electrodes and Steel Tools",
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

  // autoplay
  useEffect(() => {
    autoplayRef.current = setInterval(nextSlide, 6000);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [currentSlide]);

  // keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentSlide]);

  // swipe
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

  return (
    <section
      className="relative w-full overflow-hidden"
      data-testid="hero-carousel"
    >
      <div
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="relative h-96 md:h-[500px] lg:h-[600px] flex-shrink-0 w-full"
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
              <div className="text-white max-w-4xl text-center">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-orange-400">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 text-gray-100">
                  {slide.description}
                </p>
                <div className="flex justify-center">
                  <Link href="/contact">
                    <Button
                      className="bg-orange-500 hover:bg-orange-600 text-white border-2 border-orange-500 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold transition-all transform hover:scale-105 shadow-lg"
                      data-testid="button-contact-bulk"
                    >
                      <div className="flex flex-col items-center">
                        <span className="text-sm sm:text-base font-bold">Contact for Bulk</span>
                        <span className="text-xs sm:text-sm font-normal opacity-90">Get Price List, Technical Support</span>
                      </div>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows - Hidden on mobile */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="hidden md:block absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 hover:scale-125 z-20"
      >
        <ChevronLeft className="w-8 h-8 drop-shadow-lg" />
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 hover:scale-125 z-20"
      >
        <ChevronRight className="w-8 h-8 drop-shadow-lg" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goToSlide(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentSlide
                ? "bg-orange-500 ring-2 ring-white/50"
                : "bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
