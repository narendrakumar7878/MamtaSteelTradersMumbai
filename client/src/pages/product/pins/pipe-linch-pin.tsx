import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Factory, Truck, Globe, Clock, Settings, Wrench, Target, Package, Users, Zap, Gauge, Cog, Hammer, HardHat, Building, Router, Layers, Grid, Scale, Lock, Unlock, Bolt, Circle, Square } from "lucide-react";
import { Link } from "wouter";

export default function PipeLinchPin() {
  const specifications = [
    "ASTM A36 - Standard Specification for Carbon Structural Steel",
    "ASTM A193 Grade B7 - High Tensile Steel Bolting Material for PTO Applications",
    "ASTM A307 Grade A - Carbon Steel Bolts and Studs for General Applications",
    "ISO 2340 - Clevis Pins with Head for Agricultural Equipment",
    "ISO 2341 - Clevis Pins without Head for Industrial Applications", 
    "DIN 1444 - Clevis Pins, Unhardened for General Purpose",
    "DIN 1445 - Clevis Pins, Hardened for Heavy Duty Applications",
    "SAE J715 - PTO Driveline and Universal Joint Standards",
    "ASABE S203.14 - Agricultural Machinery PTO Safety Standards",
    "Material: Low Carbon Steel 1018, Spring Steel 1095, Alloy Steel 4140",
    "Finish: Zinc Plated with Yellow Chromate, Galvanized, Stainless Steel",
    "Size Range: 1/4 inch (6mm) to 1-1/2 inch (38mm) diameter",
    "Length Range: 2-1/2 inch (63mm) to 12 inch (305mm)",
    "Wire Gauge: 14 AWG to 6 AWG spring steel wire",
    "Shear Strength: 2,000 to 25,000 lbs depending on diameter",
    "Working Load: 400 to 5,000 lbs safe working load",
    "Temperature Range: -40°F to +200°F (-40°C to +93°C)",
    "Corrosion Resistance: 500+ hours salt spray test (ASTM B117)",
    "Hardness: Rockwell B 70-85 for pin body, Spring wire RC 45-50",
    "Testing: Proof load testing, shear testing, corrosion testing"
  ];

  const comprehensivePTOPinTypes = [
    {
      category: "Standard PTO Pins",
      types: [
        "Round PTO Pins", "Square PTO Pins", "Wire Lock PTO Pins", "Quick Release PTO Pins",
        "Heavy Duty PTO Pins", "Light Duty PTO Pins", "Medium Duty PTO Pins", "Standard Length PTO Pins",
        "Extended Length PTO Pins", "Short PTO Pins", "Custom PTO Pins", "Forged PTO Pins"
      ],
      applications: "Tractor PTO shafts, power take-offs, agricultural equipment connections",
      description: "Standard quick-release wire lock pins for PTO applications",
      specifications: "1/4\" to 1-1/2\" diameter, zinc plated finish"
    },
    {
      category: "Snapper Pins & Quick Pins",
      types: [
        "Snapper Pins", "Quick Pins", "Snap Pins", "Quick Release Pins", "Tab Lock Pins",
        "Ball Lock Pins", "Push Button Pins", "Spring Loaded Pins", "Double Wire Lock Pins",
        "Single Wire Lock Pins", "Over-Center Pins", "Safety Pins"
      ],
      applications: "Farm implements, lawn tractors, garden equipment, quick connections",
      description: "Fast acting pins with spring-loaded wire mechanisms",
      specifications: "Integrated wire loop, automatic locking, easy release"
    },
    {
      category: "Hitch Pins & Trailer Pins",
      types: [
        "Hitch Pins", "Trailer Hitch Pins", "Coupler Pins", "Receiver Pins", "Drawbar Pins",
        "Three-Point Hitch Pins", "Cat 1 Hitch Pins", "Cat 2 Hitch Pins", "Cat 3 Hitch Pins",
        "Top Link Pins", "Lower Link Pins", "Lift Arm Pins", "Implement Pins"
      ],
      applications: "Trailer hitches, three-point hitches, implement attachments",
      description: "Heavy duty pins for trailer and implement connections",
      specifications: "High shear strength, corrosion resistant coating"
    },
    {
      category: "Specialty & Custom Pins",
      types: [
        "Lynch Pins", "Linch Pins", "Clevis Pins", "Cotter Pins", "Split Pins", "Spring Pins",
        "Roll Pins", "Taper Pins", "Straight Pins", "Grooved Pins", "Knurled Pins", 
        "Threaded Pins", "Headed Pins", "Headless Pins", "Slotted Pins", "Custom Machined Pins"
      ],
      applications: "General machinery, industrial equipment, custom applications",
      description: "Specialized pins for specific industrial and agricultural needs",
      specifications: "Custom materials, dimensions, and finishes available"
    }
  ];

  const detailedSizeChart = [
    { diameter: "1/4 inch (6.35mm)", length: "2-1/2 to 4 inch", wireGauge: "14 AWG", shearStrength: "2,000 lbs", workingLoad: "400 lbs", applications: "Light duty tractors, lawn equipment" },
    { diameter: "5/16 inch (7.94mm)", length: "3 to 5 inch", wireGauge: "12 AWG", shearStrength: "3,200 lbs", workingLoad: "640 lbs", applications: "Garden tractors, small implements" },
    { diameter: "3/8 inch (9.53mm)", length: "3-1/2 to 6 inch", wireGauge: "12 AWG", shearStrength: "4,500 lbs", workingLoad: "900 lbs", applications: "Medium duty farm equipment" },
    { diameter: "7/16 inch (11.11mm)", length: "4 to 7 inch", wireGauge: "10 AWG", shearStrength: "6,100 lbs", workingLoad: "1,220 lbs", applications: "Agricultural implements, trailers" },
    { diameter: "1/2 inch (12.70mm)", length: "4-1/2 to 8 inch", wireGauge: "10 AWG", shearStrength: "8,000 lbs", workingLoad: "1,600 lbs", applications: "Heavy duty tractors, large implements" },
    { diameter: "9/16 inch (14.29mm)", length: "5 to 9 inch", wireGauge: "8 AWG", shearStrength: "10,200 lbs", workingLoad: "2,040 lbs", applications: "Industrial machinery, heavy trailers" },
    { diameter: "5/8 inch (15.88mm)", length: "5-1/2 to 10 inch", wireGauge: "8 AWG", shearStrength: "12,500 lbs", workingLoad: "2,500 lbs", applications: "Large agricultural equipment" },
    { diameter: "11/16 inch (17.46mm)", length: "6 to 10 inch", wireGauge: "6 AWG", shearStrength: "15,200 lbs", workingLoad: "3,040 lbs", applications: "Heavy industrial applications" },
    { diameter: "3/4 inch (19.05mm)", length: "6-1/2 to 11 inch", wireGauge: "6 AWG", shearStrength: "18,000 lbs", workingLoad: "3,600 lbs", applications: "Construction equipment, mining" },
    { diameter: "13/16 inch (20.64mm)", length: "7 to 11 inch", wireGauge: "6 AWG", shearStrength: "21,400 lbs", workingLoad: "4,280 lbs", applications: "Heavy construction machinery" },
    { diameter: "7/8 inch (22.23mm)", length: "7-1/2 to 12 inch", wireGauge: "4 AWG", shearStrength: "24,300 lbs", workingLoad: "4,860 lbs", applications: "Large construction equipment" },
    { diameter: "1 inch (25.40mm)", length: "8 to 12 inch", wireGauge: "4 AWG", shearStrength: "32,000 lbs", workingLoad: "6,400 lbs", applications: "Heavy duty industrial equipment" },
    { diameter: "1-1/8 inch (28.58mm)", length: "9 to 12 inch", wireGauge: "2 AWG", shearStrength: "40,700 lbs", workingLoad: "8,140 lbs", applications: "Mining equipment, large machinery" },
    { diameter: "1-1/4 inch (31.75mm)", length: "10 to 12 inch", wireGauge: "2 AWG", shearStrength: "50,000 lbs", workingLoad: "10,000 lbs", applications: "Extreme heavy duty applications" },
    { diameter: "1-3/8 inch (34.93mm)", length: "10 to 12 inch", wireGauge: "1 AWG", shearStrength: "60,800 lbs", workingLoad: "12,160 lbs", applications: "Industrial cranes, heavy machinery" },
    { diameter: "1-1/2 inch (38.10mm)", length: "11 to 12 inch", wireGauge: "1 AWG", shearStrength: "72,000 lbs", workingLoad: "14,400 lbs", applications: "Maximum duty applications" }
  ];

  const comprehensiveApplications = [
    {
      industry: "Agricultural Equipment",
      applications: [
        "Tractor PTO Shafts", "Rotary Cutters", "Bush Hogs", "Disc Harrows", "Cultivators",
        "Seed Drills", "Manure Spreaders", "Hay Balers", "Mowers", "Rakes", "Tedders",
        "Plows", "Harrows", "Tillers", "Post Hole Diggers", "Wood Chippers", "Stump Grinders"
      ],
      benefits: "Quick implement changes, secure connections, weather resistance",
      specifications: "Agricultural grade materials, corrosion protection"
    },
    {
      industry: "Tractor & Farm Machinery",
      applications: [
        "Three Point Hitches", "Top Links", "Lower Links", "Lift Arms", "Stabilizer Bars",
        "Draft Links", "PTO Drive Shafts", "Universal Joints", "Implement Couplers",
        "Quick Attach Systems", "Loader Attachments", "Backhoe Connections", "Front End Loaders"
      ],
      benefits: "Fast attachment/detachment, operator safety, durability",
      specifications: "SAE J715 compliant, high shear strength"
    },
    {
      industry: "Trailer & Transportation",
      applications: [
        "Trailer Hitches", "Ball Couplers", "Pintle Hitches", "Receiver Hitches", "Draw Bars",
        "Safety Chains", "Tongue Jacks", "Stabilizer Jacks", "Landing Gear", "Fifth Wheels",
        "Gooseneck Hitches", "Weight Distribution", "Sway Control", "Brake Controllers"
      ],
      benefits: "DOT compliance, high load capacity, anti-theft features",
      specifications: "Automotive grade steel, zinc plating"
    },
    {
      industry: "Construction Equipment",
      applications: [
        "Excavator Buckets", "Loader Buckets", "Backhoe Attachments", "Bulldozer Blades",
        "Grader Blades", "Compactor Attachments", "Crane Hooks", "Rigging Hardware",
        "Scaffolding Connections", "Formwork Systems", "Concrete Equipment", "Pumping Systems"
      ],
      benefits: "Heavy duty construction, impact resistance, long service life",
      specifications: "Construction grade materials, hardened pins"
    },
    {
      industry: "Industrial Machinery",
      applications: [
        "Conveyor Systems", "Material Handling", "Assembly Lines", "Robotic Systems",
        "Pneumatic Cylinders", "Hydraulic Systems", "Packaging Equipment", "Food Processing",
        "Textile Machinery", "Printing Equipment", "Automation Systems", "Safety Interlocks"
      ],
      benefits: "Precision fit, reliable operation, maintenance free",
      specifications: "Industrial standards, various materials available"
    },
    {
      industry: "Marine & Offshore",
      applications: [
        "Boat Trailers", "Dock Hardware", "Anchor Systems", "Winch Mechanisms",
        "Sail Rigging", "Deck Equipment", "Mooring Systems", "Lifting Equipment",
        "Offshore Platforms", "Marine Cranes", "Ship Building", "Port Equipment"
      ],
      benefits: "Corrosion resistance, saltwater protection, marine rated",
      specifications: "Marine grade stainless steel, special coatings"
    },
    {
      industry: "Lawn & Garden Equipment",
      applications: [
        "Riding Mowers", "Zero Turn Mowers", "Garden Tractors", "Tillers", "Aerators",
        "Dethatchers", "Spreaders", "Sprayers", "Leaf Blowers", "Snow Blowers",
        "Chain Saws", "Hedge Trimmers", "Edgers", "Trimmers", "Brush Cutters"
      ],
      benefits: "Easy maintenance, homeowner friendly, corrosion protection",
      specifications: "Residential duty, zinc plated finish"
    },
    {
      industry: "Mining & Heavy Industry",
      applications: [
        "Mining Equipment", "Crusher Attachments", "Conveyor Belts", "Hoisting Equipment",
        "Drilling Rigs", "Excavation Equipment", "Material Handlers", "Screening Equipment",
        "Washing Plants", "Separation Equipment", "Loading Equipment", "Transport Systems"
      ],
      benefits: "Extreme duty ratings, abrasion resistance, extended service",
      specifications: "Mining grade materials, special heat treatment"
    }
  ];

  const pinAdvantages = [
    {
      title: "Quick Release Mechanism",
      description: "Instant connection and disconnection without tools",
      details: [
        "One-handed operation for efficiency",
        "Spring-loaded wire for automatic engagement",
        "No need for separate cotter pins",
        "Saves time during equipment changes",
        "Reduces operator fatigue"
      ],
      icon: Zap
    },
    {
      title: "Secure Locking System",
      description: "Reliable holding power with positive engagement",
      details: [
        "Over-center wire mechanism prevents accidental release",
        "Positive lock indication when engaged",
        "High shear strength for safety",
        "Vibration resistant design",
        "Multiple engagement positions"
      ],
      icon: Lock
    },
    {
      title: "Corrosion Protection",
      description: "Long-lasting performance in harsh environments",
      details: [
        "Zinc plating with yellow chromate coating",
        "500+ hours salt spray test resistance",
        "UV resistant finish options",
        "Suitable for outdoor applications",
        "Extended service life"
      ],
      icon: Shield
    },
    {
      title: "Versatile Applications",
      description: "Wide range of sizes and configurations available",
      details: [
        "Multiple diameter and length options",
        "Various head styles and finishes",
        "Custom specifications available",
        "Compatible with standard equipment",
        "Universal design principles"
      ],
      icon: Target
    },
    {
      title: "Safety Features",
      description: "Enhanced operator safety and equipment protection",
      details: [
        "Eliminates sharp cotter pin ends",
        "Smooth operation reduces injury risk",
        "Positive engagement prevents accidental disconnection",
        "Visual confirmation of proper installation",
        "Meets safety standards and regulations"
      ],
      icon: Shield
    },
    {
      title: "Cost Effectiveness",
      description: "Reduces maintenance and operational costs",
      details: [
        "Eliminates lost cotter pins replacement cost",
        "Faster equipment changes increase productivity",
        "Reduced labor costs for maintenance",
        "Long service life reduces replacement frequency",
        "No special tools required"
      ],
      icon: Target
    }
  ];

  const qualityFeatures = [
    { icon: Award, title: "ISO 2340 Certified", desc: "International standard clevis pins for reliability", color: "text-blue-600" },
    { icon: Shield, title: "ASTM A193 Grade B7", desc: "High tensile steel for maximum strength", color: "text-green-600" },
    { icon: Layers, title: "Zinc Plated Finish", desc: "500+ hours corrosion resistance coating", color: "text-purple-600" },
    { icon: HardHat, title: "Heavy Duty Construction", desc: "Forged body with spring steel wire", color: "text-orange-600" },
    { icon: Scale, title: "Precision Manufactured", desc: "Tight tolerances for perfect fit", color: "text-indigo-600" },
    { icon: CheckCircle, title: "Quality Tested", desc: "Proof load and shear strength tested", color: "text-teal-600" },
    { icon: Truck, title: "Ready Stock", desc: "Available ex-stock in all standard sizes", color: "text-red-600" },
    { icon: Globe, title: "Export Quality", desc: "International standards for global markets", color: "text-gold-primary" }
  ];

  const manufacturingProcess = [
    {
      step: "Material Selection & Preparation",
      description: "High quality steel selection and preparation for PTO pin manufacturing",
      details: [
        "Low carbon steel 1018 for standard applications",
        "Spring steel 1095 for wire mechanisms", 
        "Alloy steel 4140 for heavy duty applications",
        "Material certification and chemical analysis",
        "Bar cutting to required lengths"
      ]
    },
    {
      step: "Forging & Machining",
      description: "Precision forging and machining for accurate dimensions",
      details: [
        "Hot forging for grain flow and strength",
        "CNC machining for precise dimensions",
        "Threading operations where required",
        "Head formation and shaping",
        "Quality inspection during process"
      ]
    },
    {
      step: "Wire Mechanism Assembly",
      description: "Spring steel wire forming and assembly",
      details: [
        "Spring steel wire cutting and forming",
        "Heat treatment for proper spring properties",
        "Wire insertion and securing",
        "Mechanism testing for proper function",
        "Quality control inspection"
      ]
    },
    {
      step: "Surface Treatment & Finishing",
      description: "Corrosion protection and final finishing processes",
      details: [
        "Cleaning and degreasing operations",
        "Zinc plating with yellow chromate coating",
        "Alternative finishes as per requirements",
        "Final inspection and testing",
        "Packaging and shipping preparation"
      ]
    }
  ];

  const testingProcedures = [
    "Chemical Composition Analysis by OES (Optical Emission Spectroscopy)",
    "Mechanical Properties Testing (Tensile Strength, Yield Strength, Hardness)",
    "Proof Load Testing at 2x Working Load Limit",
    "Ultimate Shear Strength Testing to Failure",
    "Wire Spring Function Testing (10,000 cycles minimum)",
    "Corrosion Resistance Testing (ASTM B117 Salt Spray - 500+ hours)",
    "Dimensional Verification with Certified Measuring Equipment",
    "Visual Inspection for Surface Defects and Finish Quality",
    "Functional Testing of Wire Lock Mechanism",
    "Engagement and Release Force Testing",
    "Temperature Cycling Tests (-40°F to +200°F)",
    "Vibration Resistance Testing",
    "Fatigue Testing for Cyclic Loading",
    "Impact Testing for Shock Resistance",
    "Thread Inspection (where applicable)",
    "Final Quality Audit and Certification"
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
    "Saharanpur", "Gorakhpur", "Bikaner", "Amravati", "Noida", "Jamshedpur", "Bhilai Nagar"
  ];


  return (
    <>
      <ProductSEO
        title="PTO Pins Manufacturer Mumbai | Snapper Pins, Hitch Pins, Quick Pins Supplier | ISO 2340 ASTM A193"
        description="Leading PTO Pins manufacturer & supplier in Mumbai. ISO 2340, ASTM A193 Grade B7 certified PTO pins, snapper pins, hitch pins, quick pins, square PTO pins, round PTO pins. Stock & supply across India with high shear strength, zinc plated finish. Best prices for agricultural equipment, tractors, trailers, industrial machinery."
        keywords="PTO pins manufacturer Mumbai, PTO pins supplier, PTO pins stockist, PTO pins traders, PTO pins exporters Mumbai, snapper pins, hitch pins, quick pins, PTO lock pins, square PTO pins, round PTO pins, quick release pins, wire lock pins, tractor PTO pins, agricultural PTO pins, trailer hitch pins, clevis pins, linch pins, lynch pins, pipe linch pins, ISO 2340 pins, ASTM A193 pins, heavy duty PTO pins, zinc plated PTO pins, stainless steel PTO pins, spring loaded pins, ball lock pins, tab lock pins, push button pins, over center pins, safety pins, three point hitch pins, implement pins, coupler pins, receiver pins, drawbar pins, PTO pins specifications, PTO pins sizes, PTO pins dimensions, PTO pins weight chart, agricultural equipment pins, farm machinery pins, tractor attachment pins, trailer pins, construction equipment pins, industrial machinery pins, marine equipment pins, lawn equipment pins, garden tractor pins, riding mower pins, zero turn pins, excavator pins, loader pins, backhoe pins, crane pins, conveyor pins, material handling pins, packaging equipment pins, food processing pins, textile machinery pins, printing equipment pins, automation pins, robotic system pins, pneumatic cylinder pins, hydraulic system pins, Mumbai PTO pins, PTO pins price, PTO pins cost, PTO pins online, buy PTO pins, PTO pins distributor, PTO pins dealer, wholesale PTO pins, bulk PTO pins, custom PTO pins, special PTO pins, PTO pins manufacturing, PTO pins production, PTO pins quality, certified PTO pins, tested PTO pins, reliable PTO pins, durable PTO pins, high strength PTO pins, corrosion resistant PTO pins, weather resistant PTO pins"
        category="Pins & Fasteners"
        productName="PTO Pins, Snapper Pins, Hitch Pins & Quick Pins"
        specifications={specifications}
        canonicalUrl="/product/pins/pipe-linch-pin"
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
              <span className="text-navy-primary dark:text-gold-primary font-medium" data-testid="breadcrumb-current">PTO Pins & Snapper Pins</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-20" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="hero-title">
                PTO Pins Manufacturer Mumbai | Snapper Pins, Hitch Pins & Quick Pins
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100" data-testid="hero-subtitle">
                ISO 2340 & ASTM A193 Certified | 1/4" to 1-1/2" Diameter | High Shear Strength | Ready Stock Available
              </p>
              <p className="text-lg md:text-xl mb-8 text-blue-200" data-testid="hero-description">
                Leading supplier of premium PTO pins, snapper pins, hitch pins & quick release pins for agricultural equipment, tractors, trailers & industrial machinery
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center" data-testid="cta-get-quote">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Instant Quote
                </Link>
                <a href="tel:+919819322576" className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center" data-testid="cta-call-now">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91 98193 22576
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-white dark:bg-gray-800" data-testid="features-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="features-title">
              Why Choose Our PTO Pins & Snapper Pins?
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

        {/* Complete Size Chart */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900" data-testid="size-chart-section">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="size-chart-title">
                Complete PTO Pins Size Chart & Specifications
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <thead className="bg-gradient-to-r from-navy-primary to-blue-600 text-white">
                    <tr>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-left text-sm">Pin Diameter</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-left text-sm">Length Range</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-left text-sm">Wire Gauge</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-left text-sm">Shear Strength</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-left text-sm">Working Load</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-left text-sm">Applications</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detailedSizeChart.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50 dark:bg-gray-700" : "bg-white dark:bg-gray-800"}>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 font-semibold text-navy-primary dark:text-white text-sm">{item.diameter}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-gray-700 dark:text-gray-300 text-sm">{item.length}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-gray-700 dark:text-gray-300 text-sm">{item.wireGauge}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-gray-700 dark:text-gray-300 text-sm">{item.shearStrength}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-gray-700 dark:text-gray-300 text-sm">{item.workingLoad}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-3 py-3 text-gray-700 dark:text-gray-300 text-sm">{item.applications}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  * Custom sizes available | Safety factor 5:1 for working loads | Zinc plated finish standard | Stainless steel options available
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
                Complete Range of PTO Pins, Snapper Pins & Quick Release Pins
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {comprehensivePTOPinTypes.map((category, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden" data-testid={`pin-category-${index}`}>
                    <div className="bg-gradient-to-r from-navy-primary to-blue-600 text-white px-6 py-4">
                      <h3 className="text-xl font-bold flex items-center">
                        <Bolt className="w-5 h-5 mr-2" />
                        {category.category}
                      </h3>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-2 mb-4 max-h-48 overflow-y-auto">
                        {category.types.map((type, typeIndex) => (
                          <div key={typeIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">{type}</span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-3">
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
                Why PTO Pins & Quick Release Pins are Superior
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
                Our PTO Pins Manufacturing Process
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
                Industry Applications for PTO Pins & Quick Release Pins
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {comprehensiveApplications.map((application, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-xl transition-shadow duration-300" data-testid={`application-${index}`}>
                    <div className="bg-gradient-to-r from-navy-primary to-blue-600 text-white px-6 py-4">
                      <h3 className="text-lg font-bold flex items-center">
                        <Building className="w-5 h-5 mr-2" />
                        {application.industry}
                      </h3>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-2 mb-4 max-h-48 overflow-y-auto">
                        {application.applications.map((app, appIndex) => (
                          <div key={appIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">{app}</span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-2">
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
                Quality Testing & Certification for PTO Pins
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-4">
                  <h3 className="text-xl font-semibold flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3" />
                    Comprehensive Testing Procedures for PTO Pins
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
                        <li>• Material Test Certificate (ISO 2340/ASTM A193)</li>
                        <li>• Dimensional Inspection Report</li>
                        <li>• Proof Load Test Certificate</li>
                        <li>• Shear Strength Test Report</li>
                        <li>• Corrosion Resistance Certificate</li>
                        <li>• Wire Function Test Report</li>
                        <li>• Quality Audit Certificate</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Quality Standards:</h4>
                      <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                        <li>• ISO 9001:2015 Quality Management</li>
                        <li>• ISO 14001:2015 Environmental Management</li>
                        <li>• OHSAS 18001 Occupational Health & Safety</li>
                        <li>• SAE J715 PTO Driveline Standards</li>
                        <li>• ASABE S203.14 Agricultural Safety Standards</li>
                        <li>• Third Party Inspection Available</li>
                        <li>• Traceability Documentation</li>
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
                Technical Specifications & Standards for PTO Pins
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
                Cities We Supply PTO Pins & Quick Release Pins
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
                    <strong>Pan India Supply:</strong> We supply PTO pins, snapper pins, hitch pins & quick release pins to all major cities and industrial areas across India. 
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
                Why Choose Mamta Steel Traders for PTO Pins?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Factory className="w-8 h-8 text-navy-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">25+ Years Experience</h3>
                  <p className="text-blue-100">Trusted manufacturer & supplier in fasteners and pins industry</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Package className="w-8 h-8 text-navy-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Complete Range</h3>
                  <p className="text-blue-100">PTO pins, snapper pins, hitch pins available ex-stock in all sizes</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Award className="w-8 h-8 text-navy-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Certified Quality</h3>
                  <p className="text-blue-100">ISO 2340, ASTM A193 certified with comprehensive test certificates</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Truck className="w-8 h-8 text-navy-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-blue-100">Same day dispatch for urgent requirements across India</p>
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
                Ready to Order Premium PTO Pins & Quick Release Pins?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes for ISO 2340 & ASTM A193 certified PTO pins with fast delivery across India & export worldwide
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center" data-testid="cta-contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Request Quote Now
                </Link>
                <a href="https://wa.me/919819322576" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center" data-testid="cta-whatsapp">
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp: +91 98193 22576
                </a>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center" data-testid="contact-phone">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+919819322576" className="hover:text-gold-primary transition-colors">+91 98193 22576</a>
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