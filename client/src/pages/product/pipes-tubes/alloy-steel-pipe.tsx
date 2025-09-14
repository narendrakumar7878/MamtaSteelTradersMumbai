import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function AlloySteelPipes() {
  const specifications = [
    "ASTM A335/A335M - Seamless Ferritic Alloy-Steel Pipe for High-Temperature Service",
    "ASTM A213/A213M - Seamless Ferritic and Austenitic Alloy-Steel Boiler",
    "ASTM A691 - Carbon and Alloy Steel Pipe, Electric-Fusion-Welded",
    "ASME SA335 Grade P5, P9, P11, P22, P91, P92",
    "Size Range: 1/8\" to 48\" NB in Schedule 40, 80, 160, XXS",
    "Temperature Range: Up to 650°C",
    "Grades: P5, P9, P11, P22, P91, P92, T5, T9, T11, T22"
  ];

  const applications = [
    "Power Generation Plants",
    "Petrochemical Refineries",
    "High-Temperature Steam Lines",
    "Superheater and Reheater Tubes",
    "Heat Exchanger Applications",
    "Boiler Components",
    "Pressure Vessel Piping",
    "Chemical Processing Equipment"
  ];

  const features = [
    { icon: Shield, title: "High Temperature Resistant", desc: "Designed for elevated temperature service up to 650°C" },
    { icon: TrendingUp, title: "Superior Strength", desc: "Enhanced mechanical properties at high temperatures" },
    { icon: Award, title: "ASME Certified", desc: "ASME SA335 and ASTM certified materials" },
    { icon: CheckCircle, title: "Multiple Grades", desc: "Wide range of alloy steel grades available" }
  ];

  return (
    <>
      <ProductSEO
        title="ASTM A335 Alloy Steel Pipes | P5, P9, P11, P22, P91, P92 High Temperature Pipes | Mumbai Steel Supplier"
        description="Premium ASTM A335 alloy steel pipes for high-temperature service up to 650°C. Complete range of P5, P9, P11, P22, P91, P92 grades with AISI 4130. Chemical composition, mechanical properties, power plant applications. Mumbai stockist with 50000+ MT inventory."
        keywords="ASTM A335 alloy steel pipes, P5 P9 P11 P22 P91 P92 pipes, high temperature seamless pipes, chrome molybdenum alloy pipes, AISI 4130 SAE 4130 pipes, power plant boiler tubes, superheater reheater tubes, petrochemical alloy pipes, hydrogen service pipes, creep resistant alloy steel, ultra supercritical power plant pipes, Mumbai alloy steel stockist, ferritic alloy steel pipes, martensitic alloy steel P91, chrome moly pipes supplier India"
        category="Pipes & Tubes"
        productName="ASTM A335 Alloy Steel Pipes - P5, P9, P11, P22, P91, P92"
        specifications={specifications}
        canonicalUrl="/product/pipes-tubes/alloy-steel-pipe"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Alloy Steel Pipes</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Alloy Steel Pipes
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-temperature service alloy steel pipes for power generation and petrochemical industries
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

        {/* Enhanced SEO Content Section */}
        <section className="py-16 bg-gradient-to-r from-gray-50 to-white" data-testid="enhanced-seo-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-6" data-testid="seo-title">
                    Professional ASTM A335 Alloy Steel Pipes Manufacturer & Stockist
                  </h2>
                  <p className="text-gray-700 mb-6">
                    We are India's leading manufacturer and stockist of ASTM A335 alloy steel pipes with over 50,000 metric tons 
                    of ready inventory. Our comprehensive range includes all major grades: P5, P9, P11, P22, P91, P92, and AISI 4130, 
                    designed for high-temperature service applications up to 650°C.
                  </p>
                  <p className="text-gray-700 mb-6">
                    Our alloy steel pipes feature superior chromium-molybdenum composition for enhanced creep resistance, 
                    oxidation resistance, and mechanical strength at elevated temperatures. Perfect for power generation plants, 
                    petrochemical refineries, and critical industrial applications.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-navy-primary mb-2">Quality Certifications:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• ASTM A335/A335M Certified</li>
                        <li>• ASME SA335 Approved</li>
                        <li>• ISO 9001:2015 Quality System</li>
                        <li>• PED 2014/68/EU Compliance</li>
                      </ul>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <h4 className="font-semibold text-navy-primary mb-2">Technical Expertise:</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Material Test Certificates (MTC)</li>
                        <li>• Third-party inspection services</li>
                        <li>• Custom chemical composition</li>
                        <li>• Metallurgical consultation</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-navy-primary p-8 rounded-lg text-white">
                  <h3 className="text-2xl font-bold mb-6 text-gold-primary">Why Choose Our Alloy Steel Pipes?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold mb-1">Extensive Inventory</h4>
                        <p className="text-sm text-blue-100">50,000+ MT ready stock in all major grades and sizes</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold mb-1">Technical Excellence</h4>
                        <p className="text-sm text-blue-100">Expert metallurgical team with 25+ years experience</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold mb-1">Global Supply</h4>
                        <p className="text-sm text-blue-100">Worldwide delivery with complete documentation</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gold-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold mb-1">Competitive Pricing</h4>
                        <p className="text-sm text-blue-100">Direct manufacturer rates with flexible payment terms</p>
                      </div>
                    </div>
                  </div>
                  <Link href="/contact" className="mt-6 bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-6 rounded-lg transition-colors duration-300 inline-block" data-testid="seo-cta-button">
                    Request Quote & Technical Data
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Gallery */}
        <section className="py-16 bg-white" data-testid="product-gallery-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="gallery-title">
                Our Alloy Steel Pipe Products
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {/* A106 Grade B */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" data-testid="gallery-a106">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <img 
                      src="https://textronsteelalloys.com/wp-content/uploads/2018/12/carbon-300x300.jpg" 
                      alt="A106 Grade B Carbon Steel Seamless Pipe"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width="300"
                      height="300"
                      data-testid="a106-image"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-primary mb-2">A106 Grade B (Carbon Steel)</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    High-temperature carbon steel seamless pipes - also available for comparison with alloy grades.
                  </p>
                  <Link href="/contact" className="text-gold-primary hover:text-gold-secondary font-medium text-sm transition-colors" data-testid="a106-get-quote">
                    Get Quote →
                  </Link>
                </div>

                {/* AISI 4130 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" data-testid="gallery-aisi-4130">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <img 
                      src="https://textronsteelalloys.com/wp-content/uploads/2022/07/aisi-sae-4130-1.7218-25CRMO-300x300.jpg" 
                      alt="AISI 4130 SAE 4130 Seamless Pipes Tubes"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width="300"
                      height="300"
                      data-testid="aisi-4130-image"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-primary mb-2">AISI 4130 / SAE 4130</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Chromium-molybdenum alloy steel with excellent strength and weldability for structural applications.
                  </p>
                  <Link href="/contact" className="text-gold-primary hover:text-gold-secondary font-medium text-sm transition-colors" data-testid="aisi-4130-get-quote">
                    Get Quote →
                  </Link>
                </div>

                {/* ASTM A335 Grade P5 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" data-testid="gallery-p5">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <img 
                      src="https://textronsteelalloys.com/wp-content/uploads/2018/12/pipes-300x300.jpg" 
                      alt="ASTM A335 Grade P5 Alloy Seamless Pipe Tube"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width="300"
                      height="300"
                      data-testid="p5-image"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-primary mb-2">ASTM A335 Grade P5</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Chrome-moly alloy steel pipes for high-temperature service in power generation applications.
                  </p>
                  <Link href="/contact" className="text-gold-primary hover:text-gold-secondary font-medium text-sm transition-colors" data-testid="p5-get-quote">
                    Get Quote →
                  </Link>
                </div>

                {/* ASTM A335 Grade P9 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" data-testid="gallery-p9">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <img 
                      src="https://textronsteelalloys.com/wp-content/uploads/2018/12/p1-300x300.jpg" 
                      alt="ASTM A335 Grade P9 Alloy Steel Seamless Pipe"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width="300"
                      height="300"
                      data-testid="p9-image"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-primary mb-2">ASTM A335 Grade P9</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Enhanced chrome-moly alloy steel with superior creep resistance for superheater applications.
                  </p>
                  <Link href="/contact" className="text-gold-primary hover:text-gold-secondary font-medium text-sm transition-colors" data-testid="p9-get-quote">
                    Get Quote →
                  </Link>
                </div>

                {/* ASTM A335 Grade P91 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" data-testid="gallery-p91">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <img 
                      src="https://textronsteelalloys.com/wp-content/uploads/2018/12/high-1-300x300.jpg" 
                      alt="ASTM A335 Grade P91 High Temperature Alloy Steel Pipe"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width="300"
                      height="300"
                      data-testid="p91-image"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-primary mb-2">ASTM A335 Grade P91</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Advanced ferritic/martensitic alloy steel for ultra-high temperature steam applications.
                  </p>
                  <Link href="/contact" className="text-gold-primary hover:text-gold-secondary font-medium text-sm transition-colors" data-testid="p91-get-quote">
                    Get Quote →
                  </Link>
                </div>

                {/* ASTM A335 Grade P22 */}
                <div className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" data-testid="gallery-p22">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                    <img 
                      src="https://textronsteelalloys.com/wp-content/uploads/woocommerce-placeholder-300x300.png" 
                      alt="ASTM A335 Grade P22 Alloy Steel Pipe"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      width="300"
                      height="300"
                      data-testid="p22-image"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-primary mb-2">ASTM A335 Grade P22</h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Chrome-molybdenum alloy steel pipes for high-temperature hydrogen service applications.
                  </p>
                  <Link href="/contact" className="text-gold-primary hover:text-gold-secondary font-medium text-sm transition-colors" data-testid="p22-get-quote">
                    Get Quote →
                  </Link>
                </div>
              </div>

              {/* Gallery CTA */}
              <div className="text-center bg-gray-50 p-8 rounded-lg" data-testid="gallery-cta">
                <h3 className="text-2xl font-bold text-navy-primary mb-4">Need Custom Alloy Steel Solutions?</h3>
                <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                  We stock a comprehensive range of alloy steel pipes in various grades and specifications. 
                  Contact our technical team for material selection and custom requirements.
                </p>
                <Link href="/contact" className="bg-navy-primary hover:bg-navy-secondary text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-block" data-testid="gallery-contact-button">
                  Request Technical Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-16 bg-white" data-testid="features-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="features-title">
              Why Choose Our Alloy Steel Pipes?
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
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="specifications-title">
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

        {/* Enhanced Technical Specifications */}
        <section className="py-16 bg-white" data-testid="enhanced-technical-specs-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="enhanced-specs-title">
                ASTM A335 Chemical Composition & Mechanical Properties
              </h2>
              
              {/* Chemical Composition Table */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8" data-testid="alloy-chemical-composition-section">
                <h3 className="text-2xl font-semibold text-navy-primary mb-6">Chemical Composition (%)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm" data-testid="alloy-chemical-composition-table">
                    <thead className="bg-navy-primary text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Grade</th>
                        <th className="px-4 py-3 text-center">C</th>
                        <th className="px-4 py-3 text-center">Si</th>
                        <th className="px-4 py-3 text-center">Mn</th>
                        <th className="px-4 py-3 text-center">P</th>
                        <th className="px-4 py-3 text-center">S</th>
                        <th className="px-4 py-3 text-center">Cr</th>
                        <th className="px-4 py-3 text-center">Mo</th>
                        <th className="px-4 py-3 text-center">Ni</th>
                        <th className="px-4 py-3 text-center">V</th>
                        <th className="px-4 py-3 text-center">Nb</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">P5</td>
                        <td className="px-4 py-3 text-center">0.15 max</td>
                        <td className="px-4 py-3 text-center">0.50 max</td>
                        <td className="px-4 py-3 text-center">0.30-0.60</td>
                        <td className="px-4 py-3 text-center">0.030 max</td>
                        <td className="px-4 py-3 text-center">4.00-6.00</td>
                        <td className="px-4 py-3 text-center">0.45-0.65</td>
                        <td className="px-4 py-3 text-center">-</td>
                        <td className="px-4 py-3 text-center">-</td>
                        <td className="px-4 py-3 text-center">-</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">P9</td>
                        <td className="px-4 py-3 text-center">0.15 max</td>
                        <td className="px-4 py-3 text-center">0.25-1.00</td>
                        <td className="px-4 py-3 text-center">0.30-0.60</td>
                        <td className="px-4 py-3 text-center">0.030 max</td>
                        <td className="px-4 py-3 text-center">8.00-10.00</td>
                        <td className="px-4 py-3 text-center">0.90-1.10</td>
                        <td className="px-4 py-3 text-center">-</td>
                        <td className="px-4 py-3 text-center">-</td>
                        <td className="px-4 py-3 text-center">-</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">P11</td>
                        <td className="px-4 py-3 text-center">0.05-0.15</td>
                        <td className="px-4 py-3 text-center">0.50-1.00</td>
                        <td className="px-4 py-3 text-center">0.30-0.60</td>
                        <td className="px-4 py-3 text-center">0.030 max</td>
                        <td className="px-4 py-3 text-center">1.00-1.50</td>
                        <td className="px-4 py-3 text-center">0.44-0.65</td>
                        <td className="px-4 py-3 text-center">-</td>
                        <td className="px-4 py-3 text-center">-</td>
                        <td className="px-4 py-3 text-center">-</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">P22</td>
                        <td className="px-4 py-3 text-center">0.05-0.15</td>
                        <td className="px-4 py-3 text-center">0.50 max</td>
                        <td className="px-4 py-3 text-center">0.30-0.60</td>
                        <td className="px-4 py-3 text-center">0.030 max</td>
                        <td className="px-4 py-3 text-center">1.90-2.60</td>
                        <td className="px-4 py-3 text-center">0.87-1.13</td>
                        <td className="px-4 py-3 text-center">-</td>
                        <td className="px-4 py-3 text-center">-</td>
                        <td className="px-4 py-3 text-center">-</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">P91</td>
                        <td className="px-4 py-3 text-center">0.08-0.12</td>
                        <td className="px-4 py-3 text-center">0.20-0.50</td>
                        <td className="px-4 py-3 text-center">0.30-0.60</td>
                        <td className="px-4 py-3 text-center">0.020 max</td>
                        <td className="px-4 py-3 text-center">8.00-9.50</td>
                        <td className="px-4 py-3 text-center">0.85-1.05</td>
                        <td className="px-4 py-3 text-center">0.40 max</td>
                        <td className="px-4 py-3 text-center">0.18-0.25</td>
                        <td className="px-4 py-3 text-center">0.06-0.10</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mechanical Properties Table */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8" data-testid="alloy-mechanical-properties-section">
                <h3 className="text-2xl font-semibold text-navy-primary mb-6">Mechanical Properties</h3>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm" data-testid="alloy-mechanical-properties-table">
                    <thead className="bg-navy-primary text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">Grade</th>
                        <th className="px-6 py-4 text-center">Tensile Strength (MPa)</th>
                        <th className="px-6 py-4 text-center">Yield Strength (MPa)</th>
                        <th className="px-6 py-4 text-center">Elongation (%)</th>
                        <th className="px-6 py-4 text-center">Max Temperature (°C)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">P5</td>
                        <td className="px-6 py-4 text-center">415 min</td>
                        <td className="px-6 py-4 text-center">205 min</td>
                        <td className="px-6 py-4 text-center">30 min</td>
                        <td className="px-6 py-4 text-center">650</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">P9</td>
                        <td className="px-6 py-4 text-center">585 min</td>
                        <td className="px-6 py-4 text-center">415 min</td>
                        <td className="px-6 py-4 text-center">20 min</td>
                        <td className="px-6 py-4 text-center">650</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">P11</td>
                        <td className="px-6 py-4 text-center">415 min</td>
                        <td className="px-6 py-4 text-center">205 min</td>
                        <td className="px-6 py-4 text-center">30 min</td>
                        <td className="px-6 py-4 text-center">593</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">P22</td>
                        <td className="px-6 py-4 text-center">415 min</td>
                        <td className="px-6 py-4 text-center">205 min</td>
                        <td className="px-6 py-4 text-center">30 min</td>
                        <td className="px-6 py-4 text-center">650</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">P91</td>
                        <td className="px-6 py-4 text-center">585-760</td>
                        <td className="px-6 py-4 text-center">415 min</td>
                        <td className="px-6 py-4 text-center">20 min</td>
                        <td className="px-6 py-4 text-center">650</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Temperature Service Guidelines */}
              <div className="bg-gradient-to-r from-navy-primary to-navy-secondary p-8 rounded-lg shadow-md text-white" data-testid="temperature-service-section">
                <h3 className="text-2xl font-semibold mb-6">Temperature Service Guidelines</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white/10 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 text-gold-primary">Low Temperature Service</h4>
                    <ul className="text-sm space-y-2 text-blue-100">
                      <li>• Grade P5: Up to 650°C</li>
                      <li>• Excellent oxidation resistance</li>
                      <li>• Good creep strength</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 text-gold-primary">Medium Temperature Service</h4>
                    <ul className="text-sm space-y-2 text-blue-100">
                      <li>• Grade P9/P11: Up to 650°C</li>
                      <li>• Enhanced strength properties</li>
                      <li>• Superior weldability</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 p-6 rounded-lg">
                    <h4 className="font-semibold text-lg mb-3 text-gold-primary">High Temperature Service</h4>
                    <ul className="text-sm space-y-2 text-blue-100">
                      <li>• Grade P91/P92: Up to 650°C</li>
                      <li>• Ultra-high creep resistance</li>
                      <li>• Advanced power plant applications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Individual Product Variants */}
        <section className="py-16 bg-gray-50" data-testid="product-variants-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="variants-title">
                Individual Alloy Steel Pipe Grades
              </h2>
              
              <div className="space-y-12">
                {/* ASTM A335 Grade P5 */}
                <div className="bg-white p-8 rounded-lg shadow-md" data-testid="p5-variant">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-semibold text-navy-primary mb-4">ASTM A335 Grade P5 Alloy Steel Pipes</h3>
                      <p className="text-gray-700 mb-4">
                        Grade P5 is a ferritic alloy steel containing 5% chromium and 0.5% molybdenum, designed for 
                        high-temperature service applications. Excellent for power generation plants and petrochemical industries.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Key Features:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• 5% Chromium content for oxidation resistance</li>
                            <li>• 0.5% Molybdenum for creep strength</li>
                            <li>• Service temperature up to 650°C</li>
                            <li>• Good weldability and formability</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Applications:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Superheater tubes</li>
                            <li>• Steam lines in power plants</li>
                            <li>• Heat exchanger applications</li>
                            <li>• Pressure vessel components</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <img 
                        src="https://textronsteelalloys.com/wp-content/uploads/2018/12/pipes-300x300.jpg" 
                        alt="ASTM A335 Grade P5 Alloy Seamless Pipe Tube"
                        className="w-48 h-48 object-cover rounded-lg shadow-sm"
                        loading="lazy"
                        width="300"
                        height="300"
                        data-testid="p5-product-image"
                      />
                    </div>
                  </div>
                </div>

                {/* ASTM A335 Grade P9 */}
                <div className="bg-gray-50 p-8 rounded-lg shadow-md" data-testid="p9-variant">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-semibold text-navy-primary mb-4">ASTM A335 Grade P9 Alloy Steel Pipes</h3>
                      <p className="text-gray-700 mb-4">
                        Grade P9 contains 9% chromium and 1% molybdenum, offering enhanced creep resistance and 
                        superior strength at elevated temperatures. Ideal for critical power plant applications.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Chemical Composition:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Carbon: 0.15% max</li>
                            <li>• Chromium: 8.00-10.00%</li>
                            <li>• Molybdenum: 0.90-1.10%</li>
                            <li>• Silicon: 0.25-1.00%</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Applications:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Superheater and reheater tubes</li>
                            <li>• High-temperature steam lines</li>
                            <li>• Boiler applications</li>
                            <li>• Heat recovery steam generators</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <img 
                        src="https://textronsteelalloys.com/wp-content/uploads/2018/12/p1-300x300.jpg" 
                        alt="ASTM A335 Grade P9 Alloy Steel Seamless Pipe"
                        className="w-48 h-48 object-cover rounded-lg shadow-sm"
                        loading="lazy"
                        width="300"
                        height="300"
                        data-testid="p9-product-image"
                      />
                    </div>
                  </div>
                </div>

                {/* ASTM A335 Grade P91 */}
                <div className="bg-white p-8 rounded-lg shadow-md" data-testid="p91-variant">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-semibold text-navy-primary mb-4">ASTM A335 Grade P91 Advanced Alloy Steel Pipes</h3>
                      <p className="text-gray-700 mb-4">
                        Grade P91 is an advanced ferritic/martensitic 9Cr-1Mo-V-Nb alloy steel with vanadium and niobium additions. 
                        Designed for ultra-high temperature applications with exceptional creep resistance.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Advanced Features:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Vanadium: 0.18-0.25% for strength</li>
                            <li>• Niobium: 0.06-0.10% for stability</li>
                            <li>• Chromium: 8.00-9.50%</li>
                            <li>• Superior creep rupture properties</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Applications:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Ultra-supercritical power plants</li>
                            <li>• Advanced steam generators</li>
                            <li>• High-efficiency boiler tubes</li>
                            <li>• Critical pressure vessel components</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <img 
                        src="https://textronsteelalloys.com/wp-content/uploads/2018/12/high-1-300x300.jpg" 
                        alt="ASTM A335 Grade P91 High Temperature Alloy Steel Pipe"
                        className="w-48 h-48 object-cover rounded-lg shadow-sm"
                        loading="lazy"
                        width="300"
                        height="300"
                        data-testid="p91-product-image"
                      />
                    </div>
                  </div>
                </div>

                {/* ASTM A335 Grade P22 */}
                <div className="bg-gray-50 p-8 rounded-lg shadow-md" data-testid="p22-variant">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-semibold text-navy-primary mb-4">ASTM A335 Grade P22 Alloy Steel Pipes</h3>
                      <p className="text-gray-700 mb-4">
                        Grade P22 is a chrome-molybdenum alloy steel designed for high-temperature hydrogen service. 
                        Excellent resistance to hydrogen embrittlement and superior mechanical properties.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Specifications:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Chromium: 1.90-2.60%</li>
                            <li>• Molybdenum: 0.87-1.13%</li>
                            <li>• Carbon: 0.05-0.15%</li>
                            <li>• Hydrogen service rated</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Applications:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Hydrogen reformer tubes</li>
                            <li>• Hydroprocessing equipment</li>
                            <li>• High-temperature piping systems</li>
                            <li>• Refinery applications</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <img 
                        src="https://textronsteelalloys.com/wp-content/uploads/woocommerce-placeholder-300x300.png" 
                        alt="ASTM A335 Grade P22 Alloy Steel Pipe"
                        className="w-48 h-48 object-cover rounded-lg shadow-sm"
                        loading="lazy"
                        width="300"
                        height="300"
                        data-testid="p22-product-image"
                      />
                    </div>
                  </div>
                </div>

                {/* AISI 4130 / SAE 4130 */}
                <div className="bg-white p-8 rounded-lg shadow-md" data-testid="aisi-4130-variant">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-semibold text-navy-primary mb-4">AISI 4130 / SAE 4130 Alloy Steel Pipes</h3>
                      <p className="text-gray-700 mb-4">
                        AISI 4130 is a low-alloy steel containing chromium and molybdenum. Known for excellent strength, 
                        toughness, and weldability. Widely used in structural and mechanical applications.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Composition:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Carbon: 0.28-0.33%</li>
                            <li>• Chromium: 0.80-1.10%</li>
                            <li>• Molybdenum: 0.15-0.25%</li>
                            <li>• Excellent heat treatment response</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Applications:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Aircraft structural components</li>
                            <li>• Automotive parts</li>
                            <li>• Machine tool applications</li>
                            <li>• High-strength structural tubing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <img 
                        src="https://textronsteelalloys.com/wp-content/uploads/2022/07/aisi-sae-4130-1.7218-25CRMO-300x300.jpg" 
                        alt="AISI 4130 SAE 4130 Seamless Pipes Tubes"
                        className="w-48 h-48 object-cover rounded-lg shadow-sm"
                        loading="lazy"
                        width="300"
                        height="300"
                        data-testid="aisi-4130-product-image"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA for Product Variants */}
              <div className="mt-12 text-center bg-navy-primary p-8 rounded-lg" data-testid="alloy-variants-cta">
                <h3 className="text-2xl font-bold text-white mb-4">Need Specific Alloy Steel Grade Information?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Our metallurgical experts can help you select the optimal alloy steel grade for your high-temperature 
                  applications. Contact us for detailed material certificates and technical consultation.
                </p>
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-block" data-testid="alloy-variants-contact-button">
                  Get Expert Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-navy-primary text-white" data-testid="contact-cta-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="cta-title">
                Need High-Temperature Alloy Steel Pipes?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get the exact grade for your power plant or petrochemical project
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3" data-testid="contact-phone">
                  <Phone className="w-6 h-6 text-gold-primary" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-blue-100">+91 98193 22575</p>
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
                Contact
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}