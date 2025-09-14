import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Zap, Settings, Users, Globe } from "lucide-react";
import { Link } from "wouter";

export default function CarbonSteelPlates() {
  const specifications = [
    "ASTM A36 - Standard Specification for Carbon Structural Steel",
    "ASTM A516 - Standard Specification for Pressure Vessel Plates, Carbon Steel",
    "ASTM A572 - Standard Specification for High-Strength Low-Alloy Structural Steel",
    "ASTM A283 - Standard Specification for Low and Intermediate Tensile Strength Carbon Steel Plates",
    "EN 10025 - Hot Rolled Products of Structural Steels",
    "IS 2062 - Hot Rolled Medium and High Tensile Structural Steel",
    "JIS G3101 - Rolled Steels for General Structure",
    "Thickness Range: 3mm to 300mm",
    "Grades: A36, A516 Gr 60/70, A572 Gr 50, A283 Gr C, C45, EN19, 50CrV4"
  ];

  const applications = [
    "Structural Steel Construction and Buildings",
    "Pressure Vessels and Storage Tanks", 
    "Bridge and Infrastructure Projects",
    "Shipbuilding and Marine Applications",
    "General Fabrication and Welding Works",
    "Machinery and Equipment Manufacturing",
    "Boiler and Heat Exchanger Components",
    "Industrial Plant Construction",
    "Spring Manufacturing (50CrV4)",
    "Automotive Components and Parts",
    "Mining and Heavy Equipment",
    "Oil and Gas Pipeline Construction",
    "Power Generation Equipment",
    "Railway and Transportation Industry"
  ];

  const features = [
    { icon: Shield, title: "Versatile Applications", desc: "Suitable for structural, pressure vessel, spring steel, and general fabrication applications" },
    { icon: TrendingUp, title: "Cost Effective", desc: "Economical choice for construction, manufacturing, and automotive industries" },
    { icon: Award, title: "Excellent Weldability", desc: "Superior weldability for all common welding processes and fabrication" },
    { icon: CheckCircle, title: "Reliable Quality", desc: "Consistent mechanical properties meeting ASTM, EN, IS, and JIS standards" },
    { icon: Zap, title: "High Strength", desc: "Available in various strength grades from mild steel to high-strength structural steel" },
    { icon: Settings, title: "Customizable", desc: "Available in custom sizes, thicknesses, and heat treatment conditions" },
    { icon: Users, title: "Industry Approved", desc: "Approved by major construction, automotive, and manufacturing companies" },
    { icon: Globe, title: "Wide Availability", desc: "Comprehensive stock of all major carbon steel grades and specifications" }
  ];

  // Product gallery data for carbon steel products
  const carbonSteelProducts = [
    {
      src: "https://textronsteelalloys.com/wp-content/uploads/2019/07/50crv4-en47-plate-sheet-300x300.jpg",
      alt: "50CrV4 EN47 Spring Steel Plate Sheet",
      title: "50CrV4 Sheet (EN47 Spring Steel)",
      description: "High-quality spring steel plates for automotive and machinery applications",
      grade: "50CrV4 / EN47",
      applications: ["Spring Manufacturing", "Automotive Components", "Machinery Parts"]
    },
    {
      src: "https://textronsteelalloys.com/wp-content/uploads/2018/12/a283-grade-c-plate-carbon-steel-15-1000-2000mm.jpg",
      alt: "A283 Grade C Carbon Steel Plate",
      title: "A283 Grade C Plate",
      description: "Low to intermediate tensile strength carbon steel plates for general use",
      grade: "ASTM A283 Gr C",
      applications: ["General Fabrication", "Structural Components", "Tanks"]
    },
    {
      src: "https://textronsteelalloys.com/wp-content/uploads/2024/09/ASTM-A36-PLATE-SHEET-MUMBAI-INDIA-300x300.jpg",
      alt: "ASTM A36 Steel Plate Sheet Mumbai JSW Evonith",
      title: "ASTM A36 Steel Plate",
      description: "Most widely used structural carbon steel for construction and fabrication",
      grade: "ASTM A36",
      applications: ["Structural Construction", "Bridges", "Buildings"]
    },
    {
      src: "https://textronsteelalloys.com/wp-content/uploads/2019/03/C45-Plate-300x300.jpg",
      alt: "Carbon Steel C45 Plate Sheet",
      title: "C45 Plates | Sheets",
      description: "Medium carbon steel with good strength and machinability",
      grade: "C45 / EN 1.1191",
      applications: ["Machinery Parts", "Shafts", "Gears"]
    },
    {
      src: "https://textronsteelalloys.com/wp-content/uploads/2018/12/en19-plate-sheet-mumbai-300x300.jpg",
      alt: "EN19 Steel Plate Sheet",
      title: "EN19 Plates",
      description: "Alloy steel with excellent strength and toughness properties",
      grade: "EN19 / 4140",
      applications: ["High Stress Components", "Automotive", "Aerospace"]
    },
    {
      src: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=300&h=300&fit=crop&crop=center",
      alt: "Carbon Steel Plate General Purpose",
      title: "General Carbon Steel Plates",
      description: "Wide range of carbon steel plates for various industrial applications",
      grade: "Various Grades",
      applications: ["Industrial", "Construction", "Manufacturing"]
    },
    {
      src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&crop=center",
      alt: "High Strength Carbon Steel",
      title: "High Strength Carbon Steel",
      description: "High-strength carbon steel plates for demanding applications",
      grade: "A572 Gr 50",
      applications: ["Heavy Construction", "Mining Equipment", "Infrastructure"]
    },
    {
      src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=300&h=300&fit=crop&crop=center",
      alt: "Pressure Vessel Steel Plates",
      title: "Pressure Vessel Steel",
      description: "Specialized carbon steel plates for pressure vessel applications",
      grade: "A516 Gr 60/70",
      applications: ["Pressure Vessels", "Boilers", "Storage Tanks"]
    },
    {
      src: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=300&fit=crop&crop=center",
      alt: "Structural Carbon Steel Plates",
      title: "Structural Carbon Steel",
      description: "Heavy-duty structural carbon steel plates for construction",
      grade: "IS 2062 / A36",
      applications: ["Building Construction", "Infrastructure", "Industrial Structures"]
    }
  ];

  return (
    <>
      <ProductSEO
        title="Carbon Steel Plates & Sheets | A36, A516, C45, EN19, 50CrV4 | Mumbai"
        description="Premium carbon steel plates & sheets in grades A36, A516, A572, A283, C45, EN19, 50CrV4. ASTM, EN, IS certified for structural construction, pressure vessels, spring steel applications. Best prices from Mumbai supplier."
        keywords="carbon steel plates, A36 steel plates, A516 steel plates, A283 grade C plates, C45 steel plates, EN19 steel plates, 50CrV4 spring steel, structural steel plates, pressure vessel plates, carbon steel sheets, hot rolled steel plates, Mumbai carbon steel supplier, carbon steel manufacturer, steel plates exporter, spring steel supplier, alloy steel plates"
        category="Plates & Sheets"
        productName="Carbon Steel Plates & Sheets - A36, A516, C45, EN19, 50CrV4"
        specifications={specifications}
        canonicalUrl="https://mamtasteel.com/product/plates-sheets/carbon-steel"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Carbon Steel Plates</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="hero-title">
                Premium Carbon Steel Plates & Sheets
              </h1>
              <p className="text-lg md:text-xl mb-4 text-blue-100" data-testid="hero-subtitle">
                ASTM A36 • A516 • A572 • A283 • EN19 • C45 • 50CrV4 Spring Steel
              </p>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-description">
                High-quality carbon steel plates for structural construction, pressure vessels, spring steel applications, and general fabrication. Available in various grades with ASTM, EN, IS, and JIS certifications.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8 text-sm">
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-semibold">A36</div>
                  <div className="text-blue-200">Structural Steel</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-semibold">A516</div>
                  <div className="text-blue-200">Pressure Vessel</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-semibold">C45</div>
                  <div className="text-blue-200">Medium Carbon</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-semibold">EN19</div>
                  <div className="text-blue-200">Alloy Steel</div>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <div className="font-semibold">50CrV4</div>
                  <div className="text-blue-200">Spring Steel</div>
                </div>
              </div>
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

        {/* Product Gallery */}
        <section className="py-16 bg-white dark:bg-gray-800" data-testid="product-gallery-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-4" data-testid="gallery-title">
              Carbon Steel Products Gallery
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-3xl mx-auto">
              Explore our comprehensive range of carbon steel plates and sheets in various grades for structural, pressure vessel, spring steel, and general fabrication applications.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {carbonSteelProducts.map((product, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" data-testid={`product-image-${index}`}>
                  <div className="relative">
                    <img 
                      src={product.src} 
                      alt={product.alt}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 bg-navy-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      In Stock
                    </div>
                    <div className="absolute top-4 left-4 bg-gold-primary text-navy-primary px-3 py-1 rounded-full text-sm font-semibold">
                      {product.grade}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-navy-primary dark:text-white mb-2">{product.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{product.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Applications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.applications.map((app, appIndex) => (
                          <span key={appIndex} className="bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-200 px-2 py-1 rounded text-xs">
                            {app}
                          </span>
                        ))}
                      </div>
                    </div>
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
              Why Choose Our Carbon Steel Plates?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-4xl mx-auto">
              Our carbon steel plates meet the highest industry standards and are trusted by construction, automotive, manufacturing, and energy industries worldwide.
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

        {/* Specifications */}
        <section className="py-16 bg-white dark:bg-gray-800" data-testid="specifications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-4" data-testid="specifications-title">
                Technical Specifications
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-4xl mx-auto">
                Comprehensive technical specifications and standards compliance for all carbon steel grades and applications.
              </p>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md" data-testid="specifications-standards">
                  <h3 className="text-2xl font-semibold text-navy-primary dark:text-white mb-6">Standards & Grades</h3>
                  <ul className="space-y-3">
                    {specifications.map((spec, index) => (
                      <li key={index} className="flex items-start" data-testid={`spec-${index}`}>
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md" data-testid="specifications-applications">
                  <h3 className="text-2xl font-semibold text-navy-primary dark:text-white mb-6">Industry Applications</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-gold-primary pl-4">
                      <h4 className="font-semibold text-navy-primary dark:text-white mb-2">Construction & Infrastructure</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Structural Steel Construction and Buildings</li>
                        <li>• Bridge and Infrastructure Projects</li>
                        <li>• Industrial Plant Construction</li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-navy-primary dark:text-white mb-2">Industrial & Manufacturing</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Pressure Vessels and Storage Tanks</li>
                        <li>• Machinery and Equipment Manufacturing</li>
                        <li>• Boiler and Heat Exchanger Components</li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold text-navy-primary dark:text-white mb-2">Automotive & Transportation</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Spring Manufacturing (50CrV4)</li>
                        <li>• Automotive Components and Parts</li>
                        <li>• Railway and Transportation Industry</li>
                      </ul>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold text-navy-primary dark:text-white mb-2">Energy & Marine</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Oil and Gas Pipeline Construction</li>
                        <li>• Power Generation Equipment</li>
                        <li>• Shipbuilding and Marine Applications</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carbon Steel Grades */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900" data-testid="carbon-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-4" data-testid="carbon-grades-title">
                Available Carbon Steel Grades
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-4xl mx-auto">
                Comprehensive range of carbon steel grades with mechanical properties and specific applications for various industrial requirements.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-md" data-testid="carbon-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Grade</th>
                      <th className="px-6 py-4 text-left">Yield Strength (MPa)</th>
                      <th className="px-6 py-4 text-left">Tensile Strength (MPa)</th>
                      <th className="px-6 py-4 text-left">Primary Applications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 font-semibold text-navy-primary dark:text-white">A36</td>
                      <td className="px-6 py-4 dark:text-gray-300">250</td>
                      <td className="px-6 py-4 dark:text-gray-300">400-550</td>
                      <td className="px-6 py-4 dark:text-gray-300">General structural construction</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 font-semibold text-navy-primary dark:text-white">A516 Gr 60</td>
                      <td className="px-6 py-4 dark:text-gray-300">220</td>
                      <td className="px-6 py-4 dark:text-gray-300">415-550</td>
                      <td className="px-6 py-4 dark:text-gray-300">Pressure vessels, moderate temperature</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 font-semibold text-navy-primary dark:text-white">A516 Gr 70</td>
                      <td className="px-6 py-4 dark:text-gray-300">260</td>
                      <td className="px-6 py-4 dark:text-gray-300">485-620</td>
                      <td className="px-6 py-4 dark:text-gray-300">Pressure vessels, higher strength</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 font-semibold text-navy-primary dark:text-white">A572 Gr 50</td>
                      <td className="px-6 py-4 dark:text-gray-300">345</td>
                      <td className="px-6 py-4 dark:text-gray-300">450</td>
                      <td className="px-6 py-4 dark:text-gray-300">High-strength structural applications</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 font-semibold text-navy-primary dark:text-white">C45</td>
                      <td className="px-6 py-4 dark:text-gray-300">355</td>
                      <td className="px-6 py-4 dark:text-gray-300">630-780</td>
                      <td className="px-6 py-4 dark:text-gray-300">Medium carbon steel for machinery</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 font-semibold text-navy-primary dark:text-white">EN19</td>
                      <td className="px-6 py-4 dark:text-gray-300">585</td>
                      <td className="px-6 py-4 dark:text-gray-300">850-1000</td>
                      <td className="px-6 py-4 dark:text-gray-300">High stress components, automotive</td>
                    </tr>
                    <tr className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-6 py-4 font-semibold text-navy-primary dark:text-white">50CrV4</td>
                      <td className="px-6 py-4 dark:text-gray-300">1000</td>
                      <td className="px-6 py-4 dark:text-gray-300">1200-1400</td>
                      <td className="px-6 py-4 dark:text-gray-300">Spring steel, automotive springs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Grade-Specific Details */}
        <section className="py-16 bg-white dark:bg-gray-800" data-testid="grade-details-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-4" data-testid="grade-details-title">
                Detailed Carbon Steel Grade Specifications
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-4xl mx-auto">
                In-depth technical specifications, chemical composition, and mechanical properties for each carbon steel grade.
              </p>

              {/* A36 Grade Details */}
              <div className="mb-12 bg-gray-50 dark:bg-gray-700 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-navy-primary dark:text-white mb-6" data-testid="a36-details">ASTM A36 - Structural Carbon Steel</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-navy-primary dark:text-white mb-4">Chemical Composition (%)</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded">
                        <thead className="bg-navy-primary text-white">
                          <tr>
                            <th className="px-4 py-2 text-left">Element</th>
                            <th className="px-4 py-2 text-left">Max %</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                          <tr><td className="px-4 py-2 dark:text-gray-300">Carbon (C)</td><td className="px-4 py-2 dark:text-gray-300">0.25</td></tr>
                          <tr><td className="px-4 py-2 dark:text-gray-300">Manganese (Mn)</td><td className="px-4 py-2 dark:text-gray-300">0.80-1.20</td></tr>
                          <tr><td className="px-4 py-2 dark:text-gray-300">Silicon (Si)</td><td className="px-4 py-2 dark:text-gray-300">0.40</td></tr>
                          <tr><td className="px-4 py-2 dark:text-gray-300">Phosphorus (P)</td><td className="px-4 py-2 dark:text-gray-300">0.04</td></tr>
                          <tr><td className="px-4 py-2 dark:text-gray-300">Sulfur (S)</td><td className="px-4 py-2 dark:text-gray-300">0.05</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-navy-primary dark:text-white mb-4">Mechanical Properties</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li><strong>Tensile Strength:</strong> 400-550 MPa</li>
                      <li><strong>Yield Strength:</strong> 250 MPa min</li>
                      <li><strong>Elongation:</strong> 20% min (in 200mm)</li>
                      <li><strong>Hardness:</strong> 119-162 HB</li>
                    </ul>
                    <h4 className="text-lg font-semibold text-navy-primary dark:text-white mb-2 mt-4">Applications</h4>
                    <p className="text-gray-700 dark:text-gray-300">General structural construction, buildings, bridges, transmission towers, and non-critical pressure vessel applications.</p>
                  </div>
                </div>
              </div>

              {/* C45 Grade Details */}
              <div className="mb-12 bg-gray-50 dark:bg-gray-700 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-navy-primary dark:text-white mb-6" data-testid="c45-details">C45 - Medium Carbon Steel</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-navy-primary dark:text-white mb-4">Chemical Composition (%)</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded">
                        <thead className="bg-navy-primary text-white">
                          <tr>
                            <th className="px-4 py-2 text-left">Element</th>
                            <th className="px-4 py-2 text-left">Range %</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                          <tr><td className="px-4 py-2 dark:text-gray-300">Carbon (C)</td><td className="px-4 py-2 dark:text-gray-300">0.42-0.50</td></tr>
                          <tr><td className="px-4 py-2 dark:text-gray-300">Manganese (Mn)</td><td className="px-4 py-2 dark:text-gray-300">0.50-0.80</td></tr>
                          <tr><td className="px-4 py-2 dark:text-gray-300">Silicon (Si)</td><td className="px-4 py-2 dark:text-gray-300">0.15-0.40</td></tr>
                          <tr><td className="px-4 py-2 dark:text-gray-300">Phosphorus (P)</td><td className="px-4 py-2 dark:text-gray-300">0.045 max</td></tr>
                          <tr><td className="px-4 py-2 dark:text-gray-300">Sulfur (S)</td><td className="px-4 py-2 dark:text-gray-300">0.045 max</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-navy-primary dark:text-white mb-4">Mechanical Properties</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li><strong>Tensile Strength:</strong> 630-780 MPa</li>
                      <li><strong>Yield Strength:</strong> 355 MPa min</li>
                      <li><strong>Elongation:</strong> 14% min</li>
                      <li><strong>Hardness:</strong> 170-210 HB</li>
                    </ul>
                    <h4 className="text-lg font-semibold text-navy-primary dark:text-white mb-2 mt-4">Applications</h4>
                    <p className="text-gray-700 dark:text-gray-300">Machinery components, gears, shafts, pins, and general engineering applications requiring higher strength.</p>
                  </div>
                </div>
              </div>

              {/* EN19 Grade Details */}
              <div className="mb-12 bg-gray-50 dark:bg-gray-700 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-navy-primary dark:text-white mb-6" data-testid="en19-details">EN19 - High Strength Alloy Steel</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-navy-primary dark:text-white mb-4">Chemical Composition (%)</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded">
                        <thead className="bg-navy-primary text-white">
                          <tr>
                            <th className="px-4 py-2 text-left">Element</th>
                            <th className="px-4 py-2 text-left">Range %</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                          <tr><td className="px-4 py-2 dark:text-gray-300">Carbon (C)</td><td className="px-4 py-2 dark:text-gray-300">0.36-0.44</td></tr>
                          <tr><td className="px-4 py-2 dark:text-gray-300">Manganese (Mn)</td><td className="px-4 py-2 dark:text-gray-300">0.45-0.70</td></tr>
                          <tr><td className="px-4 py-2 dark:text-gray-300">Silicon (Si)</td><td className="px-4 py-2 dark:text-gray-300">0.10-0.40</td></tr>
                          <tr><td className="px-4 py-2 dark:text-gray-300">Chromium (Cr)</td><td className="px-4 py-2 dark:text-gray-300">1.00-1.40</td></tr>
                          <tr><td className="px-4 py-2 dark:text-gray-300">Molybdenum (Mo)</td><td className="px-4 py-2 dark:text-gray-300">0.25-0.35</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-navy-primary dark:text-white mb-4">Mechanical Properties</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li><strong>Tensile Strength:</strong> 850-1000 MPa</li>
                      <li><strong>Yield Strength:</strong> 585 MPa min</li>
                      <li><strong>Elongation:</strong> 12% min</li>
                      <li><strong>Hardness:</strong> 248-302 HB</li>
                    </ul>
                    <h4 className="text-lg font-semibold text-navy-primary dark:text-white mb-2 mt-4">Applications</h4>
                    <p className="text-gray-700 dark:text-gray-300">High stress automotive components, connecting rods, bolts, studs, and critical machinery parts.</p>
                  </div>
                </div>
              </div>

              {/* 50CrV4 Grade Details */}
              <div className="mb-12 bg-gray-50 dark:bg-gray-700 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold text-navy-primary dark:text-white mb-6" data-testid="50crv4-details">50CrV4 - Spring Steel</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-navy-primary dark:text-white mb-4">Chemical Composition (%)</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded">
                        <thead className="bg-navy-primary text-white">
                          <tr>
                            <th className="px-4 py-2 text-left">Element</th>
                            <th className="px-4 py-2 text-left">Range %</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                          <tr><td className="px-4 py-2 dark:text-gray-300">Carbon (C)</td><td className="px-4 py-2 dark:text-gray-300">0.47-0.54</td></tr>
                          <tr><td className="px-4 py-2 dark:text-gray-300">Manganese (Mn)</td><td className="px-4 py-2 dark:text-gray-300">0.70-1.10</td></tr>
                          <tr><td className="px-4 py-2 dark:text-gray-300">Silicon (Si)</td><td className="px-4 py-2 dark:text-gray-300">0.15-0.40</td></tr>
                          <tr><td className="px-4 py-2 dark:text-gray-300">Chromium (Cr)</td><td className="px-4 py-2 dark:text-gray-300">0.90-1.20</td></tr>
                          <tr><td className="px-4 py-2 dark:text-gray-300">Vanadium (V)</td><td className="px-4 py-2 dark:text-gray-300">0.10-0.25</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-navy-primary dark:text-white mb-4">Mechanical Properties</h4>
                    <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                      <li><strong>Tensile Strength:</strong> 1200-1400 MPa</li>
                      <li><strong>Yield Strength:</strong> 1000 MPa min</li>
                      <li><strong>Elongation:</strong> 8% min</li>
                      <li><strong>Hardness:</strong> 360-430 HB</li>
                    </ul>
                    <h4 className="text-lg font-semibold text-navy-primary dark:text-white mb-2 mt-4">Applications</h4>
                    <p className="text-gray-700 dark:text-gray-300">Automotive springs, valve springs, railway springs, and high-performance spring applications requiring excellent fatigue resistance.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dedicated Applications Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900" data-testid="applications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-4" data-testid="applications-title">
                Carbon Steel Applications by Industry
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-4xl mx-auto">
                Comprehensive applications across multiple industries for various carbon steel grades and specifications.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {applications.map((application, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow" data-testid={`application-${index}`}>
                    <div className="flex items-start">
                      <div className="bg-navy-primary text-white p-2 rounded-lg mr-4 flex-shrink-0">
                        <Star className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-primary dark:text-white mb-2">{application}</h3>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {index < 5 && <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs mr-2">Structural</span>}
                          {index >= 5 && index < 10 && <span className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-xs mr-2">Industrial</span>}
                          {index >= 10 && <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-2 py-1 rounded-full text-xs mr-2">Specialized</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company Quality Standards */}
        <section className="py-16 bg-white dark:bg-gray-800" data-testid="company-quality-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary dark:text-white mb-4" data-testid="company-quality-title">
                Leading Carbon Steel Supplier & Manufacturer
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-4xl mx-auto">
                Mamta Steel Traders offers a comprehensive range of carbon steel plates and sheets. All of our carbon steel products meet or exceed leading industry standards and certifications.
              </p>
              
              <div className="grid lg:grid-cols-2 gap-12 mb-12">
                <div className="bg-gray-50 dark:bg-gray-700 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold text-navy-primary dark:text-white mb-6">Quality Standards We Meet</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-600 p-4 rounded-lg text-center">
                      <div className="font-semibold text-navy-primary dark:text-white">ASTM Standards</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">A36, A516, A572, A283</div>
                    </div>
                    <div className="bg-white dark:bg-gray-600 p-4 rounded-lg text-center">
                      <div className="font-semibold text-navy-primary dark:text-white">EN Standards</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">EN 10025, EN 1.1191</div>
                    </div>
                    <div className="bg-white dark:bg-gray-600 p-4 rounded-lg text-center">
                      <div className="font-semibold text-navy-primary dark:text-white">IS Standards</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">IS 2062, IS 4923</div>
                    </div>
                    <div className="bg-white dark:bg-gray-600 p-4 rounded-lg text-center">
                      <div className="font-semibold text-navy-primary dark:text-white">JIS Standards</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">JIS G3101, JIS G3106</div>
                    </div>
                    <div className="bg-white dark:bg-gray-600 p-4 rounded-lg text-center">
                      <div className="font-semibold text-navy-primary dark:text-white">DIN Standards</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">DIN 17100, DIN 17102</div>
                    </div>
                    <div className="bg-white dark:bg-gray-600 p-4 rounded-lg text-center">
                      <div className="font-semibold text-navy-primary dark:text-white">BS Standards</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">BS 4360, BS EN 10025</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-navy-primary text-white p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold mb-6">Our Services & Capabilities</h3>
                  <ul className="space-y-3">
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
                      <span>Heat treatment services for specific applications</span>
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
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                      <span>Quality assurance and material traceability</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-navy-primary dark:text-white mb-4">Why Choose Our Carbon Steel Products?</h3>
                <p className="text-lg text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
                  Our carbon steel plates and sheets are trusted by major construction companies, automotive manufacturers, pressure vessel fabricators, and industrial companies worldwide. We maintain strict quality control and provide material traceability for all applications.
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
                Ready to Order Carbon Steel Plates?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our carbon steel specialists
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3" data-testid="contact-phone">
                  <Phone className="w-6 h-6 text-gold-primary" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-blue-100">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3" data-testid="contact-email">
                  <Mail className="w-6 h-6 text-gold-primary" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-blue-100">info@mamtasteel.com</p>
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