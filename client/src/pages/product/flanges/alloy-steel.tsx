import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Factory, Truck, Clock, Users, Building2, Download, FileText, Globe } from "lucide-react";
import { Link } from "wouter";

export default function AlloySteelFlanges() {
  const specifications = [
    "ASTM A182/A182M - Standard Specification for Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
    "ASTM A350/A350M - Standard Specification for Carbon and Low-Alloy Steel Forgings",
    "ASME B16.5 - Pipe Flanges and Flanged Fittings NPS 1/2 through NPS 24",
    "ASME B16.47 - Large Diameter Steel Flanges NPS 26 through NPS 60",
    "ASME B16.48 - Steel Line Blanks",
    "API 6A - Specification for Wellhead and Christmas Tree Equipment",
    "MSS SP-44 - Steel Pipeline Flanges",
    "Size Range: 1/2\" to 60\" NB (DN 15 to DN 1500)",
    "Pressure Class: 150#, 300#, 600#, 900#, 1500#, 2500# (PN 10 to PN 420)",
    "Grades: F1, F5, F9, F11, F12, F22, F91, F92, F911",
    "Testing: Hydrostatic Testing, Radiographic Testing, Magnetic Particle Testing",
    "Certification: EN 10204 3.1 & 3.2, NACE MR0175, API 6A, PED 2014/68/EU"
  ];

  const flangeTypes = [
    "Slip-On Flanges",
    "Weld Neck Flanges", 
    "Blind Flanges",
    "Socket Weld Flanges",
    "Threaded Flanges",
    "Lap Joint Flanges",
    "Orifice Flanges",
    "Long Weld Neck Flanges"
  ];

  const applications = [
    "Power Generation Plants",
    "Petrochemical Refineries",
    "High-Temperature Steam Lines",
    "Chemical Processing Equipment",
    "Oil and Gas Industry",
    "Pressure Vessel Applications",
    "Heat Exchanger Systems",
    "Boiler Components"
  ];

  const features = [
    { icon: Shield, title: "High Temperature Resistant", desc: "Designed for elevated temperature service applications" },
    { icon: TrendingUp, title: "Superior Strength", desc: "Enhanced mechanical properties at high temperatures" },
    { icon: Award, title: "ASME Certified", desc: "ASME B16.5 and ASTM certified alloy steel flanges" },
    { icon: CheckCircle, title: "Multiple Grades", desc: "Wide range of alloy steel grades for specific applications" }
  ];

  const materialGrades = [
    { grade: "F1", composition: "0.5Cr-0.5Mo", tempRange: "Up to 510°C", application: "Moderate Temperature Service" },
    { grade: "F5", composition: "5Cr-0.5Mo", tempRange: "Up to 650°C", application: "High Temperature Service" },
    { grade: "F9", composition: "9Cr-1Mo", tempRange: "Up to 650°C", application: "Power Generation" },
    { grade: "F11", composition: "1.25Cr-0.5Mo", tempRange: "Up to 650°C", application: "Pressure Vessels" },
    { grade: "F22", composition: "2.25Cr-1Mo", tempRange: "Up to 650°C", application: "Petrochemical Industry" },
    { grade: "F91", composition: "9Cr-1Mo-V", tempRange: "Up to 650°C", application: "Advanced Power Plants" },
    { grade: "F92", composition: "9Cr-0.5Mo-1.8W-V-Nb", tempRange: "Up to 650°C", application: "Ultra-Supercritical Plants" }
  ];

  const mechanicalProperties = [
    { grade: "F1", tensileStrength: "415-585 MPa", yieldStrength: "205 MPa min", elongation: "22% min", hardness: "HB 137-187" },
    { grade: "F5", tensileStrength: "415-585 MPa", yieldStrength: "205 MPa min", elongation: "22% min", hardness: "HB 137-187" },
    { grade: "F9", tensileStrength: "585-750 MPa", yieldStrength: "415 MPa min", elongation: "20% min", hardness: "HB 197-241" },
    { grade: "F11", tensileStrength: "415-585 MPa", yieldStrength: "205 MPa min", elongation: "22% min", hardness: "HB 137-187" },
    { grade: "F22", tensileStrength: "415-585 MPa", yieldStrength: "205 MPa min", elongation: "22% min", hardness: "HB 137-187" },
    { grade: "F91", tensileStrength: "585-750 MPa", yieldStrength: "415 MPa min", elongation: "20% min", hardness: "HB 200-250" },
    { grade: "F92", tensileStrength: "620-850 MPa", yieldStrength: "440 MPa min", elongation: "20% min", hardness: "HB 250-300" }
  ];

  const sizeAvailability = [
    { size: "1/2\" - 2\"", class: "150# - 2500#", type: "Socket Weld, Threaded, Slip-On", delivery: "Ex-Stock" },
    { size: "2.5\" - 12\"", class: "150# - 2500#", type: "Weld Neck, Slip-On, Blind", delivery: "2-3 Weeks" },
    { size: "14\" - 24\"", class: "150# - 1500#", type: "Weld Neck, Slip-On, Blind", delivery: "4-6 Weeks" },
    { size: "26\" - 60\"", class: "150# - 900#", type: "Weld Neck, Slip-On, Blind", delivery: "6-8 Weeks" }
  ];

  const pricingData = [
    { grade: "F1", size: "1\" - 6\"", class: "150# - 600#", price: "₹2,500 - ₹15,000", moq: "10 Pcs" },
    { grade: "F5", size: "1\" - 6\"", class: "150# - 600#", price: "₹3,000 - ₹18,000", moq: "10 Pcs" },
    { grade: "F9", size: "1\" - 6\"", class: "150# - 600#", price: "₹3,500 - ₹22,000", moq: "10 Pcs" },
    { grade: "F11", size: "1\" - 6\"", class: "150# - 600#", price: "₹2,800 - ₹16,000", moq: "10 Pcs" },
    { grade: "F22", size: "1\" - 6\"", class: "150# - 600#", price: "₹3,200 - ₹19,000", moq: "10 Pcs" },
    { grade: "F91", size: "1\" - 6\"", class: "150# - 600#", price: "₹4,500 - ₹28,000", moq: "5 Pcs" },
    { grade: "F92", size: "1\" - 6\"", class: "150# - 600#", price: "₹5,500 - ₹35,000", moq: "5 Pcs" }
  ];

  const supplierStats = [
    { icon: Factory, title: "Mumbai Manufacturing Hub", desc: "4 manufacturing facilities in Mumbai with 2000+ MT monthly capacity" },
    { icon: Globe, title: "Pan-India Supply Network", desc: "Direct supply to 28 states with same-day dispatch from Mumbai" },
    { icon: Users, title: "Industry Experience", desc: "25+ years serving power plants, refineries, and chemical industries" },
    { icon: Award, title: "Quality Certifications", desc: "ISO 9001:2015, PED 2014/68/EU, NACE MR0175 certified supplier" }
  ];

  return (
    <>
      <ProductSEO
        title="India Best Alloy Steel Flanges Suppliers Mumbai | ASTM A182 F1 F5 F9 F11 F22 F91 F92 | Mamta Steel Traders"
        description="Leading Mumbai-based supplier of ASTM A182 alloy steel flanges in grades F1, F5, F9, F11, F22, F91, F92. Serving power plants, refineries across India with 25+ years experience. Best prices, fastest delivery from Mumbai warehouses."
        keywords="India best alloy steel flanges suppliers Mumbai, ASTM A182 flanges manufacturer Mumbai, F91 F22 F11 F5 flanges supplier India, alloy steel flanges Mumbai stock, power plant flanges Mumbai, refinery flanges supplier Mumbai, high temperature flanges Mumbai, flanges manufacturer Mumbai India, Mumbai steel traders alloy flanges"
        category="Flanges"
        productName="Alloy Steel Flanges"
        specifications={specifications}
        canonicalUrl="/product/flanges/alloy-steel"
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
              <Link href="/product/flanges" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-flanges">Flanges</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Alloy Steel Flanges</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Alloy Steel Flanges Suppliers Mumbai – ASTM A182 F1/F5/F9/F11/F22/F91/F92
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                India's leading Mumbai-based manufacturer and supplier of high-quality ASTM A182 alloy steel flanges for power plants, refineries, and petrochemical industries across India
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

        {/* Mumbai Service Coverage Introduction */}
        <section className="py-16 bg-white" data-testid="mumbai-intro-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-8" data-testid="mumbai-intro-title">
                Mumbai's Most Trusted Alloy Steel Flanges Supplier
              </h2>
              <p className="text-lg text-gray-700 mb-6" data-testid="mumbai-intro-description">
                Mamta Steel Traders has established itself as Mumbai's premier supplier of ASTM A182 alloy steel flanges, 
                serving customers across Maharashtra, Gujarat, Karnataka, Tamil Nadu, and all major industrial hubs in India. 
                With over 25 years of experience and 4 manufacturing facilities in Mumbai, we provide same-day dispatch 
                for standard sizes and custom manufacturing for specialized requirements.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <MapPin className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-navy-primary">Mumbai Headquarters</h3>
                  <p className="text-sm text-gray-600">4 manufacturing facilities with 2000+ MT capacity</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <Truck className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-navy-primary">Pan-India Delivery</h3>
                  <p className="text-sm text-gray-600">Direct supply to 28 states with fastest logistics</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <Clock className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-navy-primary">Same-Day Dispatch</h3>
                  <p className="text-sm text-gray-600">Ex-stock delivery for standard sizes from Mumbai</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Gallery */}
        <section className="py-16 bg-gray-50" data-testid="product-gallery-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="gallery-title">
                ASTM A182 Alloy Steel Flanges - Product Gallery
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="w-12 h-12 text-navy-primary mx-auto mb-2" />
                      <p className="text-sm font-semibold text-navy-primary">F1 Grade Flanges</p>
                      <p className="text-xs text-gray-600">0.5Cr-0.5Mo Alloy</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-navy-primary mb-1">ASTM A182 F1</h3>
                    <p className="text-sm text-gray-600">Temperature: Up to 510°C</p>
                    <p className="text-xs text-gray-500 mt-1">Pressure Vessels, Moderate Temperature Service</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="w-12 h-12 text-navy-primary mx-auto mb-2" />
                      <p className="text-sm font-semibold text-navy-primary">F5/F9 Grade Flanges</p>
                      <p className="text-xs text-gray-600">5Cr-0.5Mo / 9Cr-1Mo</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-navy-primary mb-1">ASTM A182 F5/F9</h3>
                    <p className="text-sm text-gray-600">Temperature: Up to 650°C</p>
                    <p className="text-xs text-gray-500 mt-1">Power Generation, High Temperature Service</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="w-12 h-12 text-navy-primary mx-auto mb-2" />
                      <p className="text-sm font-semibold text-navy-primary">F11/F22 Grade Flanges</p>
                      <p className="text-xs text-gray-600">1.25Cr-0.5Mo / 2.25Cr-1Mo</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-navy-primary mb-1">ASTM A182 F11/F22</h3>
                    <p className="text-sm text-gray-600">Temperature: Up to 650°C</p>
                    <p className="text-xs text-gray-500 mt-1">Petrochemical Industry, Pressure Vessels</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="w-12 h-12 text-navy-primary mx-auto mb-2" />
                      <p className="text-sm font-semibold text-navy-primary">F91/F92 Grade Flanges</p>
                      <p className="text-xs text-gray-600">9Cr-1Mo-V Advanced Alloys</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-navy-primary mb-1">ASTM A182 F91/F92</h3>
                    <p className="text-sm text-gray-600">Temperature: Up to 650°C</p>
                    <p className="text-xs text-gray-500 mt-1">Advanced Power Plants, Ultra-Supercritical</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link href="/contact" className="inline-flex items-center bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-6 rounded-lg transition-colors duration-300" data-testid="gallery-cta">
                  <Download className="w-5 h-5 mr-2" />
                  Download Product Catalog
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-16 bg-white" data-testid="features-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="features-title">
              Why Choose Our Alloy Steel Flanges?
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

        {/* Material Grades */}
        <section className="py-16 bg-gray-50" data-testid="material-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="grades-title">
                Available Material Grades
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-md" data-testid="material-grades-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left">Grade</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Composition</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Temperature Range</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Application</th>
                    </tr>
                  </thead>
                  <tbody>
                    {materialGrades.map((grade, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"} data-testid={`material-grade-row-${index}`}>
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-navy-primary">{grade.grade}</td>
                        <td className="border border-gray-300 px-4 py-3">{grade.composition}</td>
                        <td className="border border-gray-300 px-4 py-3">{grade.tempRange}</td>
                        <td className="border border-gray-300 px-4 py-3">{grade.application}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Mechanical Properties */}
        <section className="py-16 bg-white" data-testid="mechanical-properties-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="mechanical-properties-title">
                Mechanical Properties
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-md" data-testid="mechanical-properties-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left">Grade</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Tensile Strength</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Yield Strength</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Elongation</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Hardness</th>
                    </tr>
                  </thead>
                  <tbody>
                    {mechanicalProperties.map((property, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"} data-testid={`mechanical-property-row-${index}`}>
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-navy-primary">{property.grade}</td>
                        <td className="border border-gray-300 px-4 py-3">{property.tensileStrength}</td>
                        <td className="border border-gray-300 px-4 py-3">{property.yieldStrength}</td>
                        <td className="border border-gray-300 px-4 py-3">{property.elongation}</td>
                        <td className="border border-gray-300 px-4 py-3">{property.hardness}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Mumbai Supplier Advantages */}
        <section className="py-16 bg-gray-50" data-testid="supplier-advantages-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="supplier-advantages-title">
                Why Choose Mumbai's Leading Alloy Steel Flanges Supplier?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {supplierStats.map((stat, index) => (
                  <div key={index} className="text-center p-6 rounded-lg bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300" data-testid={`supplier-stat-${index}`}>
                    <stat.icon className="w-12 h-12 text-gold-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-navy-primary mb-2">{stat.title}</h3>
                    <p className="text-gray-600">{stat.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-12 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-navy-primary text-white px-6 py-4">
                  <h3 className="text-xl font-semibold">Mumbai Manufacturing Excellence</h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-navy-primary mb-3">Manufacturing Capabilities</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                          Monthly production capacity: 2000+ MT
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                          Advanced forging and machining facilities
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                          In-house heat treatment and testing labs
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                          Same-day dispatch for stock sizes
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-navy-primary mb-3">Quality Assurance</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                          100% dimensional inspection
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                          Material test certificates (MTC) provided
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                          Third-party inspection welcome
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                          Traceability to mill source
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Size Availability & Pricing */}
        <section className="py-16 bg-white" data-testid="pricing-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="pricing-title">
                Size Availability & Competitive Pricing
              </h2>
              
              {/* Size Availability Table */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-navy-primary mb-6">Standard Size Availability</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-md" data-testid="size-availability-table">
                    <thead className="bg-navy-primary text-white">
                      <tr>
                        <th className="border border-gray-300 px-4 py-3 text-left">Size Range</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">Pressure Class</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">Flange Types</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">Delivery</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sizeAvailability.map((size, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"} data-testid={`size-row-${index}`}>
                          <td className="border border-gray-300 px-4 py-3 font-semibold text-navy-primary">{size.size}</td>
                          <td className="border border-gray-300 px-4 py-3">{size.class}</td>
                          <td className="border border-gray-300 px-4 py-3">{size.type}</td>
                          <td className="border border-gray-300 px-4 py-3">{size.delivery}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pricing Table */}
              <div>
                <h3 className="text-2xl font-bold text-navy-primary mb-6">Competitive Pricing (Indicative)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-md" data-testid="pricing-table">
                    <thead className="bg-gold-primary text-white">
                      <tr>
                        <th className="border border-gray-300 px-4 py-3 text-left">Grade</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">Size Range</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">Pressure Class</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">Price Range</th>
                        <th className="border border-gray-300 px-4 py-3 text-left">MOQ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pricingData.map((pricing, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"} data-testid={`pricing-row-${index}`}>
                          <td className="border border-gray-300 px-4 py-3 font-semibold text-navy-primary">{pricing.grade}</td>
                          <td className="border border-gray-300 px-4 py-3">{pricing.size}</td>
                          <td className="border border-gray-300 px-4 py-3">{pricing.class}</td>
                          <td className="border border-gray-300 px-4 py-3 font-semibold text-green-600">{pricing.price}</td>
                          <td className="border border-gray-300 px-4 py-3">{pricing.moq}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-4 text-sm text-gray-600">
                  <p>* Prices are indicative and may vary based on quantity, specifications, and market conditions.</p>
                  <p>* Custom sizes and specifications available on request.</p>
                  <p>* Bulk order discounts available. Contact us for latest pricing.</p>
                </div>
              </div>

              {/* Related Products & Internal Links */}
              <div className="mt-12 bg-gradient-to-r from-navy-primary to-navy-secondary rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4 text-center">Explore Related Alloy Steel Products</h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <Link href="/product/flanges/carbon-steel" className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors rounded-lg p-4 block" data-testid="link-carbon-steel-flanges">
                    <h4 className="font-semibold mb-1">Carbon Steel Flanges</h4>
                    <p className="text-sm text-blue-100">ASTM A105 Carbon Steel Flanges</p>
                  </Link>
                  <Link href="/product/flanges/stainless-steel" className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors rounded-lg p-4 block" data-testid="link-stainless-steel-flanges">
                    <h4 className="font-semibold mb-1">Stainless Steel Flanges</h4>
                    <p className="text-sm text-blue-100">SS 304, 316, 321 Grade Flanges</p>
                  </Link>
                  <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary transition-colors rounded-lg p-4 block" data-testid="link-custom-requirements">
                    <h4 className="font-semibold mb-1">Custom Requirements</h4>
                    <p className="text-sm">Get quote for special specifications</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flange Types */}
        <section className="py-16 bg-white" data-testid="flange-types-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="flange-types-title">
                Available Flange Types
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {flangeTypes.map((type, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300" data-testid={`flange-type-${index}`}>
                    <h3 className="text-lg font-semibold text-navy-primary mb-2">{type}</h3>
                    <div className="w-12 h-12 bg-gold-primary rounded-full mx-auto flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-gray-50" data-testid="specifications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="specifications-title">
                Technical Specifications
              </h2>
              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-navy-primary text-white px-6 py-4">
                  <h3 className="text-xl font-semibold">Specification Standards</h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-1 gap-4">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex items-start" data-testid={`specification-${index}`}>
                        <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 bg-white" data-testid="applications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="applications-title">
                Industrial Applications
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {applications.map((application, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300" data-testid={`application-${index}`}>
                    <div className="w-12 h-12 bg-navy-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Star className="w-6 h-6 text-gold-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-navy-primary">{application}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-navy-primary to-navy-secondary text-white" data-testid="cta-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="cta-title">
                Ready to Order Alloy Steel Flanges?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get premium quality alloy steel flanges with fast delivery across India
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-contact">
                  Contact
                </Link>
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <div className="flex items-center" data-testid="contact-phone">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href="tel:+919819322576" className="hover:text-gold-primary transition-colors">+91 9819322576</a>
                  </div>
                  <div className="flex items-center" data-testid="contact-email">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href="mailto:mamtasteeltraders@gmail.com" className="hover:text-gold-primary transition-colors">mamtasteeltraders@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}