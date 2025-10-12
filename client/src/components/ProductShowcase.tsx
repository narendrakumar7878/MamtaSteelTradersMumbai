import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

// Dynamically import all product images using Vite's import.meta.glob
const imageModules = import.meta.glob<{ default: string }>('../assets/produtphoto/*.jpg', { eager: true });

// Product gallery with SEO-optimized metadata
const productCategories = [
  "Stainless Steel Pipes & Tubes",
  "Carbon Steel Plates & Sheets", 
  "Alloy Steel Round Bars",
  "Stainless Steel Flanges",
  "Steel Pipe Fittings",
  "Stainless Steel Coils",
  "Mild Steel Channels & Angles",
  "Stainless Steel Fasteners",
  "Carbon Steel Pipes",
  "Alloy Steel Plates",
  "Stainless Steel Sheets",
  "Steel Bars & Rods",
  "Duplex Steel Products",
  "Nickel Alloy Products",
  "Titanium Steel Products",
  "Copper & Brass Products",
  "Aluminum Products",
  "Tool Steel Products",
  "Spring Steel Products",
  "Bearing Steel Products",
  "Stainless Steel Welded Pipes",
  "Carbon Steel Seamless Pipes",
  "Alloy Steel Seamless Pipes",
  "Stainless Steel Square Bars",
  "Carbon Steel Flat Bars",
  "Alloy Steel Hex Bars",
  "Stainless Steel Hollow Bars",
  "Stainless Steel Wire Rods",
  "Galvanized Steel Products",
  "Chequered Steel Plates",
  "Perforated Steel Sheets",
  "Expanded Metal Mesh",
  "Stainless Steel Wires",
  "Steel Gratings",
  "Stainless Steel Buttweld Fittings",
  "Socket Weld Fittings",
  "Threaded Pipe Fittings",
  "Compression Tube Fittings",
  "Weld Neck Flanges",
  "Slip On Flanges",
  "Blind Flanges",
  "Threaded Flanges",
  "Lap Joint Flanges",
  "Orifice Flanges",
  "Long Weld Neck Flanges",
  "Stainless Steel Bolts",
  "Stainless Steel Nuts",
  "Stainless Steel Washers",
  "Stainless Steel Studs",
  "U Bolts & J Bolts",
  "Stainless Steel Screws",
  "Eye Bolts & Eye Nuts",
  "Stud Bolts & Nuts",
  "Socket Head Cap Screws",
  "Set Screws & Grub Screws",
  "Stainless Steel Angles",
  "Stainless Steel Channels",
  "Stainless Steel I Beams",
  "Stainless Steel T Bars",
  "Seamless Steel Tubes",
  "Heat Exchanger Tubes",
  "Hydraulic Tubes",
  "Instrumentation Tubes",
  "Coil Tubes",
  "Condenser Tubes",
  "Boiler Tubes",
  "Complete Steel Products Range"
];

