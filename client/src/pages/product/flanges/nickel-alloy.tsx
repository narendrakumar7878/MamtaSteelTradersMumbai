import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Factory, Truck, Clock, Users, Building2, Download, FileText, Globe } from "lucide-react";
import { Link } from "wouter";

export default function NickelAlloyFlanges() {
  const specifications = [
    "ASTM B564 - Standard Specification for Nickel Alloy Flanges, Fittings, Valves, and Parts",
    "ASTM B462 - Standard Specification for Forged or Rolled UNS N08020, N08024, N08026, and N08367 Pipe Flanges",
    "ASME B16.5 - Pipe Flanges and Flanged Fittings NPS 1/2 through NPS 24",
    "ASME B16.47 - Large Diameter Steel Flanges NPS 26 through NPS 60",
    "ASME B16.48 - Steel Line Blanks",
    "API 6A - Specification for Wellhead and Christmas Tree Equipment",
    "MSS SP-44 - Steel Pipeline Flanges",
    "Size Range: 1/2\" to 60\" NB (DN 15 to DN 1500)",
    "Pressure Class: 150#, 300#, 600#, 900#, 1500#, 2500# (PN 10 to PN 420)",
    "Grades: 200, 201, 400, 600, 625, 686, 725, 800, 825, 926",
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
    "Chemical Processing Plants",
    "Marine Applications",
    "Oil and Gas Industry",
    "Aerospace Industry",
    "High-Temperature Applications",
    "Corrosive Environments",
    "Nuclear Power Plants",
    "Desalination Plants"
  ];

  const features = [
    { icon: Shield, title: "Corrosion Resistant", desc: "Exceptional resistance to corrosion in harsh environments" },
    { icon: TrendingUp, title: "High Temperature", desc: "Maintains strength and integrity at elevated temperatures" },
    { icon: Award, title: "ASTM Certified", desc: "ASTM B564 and ASME certified nickel alloy flanges" },
    { icon: CheckCircle, title: "Superior Alloys", desc: "Premium nickel alloy grades for specialized applications" }
  ];

  const nickelGrades = [
    { grade: "Nickel 200", composition: "99.6% Ni", resistance: "Caustic Solutions", tempRange: "Up to 315°C", application: "Chemical Processing" },
    { grade: "Nickel 201", composition: "99.6% Ni (Low Carbon)", resistance: "High Temperature", tempRange: "Up to 370°C", application: "Heat Treatment Equipment" },
    { grade: "Cupro Nickel", composition: "Cu-Ni 90/10, 70/30", resistance: "Seawater Corrosion", tempRange: "Up to 200°C", application: "Marine Applications" },
    { grade: "Nickel 400", composition: "Ni-Cu Alloy (Monel)", resistance: "Seawater & Acids", tempRange: "Up to 480°C", application: "Marine & Chemical" },
    { grade: "Nickel 600", composition: "Ni-Cr-Fe", resistance: "High Temperature Oxidation", tempRange: "Up to 1200°C", application: "Furnace Applications" },
    { grade: "Nickel 625", composition: "Ni-Cr-Mo-Nb", resistance: "Extreme Corrosion", tempRange: "Up to 980°C", application: "Aerospace & Chemical" },
    { grade: "Nickel 825", composition: "Ni-Fe-Cr-Mo-Cu", resistance: "Reducing & Oxidizing Acids", tempRange: "Up to 550°C", application: "Pollution Control" }
  ];

  const mechanicalProperties = [
    { grade: "Nickel 200", tensileStrength: "380-550 MPa", yieldStrength: "105 MPa min", elongation: "40% min", hardness: "HB 120-200" },
    { grade: "Nickel 201", tensileStrength: "380-550 MPa", yieldStrength: "105 MPa min", elongation: "40% min", hardness: "HB 120-200" },
    { grade: "Cupro Nickel", tensileStrength: "275-380 MPa", yieldStrength: "105 MPa min", elongation: "30% min", hardness: "HB 60-80" },
    { grade: "Nickel 400", tensileStrength: "520-720 MPa", yieldStrength: "170 MPa min", elongation: "35% min", hardness: "HB 110-200" },
    { grade: "Nickel 600", tensileStrength: "520-720 MPa", yieldStrength: "205 MPa min", elongation: "30% min", hardness: "HB 120-200" },
    { grade: "Nickel 625", tensileStrength: "825 MPa min", yieldStrength: "415 MPa min", elongation: "30% min", hardness: "HB 250-350" },
    { grade: "Nickel 825", tensileStrength: "585 MPa min", yieldStrength: "240 MPa min", elongation: "30% min", hardness: "HB 160-250" }
  ];

  const sizeAvailability = [
    { size: "1/2\" - 2\"", class: "150# - 2500#", type: "Socket Weld, Threaded, Slip-On", delivery: "Ex-Stock" },
    { size: "2.5\" - 12\"", class: "150# - 2500#", type: "Weld Neck, Slip-On, Blind", delivery: "3-4 Weeks" },
    { size: "14\" - 24\"", class: "150# - 1500#", type: "Weld Neck, Slip-On, Blind", delivery: "5-7 Weeks" },
    { size: "26\" - 60\"", class: "150# - 900#", type: "Weld Neck, Slip-On, Blind", delivery: "7-10 Weeks" }
  ];

  const pricingData = [
    { grade: "Nickel 200", size: "1\" - 6\"", class: "150# - 600#", price: "₹45,000 - ₹120,000", moq: "5 Pcs" },
    { grade: "Nickel 201", size: "1\" - 6\"", class: "150# - 600#", price: "₹48,000 - ₹125,000", moq: "5 Pcs" },
    { grade: "Cupro Nickel", size: "1\" - 6\"", class: "150# - 600#", price: "₹18,000 - ₹55,000", moq: "10 Pcs" },
    { grade: "Nickel 400", size: "1\" - 6\"", class: "150# - 600#", price: "₹35,000 - ₹85,000", moq: "5 Pcs" },
    { grade: "Nickel 600", size: "1\" - 6\"", class: "150# - 600#", price: "₹40,000 - ₹110,000", moq: "5 Pcs" },
    { grade: "Nickel 625", size: "1\" - 6\"", class: "150# - 600#", price: "₹75,000 - ₹200,000", moq: "3 Pcs" },
    { grade: "Nickel 825", size: "1\" - 6\"", class: "150# - 600#", price: "₹55,000 - ₹150,000", moq: "5 Pcs" }
  ];

  const supplierStats = [
    { icon: Factory, title: "Mumbai Manufacturing Hub", desc: "Specialized nickel alloy manufacturing with advanced melting facilities" },
    { icon: Globe, title: "Pan-India Supply Network", desc: "Direct supply of nickel alloy flanges to marine and chemical industries" },
    { icon: Users, title: "Industry Experience", desc: "25+ years expertise in nickel alloy products for critical applications" },
    { icon: Award, title: "Quality Certifications", desc: "ASTM B564, NACE MR0175, and marine certification compliance" }
  ];

  return (
    <>
      <ProductSEO
        title="India Best Nickel Alloy Flanges Suppliers Mumbai | ASTM B564 Nickel 200 201 400 600 625 825 | Mamta Steel Traders"
        description="Leading Mumbai-based supplier of ASTM B564 nickel alloy flanges in grades 200, 201, 400, 600, 625, 825, Cupro Nickel. Serving marine, chemical processing industries across India with 25+ years experience. Best prices, fastest delivery from Mumbai."
        keywords="India best nickel alloy flanges suppliers Mumbai, ASTM B564 nickel flanges manufacturer Mumbai, Nickel 625 600 400 flanges supplier India, Cupro Nickel flanges Mumbai stock, marine flanges Mumbai, chemical processing flanges supplier Mumbai, nickel alloy flanges Mumbai India, Mumbai steel traders nickel flanges"
        category="Flanges"
        productName="Nickel Alloy Flanges"
        specifications={specifications}
        canonicalUrl="/product/flanges/nickel-alloy"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Nickel Alloy Flanges</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Nickel Alloy Flanges Suppliers Mumbai – ASTM B564 Nickel 200/201/400/600/625/825
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                India's leading Mumbai-based manufacturer and supplier of high-quality ASTM B564 nickel alloy flanges for marine, chemical processing, and aerospace industries across India
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-get-quote">
                  Get Quote Now
                </Link>
                <a href="tel:+919876543210" className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-call-now">
                  Call Now: +91 98765 43210
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
                Mumbai's Most Trusted Nickel Alloy Flanges Supplier
              </h2>
              <p className="text-lg text-gray-700 mb-6" data-testid="mumbai-intro-description">
                Mamta Steel Traders specializes in high-performance ASTM B564 nickel alloy flanges, serving Mumbai's marine industry, 
                chemical processing plants, and aerospace manufacturers. With dedicated facilities for nickel alloy processing and 
                25+ years of expertise, we supply premium grades including Nickel 200, 201, 400, 600, 625, 825, and Cupro Nickel 
                flanges to customers across India.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <MapPin className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-navy-primary">Mumbai Headquarters</h3>
                  <p className="text-sm text-gray-600">Specialized nickel alloy processing facilities</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <Truck className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-navy-primary">Marine Industry Focus</h3>
                  <p className="text-sm text-gray-600">Direct supply to shipyards and offshore platforms</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <Clock className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-navy-primary">Express Delivery</h3>
                  <p className="text-sm text-gray-600">Fast delivery for critical marine applications</p>
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
                ASTM B564 Nickel Alloy Flanges - Product Gallery
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="w-12 h-12 text-navy-primary mx-auto mb-2" />
                      <p className="text-sm font-semibold text-navy-primary">Nickel 200/201 Flanges</p>
                      <p className="text-xs text-gray-600">99.6% Pure Nickel</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-navy-primary mb-1">Pure Nickel Grades</h3>
                    <p className="text-sm text-gray-600">Temperature: Up to 370°C</p>
                    <p className="text-xs text-gray-500 mt-1">Chemical Processing, Heat Treatment</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="w-12 h-12 text-navy-primary mx-auto mb-2" />
                      <p className="text-sm font-semibold text-navy-primary">Cupro Nickel Flanges</p>
                      <p className="text-xs text-gray-600">Cu-Ni 90/10, 70/30</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-navy-primary mb-1">Marine Grade Alloys</h3>
                    <p className="text-sm text-gray-600">Temperature: Up to 200°C</p>
                    <p className="text-xs text-gray-500 mt-1">Seawater Applications, Shipbuilding</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="w-12 h-12 text-navy-primary mx-auto mb-2" />
                      <p className="text-sm font-semibold text-navy-primary">Nickel 400/600 Flanges</p>
                      <p className="text-xs text-gray-600">Monel & Inconel Base</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-navy-primary mb-1">High Performance Alloys</h3>
                    <p className="text-sm text-gray-600">Temperature: Up to 1200°C</p>
                    <p className="text-xs text-gray-500 mt-1">Marine, Chemical, Furnace Applications</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                    <div className="text-center">
                      <FileText className="w-12 h-12 text-navy-primary mx-auto mb-2" />
                      <p className="text-sm font-semibold text-navy-primary">Nickel 625/825 Flanges</p>
                      <p className="text-xs text-gray-600">Super Alloys</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-navy-primary mb-1">Super Alloy Grades</h3>
                    <p className="text-sm text-gray-600">Temperature: Up to 980°C</p>
                    <p className="text-xs text-gray-500 mt-1">Aerospace, Extreme Corrosion Resistance</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link href="/contact" className="inline-flex items-center bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-6 rounded-lg transition-colors duration-300" data-testid="gallery-cta">
                  <Download className="w-5 h-5 mr-2" />
                  Download Nickel Alloy Catalog
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-16 bg-white" data-testid="features-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="features-title">
              Why Choose Our Nickel Alloy Flanges?
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

        {/* Nickel Grades */}
        <section className="py-16 bg-gray-50" data-testid="nickel-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="grades-title">
                Available Nickel Alloy Grades
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-md" data-testid="nickel-grades-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left">Grade</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Composition</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Temperature Range</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Resistance</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Application</th>
                    </tr>
                  </thead>
                  <tbody>
                    {nickelGrades.map((grade, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"} data-testid={`nickel-grade-row-${index}`}>
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-navy-primary">{grade.grade}</td>
                        <td className="border border-gray-300 px-4 py-3">{grade.composition}</td>
                        <td className="border border-gray-300 px-4 py-3">{grade.tempRange}</td>
                        <td className="border border-gray-300 px-4 py-3">{grade.resistance}</td>
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
                Why Choose Mumbai's Leading Nickel Alloy Flanges Supplier?
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
                  <h3 className="text-xl font-semibold">Mumbai Marine & Chemical Industry Excellence</h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-navy-primary mb-3">Marine Industry Expertise</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                          Specialized Cupro Nickel flanges for shipbuilding
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                          NACE MR0175 compliance for offshore applications
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                          Direct supply to major shipyards
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                          Express delivery for critical marine repairs
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-navy-primary mb-3">Chemical Processing Excellence</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                          High-purity Nickel 200/201 grades
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                          ASTM B564 certified material certificates
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                          Corrosion resistance testing facilities
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                          Custom alloy composition available
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
                  <p>* Prices are indicative and may vary based on grade, quantity, and market conditions.</p>
                  <p>* Special pricing for marine and chemical industry bulk orders.</p>
                  <p>* Custom alloy compositions available on request.</p>
                </div>
              </div>

              {/* Related Products & Internal Links */}
              <div className="mt-12 bg-gradient-to-r from-navy-primary to-navy-secondary rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4 text-center">Explore Related Nickel Alloy Products</h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <Link href="/product/flanges/inconel" className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors rounded-lg p-4 block" data-testid="link-inconel-flanges">
                    <h4 className="font-semibold mb-1">Inconel Flanges</h4>
                    <p className="text-sm text-blue-100">Inconel 600, 625, 800, 825 Grades</p>
                  </Link>
                  <Link href="/product/flanges/incoloy" className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors rounded-lg p-4 block" data-testid="link-incoloy-flanges">
                    <h4 className="font-semibold mb-1">Incoloy Flanges</h4>
                    <p className="text-sm text-blue-100">Incoloy 800, 825, 925 Grades</p>
                  </Link>
                  <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary transition-colors rounded-lg p-4 block" data-testid="link-custom-requirements">
                    <h4 className="font-semibold mb-1">Custom Marine Grades</h4>
                    <p className="text-sm">Special alloys for offshore applications</p>
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
                Ready to Order Nickel Alloy Flanges?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get premium quality nickel alloy flanges with fast delivery across India
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-contact">
                  Contact
                </Link>
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <div className="flex items-center" data-testid="contact-phone">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href="tel:+919819322575" className="hover:text-gold-primary transition-colors">+91 98193 22575</a>
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