import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Zap, Settings, Users, Globe } from "lucide-react";
import ss_plate_mamta_steel_traders_img from "@/assets/SS PLATE  MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function AluminiumAlloyPlates() {
  const specifications = [
    "ASTM B209 - Standard Specification for Aluminum and Aluminum-Alloy Sheet and Plate",
    "ASTM B221 - Standard Specification for Aluminum and Aluminum-Alloy Extruded Bars, Rods, Wire, Profiles, and Tubes", 
    "AMS-QQ-A-250/4 - Aerospace Material Specification for High-Strength Applications",
    "AA (Aluminum Association) Standards - 1xxx, 3xxx, 5xxx, 6xxx, 7xxx Series",
    "EN 485 - Aluminium and aluminium alloys - Sheet, strip and plate",
    "DIN, MIL-Spec, QQ, DFARS and SAE Standards",
    "Thickness Range: 0.5mm to 200mm",
    "Alloys: 1100, 2024, 3003, 5052, 5083, 6061, 6063, 7075"
  ];

  const applications = [
    "Aircraft fuselage and wing tension members",
    "Commercial & military aircraft structures",
    "Critical aircraft components and fuselage skins", 
    "Shear webs and ribs for aerospace applications",
    "Marine and shipbuilding applications",
    "Automotive body panels and parts",
    "Building and construction cladding",
    "Food processing equipment",
    "Chemical processing industry",
    "Transportation and railway components",
    "Electronic and electrical enclosures",
    "Truck wheels and crew machine products",
    "Veterinary and orthopedic braces",
    "Scientific instruments and rivets"
  ];

  const features = [
    { icon: Shield, title: "Corrosion Resistant", desc: "Natural oxide layer provides excellent corrosion protection in marine environments" },
    { icon: TrendingUp, title: "Lightweight", desc: "One-third the weight of steel with exceptional strength-to-weight ratio" },
    { icon: Award, title: "Aerospace Grade", desc: "Meets stringent aerospace, military and marine industry standards" },
    { icon: CheckCircle, title: "Excellent Formability", desc: "Superior formability and machinability for complex shapes and precision components" },
    { icon: Zap, title: "High Fatigue Resistance", desc: "Excellent fatigue resistance especially in thick plate form for critical applications" },
    { icon: Settings, title: "Heat Treatable", desc: "Available in various tempers including T3, T4, T6, T8 and annealed state" },
    { icon: Users, title: "Industry Approved", desc: "Approved by major aerospace and defense contractors worldwide" },
    { icon: Globe, title: "DFARS Compliant", desc: "Defense Federal Acquisition Regulation Supplement compliant materials" }
  ];

  // Chemical composition data for 2024 T351
  const chemicalComposition = [
    { element: "Si", min: "–", max: "0.50" },
    { element: "Fe", min: "–", max: "0.50" },
    { element: "Cu", min: "3.80", max: "4.90" },
    { element: "Mn", min: "0.30", max: "0.90" },
    { element: "Mg", min: "1.20", max: "1.80" },
    { element: "Cr", min: "–", max: "0.10" },
    { element: "Zn", min: "–", max: "0.25" },
    { element: "Ti", min: "–", max: "0.15" },
    { element: "V", min: "–", max: "0.05" },
    { element: "Zr", min: "–", max: "0.05" },
    { element: "Other Each", min: "–", max: "0.05" },
    { element: "Other Total", min: "–", max: "0.05" }
  ];

  // Product gallery data
  const productImages = [
    {
      src: ss_plate_mamta_steel_traders_img,
      alt: "2024 T351 Plates Sheets AMS QQ-A-250/4, ASTM B209",
      title: "2024 T351 Aluminum Plates",
      description: "High-strength 2024 T351 aluminum plates for aerospace applications"
    },
    {
      src: ss_plate_mamta_steel_traders_img, 
      alt: "5052-h32-sheet-stockist-supplier",
      title: "5052-H32 Aluminum Sheet",
      description: "Marine grade 5052-H32 aluminum sheets with excellent corrosion resistance"
    },
    {
      src: ss_plate_mamta_steel_traders_img,
      alt: "Aluminium 5083 Temper O, H111, H112, H116", 
      title: "5083 Aluminum Plates",
      description: "5083 aluminum plates in various tempers for marine and structural applications"
    },
    {
      src: ss_plate_mamta_steel_traders_img,
      alt: "6061-t6-plate-sheet",
      title: "6061 T6 Aluminum Plates", 
      description: "Versatile 6061 T6 aluminum plates for general engineering applications"
    },
    {
      src: ss_plate_mamta_steel_traders_img,
      alt: "7075-PLATE-T6-T651-STOCKIST",
      title: "7075 T6/T651 Aluminum Plates",
      description: "Ultra-high strength 7075 aluminum plates for aerospace and defense applications"
    }
  ];

  return (
    <>
      <ProductSEO
        title="Aluminium Alloy Plates & Sheets | 2024 T351, 5052, 6061, 7075 | Mumbai"
        description="Premium aluminium alloy plates & sheets in aerospace grades 2024 T351, 5052-H32, 6061-T6, 7075-T651. ASTM B209, AMS-QQ-A-250/4, DFARS compliant. For aircraft fuselage, wing tension members, marine applications. Heat treatable aluminum with excellent fatigue resistance. Best prices from Mumbai supplier."
        keywords="aluminium alloy plates, 2024 T351 plates, aluminum plates ASTM B209, AMS-QQ-A-250/4 plates, DFARS aluminum, aerospace aluminum plates, 5052 H32 sheets, 6061 T6 plates, 7075 T651 plates, aircraft fuselage plates, wing tension members, marine aluminum, heat treatable aluminum, aluminum chemical composition, aluminum alloy supplier Mumbai, aluminum plates manufacturer, aluminum sheets exporter, aerospace grade aluminum, military specification aluminum, aluminum fatigue resistance, aluminum corrosion resistance"
        category="Plates & Sheets"
        productName="Aluminium Alloy Plates & Sheets - 2024 T351, 5052, 6061, 7075"
        specifications={specifications}
        canonicalUrl="https://mamtasteel.com/product/plates-sheets/aluminium-alloy"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white dark:bg-gray-800 py-4 border-b border-gray-200 dark:border-gray-700" data-testid="breadcrumb-nav">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
              <Link href="/" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-home">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-products">Products</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product/plates-sheets" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-plates-sheets">Plates & Sheets</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Aluminium Alloy Plates & Sheets</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="hero-title">
                Premium Aluminium Alloy Plates & Sheets
              </h1>
              <p className="text-lg md:text-xl mb-4 text-blue-100" data-testid="hero-subtitle">
                Aerospace Grade • ASTM B209 • AMS-QQ-A-250/4 • DFARS Compliant
              </p>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-description">
                High-strength, lightweight aluminum alloy plates for aircraft fuselage, wing tension members, marine applications, and critical structural components. Heat treatable alloys with excellent fatigue resistance.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-semibold">2024 T351</div>
                  <div className="text-blue-200">Aerospace Grade</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-semibold">5052-H32</div>
                  <div className="text-blue-200">Marine Grade</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-semibold">6061-T6</div>
                  <div className="text-blue-200">General Purpose</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-semibold">7075-T651</div>
                  <div className="text-blue-200">Ultra High Strength</div>
                </div>
              </div>
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

        {/* Product Gallery */}
        <section className="py-16 bg-white dark:bg-gray-800" data-testid="product-gallery-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-4" data-testid="gallery-title">
              Aluminium Alloy Products Gallery
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Explore our premium range of aluminum alloy plates and sheets in various grades and specifications for different industrial applications.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {productImages.map((image, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" data-testid={`product-image-${index}`}>
                  <div className="relative">
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 bg-navy-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      In Stock
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-navy-primary dark:text-white mb-2">{image.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{image.description}</p>
                    <Link href="/contact" className="inline-flex items-center text-gold-primary hover:text-gold-secondary font-semibold transition-colors duration-300">
                      Get Quote <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900" data-testid="features-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-4" data-testid="features-title">
              Why Choose Our Aluminium Alloy Plates?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-4xl mx-auto">
              Our aluminum alloy plates meet the highest industry standards and are trusted by aerospace, marine, automotive, and construction industries worldwide.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow duration-300" data-testid={`feature-${index}`}>
                  <feature.icon className="w-12 h-12 text-gold-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-navy-primary dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed 2024 T351 Section */}
        <section className="py-16 bg-white" data-testid="aluminum-2024-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-4" data-testid="aluminum-2024-title">
                  Aluminium 2024 T351 Plates & Sheets
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                  AMS-QQ-A-250/4 • ASTM B209 • DFARS Compliant • Aerospace Grade
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 mb-12">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Product Description</h3>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      <strong>2024 T351 Plates</strong> is a Heat Treatable Aluminum Alloy known for its high strength-to-weight ratio and good fatigue resistance. It is primarily used in aerospace applications due to its suitability for fuselage skins, wing tension members, and other structural components. The alloy's primary alloying element is copper.
                    </p>
                    <p>
                      Aluminium 2024 is one of the more prominent aluminium alloys. Due to the alloys good fatigue resistance, especially in thick plate form, the material is specified for use in the aerospace and military sector in fuselage applications in such areas as structures and wing tension members.
                    </p>
                    <p>
                      With improved fracture toughness and fatigue crack growth, Alloy 2024 continues to maintain strength characteristics. The alloy is available in T3, T4 and T8 tempers and in the annealed state.
                    </p>
                    <p>
                      Aluminum 2024, known for its use in the aircraft industry, is an alloy that offers excellent strength. When in the annealed condition it is readily formed and has good machinability. Though it has a relatively low level of corrosion resistance, it can be machined to a high finish.
                    </p>
                  </div>
                </div>
                
                <div className="bg-navy-primary text-white p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-6">Key Advantages</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>High strength-to-weight ratio ideal for aerospace applications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Excellent fatigue resistance in thick plate form</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Superior fracture toughness and crack growth resistance</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Approved for military and commercial aircraft use</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Available in multiple tempers (T3, T4, T8, Annealed)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Excellent machinability and surface finish capability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chemical Composition Table */}
        <section className="py-16 bg-gray-50" data-testid="chemical-composition-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-4" data-testid="chemical-composition-title">
                Aluminium 2024 Chemical Composition
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12">
                Chemical composition of 2024 T351 aluminum alloy as per ASTM B209 and AMS-QQ-A-250/4 standards
              </p>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full" data-testid="chemical-composition-table">
                    <thead className="bg-navy-primary text-white">
                      <tr>
                        <th className="px-6 py-4 text-left text-lg font-semibold">Elements</th>
                        <th className="px-6 py-4 text-center text-lg font-semibold">Min. %</th>
                        <th className="px-6 py-4 text-center text-lg font-semibold">Max. %</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {chemicalComposition.map((comp, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-semibold text-navy-primary">{comp.element}</td>
                          <td className="px-6 py-4 text-center">{comp.min}</td>
                          <td className="px-6 py-4 text-center font-semibold">{comp.max}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="bg-blue-50 p-6 border-t">
                  <h4 className="text-lg font-semibold text-navy-primary mb-2">Note:</h4>
                  <p className="text-gray-700">
                    The primary alloying element in 2024 aluminum is <strong>Copper (Cu: 3.80-4.90%)</strong>, which provides the high strength characteristics. Manganese and Magnesium are also significant contributors to the alloy's properties.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 bg-white" data-testid="specifications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="specifications-title">
                Technical Specifications
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-lg shadow-md" data-testid="specifications-standards">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Standards & Alloys</h3>
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
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Industry Applications</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-gold-primary pl-4">
                      <h4 className="font-semibold text-navy-primary mb-2">Aerospace & Aviation</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Aircraft fuselage and wing tension members</li>
                        <li>• Commercial & military aircraft structures</li>
                        <li>• Critical aircraft components and fuselage skins</li>
                        <li>• Shear webs and ribs for aerospace applications</li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-navy-primary mb-2">Industrial & Manufacturing</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Truck wheels and crew machine products</li>
                        <li>• Scientific instruments and precision equipment</li>
                        <li>• Food processing equipment</li>
                        <li>• Chemical processing industry components</li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-navy-primary mb-2">Marine & Automotive</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Marine and shipbuilding applications</li>
                        <li>• Automotive body panels and structural parts</li>
                        <li>• Transportation and railway components</li>
                        <li>• Electronic and electrical enclosures</li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-navy-primary mb-2">Specialized Applications</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Veterinary and orthopedic braces</li>
                        <li>• Building and construction cladding</li>
                        <li>• Rivets and fastening components</li>
                        <li>• High-performance structural applications</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aluminium Alloy Grades */}
        <section className="py-16 bg-white" data-testid="alloy-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="alloy-grades-title">
                Available Aluminium Alloy Grades
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="alloy-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Alloy</th>
                      <th className="px-6 py-4 text-left">Series</th>
                      <th className="px-6 py-4 text-left">Temper</th>
                      <th className="px-6 py-4 text-left">Key Characteristics</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">1100</td>
                      <td className="px-6 py-4">1xxx (Pure Al)</td>
                      <td className="px-6 py-4">O, H14, H18</td>
                      <td className="px-6 py-4">Excellent corrosion resistance, high conductivity</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">3003</td>
                      <td className="px-6 py-4">3xxx (Al-Mn)</td>
                      <td className="px-6 py-4">O, H14, H18</td>
                      <td className="px-6 py-4">Good formability, moderate strength</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">5052</td>
                      <td className="px-6 py-4">5xxx (Al-Mg)</td>
                      <td className="px-6 py-4">O, H32, H34</td>
                      <td className="px-6 py-4">Good marine corrosion resistance</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">6061</td>
                      <td className="px-6 py-4">6xxx (Al-Mg-Si)</td>
                      <td className="px-6 py-4">T6, T651</td>
                      <td className="px-6 py-4">Heat treatable, excellent machining</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">7075</td>
                      <td className="px-6 py-4">7xxx (Al-Zn)</td>
                      <td className="px-6 py-4">T6, T651</td>
                      <td className="px-6 py-4">Aerospace grade, highest strength</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Company Information & Quality Assurance */}
        <section className="py-16 bg-white" data-testid="company-quality-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-4" data-testid="company-quality-title">
                Leading Aluminum Alloy Supplier & Manufacturer
              </h2>
              <p className="text-xl text-gray-600 text-center mb-12 max-w-4xl mx-auto">
                Mamta Steel Traders offers a wide variety of Aluminum 2024 like plates, sheets, and bars. All of our Aluminum products meet or exceed leading industry standards.
              </p>
              
              <div className="grid lg:grid-cols-2 gap-12 mb-12">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Quality Standards We Meet</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="font-semibold text-navy-primary">ASTM Standards</div>
                      <div className="text-sm text-gray-600">International Standards</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="font-semibold text-navy-primary">AMS Standards</div>
                      <div className="text-sm text-gray-600">Aerospace Material Specs</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="font-semibold text-navy-primary">DIN Standards</div>
                      <div className="text-sm text-gray-600">German Industrial Standards</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="font-semibold text-navy-primary">MIL-Spec</div>
                      <div className="text-sm text-gray-600">Military Specifications</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="font-semibold text-navy-primary">QQ Standards</div>
                      <div className="text-sm text-gray-600">Federal Standards</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="font-semibold text-navy-primary">DFARS</div>
                      <div className="text-sm text-gray-600">Defense Acquisition</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="font-semibold text-navy-primary">SAE Standards</div>
                      <div className="text-sm text-gray-600">Automotive Standards</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="font-semibold text-navy-primary">EN Standards</div>
                      <div className="text-sm text-gray-600">European Standards</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-navy-primary text-white p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-6">Additional Products & Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>6061 aluminum as per AMS 4173 / AMS-QQ-A200/8</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Custom cutting and sizing services available</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Material certification and test reports provided</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Express delivery and worldwide shipping</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Technical support and material consultation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Competitive pricing for bulk orders</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-navy-primary mb-4">Why Choose Our Aluminum Alloys?</h3>
                <p className="text-lg text-gray-700 max-w-4xl mx-auto">
                  Our aluminum alloy plates and sheets are trusted by major aerospace manufacturers, defense contractors, and industrial companies worldwide. We maintain strict quality control and provide material traceability for critical applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-navy-primary text-white" data-testid="contact-cta-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="cta-title">
                Ready to Order Aluminium Alloy Plates?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our aluminium alloy specialists
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