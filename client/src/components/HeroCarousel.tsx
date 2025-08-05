import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    title: "High-Pressure Steel Flanges",
    description: "Weld neck, slip-on, threaded flanges in various specifications and sizes.",
    buttons: [
      { text: "View Flanges Range", primary: true },
      { text: "Contact for Bulk Order", primary: false }
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    title: "Industrial Steel Plates & Sheets",
    description: "Durable MS/SS plates & checkered sheets for construction and manufacturing.",
    buttons: [
      { text: "View Plates Catalog", primary: true },
      { text: "Enquire Now", primary: false }
    ]
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    title: "Premium Steel Pipes & Tubes",
    description: "High-grade stainless steel and carbon steel pipes for industrial applications.",
    buttons: [
      { text: "Explore Pipe Range", primary: true },
      { text: "Request Quote", primary: false }
    ]
  }
];

export default function HeroCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const currentSlideRef = useRef(0);
  const autoplayRef = useRef<NodeJS.Timeout>();

  const goToSlide = (index: number) => {
    if (!carouselRef.current) return;
    
    currentSlideRef.current = index;
    const slideWidth = carouselRef.current.offsetWidth;
    carouselRef.current.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth'
    });
  };

  const nextSlide = () => {
    const nextIndex = (currentSlideRef.current + 1) % slides.length;
    goToSlide(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = currentSlideRef.current === 0 ? slides.length - 1 : currentSlideRef.current - 1;
    goToSlide(prevIndex);
  };

  const startAutoplay = () => {
    autoplayRef.current = setInterval(nextSlide, 5000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  return (
    <section className="relative" data-testid="hero-carousel">
      <div 
        ref={carouselRef}
        className="flex overflow-x-hidden scroll-smooth"
        onMouseEnter={stopAutoplay}
        onMouseLeave={startAutoplay}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full relative h-96 md:h-[500px] lg:h-[600px]">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
              <div className="text-white max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-orange-400" data-testid={`slide-title-${index}`}>
                  {slide.title}
                </h2>
                <p className="text-xl mb-6" data-testid={`slide-description-${index}`}>
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {slide.buttons.map((button, buttonIndex) => (
                    <Button
                      key={buttonIndex}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        button.primary 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'bg-gray-600 hover:bg-gray-700 text-white'
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
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
        data-testid="carousel-prev"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
        data-testid="carousel-next"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
      
      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlideRef.current ? 'bg-orange-500' : 'bg-white bg-opacity-50'
            }`}
            data-testid={`carousel-dot-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
