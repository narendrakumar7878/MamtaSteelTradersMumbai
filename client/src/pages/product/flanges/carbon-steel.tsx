import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function CarbonSteelFlanges() {
  const specifications = [
    "ASTM A105/A105M - Standard Specification for Carbon Steel Forgings for Piping Applications",
    "ASTM A350/A350M - Standard Specification for Carbon and Low-Alloy Steel Forgings",
    "ASTM A182 - Standard Specification for Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
    "ASTM A694 - Standard Specification for Carbon and Alloy Steel Forgings for Pipe Flanges",
    "ASME B16.5 - Pipe Flanges and Flanged Fittings NPS 1/2 through NPS 24",
    "ASME B16.47 - Large Diameter Steel Flanges NPS 26 through NPS 60",
    "IS 2062 - Indian Standard for Hot Rolled Medium and High Tensile Structural Steel",
    "Size Range: 1/2\" to 60\" NB (DN15 to DN1500)",
    "Pressure Class: 150#, 300#, 600#, 900#, 1500#, 2500# (PN10 to PN420)",
    "Material Grades: A105, A350 LF1/LF2/LF3, A694 F42/F46/F52/F60/F65/F70, A182 Grade F1/F5/F9/F11/F22"
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
    "Oil and Gas Pipelines",
    "Petrochemical Plants",
    "Power Generation",
    "Water Treatment Plants",
    "Chemical Processing",
    "Industrial Piping Systems",
    "HVAC Systems",
    "Steam Applications"
  ];

  const features = [
    { icon: Shield, title: "Cost Effective", desc: "Economical solution for standard pressure applications" },
    { icon: TrendingUp, title: "High Strength", desc: "Excellent mechanical properties for demanding applications" },
    { icon: Award, title: "ASME Certified", desc: "ASME B16.5 and B16.47 certified carbon steel flanges" },
    { icon: CheckCircle, title: "Wide Range", desc: "Complete range of sizes and pressure ratings available" }
  ];

  const pressureClasses = [
    { class: "150#", pressure: "285 PSI", temp: "400°F" },
    { class: "300#", pressure: "740 PSI", temp: "650°F" },
    { class: "600#", pressure: "1480 PSI", temp: "650°F" },
    { class: "900#", pressure: "2220 PSI", temp: "650°F" },
    { class: "1500#", pressure: "3705 PSI", temp: "650°F" },
    { class: "2500#", pressure: "6170 PSI", temp: "650°F" }
  ];

  const carbonSteelGrades = [
    {
      grade: "ASTM A105",
      description: "Standard carbon steel forging material for ambient and high temperature service",
      chemicalComposition: "C: 0.35 max, Mn: 0.60-1.35, P: 0.035 max, S: 0.040 max, Si: 0.15-0.40",
      mechanicalProperties: "Tensile: 485 MPa, Yield: 250 MPa, Elongation: 30%, Hardness: 187 HB max",
      applications: "Oil & Gas, Petrochemical, Power Plants, Water Treatment",
      availability: "Ready Stock in Mumbai"
    },
    {
      grade: "ASTM A350 LF1",
      description: "Low temperature carbon steel forging for -46°C service",
      chemicalComposition: "C: 0.30 max, Mn: 0.60-1.35, P: 0.035 max, S: 0.040 max, Si: 0.15-0.40",
      mechanicalProperties: "Tensile: 485 MPa, Yield: 250 MPa, Impact: 27J at -46°C",
      applications: "Low Temperature Service, Refrigeration Plants",
      availability: "Available Ex-Stock Mumbai"
    },
    {
      grade: "ASTM A350 LF2",
      description: "Low temperature carbon steel forging for sub-zero applications down to -46°C",
      chemicalComposition: "C: 0.30 max, Mn: 0.60-1.35, P: 0.035 max, S: 0.040 max, Si: 0.15-0.40",
      mechanicalProperties: "Tensile: 485 MPa, Yield: 250 MPa, Impact: 27J at -46°C",
      applications: "LNG Plants, Cryogenic Service, Low Temperature Piping",
      availability: "Available Ex-Stock Mumbai"
    },
    {
      grade: "ASTM A350 LF3",
      description: "Low temperature carbon steel forging for -101°C service",
      chemicalComposition: "C: 0.20 max, Mn: 0.90-1.50, P: 0.035 max, S: 0.040 max, Si: 0.15-0.40, Ni: 3.25-3.75",
      mechanicalProperties: "Tensile: 550 MPa, Yield: 315 MPa, Impact: 27J at -101°C",
      applications: "Ultra Low Temperature, Cryogenic Applications",
      availability: "Special Order - Mumbai"
    },
    {
      grade: "ASTM A694 F42",
      description: "High strength carbon steel for pressure service - Grade F42",
      chemicalComposition: "C: 0.26 max, Mn: 1.40 max, P: 0.035 max, S: 0.035 max, Si: 0.45 max",
      mechanicalProperties: "Tensile: 414 MPa, Yield: 290 MPa, Elongation: 22%",
      applications: "Moderate Pressure Pipelines, Industrial Piping",
      availability: "Ready Stock Mumbai"
    },
    {
      grade: "ASTM A694 F46",
      description: "High strength carbon steel for pressure service - Grade F46",
      chemicalComposition: "C: 0.26 max, Mn: 1.40 max, P: 0.035 max, S: 0.035 max, Si: 0.45 max",
      mechanicalProperties: "Tensile: 455 MPa, Yield: 315 MPa, Elongation: 21%",
      applications: "High Pressure Pipelines, Gas Transmission",
      availability: "Available Mumbai Stock"
    },
    {
      grade: "ASTM A694 F52",
      description: "High strength carbon steel for pressure service - Grade F52",
      chemicalComposition: "C: 0.26 max, Mn: 1.40 max, P: 0.035 max, S: 0.035 max, Si: 0.45 max",
      mechanicalProperties: "Tensile: 455 MPa, Yield: 360 MPa, Elongation: 21%",
      applications: "High Pressure Systems, Pipeline Flanges",
      availability: "Mumbai Stockist - Fast Delivery"
    },
    {
      grade: "ASTM A694 F60",
      description: "High strength carbon steel for high pressure service applications",
      chemicalComposition: "C: 0.26 max, Mn: 1.40 max, P: 0.035 max, S: 0.035 max, Si: 0.45 max",
      mechanicalProperties: "Tensile: 520 MPa, Yield: 415 MPa, Elongation: 20%",
      applications: "High Pressure Pipelines, Transmission Lines, Oil & Gas Industry",
      availability: "Fast Delivery from Mumbai Stock"
    },
    {
      grade: "ASTM A694 F65",
      description: "High yield strength carbon steel for critical pressure applications",
      chemicalComposition: "C: 0.26 max, Mn: 1.40 max, P: 0.035 max, S: 0.035 max, Si: 0.45 max",
      mechanicalProperties: "Tensile: 565 MPa, Yield: 450 MPa, Elongation: 19%",
      applications: "Natural Gas Pipelines, High Pressure Systems, Offshore Applications",
      availability: "Mumbai Stockist - Quick Supply"
    },
    {
      grade: "ASTM A694 F70",
      description: "Ultra-high strength carbon steel for extreme pressure conditions",
      chemicalComposition: "C: 0.26 max, Mn: 1.40 max, P: 0.035 max, S: 0.035 max, Si: 0.45 max",
      mechanicalProperties: "Tensile: 620 MPa, Yield: 485 MPa, Elongation: 18%",
      applications: "Ultra High Pressure Lines, Critical Industrial Applications",
      availability: "Premium Grade - Available in Mumbai"
    }
  ];

  const mumbaiSuppliers = [
    {
      area: "Andheri East",
      speciality: "ASTM A105 Carbon Steel Flanges",
      service: "Same Day Delivery"
    },
    {
      area: "Kandivali",
      speciality: "A350 Low Temperature Flanges", 
      service: "24/7 Customer Support"
    },
    {
      area: "Ghatkopar",
      speciality: "A694 High Pressure Flanges",
      service: "Technical Consultation"
    },
    {
      area: "Thane",
      speciality: "Complete Range ASME B16.5",
      service: "Bulk Supply Specialist"
    }
  ];

  const seoKeywords = [
    "Carbon Steel Flanges Mumbai",
    "ASTM A105 Flanges Suppliers",
    "Best Flanges Stockists India", 
    "Slip On Flanges Mumbai",
    "Weld Neck Flanges India",
    "Blind Flanges Suppliers Mumbai",
    "ASME B16.5 Flanges Stockists",
    "Industrial Flanges Mumbai",
    "Steel Flanges Distributors",
    "Flanges Manufacturers India"
  ];

  return (
    <>
      <ProductSEO
        title="Carbon Steel Flanges Suppliers Mumbai | Best ASTM A105 A350 A694 Flanges Stockists India"
        description="Leading carbon steel flanges suppliers & stockists in Mumbai, India. ASTM A105, A350, A182, A694 grades. ASME B16.5 certified slip-on, weld neck, blind flanges. Best prices, fast delivery across India. Top quality flanges manufacturer."
        keywords="carbon steel flanges suppliers Mumbai, best flanges stockists India, ASTM A105 flanges Mumbai, A350 flanges suppliers, A694 flanges stockists, ASME B16.5 flanges India, slip on flanges Mumbai, weld neck flanges suppliers, blind flanges stockists, carbon steel flanges manufacturer India, flanges suppliers near me Mumbai, industrial flanges Mumbai, steel flanges distributors India, carbon steel pipe flanges, forged flanges suppliers Mumbai"
        category="Flanges"
        productName="Carbon Steel Flanges"
        specifications={specifications}
        canonicalUrl="/product/flanges/carbon-steel"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Carbon Steel Flanges</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Carbon Steel Flanges Suppliers Mumbai | Best Stockists India
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                Leading carbon steel flanges suppliers & stockists in Mumbai, Delhi, Chennai, Ahmedabad. ASTM A105, A350, A694 grades. Fast delivery across India.
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

        {/* Product Features */}
        <section className="py-16 bg-white" data-testid="features-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="features-title">
              Why Choose Our Carbon Steel Flanges?
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

        {/* Flange Types */}
        <section className="py-16 bg-gray-50" data-testid="flange-types-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="flange-types-title">
                Available Flange Types
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {flangeTypes.map((type, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300" data-testid={`flange-type-${index}`}>
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

        {/* Pressure Classes */}
        <section className="py-16 bg-white" data-testid="pressure-classes-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="pressure-classes-title">
                Pressure Class Ratings
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-md">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left">Class</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Working Pressure</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Max Temperature</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pressureClasses.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-navy-primary">{item.class}</td>
                        <td className="border border-gray-300 px-4 py-3">{item.pressure}</td>
                        <td className="border border-gray-300 px-4 py-3">{item.temp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

        {/* Carbon Steel Grades */}
        <section className="py-16 bg-gray-50" data-testid="carbon-steel-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-6" data-testid="grades-title">
                Carbon Steel Grades Available
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                We stock premium quality carbon steel flanges in various ASTM grades. Each grade is carefully selected for specific applications and pressure requirements. All grades available ex-stock Mumbai for immediate delivery.
              </p>
              <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
                {carbonSteelGrades.map((grade, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300" data-testid={`grade-${index}`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-navy-primary rounded-full flex items-center justify-center mr-4">
                        <Award className="w-6 h-6 text-gold-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy-primary">{grade.grade}</h3>
                        <span className="text-sm text-green-600 font-medium">{grade.availability}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{grade.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-navy-primary mb-2">Chemical Composition:</h4>
                      <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">{grade.chemicalComposition}</p>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-semibold text-navy-primary mb-2">Mechanical Properties:</h4>
                      <p className="text-sm text-gray-600 bg-blue-50 p-3 rounded">{grade.mechanicalProperties}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy-primary mb-2">Applications:</h4>
                      <p className="text-sm text-gray-600">{grade.applications}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mumbai Suppliers Network */}
        <section className="py-16 bg-white" data-testid="mumbai-suppliers-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-6" data-testid="suppliers-title">
                Best Carbon Steel Flanges Suppliers & Stockists in Mumbai
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
                We are recognized as one of the leading carbon steel flanges suppliers and stockists in Mumbai with extensive network across India. Our strategically located warehouses ensure quick delivery of premium quality flanges.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {mumbaiSuppliers.map((supplier, index) => (
                  <div key={index} className="bg-gradient-to-br from-navy-primary to-navy-secondary text-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" data-testid={`supplier-${index}`}>
                    <div className="flex items-center mb-4">
                      <MapPin className="w-8 h-8 text-gold-primary mr-3" />
                      <h3 className="text-lg font-bold">{supplier.area}</h3>
                    </div>
                    <p className="text-blue-100 mb-3">{supplier.speciality}</p>
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-gold-primary mr-2" />
                      <span className="text-sm">{supplier.service}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* SEO Keywords Section */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-navy-primary mb-6 text-center">
                  Search Terms We Rank For
                </h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
                  {seoKeywords.map((keyword, index) => (
                    <div key={index} className="bg-white rounded-lg p-3 text-center border border-gray-200 hover:border-gold-primary transition-colors duration-300" data-testid={`keyword-${index}`}>
                      <span className="text-sm text-navy-primary font-medium">{keyword}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Major Indian Cities Network */}
        <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50" data-testid="cities-network-section">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-6" data-testid="cities-title">
                Carbon Steel Flanges Supply Network Across India
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-4xl mx-auto">
                We maintain extensive inventory and supply network across all major Indian cities. Our strategic locations ensure fastest delivery of carbon steel flanges anywhere in India with same-day dispatch facility.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-navy-primary">
                  <h3 className="text-xl font-bold text-navy-primary mb-4 flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-gold-primary" />
                    Mumbai & MMR Region
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Andheri - Carbon Steel Flanges Hub</li>
                    <li>• Kandivali - A105 Specialists</li>
                    <li>• Thane - Complete ASME Range</li>
                    <li>• Ghatkopar - High Pressure Flanges</li>
                    <li>• Navi Mumbai - Industrial Supply</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-navy-primary">
                  <h3 className="text-xl font-bold text-navy-primary mb-4 flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-gold-primary" />
                    Delhi NCR & North India
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• New Delhi - Premium Flanges</li>
                    <li>• Gurgaon - Industrial Projects</li>
                    <li>• Noida - Manufacturing Supply</li>
                    <li>• Faridabad - Bulk Orders</li>
                    <li>• Ghaziabad - Quick Dispatch</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-navy-primary">
                  <h3 className="text-xl font-bold text-navy-primary mb-4 flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-gold-primary" />
                    South India Network
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Chennai - Petrochemical Focus</li>
                    <li>• Bengaluru - IT & Manufacturing</li>
                    <li>• Hyderabad - Pharma Industries</li>
                    <li>• Coimbatore - Textile Mills</li>
                    <li>• Kochi - Marine Applications</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-navy-primary">
                  <h3 className="text-xl font-bold text-navy-primary mb-4 flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-gold-primary" />
                    Gujarat & West India
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Ahmedabad - Chemical Plants</li>
                    <li>• Vadodara - Refineries</li>
                    <li>• Surat - Industrial Estates</li>
                    <li>• Rajkot - Engineering Units</li>
                    <li>• Bharuch - Petrochemicals</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-navy-primary">
                  <h3 className="text-xl font-bold text-navy-primary mb-4 flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-gold-primary" />
                    East & Central India
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Kolkata - Steel Industries</li>
                    <li>• Bhubaneswar - Mining Sector</li>
                    <li>• Raipur - Power Plants</li>
                    <li>• Jamshedpur - Heavy Industries</li>
                    <li>• Ranchi - Mining Equipment</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-navy-primary">
                  <h3 className="text-xl font-bold text-navy-primary mb-4 flex items-center">
                    <MapPin className="w-6 h-6 mr-2 text-gold-primary" />
                    Punjab & North West
                  </h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Ludhiana - Manufacturing Hub</li>
                    <li>• Chandigarh - Government Projects</li>
                    <li>• Amritsar - Food Industries</li>
                    <li>• Jalandhar - Sports Goods</li>
                    <li>• Mohali - IT & Services</li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 bg-navy-primary text-white rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Us as Your Carbon Steel Flanges Supplier?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <TrendingUp className="w-12 h-12 text-gold-primary mx-auto mb-4" />
                    <h4 className="font-bold mb-2">Pan India Presence</h4>
                    <p className="text-blue-100">Largest network of carbon steel flanges stockists across India</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-gold-primary mx-auto mb-4" />
                    <h4 className="font-bold mb-2">Quality Assured</h4>
                    <p className="text-blue-100">All flanges tested & certified as per ASTM, ASME standards</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="w-12 h-12 text-gold-primary mx-auto mb-4" />
                    <h4 className="font-bold mb-2">Same Day Dispatch</h4>
                    <p className="text-blue-100">Ready inventory for immediate delivery from nearest location</p>
                  </div>
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
                Ready to Order Carbon Steel Flanges?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get premium quality carbon steel flanges with fast delivery across India
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