import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Factory, Truck, Clock, Users, Building2, Download, FileText, Globe, Flame, Zap, Wrench } from "lucide-react";
import { Link } from "wouter";

export default function InconelFlanges() {
  const specifications = [
    "ASTM B564 - Standard Specification for Nickel Alloy Flanges, Fittings, Valves, and Parts",
    "ASTM B366 - Standard Specification for Factory-Made Wrought Nickel and Nickel Alloy Fittings",
    "ASME B16.5 - Pipe Flanges and Flanged Fittings NPS 1/2 through NPS 24",
    "ASME B16.47 - Large Diameter Steel Flanges NPS 26 through NPS 60",
    "ASME B16.48 - Steel Line Blanks",
    "API 6A - Specification for Wellhead and Christmas Tree Equipment",
    "NACE MR0175 - Metallic Materials for Use in H2S-Containing Environments",
    "Size Range: 1/2\" to 60\" NB (DN 15 to DN 1500)",
    "Pressure Class: 150# to 2500# (PN 10 to PN 420)",
    "Grades: 600, 601, 617, 625, 686, 690, 718, 725, 800, 825, X-750",
    "Testing: Hydrostatic Testing, Radiographic Testing, PMI Testing",
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
    "Aerospace Industry",
    "Gas Turbine Components",
    "Nuclear Reactors",
    "Chemical Processing",
    "High-Temperature Furnaces",
    "Jet Engine Components",
    "Heat Treatment Equipment",
    "Petrochemical Plants"
  ];

  const features = [
    { icon: Shield, title: "Oxidation Resistant", desc: "Excellent resistance to oxidation at high temperatures" },
    { icon: TrendingUp, title: "High Temperature Strength", desc: "Retains strength at elevated temperatures up to 1100°C" },
    { icon: Award, title: "ASTM Certified", desc: "ASTM B564 and ASME certified Inconel flanges" },
    { icon: CheckCircle, title: "Premium Alloys", desc: "Superior nickel-chromium alloys for critical applications" }
  ];

  const inconelGrades = [
    { grade: "Inconel 600", composition: "Ni-Cr-Fe (72% Ni)", tempRange: "Up to 1100°C", application: "High Temperature Oxidation", industry: "Aerospace, Furnaces" },
    { grade: "Inconel 601", composition: "Ni-Cr-Al-Fe (60% Ni)", tempRange: "Up to 1200°C", application: "High Temperature & Carburizing", industry: "Heat Treatment, Petrochemical" },
    { grade: "Inconel 617", composition: "Ni-Cr-Co-Mo (54% Ni)", tempRange: "Up to 980°C", application: "Gas Turbine Applications", industry: "Power Generation, Aerospace" },
    { grade: "Inconel 625", composition: "Ni-Cr-Mo-Nb (58% Ni)", tempRange: "Up to 980°C", application: "Extreme Corrosion Resistance", industry: "Marine, Chemical Processing" },
    { grade: "Inconel 686", composition: "Ni-Cr-Mo-W (57% Ni)", tempRange: "Up to 650°C", application: "Aggressive Chemical Environments", industry: "Chemical, Pharmaceutical" },
    { grade: "Inconel 718", composition: "Ni-Cr-Fe-Nb-Mo-Ti-Al (52% Ni)", tempRange: "Up to 650°C", application: "High Strength Applications", industry: "Aerospace, Gas Turbines" },
    { grade: "Inconel 800", composition: "Ni-Fe-Cr (32% Ni)", tempRange: "Up to 800°C", application: "Heat Exchangers", industry: "Chemical, Power Generation" },
    { grade: "Inconel 825", composition: "Ni-Fe-Cr-Mo-Cu (42% Ni)", tempRange: "Up to 550°C", application: "Reducing & Oxidizing Acids", industry: "Chemical, Pollution Control" }
  ];

  const mechanicalProperties = [
    { grade: "Inconel 600", tensileStrength: "550-750 MPa", yieldStrength: "205 MPa min", elongation: "30% min", hardness: "HB 150-220", density: "8.47 g/cm³" },
    { grade: "Inconel 601", tensileStrength: "550-750 MPa", yieldStrength: "275 MPa min", elongation: "30% min", hardness: "HB 150-250", density: "8.11 g/cm³" },
    { grade: "Inconel 617", tensileStrength: "750-950 MPa", yieldStrength: "310 MPa min", elongation: "30% min", hardness: "HB 180-280", density: "8.36 g/cm³" },
    { grade: "Inconel 625", tensileStrength: "825 MPa min", yieldStrength: "415 MPa min", elongation: "30% min", hardness: "HB 250-350", density: "8.44 g/cm³" },
    { grade: "Inconel 686", tensileStrength: "650 MPa min", yieldStrength: "310 MPa min", elongation: "40% min", hardness: "HB 200-300", density: "8.25 g/cm³" },
    { grade: "Inconel 718", tensileStrength: "1275 MPa min", yieldStrength: "1035 MPa min", elongation: "12% min", hardness: "HB 331-444", density: "8.19 g/cm³" },
    { grade: "Inconel 800", tensileStrength: "520 MPa min", yieldStrength: "205 MPa min", elongation: "30% min", hardness: "HB 140-220", density: "7.94 g/cm³" },
    { grade: "Inconel 825", tensileStrength: "585 MPa min", yieldStrength: "240 MPa min", elongation: "30% min", hardness: "HB 160-250", density: "8.14 g/cm³" }
  ];

  const sizeAvailability = [
    { size: "1/2\" - 2\"", class: "150# - 2500#", type: "Socket Weld, Threaded, Slip-On", delivery: "Ex-Stock Mumbai" },
    { size: "2.5\" - 12\"", class: "150# - 2500#", type: "Weld Neck, Slip-On, Blind", delivery: "2-3 Weeks" },
    { size: "14\" - 24\"", class: "150# - 1500#", type: "Weld Neck, Slip-On, Blind", delivery: "4-6 Weeks" },
    { size: "26\" - 60\"", class: "150# - 900#", type: "Weld Neck, Slip-On, Blind", delivery: "6-8 Weeks" }
  ];

  const pricingData = [
    { grade: "Inconel 600", size: "1\" - 6\"", class: "150# - 600#", price: "₹55,000 - ₹140,000", moq: "3 Pcs" },
    { grade: "Inconel 601", size: "1\" - 6\"", class: "150# - 600#", price: "₹60,000 - ₹155,000", moq: "3 Pcs" },
    { grade: "Inconel 617", size: "1\" - 6\"", class: "150# - 600#", price: "₹85,000 - ₹220,000", moq: "2 Pcs" },
    { grade: "Inconel 625", size: "1\" - 6\"", class: "150# - 600#", price: "₹95,000 - ₹250,000", moq: "2 Pcs" },
    { grade: "Inconel 686", size: "1\" - 6\"", class: "150# - 600#", price: "₹120,000 - ₹300,000", moq: "2 Pcs" },
    { grade: "Inconel 718", size: "1\" - 6\"", class: "150# - 600#", price: "₹150,000 - ₹400,000", moq: "2 Pcs" },
    { grade: "Inconel 800", size: "1\" - 6\"", class: "150# - 600#", price: "₹45,000 - ₹115,000", moq: "3 Pcs" },
    { grade: "Inconel 825", size: "1\" - 6\"", class: "150# - 600#", price: "₹65,000 - ₹170,000", moq: "3 Pcs" }
  ];

  const supplierStats = [
    { icon: Flame, title: "High-Temperature Expertise", desc: "Specialized Inconel flanges for aerospace and gas turbine applications up to 1200°C" },
    { icon: Factory, title: "Mumbai Aerospace Hub", desc: "Advanced superalloy processing facilities serving India's aerospace industry" },
    { icon: Zap, title: "Critical Applications", desc: "Supply to defense, aerospace, and power generation industries across India" },
    { icon: Award, title: "Aerospace Certifications", desc: "ASTM B564, NACE MR0175, and aerospace-grade quality certifications" }
  ];

  return (
    <>
      <ProductSEO
        title="India Best Inconel Flanges Suppliers Mumbai | ASTM B564 Inconel 600 625 718 800 825 | Mamta Steel Traders"
        description="Leading Mumbai-based supplier of ASTM B564 Inconel flanges in grades 600, 601, 617, 625, 686, 718, 800, 825. Serving aerospace, gas turbine, power generation industries across India. High-temperature applications up to 1200°C. Best prices from Mumbai."
        keywords="India best Inconel flanges suppliers Mumbai, ASTM B564 Inconel flanges manufacturer Mumbai, Inconel 625 600 718 800 flanges supplier India, aerospace flanges Mumbai, gas turbine flanges supplier Mumbai, high temperature flanges Mumbai India, Mumbai steel traders Inconel flanges, aerospace grade flanges Mumbai"
        category="Flanges"
        productName="Inconel Flanges"
        specifications={specifications}
        canonicalUrl="/product/flanges/inconel"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Inconel Flanges</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Inconel Flanges Suppliers Mumbai – ASTM B564 Inconel 600/625/718/800/825
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                India's leading Mumbai-based manufacturer and supplier of high-temperature ASTM B564 Inconel flanges for aerospace, gas turbine, and power generation industries across India up to 1200°C
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
                Mumbai's Premier Inconel Flanges Supplier for Aerospace Industry
              </h2>
              <p className="text-lg text-gray-700 mb-6" data-testid="mumbai-intro-description">
                Mamta Steel Traders specializes in high-performance ASTM B564 Inconel superalloy flanges, serving Mumbai's aerospace 
                manufacturing hub, gas turbine facilities, and power generation plants. With specialized superalloy processing capabilities 
                and 25+ years of experience in critical applications, we supply premium grades including Inconel 600, 625, 718, 800, 825, 
                and aerospace-grade X-750 flanges to customers across India.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <Flame className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-navy-primary">High-Temperature Expertise</h3>
                  <p className="text-sm text-gray-600">Specialized processing up to 1200°C applications</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <Zap className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-navy-primary">Aerospace Focus</h3>
                  <p className="text-sm text-gray-600">Direct supply to defense and aerospace manufacturers</p>
                </div>
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <Building2 className="w-8 h-8 text-gold-primary mx-auto mb-2" />
                  <h3 className="font-semibold text-navy-primary">Critical Applications</h3>
                  <p className="text-sm text-gray-600">Gas turbines, jet engines, nuclear applications</p>
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
                ASTM B564 Inconel Flanges - Aerospace Grade Product Gallery
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-red-100 to-orange-200 flex items-center justify-center">
                    <div className="text-center">
                      <Flame className="w-12 h-12 text-navy-primary mx-auto mb-2" />
                      <p className="text-sm font-semibold text-navy-primary">Inconel 600/601 Flanges</p>
                      <p className="text-xs text-gray-600">Up to 1200°C</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-navy-primary mb-1">High-Temperature Oxidation</h3>
                    <p className="text-sm text-gray-600">Temperature: 1100-1200°C</p>
                    <p className="text-xs text-gray-500 mt-1">Furnaces, Heat Treatment, Aerospace</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-blue-100 to-purple-200 flex items-center justify-center">
                    <div className="text-center">
                      <Zap className="w-12 h-12 text-navy-primary mx-auto mb-2" />
                      <p className="text-sm font-semibold text-navy-primary">Inconel 625/686 Flanges</p>
                      <p className="text-xs text-gray-600">Extreme Corrosion Resistance</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-navy-primary mb-1">Marine & Chemical Grade</h3>
                    <p className="text-sm text-gray-600">Temperature: Up to 980°C</p>
                    <p className="text-xs text-gray-500 mt-1">Chemical Processing, Marine Applications</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-green-100 to-teal-200 flex items-center justify-center">
                    <div className="text-center">
                      <Building2 className="w-12 h-12 text-navy-primary mx-auto mb-2" />
                      <p className="text-sm font-semibold text-navy-primary">Inconel 718 Flanges</p>
                      <p className="text-xs text-gray-600">Aerospace Grade</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-navy-primary mb-1">High Strength Applications</h3>
                    <p className="text-sm text-gray-600">Strength: 1275 MPa min</p>
                    <p className="text-xs text-gray-500 mt-1">Gas Turbines, Jet Engines, Defense</p>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                  <div className="h-48 bg-gradient-to-br from-yellow-100 to-orange-200 flex items-center justify-center">
                    <div className="text-center">
                      <Wrench className="w-12 h-12 text-navy-primary mx-auto mb-2" />
                      <p className="text-sm font-semibold text-navy-primary">Inconel 800/825 Flanges</p>
                      <p className="text-xs text-gray-600">Heat Exchangers</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-navy-primary mb-1">Power Generation Grade</h3>
                    <p className="text-sm text-gray-600">Temperature: Up to 800°C</p>
                    <p className="text-xs text-gray-500 mt-1">Power Plants, Heat Exchangers</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link href="/contact" className="inline-flex items-center bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-6 rounded-lg transition-colors duration-300" data-testid="gallery-cta">
                  <Download className="w-5 h-5 mr-2" />
                  Download Inconel Catalog
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-16 bg-white" data-testid="features-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="features-title">
              Why Choose Our Inconel Flanges?
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

        {/* Inconel Grades */}
        <section className="py-16 bg-gray-50" data-testid="inconel-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="grades-title">
                Available Inconel Grades
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-md" data-testid="inconel-grades-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left">Grade</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Composition</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Temperature Range</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Application</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Industry</th>
                    </tr>
                  </thead>
                  <tbody>
                    {inconelGrades.map((grade, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"} data-testid={`inconel-grade-row-${index}`}>
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-navy-primary">{grade.grade}</td>
                        <td className="border border-gray-300 px-4 py-3">{grade.composition}</td>
                        <td className="border border-gray-300 px-4 py-3">{grade.tempRange}</td>
                        <td className="border border-gray-300 px-4 py-3">{grade.application}</td>
                        <td className="border border-gray-300 px-4 py-3">{grade.industry}</td>
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
                      <th className="border border-gray-300 px-4 py-3 text-left">Density</th>
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
                        <td className="border border-gray-300 px-4 py-3">{property.density}</td>
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
                Why Choose Mumbai's Leading Inconel Flanges Supplier?
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
                  <h3 className="text-xl font-semibold">Mumbai Aerospace & Power Generation Excellence</h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-navy-primary mb-3">Aerospace Industry Leadership</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                          Defense-grade Inconel 718 for gas turbines
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                          Aerospace certification compliance (AS9100)
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                          Direct supply to aerospace manufacturers
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                          Critical application testing facilities
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-navy-primary mb-3">Power Generation Expertise</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                          High-temperature Inconel 600/601 grades
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                          Nuclear-grade material certifications
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-2 mt-0.5 flex-shrink-0" />
                          Advanced superalloy processing
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
                  <p>* Special pricing for aerospace and defense industry bulk orders.</p>
                  <p>* Custom superalloy compositions available for critical applications.</p>
                </div>
              </div>

              {/* Related Products & Internal Links */}
              <div className="mt-12 bg-gradient-to-r from-navy-primary to-navy-secondary rounded-lg p-6 text-white">
                <h3 className="text-xl font-bold mb-4 text-center">Explore Related High-Performance Alloy Products</h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <Link href="/product/flanges/nickel-alloy" className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors rounded-lg p-4 block" data-testid="link-nickel-alloy-flanges">
                    <h4 className="font-semibold mb-1">Nickel Alloy Flanges</h4>
                    <p className="text-sm text-blue-100">Nickel 200, 400, 600, 625, 825 Grades</p>
                  </Link>
                  <Link href="/product/flanges/incoloy" className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-colors rounded-lg p-4 block" data-testid="link-incoloy-flanges">
                    <h4 className="font-semibold mb-1">Incoloy Flanges</h4>
                    <p className="text-sm text-blue-100">Incoloy 800, 825, 925 Grades</p>
                  </Link>
                  <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary transition-colors rounded-lg p-4 block" data-testid="link-aerospace-requirements">
                    <h4 className="font-semibold mb-1">Aerospace Requirements</h4>
                    <p className="text-sm">Defense and aerospace-grade specifications</p>
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
                Ready to Order Inconel Flanges?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get premium quality Inconel flanges with fast delivery across India
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