import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function SocketWeldFlanges() {
  const specifications = [
    "ASTM A105 - Standard Specification for Carbon Steel Forgings for Piping Applications",
    "ASTM A182 - Standard Specification for Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
    "ASME B16.5 - Pipe Flanges and Flanged Fittings: NPS 1/2 through NPS 24",
    "ASME B16.11 - Forged Fittings, Socket-Welding and Threaded",
    "Size Range: 1/2 inch to 4 inches (typically)",
    "Pressure Class: 150# to 9000#"
  ];

  const applications = [
    "Small Bore High Pressure Piping",
    "Instrumentation Lines",
    "Sample Lines and Vents",
    "Chemical Processing Plants",
    "Power Generation Facilities",
    "Oil and Gas Installations",
    "High Pressure Steam Systems",
    "Critical Process Connections"
  ];

  const features = [
    { icon: Shield, title: "High Pressure Capability", desc: "Designed for high pressure applications up to 9000# class" },
    { icon: TrendingUp, title: "Smooth Bore", desc: "No restriction in flow path, maintaining full pipe diameter" },
    { icon: Award, title: "Easy Installation", desc: "Socket design allows for easy pipe insertion and welding" },
    { icon: CheckCircle, title: "Small Bore Specialist", desc: "Ideal for small diameter, high pressure piping systems" }
  ];

  const installationSteps = [
    {
      step: "1",
      title: "Pipe Preparation",
      description: "Cut the pipe to the proper length and prepare the end for insertion into the socket."
    },
    {
      step: "2", 
      title: "Socket Insertion",
      description: "Insert the pipe into the socket, leaving a 1/16 inch gap at the bottom for thermal expansion."
    },
    {
      step: "3",
      title: "Fillet Welding",
      description: "Perform fillet welding around the circumference where the pipe meets the flange face."
    },
    {
      step: "4",
      title: "Quality Check",
      description: "Inspect the weld quality and perform any required non-destructive testing."
    }
  ];

  return (
    <>
      <ProductSEO
        title="Socket Weld Flanges"
        description="Premium quality socket weld flanges for small bore high pressure piping systems. ASME B16.5, B16.11 certified up to 9000# pressure class. Best prices in Mumbai for socket weld flanges."
        keywords="socket weld flanges, ASME B16.5 flanges, high pressure small bore flanges, instrumentation flanges, Mumbai flanges supplier"
        category="Flanges"
        productName="Socket Weld Flanges"
        specifications={specifications}
        canonicalUrl="/product/flanges/socket-weld-flanges"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Socket Weld Flanges</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-heading md:text-heading font-bold mb-6" data-testid="hero-title">
                Premium Socket Weld Flanges
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-pressure socket weld flanges for small bore piping, instrumentation, and critical process connections
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
              Why Choose Our Socket Weld Flanges?
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

        {/* Installation Guide */}
        <section className="py-16 bg-gray-50" data-testid="installation-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="installation-title">
                Socket Weld Installation Process
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {installationSteps.map((step, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center" data-testid={`installation-step-${index}`}>
                    <div className="w-12 h-12 bg-gold-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-navy-primary mb-3">{step.title}</h3>
                    <p className="text-gray-600 text-sm">{step.description}</p>
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
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="specifications-title">
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

        {/* Size and Pressure Class Matrix */}
        <section className="py-16 bg-gray-50" data-testid="size-matrix-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="size-matrix-title">
                Size and Pressure Class Matrix
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="size-matrix-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Nominal Size</th>
                      <th className="px-6 py-4 text-left">150#</th>
                      <th className="px-6 py-4 text-left">300#</th>
                      <th className="px-6 py-4 text-left">600#</th>
                      <th className="px-6 py-4 text-left">900#</th>
                      <th className="px-6 py-4 text-left">1500#</th>
                      <th className="px-6 py-4 text-left">2500#</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">1/2"</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">✓</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">3/4"</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">✓</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">1"</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">✓</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">2"</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">-</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">3"</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">-</td>
                      <td className="px-6 py-4">-</td>
                      <td className="px-6 py-4">-</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">4"</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">✓</td>
                      <td className="px-6 py-4">-</td>
                      <td className="px-6 py-4">-</td>
                      <td className="px-6 py-4">-</td>
                      <td className="px-6 py-4">-</td>
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
                Ready to Order Socket Weld Flanges?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our small bore flange specialists
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