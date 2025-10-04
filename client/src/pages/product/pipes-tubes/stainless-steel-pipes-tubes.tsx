import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Package, Truck, Clock, Users } from "lucide-react";
import { Link } from "wouter";

export default function StainlessSteelPipesAndTubes() {
  // 24 Different Stainless Steel Pipe Products as per attached content
  const products = [
    { 
      name: "ASTM A312 / SA312 TP 304", 
      image: "SS-304-Pipes",
      description: "Austenitic stainless steel pipes with excellent corrosion resistance and formability",
      applications: ["Chemical Processing", "Food Industry", "Architecture"],
      grades: "UNS S30400"
    },
    { 
      name: "ASTM A312 / SA312 TP 304L", 
      image: "SS-304L-Pipes",
      description: "Low carbon version of 304 with enhanced weldability and corrosion resistance",
      applications: ["Welded Applications", "Chemical Equipment", "Marine"],
      grades: "UNS S30403"
    },
    { 
      name: "ASTM A312 / SA312 TP 310", 
      image: "SS-310-Pipes",
      description: "High temperature resistant stainless steel for extreme heat applications",
      applications: ["Heat Exchangers", "Furnace Parts", "High Temperature"],
      grades: "UNS S31000"
    },
    { 
      name: "ASTM A312 / SA312 TP 310S", 
      image: "SS-310S-Pipes",
      description: "Stabilized version of 310 grade with superior high temperature performance",
      applications: ["Petrochemical", "Power Plants", "Heat Treatment"],
      grades: "UNS S31008"
    },
    { 
      name: "ASTM A312 / SA312 TP 316L", 
      image: "SS-316L-Pipes",
      description: "Molybdenum-enhanced grade with superior corrosion resistance",
      applications: ["Marine Applications", "Pharmaceuticals", "Medical Devices"],
      grades: "UNS S31603"
    },
    { 
      name: "ASTM A312 / SA312 TP 317", 
      image: "SS-317-Pipes",
      description: "Enhanced molybdenum content for aggressive corrosive environments",
      applications: ["Chemical Processing", "Pulp & Paper", "Textile"],
      grades: "UNS S31700"
    },
    { 
      name: "ASTM A312 / SA312 TP 317L", 
      image: "SS-317L-Pipes",
      description: "Low carbon version of 317 with excellent corrosion resistance",
      applications: ["Acidic Environments", "Chemical Plants", "Offshore"],
      grades: "UNS S31703"
    },
    { 
      name: "ASTM A312 / SA312 TP 321", 
      image: "SS-321-Pipes",
      description: "Titanium stabilized austenitic steel for high temperature service",
      applications: ["Aircraft Exhausts", "Boiler Tubes", "Heat Exchangers"],
      grades: "UNS S32100"
    },
    { 
      name: "ASTM A312 / SA312 TP 347", 
      image: "SS-347-Pipes",
      description: "Niobium stabilized grade with excellent high temperature properties",
      applications: ["Jet Engine Parts", "Nuclear Applications", "High Temp"],
      grades: "UNS S34700"
    },
    { 
      name: "ASTM A312 / SA312 TP 904L", 
      image: "SS-904L-Pipes",
      description: "Super austenitic grade with exceptional corrosion resistance",
      applications: ["Seawater Applications", "Acid Processing", "Pharmaceuticals"],
      grades: "UNS N08904"
    },
    { 
      name: "Monel 400 Pipes", 
      image: "Monel-400-Pipes",
      description: "Nickel-copper alloy with excellent marine corrosion resistance",
      applications: ["Marine Hardware", "Chemical Processing", "Valves"],
      grades: "UNS N04400"
    },
    { 
      name: "Monel K500 Pipes", 
      image: "Monel-K500-Pipes",
      description: "Age-hardenable nickel-copper alloy with high strength",
      applications: ["Pump Shafts", "Valve Stems", "Marine Fasteners"],
      grades: "UNS N05500"
    },
    { 
      name: "Inconel 600 Pipes", 
      image: "Inconel-600-Pipes",
      description: "High temperature nickel-chromium alloy for extreme conditions",
      applications: ["Heat Treatment", "Chemical Processing", "Nuclear"],
      grades: "UNS N06600"
    },
    { 
      name: "Inconel 601 Pipes", 
      image: "Inconel-601-Pipes",
      description: "Nickel-chromium alloy with aluminum for oxidation resistance",
      applications: ["Thermal Processing", "Petrochemical", "Power Generation"],
      grades: "UNS N06601"
    },
    { 
      name: "Inconel 625 Pipes", 
      image: "Inconel-625-Pipes",
      description: "Nickel-chromium-molybdenum alloy for aggressive environments",
      applications: ["Aerospace", "Marine", "Chemical Processing"],
      grades: "UNS N06625"
    },
    { 
      name: "Inconel 718 Pipes", 
      image: "Inconel-718-Pipes",
      description: "Precipitation-hardening nickel alloy for high-stress applications",
      applications: ["Gas Turbines", "Rocket Motors", "Nuclear Reactors"],
      grades: "UNS N07718"
    },
    { 
      name: "Incoloy 800 Pipes", 
      image: "Incoloy-800-Pipes",
      description: "Iron-nickel-chromium alloy for high temperature service",
      applications: ["Heat Exchangers", "Steam Generators", "Petrochemical"],
      grades: "UNS N08800"
    },
    { 
      name: "Incoloy 800H Pipes", 
      image: "Incoloy-800H-Pipes",
      description: "High carbon version of 800 for enhanced creep resistance",
      applications: ["Steam Superheater", "Petrochemical Tubes", "Heat Treatment"],
      grades: "UNS N08810"
    },
    { 
      name: "Hastelloy C276 Pipes", 
      image: "Hastelloy-C276-Pipes",
      description: "Nickel-molybdenum-chromium alloy for severe corrosive conditions",
      applications: ["Chemical Processing", "Pollution Control", "Pulp & Paper"],
      grades: "UNS N10276"
    },
    { 
      name: "Hastelloy C22 Pipes", 
      image: "Hastelloy-C22-Pipes",
      description: "Versatile nickel-chromium-molybdenum alloy for diverse applications",
      applications: ["Chemical Processing", "Pharmaceutical", "Environmental"],
      grades: "UNS N06022"
    },
    { 
      name: "Duplex 2205 Pipes", 
      image: "Duplex-2205-Pipes",
      description: "Duplex stainless steel with high strength and corrosion resistance",
      applications: ["Oil & Gas", "Chemical Tankers", "Desalination"],
      grades: "UNS S31803"
    },
    { 
      name: "Super Duplex 2507 Pipes", 
      image: "Super-Duplex-2507-Pipes",
      description: "Super duplex steel for aggressive chloride environments",
      applications: ["Offshore Oil", "Seawater Systems", "Chemical Processing"],
      grades: "UNS S32750"
    },
    { 
      name: "Titanium Grade 2 Pipes", 
      image: "Titanium-Gr2-Pipes",
      description: "Commercially pure titanium with excellent corrosion resistance",
      applications: ["Chemical Processing", "Marine", "Medical"],
      grades: "UNS R50400"
    },
    { 
      name: "Alloy 20 Pipes", 
      image: "Alloy-20-Pipes",
      description: "Nickel-iron-chromium alloy for sulfuric acid environments",
      applications: ["Chemical Processing", "Pharmaceuticals", "Food Processing"],
      grades: "UNS N08020"
    }
  ];

  const specifications = [
    "ASTM A312/A312M - Seamless, Welded, and Heavily Cold Worked Austenitic Stainless Steel Pipes",
    "ASTM A213/A213M - Seamless Ferritic and Austenitic Alloy-Steel Boiler, Superheater, and Heat-Exchanger Tubes",
    "ASTM A269 - Seamless and Welded Austenitic Stainless Steel Tubing for General Service",
    "ASTM A511 - Seamless Stainless Steel Mechanical Tubing",
    "ASTM A249 - Welded Austenitic Steel Boiler, Superheater, Heat-Exchanger, and Condenser Tubes",
    "ASTM A358 - Electric-Fusion-Welded Austenitic Chromium-Nickel Alloy Steel Pipe",
    "ASME SA312 - Seamless and Welded Austenitic Stainless Steel Pipes",
    "ASME SA213 - Seamless Ferritic and Austenitic Alloy-Steel Boiler Tubes",
    "ASME SA269 - Seamless and Welded Austenitic Stainless Steel Tubing",
    "Size Range: 1/8\" NB to 48\" NB in Schedule 5S, 10S, 40S, 80S, 160S, XXS",
    "Wall Thickness: 0.5mm to 50mm",
    "Length: Single Random, Double Random & Cut Length"
  ];

  const applications = [
    "Chemical and Petrochemical Industries",
    "Oil and Gas Processing Plants",
    "Food and Beverage Processing Equipment",
    "Pharmaceutical Manufacturing Equipment",
    "Marine and Offshore Applications",
    "Power Generation Plants and Boilers",
    "Paper and Pulp Industry Equipment",
    "Water Treatment and Desalination Plants",
    "Nuclear Power Plant Components",
    "Heat Exchangers and Condensers",
    "High Temperature Furnace Applications",
    "Automotive Exhaust Systems",
    "Architectural and Decorative Applications",
    "Medical and Surgical Equipment",
    "Semiconductor Manufacturing Equipment"
  ];

  const grades = [
    "304/304L", "309/309S", "310/310S", "316/316L", "316H", "317/317L", 
    "321", "347", "904L", "Duplex 2205", "Super Duplex 2507", 
    "Monel 400", "Monel K500", "Inconel 600", "Inconel 601", "Inconel 625", 
    "Inconel 718", "Incoloy 800", "Incoloy 800H", "Hastelloy C276", 
    "Hastelloy C22", "Titanium Gr2", "Alloy 20"
  ];

  const features = [
    { icon: Shield, title: "Superior Corrosion Resistance", desc: "Excellent resistance to corrosion, oxidation, and chemical attack" },
    { icon: TrendingUp, title: "High Strength & Durability", desc: "Outstanding mechanical properties and long service life" },
    { icon: Award, title: "Quality Certified Products", desc: "Complete Mill Test Certificate with material traceability" },
    { icon: CheckCircle, title: "Wide Range of Grades", desc: "Comprehensive inventory of all standard and special grades" },
    { icon: Package, title: "Ready Stock Available", desc: "Immediate delivery from our extensive Mumbai warehouse" },
    { icon: Truck, title: "Fast Delivery", desc: "Quick dispatch across India and international shipping" },
    { icon: Clock, title: "24/7 Technical Support", desc: "Round-the-clock technical assistance and consultation" },
    { icon: Users, title: "Experienced Team", desc: "Over 20 years of expertise in stainless steel supply" }
  ];

  const readyStock = [
    { size: "1/2\"", schedules: ["10S", "40S", "80S"], grades: ["304", "304L", "316", "316L"] },
    { size: "3/4\"", schedules: ["10S", "40S", "80S"], grades: ["304", "304L", "316", "316L"] },
    { size: "1\"", schedules: ["10S", "40S", "80S"], grades: ["304", "304L", "316", "316L"] },
    { size: "1 1/4\"", schedules: ["10S", "40S", "80S"], grades: ["304", "304L", "316", "316L"] },
    { size: "1 1/2\"", schedules: ["10S", "40S", "80S"], grades: ["304", "304L", "316", "316L"] },
    { size: "2\"", schedules: ["10S", "40S", "80S"], grades: ["304", "304L", "316", "316L"] },
    { size: "2 1/2\"", schedules: ["10S", "40S", "80S"], grades: ["304", "304L", "316", "316L"] },
    { size: "3\"", schedules: ["10S", "40S", "80S"], grades: ["304", "304L", "316", "316L"] },
    { size: "4\"", schedules: ["10S", "40S", "80S"], grades: ["304", "304L", "316", "316L"] },
    { size: "6\"", schedules: ["10S", "40S", "80S"], grades: ["304", "304L", "316", "316L"] },
    { size: "8\"", schedules: ["10S", "40S", "80S"], grades: ["304", "304L", "316", "316L"] },
    { size: "10\"", schedules: ["10S", "40S", "80S"], grades: ["304", "304L", "316", "316L"] },
    { size: "12\"", schedules: ["10S", "40S", "80S"], grades: ["304", "304L", "316", "316L"] },
    { size: "14\"", schedules: ["10S", "40S", "80S"], grades: ["304", "304L", "316", "316L"] },
    { size: "16\"", schedules: ["10S", "40S", "80S"], grades: ["304", "304L", "316", "316L"] }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Pipes & Tubes Stockist & Suppliers from Mumbai India | SS 304, 316, 321, 347 Pipes"
        description="Leading stockist & supplier of stainless steel pipes & tubes in Mumbai, India. SS 304, 304L, 316, 316L, 321, 347, 904L pipes. ASTM A312, A213, A269 certified. Seamless, welded, ERW pipes. Ready stock, best prices, fast delivery across India."
        keywords="stainless steel pipes Mumbai, SS pipes supplier India, stainless steel tubes stockist, 304 pipes, 316 pipes, seamless pipes, welded pipes, ERW pipes, ASTM A312 pipes, SA312 pipes, stainless steel pipe manufacturers, SS tube suppliers Mumbai, 304L pipes, 316L pipes, 321 pipes, 347 pipes, 904L pipes, duplex pipes, super duplex pipes, monel pipes, inconel pipes, incoloy pipes, hastelloy pipes, titanium pipes, alloy 20 pipes, SS pipes price, stainless steel pipes rate, pipe fitting suppliers, industrial pipes Mumbai, chemical plant pipes, oil gas pipes, food grade pipes, pharmaceutical pipes, marine pipes, high temperature pipes, corrosion resistant pipes, schedule 40 pipes, schedule 80 pipes, seamless tube manufacturers, welded tube suppliers, stainless steel stockist Mumbai, pipe distributors India, SS pipe dealers, tube traders Mumbai, pipe wholesalers, bulk pipe suppliers, ready stock pipes, fast delivery pipes, quality certified pipes, mill test certificate pipes, IBR pipes, non IBR pipes, pressure vessel pipes, heat exchanger tubes, boiler tubes, condenser tubes, superheater tubes, custom pipe cutting, pipe fabrication, pipe machining, threaded pipes, beveled end pipes, plain end pipes, square pipes, rectangular tubes, hydraulic tubes, instrumentation tubes, capillary tubes, coil tubes, U-bend tubes, heat exchanger coils, serpentine coils, finned tubes"
        category="Pipes & Tubes"
        productName="Stainless Steel Pipes & Tubes"
        specifications={specifications}
        canonicalUrl="/product/pipes-tubes/stainless-steel-pipes-tubes"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white py-4 border-b border-gray-200" data-testid="breadcrumb-nav">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-home">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-products">Products</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product/pipes-tubes" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-pipes-tubes">Pipes & Tubes</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Stainless Steel Pipes & Tubes</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="hero-title">
                Stainless Steel Pipes & Tubes Stockist & Suppliers from Mumbai India
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                Premium quality SS 304, 316, 321, 347, 904L pipes & tubes. ASTM A312, A213, A269 certified. Ready stock available for immediate delivery across India.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-get-quote">
                  Get Instant Quote
                </Link>
                <a href="tel:+919819322576" className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-call-now">
                  Call Now: +91 9819322576
                </a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-gold-primary">24+</div>
                  <div className="text-sm">Product Grades</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-gold-primary">20+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-gold-primary">1000+</div>
                  <div className="text-sm">Happy Clients</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold text-gold-primary">24/7</div>
                  <div className="text-sm">Support</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase - 24 Products */}
        <section className="py-16 bg-white" data-testid="products-showcase">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="products-title">
              Complete Range of Stainless Steel Pipes & Tubes
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {products.map((product, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden" data-testid={`product-${index}`}>
                  <div className="bg-gradient-to-br from-navy-primary to-navy-secondary h-48 flex items-center justify-center">
                    <div className="text-white text-center p-4">
                      <Package className="w-12 h-12 mx-auto mb-3 text-gold-primary" />
                      <h4 className="font-semibold text-sm">{product.image}</h4>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-navy-primary mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                    <div className="text-xs text-gray-500 mb-2">
                      <strong>Grade:</strong> {product.grades}
                    </div>
                    <div className="text-xs text-gray-500 mb-3">
                      <strong>Applications:</strong> {product.applications.join(", ")}
                    </div>
                    <Link href="/contact" className="w-full bg-navy-primary text-white py-2 px-4 rounded text-center text-sm hover:bg-navy-secondary transition-colors duration-300 block">
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-16 bg-gray-50" data-testid="features-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="features-title">
              Why Choose Our Stainless Steel Pipes & Tubes?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300" data-testid={`feature-${index}`}>
                  <feature.icon className="w-12 h-12 text-gold-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-navy-primary mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SS 304 Detailed Specifications */}
        <section className="py-16 bg-white" data-testid="ss304-specifications">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="ss304-title">
              SS 304 Pipes & Tubes - Detailed Specifications
            </h2>
            
            {/* Chemical Composition */}
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-navy-primary mb-6">Chemical Composition of SS 304</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Element</th>
                      <th className="px-4 py-3 text-left">C</th>
                      <th className="px-4 py-3 text-left">Mn</th>
                      <th className="px-4 py-3 text-left">Si</th>
                      <th className="px-4 py-3 text-left">P</th>
                      <th className="px-4 py-3 text-left">S</th>
                      <th className="px-4 py-3 text-left">Cr</th>
                      <th className="px-4 py-3 text-left">Ni</th>
                      <th className="px-4 py-3 text-left">N</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-4 py-3 font-semibold">SS 304</td>
                      <td className="px-4 py-3">0.07 max</td>
                      <td className="px-4 py-3">2.0 max</td>
                      <td className="px-4 py-3">0.75 max</td>
                      <td className="px-4 py-3">0.045 max</td>
                      <td className="px-4 py-3">0.03 max</td>
                      <td className="px-4 py-3">18.0-20.0</td>
                      <td className="px-4 py-3">8.0-10.5</td>
                      <td className="px-4 py-3">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mechanical Properties */}
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-navy-primary mb-6">Mechanical Properties of SS 304</h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Grade</th>
                      <th className="px-4 py-3 text-left">Tensile Strength (ksi min)</th>
                      <th className="px-4 py-3 text-left">Yield Strength 0.2% (ksi min)</th>
                      <th className="px-4 py-3 text-left">Elongation %</th>
                      <th className="px-4 py-3 text-left">Hardness (Brinell) MAX</th>
                      <th className="px-4 py-3 text-left">Hardness (Rockwell B) MAX</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t">
                      <td className="px-4 py-3 font-semibold">SS 304</td>
                      <td className="px-4 py-3">75</td>
                      <td className="px-4 py-3">30</td>
                      <td className="px-4 py-3">40</td>
                      <td className="px-4 py-3">201</td>
                      <td className="px-4 py-3">92</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Physical Properties */}
            <div className="bg-gray-50 p-8 rounded-lg mb-8">
              <h3 className="text-2xl font-semibold text-navy-primary mb-6">Physical Properties of SS 304</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-navy-primary mb-4">Thermal Properties</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Density at 68°F:</strong> 0.285 lbm/in³</li>
                    <li><strong>Melting Range:</strong> 2500°F to 2590°F</li>
                    <li><strong>Thermal Conductivity at 212°F:</strong> 9.4 BTU/h ft. °F</li>
                    <li><strong>Specific Heat:</strong> 0.1200 BTU/lb/°F</li>
                    <li><strong>Coefficient of Thermal Expansion:</strong> 9.4 x 10⁻⁶ (in/in)/°F</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="font-semibold text-navy-primary mb-4">Electrical & Mechanical</h4>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Electrical Resistivity at 68°F:</strong> 28.3 x 10⁻⁶ in</li>
                    <li><strong>Modulus of Elasticity:</strong> 28 x 10⁶ psi</li>
                    <li><strong>Modulus of Elasticity (annealed):</strong> 29 x 10⁶ psi</li>
                    <li><strong>Magnetic Permeability:</strong> Non-magnetic in annealed condition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ready Stock Inventory */}
        <section className="py-16 bg-gray-50" data-testid="ready-stock-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="ready-stock-title">
              Ready Stock Available - SS 304/304L Pipes & Tubes
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid md:grid-cols-3 gap-6">
                {readyStock.map((stock, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4" data-testid={`stock-${index}`}>
                    <h4 className="font-semibold text-navy-primary mb-3">{stock.size} Pipes & Tubes</h4>
                    <div className="mb-3">
                      <strong className="text-sm">Schedules:</strong>
                      <div className="flex gap-1 mt-1">
                        {stock.schedules.map((schedule, idx) => (
                          <span key={idx} className="bg-navy-primary text-white text-xs px-2 py-1 rounded">{schedule}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <strong className="text-sm">Grades:</strong>
                      <div className="flex gap-1 mt-1 flex-wrap">
                        {stock.grades.map((grade, idx) => (
                          <span key={idx} className="bg-gold-primary text-navy-primary text-xs px-2 py-1 rounded">{grade}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">Other sizes and schedules available on request. Custom cutting and fabrication services provided.</p>
                <Link href="/contact" className="bg-navy-primary text-white py-3 px-8 rounded-lg hover:bg-navy-secondary transition-colors duration-300 inline-block">
                  Check Stock Availability
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-white" data-testid="specifications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="specifications-title">
                Complete Technical Specifications
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-gray-50 p-8 rounded-lg" data-testid="specifications-standards">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Standards & Specifications</h3>
                  <ul className="space-y-3">
                    {specifications.map((spec, index) => (
                      <li key={index} className="flex items-start" data-testid={`spec-${index}`}>
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg" data-testid="specifications-applications">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Industries & Applications</h3>
                  <ul className="space-y-3">
                    {applications.map((app, index) => (
                      <li key={index} className="flex items-start" data-testid={`app-${index}`}>
                        <Star className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Available Grades */}
        <section className="py-16 bg-gray-50" data-testid="grades-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="grades-title">
              Complete Range of Stainless Steel Grades Available
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {grades.map((grade, index) => (
                  <div key={index} className="bg-navy-primary text-white text-center py-3 px-4 rounded-lg font-semibold text-sm hover:bg-navy-secondary transition-colors duration-300" data-testid={`grade-${index}`}>
                    {grade}
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-gray-600 mb-4">All grades available in seamless, welded (ERW), and fabricated forms. Custom alloys and special grades available on request.</p>
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <Package className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-navy-primary">Seamless Pipes</h4>
                    <p className="text-sm text-gray-600">1/2" to 16" NB</p>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <Package className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-navy-primary">ERW Pipes</h4>
                    <p className="text-sm text-gray-600">1/2" to 24" NB</p>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <Package className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                    <h4 className="font-semibold text-navy-primary">EFW Pipes</h4>
                    <p className="text-sm text-gray-600">6" to 100" NB</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Features & Benefits */}
        <section className="py-16 bg-white" data-testid="benefits-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="benefits-title">
              Product Features & Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Shield className="w-12 h-12 text-gold-primary mb-4" />
                <h3 className="text-xl font-semibold text-navy-primary mb-3">Superior Corrosion Resistance</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Excellent resistance to atmospheric corrosion</li>
                  <li>• Superior performance in acidic environments</li>
                  <li>• Outstanding oxidation resistance at high temperatures</li>
                  <li>• Resistant to pitting and crevice corrosion</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <CheckCircle className="w-12 h-12 text-gold-primary mb-4" />
                <h3 className="text-xl font-semibold text-navy-primary mb-3">Quality Assurance</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Complete Mill Test Certificate (MTC)</li>
                  <li>• Material traceability from mill to customer</li>
                  <li>• Third-party inspection available</li>
                  <li>• ISO 9001:2015 certified quality system</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Award className="w-12 h-12 text-gold-primary mb-4" />
                <h3 className="text-xl font-semibold text-navy-primary mb-3">Precision Dimensions</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Accurate outer diameter and wall thickness</li>
                  <li>• Smooth surface finish</li>
                  <li>• Excellent roundness and straightness</li>
                  <li>• Custom cutting and beveling services</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <TrendingUp className="w-12 h-12 text-gold-primary mb-4" />
                <h3 className="text-xl font-semibold text-navy-primary mb-3">High Strength Properties</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Excellent mechanical strength at all temperatures</li>
                  <li>• Good impact resistance even at low temperatures</li>
                  <li>• Superior fatigue resistance</li>
                  <li>• Excellent weldability and formability</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Package className="w-12 h-12 text-gold-primary mb-4" />
                <h3 className="text-xl font-semibold text-navy-primary mb-3">Wide Size Range</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Sizes from 1/8" NB to 48" NB</li>
                  <li>• Schedules from 5S to XXS</li>
                  <li>• Wall thickness from 0.5mm to 50mm</li>
                  <li>• Standard and custom lengths available</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Truck className="w-12 h-12 text-gold-primary mb-4" />
                <h3 className="text-xl font-semibold text-navy-primary mb-3">Fast Delivery</h3>
                <ul className="text-gray-600 space-y-1 text-sm">
                  <li>• Ready stock for immediate delivery</li>
                  <li>• Pan-India delivery network</li>
                  <li>• International shipping available</li>
                  <li>• Custom packaging for safe transport</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Size Chart & Weight Table */}
        <section className="py-16 bg-gray-50" data-testid="size-chart-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="size-chart-title">
                Comprehensive Size Chart & Weight Table
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="size-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Nominal Size</th>
                      <th className="px-6 py-4 text-left">Outside Diameter (mm)</th>
                      <th className="px-6 py-4 text-left">Schedule 10S (mm)</th>
                      <th className="px-6 py-4 text-left">Schedule 40S (mm)</th>
                      <th className="px-6 py-4 text-left">Schedule 80S (mm)</th>
                      <th className="px-6 py-4 text-left">Weight kg/m (Sch 40S)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">1/2"</td>
                      <td className="px-6 py-4">21.3</td>
                      <td className="px-6 py-4">1.65</td>
                      <td className="px-6 py-4">2.77</td>
                      <td className="px-6 py-4">3.73</td>
                      <td className="px-6 py-4">1.27</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">3/4"</td>
                      <td className="px-6 py-4">26.9</td>
                      <td className="px-6 py-4">1.65</td>
                      <td className="px-6 py-4">2.87</td>
                      <td className="px-6 py-4">3.91</td>
                      <td className="px-6 py-4">1.69</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">1"</td>
                      <td className="px-6 py-4">33.7</td>
                      <td className="px-6 py-4">1.65</td>
                      <td className="px-6 py-4">3.38</td>
                      <td className="px-6 py-4">4.55</td>
                      <td className="px-6 py-4">2.50</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">2"</td>
                      <td className="px-6 py-4">60.3</td>
                      <td className="px-6 py-4">1.65</td>
                      <td className="px-6 py-4">3.91</td>
                      <td className="px-6 py-4">5.54</td>
                      <td className="px-6 py-4">5.44</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">3"</td>
                      <td className="px-6 py-4">88.9</td>
                      <td className="px-6 py-4">2.11</td>
                      <td className="px-6 py-4">5.49</td>
                      <td className="px-6 py-4">7.62</td>
                      <td className="px-6 py-4">11.29</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">4"</td>
                      <td className="px-6 py-4">114.3</td>
                      <td className="px-6 py-4">2.11</td>
                      <td className="px-6 py-4">6.02</td>
                      <td className="px-6 py-4">8.56</td>
                      <td className="px-6 py-4">16.07</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">6"</td>
                      <td className="px-6 py-4">168.3</td>
                      <td className="px-6 py-4">2.77</td>
                      <td className="px-6 py-4">7.11</td>
                      <td className="px-6 py-4">10.97</td>
                      <td className="px-6 py-4">28.26</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">8"</td>
                      <td className="px-6 py-4">219.1</td>
                      <td className="px-6 py-4">2.77</td>
                      <td className="px-6 py-4">8.18</td>
                      <td className="px-6 py-4">12.70</td>
                      <td className="px-6 py-4">42.55</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">10"</td>
                      <td className="px-6 py-4">273.0</td>
                      <td className="px-6 py-4">3.40</td>
                      <td className="px-6 py-4">9.27</td>
                      <td className="px-6 py-4">15.09</td>
                      <td className="px-6 py-4">60.29</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">12"</td>
                      <td className="px-6 py-4">323.8</td>
                      <td className="px-6 py-4">3.96</td>
                      <td className="px-6 py-4">10.31</td>
                      <td className="px-6 py-4">17.48</td>
                      <td className="px-6 py-4">79.91</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600 text-sm">Weights calculated for SS 304/304L material. Other grades and schedules available on request.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testing & Certification */}
        <section className="py-16 bg-white" data-testid="testing-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="testing-title">
              Testing & Certification Services
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-navy-primary mb-6">Destructive Testing</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Tensile Testing (Ultimate & Yield Strength)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Elongation and Reduction of Area Testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Hardness Testing (Brinell & Rockwell)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Impact Testing (Charpy V-Notch)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Chemical Analysis (Spectro Analysis)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Pitting Corrosion Testing</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-navy-primary mb-6">Non-Destructive Testing</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Positive Material Identification (PMI)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Radiographic Testing (X-Ray)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Ultrasonic Testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Eddy Current Testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Hydrostatic Testing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Dimensional Inspection</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">All testing carried out as per ASTM, ASME, and international standards. Third-party inspection welcome.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-navy-primary text-white px-4 py-2 rounded-lg text-sm">IBR Certified</span>
                <span className="bg-navy-primary text-white px-4 py-2 rounded-lg text-sm">Non-IBR Certified</span>
                <span className="bg-navy-primary text-white px-4 py-2 rounded-lg text-sm">ISO 9001:2015</span>
                <span className="bg-navy-primary text-white px-4 py-2 rounded-lg text-sm">ASTM Certified</span>
                <span className="bg-navy-primary text-white px-4 py-2 rounded-lg text-sm">ASME Certified</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gray-50" data-testid="why-choose-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="why-choose-title">
              Why Choose Mamta Steel Traders?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Award className="w-12 h-12 text-gold-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy-primary mb-3">20+ Years Experience</h3>
                <p className="text-gray-600">Over two decades of expertise in stainless steel supply and distribution</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Package className="w-12 h-12 text-gold-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy-primary mb-3">Largest Inventory</h3>
                <p className="text-gray-600">Comprehensive stock of all grades and sizes for immediate delivery</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Shield className="w-12 h-12 text-gold-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy-primary mb-3">Quality Assured</h3>
                <p className="text-gray-600">Every product comes with complete Mill Test Certificate and quality guarantee</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <TrendingUp className="w-12 h-12 text-gold-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy-primary mb-3">Competitive Pricing</h3>
                <p className="text-gray-600">Best prices in the market with transparent pricing policy</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Truck className="w-12 h-12 text-gold-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy-primary mb-3">Pan-India Delivery</h3>
                <p className="text-gray-600">Fast and reliable delivery network covering entire India</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <Users className="w-12 h-12 text-gold-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-navy-primary mb-3">Expert Support</h3>
                <p className="text-gray-600">Technical support and consultation from our experienced team</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-navy-primary text-white" data-testid="contact-cta-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="cta-title">
                Ready to Order Stainless Steel Pipes & Tubes?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes, technical specifications, and expert consultation from India's leading stainless steel stockist
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3" data-testid="contact-phone">
                  <Phone className="w-6 h-6 text-gold-primary" />
                  <div>
                    <p className="font-semibold">Call Us 24/7</p>
                    <p className="text-blue-100">+91 9819322576</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3" data-testid="contact-email">
                  <Mail className="w-6 h-6 text-gold-primary" />
                  <div>
                    <p className="font-semibold">Email Quotations</p>
                    <p className="text-blue-100">mamtasteeltraders@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3" data-testid="contact-location">
                  <MapPin className="w-6 h-6 text-gold-primary" />
                  <div>
                    <p className="font-semibold">Visit Our Warehouse</p>
                    <p className="text-blue-100">Mumbai, Maharashtra, India</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-4 px-8 rounded-lg transition-colors duration-300" data-testid="cta-contact-button">
                  Get Instant Quote
                </Link>
                <a href="tel:+919819322576" className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold py-4 px-8 rounded-lg transition-colors duration-300" data-testid="cta-call-button">
                  Call for Technical Support
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}