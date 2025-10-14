import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Truck, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const productCategories = [
  {
    title: "Stainless Steel Pipes & Tubes",
    icon: "🔧",
    description: "Complete range of SS pipes and tubes in all grades, sizes, and types for industrial, commercial, and residential applications",
    products: [
      "SS 304/304L Seamless Pipes (1/8\" to 24\" NB) - ASTM A312, ASTM A213",
      "SS 316/316L Seamless Pipes (1/8\" to 24\" NB) - ASTM A312, ASTM A213", 
      "SS 310/310S High Temperature Pipes - ASTM A312",
      "SS 321/347 Stabilized Grade Pipes - ASTM A312",
      "SS 904L Super Austenitic Pipes - ASTM A312",
      "Duplex 2205/2507 Pipes - ASTM A790",
      "SS ERW Welded Pipes (1/2\" to 24\" NB) - ASTM A312",
      "SS Seamless Tubes (6mm to 168mm OD) - ASTM A213, A269",
      "Heat Exchanger Tubes (U-Tubes, Straight Tubes) - ASTM A213",
      "Boiler Tubes & Superheater Tubes - ASTM A213",
      "Instrumentation Tubes (1/4\" to 2\" OD) - ASTM A269",
      "Sanitary/Hygienic Tubes - ASTM A270 (Dairy, Pharma, Food Grade)",
      "Condenser Tubes - ASTM A249",
      "Capillary Tubes - ASTM A269",
      "Schedule 5S, 10S, 40S, 80S, 160S Pipes",
      "Precision Tubes (Cold Drawn, Polished)",
      "Square/Rectangular Tubes - All Sizes"
    ]
  },
  {
    title: "Stainless Steel Flanges",
    icon: "⚙️",
    description: "Premium quality SS flanges in all pressure classes, types, and international standards for critical piping applications",
    products: [
      "SS 304/304L Flanges (All Types) - ASTM A182 F304/F304L",
      "SS 316/316L Flanges (All Types) - ASTM A182 F316/F316L",
      "SS 310/321/347/904L Flanges - ASTM A182",
      "Duplex 2205/2507 Flanges - ASTM A182 F51/F53/F55",
      "Weld Neck Flanges (WN) - Class 150 to 2500, PN6 to PN420",
      "Slip-On Flanges (SO/SORF) - All Pressure Classes",
      "Blind Flanges (BL) - Class 150 to 2500",
      "Socket Weld Flanges (SW) - 3000# to 9000#",
      "Threaded/Screwed Flanges (TH) - All Sizes",
      "Lap Joint Flanges (LJ) - All Standards",
      "Spectacle Blind Flanges - All Sizes",
      "Orifice Flanges - RTJ & RF",
      "Long Weld Neck Flanges - ANSI B16.5, B16.47 Series A/B",
      "ANSI/ASME B16.5, B16.47 Flanges (1/2\" to 48\")",
      "DIN/EN Flanges - PN6, PN10, PN16, PN25, PN40, PN64, PN100, PN160, PN250, PN320, PN420",
      "JIS Flanges - 5K, 10K, 16K, 20K, 30K, 40K, 63K",
      "BS4504, BS10, GOST Flanges",
      "Raised Face (RF), Flat Face (FF), RTJ Facing",
      "Custom Flanges - Special Sizes & Ratings"
    ]
  },
  {
    title: "Stainless Steel Sheets & Plates",
    icon: "📋",
    description: "High-grade SS sheets and plates in various finishes, thicknesses, and grades for construction, fabrication, and manufacturing",
    products: [
      "SS 304/304L Sheets (0.3mm to 6mm) - ASTM A240, A480",
      "SS 316/316L Sheets (0.3mm to 6mm) - ASTM A240",
      "SS 310/310S High Temp Sheets - ASTM A240",
      "SS 321/347/904L Sheets - ASTM A240",
      "Duplex 2205/2507 Sheets - ASTM A240",
      "SS 304/304L Plates (6mm to 100mm) - ASTM A240",
      "SS 316/316L Plates (6mm to 100mm) - ASTM A240",
      "Hot Rolled (HR) Plates - 2B, No.1 Finish",
      "Cold Rolled (CR) Sheets - 2B, BA, No.4, No.8 Mirror Finish",
      "Hairline/Satin Finish Sheets - HL No.3, No.4",
      "Mirror/8K Finish Sheets - Decorative Applications",
      "Embossed/Patterned Sheets - Linen, Leather, Diamond",
      "Perforated Sheets - Round, Square, Decorative Holes",
      "Checkered Plates - 2mm to 10mm (Floor Applications)",
      "Shim Sheets - 0.05mm to 3mm Ultra Thin",
      "Coils - 1000mm, 1219mm, 1500mm, 2000mm Width",
      "Cut-to-Size Sheets - Custom Dimensions",
      "Polished Sheets - No.4, No.7, No.8 Finish"
    ]
  },
  {
    title: "Stainless Steel Round Bars",
    icon: "🔩",
    description: "Complete range of SS round bars in all grades and diameters for machining, fabrication, and manufacturing applications",
    products: [
      "SS 304/304L Round Bars (3mm to 350mm Dia) - ASTM A276, A479",
      "SS 316/316L Round Bars (3mm to 350mm Dia) - ASTM A276",
      "SS 310/310S High Temp Bars - ASTM A276",
      "SS 321/347/904L Round Bars - ASTM A276",
      "Duplex 2205/2507 Round Bars - ASTM A479",
      "SS 303 Free Machining Bars - ASTM A582",
      "Bright Bars (Peeled, Ground, Polished) - Precision Tolerance",
      "Black Bars (Hot Rolled, Forged) - ASTM A276",
      "Hexagonal Bars - 5mm to 100mm AF",
      "Square Bars - 10mm to 200mm",
      "Flat Bars (Width: 20mm to 200mm, Thickness: 3mm to 100mm)",
      "Wire Rods - 5.5mm to 38mm Diameter",
      "Forged Bars - ASTM A473, A965",
      "Centerless Ground Bars - h6, h7, h8, h9 Tolerance",
      "Turned & Polished Bars - Ra 0.4 to Ra 1.6 Finish",
      "EN8, EN19, EN24 Equivalent Bars",
      "Shafting Quality Bars - UT Tested"
    ]
  },
  {
    title: "Stainless Steel Fasteners",
    icon: "🔨",
    description: "Marine grade and industrial SS fasteners in all types, grades, and sizes for critical fastening applications",
    products: [
      "SS 304 Fasteners (A2-70, A2-80) - DIN, ISO, ASTM",
      "SS 316 Marine Grade Fasteners (A4-70, A4-80) - ASTM F593, F594",
      "SS 904L Fasteners - Super Corrosion Resistant",
      "Duplex 2205/2507 Fasteners - High Strength",
      "Hex Bolts (M3 to M100) - Full Thread & Partial Thread",
      "Hex Nuts (M3 to M100) - DIN 934, ISO 4032",
      "Studs (M3 to M100) - Full Thread & Tap End",
      "Socket Screws (M3 to M64) - DIN 912, ISO 4762",
      "Washers - Flat, Spring, Lock, Belleville",
      "Anchor Bolts - L-Type, J-Type, Embedded",
      "U-Bolts - Round & Square Bend",
      "Foundation Bolts - Rag Bolts, Anchor Fasteners",
      "Eye Bolts & Eye Nuts - Lifting Applications",
      "T-Bolts & T-Nuts - Industrial Use",
      "Carriage Bolts, Coach Screws",
      "Self-Drilling Screws, Self-Tapping Screws",
      "Wood Screws, Machine Screws",
      "Lock Nuts (Nylon Insert, All Metal)",
      "Castle Nuts, Wing Nuts, Cap Nuts",
      "High Tensile Bolts - Grade 8.8, 10.9, 12.9 SS Equivalent"
    ]
  },
  {
    title: "Stainless Steel Pipe Fittings",
    icon: "🔄",
    description: "Comprehensive range of SS fittings in butt weld, socket weld, and threaded types meeting all international standards",
    products: [
      "SS 304/304L Butt Weld Fittings - ASME B16.9, ASTM A403 WP304/L",
      "SS 316/316L Butt Weld Fittings - ASME B16.9, ASTM A403 WP316/L",
      "SS 310/321/347/904L Fittings - ASME B16.9",
      "Duplex 2205/2507 Fittings - ASTM A815",
      "90° Long Radius Elbows (1/2\" to 48\" NB) - ASME B16.9",
      "45° Elbows (1/2\" to 48\" NB) - ASME B16.9",
      "180° Return Bends - All Sizes",
      "Equal Tees (1/2\" to 48\" NB) - ASME B16.9",
      "Reducing Tees - All Combinations",
      "Concentric Reducers (1/2\" to 48\" NB) - ASME B16.9",
      "Eccentric Reducers (1/2\" to 48\" NB) - ASME B16.9",
      "End Caps (1/2\" to 48\" NB) - ASME B16.9",
      "Stub Ends (1/2\" to 48\" NB) - ASME B16.9, MSS SP-43",
      "Crosses - Equal & Reducing",
      "Lateral Tees, Y-Tees",
      "Socket Weld Fittings (1/8\" to 4\" NB) - ASME B16.11, ASTM A182",
      "Threaded/Screwed Fittings (1/8\" to 4\" NB) - ASME B16.11",
      "Forged Fittings - 3000#, 6000#, 9000# Class",
      "Unions (Socket Weld & Threaded) - ASME B16.11",
      "Couplings (Full & Half) - ASME B16.11",
      "Bushings, Plugs, Nipples - All Types",
      "Compression Fittings - Ferrule Type, Bite Type",
      "Tube Fittings - Single & Double Ferrule",
      "Sanitary Fittings - Tri-Clamp, Dairy Fittings"
    ]
  },
  {
    title: "Stainless Steel Channels & Angles",
    icon: "📐",
    description: "Structural SS channels, angles, and sections for construction, fabrication, and architectural applications",
    products: [
      "SS 304/316L Channels - ISMC, ISMCP, UPN, UPE",
      "SS Equal Angles (25x25mm to 200x200mm) - ASTM A276",
      "SS Unequal Angles (30x20mm to 200x100mm)",
      "SS I-Beams (ISMB, IPE, INP) - All Sizes",
      "SS H-Beams (Wide Flange Beams) - All Sizes",
      "SS T-Sections - Custom Sizes",
      "SS U-Channels - Custom Profiles",
      "Cold Formed Channels - Light & Heavy Duty",
      "Hot Rolled Channels - Structural Grade",
      "Perforated Channels - Slotted Channels",
      "Back-to-Back Channels",
      "Thickness: 2mm to 25mm Available"
    ]
  },
  {
    title: "Nickel Alloys & Special Grades",
    icon: "⚡",
    description: "High-performance nickel alloys and special stainless steel grades for extreme conditions and critical applications",
    products: [
      "Inconel 600/601/625/718/800/825 (Pipes, Flanges, Fittings, Bars, Sheets)",
      "Hastelloy C276/C22/B2/B3/X (All Forms)",
      "Monel 400/K500 (Pipes, Flanges, Fittings, Fasteners)",
      "Incoloy 800/800H/800HT/825/925",
      "Alloy 20 (Carpenter 20Cb3) - Pipes, Flanges, Fittings",
      "Nickel 200/201 - Pure Nickel Products",
      "Nimonic 75/80A/90 - High Temperature Applications",
      "Titanium Gr 2, Gr 5 - Pipes, Sheets, Bars",
      "Cupro Nickel 90/10, 70/30 - Marine Applications",
      "Aluminium Bronze, Phosphor Bronze",
      "SS 17-4 PH, 15-5 PH - Precipitation Hardening",
      "SS 410, 420, 440C - Martensitic Grades",
      "SS 430, 409L - Ferritic Grades"
    ]
  },
  {
    title: "Specialty Products & Accessories",
    icon: "🛠️",
    description: "Specialized SS products, valves, instruments, and accessories for complete piping and industrial solutions",
    products: [
      "SS Valves (Ball, Gate, Globe, Check, Butterfly, Needle)",
      "SS Instrumentation Valves & Manifolds",
      "SS Hose & Flexible Connections - Metal Hoses, Expansion Joints",
      "SS Wire (0.1mm to 10mm) - Soft, Hard, Spring Wire",
      "SS Wire Mesh & Wire Cloth - 10 to 400 Mesh",
      "SS Perforated Sheets - Round, Square, Slotted Holes",
      "SS Gratings & Floor Plates",
      "SS Buttweld Outlets - Weldolets, Sockolets, Threadolets",
      "SS Orifice Flanges & Plates",
      "SS Spectacle Blinds & Spacers",
      "SS Strainers & Filters - Y-Type, Basket Type",
      "SS Gaskets (Spiral Wound, Ring Joint, Solid Metal)",
      "SS Clamps & Hangers - Pipe Support Systems",
      "SS Bellow Joints & Compensators",
      "SS Nozzles, Diffusers, Spray Balls",
      "SS Pressure Gauges & Temperature Sensors",
      "SS Sampling Systems & Sample Coolers",
      "SS Traps (Steam, Condensate, Thermodynamic)",
      "SS Sight Glasses & Level Gauges",
      "SS Quick Couplings & Camlock Fittings"
    ]
  }
];

