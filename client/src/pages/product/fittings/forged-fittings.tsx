import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Factory, Truck, Globe, Clock, Settings, Wrench, Target, Package, Users, Zap, Gauge, Cog } from "lucide-react";
import { Link } from "wouter";

export default function ForgedFittings() {
  const specifications = [
    "ASTM A182/A182M - Standard Specification for Forged or Rolled Alloy and Stainless Steel Pipe Flanges, Forged Fittings",
    "ASTM A105/A105M - Standard Specification for Carbon Steel Forgings for Piping Applications",
    "ASTM A350/A350M - Standard Specification for Carbon and Low-Alloy Steel Forgings, Requiring Notch Toughness Testing",
    "ASTM A694/A694M - Standard Specification for Carbon and Alloy Steel Forgings for Pipe Flanges, Fittings, Valves",
    "ASME B16.11 - Forged Fittings, Socket-Welding and Threaded",
    "ASME B16.3 - Malleable Iron Threaded Fittings Classes 150 and 300",
    "MSS SP-79 - Socket-Welding Reducer Inserts",
    "MSS SP-83 - Class 3000 Steel Pipe Unions Socket-Welding and Threaded",
    "MSS SP-95 - Swage(d) Nipples and Bull Plugs",
    "BS 3799 - Steel Pipe Fittings, Screwed and Socket-welding for the Petroleum Industry",
    "DIN 2999 - Pipe threads for tubes and fittings where pressure tight joints are made on the threads",
    "JIS B2316 - Steel Pipe Fittings",
    "Size Range: 1/8\" to 4\" NB (6mm to 100mm)",
    "Pressure Class: 2000#, 3000#, 6000#, 9000# (138 to 620 Bar)",
    "End Connection: Socket Weld (SW), Threaded (NPT/BSP), Butt Weld",
    "Testing: Hydrostatic Test, PMI Test, Radiographic Test, Intergranular Corrosion Test",
    "Certification: EN 10204/3.1B, IBR Approved, API Monogram, PED Certified"
  ];

  const detailedFittingTypes = [
    {
      category: "Socket Weld Fittings",
      types: [
        "90° Elbow Socket Weld",
        "45° Elbow Socket Weld", 
        "Straight Tee Socket Weld",
        "Reducing Tee Socket Weld",
        "Socket Weld Coupling (Full & Half)",
        "Socket Weld Cap",
        "Socket Weld Cross",
        "Socket Weld Union",
        "Reducer Insert",
        "Swage Nipple"
      ],
      applications: "High pressure piping, instrumentation, small bore connections",
      advantages: "No pipe preparation required, strong joint, easy installation"
    },
    {
      category: "Threaded Fittings (NPT/BSP)",
      types: [
        "90° Elbow Threaded",
        "45° Elbow Threaded",
        "Straight Tee Threaded",
        "Reducing Tee Threaded",
        "Threaded Coupling",
        "Threaded Cap",
        "Threaded Cross",
        "Threaded Union",
        "Threaded Plug",
        "Hex Nipple",
        "Square Plug",
        "Round Plug"
      ],
      applications: "Low to medium pressure systems, maintenance friendly connections",
      advantages: "Removable connections, no welding required, field repairable"
    },
    {
      category: "Forged Reducing Fittings",
      types: [
        "Concentric Swage Nipple",
        "Eccentric Swage Nipple",
        "Reducer Insert (Flush Type)",
        "Reducer Insert (Raised Type)",
        "Reducing Coupling",
        "Reducing Tee",
        "Reducing Cross"
      ],
      applications: "Size transition in piping systems, flow velocity control",
      advantages: "Smooth flow transition, space saving design"
    },
    {
      category: "Special Forged Fittings",
      types: [
        "Forged Lateral (45° & 90°)",
        "Forged Olet (Weldolet, Sockolet, Thredolet)",
        "Boss Fitting",
        "Steam Trap",
        "Sight Glass",
        "Drain Plug",
        "Vent Plug"
      ],
      applications: "Branch connections, specialized applications",
      advantages: "Custom configurations, high strength design"
    }
  ];

  const comprehensiveMaterials = [
    {
      category: "Stainless Steel Forged Fittings",
      grades: "304, 304L, 304H, 316, 316L, 316H, 316Ti, 317L, 321, 321H, 347, 347H, 310, 310S, 309, 309S, 904L",
      standards: "ASTM A182 F304, F304L, F316, F316L, F321, F347, F310",
      applications: "Chemical processing, Food & beverage, Pharmaceutical, Marine",
      properties: "Excellent corrosion resistance, hygienic, non-magnetic options available",
      pressure: "Up to 6000# (414 Bar)"
    },
    {
      category: "Duplex & Super Duplex Steel",
      grades: "UNS S31803 (2205), UNS S32205, UNS S32750 (2507), UNS S32760 (Zeron 100), UNS S32950",
      standards: "ASTM A182 F51, F53, F55, F60",
      applications: "Oil & Gas, Offshore, Seawater systems, Chloride environments",
      properties: "High strength, excellent pitting resistance, stress corrosion cracking resistance",
      pressure: "Up to 9000# (620 Bar)"
    },
    {
      category: "Carbon Steel Forged Fittings",
      grades: "A105, A350 LF2, A350 LF3, A350 LF6, A694 F42, F46, F52, F60, F65, F70",
      standards: "ASTM A105, A350, A694",
      applications: "General purpose, Low temperature service, High pressure systems",
      properties: "Cost effective, good weldability, wide temperature range (-20°C to +400°C)",
      pressure: "Up to 9000# (620 Bar)"
    },
    {
      category: "Alloy Steel Forged Fittings",
      grades: "A182 F1, F5, F9, F11, F12, F22, F91, F92, Chrome Moly A182 F5, F9, F11, F22",
      standards: "ASTM A182",
      applications: "High temperature, High pressure, Power generation, Petrochemical",
      properties: "High temperature strength, creep resistance, thermal stability (-29°C to +650°C)",
      pressure: "Up to 6000# (414 Bar)"
    },
    {
      category: "Nickel Alloy Forged Fittings",
      grades: "Inconel 600, 625, 686, 718, 825, Monel 400, K500, Hastelloy C22, C276, B2, B3, Incoloy 800, 825, 926",
      standards: "ASTM B564, ASME SB564",
      applications: "High temperature, Highly corrosive environments, Aerospace, Nuclear",
      properties: "Exceptional corrosion resistance, high temperature performance up to 1000°C",
      pressure: "Up to 6000# (414 Bar)"
    },
    {
      category: "Other Special Alloys",
      grades: "Titanium Gr2, Gr5, Aluminum 6061, Copper, Cupro Nickel 70/30, 90/10, Brass, Bronze",
      standards: "ASTM B381, ASTM B247",
      applications: "Marine, Aerospace, Cryogenic, Heat exchangers, Desalination",
      properties: "Lightweight, excellent corrosion resistance, thermal conductivity",
      pressure: "Up to 3000# (207 Bar)"
    }
  ];

  const pressureClassDetails = [
    {
      class: "Class 2000#",
      pressure: "138 Bar (2000 PSI)",
      temperature: "-29°C to +400°C",
      connections: "SW & NPT/BSP",
      applications: "General industrial applications"
    },
    {
      class: "Class 3000#", 
      pressure: "207 Bar (3000 PSI)",
      temperature: "-29°C to +400°C",
      connections: "SW & NPT/BSP",
      applications: "Medium pressure systems"
    },
    {
      class: "Class 6000#",
      pressure: "414 Bar (6000 PSI)",
      temperature: "-29°C to +400°C",
      connections: "SW Only",
      applications: "High pressure instrumentation"
    },
    {
      class: "Class 9000#",
      pressure: "620 Bar (9000 PSI)",
      temperature: "-29°C to +400°C",
      connections: "SW Only",
      applications: "Extra high pressure systems"
    }
  ];

  const industryApplications = [
    {
      industry: "Oil & Gas Industry",
      applications: ["Refineries", "Petrochemical Plants", "Offshore Platforms", "Gas Processing", "Pipeline Systems", "Drilling Equipment"],
      fittings: "High pressure carbon steel and stainless steel fittings",
      standards: "API, ASME, ASTM"
    },
    {
      industry: "Power Generation",
      applications: ["Thermal Power Plants", "Nuclear Plants", "Boiler Systems", "Steam Lines", "Instrumentation", "Control Systems"],
      fittings: "High temperature alloy steel and stainless steel fittings",
      standards: "ASME, ASTM, Nuclear codes"
    },
    {
      industry: "Chemical Processing",
      applications: ["Chemical Plants", "Fertilizer Industry", "Pharmaceutical", "Specialty Chemicals", "Process Industries"],
      fittings: "Corrosion resistant stainless steel and nickel alloy fittings",
      standards: "ASME, ASTM, FDA approved"
    },
    {
      industry: "Instrumentation & Control",
      applications: ["Instrument Air", "Hydraulic Systems", "Pneumatic Systems", "Control Panels", "Sampling Systems"],
      fittings: "Small bore high pressure socket weld fittings",
      standards: "ASME B16.11, ISA standards"
    },
    {
      industry: "Water & Wastewater",
      applications: ["Water Treatment", "Sewage Treatment", "Desalination", "Municipal Systems", "Industrial Water"],
      fittings: "Potable water grade stainless steel fittings",
      standards: "NSF, AWWA, ASME"
    },
    {
      industry: "Food & Pharmaceutical",
      applications: ["Food Processing", "Dairy Industry", "Brewery", "Pharmaceutical", "Biotech"],
      fittings: "Hygienic stainless steel fittings",
      standards: "3A, FDA, EHEDG"
    }
  ];

  const qualityFeatures = [
    { icon: Shield, title: "ASME B16.11 Certified", desc: "Factory made forged fittings as per ASME standards", color: "text-blue-600" },
    { icon: Gauge, title: "High Pressure Rating", desc: "Designed for pressure up to 9000# (620 Bar)", color: "text-red-600" },
    { icon: Target, title: "Precise Dimensions", desc: "Tight dimensional tolerances for perfect fit", color: "text-green-600" },
    { icon: Award, title: "Quality Certified", desc: "ISO 9001:2015, PED, IBR certified manufacturing", color: "text-gold-primary" },
    { icon: Package, title: "Complete Range", desc: "Sizes from 1/8\" to 4\" in all pressure classes", color: "text-purple-600" },
    { icon: Wrench, title: "Easy Installation", desc: "Socket weld and threaded connections", color: "text-indigo-600" },
    { icon: Globe, title: "International Standards", desc: "ASTM, ASME, BS, DIN, JIS compliance", color: "text-teal-600" },
    { icon: Cog, title: "Compact Design", desc: "Space-saving solution for small bore piping", color: "text-orange-600" }
  ];

  const manufacturingDetails = [
    {
      process: "Hot Forging",
      description: "High strength fittings manufactured by hot forging process from solid bar stock",
      standards: "ASME B16.11, ASTM A105, A182",
      advantages: "Superior mechanical properties, fine grain structure"
    },
    {
      process: "Cold Forging", 
      description: "Precision cold forged fittings for smaller sizes with excellent surface finish",
      standards: "ASME B16.11, BS 3799",
      advantages: "Better dimensional accuracy, smooth surface finish"
    },
    {
      process: "CNC Machining",
      description: "Precision machined fittings for special dimensions and close tolerances",
      standards: "Customer specifications",
      advantages: "Tight tolerances, custom configurations"
    },
    {
      process: "Heat Treatment",
      description: "Normalized, annealed, or quenched & tempered as per material requirements",
      standards: "ASTM specifications",
      advantages: "Optimized mechanical properties, stress relief"
    }
  ];

  const testingProcedures = [
    "Visual & Dimensional Inspection as per MSS SP-55",
    "Hydrostatic Pressure Testing at 1.5 times working pressure", 
    "Pneumatic Testing (when specified)",
    "Positive Material Identification (PMI) Testing",
    "Chemical Composition Analysis by OES",
    "Mechanical Properties Testing (Tensile, Yield, Elongation)",
    "Hardness Testing (HB, HRC, HV)",
    "Impact Testing (Charpy V-Notch) for low temperature service",
    "Intergranular Corrosion Testing for stainless steel",
    "Magnetic Particle Testing (MT) for surface defects",
    "Liquid Penetrant Testing (PT) for surface cracks",
    "Radiographic Testing (RT) for internal defects",
    "Thread Inspection with GO/NO-GO gauges",
    "Socket depth and bore diameter verification"
  ];

  const sizesAndDimensions = [
    {
      size: "1/8\" (6mm)",
      socketDepth: "9.5mm",
      applications: "Instrumentation tubing",
      availability: "SW & NPT"
    },
    {
      size: "1/4\" (8mm)",
      socketDepth: "9.5mm", 
      applications: "Instrument air lines",
      availability: "SW & NPT"
    },
    {
      size: "3/8\" (10mm)",
      socketDepth: "12.5mm",
      applications: "Hydraulic systems",
      availability: "SW & NPT"
    },
    {
      size: "1/2\" (15mm)",
      socketDepth: "12.5mm",
      applications: "Process piping",
      availability: "SW & NPT"
    },
    {
      size: "3/4\" (20mm)",
      socketDepth: "15.5mm",
      applications: "Utility piping",
      availability: "SW & NPT"
    },
    {
      size: "1\" (25mm)",
      socketDepth: "17.5mm",
      applications: "Process piping",
      availability: "SW & NPT"
    },
    {
      size: "1-1/4\" (32mm)",
      socketDepth: "19mm",
      applications: "Process piping",
      availability: "SW & NPT"
    },
    {
      size: "1-1/2\" (40mm)",
      socketDepth: "22.5mm",
      applications: "Process piping",
      availability: "SW & NPT"
    },
    {
      size: "2\" (50mm)",
      socketDepth: "25.5mm",
      applications: "Process piping",
      availability: "SW & NPT"
    },
    {
      size: "2-1/2\" (65mm)",
      socketDepth: "28.5mm",
      applications: "Process piping",
      availability: "SW Only"
    },
    {
      size: "3\" (80mm)",
      socketDepth: "35mm",
      applications: "Process piping",
      availability: "SW Only"
    },
    {
      size: "4\" (100mm)",
      socketDepth: "41.5mm",
      applications: "Process piping",
      availability: "SW Only"
    }
  ];

  

  return (
    <>
      <ProductSEO
        title="Forged Steel Fittings Manufacturer & Supplier Mumbai | ASME B16.11 | Socket Weld & Threaded"
        description="Leading manufacturer & supplier of ASME B16.11 forged steel fittings in Mumbai. Socket weld & threaded fittings in SS 304, 316L, carbon steel A105, duplex steel. High pressure up to 9000#. Stock & supply across India with test certificates."
        keywords="forged steel fittings, forged fittings manufacturer Mumbai, ASME B16.11 fittings, socket weld fittings, threaded fittings, high pressure fittings, A105 forged fittings, SS 304 forged fittings, SS 316L forged fittings, carbon steel forged fittings, stainless steel forged fittings, duplex steel forged fittings, alloy steel forged fittings, socket weld elbow, socket weld tee, socket weld coupling, threaded elbow, threaded tee, threaded coupling, forged elbow, forged tee, forged reducer, Mumbai steel supplier, forged fittings India, ASTM A105 fittings, ASTM A182 fittings, BS 3799 fittings, MSS SP-79 fittings, small bore fittings, instrumentation fittings, high pressure piping fittings, petroleum industry fittings, chemical industry fittings, power plant fittings, oil and gas fittings, 2000# fittings, 3000# fittings, 6000# fittings, 9000# fittings, socket welding fittings, NPT threaded fittings, BSP threaded fittings, galvanized forged fittings, inconel forged fittings, monel forged fittings, hastelloy forged fittings, titanium forged fittings"
        category="Pipe Fittings"
        productName="Forged Steel Fittings"
        specifications={specifications}
        canonicalUrl="/product/fittings/forged-fittings"
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
              <Link href="/fittings" className="hover:text-navy-primary dark:hover:text-gold-primary transition-colors" data-testid="breadcrumb-fittings">Fittings</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary dark:text-gold-primary font-medium" data-testid="breadcrumb-current">Forged Fittings</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-20" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="hero-title">
                Premium Forged Steel Fittings Manufacturer
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100" data-testid="hero-subtitle">
                ASME B16.11 Certified | Socket Weld & Threaded | High Pressure up to 9000# | Mumbai, India
              </p>
              <p className="text-lg md:text-xl mb-8 text-blue-200" data-testid="hero-description">
                Leading supplier of high-quality forged fittings for Oil & Gas, Instrumentation, Chemical & Process Industries
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
              Why Choose Our Forged Steel Fittings?
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

        {/* Detailed Fitting Types */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900" data-testid="fitting-types-section">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="fitting-types-title">
                Complete Range of Forged Steel Fittings
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {detailedFittingTypes.map((category, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden" data-testid={`fitting-category-${index}`}>
                    <div className="bg-gradient-to-r from-navy-primary to-blue-600 text-white px-6 py-4">
                      <h3 className="text-xl font-bold">{category.category}</h3>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-2 mb-4">
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
                            <strong>Advantages:</strong> {category.advantages}
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

        {/* Pressure Class Details */}
        <section className="py-16 bg-white dark:bg-gray-800" data-testid="pressure-class-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="pressure-class-title">
                Pressure Class Ratings & Specifications
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <thead className="bg-gradient-to-r from-navy-primary to-blue-600 text-white">
                    <tr>
                      <th className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-left">Pressure Class</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-left">Working Pressure</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-left">Temperature Range</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-left">Connections</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-left">Applications</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pressureClassDetails.map((pressure, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50 dark:bg-gray-700" : "bg-white dark:bg-gray-800"}>
                        <td className="border border-gray-300 dark:border-gray-600 px-6 py-4 font-semibold text-navy-primary dark:text-white">{pressure.class}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-gray-700 dark:text-gray-300">{pressure.pressure}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-gray-700 dark:text-gray-300">{pressure.temperature}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-gray-700 dark:text-gray-300">{pressure.connections}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-gray-700 dark:text-gray-300">{pressure.applications}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Materials */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900" data-testid="materials-section">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="materials-title">
                Materials & Grades Available
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {comprehensiveMaterials.map((material, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden" data-testid={`material-${index}`}>
                    <div className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white px-6 py-4">
                      <h3 className="text-xl font-bold">{material.category}</h3>
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <h4 className="font-semibold text-navy-primary dark:text-white mb-2">Grades Available:</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{material.grades}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-primary dark:text-white mb-2">Standards:</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{material.standards}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-primary dark:text-white mb-2">Applications:</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{material.applications}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-navy-primary dark:text-white mb-2">Pressure Rating:</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{material.pressure}</p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                        <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Key Properties:</h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">{material.properties}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sizes and Dimensions */}
        <section className="py-16 bg-white dark:bg-gray-800" data-testid="sizes-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="sizes-title">
                Available Sizes & Dimensions
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-left">Size</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-left">Socket Depth</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-left">Typical Applications</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-left">Availability</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizesAndDimensions.map((size, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50 dark:bg-gray-700" : "bg-white dark:bg-gray-800"}>
                        <td className="border border-gray-300 dark:border-gray-600 px-6 py-4 font-semibold text-navy-primary dark:text-white">{size.size}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-gray-700 dark:text-gray-300">{size.socketDepth}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-gray-700 dark:text-gray-300">{size.applications}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-gray-700 dark:text-gray-300">{size.availability}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Details */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900" data-testid="manufacturing-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="manufacturing-title">
                Manufacturing Processes & Quality
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {manufacturingDetails.map((process, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700" data-testid={`process-${index}`}>
                    <div className="flex items-center mb-4">
                      <Factory className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                      <h3 className="text-xl font-bold text-navy-primary dark:text-white">{process.process}</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">{process.description}</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                        <Award className="w-4 h-4 mr-2" />
                        <span>Standards: {process.standards}</span>
                      </div>
                      <div className="flex items-center text-sm text-green-600 dark:text-green-400">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        <span>Benefits: {process.advantages}</span>
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
                Quality Testing & Inspection
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-4">
                  <h3 className="text-xl font-semibold flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3" />
                    Comprehensive Testing Procedures
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
                  <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Certifications Provided:</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      Mill Test Certificate (EN 10204/3.1B), Material Test Report, PMI Report, 
                      Dimensional Report, Hydrostatic Test Certificate, IBR Certificate (when required),
                      API Monogram (when specified), PED Certificate for European markets
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900" data-testid="applications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="applications-title">
                Industry Applications
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {industryApplications.map((industry, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-xl transition-shadow duration-300" data-testid={`industry-${index}`}>
                    <div className="bg-gradient-to-r from-navy-primary to-blue-600 text-white px-6 py-4">
                      <h3 className="text-lg font-bold flex items-center">
                        <Star className="w-5 h-5 mr-2" />
                        {industry.industry}
                      </h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-2 mb-4">
                        {industry.applications.map((app, appIndex) => (
                          <li key={appIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">{app}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="space-y-2">
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <p className="text-sm text-blue-800 dark:text-blue-200">
                            <strong>Recommended:</strong> {industry.fittings}
                          </p>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <p className="text-sm text-green-800 dark:text-green-200">
                            <strong>Standards:</strong> {industry.standards}
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

        {/* Technical Specifications */}
        <section className="py-16 bg-white dark:bg-gray-800" data-testid="specifications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="specifications-title">
                Technical Specifications & Standards
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden">
                <div className="bg-navy-primary text-white px-6 py-4">
                  <h3 className="text-xl font-semibold">Specification Standards & Compliance</h3>
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

        

        {/* Why Choose Us */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-navy-primary text-white" data-testid="why-choose-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" data-testid="why-choose-title">
                Why Choose Mamta Steel Traders?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Factory className="w-8 h-8 text-navy-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">10+ Years Experience</h3>
                  <p className="text-blue-100">Trusted manufacturer & supplier in steel industry</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Globe className="w-8 h-8 text-navy-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Worldwide Supply</h3>
                  <p className="text-blue-100">Exporting to 50+ countries globally</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Truck className="w-8 h-8 text-navy-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-blue-100">Ex-stock availability & quick delivery</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-navy-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">1000+ Clients</h3>
                  <p className="text-blue-100">Serving satisfied customers worldwide</p>
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
                Ready to Order Premium Forged Steel Fittings?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes for ASME B16.11 certified forged fittings with fast delivery across India & export worldwide
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