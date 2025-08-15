import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Product images configuration - easily changeable
const PRODUCT_IMAGES = {
  pipes: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
  tubes: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
  sheets: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
  plates: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
  roundBars: "https://images.unsplash.com/photo-1565001969194-ca0b2d2b3fb4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
  flatBars: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
  squareBars: "https://images.unsplash.com/photo-1581092916314-f86b1c5cc3da?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
  hollowBars: "https://images.unsplash.com/photo-1581092916314-f86b1c5cc3da?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
  forgedBars: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
  fittings: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400",
  flanges: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=400"
};

const products = [
  {
    id: "pipes",
    image: PRODUCT_IMAGES.pipes,
    title: "Pipes",
    description: "Premium quality stainless steel, carbon steel, alloy steel and mild steel pipes in various sizes and specifications. Our steel pipes are manufactured using high-grade raw materials, ensuring excellent corrosion resistance, durability, and strength for industrial, commercial, and residential applications. Available in seamless and welded variants with ASTM, ASME, and IS standards compliance."
  },
  {
    id: "tubes",
    image: PRODUCT_IMAGES.tubes,
    title: "Tubes",
    description: "High-performance steel tubes in stainless steel 304, 316, 316L, carbon steel, and alloy steel grades. Our precision-engineered tubes offer superior dimensional accuracy, smooth finish, and exceptional mechanical properties. Suitable for heat exchangers, boilers, condensers, hydraulic systems, and structural applications across various industries."
  },
  {
    id: "sheets",
    image: PRODUCT_IMAGES.sheets,
    title: "Sheets",
    description: "Durable stainless steel sheets, carbon steel sheets, and alloy steel sheets in multiple grades and finishes. Our steel sheets provide excellent formability, weldability, and surface quality for manufacturing, construction, automotive, and architectural applications. Available in hot rolled, cold rolled, and polished finishes with customizable dimensions."
  },
  {
    id: "plates",
    image: PRODUCT_IMAGES.plates,
    title: "Plates",
    description: "Heavy-duty steel plates manufactured from premium quality stainless steel, carbon steel, and alloy steel materials. Our steel plates offer superior strength-to-weight ratio, impact resistance, and corrosion protection for pressure vessels, storage tanks, marine applications, and heavy construction projects. Certified to international quality standards."
  },
  {
    id: "roundBars",
    image: PRODUCT_IMAGES.roundBars,
    title: "Round Bars",
    description: "Precision-machined stainless steel round bars, carbon steel round bars, and alloy steel round bars with excellent surface finish and dimensional accuracy. Our round bars are ideal for manufacturing shafts, fasteners, automotive components, and precision instruments. Available in bright, black, and peeled conditions with various diameter ranges."
  },
  {
    id: "flatBars",
    image: PRODUCT_IMAGES.flatBars,
    title: "Flat Bars",
    description: "High-quality steel flat bars in stainless steel, carbon steel, and alloy steel grades offering excellent strength and versatility. Our flat bars are perfect for construction frameworks, machine components, decorative applications, and general fabrication work. Available in standard and custom sizes with superior straightness and surface quality."
  },
  {
    id: "squareBars",
    image: PRODUCT_IMAGES.squareBars,
    title: "Square Bars",
    description: "Premium steel square bars manufactured from superior grade stainless steel, carbon steel, and alloy steel materials. These square bars provide excellent machinability, weldability, and strength for structural applications, machine parts, and architectural projects. Available in cold drawn and hot rolled conditions with precise dimensions."
  },
  {
    id: "hollowBars",
    image: PRODUCT_IMAGES.hollowBars,
    title: "Hollow Bars",
    description: "Specialized steel hollow bars offering reduced weight while maintaining structural integrity and strength. Our hollow bars are manufactured from high-grade stainless steel, carbon steel, and alloy steel, making them ideal for hydraulic cylinders, machinery components, and weight-critical applications. Available in various wall thicknesses and diameters."
  },
  {
    id: "forgedBars",
    image: PRODUCT_IMAGES.forgedBars,
    title: "Forged Bars",
    description: "Superior quality forged steel bars with enhanced mechanical properties and grain structure refinement. Our forged bars in stainless steel, carbon steel, and alloy steel grades offer exceptional strength, toughness, and fatigue resistance for critical applications in aerospace, automotive, oil & gas, and heavy machinery industries."
  },
  {
    id: "fittings",
    image: PRODUCT_IMAGES.fittings,
    title: "Fittings",
    description: "Comprehensive range of steel pipe fittings including elbows, tees, reducers, couplings, and unions in stainless steel, carbon steel, and alloy steel materials. Our fittings ensure leak-proof connections, excellent flow characteristics, and long-lasting performance in piping systems for chemical, petrochemical, and process industries."
  },
  {
    id: "flanges",
    image: PRODUCT_IMAGES.flanges,
    title: "Flanges",
    description: "High-pressure steel flanges manufactured to ASME, ANSI, and DIN standards in various materials including stainless steel 304, 316, 316L, carbon steel, and alloy steel. Our flanges provide reliable connections for pipelines, pressure vessels, and equipment in oil & gas, power generation, and chemical processing applications."
  }
];

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function ProductShowcase() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoplayRef = useRef<NodeJS.Timeout>();
  
  // Auto-scroll functionality - continuous right to left
  const startAutoplay = () => {
    autoplayRef.current = setInterval(() => {
      if (carouselRef.current) {
        const maxScroll = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
        const currentScroll = carouselRef.current.scrollLeft;
        
        if (currentScroll >= maxScroll - 10) {
          // Reset to beginning for infinite loop
          carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Continue scrolling right
          carouselRef.current.scrollBy({ left: 1, behavior: 'smooth' });
        }
      }
    }, 20); // Smooth continuous scroll
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  useEffect(() => {
    // Start autoplay after component mounts
    const timer = setTimeout(() => {
      startAutoplay();
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      stopAutoplay();
    };
  }, []);

  return (
    <section 
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* SEO-Optimized Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <h2 
            id="products-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Premium Quality{" "}
            <span className="text-[#f39c12]">Steel Products</span>{" "}
            & Materials
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed mb-4">
            Comprehensive Range of Stainless Steel, Carbon Steel, Alloy Steel & Mild Steel Products - 
            Pipes, Tubes, Sheets, Plates, Bars, Flanges, Fittings & More
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Manufacturing & Supply Excellence Since Years | ISO Certified | Premium Quality Assurance
          </p>
        </motion.div>

        {/* Infinite Scrolling Carousel */}
        <div className="relative overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex gap-8 pb-8 overflow-x-hidden"
            onMouseEnter={stopAutoplay}
            onMouseLeave={startAutoplay}
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              width: `${products.length * 400 + (products.length - 1) * 32}px` // Dynamic width for infinite scroll
            }}
          >
            {/* Duplicate products for infinite scroll effect */}
            {[...products, ...products].map((product, index) => (
              <motion.article
                key={`${product.id}-${index}`}
                className="flex-shrink-0 w-[380px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group cursor-pointer transform transition-all duration-500"
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)"
                }}
                data-testid={`product-card-${product.id}`}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={`${product.title} - Premium quality stainless steel, carbon steel, alloy steel ${product.title.toLowerCase()} supplier in India`}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="bg-[#f39c12] text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Premium Quality
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-[#0d2b4e] dark:text-blue-400 mb-4 group-hover:text-[#f39c12] transition-colors duration-300">
                    Steel {product.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base line-clamp-6">
                    {product.description}
                  </p>
                  
                  {/* SEO Keywords Footer */}
                  <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">
                        Stainless Steel
                      </span>
                      <span className="text-xs bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 px-2 py-1 rounded">
                        Carbon Steel
                      </span>
                      <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 px-2 py-1 rounded">
                        Alloy Steel
                      </span>
                      <span className="text-xs bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 px-2 py-1 rounded">
                        Mild Steel
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          
          {/* Gradient overlays for infinite effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900 pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900 pointer-events-none z-10" />
        </div>

        {/* Hidden SEO Content for Indexing */}
        <div className="sr-only">
          <h3>Complete Steel Products Range:</h3>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <strong>{product.title}:</strong> {product.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
