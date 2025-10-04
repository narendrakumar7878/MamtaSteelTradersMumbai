import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Factory, Truck, Globe, Clock, Settings, Wrench, Target, Package, Users, Zap, Gauge, Cog, Hammer, HardHat, Building, Router, Layers, Grid, Scale, Lock, Unlock, Bolt, Circle, Square, Box } from "lucide-react";
import { Link } from "wouter";

export default function PTOPins() {
  const specifications = [
    "ASTM A193 Grade B7 - High Tensile Alloy Steel Bolting Material for PTO Applications",
    "ASTM A320 Grade L7 - Low Temperature Service Bolting Material for Cold Environments",
    "ASTM A307 Grade A - Carbon Steel Bolts and Studs for General Applications",
    "ISO 898-1 - Property Classes for Bolts, Screws and Studs with Mechanical Properties",
    "ISO 2340 - Clevis Pins with Head for Agricultural Equipment Applications", 
    "ISO 2341 - Clevis Pins without Head for Industrial Applications",
    "DIN 1444 - Clevis Pins, Unhardened for General Purpose Applications",
    "DIN 1445 - Clevis Pins, Hardened for Heavy Duty Applications",
    "SAE J715 - PTO Driveline and Universal Joint Standards for Agricultural Equipment",
    "ASABE S203.14 - Agricultural Machinery PTO Safety Standards and Requirements",
    "Material Options: Mild Steel 1018, Stainless Steel 304/316, Alloy Steel 4140, Spring Steel 1095",
    "Finish Options: Zinc Plated, Hot Dip Galvanized, Stainless Steel Natural, Black Oxide, Chrome Plated",
    "Size Range: 6mm to 64mm diameter (1/4 inch to 2-1/2 inch)",
    "Length Range: 25mm to 500mm (1 inch to 20 inch)",
    "Thread Types: Metric Coarse (M), Metric Fine (MF), UNC, UNF, BSW, BSF",
    "Hardness Range: Rockwell B 70-85 for pin body, Rockwell C 45-50 for spring components",
    "Tensile Strength: 400-1200 MPa depending on material grade",
    "Shear Strength: 5kN to 200kN depending on diameter and material",
    "Corrosion Resistance: 500+ hours salt spray test (ASTM B117)",
    "Temperature Range: -40°C to +200°C operational temperature",
    "Safety Factor: 5:1 for working load vs ultimate strength",
    "Tolerance: ±0.05mm dimensional accuracy as per DIN standards"
  ];

  const comprehensivePTOPinTypes = [
    {
      category: "Standard PTO Lock Pins",
      types: [
        "Round PTO Lock Pins", "Square PTO Lock Pins", "Wire Lock PTO Pins", "D-Shaped PTO Pins",
        "Heavy Duty PTO Pins", "Light Duty PTO Pins", "Quick Release PTO Pins", "Standard Length PTO Pins",
        "Extended Length PTO Pins", "Short PTO Pins", "Custom PTO Pins", "Forged PTO Pins",
        "CNC Machined PTO Pins", "Threaded PTO Pins", "Smooth PTO Pins", "Grooved PTO Pins"
      ],
      applications: "Tractor PTO shafts, power transmission, agricultural implements, farm machinery",
      description: "Standard quick-release wire lock pins for PTO shaft applications",
      specifications: "6mm to 64mm diameter, various lengths, zinc plated or galvanized finish",
      priceRange: "₹7 to ₹50 per piece depending on size and material"
    },
    {
      category: "Shaft Locking Pins & Wire Lock Pins",
      types: [
        "Shaft Locking Pins Round", "Shaft Locking Pins Square", "Wire Lock Pins", "Spring Wire Pins",
        "Double Wire Lock Pins", "Single Wire Lock Pins", "Over-Center Wire Pins", "Tab Lock Pins",
        "Ball Lock Pins", "Push Button Lock Pins", "Snap Lock Pins", "Quick Lock Pins",
        "Safety Wire Pins", "Retainer Pins", "Keeper Pins", "Securing Pins"
      ],
      applications: "Industrial machinery, automation equipment, shaft connections, quick assemblies",
      description: "Advanced locking mechanisms with spring-loaded wire systems",
      specifications: "Tolerance ±0.05mm, mild steel construction, polished finish",
      priceRange: "₹10 to ₹75 per piece for specialty locking mechanisms"
    },
    {
      category: "Linch Pins & Lynch Pins",
      types: [
        "Standard Linch Pins", "Heavy Duty Linch Pins", "Lynch Pins", "Clevis Pins with Linch",
        "Bent Arm Linch Pins", "Straight Arm Linch Pins", "Quick Release Linch Pins", "Safety Linch Pins",
        "Galvanized Linch Pins", "Stainless Steel Linch Pins", "Custom Linch Pins", "Automotive Linch Pins",
        "Marine Grade Linch Pins", "Agricultural Linch Pins", "Industrial Linch Pins", "Precision Linch Pins"
      ],
      applications: "Wheel securing, component retention, trailer hitches, agricultural equipment",
      description: "Traditional linch pins for securing wheels and components on shafts",
      specifications: "6-12mm diameter, 50-150mm length, zinc-plated finish, steel construction",
      priceRange: "₹5 to ₹25 per piece for standard linch pins"
    },
    {
      category: "Hitch Pins & Implement Pins",
      types: [
        "Hitch Pins", "Trailer Hitch Pins", "Implement Mounting Pins", "Three-Point Hitch Pins",
        "Top Link Pins", "Lower Link Pins", "Center Axle Pins", "Tiller Pins", "Coupler Pins",
        "Receiver Pins", "Draw Bar Pins", "Lift Arm Pins", "Stabilizer Pins", "Draft Link Pins",
        "Quick Attach Pins", "Loader Pins", "Backhoe Pins", "Excavator Pins"
      ],
      applications: "Three-point hitches, trailer connections, implement attachments, heavy equipment",
      description: "Heavy duty pins for tractor and implement connections",
      specifications: "High shear strength, various head types, automotive grade materials",
      priceRange: "₹15 to ₹100 per piece for heavy duty applications"
    },
    {
      category: "Specialty & Custom Pins",
      types: [
        "Safety Pins Industrial", "Pin and Sleeve Socket Lockout", "Ball Lock Quick Release Pins", 
        "Spring Loaded Detent Pins", "Indexing Pins", "Positioning Pins", "Locating Pins", "Dowel Pins",
        "Taper Pins", "Roll Pins", "Split Pins", "Cotter Pins", "Hair Pins", "R-Clips",
        "E-Clips", "Circlips", "Retaining Rings", "Snap Rings", "Custom Machined Pins", "Special Alloy Pins"
      ],
      applications: "Precision machinery, jigs and fixtures, safety lockout, specialized equipment",
      description: "Specialized pins for unique industrial and safety applications",
      specifications: "Custom materials, special heat treatment, precision tolerances available",
      priceRange: "₹20 to ₹200 per piece for custom specifications"
    }
  ];

  const detailedSizeChart = [
    { diameter: "6mm (1/4\")", length: "25-80mm", material: "Mild Steel", finish: "Zinc Plated", shearStrength: "5 kN", weight: "10-20g", priceRange: "₹7-12", applications: "Light agricultural equipment" },
    { diameter: "8mm (5/16\")", length: "30-100mm", material: "Mild Steel", finish: "Galvanized", shearStrength: "8 kN", weight: "15-30g", priceRange: "₹10-18", applications: "Medium farm implements" },
    { diameter: "10mm (3/8\")", length: "35-120mm", material: "Mild Steel", finish: "Zinc Plated", shearStrength: "12 kN", weight: "20-40g", priceRange: "₹12-20", applications: "Standard PTO connections" },
    { diameter: "12mm (1/2\")", length: "40-150mm", material: "Mild Steel", finish: "Polished", shearStrength: "18 kN", weight: "25-50g", priceRange: "₹15-25", applications: "Heavy duty tractors" },
    { diameter: "14mm (9/16\")", length: "45-180mm", material: "Alloy Steel", finish: "Black Oxide", shearStrength: "25 kN", weight: "35-65g", priceRange: "₹20-35", applications: "Industrial machinery" },
    { diameter: "16mm (5/8\")", length: "50-200mm", material: "Stainless Steel", finish: "Natural", shearStrength: "32 kN", weight: "40-75g", priceRange: "₹25-45", applications: "Marine applications" },
    { diameter: "20mm (3/4\")", length: "60-250mm", material: "Alloy Steel", finish: "Chrome Plated", shearStrength: "50 kN", weight: "60-120g", priceRange: "₹35-60", applications: "Heavy construction equipment" },
    { diameter: "25mm (1\")", length: "80-300mm", material: "High Tensile Steel", finish: "Hot Dip Galvanized", shearStrength: "80 kN", weight: "100-200g", priceRange: "₹50-90", applications: "Mining equipment" },
    { diameter: "30mm (1-1/8\")", length: "100-350mm", material: "Stainless Steel 316", finish: "Passivated", shearStrength: "110 kN", weight: "150-300g", priceRange: "₹75-150", applications: "Offshore equipment" },
    { diameter: "32mm (1-1/4\")", length: "120-400mm", material: "Alloy Steel 4140", finish: "Heat Treated", shearStrength: "130 kN", weight: "200-400g", priceRange: "₹100-180", applications: "Heavy industrial applications" },
    { diameter: "40mm (1-1/2\")", length: "150-450mm", material: "High Strength Steel", finish: "Zinc Nickel Plated", shearStrength: "200 kN", weight: "300-600g", priceRange: "₹150-250", applications: "Extreme duty applications" },
    { diameter: "50mm (2\")", length: "200-500mm", material: "Custom Alloy", finish: "Special Coating", shearStrength: "300 kN", weight: "500-1000g", priceRange: "₹200-400", applications: "Custom heavy machinery" }
  ];

  const comprehensiveApplications = [
    {
      industry: "Agricultural & Farm Equipment",
      applications: [
        "Tractor PTO Shafts", "Power Take-Off Connections", "Implement Attachments", "Three-Point Hitches",
        "Top Link Connections", "Lower Link Pins", "Draft Control Systems", "Hydraulic Connections",
        "Rotary Cutters", "Bush Hogs", "Disc Harrows", "Cultivators", "Seed Drills", "Manure Spreaders",
        "Hay Balers", "Mowers", "Rakes", "Tedders", "Plows", "Tillers", "Post Hole Diggers"
      ],
      benefits: "Weather resistance, quick implement changes, operator safety, long service life",
      specifications: "Agricultural grade materials, corrosion protection, SAE J715 compliance",
      commonSizes: "8mm to 20mm diameter, zinc plated finish",
      priceRange: "₹10-50 per piece"
    },
    {
      industry: "Construction & Heavy Equipment",
      applications: [
        "Excavator Buckets", "Loader Attachments", "Backhoe Connections", "Bulldozer Blades",
        "Grader Attachments", "Compactor Systems", "Crane Hooks", "Rigging Hardware",
        "Scaffolding Connections", "Formwork Systems", "Concrete Equipment", "Pumping Systems",
        "Drilling Rigs", "Pile Drivers", "Pavers", "Road Equipment", "Mining Machinery"
      ],
      benefits: "High shear strength, impact resistance, extreme duty ratings, safety compliance",
      specifications: "Construction grade materials, hardened pins, OSHA compliant",
      commonSizes: "12mm to 40mm diameter, various finishes",
      priceRange: "₹25-200 per piece"
    },
    {
      industry: "Industrial Machinery & Automation",
      applications: [
        "Conveyor Systems", "Material Handling Equipment", "Assembly Lines", "Robotic Systems",
        "Pneumatic Cylinders", "Hydraulic Systems", "Packaging Equipment", "Food Processing",
        "Textile Machinery", "Printing Equipment", "Automation Systems", "Safety Interlocks",
        "Machine Tools", "CNC Equipment", "Press Brakes", "Stamping Machines", "Welding Fixtures"
      ],
      benefits: "Precision fit, reliable operation, maintenance free, safety lockout capability",
      specifications: "Industrial standards, precision tolerances, various materials",
      commonSizes: "6mm to 25mm diameter, precision manufactured",
      priceRange: "₹15-100 per piece"
    },
    {
      industry: "Automotive & Transportation",
      applications: [
        "Trailer Hitches", "Ball Couplers", "Pintle Hitches", "Receiver Hitches", "Draw Bars",
        "Safety Chains", "Tongue Jacks", "Landing Gear", "Fifth Wheels", "Gooseneck Hitches",
        "Weight Distribution", "Sway Control", "Brake Systems", "Suspension Components",
        "Steering Linkages", "Engine Mounts", "Transmission Mounts", "Exhaust Hangers"
      ],
      benefits: "DOT compliance, automotive grade materials, crash tested, corrosion resistance",
      specifications: "Automotive standards, high strength steel, certified testing",
      commonSizes: "10mm to 32mm diameter, various head types",
      priceRange: "₹20-80 per piece"
    },
    {
      industry: "Marine & Offshore Equipment",
      applications: [
        "Boat Trailers", "Dock Hardware", "Anchor Systems", "Winch Mechanisms", "Sail Rigging",
        "Deck Equipment", "Mooring Systems", "Lifting Equipment", "Offshore Platforms",
        "Marine Cranes", "Ship Building", "Port Equipment", "Submarine Systems", "Naval Equipment",
        "Coast Guard Equipment", "Fishing Equipment", "Yacht Hardware", "Marina Equipment"
      ],
      benefits: "Corrosion resistance, saltwater protection, marine rated, MIL-SPEC compliance",
      specifications: "Marine grade stainless steel, special coatings, DNV certified",
      commonSizes: "8mm to 50mm diameter, stainless steel construction",
      priceRange: "₹30-300 per piece"
    },
    {
      industry: "Power Generation & Transmission",
      applications: [
        "Wind Turbine Systems", "Solar Panel Mounting", "Power Plant Equipment", "Transmission Towers",
        "Substation Equipment", "Generator Mounts", "Transformer Systems", "Switch Gear",
        "Control Panels", "Cable Management", "Grounding Systems", "Lightning Protection",
        "Hydroelectric Equipment", "Nuclear Plant Hardware", "Thermal Plant Components"
      ],
      benefits: "Electrical compatibility, weather resistance, high reliability, maintenance free",
      specifications: "Power industry standards, environmental resistance, certified quality",
      commonSizes: "12mm to 40mm diameter, special alloys available",
      priceRange: "₹40-250 per piece"
    },
    {
      industry: "Mining & Quarrying Equipment",
      applications: [
        "Crushers", "Screens", "Conveyors", "Loaders", "Dump Trucks", "Drilling Equipment",
        "Blasting Equipment", "Processing Plants", "Sorting Equipment", "Washing Plants",
        "Magnetic Separators", "Flotation Equipment", "Grinding Mills", "Ball Mills",
        "SAG Mills", "Thickeners", "Filters", "Pumps", "Compressors", "Ventilation Systems"
      ],
      benefits: "Abrasion resistance, impact strength, dust protection, extreme duty capability",
      specifications: "Mining grade materials, special heat treatment, certified for underground use",
      commonSizes: "16mm to 50mm diameter, hardened construction",
      priceRange: "₹60-400 per piece"
    },
    {
      industry: "Railway & Transportation Infrastructure",
      applications: [
        "Rail Car Couplers", "Brake Systems", "Suspension Components", "Door Mechanisms",
        "Window Systems", "Seating Hardware", "Luggage Racks", "Safety Equipment",
        "Signal Equipment", "Track Maintenance", "Overhead Line Equipment", "Platform Hardware",
        "Station Equipment", "Terminal Systems", "Yard Equipment", "Locomotive Components"
      ],
      benefits: "Railway standards compliance, passenger safety, weather resistance, long service life",
      specifications: "Railway grade materials, crash tested, fire resistant coatings",
      commonSizes: "10mm to 32mm diameter, certified for railway use",
      priceRange: "₹25-150 per piece"
    }
  ];

  const pinAdvantages = [
    {
      title: "Quick Release Wire Lock Mechanism",
      description: "Instant connection and disconnection without tools for maximum efficiency",
      details: [
        "One-handed operation for operator convenience",
        "Spring-loaded wire for automatic positive engagement",
        "No separate cotter pins or clips required",
        "Saves significant time during equipment changes",
        "Reduces operator fatigue and increases productivity"
      ],
      icon: Zap
    },
    {
      title: "Superior Material Construction",
      description: "High-grade materials for maximum strength and durability",
      details: [
        "Mild steel 1018 for standard applications",
        "Stainless steel 304/316 for corrosive environments",
        "Alloy steel 4140 for heavy duty applications",
        "Proper heat treatment for optimal properties",
        "Material traceability and certification"
      ],
      icon: Shield
    },
    {
      title: "Precision Manufacturing Quality",
      description: "CNC machined precision with tight tolerances for perfect fit",
      details: [
        "±0.05mm dimensional accuracy as per DIN standards",
        "Surface finish Ra 1.6μm for smooth operation",
        "Consistent quality through automated production",
        "100% dimensional inspection before shipping",
        "Statistical process control for quality assurance"
      ],
      icon: Target
    },
    {
      title: "Comprehensive Size Range",
      description: "Complete range of sizes and configurations for all applications",
      details: [
        "Diameters from 6mm to 64mm (1/4\" to 2-1/2\")",
        "Lengths from 25mm to 500mm (1\" to 20\")",
        "Multiple head configurations available",
        "Custom sizes and specifications on request",
        "Standard and metric threading options"
      ],
      icon: Scale
    },
    {
      title: "Multiple Finish Options",
      description: "Various protective finishes for different environmental conditions",
      details: [
        "Zinc plating for general corrosion protection",
        "Hot dip galvanizing for maximum protection",
        "Stainless steel for chemical resistance",
        "Black oxide for wear resistance",
        "Chrome plating for decorative applications"
      ],
      icon: Layers
    },
    {
      title: "Safety & Compliance Features",
      description: "Designed and tested for safety compliance across industries",
      details: [
        "ASTM A193 and ISO standards compliance",
        "Safety factor 5:1 for working loads",
        "Rounded edges to prevent injury",
        "Positive engagement indicators",
        "Meets OSHA and international safety standards"
      ],
      icon: HardHat
    }
  ];

  const qualityFeatures = [
    { icon: Award, title: "ASTM A193 Certified", desc: "High tensile steel certified to international standards", color: "text-blue-600" },
    { icon: Shield, title: "ISO 898-1 Compliant", desc: "Property classes for mechanical fasteners", color: "text-green-600" },
    { icon: Layers, title: "Multiple Finishes", desc: "Zinc plated, galvanized, stainless steel options", color: "text-purple-600" },
    { icon: HardHat, title: "Safety Tested", desc: "5:1 safety factor with proof load testing", color: "text-orange-600" },
    { icon: Scale, title: "Precision Tolerances", desc: "±0.05mm accuracy for perfect fit", color: "text-indigo-600" },
    { icon: CheckCircle, title: "Quality Assured", desc: "100% inspection with certified test reports", color: "text-teal-600" },
    { icon: Truck, title: "Ready Stock", desc: "Ex-stock availability in all standard sizes", color: "text-red-600" },
    { icon: Globe, title: "Export Quality", desc: "International standards for global markets", color: "text-gold-primary" }
  ];

  const manufacturingProcess = [
    {
      step: "Material Selection & Preparation",
      description: "Premium quality steel selection and preparation for PTO pin manufacturing",
      details: [
        "Material sourcing from certified steel mills (TATA, SAIL, JSW)",
        "Chemical composition verification by OES analysis",
        "Mechanical property testing for strength and ductility",
        "Bar stock cutting to required lengths",
        "Surface preparation and cleaning"
      ]
    },
    {
      step: "Precision Machining & Forming",
      description: "CNC machining and forming operations for accurate dimensions",
      details: [
        "CNC turning for precise diameter and length",
        "Milling operations for flats and keyways",
        "Drilling for wire holes with precise positioning",
        "Threading operations where required",
        "Deburring and edge finishing"
      ]
    },
    {
      step: "Wire Mechanism Assembly",
      description: "Spring steel wire forming and assembly for locking mechanism",
      details: [
        "Spring steel wire cutting and forming",
        "Heat treatment for proper spring properties",
        "Wire insertion and securing operations",
        "Function testing of locking mechanism",
        "Adjustment for proper engagement force"
      ]
    },
    {
      step: "Surface Treatment & Quality Control",
      description: "Protective coating application and final quality inspection",
      details: [
        "Cleaning and degreasing preparation",
        "Zinc plating or galvanizing process",
        "Alternative finishing as per specification",
        "Final dimensional and functional inspection",
        "Packaging and certification"
      ]
    }
  ];

  const testingProcedures = [
    "Chemical Composition Analysis by OES (Optical Emission Spectroscopy)",
    "Mechanical Properties Testing (Tensile Strength, Yield Strength, Elongation, Hardness)",
    "Proof Load Testing at 2x Working Load Limit as per ASTM Standards",
    "Ultimate Shear Strength Testing to Failure Point",
    "Wire Spring Function Testing (10,000 cycles minimum)",
    "Corrosion Resistance Testing (ASTM B117 Salt Spray - 500+ hours)",
    "Dimensional Verification with Certified CMM Equipment",
    "Surface Finish Measurement (Ra values as per specification)",
    "Visual Inspection for Surface Defects and Finish Quality",
    "Functional Testing of Wire Lock Mechanism Operation",
    "Engagement and Release Force Testing",
    "Temperature Cycling Tests (-40°C to +200°C)",
    "Vibration Resistance Testing for Automotive Applications",
    "Fatigue Testing for Cyclic Loading Applications",
    "Impact Testing for Shock Resistance",
    "Thread Inspection with Go/No-Go Gauges (where applicable)",
    "Magnetic Particle Inspection for Critical Applications",
    "Ultrasonic Testing for Internal Defects",
    "Final Quality Audit and Certification Documentation",
    "Traceability Recording for Material and Process History"
  ];

  const indianCities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Pune",
    "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal",
    "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Ludhiana",
    "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivali", "Vasai-Virar",
    "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad",
    "Ranchi", "Howrah", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada", "Jodhpur",
    "Madurai", "Raipur", "Kota", "Chandigarh", "Guwahati", "Solapur", "Hubli-Dharwad",
    "Mysore", "Tiruchirappalli", "Bareilly", "Aligarh", "Tiruppur", "Gurgaon", "Moradabad",
    "Jalandhar", "Bhubaneswar", "Salem", "Mira-Bhayandar", "Warangal", "Guntur", "Bhiwandi",
    "Saharanpur", "Gorakhpur", "Bikaner", "Amravati", "Noida", "Jamshedpur", "Bhilai Nagar",
    "Doraha", "Chandigarh", "Panipat", "Ambala", "Hisar", "Karnal", "Kurukshetra", "Sonipat"
  ];


  return (
    <>
      <ProductSEO
        title="PTO Lock Pins Manufacturer Mumbai | Wire Lock Pins, Shaft Locking Pins Supplier | ASTM A193 ISO 898"
        description="Leading PTO lock pins manufacturer & supplier in Mumbai. ASTM A193, ISO 898-1 certified PTO pins, wire lock pins, shaft locking pins, linch pins from ₹7-400 per piece. Stock & supply across India with quick release mechanism, high shear strength, zinc plated finish. Best prices for agricultural equipment, tractors, industrial machinery, construction equipment."
        keywords="PTO lock pins manufacturer Mumbai, PTO lock pins supplier, PTO pins stockist, wire lock pins, shaft locking pins, linch pins, lynch pins, clevis pins, quick release pins, ball lock pins, spring loaded pins, tab lock pins, push button pins, safety pins, implement mounting pins, tractor PTO pins, agricultural PTO pins, heavy duty PTO pins, industrial PTO pins, construction equipment pins, mining machinery pins, marine PTO pins, automotive PTO pins, ASTM A193 PTO pins, ISO 898 PTO pins, mild steel PTO pins, stainless steel PTO pins, alloy steel PTO pins, zinc plated PTO pins, galvanized PTO pins, polished PTO pins, black oxide PTO pins, chrome plated PTO pins, 6mm PTO pins, 8mm PTO pins, 10mm PTO pins, 12mm PTO pins, 14mm PTO pins, 16mm PTO pins, 20mm PTO pins, 25mm PTO pins, 30mm PTO pins, 32mm PTO pins, 40mm PTO pins, 50mm PTO pins, custom PTO pins, special PTO pins, precision PTO pins, hardened PTO pins, heat treated PTO pins, round PTO pins, square PTO pins, D-shaped PTO pins, threaded PTO pins, smooth PTO pins, grooved PTO pins, CNC machined PTO pins, forged PTO pins, Delhi PTO pins, Pune PTO pins, Kolkata PTO pins, Ludhiana PTO pins, Noida PTO pins, Surat PTO pins, Doraha PTO pins, PTO pins price, PTO pins cost, PTO pins online, buy PTO pins, PTO pins distributor, PTO pins dealer, wholesale PTO pins, bulk PTO pins, PTO pins manufacturing, PTO pins production, PTO pins quality, certified PTO pins, tested PTO pins, reliable PTO pins, durable PTO pins, high strength PTO pins, corrosion resistant PTO pins, weather resistant PTO pins, rust proof PTO pins, maintenance free PTO pins, long lasting PTO pins, precision manufactured PTO pins, quality assured PTO pins, export quality PTO pins"
        category="Pins & Fasteners"
        productName="PTO Lock Pins, Wire Lock Pins & Shaft Locking Pins"
        specifications={specifications}
        canonicalUrl="/product/pins/pto-pins"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white dark:bg-gray-800 py-4 border-b border-gray-200 dark:border-gray-700" data-testid="breadcrumb-nav">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
              <Link href="/" className="hover:text-navy-primary dark:hover:text-gold-primary transition-colors" data-testid="breadcrumb-home">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/products" className="hover:text-navy-primary dark:hover:text-gold-primary transition-colors" data-testid="breadcrumb-products">Products</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/pins" className="hover:text-navy-primary dark:hover:text-gold-primary transition-colors" data-testid="breadcrumb-pins">Pins & Fasteners</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary dark:text-gold-primary font-medium" data-testid="breadcrumb-current">PTO Lock Pins</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-20" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="hero-title">
                PTO Lock Pins Manufacturer Mumbai | Wire Lock Pins Supplier
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100" data-testid="hero-subtitle">
                ASTM A193 & ISO 898 Certified | ₹7-400 Per Piece | 6mm to 64mm Diameter | Ready Stock Available
              </p>
              <p className="text-lg md:text-xl mb-8 text-blue-200" data-testid="hero-description">
                Leading supplier of premium PTO lock pins, wire lock pins, shaft locking pins & quick release pins for agricultural, industrial & construction applications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center" data-testid="cta-get-quote">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Best Price Quote
                </Link>
                <a href="tel:+919819322576" className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center" data-testid="cta-call-now">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91 9819322576
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-white dark:bg-gray-800" data-testid="features-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="features-title">
              Why Choose Our PTO Lock Pins & Wire Lock Pins?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-700" data-testid={`feature-${index}`}>
                  <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-semibold text-navy-primary dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Size Chart */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900" data-testid="size-chart-section">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="size-chart-title">
                Complete PTO Lock Pins Size Chart & Price List
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <thead className="bg-gradient-to-r from-navy-primary to-blue-600 text-white">
                    <tr>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-left text-sm">Diameter</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-left text-sm">Length Range</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-left text-sm">Material</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-left text-sm">Finish</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-left text-sm">Shear Strength</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-left text-sm">Weight</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-left text-sm">Price Range</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-left text-sm">Applications</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detailedSizeChart.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50 dark:bg-gray-700" : "bg-white dark:bg-gray-800"}>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 font-semibold text-navy-primary dark:text-white text-sm">{item.diameter}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-gray-700 dark:text-gray-300 text-sm">{item.length}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-gray-700 dark:text-gray-300 text-sm">{item.material}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-gray-700 dark:text-gray-300 text-sm">{item.finish}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-gray-700 dark:text-gray-300 text-sm">{item.shearStrength}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-gray-700 dark:text-gray-300 text-sm">{item.weight}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-green-600 dark:text-green-400 font-semibold text-sm">{item.priceRange}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-gray-700 dark:text-gray-300 text-sm">{item.applications}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  * Bulk order discounts available | Custom sizes on request | MOQ varies by size | Express delivery available
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Pin Types */}
        <section className="py-16 bg-white dark:bg-gray-800" data-testid="pin-types-section">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="pin-types-title">
                Complete Range of PTO Lock Pins & Wire Lock Pins Available
              </h2>
              <div className="grid lg:grid-cols-1 gap-8">
                {comprehensivePTOPinTypes.map((category, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden" data-testid={`pin-category-${index}`}>
                    <div className="bg-gradient-to-r from-navy-primary to-blue-600 text-white px-6 py-4">
                      <h3 className="text-xl font-bold flex items-center">
                        <Lock className="w-5 h-5 mr-2" />
                        {category.category}
                      </h3>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-4 gap-2 mb-4">
                        {category.types.map((type, typeIndex) => (
                          <div key={typeIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">{type}</span>
                          </div>
                        ))}
                      </div>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <p className="text-sm text-blue-800 dark:text-blue-200">
                            <strong>Applications:</strong> {category.applications}
                          </p>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <p className="text-sm text-green-800 dark:text-green-200">
                            <strong>Description:</strong> {category.description}
                          </p>
                        </div>
                        <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                          <p className="text-sm text-purple-800 dark:text-purple-200">
                            <strong>Specifications:</strong> {category.specifications}
                          </p>
                        </div>
                        <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                          <p className="text-sm text-orange-800 dark:text-orange-200">
                            <strong>Price Range:</strong> {category.priceRange}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pin Advantages */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900" data-testid="advantages-section">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="advantages-title">
                Why Our PTO Lock Pins & Wire Lock Pins are Superior
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {pinAdvantages.map((advantage, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-xl transition-shadow duration-300" data-testid={`advantage-${index}`}>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <advantage.icon className="w-10 h-10 text-blue-600 mr-4" />
                        <h3 className="text-xl font-bold text-navy-primary dark:text-white">{advantage.title}</h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{advantage.description}</p>
                      <ul className="space-y-2">
                        {advantage.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400 text-sm">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Process */}
        <section className="py-16 bg-white dark:bg-gray-800" data-testid="manufacturing-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="manufacturing-title">
                Our PTO Lock Pins Manufacturing Process
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {manufacturingProcess.map((process, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700" data-testid={`process-${index}`}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-navy-primary dark:text-white">{process.step}</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{process.description}</p>
                    <ul className="space-y-2">
                      {process.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Applications */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900" data-testid="applications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="applications-title">
                Industry Applications for PTO Lock Pins & Wire Lock Pins
              </h2>
              <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
                {comprehensiveApplications.map((application, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-xl transition-shadow duration-300" data-testid={`application-${index}`}>
                    <div className="bg-gradient-to-r from-navy-primary to-blue-600 text-white px-6 py-4">
                      <h3 className="text-lg font-bold flex items-center">
                        <Building className="w-5 h-5 mr-2" />
                        {application.industry}
                      </h3>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-4 gap-2 mb-4">
                        {application.applications.map((app, appIndex) => (
                          <div key={appIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">{app}</span>
                          </div>
                        ))}
                      </div>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <p className="text-sm text-blue-800 dark:text-blue-200">
                            <strong>Benefits:</strong> {application.benefits}
                          </p>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <p className="text-sm text-green-800 dark:text-green-200">
                            <strong>Standards:</strong> {application.specifications}
                          </p>
                        </div>
                        <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                          <p className="text-sm text-purple-800 dark:text-purple-200">
                            <strong>Common Sizes:</strong> {application.commonSizes}
                          </p>
                        </div>
                        <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                          <p className="text-sm text-orange-800 dark:text-orange-200">
                            <strong>Price Range:</strong> {application.priceRange}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testing & Quality Control */}
        <section className="py-16 bg-white dark:bg-gray-800" data-testid="testing-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="testing-title">
                Quality Testing & Certification for PTO Lock Pins
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-4">
                  <h3 className="text-xl font-semibold flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3" />
                    Comprehensive Testing Procedures for PTO Lock Pins
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {testingProcedures.map((test, index) => (
                      <div key={index} className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg" data-testid={`test-${index}`}>
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{test}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Certifications Provided:</h4>
                      <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                        <li>• Material Test Certificate (ASTM A193/ISO 898-1)</li>
                        <li>• Dimensional Inspection Report (±0.05mm accuracy)</li>
                        <li>• Proof Load Test Certificate (2x working load)</li>
                        <li>• Shear Strength Test Report (ultimate failure load)</li>
                        <li>• Corrosion Resistance Certificate (500+ hours)</li>
                        <li>• Wire Function Test Report (10,000 cycles)</li>
                        <li>• Quality Audit Certificate (ISO 9001:2015)</li>
                        <li>• Traceability Documentation (material & process)</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Quality Standards Compliance:</h4>
                      <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                        <li>• ISO 9001:2015 Quality Management System</li>
                        <li>• ISO 14001:2015 Environmental Management</li>
                        <li>• OHSAS 18001 Occupational Health & Safety</li>
                        <li>• ASTM A193 Grade B7 Material Standards</li>
                        <li>• ISO 898-1 Property Classes Compliance</li>
                        <li>• SAE J715 PTO Driveline Standards</li>
                        <li>• Third Party Inspection Available (SGS/BV)</li>
                        <li>• Customer Specific Requirements Support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900" data-testid="specifications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="specifications-title">
                Technical Specifications & Standards for PTO Lock Pins
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden">
                <div className="bg-navy-primary text-white px-6 py-4">
                  <h3 className="text-xl font-semibold">Complete Specification Standards & Compliance</h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-1 gap-4">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex items-start" data-testid={`specification-${index}`}>
                        <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Range Section */}
        <section className="py-16 bg-white dark:bg-gray-800" data-testid="product-range-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-primary dark:text-white mb-12" data-testid="product-range-title">
                Complete Range of Pipe Linch Pins & PTO Lock Pins
              </h2>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-lg border border-blue-200 dark:border-blue-700">
                <h3 className="text-2xl font-bold text-navy-primary dark:text-white mb-6">Our Product Portfolio</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200">Pipe Linch Pins</h4>
                    <p className="text-gray-700 dark:text-gray-300">High-quality pipe linch pins for secure connections in agricultural and industrial applications.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200">Linch Pins & Shaft Pins</h4>
                    <p className="text-gray-700 dark:text-gray-300">Standard and heavy-duty linch pins, shaft pins for machinery and equipment connections.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200">PTO Pins & Shaft Locking Pins</h4>
                    <p className="text-gray-700 dark:text-gray-300">Quick-release PTO pins and shaft locking pins with wire lock mechanisms for easy operation.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200">Pipe Clips</h4>
                    <p className="text-gray-700 dark:text-gray-300">Durable pipe clips for securing and supporting pipes in various industrial applications.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200">Retaining Pins</h4>
                    <p className="text-gray-700 dark:text-gray-300">Precision retaining pins for holding components in position with reliable performance.</p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-blue-800 dark:text-blue-200">Custom Solutions</h4>
                    <p className="text-gray-700 dark:text-gray-300">Custom manufactured pins and clips as per customer specifications and drawings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cities We Supply */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900" data-testid="cities-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="cities-title">
                Cities We Supply PTO Lock Pins & Wire Lock Pins
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {indianCities.map((city, index) => (
                    <div key={index} className="flex items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg" data-testid={`city-${index}`}>
                      <MapPin className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{city}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Pan India Supply:</strong> We supply PTO lock pins, wire lock pins & shaft locking pins to all major cities and industrial areas across India. 
                    Fast delivery through our extensive logistics network with proper packaging for safe transportation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-navy-primary text-white" data-testid="why-choose-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="why-choose-title">
                Why Choose Mamta Steel Traders for PTO Lock Pins?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Factory className="w-8 h-8 text-navy-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">25+ Years Experience</h3>
                  <p className="text-blue-100">Trusted manufacturer & supplier in fasteners and pins industry with proven track record</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Package className="w-8 h-8 text-navy-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Complete Range</h3>
                  <p className="text-blue-100">6mm to 64mm diameter PTO lock pins available ex-stock with price from ₹7-400</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Award className="w-8 h-8 text-navy-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Certified Quality</h3>
                  <p className="text-blue-100">ASTM A193, ISO 898-1 certified with comprehensive test certificates and material traceability</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Truck className="w-8 h-8 text-navy-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-blue-100">Same day dispatch for stock items with bulk discounts and express delivery options</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-navy-primary to-navy-secondary text-white" data-testid="cta-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="cta-title">
                Ready to Order Premium PTO Lock Pins & Wire Lock Pins?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get best prices for ASTM A193 & ISO 898 certified PTO lock pins from ₹7-400 per piece with fast delivery across India & export worldwide
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center" data-testid="cta-contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Best Price Quote Now
                </Link>
                <a href="https://wa.me/919819322576" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center" data-testid="cta-whatsapp">
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp: +91 9819322576
                </a>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center" data-testid="contact-phone">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+919819322576" className="hover:text-gold-primary transition-colors">+91 9819322576</a>
                </div>
                <div className="flex items-center justify-center" data-testid="contact-email">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:mamtasteeltraders@gmail.com" className="hover:text-gold-primary transition-colors">mamtasteeltraders@gmail.com</a>
                </div>
                <div className="flex items-center justify-center" data-testid="contact-location">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}