import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
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
    description: "High-quality stainless steel pipes and tubes, available in all grades for industrial and commercial use. ISO-certified manufacturing with global supply.",
    alt: "Stainless Steel Pipes and Tubes",
    buttons: [
      { text: "Explore Pipe Range", primary: true },
      { text: "Request Quote", primary: false }
    ]
  },
  {
    image: ssPlateImg,
    title: "Industrial Steel Plates & Sheets",
    description: "Premium MS/SS plates, checkered sheets, and hot-rolled steel sheets for construction, manufacturing, and structural applications with superior durability.",
    alt: "Industrial Steel Plates and Sheets",
    buttons: [
      { text: "View Plates Catalog", primary: true },
      { text: "Enquire Now", primary: false }
    ]
  },
  {
    image: ssFlangeImg,
    title: "High-Pressure Steel Flanges & Fittings",
    description: "Precision-engineered weld neck, slip-on, threaded flanges and pipe fittings in ANSI, DIN, and JIS standards for critical industrial applications.",
    alt: "Steel Flanges and Pipe Fittings",
    buttons: [
      { text: "View Flanges Range", primary: true },
      { text: "Contact for Bulk Order", primary: false }
    ]
  },
  {
    image: ssRoundBarImg,
    title: "Structural Steel Bars & Rounds",
    description: "High-tensile strength steel bars, round bars, and reinforcement bars for construction, engineering, and manufacturing projects with certified quality.",
    alt: "Steel Bars and Round Bars",
    buttons: [
      { text: "Browse Bar Range", primary: true },
      { text: "Get Price List", primary: false }
    ]
  },
  {
    image: ssFittingImg,
    title: "Industrial Steel Valves & Components",
    description: "Gate valves, ball valves, and industrial steel components for oil & gas, petrochemical, and power generation industries with full traceability.",
    alt: "Industrial Steel Valves",
    buttons: [
      { text: "Explore Valves", primary: true },
      { text: "Technical Support", primary: false }
    ]
  },
  {
    image: ssRodImg,
    title: "Welding Electrodes & Steel Tools",
    description: "Professional-grade welding electrodes, cutting tools, and specialized steel tools for fabrication, construction, and industrial maintenance applications.",
    alt: "Welding Electrodes and Steel Tools",
    buttons: [
      { text: "View Tools Range", primary: true },
      { text: "Technical Specs", primary: false }
    ]
  }
];

export default function HeroCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoplayRef = useRef<NodeJS.Timeout>();

  const goToSlide = (index: number) => {
    if (isTransitioning || !carouselRef.current) return;
    
    setIsTransitioning(true);
    setCurrentSlide(index);
    
    const slideWidth = carouselRef.current.offsetWidth;
    carouselRef.current.style.transform = `translateX(-${slideWidth * index}px)`;
    
    // Reset transition flag after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const nextSlide = () => {
    if (isTransitioning) return;
    const nextIndex = (currentSlide + 1) % slides.length;
    goToSlide(nextIndex);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    const prevIndex = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    goToSlide(prevIndex);
  };

  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(nextSlide, 6000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = undefined;
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [currentSlide]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide();
      } else if (event.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  // Handle touch/swipe gestures
  const touchStartRef = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartRef.current === null) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStartRef.current - touchEnd;
    
    if (Math.abs(diff) > 50) { // Minimum swipe distance
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    
    touchStartRef.current = null;
  };

  return (
    <section className="relative overflow-hidden" data-testid="hero-carousel">
      <div 
        ref={carouselRef}
        className="flex transition-transform duration-500 ease-out"
        style={{ width: `${slides.length * 100}%`, transform: `translateX(-${currentSlide * (100 / slides.length)}%)` }}
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`relative h-96 md:h-[500px] lg:h-[600px] transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-90'
            }`}
            style={{ width: `${100 / slides.length}%` }}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
            <div className="relative z-10 w-full max-w-full mx-auto px-2 sm:px-3 lg:px-4 xl:px-6 h-full flex items-center">
              <div className="text-white max-w-3xl">
                <h1 className="text-2xl sm:text-2xl lg:text-heading xl:text-heading font-bold mb-3 sm:mb-4 md:mb-6 text-orange-400 leading-tight" data-testid={`slide-title-${index}`}>
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 md:mb-8 text-gray-100 leading-relaxed max-w-2xl" data-testid={`slide-description-${index}`}>
                  {slide.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {slide.buttons.map((button, buttonIndex) => (
                    <Button
                      key={buttonIndex}
                      className={`min-h-[44px] px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                        button.primary 
                          ? 'bg-orange-500 hover:bg-orange-600 text-white border-2 border-orange-500 hover:border-orange-600' 
                          : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900'
                      }`}
                      data-testid={`slide-button-${index}-${buttonIndex}`}
                    >
                      {button.text}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-2 sm:left-3 md:left-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white min-w-[44px] min-h-[44px] p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg z-20 flex items-center justify-center"
        data-testid="carousel-prev"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
      </button>
      
      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-2 sm:right-3 md:right-6 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white min-w-[44px] min-h-[44px] p-2 sm:p-3 md:p-4 rounded-full transition-all duration-300 transform hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg z-20 flex items-center justify-center"
        data-testid="carousel-next"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
      </button>
      
      {/* Pagination Dots */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 sm:space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            disabled={isTransitioning}
            className={`min-w-[44px] min-h-[44px] p-3 rounded-full transition-all duration-300 transform hover:scale-125 disabled:cursor-not-allowed flex items-center justify-center ${
              index === currentSlide 
                ? 'bg-orange-500/20 shadow-lg' 
                : 'bg-transparent'
            }`}
            data-testid={`carousel-dot-${index}`}
            aria-label={`Go to slide ${index + 1}`}
          >
            <span className={`w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full block ${
              index === currentSlide 
                ? 'bg-orange-500 ring-2 ring-white/50' 
                : 'bg-white/60 hover:bg-white/80'
            }`} />
          </button>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/20">
        <div 
          className="h-full bg-orange-500 transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        />
      </div>
    </section>
  );
}
