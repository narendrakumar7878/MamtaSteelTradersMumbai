import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function ThreadedFlanges() {
  const specifications = [
    "ASTM A105 - Standard Specification for Carbon Steel Forgings for Piping Applications",
    "ASTM A182 - Standard Specification for Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
    "ASME B16.5 - Pipe Flanges and Flanged Fittings: NPS 1/2 through NPS 24",
    "ASME B1.20.1 - Pipe Threads, General Purpose (Inch)",
    "Size Range: 1/2 inch to 4 inches (typically)",
    "Pressure Class: 150# to 3000#"
  ];

  const applications = [
    "Low Pressure Systems",
    "Temporary Installations",
    "Small Bore Connections",
    "Instrument and Gauge Lines",
    "Water and Gas Distribution",
    "Fire Protection Systems",
    "HVAC Applications",
    "Quick Assembly Requirements"
  ];

  const features = [
    { icon: Shield, title: "No Welding Required", desc: "Threaded connection eliminates need for welding operations" },
    { icon: TrendingUp, title: "Quick Installation", desc: "Fastest installation method for flange connections" },
    { icon: Award, title: "Removable", desc: "Easy to disassemble for maintenance and modifications" },
    { icon: CheckCircle, title: "Cost Effective", desc: "Low installation cost for temporary or low pressure applications" }
  ];

  const threadTypes = [
    {
      type: "NPT",
      description: "National Pipe Thread (Tapered)",
      standard: "ASME B1.20.1",
      application: "Most common for general piping applications"
    },
    {
      type: "NPTF", 
      description: "National Pipe Thread Fuel (Dry Seal)",
      standard: "ASME B1.20.3",
      application: "Fuel lines and hydraulic applications"
    },
    {
      type: "BSP",
      description: "British Standard Pipe Thread",
      standard: "ISO 7-1",
      application: "International applications, metric systems"
    },
    {
      type: "BSPT",
      description: "British Standard Pipe Tapered",
      standard: "ISO 7-1",
      application: "European and Asian markets"
    }
  ];

  return (
    <>
      <ProductSEO
        title="Threaded Flanges"
        description="Premium quality threaded flanges for quick assembly without welding. ASME B16.5 certified for low pressure and temporary installations. Best prices in Mumbai for NPT and BSP threaded flanges."
        keywords="threaded flanges, NPT flanges, BSP flanges, ASME B16.5 flanges, no welding flanges, Mumbai flanges supplier"
        category="Flanges"
        productName="Threaded Flanges"
        specifications={specifications}
        canonicalUrl="/product/flanges/threaded-flanges"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Threaded Flanges</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Threaded Flanges
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                Quick-assembly threaded flanges for low pressure systems and temporary installations - no welding required
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
              Why Choose Our Threaded Flanges?
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

        {/* Thread Types */}
        <section className="py-16 bg-gray-50" data-testid="thread-types-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="thread-types-title">
                Available Thread Types
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {threadTypes.map((thread, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md" data-testid={`thread-type-${index}`}>
                    <h3 className="text-xl font-bold text-navy-primary mb-2">{thread.type}</h3>
                    <p className="text-lg text-gray-700 mb-2">{thread.description}</p>
                    <p className="text-sm text-gray-600 mb-3"><strong>Standard:</strong> {thread.standard}</p>
                    <p className="text-sm text-gray-700">{thread.application}</p>
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

        {/* Installation Guidelines */}
        <section className="py-16 bg-gray-50" data-testid="installation-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="installation-title">
                Installation Guidelines
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-navy-primary mb-4">Installation Steps</h3>
                    <ol className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="bg-gold-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                        Apply thread sealant or PTFE tape to male threads
                      </li>
                      <li className="flex items-start">
                        <span className="bg-gold-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                        Thread the pipe into the flange hand-tight
                      </li>
                      <li className="flex items-start">
                        <span className="bg-gold-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                        Use pipe wrenches for final tightening
                      </li>
                      <li className="flex items-start">
                        <span className="bg-gold-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                        Install gasket and bolt the flanges together
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-primary mb-4">Important Notes</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        Use proper thread sealant for the service
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        Do not over-tighten to prevent thread damage
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        Check thread compatibility before assembly
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        Regular inspection for thread wear recommended
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-navy-primary text-white" data-testid="contact-cta-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="cta-title">
                Ready to Order Threaded Flanges?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our threaded flange specialists
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