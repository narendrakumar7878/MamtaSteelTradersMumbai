import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function CuproNickelPipes() {
  const specifications = [
    "ASTM B466 - Standard Specification for Seamless Copper-Nickel Pipe and Tube",
    "ASTM B467 - Standard Specification for Welded Copper-Nickel Pipe",
    "ASTM B111 - Standard Specification for Copper and Copper-Alloy Seamless Condenser Tubes",
    "ASME SB-466 - Seamless Copper-Nickel Pipe and Tube for General Service",
    "Size Range: 1/8\" to 48\" NB in Schedule 5S, 10S, 40S, 80S, 160S, XXS",
    "Grades: 90/10 CuNi (C70600), 70/30 CuNi (C71500), CuNi 80/20"
  ];

  const applications = [
    "Marine Heat Exchangers",
    "Seawater Piping Systems",
    "Desalination Plant Equipment",
    "Offshore Oil and Gas Platforms",
    "Ship Building and Marine Hardware",
    "Condenser and Cooler Tubes",
    "Fire Fighting Systems",
    "Aquaculture and Fish Farming"
  ];

  const features = [
    { icon: Shield, title: "Seawater Resistant", desc: "Exceptional resistance to seawater corrosion and biofouling" },
    { icon: TrendingUp, title: "Anti-Fouling", desc: "Natural resistance to marine organism attachment and growth" },
    { icon: Award, title: "Marine Approved", desc: "Widely approved for marine and offshore applications" },
    { icon: CheckCircle, title: "Long Service Life", desc: "Proven track record of 30+ years in marine environments" }
  ];

  return (
    <>
      <ProductSEO
        title="Cupro Nickel Pipes & Tubes"
        description="Premium quality cupro nickel pipes and tubes in 90/10 and 70/30 compositions. ASTM B466, B467 certified for marine and seawater applications. Best prices in Mumbai for seamless and welded cupro nickel pipes."
        keywords="cupro nickel pipes, copper nickel tubes, 90/10 CuNi pipes, 70/30 CuNi pipes, ASTM B466, ASTM B467, marine pipes, Mumbai cupro nickel supplier"
        category="Pipes & Tubes"
        productName="Cupro Nickel Pipes & Tubes"
        specifications={specifications}
        canonicalUrl="/product/pipes-tubes/cupro-nickel"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Cupro Nickel Pipes & Tubes</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Cupro Nickel Pipes & Tubes
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-performance copper-nickel alloy pipes for marine, offshore, and seawater applications
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
              Why Choose Our Cupro Nickel Pipes?
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

        {/* Cupro Nickel Grades */}
        <section className="py-16 bg-white" data-testid="cupro-nickel-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="cupro-nickel-grades-title">
                Available Cupro Nickel Grades
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="cupro-nickel-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Grade</th>
                      <th className="px-6 py-4 text-left">UNS Number</th>
                      <th className="px-6 py-4 text-left">Composition</th>
                      <th className="px-6 py-4 text-left">Typical Applications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">90/10 CuNi</td>
                      <td className="px-6 py-4">C70600</td>
                      <td className="px-6 py-4">90% Cu, 10% Ni</td>
                      <td className="px-6 py-4">Seawater cooling systems, condenser tubes</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">70/30 CuNi</td>
                      <td className="px-6 py-4">C71500</td>
                      <td className="px-6 py-4">70% Cu, 30% Ni</td>
                      <td className="px-6 py-4">High velocity seawater, marine hardware</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">80/20 CuNi</td>
                      <td className="px-6 py-4">C71000</td>
                      <td className="px-6 py-4">80% Cu, 20% Ni</td>
                      <td className="px-6 py-4">Moderate seawater applications</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">CuNi 10Fe</td>
                      <td className="px-6 py-4">C70600</td>
                      <td className="px-6 py-4">90% Cu, 10% Ni, 1.4% Fe</td>
                      <td className="px-6 py-4">Enhanced corrosion resistance</td>
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
                Ready to Order Cupro Nickel Pipes?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our cupro nickel specialists
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