import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

import stainlessSteelPipes from "../assets/stainless-steel-pipes-tubes.jpg";
import carbonSteelPlates from "../assets/carbon-steel-plates-sheets.jpg";
import alloySteelRoundBars from "../assets/alloy-steel-round-bars.jpg";
import stainlessSteelFlanges from "../assets/stainless-steel-flanges.jpg";
import steelPipeFittings from "../assets/steel-pipe-fittings.jpg";
import stainlessSteelCoils from "../assets/stainless-steel-coils.jpg";
import fallbackImage1 from "../assets/fallback-steel-products-1.jpg";
import stainlessSteelFasteners from "../assets/stainless-steel-fasteners.jpg";
import carbonSteelPipes from "../assets/carbon-steel-pipes.jpg";
import alloySteelPlates from "../assets/alloy-steel-plates.jpg";
import stainlessSteelSheets from "../assets/stainless-steel-sheets.jpg";
import steelBarsRods from "../assets/steel-bars-rods.jpg";
import fallbackImage2 from "../assets/fallback-steel-products-2.jpg";
import copperBrassProducts from "../assets/copper-brass-products.jpg";
import aluminumProducts from "../assets/aluminum-products.jpg";
import stainlessSteelWeldedPipes from "../assets/stainless-steel-welded-pipes.jpg";
import carbonSteelSeamlessPipes from "../assets/carbon-steel-seamless-pipes.jpg";
import alloySteelSeamlessPipes from "../assets/alloy-steel-seamless-pipes.jpg";
import stainlessSteelSquareBars from "../assets/stainless-steel-square-bars.jpg";
import carbonSteelFlatBars from "../assets/carbon-steel-flat-bars.jpg";
import alloySteelHexBars from "../assets/alloy-steel-hex-bars.jpg";
import stainlessSteelHollowBars from "../assets/stainless-steel-hollow-bars.jpg";
import stainlessSteelWireRods from "../assets/stainless-steel-wire-rods.jpg";
import chequeredSteelPlates from "../assets/chequered-steel-plates.jpg";
import perforatedSteelSheets from "../assets/perforated-steel-sheets.jpg";
import stainlessSteelWires from "../assets/stainless-steel-wires.jpg";
import stainlessSteelButtweldFittings from "../assets/stainless-steel-buttweld-fittings.jpg";
import socketWeldFittings from "../assets/socket-weld-fittings.jpg";
import compressionTubeFittings from "../assets/compression-tube-fittings.jpg";
import weldNeckFlanges from "../assets/weld-neck-flanges.jpg";
import stainlessSteelAngles from "../assets/stainless-steel-angles.jpg";
import seamlessSteelTubes from "../assets/seamless-steel-tubes.jpg";
import heatExchangerTubes from "../assets/heat-exchanger-tubes.jpg";
import hydraulicTubes from "../assets/hydraulic-tubes.jpg";
import instrumentationTubes from "../assets/instrumentation-tubes.jpg";
import coilTubes from "../assets/coil-tubes.jpg";
import condenserTubes from "../assets/condenser-tubes.jpg";
import boilerTubes from "../assets/boiler-tubes.jpg";
import ssCoilMamta from "../assets/SS COIL MAMTA STEEL TRADERS.jpg";
import ssFlatBarMamta from "../assets/SS FLAT BAR  MAMTA STEEL TRADERS.jpg";
import ssBoltsMamta from "../assets/SS NOTS BOLTS MAMTA STEEL TRADERS.jpg";
import alloySteelMamta from "../assets/ALLOYS STEEL  MAMTA STEEL TRADERS.jpg";
import ssSheetMamta from "../assets/SS SHEET  MAMTA STEEL TRADERS.jpg";
import alloySteelMamta2 from "../assets/ALLOYS STEEL  MAMTA STEEL TRADERS2.jpg";
import copperMamta from "../assets/COPPER MAMTA STEEL TRADERS.jpg";
import aluminiumMamta from "../assets/ALUMINIUM MAMTA STEEL TRADERS.jpg";
import alloySteelMamta0 from "../assets/ALLOYS STEEL MAMTA STEEL TRADERS 0.jpg";
import ssRoundBarMamta from "../assets/SS  ROUND BAR  MAMTA STEEL TRADERS.jpg";
import steelPipeFittingsNew from "../assets/steel-pipe-fittings-new.jpg";
import mildSteelChannelsAngles from "../assets/mild-steel-channels-angles.jpg";
import alloySteelPlatesMamta from "../assets/ALLOYS STEEL  MAMTA STEEL TRADERS.jpg";