const productDescriptions = [
  "Premium quality stainless steel pipes and tubes in 304, 316, 316L grades for industrial, commercial applications",
  "Durable carbon steel plates and sheets IS 2062 grade for construction and manufacturing",
  "Precision alloy steel round bars EN8, EN9, EN19 for machining and automotive",
  "Industrial grade stainless steel flanges 150#, 300#, 600# ANSI, ASME standard",
  "Complete range of steel pipe fittings - elbows, tees, reducers in SS, CS, AS",
  "Quality stainless steel coils with BA, 2B, mirror finish for various applications",
  "Structural mild steel channels and angles ISMC, ISMB for construction projects",
  "Corrosion-resistant stainless steel fasteners - bolts, nuts, washers A2, A4 grade",
  "Heavy-duty carbon steel pipes API 5L, ASTM A106 seamless and ERW",
  "High-strength alloy steel plates SA387 for pressure vessels and boilers",
  "Premium finish stainless steel sheets in various grades and surface finishes",
  "Versatile steel bars and rods in round, square, flat, hex shapes",
  "Corrosion-resistant duplex steel 2205, 2507 pipes, plates, flanges",
  "High-performance nickel alloy Inconel, Monel, Hastelloy products",
  "Lightweight titanium Grade 2, Grade 5 for aerospace and marine",
  "Conductive copper and brass tubes, pipes, sheets, rods for electrical",
  "Lightweight aluminum 1100, 5052, 6061 pipes, plates, sheets",
  "High-hardness tool steel D2, H11, H13 for dies and molds",
  "Elastic spring steel EN45, EN47 for automotive suspension",
  "Precision bearing steel EN31, 52100 for machinery and equipment",
  "Seamless welded stainless steel pipes with polished finish",
  "High-pressure carbon steel seamless pipes for oil and gas",
  "Heat-resistant alloy steel seamless pipes P11, P22, P91",
  "Precision stainless steel square bars for fabrication",
  "Versatile carbon steel flat bars for structural applications",
  "Machining-grade alloy steel hex bars for precision parts",
  "Lightweight stainless steel hollow bars for hydraulic systems",
  "Flexible stainless steel wire rods for spring and wire manufacturing",
  "Corrosion-protected galvanized steel pipes, sheets, coils",
  "Anti-slip chequered steel floor plates for walkways",
  "Custom perforated steel sheets for filtration and ventilation",
  "Industrial expanded metal mesh for fencing and safety",
  "High-quality stainless steel wires bright, annealed finish",
  "Industrial steel gratings for platforms and walkways",
  "Precision buttweld pipe fittings ASME B16.9 standard",
  "High-pressure socket weld fittings Class 3000, 6000",
  "Screwed threaded pipe fittings BSP, NPT standard",
  "Leak-proof compression tube fittings for instrumentation",
  "High-strength weld neck flanges for pipeline connections",
  "Easy-install slip on flanges for various applications",
  "Pipeline isolation blind flanges all pressure ratings",
  "Screw connection threaded flanges for quick assembly",
  "Versatile lap joint flange systems with stub ends",
  "Flow measurement orifice flanges with paddle spacers",
  "Extended weld neck flanges for high-pressure systems",
  "Corrosion-resistant stainless steel hex head bolts",
  "Precision stainless steel hex nuts with lock washers",
  "Load-distributing stainless steel flat and spring washers",
  "High-strength stainless steel threaded studs and rods",
  "Structural U bolts and J bolts for pipe support",
  "Versatile stainless steel machine and self-tapping screws",
  "Heavy-duty eye bolts and eye nuts for lifting operations",
  "Precision stud bolts with nuts ASTM A193 B7, B8",
  "High-torque socket head cap screws Allen bolts DIN 912",
  "Locking set screws and grub screws for machinery",
  "Structural stainless steel equal and unequal angles",
  "Load-bearing stainless steel C channels U channels",
  "Heavy-duty stainless steel I beams and H beams",
  "Versatile stainless steel T bars for construction",
  "High-precision seamless steel tubes cold drawn",
  "Efficient heat exchanger tubes U tubes for boilers",
  "High-pressure hydraulic tubes precision honed",
  "Precision instrumentation tubes small diameter capillary",
  "Flexible coil tube solutions for continuous applications",
  "Thermal condenser tubes brass, copper, titanium",
  "High-temperature boiler tubes T11, T22, T91",
  "Complete range of premium steel products and materials"
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
  const [visibleCount, setVisibleCount] = useState(6);

  // Convert image modules to array and combine with product data
  const productGallery = useMemo(() => {
    const imageArray = Object.entries(imageModules).map(([path, module], index) => {
      const filename = path.split('/').pop()?.replace('.jpg', '') || '';
      const categoryIndex = index % productCategories.length;
      const title = productCategories[categoryIndex];
      const description = productDescriptions[categoryIndex];
      
      return {
        id: index + 1,
        image: module.default,
        filename,
        title,
        alt: `${title} - Premium Quality Stainless Steel Carbon Steel Alloy Steel Mild Steel Supplier Mamta Steel Traders Mumbai India ISO Certified Stockist ASTM ASME DIN Standard`,
        description
      };
    });
    return imageArray;
  }, []);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, productGallery.length));
  };

  const showLess = () => {
    setVisibleCount(6);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      aria-labelledby="products-heading"
      itemScope
      itemType="https://schema.org/ProductCollection"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="text-2xl sm:text-2xl lg:text-heading xl:text-heading font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight"
            itemProp="name"
          >
            Premium Quality{" "}
            <span className="text-[#f39c12]">Steel Products</span>{" "}
            & Materials
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed mb-3 sm:mb-4" itemProp="description">
            Comprehensive Range of Stainless Steel, Carbon Steel, Alloy Steel & Mild Steel Products - 
            Pipes, Tubes, Sheets, Plates, Bars, Flanges, Fittings & More
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Manufacturing & Supply Excellence Since Years | ISO 9001:2015 Certified | Premium Quality Assurance | Mumbai India Stockist
          </p>
        </motion.div>

        {/* Product Gallery Grid - 3 columns */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {productGallery.slice(0, visibleCount).map((product) => (
            <motion.article
              key={product.id}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                transition: { duration: 0.3 }
              }}
              data-testid={`product-image-${product.id}`}
              itemScope
              itemType="https://schema.org/Product"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={product.image} 
                  alt={product.alt}
                  title={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading={product.id <= 6 ? "eager" : "lazy"}
                  itemProp="image"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4 sm:p-6">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2" itemProp="name">
                      {product.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed" itemProp="description">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Premium Badge */}
                <div className="absolute top-3 right-3 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                  <span className="bg-[#f39c12] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    Premium Quality
                  </span>
                </div>
              </div>
              
              {/* Product Info Footer */}
              <div className="p-4 sm:p-5">
                <h4 className="text-sm sm:text-base font-semibold text-[#0d2b4e] dark:text-blue-400 mb-2 group-hover:text-[#f39c12] transition-colors duration-300 line-clamp-2">
                  {product.title}
                </h4>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
                  <span className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full">
                    ISO Certified
                  </span>
                  <span className="text-xs bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full">
                    Best Price
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Mumbai Stockist | Quality Assured
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Load More / Show Less Buttons */}
        <motion.div 
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {visibleCount < productGallery.length && (
            <Button
              onClick={loadMore}
              className="bg-[#f39c12] hover:bg-[#e67e22] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              data-testid="button-load-more"
            >
              Load More Products ({productGallery.length - visibleCount} remaining)
              <ChevronDown className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          )}
          
          {visibleCount > 6 && (
            <Button
              onClick={showLess}
              variant="outline"
              className="border-2 border-[#0d2b4e] text-[#0d2b4e] hover:bg-[#0d2b4e] hover:text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg transition-all duration-300 transform hover:scale-105"
              data-testid="button-show-less"
            >
              Show Less
            </Button>
          )}
        </motion.div>

        {/* Hidden SEO Content for Google Indexing */}
        <div className="sr-only" itemScope itemType="https://schema.org/Organization">
          <h3 itemProp="name">Mamta Steel Traders - Complete Steel Products Range Mumbai India</h3>
          <p itemProp="description">
            Best Quality Stainless Steel, Carbon Steel, Alloy Steel, Mild Steel Products Supplier Mumbai. 
            ISO 9001:2015 Certified Steel Stockist India. Steel Pipes, Tubes, Sheets, Plates, Bars, Flanges, Fittings Manufacturer Mumbai.
            Premium quality steel products with ASTM, ASME, IS, DIN, EN standards compliance.
          </p>
          
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="addressLocality">Mumbai</span>, 
            <span itemProp="addressRegion">Maharashtra</span>, 
            <span itemProp="addressCountry">India</span>
          </div>

          <h4>Stainless Steel Grades Available:</h4>
          <p>SS 202, 303, 304, 304L, 304H, 316, 316L, 316H, 316Ti, 310, 310S, 321, 321H, 317L, 347, 347H, 904L, Duplex 2205, Super Duplex 2507</p>
          
          <h4>Carbon Steel Grades Available:</h4>
          <p>IS 2062 E250, E350, E450, EN1A, EN8, EN9, EN15, EN16, EN18, EN19, EN24, EN25, EN26, EN27, EN28, EN31, EN32, A36, St37, St52</p>
          
          <h4>Alloy Steel Grades Available:</h4>
          <p>SA387 Gr.5, Gr.9, Gr.11, Gr.12, Gr.22, Gr.91, 16Mo3, C45, EN19, EN24, Abrex 400, Hardox 400, Hardox 500</p>
          
          <h4>Mild Steel Grades Available:</h4>
          <p>IS2062 E250A, E250BR, E250BO, E250C, E350A, E350BR, E350BO, E350C, E410A, E410BR, E450BR, E450C, E550BR</p>

          <h4>Product Categories:</h4>
          <ul>
            <li>Stainless Steel Seamless Pipes - 304, 316, 316L, 321, 310 grades ASTM A312, ASME B36.19M standard</li>
            <li>Stainless Steel Welded Pipes - ERW, EFW pipes polished, pickled finish</li>
            <li>Carbon Steel Seamless Pipes - API 5L X42, X52, X60, X65, X70 grade high pressure pipes</li>
            <li>Alloy Steel Seamless Pipes - ASTM A335 P5, P9, P11, P22, P91 high temperature pipes</li>
            <li>Stainless Steel Sheets & Plates - BA, 2B, No.1, No.4, Hairline, Mirror finish sheets</li>
            <li>Carbon Steel Plates - Hot rolled, cold rolled, chequered plates</li>
            <li>Stainless Steel Round Bars - Bright, black, peeled round bars</li>
            <li>Stainless Steel Flanges - Weld neck, slip on, blind, threaded flanges ANSI B16.5</li>
            <li>Stainless Steel Pipe Fittings - Buttweld, socket weld, threaded fittings ASME B16.9, B16.11</li>
            <li>Stainless Steel Fasteners - Bolts, nuts, washers, studs A2, A4 grade</li>
            <li>Galvanized Steel Products - Hot dip galvanized pipes, sheets, coils</li>
            <li>Nickel Alloy Products - Inconel, Monel, Hastelloy pipes, plates, fittings</li>
            <li>Titanium Products - Grade 2, Grade 5 titanium pipes, plates, bars</li>
            <li>Copper & Brass Products - Copper tubes, brass fittings, copper sheets</li>
            <li>Aluminum Products - Aluminum pipes, plates, sheets, bars, coils</li>
          </ul>

          <h4>Industries Served:</h4>
          <p>Oil & Gas, Petrochemical, Chemical Processing, Power Generation, Pharmaceutical, Food Processing, Construction, Automotive, Aerospace, Marine, Sugar, Paper, Cement, Fertilizer, Mining</p>

          <h4>Quality Certifications:</h4>
          <p>ISO 9001:2015, MSME Certified, ASTM Approved, ASME Compliant, EN Standards, DIN Standards, Material Test Certificates (MTC) as per EN 10204 3.1/3.2</p>

          <h4>Services Offered:</h4>
          <p>Steel Supply, Steel Stockist, Steel Import, Steel Export, Steel Distribution, Custom Cutting, Custom Fabrication, Material Testing, Technical Support, Fast Delivery, Competitive Pricing</p>

          <p itemProp="keywords">
            Steel Supplier Mumbai, Steel Stockist India, Stainless Steel 304 316 316L Mumbai, Carbon Steel Pipes Mumbai, 
            Steel Sheets Plates Mumbai, Steel Bars Mumbai, Steel Flanges Mumbai, Steel Fittings Mumbai, 
            Best Steel Price Mumbai, ISO Certified Steel Supplier, ASTM Steel Products, ASME Steel Products,
            Seamless Pipes Mumbai, Welded Pipes Mumbai, Steel Tubes Mumbai, Round Bars Mumbai, Flat Bars Mumbai,
            Square Bars Mumbai, Hex Bars Mumbai, Steel Coils Mumbai, Steel Sheets Mumbai, Steel Plates Mumbai,
            Buttweld Fittings Mumbai, Socket Weld Fittings Mumbai, Threaded Fittings Mumbai, Weld Neck Flanges Mumbai,
            Slip On Flanges Mumbai, Blind Flanges Mumbai, Threaded Flanges Mumbai, Steel Bolts Mumbai, Steel Nuts Mumbai,
            Steel Washers Mumbai, Steel Studs Mumbai, Galvanized Steel Mumbai, Chequered Plates Mumbai, Perforated Sheets Mumbai,
            Expanded Metal Mumbai, Steel Wire Mumbai, Steel Gratings Mumbai, Heat Exchanger Tubes Mumbai, Boiler Tubes Mumbai,
            Condenser Tubes Mumbai, Hydraulic Tubes Mumbai, Instrumentation Tubes Mumbai, Tool Steel Mumbai, Spring Steel Mumbai,
            Bearing Steel Mumbai, Nickel Alloy Mumbai, Titanium Mumbai, Copper Brass Mumbai, Aluminum Mumbai,
            Steel Manufacturer Mumbai, Steel Exporter India, Steel Importer Mumbai, Quality Steel Supplier India
          </p>
        </div>
      </div>
    </section>
  );
}
