import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function ForgedFittings() {
  const specifications = [
    "ASTM A182/A182M - Standard Specification for Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
    "ASTM A105/A105M - Standard Specification for Carbon Steel Forgings for Piping Applications",
    "ASME B16.11 - Forged Fittings, Socket-Welding and Threaded",
    "MSS SP-79 - Socket-Welding Reducer Inserts",
    "Size Range: 1/8\" to 4\" NB",
    "Pressure Class: 2000#, 3000#, 6000#, 9000#",
    "End Connection: Socket Weld (SW) & Threaded (NPT)"
  ];

  const fittingTypes = [
    "Socket Weld Elbows",
    "Socket Weld Tees", 
    "Socket Weld Reducers",
    "Socket Weld Couplings",
    "Threaded Elbows",
    "Threaded Tees",
    "Threaded Reducers",
    "Threaded Couplings"
  ];

  const applications = [
    "High Pressure Systems",
    "Instrumentation Lines",
    "Small Bore Piping",
    "Chemical Processing",
    "Oil and Gas Industry",
    "Power Generation Plants",
    "Petrochemical Plants",
    "Refinery Applications"
  ];

  const features = [
    { icon: Shield, title: "High Pressure Rating", desc: "Designed for high pressure applications up to 9000#" },
    { icon: TrendingUp, title: "Compact Design", desc: "Space-saving solution for small bore piping systems" },
    { icon: Award, title: "ASME Certified", desc: "ASME B16.11 and ASTM certified forged fittings" },
    { icon: CheckCircle, title: "Dual Connections", desc: "Available in both socket weld and threaded connections" }
  ];

  const pressureRatings = [
    { class: "2000#", pressure: "5000 PSI", connection: "SW & NPT" },
    { class: "3000#", pressure: "7500 PSI", connection: "SW & NPT" },
    { class: "6000#", pressure: "15000 PSI", connection: "SW Only" },
    { class: "9000#", pressure: "22500 PSI", connection: "SW Only" }
  ];

  return (
    <>
      <ProductSEO
        title="Forged Fittings"
        description="High-pressure forged fittings in socket weld and threaded connections. ASME B16.11 certified for instrumentation and small bore piping from Mumbai steel supplier."
        keywords="forged fittings, ASME B16.11 fittings, socket weld fittings, threaded fittings, high pressure fittings, Mumbai steel supplier"
        category="Fittings"
        productName="Forged Fittings"
        specifications={specifications}
        canonicalUrl="/product/fittings/forged-fittings"
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
              <Link href="/product/fittings" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-fittings">Fittings</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Forged Fittings</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Forged Fittings
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-quality ASME certified forged fittings for high-pressure applications
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
              Why Choose Our Forged Fittings?
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

        {/* Pressure Ratings */}
        <section className="py-16 bg-gray-50" data-testid="pressure-ratings-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="pressure-ratings-title">
                Pressure Class Ratings
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-md">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left">Pressure Class</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Working Pressure</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Available Connections</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pressureRatings.map((rating, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-navy-primary">{rating.class}</td>
                        <td className="border border-gray-300 px-4 py-3">{rating.pressure}</td>
                        <td className="border border-gray-300 px-4 py-3">{rating.connection}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Fitting Types */}
        <section className="py-16 bg-white" data-testid="fitting-types-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="fitting-types-title">
                Available Fitting Types
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {fittingTypes.map((type, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300" data-testid={`fitting-type-${index}`}>
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
                Ready to Order Forged Fittings?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get premium quality forged fittings with fast delivery across India
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