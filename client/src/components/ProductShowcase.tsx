import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    title: "Steel Flanges",
    description: "High-pressure flanges for industrial applications"
  },
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    title: "Steel Pipes",
    description: "Premium quality stainless steel pipes"
  },
  {
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    title: "Steel Sheets",
    description: "Durable steel sheets and plates"
  },
  {
    image: "https://images.unsplash.com/photo-1565001969194-ca0b2d2b3fb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    title: "Carbon Pipes",
    description: "High-grade carbon steel pipes"
  },
  {
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    title: "Structural Steel",
    description: "Construction grade structural steel"
  },
  {
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    title: "Custom Components",
    description: "Precision machined steel components"
  }
];

export default function ProductShowcase() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout>();

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    
    const scrollAmount = 300;
    const newScrollLeft = direction === 'left' 
      ? carouselRef.current.scrollLeft - scrollAmount
      : carouselRef.current.scrollLeft + scrollAmount;
    
    carouselRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    });
  };

  const startAutoplay = () => {
    autoplayRef.current = setInterval(() => {
      if (carouselRef.current) {
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        if (carouselRef.current.scrollLeft >= maxScroll) {
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scroll('right');
        }
      }
    }, 3000);
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
    <section className="py-16 bg-white" data-testid="product-showcase">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4" data-testid="text-section-title">
            Stainless Steel Materials & Products - Premium Quality SS Items
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto" data-testid="text-section-subtitle">
            Manufacturers & Suppliers of All Grades of Stainless Steel Products in Mumbai
          </p>
        </div>
        
        {/* Product Showcase Slider */}
        <div className="relative" onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto scroll-smooth gap-6 pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, index) => (
              <div 
                key={index} 
                className="min-w-[280px] bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                data-testid={`product-card-${index}`}
              >
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-48 object-cover"
                  loading="lazy"
                  data-testid={`product-image-${index}`}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-800 mb-2" data-testid={`product-title-${index}`}>
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4" data-testid={`product-description-${index}`}>
                    {product.description}
                  </p>
                  <Button 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
                    data-testid={`product-button-${index}`}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg text-slate-600 p-2 rounded-full hover:bg-gray-50 transition-all duration-300"
            data-testid="products-carousel-prev"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg text-slate-600 p-2 rounded-full hover:bg-gray-50 transition-all duration-300"
            data-testid="products-carousel-next"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