// Product names with SEO keywords
const productNames = [
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
  "Boiler Tubes"
];

const productDescriptions = [
  "Premium quality stainless steel pipes and tubes in 304, 316, 316L grades",
  "Durable carbon steel plates and sheets IS 2062 grade",
  "Precision alloy steel round bars EN8, EN9, EN19",
  "Industrial grade stainless steel flanges ANSI, ASME standard",
  "Complete range of steel pipe fittings - elbows, tees, reducers",
  "Quality stainless steel coils with BA, 2B, mirror finish",
  "Structural mild steel channels and angles ISMC, ISMB",
  "Corrosion-resistant stainless steel fasteners A2, A4 grade",
  "Heavy-duty carbon steel pipes API 5L, ASTM A106",
  "High-strength alloy steel plates SA387",
  "Premium finish stainless steel sheets",
  "Versatile steel bars and rods in various shapes",
  "Corrosion-resistant duplex steel 2205, 2507",
  "High-performance nickel alloy Inconel, Monel, Hastelloy",
  "Lightweight titanium Grade 2, Grade 5",
  "Conductive copper and brass tubes, pipes, sheets",
  "Lightweight aluminum 1100, 5052, 6061",
  "High-hardness tool steel D2, H11, H13",
  "Elastic spring steel EN45, EN47",
  "Precision bearing steel EN31, 52100",
  "Seamless welded stainless steel pipes with polished finish",
  "High-pressure carbon steel seamless pipes",
  "Heat-resistant alloy steel seamless pipes P11, P22, P91",
  "Precision stainless steel square bars for fabrication",
  "Versatile carbon steel flat bars",
  "Machining-grade alloy steel hex bars",
  "Lightweight stainless steel hollow bars",
  "Flexible stainless steel wire rods",
  "Corrosion-protected galvanized steel pipes, sheets",
  "Anti-slip chequered steel floor plates",
  "Custom perforated steel sheets for filtration",
  "Industrial expanded metal mesh for fencing",
  "High-quality stainless steel wires",
  "Industrial steel gratings for platforms",
  "Precision buttweld pipe fittings ASME B16.9",
  "High-pressure socket weld fittings",
  "Screwed threaded pipe fittings BSP, NPT",
  "Leak-proof compression tube fittings",
  "High-strength weld neck flanges",
  "Easy-install slip on flanges",
  "Pipeline isolation blind flanges",
  "Screw connection threaded flanges",
  "Versatile lap joint flange systems",
  "Flow measurement orifice flanges",
  "Extended weld neck flanges",
  "Corrosion-resistant stainless steel hex head bolts",
  "Precision stainless steel hex nuts",
  "Load-distributing stainless steel washers",
  "High-strength stainless steel threaded studs",
  "Structural U bolts and J bolts",
  "Versatile stainless steel machine screws",
  "Heavy-duty eye bolts and eye nuts",
  "Precision stud bolts with nuts ASTM A193",
  "High-torque socket head cap screws",
  "Locking set screws and grub screws",
  "Structural stainless steel angles",
  "Load-bearing stainless steel channels",
  "Heavy-duty stainless steel I beams",
  "Versatile stainless steel T bars",
  "High-precision seamless steel tubes",
  "Efficient heat exchanger tubes",
  "High-pressure hydraulic tubes",
  "Precision instrumentation tubes",
  "Flexible coil tube solutions",
  "Thermal condenser tubes",
  "High-temperature boiler tubes"
];