export default function Products() {
  return (
    <>
      <SEOHead
        title="SS Products | Stainless Steel Products | Steel Pipe | Flange | Sheets Plates | Round Bar | Fasteners | Fittings | Channels | Angles | All Sizes All Grades | Mamta Steel Traders Mumbai India"
        description="World's largest stainless steel products catalog by Mamta Steel Traders Mumbai. #1 supplier of SS 304, 316, 310 pipes, tubes, flanges, fittings, sheets, plates, round bars, fasteners, channels, angles in all sizes & grades. Serving all India & worldwide for industrial machinery, bridges, construction, pools, oil & gas, chemical, marine, pharmaceutical industries. All ASTM, ASME, ANSI, DIN standards available. Contact: +91 9819322576, +91 9867958210"
        keywords="ss products, stainless steel products, steel products, steel pipe, ss pipe, stainless steel pipe, seamless pipe, welded pipe, ERW pipe, ss tube, stainless steel tube, instrumentation tube, heat exchanger tube, boiler tube, ss flange, stainless steel flange, steel flange, weld neck flange, slip on flange, blind flange, socket weld flange, threaded flange, ANSI flange, DIN flange, JIS flange, class 150 flange, class 300 flange, class 600 flange, PN16 flange, PN25 flange, PN40 flange, ss sheets, stainless steel sheets, steel sheets, ss plates, stainless steel plates, steel plates, checkered plates, perforated sheets, mirror finish sheets, hairline finish, 2B finish, BA finish, hot rolled sheets, cold rolled sheets, ss round bar, stainless steel round bar, steel round bar, bright bar, black bar, ss hex bar, ss square bar, ss flat bar, ss fasteners, stainless steel fasteners, steel fasteners, ss bolts, ss nuts, ss studs, ss washers, A2 bolts, A4 bolts, A2-70, A4-70, marine fasteners, ss fittings, stainless steel fittings, pipe fittings, butt weld fittings, socket weld fittings, threaded fittings, elbow, tee, reducer, coupling, union, stub end, ss channels, stainless steel channels, steel channels, ss angles, stainless steel angles, steel angles, ISMC channel, ss 304, ss 316, ss 310, ss 321, ss 347, ss 904L, duplex 2205, duplex 2507, SS 304L, SS 316L, SS 310S, austenitic steel, ferritic steel, martensitic steel, duplex steel, super duplex steel, ASTM A312, ASTM A213, ASTM A269, ASTM A270, ASTM A312 pipe, ASTM A213 tube, ASTM A182 flanges, ASTM A403 fittings, ASTM A240 sheets, ASTM A276 bars, ASTM F593 fasteners, ASME B16.9, ASME B16.11, ASME B16.5, ASME B16.47, ANSI B16.5, DIN 2527, DIN 2576, DIN 2633, JIS B2220, BS 4504, BS10 table D, GOST 12821, nickel alloys, Inconel, Hastelloy, Monel, Incoloy, Alloy 20, Inconel 600, Inconel 625, Inconel 718, Hastelloy C276, Monel 400, titanium, cupro nickel, steel supplier, ss supplier, stainless steel supplier, steel stockist, ss stockist, steel distributor, steel dealer, steel manufacturer, steel exporter, Mumbai steel, India steel, steel India, steel Mumbai, industrial steel, construction steel, machinery steel, bridge steel, pool steel, marine steel, offshore steel, oil gas steel, petrochemical steel, chemical steel, pharmaceutical steel, food grade steel, dairy steel, brewery steel, power plant steel, boiler steel, refinery steel, mining steel, cement steel, fertilizer steel, automotive steel, aerospace steel, defense steel, nuclear steel, cryogenic steel, LNG steel, steel for machines, steel for bridges, steel for construction, steel for swimming pools, steel for industrial machinery, steel for equipment manufacturing, steel for building, steel for infrastructure, steel for plants, steel for factories, steel for refineries, steel for power generation, seamless pipes, welded pipes, ERW pipes, heat exchanger tubes, boiler tubes, condenser tubes, sanitary tubes, precision tubes, hydraulic tubes, square tubes, rectangular tubes, capillary tubes, weld neck flanges, slip on flanges, blind flanges, socket weld flanges, threaded flanges, lap joint flanges, spectacle blinds, orifice flanges, long weld neck, raised face, flat face, RTJ, ring type joint, hot rolled plates, cold rolled sheets, mirror polish, hairline finish, 2B finish, BA finish, No.4 finish, No.8 finish, satin finish, embossed sheets, patterned sheets, diamond plate, bright bars, black bars, peeled bars, ground bars, polished bars, forged bars, hex bars, square bars, flat bars, wire rods, hex bolts, hex nuts, studs, socket screws, washers, spring washers, lock washers, U bolts, anchor bolts, eye bolts, foundation bolts, self drilling screws, wood screws, machine screws, 90 degree elbow, 45 degree elbow, equal tee, reducing tee, concentric reducer, eccentric reducer, end cap, stub end, cross, lateral tee, socket weld elbow, socket weld tee, threaded elbow, threaded tee, union, coupling, half coupling, bushing, plug, nipple, compression fittings, ferrule fittings, sanitary fittings, tri clamp, ISMC channel, equal angles, unequal angles, I beams, H beams, T sections, U channels, structural steel, all sizes, all grades, all standards, ASTM, ASME, ANSI, API, AWS, DIN, EN, JIS, BS, GOST, ISO, MSS, NACE, custom sizes, cut to size, made to order, stock available, immediate delivery, all India delivery, all India supply, Mumbai office, Maharashtra, pan India, nationwide delivery, export quality, international standards, mill test certificate, MTC, material certificate, EN 10204 3.1, EN 10204 3.2, NACE MR0175, heat treatment, solution annealing, stress relieving, passivation, electropolishing, pickling, UT tested, PMI tested, hydrostatic tested, pressure tested, leak tested, radiography tested, NDT tested, quality certified, ISO 9001, ISO 14001, API certified, CE marked, PED approved, ATEX certified, marine approved, Lloyd's certified, ABS certified, DNV certified, BV certified, oil and gas approved, chemical resistant, corrosion resistant, high temperature, high pressure, cryogenic service, sour service, hydrogen service, seawater resistant, brine resistant, acid resistant, caustic resistant, chloride resistant, pitting resistant, stress corrosion cracking resistant, SCC resistant, inter granular corrosion resistant, erosion resistant, oxidation resistant, carburization resistant, best price, competitive price, wholesale price, bulk supply, project supply, turnkey supply, EPC supply, urgent delivery, emergency supply, critical supply, breakdown supply, shutdown supply, maintenance supply, spare parts, consumables, MRO supply, inventory management, vendor managed inventory, VMI, consignment stock, just in time, JIT delivery, technical support, material selection, grade selection, application engineering, design support, value engineering, cost optimization, quality assurance, third party inspection, witness testing, factory inspection, mill inspection, customer satisfaction, trusted supplier, reliable supplier, authorized dealer, approved vendor, preferred supplier, ISO certified supplier, API certified supplier, leading supplier, top supplier, best supplier, largest stockist, biggest dealer, premium quality, superior quality, export quality, international quality, genuine products, authentic products, traceable products, tested products, certified products, guaranteed products, warranty products, Mamta Steel Traders, MST Mumbai, Mumbai steel supplier, Maharashtra steel, India steel supplier, steel India supplier, stainless steel India, SS India, 304 supplier, 316 supplier, pipe supplier, flange supplier, fitting supplier, fastener supplier, sheet supplier, plate supplier, bar supplier, contact steel supplier, phone +91 9819322576, phone +91 9867958210, email mamtasteeltraders@gmail.com, Mumbai MH office, Mumbai Maharashtra, India office, nationwide delivery India, all India services, steel for construction companies, steel for machine manufacturers, steel for bridge construction, steel for swimming pool, steel for industrial equipment, steel for oil rigs, steel for offshore platforms, steel for chemical plants, steel for refineries, steel for power plants, steel for pharmaceutical plants, steel for food processing, steel for dairy industry, steel for water treatment, steel for desalination, steel for marine vessels, steel for shipbuilding, steel for naval applications, steel for mining equipment, steel for cement plants, steel for fertilizer plants, steel for automotive industry, steel for aerospace, steel for defense, steel for nuclear plants, industrial applications, commercial applications, residential applications, infrastructure projects, construction projects, fabrication projects, manufacturing projects, engineering projects, piping projects, mechanical projects, instrumentation projects, process piping, utility piping, steam piping, condensate piping, cooling water, chilled water, hot water, seawater piping, brine piping, acid piping, caustic piping, chemical piping, pneumatic piping, hydraulic piping, fire fighting piping, sprinkler systems, HVAC systems, plumbing systems, drainage systems, vent piping, flare systems, process equipment, pressure vessels, heat exchangers, boilers, economizers, superheaters, condensers, coolers, reactors, columns, towers, tanks, storage tanks, day tanks, expansion tanks, drums, receivers, separators, filters, strainers, mixers, agitators, pumps, compressors, turbines, engines, generators, motors, conveyors, crushers, mills, kilns, furnaces, ovens, dryers, evaporators, crystallizers, distillation units, absorption units, extraction units, platforms, structures, skids, modules, packages, handrails, walkways, staircases, ladders, supports, brackets, frames, enclosures, cabinets, panels, doors, windows, partitions, cladding, roofing, siding, fascia, soffit, gutters, downspouts, architectural applications, decorative applications, aesthetic applications, functional applications, critical applications, high performance applications, demanding applications, severe service, extreme conditions, harsh environments, corrosive atmospheres, high temperatures, low temperatures, cryogenic temperatures, elevated pressures, vacuum service, ultra high purity, clean room applications, sterile applications, hygienic applications, food contact, pharmaceutical contact, potable water, drinking water, pure water, DM water, RO water, treated water, raw water, wastewater, effluent, sewage, slurry, pulp, ore, concentrate, catalyst, chemicals, solvents, acids, alkalis, salts, gases, liquids, solids, steam, condensate, refrigerants, coolants, lubricants, fuels, oils, petroleum products, petrochemicals, polymers, plastics, resins, rubbers, paints, coatings, adhesives, sealants, detergents, surfactants, bleaches, oxidizers, reducers, neutralizers, inhibitors, additives, world class products, international quality products, global standards, export standards, imported quality, premium grade, superior grade, commercial grade, industrial grade, marine grade, nuclear grade, pharmaceutical grade, food grade, sanitary grade, medical grade, instrument grade, precision grade, engineering grade, structural grade, construction grade, architectural grade, decorative grade, functional grade, utility grade, economy grade, standard grade, custom grade, special grade, exotic grade, high performance grade, heavy duty grade, light duty grade, general purpose, specific purpose, single purpose, multi purpose, all purpose, universal grade"
        canonicalUrl="/products"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Complete Stainless Steel Products Catalog - All Sizes All Grades",
          "description": "Comprehensive SS products: pipes, tubes, flanges, fittings, sheets, plates, bars, fasteners, channels, angles in all sizes and grades",
          "provider": {
            "@type": "Organization",
            "name": "Mamta Steel Traders",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "addressCountry": "India"
            },
            "telephone": ["+91-9819322576", "+91-9867958210"],
            "email": "mamtasteeltraders@gmail.com"
          }
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Hero Section with Gradient */}
        <section className="relative bg-gradient-to-r from-navy-primary via-navy-secondary to-navy-primary text-white py-16 sm:py-20 lg:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnpNMCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight" data-testid="text-products-hero-title">
                Complete Stainless Steel Products
                <span className="block text-orange-400 mt-2">All Sizes • All Grades • All Standards</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto" data-testid="text-products-hero-subtitle">
                India's Largest Stockist of SS 304, 316, 310 Pipes, Tubes, Flanges, Fittings, Sheets, Plates, Round Bars, Fasteners, Channels & Angles. Serving Industries Worldwide for Construction, Machinery, Bridges, Pools, Oil & Gas, Chemical, Marine, Pharmaceutical Applications.
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <a href="tel:+919819322576" className="text-white hover:text-orange-400 transition-colors font-medium" data-testid="link-phone-1">
                    +91 9819322576
                  </a>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <a href="tel:+919867958210" className="text-white hover:text-orange-400 transition-colors font-medium" data-testid="link-phone-2">
                    +91 9867958210
                  </a>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <a href="mailto:mamtasteeltraders@gmail.com" className="text-white hover:text-orange-400 transition-colors font-medium" data-testid="link-email">
                    mamtasteeltraders@gmail.com
                  </a>
                </div>
              </div>

              {/* Location & Service Area */}
              <div className="flex flex-wrap justify-center gap-6 text-gray-200">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <span className="font-medium">Mumbai (MH) Office</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-5 h-5 text-orange-400" />
                  <span className="font-medium">All India Delivery & Services</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
              {productCategories.map((category, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-orange-500" data-testid={`product-category-card-${index}`}>
                  <CardContent className="p-6 sm:p-8">
                    <div className="text-4xl sm:text-5xl mb-4">{category.icon}</div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3 group-hover:text-orange-600 transition-colors" data-testid={`product-category-title-${index}`}>
                      {category.title}
                    </h2>
                    <p className="text-gray-600 mb-6 leading-relaxed" data-testid={`product-category-description-${index}`}>
                      {category.description}
                    </p>
                    <ul className="space-y-2.5">
                      {category.products.map((product, productIndex) => (
                        <li 
                          key={productIndex} 
                          className="flex items-start gap-3 text-sm text-gray-700 group/item"
                          data-testid={`product-item-${index}-${productIndex}`}
                        >
                          <CheckCircle2 className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                          <span className="leading-relaxed">{product}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Standards & Certifications */}
        <section className="bg-gradient-to-r from-slate-100 to-blue-100 py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-slate-800 mb-8">
                International Standards & Certifications
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {['ASTM', 'ASME', 'ANSI', 'DIN', 'EN', 'JIS', 'BS', 'GOST', 'API', 'AWS', 'MSS', 'NACE', 'ISO 9001', 'ISO 14001', 'CE', 'PED'].map((standard, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 text-center font-bold text-slate-700 shadow-md hover:shadow-xl transition-shadow border-2 border-transparent hover:border-orange-500">
                    {standard}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-slate-800 mb-4">
                Industries & Applications We Serve
              </h2>
              <p className="text-center text-gray-600 mb-12 text-lg">
                Our stainless steel products are used worldwide in critical applications
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {[
                  'Oil & Gas', 'Chemical Processing', 'Petrochemical', 'Marine & Offshore', 
                  'Power Generation', 'Pharmaceutical', 'Food & Dairy', 'Construction',
                  'Bridge Building', 'Swimming Pools', 'Industrial Machinery', 'Equipment Manufacturing',
                  'Water Treatment', 'Desalination', 'Pulp & Paper', 'Mining',
                  'Cement Plants', 'Fertilizer', 'Automotive', 'Aerospace',
                  'Defense', 'Nuclear', 'Cryogenic', 'Semiconductor',
                  'Architecture', 'Infrastructure', 'Shipbuilding', 'Railway',
                  'HVAC Systems', 'Fire Fighting', 'Pressure Vessels', 'Heat Exchangers',
                  'Boilers', 'Refineries', 'Gas Processing'
                ].map((industry, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-white to-orange-50 rounded-lg p-3 text-center text-sm font-semibold text-slate-700 shadow hover:shadow-lg transition-all hover:scale-105 border border-orange-200">
                    {industry}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
                Get Best Prices & Immediate Delivery
              </h2>
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                Contact Mamta Steel Traders for competitive quotes, technical specifications, material certificates, and all India delivery of stainless steel products. Our expert team provides complete support for material selection, grade recommendation, and project requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-8 shadow-lg hover:shadow-xl transition-all"
                    data-testid="button-contact-expert"
                  >
                    Get Quotation Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <a href="tel:+919819322576">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-2 border-white text-white hover:bg-white hover:text-navy-primary px-8 transition-all"
                    data-testid="button-call-now"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call: +91 9819322576
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
