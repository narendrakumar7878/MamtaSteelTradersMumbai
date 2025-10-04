import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function MonelPipes() {
  const specifications = [
    "ASTM B165 - Standard Specification for Nickel-Copper Alloy Seamless Pipe",
    "ASTM B725 - Standard Specification for Welded Nickel-Copper Alloy Pipe",
    "ASME SB-165 - Nickel-Copper Alloy Seamless Pipe and Tube",
    "ASTM B163 - Standard Specification for Seamless Nickel Alloy Tube",
    "Size Range: 1/8\" to 48\" NB in Schedule 5S, 10S, 40S, 80S, 160S, XXS",
    "Grades: Monel 400, Monel K-500, Monel 401, Monel 404"
  ];

  const applications = [
    "Marine Hardware and Propeller Shafts",
    "Valve Trim and Pump Components",
    "Heat Exchangers and Condensers",
    "Chemical Processing Equipment",
    "Offshore Oil Drilling Equipment",
    "Seawater Piping Systems",
    "Food Processing Industry",
    "Fasteners and Springs"
  ];

  const features = [
    { icon: Shield, title: "Seawater Resistant", desc: "Exceptional resistance to seawater and marine environments" },
    { icon: TrendingUp, title: "High Strength", desc: "Excellent mechanical properties and fatigue resistance" },
    { icon: Award, title: "Marine Certified", desc: "Meets stringent marine and offshore industry standards" },
    { icon: CheckCircle, title: "Versatile Alloys", desc: "Range of Monel compositions for specific applications" }
  ];

  return (
    <>
      <ProductSEO
        title="Monel Pipes & Tubes"
        description="Premium quality Monel pipes and tubes in grades 400, K-500. ASTM B165, B725 certified for marine and chemical processing applications. Best prices in Mumbai for seamless and welded Monel pipes."
        keywords="Monel pipes, Monel tubes, Monel 400 pipes, Monel K-500 pipes, ASTM B165, ASTM B725, marine pipes, Mumbai Monel supplier"
        category="Pipes & Tubes"
        productName="Monel Pipes & Tubes"
        specifications={specifications}
        canonicalUrl="/product/pipes-tubes/monel"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Monel Pipes & Tubes</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Monel Pipes & Tubes
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-performance Monel alloy pipes for marine, chemical, and offshore applications
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
              Why Choose Our Monel Pipes?
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

        {/* Monel Grades */}
        <section className="py-16 bg-white" data-testid="monel-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="monel-grades-title">
                Available Monel Grades
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="monel-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Monel Grade</th>
                      <th className="px-6 py-4 text-left">UNS Number</th>
                      <th className="px-6 py-4 text-left">Composition</th>
                      <th className="px-6 py-4 text-left">Key Features</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Monel 400</td>
                      <td className="px-6 py-4">N04400</td>
                      <td className="px-6 py-4">67% Ni, 30% Cu</td>
                      <td className="px-6 py-4">Excellent seawater corrosion resistance</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Monel K-500</td>
                      <td className="px-6 py-4">N05500</td>
                      <td className="px-6 py-4">65% Ni, 30% Cu, 3% Al</td>
                      <td className="px-6 py-4">Age-hardenable, high strength</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Monel 401</td>
                      <td className="px-6 py-4">N04401</td>
                      <td className="px-6 py-4">44% Ni, 56% Cu</td>
                      <td className="px-6 py-4">Low nickel content, economical</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Monel 404</td>
                      <td className="px-6 py-4">N04404</td>
                      <td className="px-6 py-4">52% Ni, 46% Cu</td>
                      <td className="px-6 py-4">Low carbon, welding applications</td>
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
                Ready to Order Monel Pipes?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our Monel alloy experts
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
                Contact
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}