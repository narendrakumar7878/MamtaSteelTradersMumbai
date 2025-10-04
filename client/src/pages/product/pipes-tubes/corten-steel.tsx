import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function CortenSteelPipes() {
  const specifications = [
    "ASTM A588 - Standard Specification for High-Strength Low-Alloy Structural Steel",
    "ASTM A847 - Standard Specification for Cold-Formed Welded and Seamless High Strength, Low Alloy Structural Tubing",
    "EN 10025-5 - Hot Rolled Products of Structural Steels - Part 5: Technical Delivery Conditions for Structural Steels with Improved Atmospheric Corrosion Resistance",
    "JIS G3114 - Hot-rolled atmospheric corrosion resisting steels",
    "Size Range: 1/8\" to 48\" NB in various wall thicknesses",
    "Grades: COR-TEN A, COR-TEN B, Weathering Steel ASTM A588"
  ];

  const applications = [
    "Architectural and Building Facades",
    "Bridge Construction and Infrastructure",
    "Railway and Transportation Equipment",
    "Industrial Equipment and Machinery",
    "Outdoor Sculptures and Art Installations",
    "Marine and Coastal Structures",
    "Power Transmission Towers",
    "Container and Storage Applications"
  ];

  const features = [
    { icon: Shield, title: "Weather Resistant", desc: "Forms protective rust layer that prevents further corrosion" },
    { icon: TrendingUp, title: "High Strength", desc: "Superior mechanical properties compared to regular carbon steel" },
    { icon: Award, title: "Low Maintenance", desc: "Self-protecting surface eliminates need for painting or coating" },
    { icon: CheckCircle, title: "Aesthetic Appeal", desc: "Distinctive weathered appearance for architectural applications" }
  ];

  return (
    <>
      <ProductSEO
        title="Corten Steel Pipes & Tubes"
        description="Premium quality Corten weathering steel pipes and tubes with atmospheric corrosion resistance. ASTM A588, EN 10025-5 certified for architectural, bridge, and structural applications. Best prices in Mumbai for Corten steel pipes."
        keywords="Corten steel pipes, weathering steel tubes, ASTM A588 pipes, atmospheric corrosion resistant pipes, architectural steel pipes, Mumbai Corten steel supplier"
        category="Pipes & Tubes"
        productName="Corten Steel Pipes & Tubes"
        specifications={specifications}
        canonicalUrl="/product/pipes-tubes/corten-steel"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Corten Steel Pipes & Tubes</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Corten Steel Pipes & Tubes
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-performance weathering steel pipes with superior atmospheric corrosion resistance for architectural and structural applications
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
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="features-title">
              Why Choose Our Corten Steel Pipes?
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

        {/* Corten Steel Grades */}
        <section className="py-16 bg-white" data-testid="corten-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="corten-grades-title">
                Available Corten Steel Grades
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="corten-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Grade</th>
                      <th className="px-6 py-4 text-left">Standard</th>
                      <th className="px-6 py-4 text-left">Yield Strength (MPa)</th>
                      <th className="px-6 py-4 text-left">Key Features</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">COR-TEN A</td>
                      <td className="px-6 py-4">ASTM A588 Gr A</td>
                      <td className="px-6 py-4">345</td>
                      <td className="px-6 py-4">General structural applications</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">COR-TEN B</td>
                      <td className="px-6 py-4">ASTM A588 Gr B</td>
                      <td className="px-6 py-4">345</td>
                      <td className="px-6 py-4">Enhanced formability and weldability</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">S355J0WP</td>
                      <td className="px-6 py-4">EN 10025-5</td>
                      <td className="px-6 py-4">355</td>
                      <td className="px-6 py-4">European standard weathering steel</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">SMA490AW</td>
                      <td className="px-6 py-4">JIS G3114</td>
                      <td className="px-6 py-4">325</td>
                      <td className="px-6 py-4">Japanese standard atmospheric resistant</td>
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="cta-title">
                Ready to Order Corten Steel Pipes?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our weathering steel specialists
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