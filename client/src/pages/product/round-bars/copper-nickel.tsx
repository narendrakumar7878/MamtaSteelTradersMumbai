import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function CopperNickelRoundBars() {
  const specifications = [
    "ASTM B171 - Standard Specification for Copper-Nickel-Zinc Alloy (Nickel-Silver) and Copper-Nickel Rod and Bar",
    "ASTM B122 - Standard Specification for Copper-Nickel-Tin Alloy, Copper-Nickel-Zinc Alloy and Copper-Nickel Alloy Rod and Bar",
    "ASME SB-171 - Copper-Nickel-Zinc Alloy and Copper-Nickel Rod and Bar",
    "EN 12163 - Copper and copper alloys - Rod for general purposes",
    "Diameter Range: 6mm to 300mm",
    "Alloys: 90/10 CuNi (C70600), 70/30 CuNi (C71500), 80/20 CuNi"
  ];

  const applications = [
    "Marine Hardware and Fittings",
    "Seawater Valve Components",
    "Marine Propulsion Systems",
    "Offshore Equipment Manufacturing",
    "Heat Exchanger Components",
    "Marine Fasteners and Bolts",
    "Shipbuilding Applications",
    "Desalination Plant Components"
  ];

  const features = [
    { icon: Shield, title: "Marine Corrosion Resistant", desc: "Exceptional resistance to seawater and marine environments" },
    { icon: TrendingUp, title: "Biofouling Resistant", desc: "Natural resistance to marine organism growth and attachment" },
    { icon: Award, title: "Marine Certified", desc: "Approved by major marine classification societies worldwide" },
    { icon: CheckCircle, title: "Long Service Life", desc: "Proven track record of 30+ years in marine environments" }
  ];

  return (
    <>
      <ProductSEO
        title="Copper Nickel Round Bars"
        description="Premium quality copper nickel round bars in 90/10 and 70/30 compositions. ASTM B171, B122 certified for marine, seawater, and offshore applications. Best prices in Mumbai for CuNi round bars."
        keywords="copper nickel round bars, CuNi round bars, 90/10 copper nickel bars, 70/30 copper nickel bars, ASTM B171 bars, marine round bars, Mumbai copper nickel supplier"
        category="Round Bars"
        productName="Copper Nickel Round Bars"
        specifications={specifications}
        canonicalUrl="/product/round-bars/copper-nickel"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Copper Nickel Round Bars</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Copper Nickel Round Bars
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-performance copper-nickel alloy round bars for marine, offshore, and seawater applications
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
              Why Choose Our Copper Nickel Round Bars?
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

        {/* Copper Nickel Alloys */}
        <section className="py-16 bg-white" data-testid="alloy-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="alloy-grades-title">
                Available Copper Nickel Alloys
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="alloy-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Alloy</th>
                      <th className="px-6 py-4 text-left">UNS Number</th>
                      <th className="px-6 py-4 text-left">Composition</th>
                      <th className="px-6 py-4 text-left">Typical Applications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">90/10 CuNi</td>
                      <td className="px-6 py-4">C70600</td>
                      <td className="px-6 py-4">90% Cu, 10% Ni, 1.4% Fe</td>
                      <td className="px-6 py-4">Seawater applications, marine hardware</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">70/30 CuNi</td>
                      <td className="px-6 py-4">C71500</td>
                      <td className="px-6 py-4">70% Cu, 30% Ni, 0.5% Fe</td>
                      <td className="px-6 py-4">High velocity seawater, offshore equipment</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">80/20 CuNi</td>
                      <td className="px-6 py-4">C71000</td>
                      <td className="px-6 py-4">80% Cu, 20% Ni</td>
                      <td className="px-6 py-4">Moderate seawater environments</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">CuNi 10Fe</td>
                      <td className="px-6 py-4">C70600</td>
                      <td className="px-6 py-4">Bal Cu, 10% Ni, 1.4% Fe, 0.7% Mn</td>
                      <td className="px-6 py-4">Enhanced erosion resistance</td>
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
                Ready to Order Copper Nickel Round Bars?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our copper nickel specialists
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