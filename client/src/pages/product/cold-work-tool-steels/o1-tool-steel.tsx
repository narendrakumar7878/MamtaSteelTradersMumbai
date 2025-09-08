import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function O1ToolSteel() {
  const specifications = [
    "ASTM A681 - Standard Specification for Tool Steels",
    "DIN 1.2510 - Cold Work Tool Steel Standard",
    "JIS SK3 - Japanese Industrial Standard for Carbon Tool Steel",
    "AISI O1 - Oil Hardening Tool Steel Classification",
    "Available Forms: Round bars, flats, plates, sheets",
    "Size Range: 3mm to 300mm diameter for round bars"
  ];

  const applications = [
    "Hand Tools and Cutting Tools",
    "Knives and Blades",
    "Woodworking Tools",
    "Small Punches and Dies",
    "Taps and Reamers",
    "Files and Scrapers",
    "Measuring Tools and Gauges",
    "Springs and Clips"
  ];

  const features = [
    { icon: Shield, title: "Easy to Machine", desc: "Excellent machinability in annealed condition for complex shapes" },
    { icon: TrendingUp, title: "Oil Hardening", desc: "Hardens in oil for reduced distortion and improved dimensional stability" },
    { icon: Award, title: "Sharp Cutting Edge", desc: "Capable of taking and holding very sharp cutting edges" },
    { icon: CheckCircle, title: "Cost Effective", desc: "Economical choice for general tooling applications" }
  ];

  const properties = [
    {
      property: "Carbon Content",
      value: "0.85-1.00%",
      description: "High carbon for good hardness"
    },
    {
      property: "Chromium Content",
      value: "0.40-0.60%",
      description: "Improves hardenability"
    },
    {
      property: "Hardness (HRC)",
      value: "62-65",
      description: "After proper heat treatment"
    },
    {
      property: "Working Hardness",
      value: "58-62 HRC",
      description: "Typical working hardness range"
    }
  ];

  return (
    <>
      <ProductSEO
        title="O1 Tool Steel"
        description="Premium quality O1 oil hardening tool steel with excellent machinability and sharp cutting edge capability. ASTM A681, DIN 1.2510 certified for hand tools, cutting tools, and general tooling applications. Best prices in Mumbai for O1 tool steel."
        keywords="O1 tool steel, AISI O1 steel, 1.2510 tool steel, oil hardening tool steel, hand tools, Mumbai O1 steel supplier"
        category="Cold Work Tool Steels"
        productName="O1 Tool Steel"
        specifications={specifications}
        canonicalUrl="/product/cold-work-tool-steels/o1-tool-steel"
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
              <Link href="/product/cold-work-tool-steels" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-cold-work">Cold Work Tool Steels</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">O1 Tool Steel</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium O1 Tool Steel
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                Oil hardening tool steel with excellent machinability for hand tools, cutting tools, and general tooling applications
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
              Why Choose Our O1 Tool Steel?
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

        {/* Material Properties */}
        <section className="py-16 bg-gray-50" data-testid="properties-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="properties-title">
                O1 Tool Steel Properties
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {properties.map((prop, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-gold-primary" data-testid={`property-${index}`}>
                    <h3 className="text-lg font-semibold text-navy-primary mb-2">{prop.property}</h3>
                    <div className="text-2xl font-bold text-gold-primary mb-2">{prop.value}</div>
                    <p className="text-gray-600 text-sm">{prop.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 bg-white" data-testid="specifications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="specifications-title">
                Technical Specifications
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-gray-50 p-8 rounded-lg" data-testid="specifications-standards">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Standards & Forms</h3>
                  <ul className="space-y-3">
                    {specifications.map((spec, index) => (
                      <li key={index} className="flex items-start" data-testid={`spec-${index}`}>
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg" data-testid="specifications-applications">
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

        {/* Chemical Composition */}
        <section className="py-16 bg-gray-50" data-testid="composition-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="composition-title">
                O1 Chemical Composition
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="composition-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Element</th>
                      <th className="px-6 py-4 text-left">Composition (%)</th>
                      <th className="px-6 py-4 text-left">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Carbon (C)</td>
                      <td className="px-6 py-4">0.85-1.00</td>
                      <td className="px-6 py-4">Primary hardening element</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Chromium (Cr)</td>
                      <td className="px-6 py-4">0.40-0.60</td>
                      <td className="px-6 py-4">Improves hardenability and wear resistance</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Tungsten (W)</td>
                      <td className="px-6 py-4">0.40-0.60</td>
                      <td className="px-6 py-4">Forms hard carbides, improves wear resistance</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Manganese (Mn)</td>
                      <td className="px-6 py-4">1.00-1.40</td>
                      <td className="px-6 py-4">Hardenability and deoxidation</td>
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
                Ready to Order O1 Tool Steel?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our O1 tool steel specialists
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