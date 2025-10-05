import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import cs_mamta_steel_traders_img from "@/assets/CS  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function CarbonSteelRoundBars() {
  // All 43 Carbon Steel Products from Textron Steel Alloys
  const carbonSteelProducts = [
    { id: 1, title: "100Cr6 Round Bar", image: cs_mamta_steel_traders_img, alt: "100CR6 Bearing Steel Round bar 52100", desc: "Bearing steel with high hardness and wear resistance" },
    { id: 2, title: "15C8 Round Bars", image: cs_mamta_steel_traders_img, alt: "IS 1875 15C8 Round Bars", desc: "Indian standard carbon steel for general engineering" },
    { id: 3, title: "16MnCr5 Round Bar", image: cs_mamta_steel_traders_img, alt: "16MnCr5 Round Bar Stockist Supplier", desc: "Case hardening steel for gear applications" },
    { id: 4, title: "20C8 Round Bars", image: cs_mamta_steel_traders_img, alt: "20C8 Round Bars IS 1875 1570", desc: "Low carbon steel for machining applications" },
    { id: 5, title: "20MnCr5 Round Bars", image: cs_mamta_steel_traders_img, alt: "20MnCr5 Round Bars Suppliers", desc: "Case hardening steel with excellent toughness" },
    { id: 6, title: "20MnCr5 Round Bar (Cut Piece)", image: cs_mamta_steel_traders_img, alt: "20MnCr5 Round Bar Flat Cut Piece", desc: "Pre-cut pieces for immediate machining" },
    { id: 7, title: "38MnVS6 Round Bars", image: cs_mamta_steel_traders_img, alt: "38MnVS6 Round Bars 1.1303", desc: "Free cutting steel with sulfur addition" },
    { id: 8, title: "40C10S18 Round Bars", image: cs_mamta_steel_traders_img, alt: "40C10S18 Round Bars IS 4431", desc: "Free cutting steel for precision turning" },
    { id: 9, title: "4140 Round Bars", image: cs_mamta_steel_traders_img, alt: "SAE 4140 AISI 4140 Round Bars EN19", desc: "Chromium molybdenum alloy steel" },
    { id: 10, title: "42CrMo4 Round Bars", image: cs_mamta_steel_traders_img, alt: "42CrMo4 Round Bar 1.7225", desc: "High tensile strength alloy steel" },
    { id: 11, title: "44SMn28 Round Bar", image: cs_mamta_steel_traders_img, alt: "44SMn28 Round Bar 1.0762", desc: "Free cutting steel with manganese" },
    { id: 12, title: "51CrV4 Round Bars", image: cs_mamta_steel_traders_img, alt: "51CrV4 50CrV4 6150 Spring Steel", desc: "Spring steel with chromium and vanadium" },
    { id: 13, title: "805M20 Round Bars", image: cs_mamta_steel_traders_img, alt: "805M20 20NiCrMo2-2 1.6523", desc: "Nickel chrome molybdenum steel" },
    { id: 14, title: "A105 Round Bars", image: cs_mamta_steel_traders_img, alt: "A105 Round Bars Hot Rolled", desc: "Forging grade carbon steel" },
    { id: 15, title: "AISI 1144 Round Bar", image: cs_mamta_steel_traders_img, alt: "AISI 1144 Carbon Steel Round Bar", desc: "Free machining carbon steel" },
    { id: 16, title: "AISI 8620 Round Bar", image: cs_mamta_steel_traders_img, alt: "SAE 8620 AISI 8620 20NiCrMo2-2", desc: "Case hardening nickel chrome steel" },
    { id: 17, title: "AISI/SAE 4140 Round Bar", image: cs_mamta_steel_traders_img, alt: "AISI SAE 4140 Round Bars Stockist", desc: "Versatile alloy steel for machining" },
    { id: 18, title: "ASTM A193 B16 Round Bars", image: cs_mamta_steel_traders_img, alt: "ASTM A193 B16 Round Bars", desc: "High temperature fastener steel" },
    { id: 19, title: "B16 Round Bar", image: cs_mamta_steel_traders_img, alt: "B16 Bright Black Round Bars", desc: "Bright finished high temperature steel" },
    { id: 20, title: "C40 Round Bar", image: cs_mamta_steel_traders_img, alt: "C40 Carbon Steel Round Bar", desc: "Medium carbon steel for machining" },
    { id: 21, title: "C45 Round Bars", image: cs_mamta_steel_traders_img, alt: "C45 EN8D Round Bars JSW SAIL", desc: "Popular medium carbon steel grade" },
    { id: 22, title: "C55 Round Bars / EN9", image: cs_mamta_steel_traders_img, alt: "C55 EN9 070M55 Round Bars", desc: "High carbon steel for tools" },
    { id: 23, title: "EN19 Hex Bar", image: cs_mamta_steel_traders_img, alt: "EN19 HEX SAE 4140 42CRMO4", desc: "Hexagonal bars for special applications" },
    { id: 24, title: "EN1A Leaded / EN1APb", image: cs_mamta_steel_traders_img, alt: "EN1A Leaded EN1APb Round Hex", desc: "Free cutting steel with lead addition" },
    { id: 25, title: "EN1A Non Leaded", image: cs_mamta_steel_traders_img, alt: "EN1A Non Leaded Round Hex Bars", desc: "Mild steel for general engineering" },
    { id: 26, title: "EN24 Round Bars", image: cs_mamta_steel_traders_img, alt: "EN24 Round Bar Stockist Supplier", desc: "Nickel chrome molybdenum alloy steel" },
    { id: 27, title: "EN31 Round Bars", image: cs_mamta_steel_traders_img, alt: "EN31 Bright Black VD Route", desc: "High carbon chromium bearing steel" },
    { id: 28, title: "EN353 Round Bars", image: cs_mamta_steel_traders_img, alt: "EN353 Case Hardening Steel", desc: "Case hardening steel for gears" },
    { id: 29, title: "EN36C Round Bar / 832M13", image: cs_mamta_steel_traders_img, alt: "EN36C 832M13 14NiCrMo13-4", desc: "Heavy duty case hardening steel" },
    { id: 30, title: "EN41B Round Bars", image: cs_mamta_steel_traders_img, alt: "EN41B Round Bars Musco Forged", desc: "Chrome molybdenum steel for shafts" },
    { id: 31, title: "EN47 Round Bar", image: cs_mamta_steel_traders_img, alt: "EN47 Spring Steel Round Bar", desc: "Silicon manganese spring steel" },
    { id: 32, title: "EN8 Round Bars", image: cs_mamta_steel_traders_img, alt: "EN8 Round Bars Suppliers", desc: "Mild steel for general machining" },
    { id: 33, title: "EN8M / EN8DM", image: cs_mamta_steel_traders_img, alt: "EN8M EN8DM Round Bar", desc: "Modified mild steel grades" },
    { id: 34, title: "EN9 Round Bars", image: cs_mamta_steel_traders_img, alt: "EN9 Round Bars Suppliers", desc: "Medium carbon steel C55 grade" },
    { id: 35, title: "ETG100 Round Bars", image: cs_mamta_steel_traders_img, alt: "ETG100 ETG88 Free Cutting Steel", desc: "Free cutting steel for precision turning" },
    { id: 36, title: "S355J2 Round Bars", image: cs_mamta_steel_traders_img, alt: "S355J2 ST52-3 1.0577", desc: "Structural steel with good weldability" },
    { id: 37, title: "SAE 1018 Round Bars", image: cs_mamta_steel_traders_img, alt: "SAE 1018 Forged Rolled Bright", desc: "Low carbon steel for case hardening" },
    { id: 38, title: "SAE 4340 / AISI 4340", image: cs_mamta_steel_traders_img, alt: "SAE 4340 AISI 4340 AMS 6415", desc: "Ultra-high strength alloy steel" },
    { id: 39, title: "SAE 52100 Steel", image: cs_mamta_steel_traders_img, alt: "SAE 52100 Bearing Steel", desc: "High carbon chromium bearing steel" },
    { id: 40, title: "SAE 8620 Round Bars", image: cs_mamta_steel_traders_img, alt: "SAE 8620 1.6523 20NiCrMo2-2", desc: "Case hardening steel for gears" },
    { id: 41, title: "SCM420 Round Bars", image: cs_mamta_steel_traders_img, alt: "SCM420 18CrMo4 1.7243", desc: "Japanese standard alloy steel" },
    { id: 42, title: "ST52.3 Round Bar", image: cs_mamta_steel_traders_img, alt: "ST52-3 1.0580 E355", desc: "German standard structural steel" },
    { id: 43, title: "SUM43 Round Bars", image: cs_mamta_steel_traders_img, alt: "SUM43 JIS G 4804", desc: "Japanese free cutting steel grade" }
  ];

  const specifications = [
    "ASTM A36 - Standard Specification for Carbon Structural Steel",
    "ASTM A108 - Standard Specification for Steel Bars, Carbon and Alloy, Cold-Finished",
    "ASTM A193 - Standard Specification for Alloy-Steel and Stainless Steel Bolting Materials",
    "ASTM A276 - Standard Specification for Stainless Steel Bars and Shapes",
    "SAE J403 - Chemical Compositions of SAE Carbon Steels",
    "SAE J404 - Chemical Compositions of SAE Alloy Steels",
    "EN 10083 - Steels for quenching and tempering",
    "EN 10277 - Bright steel products - Technical delivery conditions",
    "IS 1570 - Steel bars for the reinforcement of concrete",
    "IS 1875 - Steel castings for general engineering purposes",
    "JIS G 4051 - Carbon steels for machine structural use",
    "JIS G 4804 - Free cutting steels",
    "BS 970 - Wrought steels for mechanical and allied engineering purposes",
    "DIN 17200 - Heat treatable steels, alloy steels",
    "Diameter Range: 6mm to 500mm diameter",
    "Grades: EN8, EN9, EN19, EN24, EN31, C45, 4140, 8620, 1018, 1045, A36, 52100",
    "Conditions: Hot Rolled, Cold Drawn, Bright, Annealed, Normalized, Hardened & Tempered"
  ];

  const applications = [
    "General Construction and Structural Fabrication",
    "Automotive Components - Shafts, Gears, Axles",
    "Machinery and Equipment Manufacturing",
    "Oil and Gas Industry Components",
    "Power Generation Equipment",
    "Mining and Heavy Equipment",
    "Agricultural Equipment and Implements",
    "Railway and Transportation Systems",
    "Marine and Shipbuilding Applications",
    "Fasteners, Bolts, and Hardware Manufacturing",
    "Tool and Die Manufacturing",
    "Bearing and Precision Components",
    "Case Hardening Applications",
    "Free Machining Operations",
    "Forging and Heat Treatment Applications",
    "Welding and Fabrication Projects",
    "General Engineering and Mechanical Parts",
    "Industrial Valves and Fittings"
  ];

  const features = [
    { icon: Shield, title: "Versatile", desc: "Suitable for a wide range of applications and industries" },
    { icon: TrendingUp, title: "Cost Effective", desc: "Economical choice for general engineering and construction" },
    { icon: Award, title: "Weldable", desc: "Excellent weldability for fabrication and assembly" },
    { icon: CheckCircle, title: "Readily Available", desc: "Standard grades available in various sizes and tolerances" }
  ];

  return (
    <>
      <ProductSEO
        title="Carbon Steel Round Bars - 43 Grades Available | EN8, EN9, EN19, C45, 4140, 8620 | Mumbai Supplier | Mamta Steel Traders"
        description="Complete range of carbon steel round bars - 43 grades including EN8, EN9, EN19, EN24, C45, 4140, 8620, 1018, A36, 52100. ASTM A108, SAE, EN, DIN certified. Best prices Mumbai India. Free machining, case hardening grades available."
        keywords="carbon steel round bars, EN8 round bars, EN9 round bars, EN19 round bars, C45 round bars, 4140 round bars, 8620 round bars, ASTM A108 bars, SAE 1018 bars, free machining steel, case hardening steel, bearing steel, Mumbai steel supplier, India steel exporter, cold finished steel bars, hot rolled steel bars, bright steel bars, carbon steel stockist"
        canonicalUrl="/product/round-bars/carbon-steel"
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
              <Link href="/product/round-bars" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-round-bars">Round Bars</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Carbon Steel Round Bars</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-heading md:text-heading font-bold mb-6" data-testid="hero-title">
                Premium Carbon Steel Round Bars
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-quality carbon steel round bars for general construction, automotive, and machinery applications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-get-quote">
                  Get Quote Now
                </Link>
                <a href="tel:+919819322576" className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-call-now">
                  Call Now: +91 9819322576
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-16 bg-white" data-testid="features-section">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="features-title">
              Why Choose Our Carbon Steel Round Bars?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300" data-testid={`feature-${index}`}>
                  <feature.icon className="w-12 h-12 text-gold-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-navy-primary mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 bg-gray-50" data-testid="specifications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="specifications-title">
                Technical Specifications
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-lg shadow-md" data-testid="specifications-standards">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Standards & Grades</h3>
                  <ul className="space-y-3">
                    {specifications.map((spec, index) => (
                      <li key={index} className="flex items-start" data-testid={`spec-${index}`}>
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md" data-testid="specifications-applications">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Applications</h3>
                  <ul className="space-y-3">
                    {applications.map((app, index) => (
                      <li key={index} className="flex items-start" data-testid={`app-${index}`}>
                        <Star className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* All 43 Carbon Steel Products Grid */}
        <section className="py-16 bg-gray-50" data-testid="products-grid">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-4" data-testid="products-title">
                Complete Range of Carbon Steel Round Bars - 43 Grades
              </h2>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
                From mild steel EN8 to high-strength alloy steel grades, we stock the complete range of carbon steel round bars 
                for automotive, construction, machinery, and general engineering applications. All grades available with mill test certificates.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
                {carbonSteelProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 overflow-hidden group" data-testid={`product-${product.id}`}>
                    <div className="relative overflow-hidden h-40">
                      <img 
                        src={product.image} 
                        alt={product.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2 bg-navy-primary text-white px-2 py-1 rounded text-xs font-semibold">
                        Grade {product.id}
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-bold text-navy-primary mb-2 line-clamp-1" data-testid={`product-title-${product.id}`}>
                        {product.title}
                      </h3>
                      <p className="text-gray-600 mb-3 text-sm line-clamp-2 leading-relaxed">
                        {product.desc}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-xs text-gray-500">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                          <span>In Stock</span>
                        </div>
                        <Link 
                          href="/contact" 
                          className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-3 py-1 rounded font-semibold transition-colors text-sm"
                          data-testid={`product-cta-${product.id}`}
                        >
                          Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Call to Action */}
              <div className="bg-gradient-to-r from-navy-primary to-navy-secondary rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Need Specific Grades or Custom Sizes?</h3>
                <p className="text-lg text-blue-100 mb-6 max-w-3xl mx-auto">
                  We maintain extensive inventory of all carbon steel grades. Special sizes, custom cutting, 
                  and expedited delivery available for urgent requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors">
                    Request Detailed Quote
                  </Link>
                  <a href="tel:+919819322576" className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors">
                    Call: +91 99674 44008
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive SEO Keywords Section */}
        <section className="py-16 bg-white" data-testid="seo-keywords">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-8" data-testid="seo-title">
                Popular Carbon Steel Round Bar Searches
              </h2>
              
              <div className="grid md:grid-cols-4 gap-6 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-navy-primary mb-4">EN Series Steels</h3>
                  <div className="flex flex-wrap gap-2">
                    {["EN8 round bars", "EN9 round bars", "EN19 round bars", "EN24 round bars", "EN31 round bars", "EN41B round bars", "EN47 spring steel"].map((keyword, index) => (
                      <span key={index} className="px-2 py-1 bg-navy-primary text-white text-xs rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-navy-primary mb-4">SAE/AISI Grades</h3>
                  <div className="flex flex-wrap gap-2">
                    {["SAE 1018 bars", "SAE 4140 bars", "SAE 8620 bars", "AISI 4340 bars", "SAE 52100 steel", "4140 round bar", "8620 case hardening"].map((keyword, index) => (
                      <span key={index} className="px-2 py-1 bg-navy-primary text-white text-xs rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-navy-primary mb-4">Popular Grades</h3>
                  <div className="flex flex-wrap gap-2">
                    {["C45 round bars", "C40 round bars", "100Cr6 bearing steel", "16MnCr5 gear steel", "42CrMo4 round bar", "ST52.3 structural", "A105 carbon steel"].map((keyword, index) => (
                      <span key={index} className="px-2 py-1 bg-navy-primary text-white text-xs rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-navy-primary mb-4">Location & Services</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Mumbai steel supplier", "India steel exporter", "carbon steel stockist", "steel dealer Mumbai", "bright steel bars", "free machining steel"].map((keyword, index) => (
                      <span key={index} className="px-2 py-1 bg-navy-primary text-white text-xs rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-navy-primary mb-4">Applications by Industry</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Automotive:</strong> Shafts, gears, axles, chassis components</li>
                    <li><strong>Construction:</strong> Structural members, reinforcement bars</li>
                    <li><strong>Machinery:</strong> Machine components, tooling, fixtures</li>
                    <li><strong>Oil & Gas:</strong> Downhole equipment, pipelines, valves</li>
                    <li><strong>Power Generation:</strong> Turbine components, generators</li>
                    <li><strong>Mining:</strong> Heavy equipment parts, conveyor systems</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-navy-primary mb-4">Steel Treatment Options</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Hot Rolled:</strong> As-rolled condition for general applications</li>
                    <li><strong>Cold Drawn:</strong> Improved surface finish and tolerance</li>
                    <li><strong>Bright/Peeled:</strong> Superior surface finish for machining</li>
                    <li><strong>Annealed:</strong> Softened for easy machining</li>
                    <li><strong>Normalized:</strong> Uniform grain structure</li>
                    <li><strong>Hardened & Tempered:</strong> High strength applications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carbon Steel Grades */}
        <section className="py-16 bg-white" data-testid="carbon-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="carbon-grades-title">
                Available Carbon Steel Grades
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="carbon-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Grade</th>
                      <th className="px-6 py-4 text-left">Carbon (%)</th>
                      <th className="px-6 py-4 text-left">Tensile Strength (MPa)</th>
                      <th className="px-6 py-4 text-left">Typical Applications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">1018</td>
                      <td className="px-6 py-4">0.15-0.20</td>
                      <td className="px-6 py-4">440</td>
                      <td className="px-6 py-4">General fabrication, case hardening</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">1020</td>
                      <td className="px-6 py-4">0.18-0.23</td>
                      <td className="px-6 py-4">470</td>
                      <td className="px-6 py-4">Structural components, bolts</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">1045</td>
                      <td className="px-6 py-4">0.43-0.50</td>
                      <td className="px-6 py-4">625</td>
                      <td className="px-6 py-4">Machinery parts, shafts, gears</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">A36</td>
                      <td className="px-6 py-4">0.25 Max</td>
                      <td className="px-6 py-4">400-550</td>
                      <td className="px-6 py-4">Structural steel, construction</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-navy-primary text-white" data-testid="contact-cta-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6" data-testid="cta-title">
                Ready to Order Carbon Steel Round Bars?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our carbon steel specialists
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3" data-testid="contact-phone">
                  <Phone className="w-6 h-6 text-gold-primary" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-blue-100">+91 9819322576</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3" data-testid="contact-email">
                  <Mail className="w-6 h-6 text-gold-primary" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-blue-100">mamtasteeltraders@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3" data-testid="contact-location">
                  <MapPin className="w-6 h-6 text-gold-primary" />
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-blue-100">Mumbai, Maharashtra</p>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-block" data-testid="cta-contact-button">
                Get Detailed Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}