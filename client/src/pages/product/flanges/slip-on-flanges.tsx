import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function SlipOnFlanges() {
  const specifications = [
    "ASTM A105 - Standard Specification for Carbon Steel Forgings for Piping Applications",
    "ASTM A182 - Standard Specification for Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
    "ASME B16.5 - Pipe Flanges and Flanged Fittings: NPS 1/2 through NPS 24",
    "ASME B16.47 - Large Diameter Steel Flanges: NPS 26 through NPS 60",
    "Size Range: 1/2 inch to 60 inches",
    "Pressure Class: 150# to 2500#"
  ];

  const applications = [
    "Low Pressure Piping Systems",
    "Water Distribution Networks",
    "HVAC and Building Services",
    "General Process Piping",
    "Oil and Gas Pipelines",
    "Chemical Processing Plants",
    "Power Generation Facilities",
    "Marine and Offshore Applications"
  ];

  const features = [
    { icon: Shield, title: "Cost Effective", desc: "Most economical flange type for low pressure applications" },
    { icon: TrendingUp, title: "Easy Installation", desc: "Simple slip-on design for quick and easy installation" },
    { icon: Award, title: "Standard Compliance", desc: "Manufactured according to ASME B16.5 and B16.47 standards" },
    { icon: CheckCircle, title: "Versatile", desc: "Suitable for various materials and pressure ratings" }
  ];

  const pressureClasses = [
    {
      class: "150#",
      maxPressure: "285 PSI",
      temperature: "100°F",
      applications: "Low pressure water, gas, steam"
    },
    {
      class: "300#",
      maxPressure: "740 PSI", 
      temperature: "100°F",
      applications: "Medium pressure process fluids"
    },
    {
      class: "600#",
      maxPressure: "1480 PSI",
      temperature: "100°F", 
      applications: "High pressure oil, gas applications"
    },
    {
      class: "900#",
      maxPressure: "2220 PSI",
      temperature: "100°F",
      applications: "High pressure chemical processing"
    }
  ];

  return (
    <>
      <ProductSEO
        title="Slip On Flanges"
        description="Premium quality slip on flanges in carbon steel, stainless steel, and alloy materials. ASME B16.5, B16.47 certified for low to medium pressure applications. Best prices in Mumbai for slip on flanges."
        keywords="slip on flanges, ASME B16.5 flanges, carbon steel flanges, stainless steel flanges, Mumbai flanges supplier"
        category="Flanges"
        productName="Slip On Flanges"
        specifications={specifications}
        canonicalUrl="/product/flanges/slip-on-flanges"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Slip On Flanges</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Slip On Flanges
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                Cost-effective slip on flanges for low to medium pressure piping systems and process applications
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
              Why Choose Our Slip On Flanges?
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
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Standards & Sizes</h3>
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

        {/* Pressure Classes */}
        <section className="py-16 bg-white" data-testid="pressure-classes-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="pressure-classes-title">
                Available Pressure Classes
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pressureClasses.map((pc, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-gold-primary" data-testid={`pressure-class-${index}`}>
                    <h3 className="text-xl font-bold text-navy-primary mb-2">{pc.class}</h3>
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">Max Pressure: <span className="font-semibold text-gold-primary">{pc.maxPressure}</span></p>
                      <p className="text-sm text-gray-600">At Temperature: <span className="font-semibold">{pc.temperature}</span></p>
                      <p className="text-sm text-gray-700 mt-3">{pc.applications}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Material Options */}
        <section className="py-16 bg-gray-50" data-testid="materials-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="materials-title">
                Available Materials
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="materials-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Material</th>
                      <th className="px-6 py-4 text-left">Standard</th>
                      <th className="px-6 py-4 text-left">Temperature Range</th>
                      <th className="px-6 py-4 text-left">Applications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Carbon Steel</td>
                      <td className="px-6 py-4">ASTM A105</td>
                      <td className="px-6 py-4">-29°C to 425°C</td>
                      <td className="px-6 py-4">General purpose, water, gas</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Stainless Steel 304</td>
                      <td className="px-6 py-4">ASTM A182 F304</td>
                      <td className="px-6 py-4">-196°C to 816°C</td>
                      <td className="px-6 py-4">Food, chemical, pharmaceutical</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Stainless Steel 316</td>
                      <td className="px-6 py-4">ASTM A182 F316</td>
                      <td className="px-6 py-4">-196°C to 816°C</td>
                      <td className="px-6 py-4">Marine, high chloride environments</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Alloy Steel</td>
                      <td className="px-6 py-4">ASTM A182 F11/F22</td>
                      <td className="px-6 py-4">-29°C to 593°C</td>
                      <td className="px-6 py-4">High temperature, pressure vessels</td>
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
                Ready to Order Slip On Flanges?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our flange specialists
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