// Image mapping array - matches products with their images
const productImages = [
  stainlessSteelPipes,      // 0
  carbonSteelPlates,        // 1
  alloySteelRoundBars,      // 2
  stainlessSteelFlanges,    // 3
  steelPipeFittingsNew,     // 4 - Steel Pipe Fittings (Card #5)
  ssCoilMamta,              // 5 - Stainless Steel Coils
  mildSteelChannelsAngles,  // 6 - Mild Steel Channels & Angles (Card #7)
  ssBoltsMamta,             // 7 - Stainless Steel Fasteners
  carbonSteelPipes,         // 8
  alloySteelPlates,         // 9 - Alloy Steel Plates (Card #10)
  ssSheetMamta,             // 10 - Stainless Steel Sheets
  steelBarsRods,            // 11
  fallbackImage2,           // 12 - Duplex Steel Products
  alloySteelMamta2,         // 13 - Nickel Alloy Products
  fallbackImage2,           // 14 - Titanium Steel Products
  copperMamta,              // 15 - Copper & Brass Products
  aluminiumMamta,           // 16 - Aluminum Products
  alloySteelMamta0,         // 17 - Tool Steel Products
  fallbackImage2,           // 18 - Spring Steel Products
  ssRoundBarMamta,          // 19 - Bearing Steel Products
  mildSteelChannelsAngles,  // 20 - Stainless Steel Welded Pipes
  mildSteelChannelsAngles,  // 21 - Carbon Steel Seamless Pipes
  mildSteelChannelsAngles,  // 22 - Alloy Steel Seamless Pipes
  mildSteelChannelsAngles,  // 23 - Stainless Steel Square Bars
  mildSteelChannelsAngles,  // 24 - Carbon Steel Flat Bars
  mildSteelChannelsAngles,  // 25 - Alloy Steel Hex Bars
  mildSteelChannelsAngles,  // 26 - Stainless Steel Hollow Bars
  mildSteelChannelsAngles,  // 27 - Stainless Steel Wire Rods
  mildSteelChannelsAngles,  // 28 - Galvanized Steel Products
  mildSteelChannelsAngles,  // 29 - Chequered Steel Plates
  mildSteelChannelsAngles,  // 30 - Perforated Steel Sheets
  mildSteelChannelsAngles,  // 31 - Expanded Metal Mesh
  mildSteelChannelsAngles,  // 32 - Stainless Steel Wires
  mildSteelChannelsAngles,  // 33 - Steel Gratings
  mildSteelChannelsAngles,  // 34 - Stainless Steel Buttweld Fittings
  mildSteelChannelsAngles,  // 35 - Socket Weld Fittings
  mildSteelChannelsAngles,  // 36 - Threaded Pipe Fittings
  mildSteelChannelsAngles,  // 37 - Compression Tube Fittings
  mildSteelChannelsAngles,  // 38 - Weld Neck Flanges
  mildSteelChannelsAngles,  // 39 - Slip On Flanges
  mildSteelChannelsAngles,  // 40 - Blind Flanges
  mildSteelChannelsAngles,  // 41 - Threaded Flanges
  mildSteelChannelsAngles,  // 42 - Lap Joint Flanges
  mildSteelChannelsAngles,  // 43 - Orifice Flanges
  mildSteelChannelsAngles,  // 44 - Long Weld Neck Flanges
  mildSteelChannelsAngles,  // 45 - Stainless Steel Bolts
  mildSteelChannelsAngles,  // 46 - Stainless Steel Nuts
  mildSteelChannelsAngles,  // 47 - Stainless Steel Washers
  mildSteelChannelsAngles,  // 48 - Stainless Steel Studs
  mildSteelChannelsAngles,  // 49 - U Bolts & J Bolts
  mildSteelChannelsAngles,  // 50 - Stainless Steel Screws
  mildSteelChannelsAngles,  // 51 - Eye Bolts & Eye Nuts
  mildSteelChannelsAngles,  // 52 - Stud Bolts & Nuts
  mildSteelChannelsAngles,  // 53 - Socket Head Cap Screws
  mildSteelChannelsAngles,  // 54 - Set Screws & Grub Screws
  mildSteelChannelsAngles,  // 55 - Stainless Steel Angles
  mildSteelChannelsAngles,  // 56 - Stainless Steel Channels
  mildSteelChannelsAngles,  // 57 - Stainless Steel I Beams
  mildSteelChannelsAngles,  // 58 - Stainless Steel T Bars
  mildSteelChannelsAngles,  // 59 - Seamless Steel Tubes
  mildSteelChannelsAngles,  // 60 - Heat Exchanger Tubes
  mildSteelChannelsAngles,  // 61 - Hydraulic Tubes
  mildSteelChannelsAngles,  // 62 - Instrumentation Tubes
  mildSteelChannelsAngles,  // 63 - Coil Tubes
  mildSteelChannelsAngles,  // 64 - Condenser Tubes
  mildSteelChannelsAngles   // 65 - Boiler Tubes
];

