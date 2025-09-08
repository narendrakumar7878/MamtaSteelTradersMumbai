import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function StainlessSteelFlanges() {
  const specifications = [
    "ASTM A182/A182M - Standard Specification for Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
    "ASTM B564 - Standard Specification for Nickel Alloy Flanges",
    "ASME B16.5 - Pipe Flanges and Flanged Fittings NPS 1/2 through NPS 24",
    "ASME B16.47 - Large Diameter Steel Flanges NPS 26 through NPS 60",
    "Size Range: 1/2\" to 60\" NB",
    "Pressure Class: 150#, 300#, 600#, 900#, 1500#, 2500#",
    "Grades: 304, 304L, 316, 316L, 321, 347, F51, F53, F55"
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
    "Oil and Gas Refineries",
    "Petrochemical Industries",
    "Power Generation Plants",
    "Water Treatment Plants",
    "Food Processing Industries",
    "Pharmaceutical Plants",
    "Marine Applications"
  ];

  const features = [
    { icon: Shield, title: "Corrosion Resistant", desc: "Superior resistance to corrosion and chemical attack" },
    { icon: TrendingUp, title: "High Pressure Rating", desc: "Suitable for high pressure and temperature applications" },
    { icon: Award, title: "ASME Certified", desc: "ASME B16.5 and B16.47 certified flanges" },
    { icon: CheckCircle, title: "Multiple Types", desc: "Complete range of flange types and pressure classes" }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Flanges"
        description="Premium quality stainless steel flanges in grades 304, 316, F51, F53. ASME B16.5 certified slip-on, weld neck, blind flanges. All pressure classes from Mumbai supplier."
        keywords="stainless steel flanges, weld neck flanges, slip on flanges, blind flanges, ASME B16.5, 304 flanges, 316 flanges, Mumbai steel supplier"
        category="Flanges"
        productName="Stainless Steel Flanges"
        specifications={specifications}
        canonicalUrl="/product/flanges/stainless-steel"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Stainless Steel Flanges</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Stainless Steel Flanges
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-quality ASME certified stainless steel flanges for all pressure classes and applications
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
              Why Choose Our Stainless Steel Flanges?
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

        {/* Specifications & Applications */}
        <section className="py-16 bg-white" data-testid="specifications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="specifications-title">
                Technical Specifications & Applications
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-gray-50 p-8 rounded-lg" data-testid="specifications-standards">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Standards & Specifications</h3>
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
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Industrial Applications</h3>
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

        {/* Pressure Class Chart */}
        <section className="py-16 bg-gray-50" data-testid="pressure-class-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="pressure-class-title">
                Pressure Class & Temperature Ratings
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="pressure-class-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Pressure Class</th>
                      <th className="px-6 py-4 text-left">Working Pressure (PSI)</th>
                      <th className="px-6 py-4 text-left">Max Temperature</th>
                      <th className="px-6 py-4 text-left">Common Applications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">150#</td>
                      <td className="px-6 py-4">285 PSI</td>
                      <td className="px-6 py-4">260°C</td>
                      <td className="px-6 py-4">Low pressure systems</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">300#</td>
                      <td className="px-6 py-4">740 PSI</td>
                      <td className="px-6 py-4">260°C</td>
                      <td className="px-6 py-4">Medium pressure systems</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">600#</td>
                      <td className="px-6 py-4">1480 PSI</td>
                      <td className="px-6 py-4">260°C</td>
                      <td className="px-6 py-4">High pressure systems</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">1500#</td>
                      <td className="px-6 py-4">3705 PSI</td>
                      <td className="px-6 py-4">260°C</td>
                      <td className="px-6 py-4">Very high pressure systems</td>
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
                Need Custom Stainless Steel Flanges?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get the exact pressure class and flange type for your project requirements
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