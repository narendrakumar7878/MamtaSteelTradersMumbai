import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function PipeLinchPin() {
  const specifications = [
    "ASTM A36 - Standard Specification for Carbon Structural Steel",
    "ASTM A193 Grade B7 - High Tensile Steel Bolting Material",
    "ISO 2340 - Clevis Pins with Head",
    "DIN 1444 - Clevis Pins, Unhardened",
    "Material: Carbon Steel, Stainless Steel 316",
    "Size Range: 3mm to 50mm diameter",
    "Length: Custom as per requirement"
  ];

  const pinTypes = [
    "Standard Linch Pins",
    "Heavy Duty Linch Pins", 
    "Galvanized Linch Pins",
    "Stainless Steel Linch Pins",
    "Quick Release Linch Pins",
    "Bent Arm Linch Pins",
    "Straight Arm Linch Pins",
    "Custom Linch Pins"
  ];

  const applications = [
    "Agricultural Equipment",
    "Construction Machinery",
    "Trailer Hitches",
    "Industrial Equipment",
    "Farm Implements",
    "Automotive Applications",
    "Marine Equipment",
    "General Engineering"
  ];

  const features = [
    { icon: Shield, title: "Secure Locking", desc: "Provides secure locking mechanism for quick assembly" },
    { icon: TrendingUp, title: "Easy Operation", desc: "Simple pull-to-release mechanism for easy operation" },
    { icon: Award, title: "Durable Construction", desc: "Made from high-grade materials for long service life" },
    { icon: CheckCircle, title: "Wide Application", desc: "Suitable for various industrial and agricultural uses" }
  ];

  const dimensionChart = [
    { diameter: "3mm", wireGauge: "1.5mm", grip: "8-15mm", application: "Light Duty" },
    { diameter: "4mm", wireGauge: "2.0mm", grip: "10-18mm", application: "Light Duty" },
    { diameter: "5mm", wireGauge: "2.5mm", grip: "12-22mm", application: "Medium Duty" },
    { diameter: "6mm", wireGauge: "3.0mm", grip: "15-25mm", application: "Medium Duty" },
    { diameter: "8mm", wireGauge: "4.0mm", grip: "18-35mm", application: "Heavy Duty" },
    { diameter: "10mm", wireGauge: "5.0mm", grip: "22-45mm", application: "Heavy Duty" }
  ];

  return (
    <>
      <ProductSEO
        title="Pipe Linch Pins"
        description="High-quality pipe linch pins and clevis pins ISO 2340 certified. Quick-release pins for agricultural and industrial equipment from Mumbai steel supplier."
        keywords="pipe linch pins, clevis pins, quick release pins, ISO 2340 pins, agricultural pins, industrial pins, Mumbai steel supplier"
        category="Pins"
        productName="Pipe Linch Pins"
        specifications={specifications}
        canonicalUrl="/product/pins/pipe-linch-pin"
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
              <Link href="/product/pins" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-pins">Pins</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Pipe Linch Pins</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Pipe Linch Pins
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-quality ISO certified pipe linch pins for quick-release applications
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
              Why Choose Our Linch Pins?
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

        {/* Dimension Chart */}
        <section className="py-16 bg-gray-50" data-testid="dimension-chart-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="dimension-chart-title">
                Standard Dimensions
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-md">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left">Pin Diameter</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Wire Gauge</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Grip Range</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Application</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dimensionChart.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-navy-primary">{item.diameter}</td>
                        <td className="border border-gray-300 px-4 py-3">{item.wireGauge}</td>
                        <td className="border border-gray-300 px-4 py-3">{item.grip}</td>
                        <td className="border border-gray-300 px-4 py-3">{item.application}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Pin Types */}
        <section className="py-16 bg-white" data-testid="pin-types-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="pin-types-title">
                Available Pin Types
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pinTypes.map((type, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300" data-testid={`pin-type-${index}`}>
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
                Ready to Order Pipe Linch Pins?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get premium quality pipe linch pins with fast delivery across India
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-contact">
                  Request Quote
                </Link>
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <div className="flex items-center" data-testid="contact-phone">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href="tel:+919876543210" className="hover:text-gold-primary transition-colors">+91 98765 43210</a>
                  </div>
                  <div className="flex items-center" data-testid="contact-email">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href="mailto:info@mamtasteel.com" className="hover:text-gold-primary transition-colors">info@mamtasteel.com</a>
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