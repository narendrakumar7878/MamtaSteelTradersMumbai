import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const industries = [
  {
    id: 1,
    title: "Construction & Infrastructure",
    description: "High-grade steel products for construction projects, structural engineering, and infrastructure development with superior strength and durability.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Construction site with steel structures and buildings"
  },
  {
    id: 2,
    title: "Automotive Manufacturing",
    description: "Precision steel components and materials for automotive manufacturing, including body parts, chassis, and engine components meeting international standards.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Automotive manufacturing assembly line"
  },
  {
    id: 3,
    title: "Heavy Manufacturing",
    description: "Industrial-grade steel solutions for heavy machinery, equipment manufacturing, and large-scale production facilities with certified quality assurance.",
    image: "https://images.unsplash.com/photo-1581091215360-943be9f4a52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Heavy manufacturing industrial equipment"
  },
  {
    id: 4,
    title: "Food & Beverage Industry",
    description: "Food-grade stainless steel products for processing equipment, storage tanks, and packaging machinery ensuring hygiene and safety standards.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Food and beverage processing facility"
  },
  {
    id: 5,
    title: "Pharmaceutical Industry",
    description: "High-purity stainless steel components for pharmaceutical equipment, clean rooms, and sterile processing environments with FDA compliance.",
    image: "https://images.unsplash.com/photo-1584984990245-fb68d86bfb6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Pharmaceutical manufacturing laboratory"
  },
  {
    id: 6,
    title: "Chemical Processing",
    description: "Corrosion-resistant steel solutions for chemical plants, refineries, and processing facilities handling aggressive chemicals and high temperatures.",
    image: "https://images.unsplash.com/photo-1611284640350-3c52f4e9c9f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Chemical processing plant with steel infrastructure"
  },
  {
    id: 7,
    title: "Water Treatment Plants",
    description: "Specialized steel products for water treatment facilities, sewage plants, and water purification systems with long-lasting performance.",
    image: "https://images.unsplash.com/photo-1581092586418-2a03f1f7e8be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Water treatment facility with steel pipes"
  },
  {
    id: 8,
    title: "Aerospace Industry",
    description: "Precision-engineered steel components for aerospace applications, aircraft manufacturing, and space technology with stringent quality controls.",
    image: "https://images.unsplash.com/photo-1581092795360-f3e9d5f3cba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80",
    alt: "Aerospace manufacturing facility"
  }
];

export default function IndustryServe() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section 
      className="py-16 lg:py-24 bg-gray-50 px-4 md:px-8"
      itemScope 
      itemType="http://schema.org/ItemList"
      data-testid="industry-serve-section"
    >
      <div className="container mx-auto max-w-7xl">
        
        {/* Animated Section Divider */}
        <div className="w-full h-[1px] lg:h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shimmer-gradient mb-6" />
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            style={{ color: '#1a3e72' }}
            data-testid="industry-heading"
          >
            Industries We Serve
          </h2>
          <p 
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            data-testid="industry-subtitle"
          >
            Premium Steel Solutions for Diverse Industrial Applications
          </p>
        </div>

        {/* Industries Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            pagination={{
              clickable: true,
              bulletActiveClass: 'swiper-pagination-bullet-active-custom',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              }
            }}
            className="industry-swiper pb-12"
            data-testid="industry-carousel"
          >
            {industries.map((industry) => (
              <SwiperSlide key={industry.id}>
                <div
                  className="relative group h-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-[1.02]"
                  itemProp="itemListElement"
                  itemScope
                  itemType="http://schema.org/ListItem"
                  onMouseEnter={() => setHoveredCard(industry.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  data-testid={`industry-card-${industry.id}`}
                >
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img
                      src={industry.image}
                      alt={industry.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  {/* Overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 transition-opacity duration-500 ${
                      hoveredCard === industry.id ? 'opacity-90' : 'opacity-70'
                    }`}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div 
                      className={`transform transition-all duration-500 ${
                        hoveredCard === industry.id ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-90'
                      }`}
                    >
                      <h3 
                        className="text-xl lg:text-2xl font-bold text-white mb-3 leading-tight"
                        itemProp="name"
                        data-testid={`industry-title-${industry.id}`}
                      >
                        {industry.title}
                      </h3>
                      <p 
                        className="text-gray-200 text-sm lg:text-base leading-relaxed mb-4"
                        itemProp="description"
                        data-testid={`industry-description-${industry.id}`}
                      >
                        {industry.description}
                      </p>
                      
                      <Button
                        variant="secondary"
                        size="sm"
                        className={`bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform ${
                          hoveredCard === industry.id ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-2 opacity-80 scale-95'
                        }`}
                        data-testid={`industry-button-${industry.id}`}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            data-testid="carousel-prev-btn"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-orange-500 transition-colors duration-200" />
          </button>

          <button
            className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
            data-testid="carousel-next-btn"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-orange-500 transition-colors duration-200" />
          </button>
        </div>
      </div>


    </section>
  );
}