export default function ProductShowcase() {
  const [visibleCount, setVisibleCount] = useState(6);

  // Create products array with matched images
  const allProducts = productNames.map((name, index) => ({
    id: index,
    src: productImages[index] || fallbackImage1,
    name: name,
    description: productDescriptions[index],
    alt: `${name} - Mamta Steel Traders Mumbai India ISO Certified ASTM ASME Standard`
  }));

  const displayedImages = allProducts.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, allProducts.length));
  };

  const showLess = () => {
    setVisibleCount(6);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      className="py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      itemScope
      itemType="https://schema.org/ProductCollection"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* SEO Optimized Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4" itemProp="name">
            Premium Quality{" "}
            <span className="text-[#f39c12]">Steel Products</span>{" "}
            & Materials
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-3" itemProp="description">
            Comprehensive Range of Stainless Steel, Carbon Steel, Alloy Steel & Mild Steel Products - 
            Pipes, Tubes, Sheets, Plates, Bars, Flanges, Fittings & More
          </p>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            ISO 9001:2015 Certified | Premium Quality | Mumbai India Stockist
          </p>
        </div>

        {/* Product Grid - Simple and Clean */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayedImages.map((product) => (
            <motion.div
              key={product.id}
              className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: product.id * 0.05 }}
              whileHover={{ y: -5 }}
              data-testid={`product-card-${product.id}`}
              itemScope
              itemType="https://schema.org/Product"
            >
              {/* Image Container with Fixed Aspect Ratio */}
              <div className="relative w-full aspect-[4/3] bg-gray-200 dark:bg-gray-700 overflow-hidden">
                <img 
                  src={product.src} 
                  alt={product.alt}
                  title={product.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading={product.id < 6 ? "eager" : "lazy"}
                  itemProp="image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    console.error(`Failed to load image: ${product.src}`);
                  }}
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="text-base font-bold mb-1" itemProp="name">
                      {product.name}
                    </h3>
                    <p className="text-xs text-gray-200" itemProp="description">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Premium Badge */}
                <div className="absolute top-2 right-2">
                  <span className="bg-[#f39c12] text-white px-2 py-1 rounded-full text-xs font-semibold">
                    Premium
                  </span>
                </div>
              </div>
              
              {/* Product Info */}
              <div className="p-4">
                <h4 className="text-sm font-semibold text-[#0d2b4e] dark:text-blue-400 mb-2 line-clamp-2 group-hover:text-[#f39c12] transition-colors">
                  {product.name}
                </h4>
                <div className="flex gap-2 mb-2">
                  <span className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded">
                    ISO Certified
                  </span>
                  <span className="text-xs bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-2 py-0.5 rounded">
                    Best Price
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Mumbai Stockist | Quality Assured
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More / Show Less Buttons */}
        <div className="flex justify-center gap-4">
          {visibleCount < allProducts.length && (
            <Button
              onClick={loadMore}
              className="bg-[#f39c12] hover:bg-[#e67e22] text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              data-testid="button-show-more"
            >
              Show More Products ({allProducts.length - visibleCount} more) <ChevronDown className="ml-2 w-5 h-5" />
            </Button>
          )}
          
          {visibleCount > 6 && (
            <Button
              onClick={showLess}
              variant="outline"
              className="border-2 border-[#0d2b4e] text-[#0d2b4e] hover:bg-[#0d2b4e] hover:text-white px-8 py-3 rounded-full font-semibold shadow-lg transition-all duration-300"
              data-testid="button-show-less"
            >
              Show Less <ChevronUp className="ml-2 w-5 h-5" />
            </Button>
          )}
        </div>

        {/* Hidden SEO Content */}
        <div className="sr-only" itemScope itemType="https://schema.org/Organization">
          <h3 itemProp="name">Mamta Steel Traders - Steel Products Supplier Mumbai India</h3>
          <p itemProp="description">
            Best Quality Stainless Steel, Carbon Steel, Alloy Steel, Mild Steel Products Supplier Mumbai. 
            ISO 9001:2015 Certified Steel Stockist India. Steel Pipes, Tubes, Sheets, Plates, Bars, Flanges, Fittings Manufacturer.
            ASTM, ASME, IS, DIN, EN standards compliance.
          </p>
          
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="addressLocality">Mumbai</span>, 
            <span itemProp="addressRegion">Maharashtra</span>, 
            <span itemProp="addressCountry">India</span>
          </div>

          <h4>Steel Grades Available:</h4>
          <p>SS 202, 304, 304L, 316, 316L, 321, 310, 347, 904L, Duplex 2205, Super Duplex 2507</p>
          <p>Carbon Steel: IS 2062, EN8, EN9, EN19, EN24, A36, St37, St52</p>
          <p>Alloy Steel: SA387, 16Mo3, C45, Hardox 400, Hardox 500</p>

          <h4>Product Categories:</h4>
          <ul>
            <li>Stainless Steel Seamless Pipes - 304, 316, 316L, 321 ASTM A312</li>
            <li>Carbon Steel Seamless Pipes - API 5L X42, X52, X60, X65</li>
            <li>Alloy Steel Pipes - ASTM A335 P5, P9, P11, P22, P91</li>
            <li>Stainless Steel Sheets & Plates - BA, 2B, No.4, Mirror finish</li>
            <li>Steel Flanges - Weld neck, Slip on, Blind ANSI B16.5</li>
            <li>Steel Fittings - Buttweld, Socket weld ASME B16.9</li>
            <li>Steel Fasteners - Bolts, Nuts, Washers, Studs A2, A4</li>
            <li>Galvanized Products - Hot dip galvanized pipes, sheets</li>
            <li>Nickel Alloy - Inconel, Monel, Hastelloy products</li>
          </ul>

          <h4>Industries Served:</h4>
          <p>Oil & Gas, Petrochemical, Chemical Processing, Power Generation, Pharmaceutical, Food Processing, Construction, Automotive, Aerospace, Marine</p>

          <h4>Quality Certifications:</h4>
          <p>ISO 9001:2015, ASTM Approved, ASME Compliant, Material Test Certificates (MTC) EN 10204 3.1/3.2</p>

          <p itemProp="keywords">
            Steel Supplier Mumbai, Steel Stockist India, Stainless Steel 304 316 Mumbai, Carbon Steel Pipes Mumbai, 
            Steel Sheets Plates Mumbai, Steel Bars Mumbai, Steel Flanges Mumbai, Steel Fittings Mumbai, 
            Best Steel Price Mumbai, ISO Certified Steel Supplier, ASTM Steel Products, ASME Steel Products,
            Seamless Pipes Mumbai, Welded Pipes Mumbai, Round Bars Mumbai, Flat Bars Mumbai,
            Buttweld Fittings Mumbai, Weld Neck Flanges Mumbai, Steel Bolts Mumbai, Steel Nuts Mumbai,
            Galvanized Steel Mumbai, Chequered Plates Mumbai, Tool Steel Mumbai, Spring Steel Mumbai,
            Steel Manufacturer Mumbai, Steel Exporter India, Quality Steel Supplier India
          </p>
        </div>
      </div>
    </section>
  );
}
