import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function BlindFlanges() {
  const specifications = [
    "ASTM A105 - Standard Specification for Carbon Steel Forgings for Piping Applications",
    "ASTM A182 - Standard Specification for Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
    "ASME B16.5 - Pipe Flanges and Flanged Fittings: NPS 1/2 through NPS 24",
    "ASME B16.47 - Large Diameter Steel Flanges: NPS 26 through NPS 60",
    "Size Range: 1/2 inch to 60 inches",
    "Pressure Class: 150# to 2500#"
  ];

  const applications = [
    "Pipeline Closures and Terminations",
    "Pressure Testing Applications",
    "System Isolation Points",
    "Future Connection Provisions",
    "Vessel Closure Applications",
    "Maintenance Access Points",
    "Emergency Isolation Systems",
    "Process Equipment Closures"
  ];

  const features = [
    { icon: Shield, title: "Complete Closure", desc: "Provides 100% sealing for pipeline ends and openings" },
    { icon: TrendingUp, title: "Pressure Testing", desc: "Ideal for hydrostatic and pneumatic pressure testing" },
    { icon: Award, title: "Future Expansion", desc: "Perfect for marking future connection points" },
    { icon: CheckCircle, title: "Maintenance Access", desc: "Removable closure for inspection and cleaning access" }
  ];

  const designTypes = [
    {
      type: "Raised Face (RF)",
      description: "Most common design with a raised sealing surface",
      thickness: "1.6mm (1/16 inch) raised face",
      application: "General purpose, moderate pressure applications",
      gasketType: "Flat gaskets, spiral wound"
    },
    {
      type: "Flat Face (FF)",
      description: "Completely flat sealing surface",
      thickness: "No raised portion",
      application: "Cast iron flanges, low pressure systems",
      gasketType: "Full face gaskets"
    },
    {
      type: "Ring Type Joint (RTJ)",
      description: "Grooved face for metal ring gaskets",
      thickness: "Grooved sealing surface",
      application: "High pressure, high temperature applications",
      gasketType: "Metal ring gaskets (oval, octagonal)"
    }
  ];

  return (
    <>
      <ProductSEO
        title="Blind Flanges"
        description="Premium quality blind flanges for pipeline closures, pressure testing, and system isolation. ASME B16.5, B16.47 certified in all pressure classes. Best prices in Mumbai for blind flanges."
        keywords="blind flanges, pipeline closure flanges, pressure test flanges, ASME B16.5 blind flanges, system isolation flanges, Mumbai flanges supplier"
        category="Flanges"
        productName="Blind Flanges"
        specifications={specifications}
        canonicalUrl="/product/flanges/blind-flanges"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Blind Flanges</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-heading md:text-heading font-bold mb-6" data-testid="hero-title">
                Premium Blind Flanges
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                Complete pipeline closure solutions for pressure testing, system isolation, and maintenance access
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
              Why Choose Our Blind Flanges?
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

        {/* Design Types */}
        <section className="py-16 bg-gray-50" data-testid="design-types-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="design-types-title">
                Available Face Designs
              </h2>
              <div className="space-y-6">
                {designTypes.map((design, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md" data-testid={`design-type-${index}`}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-navy-primary mb-2">{design.type}</h3>
                        <p className="text-gray-700 text-sm">{design.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Thickness</h4>
                        <p className="text-gray-600 text-sm">{design.thickness}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Application</h4>
                        <p className="text-gray-600 text-sm">{design.application}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Gasket Type</h4>
                        <p className="text-gray-600 text-sm">{design.gasketType}</p>
                      </div>
                    </div>
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

        {/* Weight and Dimensions Table */}
        <section className="py-16 bg-gray-50" data-testid="dimensions-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="dimensions-title">
                Typical Dimensions (Class 150#)
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="dimensions-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Nominal Size</th>
                      <th className="px-6 py-4 text-left">Outside Diameter</th>
                      <th className="px-6 py-4 text-left">Thickness</th>
                      <th className="px-6 py-4 text-left">Bolt Circle</th>
                      <th className="px-6 py-4 text-left">Bolt Holes</th>
                      <th className="px-6 py-4 text-left">Approx. Weight</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">2"</td>
                      <td className="px-6 py-4">152mm</td>
                      <td className="px-6 py-4">16mm</td>
                      <td className="px-6 py-4">120mm</td>
                      <td className="px-6 py-4">4 x M16</td>
                      <td className="px-6 py-4">1.8 kg</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">4"</td>
                      <td className="px-6 py-4">190mm</td>
                      <td className="px-6 py-4">19mm</td>
                      <td className="px-6 py-4">157mm</td>
                      <td className="px-6 py-4">8 x M16</td>
                      <td className="px-6 py-4">3.2 kg</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">6"</td>
                      <td className="px-6 py-4">229mm</td>
                      <td className="px-6 py-4">22mm</td>
                      <td className="px-6 py-4">184mm</td>
                      <td className="px-6 py-4">8 x M20</td>
                      <td className="px-6 py-4">5.1 kg</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">8"</td>
                      <td className="px-6 py-4">267mm</td>
                      <td className="px-6 py-4">25mm</td>
                      <td className="px-6 py-4">216mm</td>
                      <td className="px-6 py-4">8 x M20</td>
                      <td className="px-6 py-4">7.5 kg</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">12"</td>
                      <td className="px-6 py-4">343mm</td>
                      <td className="px-6 py-4">32mm</td>
                      <td className="px-6 py-4">292mm</td>
                      <td className="px-6 py-4">12 x M24</td>
                      <td className="px-6 py-4">15.8 kg</td>
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
                Ready to Order Blind Flanges?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our blind flange specialists
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