import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Factory, Truck, Globe, Clock, Settings, Wrench, Target, Package, Users, Zap } from "lucide-react";
import { Link } from "wouter";

export default function ButtweldFittings() {
  const specifications = [
    "ASTM A403/A403M - Standard Specification for Wrought Austenitic Stainless Steel Piping Fittings",
    "ASTM A234/A234M - Standard Specification for Piping Fittings of Wrought Carbon Steel and Alloy Steel",
    "ASTM A815 - Standard Specification for Wrought Ferritic, Ferritic/Austenitic, and Austenitic Stainless Steel Piping Fittings",
    "ASTM A420 - Standard Specification for Piping Fittings of Wrought Carbon Steel and Alloy Steel for Low-Temperature Service",
    "ASME B16.9 - Factory-Made Wrought Buttwelding Fittings",
    "ASME B16.28 - Wrought Steel Buttwelding Short Radius Elbows and Returns",
    "ASME B16.25 - Buttwelding Ends",
    "MSS SP-43 - Wrought Stainless Steel Butt-Welding Fittings",
    "MSS SP-75 - Specification for High Test Wrought Butt Welding Fittings",
    "DIN 2605 - Steel Butt-Welding Pipe Fittings",
    "JIS B2313 - Steel Butt-Welding Pipe Fittings",
    "Size Range: 1/2\" to 72\" NB (15mm to 1800mm)",
    "Wall Thickness: SCH 5S, 10S, 40S, 80S, 160, XXS",
    "End Connection: Buttweld (BW), Beveled Ends",
    "Testing: Hydrostatic Test, PMI Test, Radiographic Test",
    "Certification: EN 10204/3.1B, IBR Approved, API Monogram"
  ];

  const detailedFittingTypes = [
    {
      category: "Elbows",
      types: [
        "90° Long Radius Elbows (LR)",
        "90° Short Radius Elbows (SR)", 
        "45° Long Radius Elbows",
        "45° Short Radius Elbows",
        "180° Returns (U-Bends)",
        "90° Reducing Elbows",
        "45° Reducing Elbows"
      ],
      applications: "Pipeline direction changes, flow redirection"
    },
    {
      category: "Tees",
      types: [
        "Straight Tees (Equal Tees)",
        "Reducing Tees (Unequal Tees)",
        "Barred Tees",
        "Wye Tees (Y-Type)",
        "Cross Tees (4-Way)"
      ],
      applications: "Pipeline branching, flow distribution"
    },
    {
      category: "Reducers",
      types: [
        "Concentric Reducers",
        "Eccentric Reducers",
        "Swage Nipples",
        "Reducer Inserts"
      ],
      applications: "Pipe size reduction, flow velocity control"
    },
    {
      category: "Caps & Closures",
      types: [
        "End Caps (Dished Ends)",
        "Flat End Caps",
        "Pipe Plugs",
        "Blanks & Spacers"
      ],
      applications: "Pipeline termination, temporary closure"
    },
    {
      category: "Stub Ends",
      types: [
        "Type A - MSS SP-43",
        "Type B - Short Pattern",
        "Type C - Lap Joint Pattern"
      ],
      applications: "Flange connections, removable joints"
    }
  ];

  const comprehensiveMaterials = [
    {
      category: "Stainless Steel",
      grades: "304, 304L, 304H, 316, 316L, 316H, 316Ti, 317L, 321, 321H, 347, 347H, 310, 310S, 309, 309S, 904L",
      standards: "ASTM A403 WP304, WP304L, WP316, WP316L, WP321, WP347",
      applications: "Chemical, Petrochemical, Food Processing, Pharmaceutical",
      properties: "Corrosion resistant, high temperature resistance, easy to clean"
    },
    {
      category: "Duplex & Super Duplex Steel",
      grades: "UNS S31803 (2205), UNS S32205, UNS S32750 (2507), UNS S32760 (Zeron 100)",
      standards: "ASTM A815 UNS S31803, S32205, S32750, S32760",
      applications: "Oil & Gas, Offshore, Seawater applications",
      properties: "High strength, excellent corrosion resistance, chloride stress corrosion cracking resistance"
    },
    {
      category: "Carbon Steel",
      grades: "A234 WPB, A234 WPC, A420 WPL6, A420 WPL3, A420 WPL9",
      standards: "ASTM A234 WPB, A420 WPL6",
      applications: "General purpose, Low temperature service, Power plants",
      properties: "Cost effective, good weldability, wide temperature range"
    },
    {
      category: "Alloy Steel",
      grades: "A234 WP1, WP5, WP9, WP11, WP22, WP91, WP92, A420 WPL6",
      standards: "ASTM A234, ASTM A420",
      applications: "High temperature, High pressure, Power generation",
      properties: "High temperature strength, creep resistance, thermal stability"
    },
    {
      category: "Nickel Alloys",
      grades: "Inconel 600, 625, 686, 718, 825, Monel 400, K500, Hastelloy C22, C276, B2, Incoloy 800, 825, 926",
      standards: "ASTM B366, ASME SB366",
      applications: "High temperature, Corrosive environments, Aerospace",
      properties: "Exceptional corrosion resistance, high temperature performance"
    },
    {
      category: "Other Special Alloys",
      grades: "Titanium Gr2, Gr5, Aluminum 6061, Copper, Cupro Nickel 70/30, 90/10",
      standards: "ASTM B363, ASTM B234",
      applications: "Marine, Aerospace, Cryogenic, Heat exchangers",
      properties: "Lightweight, corrosion resistant, thermal conductivity"
    }
  ];

  const industryApplications = [
    {
      industry: "Oil & Gas",
      applications: ["Refineries", "Petrochemical Plants", "Offshore Platforms", "Pipeline Systems", "Gas Processing"],
      fittings: "High pressure, corrosion resistant fittings"
    },
    {
      industry: "Power Generation",
      applications: ["Thermal Power Plants", "Nuclear Plants", "Coal Fired Plants", "Steam Lines", "Boiler Systems"],
      fittings: "High temperature, pressure resistant fittings"
    },
    {
      industry: "Chemical Processing",
      applications: ["Chemical Plants", "Fertilizer Industry", "Pharmaceutical", "Specialty Chemicals", "Acids & Alkalis"],
      fittings: "Corrosion resistant, sanitary fittings"
    },
    {
      industry: "Water & Wastewater",
      applications: ["Water Treatment", "Sewage Treatment", "Desalination", "Municipal Systems", "Industrial Water"],
      fittings: "Potable water grade, chlorine resistant"
    },
    {
      industry: "Food & Beverage",
      applications: ["Food Processing", "Dairy Industry", "Brewery", "Beverage Plants", "Pharmaceutical"],
      fittings: "Hygienic, easy to clean, FDA approved"
    },
    {
      industry: "Marine & Offshore",
      applications: ["Shipbuilding", "Offshore Rigs", "Seawater Systems", "Ballast Systems", "Fire Fighting"],
      fittings: "Seawater resistant, marine grade"
    }
  ];

  const qualityFeatures = [
    { icon: Shield, title: "ASME B16.9 Certified", desc: "Factory made wrought buttwelding fittings as per ASME standards", color: "text-blue-600" },
    { icon: Target, title: "Precise Dimensions", desc: "Accurate wall thickness and dimensions for perfect fit", color: "text-green-600" },
    { icon: TrendingUp, title: "High Pressure Rating", desc: "Suitable for high pressure up to 6000 PSI applications", color: "text-purple-600" },
    { icon: Award, title: "Quality Certified", desc: "ISO 9001:2015, PED certified manufacturing", color: "text-gold-primary" },
    { icon: Package, title: "Complete Range", desc: "Sizes from 1/2\" to 72\" in all materials", color: "text-red-600" },
    { icon: Wrench, title: "Easy Installation", desc: "Beveled ends for easy welding and installation", color: "text-indigo-600" },
    { icon: Globe, title: "International Standards", desc: "ASTM, ASME, DIN, JIS standard compliance", color: "text-teal-600" },
    { icon: Zap, title: "Superior Performance", desc: "Excellent flow characteristics and durability", color: "text-orange-600" }
  ];

  const manufacturingDetails = [
    {
      process: "Hot Forming",
      description: "Seamless fittings manufactured by hot forming process for superior strength",
      standards: "ASME B16.9, MSS SP-75"
    },
    {
      process: "Cold Forming", 
      description: "Precision cold formed fittings for smaller sizes with excellent surface finish",
      standards: "ASME B16.9, ASTM A403"
    },
    {
      process: "Machining",
      description: "CNC machined fittings for special dimensions and close tolerances",
      standards: "Customer specifications"
    },
    {
      process: "Welding & Fabrication",
      description: "Welded fittings for large sizes and special configurations",
      standards: "ASME Sec IX, AWS D1.1"
    }
  ];

  const testingProcedures = [
    "Visual & Dimensional Inspection",
    "Hydrostatic Pressure Testing",
    "Pneumatic Testing (when specified)",
    "Positive Material Identification (PMI)",
    "Chemical Composition Analysis",
    "Mechanical Properties Testing",
    "Radiographic Testing (RT)",
    "Magnetic Particle Testing (MT)",
    "Liquid Penetrant Testing (PT)",
    "Ultrasonic Testing (UT)",
    "Impact Testing (Charpy V-Notch)",
    "Hardness Testing (HB, HRC, HV)"
  ];

  const sizesAndSchedules = [
    {
      range: "1/2\" to 2\"",
      schedules: "SCH 5S, 10S, 40S, 80S, 160, XXS",
      method: "Seamless/Welded"
    },
    {
      range: "2-1/2\" to 12\"", 
      schedules: "SCH 5S, 10S, 40, 80, 120, 160, XXS",
      method: "Seamless/Welded"
    },
    {
      range: "14\" to 24\"",
      schedules: "SCH 10, 20, 30, 40, 60, 80, 100, 120, 140, 160",
      method: "Welded/Fabricated"
    },
    {
      range: "26\" to 48\"",
      schedules: "SCH 10, 20, 30, 40, 60, 80",
      method: "Welded/Fabricated"
    },
    {
      range: "50\" to 72\"",
      schedules: "SCH 10, 20, 30, 40",
      method: "Fabricated"
    }
  ];

  

  return (
    <>
      <ProductSEO
        title="Buttweld Fittings Manufacturer & Supplier in Mumbai | ASME B16.9 | SS 304, 316L"
        description="Leading manufacturer & supplier of ASME B16.9 buttweld fittings in Mumbai. SS 304, 316L, carbon steel, alloy steel elbows, tees, reducers, caps. Stock & supply across India with test certificates."
        keywords="buttweld fittings, ASME B16.9 fittings, stainless steel elbows, carbon steel tees, SS 304 fittings, SS 316L fittings, pipe fittings manufacturer Mumbai, buttweld elbow, reducing tee, concentric reducer, eccentric reducer, end caps, stub ends, Mumbai steel supplier, pipe fittings India, ASTM A403 fittings, ASTM A234 fittings, welding fittings, industrial pipe fittings, high pressure fittings, seamless fittings, forged fittings, butt weld pipe fittings, SS butt weld fittings, carbon steel butt weld fittings, alloy steel fittings, duplex steel fittings, inconel fittings, monel fittings, hastelloy fittings, titanium fittings, MSS SP-43, DIN 2605, JIS B2313, IBR approved fittings, PED certified fittings"
        category="Pipe Fittings"
        productName="Buttweld Fittings"
        specifications={specifications}
        canonicalUrl="/product/fittings/buttweld-fittings"
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
              <span className="text-navy-primary dark:text-gold-primary font-medium" data-testid="breadcrumb-current">Buttweld Fittings</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-20" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-heading font-bold mb-6" data-testid="hero-title">
                Premium Buttweld Fittings Manufacturer
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100" data-testid="hero-subtitle">
                ASME B16.9 Certified | SS 304, 316L, Carbon Steel, Alloy Steel | Mumbai, India
              </p>
              <p className="text-lg md:text-xl mb-8 text-blue-200" data-testid="hero-description">
                Leading supplier of high-quality buttweld fittings for Oil & Gas, Petrochemical, Power & Process Industries
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center" data-testid="cta-get-quote">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Instant Quote
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
            <h2 className="text-2xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="features-title">
              Why Choose Our Buttweld Fittings?
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
              <h2 className="text-2xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="fitting-types-title">
                Complete Range of Buttweld Fittings
              </h2>
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {detailedFittingTypes.map((category, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden" data-testid={`fitting-category-${index}`}>
                    <div className="bg-navy-primary text-white px-6 py-4">
                      <h3 className="text-xl font-bold">{category.category}</h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-2 mb-4">
                        {category.types.map((type, typeIndex) => (
                          <li key={typeIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">{type}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                          <strong>Applications:</strong> {category.applications}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Materials */}
        <section className="py-16 bg-white dark:bg-gray-800" data-testid="materials-section">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="materials-title">
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

        {/* Sizes and Schedules */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900" data-testid="sizes-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="sizes-title">
                Available Sizes & Schedules
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-left">Size Range</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-left">Available Schedules</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-left">Manufacturing Method</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sizesAndSchedules.map((size, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50 dark:bg-gray-700" : "bg-white dark:bg-gray-800"}>
                        <td className="border border-gray-300 dark:border-gray-600 px-6 py-4 font-semibold text-navy-primary dark:text-white">{size.range}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-gray-700 dark:text-gray-300">{size.schedules}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-6 py-4 text-gray-700 dark:text-gray-300">{size.method}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Manufacturing Details */}
        <section className="py-16 bg-white dark:bg-gray-800" data-testid="manufacturing-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="manufacturing-title">
                Manufacturing Processes
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {manufacturingDetails.map((process, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700" data-testid={`process-${index}`}>
                    <div className="flex items-center mb-4">
                      <Factory className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                      <h3 className="text-xl font-bold text-navy-primary dark:text-white">{process.process}</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-3">{process.description}</p>
                    <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                      <Award className="w-4 h-4 mr-2" />
                      <span>Standards: {process.standards}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testing & Quality Control */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900" data-testid="testing-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="testing-title">
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
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                      Dimensional Report, Hydrostatic Test Certificate, IBR Certificate (when required)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="py-16 bg-white dark:bg-gray-800" data-testid="applications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="applications-title">
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
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                        <p className="text-sm text-blue-800 dark:text-blue-200">
                          <strong>Recommended:</strong> {industry.fittings}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900" data-testid="specifications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="specifications-title">
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
              <h2 className="text-2xl font-bold text-center mb-12" data-testid="why-choose-title">
                Why Choose Mamta Steel Traders?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Factory className="w-8 h-8 text-navy-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">25+ Years Experience</h3>
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
                  <h3 className="text-xl font-semibold mb-2">10000+ Clients</h3>
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
              <h2 className="text-2xl font-bold mb-6" data-testid="cta-title">
                Ready to Order Premium Buttweld Fittings?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes for ASME B16.9 certified buttweld fittings with fast delivery across India & export worldwide
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center" data-testid="cta-contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Request Quote Now
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