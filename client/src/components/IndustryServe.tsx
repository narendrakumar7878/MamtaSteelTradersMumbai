import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import csImg from "@/assets/CS  MAMTA STEEL TRADERS.jpg";
import ssImg from "@/assets/SS 304  MAMTA STEEL TRADERS.jpg";
import alloySteelImg from "@/assets/ALLOYS STEEL  MAMTA STEEL TRADERS.jpg";
import ssPipeImg from "@/assets/SS PIPE MAMTA STEEL TRADERS.jpg";
import ssPlateImg from "@/assets/SS PLATE  MAMTA STEEL TRADERS.jpg";
import ssFittingImg from "@/assets/SS FORGE FITTING  MAMTA STEEL TRADERS.jpg";

const industries = [
  {
    id: "construction",
    title: "Construction & Infrastructure",
    seoTitle: "Steel Supplier for Construction & Infrastructure Projects Mumbai",
    description: "Mamta Steel Traders supplies premium quality structural steel, rebar, TMT bars, stainless steel 304, 316, 316L for construction and infrastructure projects in Mumbai. Our high-grade steel products ensure superior strength, durability, and corrosion resistance for residential, commercial, and industrial construction projects. ISO certified steel supplier for construction industry in India.",
    image: csImg,
    alt: "Construction steel supplier Mumbai - structural steel, TMT bars, stainless steel for infrastructure projects",
    keywords: "construction steel, structural steel Mumbai, TMT bars supplier, building materials steel"
  },
  {
    id: "automotive",
    title: "Automotive Manufacturing",
    seoTitle: "Stainless Steel Solutions for Automotive Manufacturing Industry",
    description: "Precision automotive steel components and materials for car manufacturing, including stainless steel 304, 316 for exhaust systems, body parts, chassis components, and engine parts. Our automotive grade steel meets international standards ASTM, ASME, and automotive specifications. Leading steel stockist for automotive industry in Mumbai, India.",
    image: ssImg,
    alt: "Automotive steel supplier Mumbai - stainless steel components for car manufacturing industry",
    keywords: "automotive steel, car manufacturing steel, stainless steel automotive parts"
  },
  {
    id: "heavy-manufacturing",
    title: "Heavy Manufacturing",
    seoTitle: "Industrial Steel Solutions for Heavy Manufacturing Equipment",
    description: "Industrial-grade steel solutions for heavy machinery, equipment manufacturing, and large-scale production facilities. We supply carbon steel, alloy steel, mild steel for manufacturing heavy equipment, industrial machinery, and production line components. Certified quality steel stockist for heavy manufacturing industry in Mumbai with ASTM, IS standards compliance.",
    image: alloySteelImg,
    alt: "Heavy manufacturing steel supplier Mumbai - industrial steel for machinery and equipment",
    keywords: "industrial steel, heavy machinery steel, manufacturing equipment steel"
  },
  {
    id: "food-beverage",
    title: "Food & Beverage Industry",
    seoTitle: "Food Grade Stainless Steel Supplier for Food Processing Industry",
    description: "Food-grade stainless steel 304, 316, 316L products for food processing equipment, storage tanks, dairy processing, beverage manufacturing, and packaging machinery. Our food grade steel ensures hygiene, safety standards, and FDA compliance for food industry applications. Leading food grade stainless steel stockist in Mumbai, India.",
    image: ssPipeImg,
    alt: "Food grade stainless steel supplier Mumbai - food processing equipment steel",
    keywords: "food grade steel, stainless steel food industry, food processing steel"
  },
  {
    id: "pharmaceutical",
    title: "Pharmaceutical Industry",
    seoTitle: "Pharmaceutical Grade Stainless Steel for Medical Equipment",
    description: "High-purity pharmaceutical grade stainless steel 316, 316L, 904L components for pharmaceutical equipment, medical devices, clean rooms, and sterile processing environments. Our pharma grade steel meets FDA, WHO, and GMP compliance standards for pharmaceutical manufacturing. Premium quality medical grade steel supplier in Mumbai, India.",
    image: ssPlateImg,
    alt: "Pharmaceutical grade stainless steel supplier Mumbai - medical equipment steel",
    keywords: "pharmaceutical steel, medical grade stainless steel, pharma equipment steel"
  },
  {
    id: "chemical-processing",
    title: "Chemical Processing",
    seoTitle: "Corrosion Resistant Steel for Chemical Processing Industry",
    description: "Corrosion-resistant stainless steel 316, 316L, 904L, Hastelloy, Inconel solutions for chemical plants, refineries, petrochemical facilities, and processing plants handling aggressive chemicals and high temperatures. Our chemical grade steel provides superior corrosion resistance and durability for harsh chemical environments. Leading chemical industry steel supplier in Mumbai.",
    image: ssFittingImg,
    alt: "Chemical processing steel supplier Mumbai - corrosion resistant stainless steel for chemical plants",
    keywords: "chemical processing steel, corrosion resistant steel, chemical plant steel"
  },
  {
    id: "water-treatment",
    title: "Water Treatment Plants",
    seoTitle: "Stainless Steel Solutions for Water Treatment Industry",
    description: "Specialized stainless steel 304, 316, 316L products for water treatment facilities, sewage treatment plants, water purification systems, and wastewater management. Our water treatment grade steel offers excellent corrosion resistance against water chemicals and long-lasting performance. Leading water treatment steel supplier in Mumbai, India.",
    image: ssPipeImg,
    alt: "Water treatment steel supplier Mumbai - stainless steel pipes for water treatment plants",
    keywords: "water treatment steel, water plant steel, sewage treatment steel"
  },
  {
    id: "aerospace",
    title: "Aerospace Industry",
    seoTitle: "Aerospace Grade Steel for Aircraft Manufacturing Industry",
    description: "Precision-engineered aerospace grade steel components for aircraft manufacturing, space technology, and aviation industry. We supply titanium, stainless steel, alloy steel meeting aerospace specifications and stringent quality controls. Our aerospace steel ensures high strength-to-weight ratio and extreme temperature resistance for aviation applications. Certified aerospace steel supplier in India.",
    image: alloySteelImg,
    alt: "Aerospace steel supplier India - aircraft manufacturing steel components",
    keywords: "aerospace steel, aircraft manufacturing steel, aviation industry steel"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function IndustryServe() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const cardsPerSlide = 3;
  const totalSlides = Math.ceil(industries.length / cardsPerSlide);

  // Create extended industries array for infinite loop
  const extendedIndustries = [...industries, ...industries.slice(0, cardsPerSlide)];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setCurrentSlide((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Reset to first slide when reaching the end (for infinite loop)
  useEffect(() => {
    if (currentSlide === totalSlides) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(0);
      }, 700); // Wait for transition to complete
      
      setTimeout(() => {
        setIsTransitioning(true);
      }, 750); // Re-enable transitions
    }
  }, [currentSlide, totalSlides]);

  // SEO-optimized structured data for industries served
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Steel Supply Services for Industries - Mamta Steel Traders",
    "description": "Premium steel products and solutions for construction, automotive, manufacturing, food processing, pharmaceutical, chemical, water treatment, and aerospace industries in Mumbai, India",
    "provider": {
      "@type": "Organization",
      "name": "Mamta Steel Traders",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "India"
      }
    },
    "areaServed": "India",
    "serviceType": "Steel Supply",
    "industryServed": industries.map(industry => ({
      "@type": "Industry",
      "name": industry.title,
      "description": industry.description
    }))
  };

  return (
    <>
      {/* SEO Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      
      <section 
        className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
        aria-labelledby="industries-heading"
      >
        <div className="max-w-7xl mx-auto">
          
          {/* SEO-Optimized Section Header */}
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <h2 
              id="industries-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              <span className="text-[#0d2b4e]">Industries We Serve</span> - 
              <span className="text-[#f39c12]"> Steel Solutions Provider Mumbai</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed mb-3">
              Mamta Steel Traders - Leading Steel Supplier for Construction, Automotive, Manufacturing, Food Processing, 
              Pharmaceutical, Chemical, Water Treatment & Aerospace Industries in Mumbai, India
            </p>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
              Premium Quality Stainless Steel, Carbon Steel, Alloy Steel & Mild Steel Products for All Industrial Applications
            </p>
          </motion.div>

          {/* Industries Carousel - 3 Cards at a time with Infinite Loop */}
          <div className="relative overflow-hidden">
            <div 
              className="flex"
              style={{ 
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: isTransitioning ? 'transform 0.7s ease-in-out' : 'none'
              }}
            >
              {Array.from({ length: totalSlides + 1 }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-3 gap-6 px-1"
                >
                  {extendedIndustries
                    .slice(slideIndex * cardsPerSlide, slideIndex * cardsPerSlide + cardsPerSlide)
                    .map((industry, cardIndex) => (
                      <motion.article
                        key={`${industry.id}-${slideIndex}-${cardIndex}`}
                        className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:shadow-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        whileHover={{ 
                          scale: 1.02, 
                          y: -4,
                          transition: { duration: 0.3 }
                        }}
                        data-testid={`industry-card-${industry.id}`}
                      >
                        {/* Image Container */}
                        <div className="relative h-40 sm:h-48 overflow-hidden">
                          <img
                            src={industry.image}
                            alt={industry.alt}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                            loading="lazy"
                          />
                          
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                          
                          {/* Industry Badge */}
                          <div className="absolute top-2 left-2 bg-[#f39c12] text-white px-2 py-1 rounded-full text-xs font-semibold transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                            Steel Solutions
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                          <h3 className="text-base sm:text-lg font-bold text-[#0d2b4e] dark:text-blue-400 mb-2 group-hover:text-[#f39c12] transition-colors duration-300 line-clamp-2">
                            {industry.seoTitle}
                          </h3>
                          
                          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed line-clamp-3 mb-3">
                            {industry.description}
                          </p>
                          
                          {/* SEO Keywords Tags */}
                          <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex flex-wrap gap-1">
                              {industry.keywords.split(', ').slice(0, 2).map((keyword, keyIndex) => (
                                <span 
                                  key={keyIndex}
                                  className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-full"
                                >
                                  {keyword}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentSlide(index);
                }}
                className={`min-w-[44px] min-h-[44px] p-3 rounded-full transition-all duration-300 flex items-center justify-center ${
                  currentSlide % totalSlides === index ? 'bg-[#f39c12]/20' : 'bg-transparent'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                data-testid={`carousel-dot-${index}`}
              >
                <span className={`w-3 h-3 rounded-full block transition-all duration-300 ${
                  currentSlide % totalSlides === index
                    ? 'bg-[#f39c12] scale-125'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
                }`} />
              </button>
            ))}
          </div>

          {/* Additional SEO Content */}
          <motion.div 
            className="mt-12 bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 dark:text-white mb-6">
              Why Choose Mamta Steel Traders for Your Industry?
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <h4 className="text-lg font-semibold text-[#0d2b4e] dark:text-blue-400 mb-2">ISO Certified Quality</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">All steel products meet international quality standards and certifications</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#0d2b4e] dark:text-blue-400 mb-2">Mumbai Stockist</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Large inventory and quick delivery across Mumbai and India</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#0d2b4e] dark:text-blue-400 mb-2">Best Pricing</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Competitive rates for bulk orders and regular supplies</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Hidden SEO Content for Google Indexing */}
        <div className="sr-only">
          <h3>Steel Supplier for Industries Mumbai India - Mamta Steel Traders</h3>
          <p>Leading steel stockist and supplier for construction industry, automotive manufacturing, heavy manufacturing, food processing, pharmaceutical, chemical processing, water treatment, and aerospace industries in Mumbai, India.</p>
          
          <h4>Industry-Specific Steel Solutions:</h4>
          <ul>
            {industries.map(industry => (
              <li key={industry.id}>
                <strong>{industry.seoTitle}:</strong> {industry.description}
              </li>
            ))}
          </ul>
          
          <p>Keywords: Steel Supplier Mumbai Industries, Construction Steel Mumbai, Automotive Steel Supplier, Manufacturing Steel Mumbai, Food Grade Steel India, Pharmaceutical Steel Supplier, Chemical Processing Steel, Water Treatment Steel, Aerospace Steel India</p>
        </div>
      </section>
    </>
  );
}
