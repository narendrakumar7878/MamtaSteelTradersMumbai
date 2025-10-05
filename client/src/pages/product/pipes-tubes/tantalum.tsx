import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function TantalumPipes() {
  const specifications = [
    "ASTM B521 - Standard Specification for Tantalum and Tantalum Alloy Seamless and Welded Tubes",
    "ASTM B365 - Standard Specification for Tantalum and Tantalum Alloy Rod and Wire",
    "ASME SB-521 - Tantalum and Tantalum Alloy Seamless and Welded Tubes",
    "ISO 13782 - Tantalum and Tantalum Alloys - Chemical Composition",
    "Size Range: 1/8\" to 12\" NB in various wall thicknesses",
    "Grades: Pure Tantalum (Ta), Ta-2.5W, Ta-10W, Ta-40Nb"
  ];

  const applications = [
    "Chemical Processing Equipment",
    "Medical Implants and Devices",
    "Electronic and Semiconductor Components",
    "Aerospace and Defense Applications",
    "Nuclear Industry Components",
    "High Temperature Furnace Parts",
    "Corrosive Chemical Handling",
    "Laboratory and Research Equipment"
  ];

  const features = [
    { icon: Shield, title: "Chemical Inert", desc: "Virtually immune to all chemicals except hydrofluoric acid" },
    { icon: TrendingUp, title: "High Melting Point", desc: "Exceptional performance at temperatures up to 2996°C" },
    { icon: Award, title: "Bio-Compatible", desc: "Completely biocompatible for medical and implant applications" },
    { icon: CheckCircle, title: "Ultra-Pure", desc: "High purity tantalum for critical applications" }
  ];

  return (
    <>
      <ProductSEO
        title="Tantalum Pipes & Tubes"
        description="Premium quality tantalum pipes and tubes in pure Ta and tantalum alloys. ASTM B521 certified for chemical processing, medical, and aerospace applications. Best prices in Mumbai for seamless and welded tantalum pipes."
        keywords="tantalum pipes, tantalum tubes, pure tantalum pipes, Ta-2.5W pipes, ASTM B521, chemical resistant pipes, Mumbai tantalum supplier"
        category="Pipes & Tubes"
        productName="Tantalum Pipes & Tubes"
        specifications={specifications}
        canonicalUrl="/product/pipes-tubes/tantalum"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Tantalum Pipes & Tubes</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-heading md:text-heading font-bold mb-6" data-testid="hero-title">
                Premium Tantalum Pipes & Tubes
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                Ultra-high performance tantalum pipes for the most demanding chemical, medical, and aerospace applications
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
            <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="features-title">
              Why Choose Our Tantalum Pipes?
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
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="specifications-title">
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

        {/* Tantalum Grades */}
        <section className="py-16 bg-white" data-testid="tantalum-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="tantalum-grades-title">
                Available Tantalum Grades
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="tantalum-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Tantalum Grade</th>
                      <th className="px-6 py-4 text-left">Composition</th>
                      <th className="px-6 py-4 text-left">Melting Point</th>
                      <th className="px-6 py-4 text-left">Key Applications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Pure Tantalum</td>
                      <td className="px-6 py-4">99.95% Ta min</td>
                      <td className="px-6 py-4">2996°C</td>
                      <td className="px-6 py-4">Chemical processing, medical implants</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Ta-2.5W</td>
                      <td className="px-6 py-4">97.5% Ta, 2.5% W</td>
                      <td className="px-6 py-4">3020°C</td>
                      <td className="px-6 py-4">High temperature applications</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Ta-10W</td>
                      <td className="px-6 py-4">90% Ta, 10% W</td>
                      <td className="px-6 py-4">3100°C</td>
                      <td className="px-6 py-4">Aerospace, high strength applications</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Ta-40Nb</td>
                      <td className="px-6 py-4">60% Ta, 40% Nb</td>
                      <td className="px-6 py-4">2800°C</td>
                      <td className="px-6 py-4">Enhanced ductility applications</td>
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
              <h2 className="text-2xl font-bold mb-6" data-testid="cta-title">
                Ready to Order Tantalum Pipes?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our tantalum specialists
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