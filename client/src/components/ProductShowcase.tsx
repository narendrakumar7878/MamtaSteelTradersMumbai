import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ssPipeImg from "@/assets/SS PIPE MAMTA STEEL TRADERS.jpg";
import ssTubesImg from "@/assets/SS TUBES MAMTA STEEL TRADERS.jpg";
import ssPlateImg from "@/assets/SS PLATE  MAMTA STEEL TRADERS.jpg";
import ssRoundBarImg from "@/assets/SS ROUND BAR  MAMTA STEEL TRADERS.jpg";
import ssFittingImg from "@/assets/SS FORGE FITTING  MAMTA STEEL TRADERS.jpg";
import ssFlangeImg from "@/assets/SS FLANGE  MAMTA STEEL TRADERS.jpg";
import ssCoilImg from "@/assets/SS COIL MAMTA STEEL TRADERS.jpg";

// Product images configuration - easily changeable
const PRODUCT_IMAGES = {
  pipes: ssPipeImg,
  tubes: ssTubesImg,
  sheets: ssPlateImg,
  plates: ssPlateImg,
  roundBars: ssRoundBarImg,
  flatBars: ssRoundBarImg,
  squareBars: ssRoundBarImg,
  hollowBars: ssRoundBarImg,
  forgedBars: ssRoundBarImg,
  fittings: ssFittingImg,
  flanges: ssFlangeImg
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
      className="px-3 sm:px-4 lg:px-6 py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      aria-labelledby="products-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* SEO-Optimized Section Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <h2 
            id="products-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0"
          >
            Premium Quality{" "}
            <span className="text-[#f39c12]">Steel Products</span>{" "}
            & Materials
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed mb-3 sm:mb-4 px-2 sm:px-4">
            Comprehensive Range of Stainless Steel, Carbon Steel, Alloy Steel & Mild Steel Products - 
            Pipes, Tubes, Sheets, Plates, Bars, Flanges, Fittings & More
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto px-2 sm:px-4">
            Manufacturing & Supply Excellence Since Years | ISO Certified | Premium Quality Assurance
          </p>
        </motion.div>

        {/* Infinite Scrolling Carousel */}
        <div className="relative overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex gap-3 sm:gap-4 md:gap-6 lg:gap-8 pb-6 sm:pb-8 overflow-x-hidden"
            onMouseEnter={stopAutoplay}
            onMouseLeave={startAutoplay}
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              width: `${products.length * 350 + (products.length - 1) * 32}px` // Dynamic width for infinite scroll
            }}
          >
            {/* Duplicate products for infinite scroll effect */}
            {[...products, ...products].map((product, index) => (
              <motion.article
                key={`${product.id}-${index}`}
                className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] lg:w-[350px] bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg overflow-hidden group cursor-pointer transform transition-all duration-500"
                whileHover={{ 
                  scale: 1.03, 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                }}
                data-testid={`product-card-${product.id}`}
              >
                <div className="relative overflow-hidden h-40 sm:h-48 md:h-52">
                  <img 
                    src={product.image} 
                    alt={`${product.title} - Premium quality stainless steel, carbon steel, alloy steel ${product.title.toLowerCase()} supplier Mamta Steel Traders Mumbai India`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Hover Description Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-3 sm:p-4">
                    <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-4">
                        {product.description.substring(0, 200)}...
                      </p>
                    </div>
                  </div>
                  
                  {/* Premium Quality Badge */}
                  <div className="absolute top-2 sm:top-3 right-2 sm:right-3 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                    <span className="bg-[#f39c12] text-white px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold">
                      Premium Quality
                    </span>
                  </div>
                </div>
                
                <div className="p-3 sm:p-4">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#0d2b4e] dark:text-blue-400 mb-2 sm:mb-3 group-hover:text-[#f39c12] transition-colors duration-300">
                    Steel {product.title}
                  </h3>
                  
                  {/* SEO Keywords Tags */}
                  <div className="flex flex-wrap gap-1 mb-2 sm:mb-3">
                    <span className="text-[10px] sm:text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                      304, 316, 316L
                    </span>
                    <span className="text-[10px] sm:text-xs bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                      IS 2062
                    </span>
                    <span className="text-[10px] sm:text-xs bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full">
                      ASTM, ASME
                    </span>
                  </div>
                  
                  <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400">
                    Mumbai Stockist | ISO Certified | Best Price
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
          
          {/* Gradient overlays for infinite effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent dark:from-gray-900 pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent dark:from-gray-900 pointer-events-none z-10" />
        </div>

        {/* Hidden SEO Content for Google Indexing */}
        <div className="sr-only">
          <h3>Mamta Steel Traders - Complete Steel Products Range Mumbai India</h3>
          <p>Best Quality Stainless Steel, Carbon Steel, Alloy Steel, Mild Steel Products Supplier Mumbai. ISO Certified Steel Stockist India. Steel Pipes, Tubes, Sheets, Plates, Bars, Flanges, Fittings Manufacturer Mumbai.</p>
          
          <h4>Stainless Steel Grades: 202, 303, 304, 304L, 304H, 316, 316L, 316H, 316Ti, 310, 310s, 321, 321H, 317L, 347, 904L</h4>
          <h4>Carbon Steel Grades: EN1A, EN8, EN9, EN15, EN16, EN18, EN19, EN24, EN25, EN26, EN27, EN28, EN31, EN32</h4>
          <h4>Alloy Steel Grades: SA387 Gr.5, Gr.9, Gr.11, Gr.12, Gr.22, Gr.91, 16Mo3, C45, EN19, Abrex, Hardox</h4>
          <h4>Mild Steel Grades: IS2062 E250A, E250BR, E250BO, E250C, E350A, E350BR, E350BO, E350C, E450BR</h4>
          
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <strong>Steel {product.title} Mumbai:</strong> Mamta Steel Traders supplies premium quality {product.title.toLowerCase()} in stainless steel 304, 316, 316L, carbon steel, alloy steel, mild steel grades. Best price steel {product.title.toLowerCase()} Mumbai India stockist supplier manufacturer.
              </li>
            ))}
          </ul>
          
          <p>Keywords: Steel Supplier Mumbai, Steel Stockist India, Stainless Steel 304 316 316L Mumbai, Carbon Steel Pipes Mumbai, Steel Sheets Plates Mumbai, Steel Bars Mumbai, Steel Flanges Mumbai, Steel Fittings Mumbai, Best Steel Price Mumbai, ISO Certified Steel Supplier</p>
        </div>
      </div>
    </section>
  );
}
