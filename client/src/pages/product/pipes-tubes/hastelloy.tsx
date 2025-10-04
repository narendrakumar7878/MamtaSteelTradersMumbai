import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function HasstelloyPipes() {
  const specifications = [
    "ASTM B619 - Standard Specification for Welded Nickel Alloy Pipe",
    "ASTM B622 - Standard Specification for Seamless Nickel Alloy Pipe",
    "ASTM B626 - Standard Specification for Welded Nickel Alloy Tube",
    "ASME SB-619 - Welded Nickel and Nickel-Chromium Alloy Pipe",
    "Size Range: 1/8\" to 48\" NB in Schedule 5S, 10S, 40S, 80S, 160S, XXS",
    "Grades: Hastelloy C-276, C-22, C-4, B-2, B-3, G-30, X"
  ];

  const applications = [
    "Chemical Processing Equipment",
    "Pollution Control Applications",
    "Pulp and Paper Production",
    "Pharmaceutical Manufacturing",
    "Waste Treatment Facilities",
    "Flue Gas Desulfurization",
    "Sour Gas Service",
    "High Temperature Furnaces"
  ];

  const features = [
    { icon: Shield, title: "Chemical Resistant", desc: "Outstanding resistance to acids, alkalis, and chloride environments" },
    { icon: TrendingUp, title: "High Temperature", desc: "Excellent performance in high temperature corrosive environments" },
    { icon: Award, title: "Industry Proven", desc: "Widely used in chemical processing and pollution control" },
    { icon: CheckCircle, title: "Multiple Grades", desc: "Comprehensive range for specific corrosive environments" }
  ];

  return (
    <>
      <ProductSEO
        title="Hastelloy Pipes & Tubes"
        description="Premium quality Hastelloy pipes and tubes in grades C-276, C-22, B-2, B-3. ASTM B619, B622 certified for chemical processing and high-temperature applications. Best prices in Mumbai for seamless and welded Hastelloy pipes."
        keywords="Hastelloy pipes, Hastelloy tubes, Hastelloy C-276 pipes, Hastelloy C-22 pipes, ASTM B619, ASTM B622, chemical resistant pipes, Mumbai Hastelloy supplier"
        category="Pipes & Tubes"
        productName="Hastelloy Pipes & Tubes"
        specifications={specifications}
        canonicalUrl="/product/pipes-tubes/hastelloy"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Hastelloy Pipes & Tubes</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Hastelloy Pipes & Tubes
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-performance Hastelloy alloy pipes for extreme chemical processing and corrosive environments
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
              Why Choose Our Hastelloy Pipes?
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

        {/* Hastelloy Grades */}
        <section className="py-16 bg-white" data-testid="hastelloy-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="hastelloy-grades-title">
                Available Hastelloy Grades
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="hastelloy-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Hastelloy Grade</th>
                      <th className="px-6 py-4 text-left">UNS Number</th>
                      <th className="px-6 py-4 text-left">Key Elements</th>
                      <th className="px-6 py-4 text-left">Primary Use</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Hastelloy C-276</td>
                      <td className="px-6 py-4">N10276</td>
                      <td className="px-6 py-4">Ni-Mo-Cr-W</td>
                      <td className="px-6 py-4">Chemical processing, pollution control</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Hastelloy C-22</td>
                      <td className="px-6 py-4">N06022</td>
                      <td className="px-6 py-4">Ni-Cr-Mo-W</td>
                      <td className="px-6 py-4">Severe chemical environments</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Hastelloy B-2</td>
                      <td className="px-6 py-4">N10665</td>
                      <td className="px-6 py-4">Ni-Mo</td>
                      <td className="px-6 py-4">Hydrochloric acid service</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Hastelloy G-30</td>
                      <td className="px-6 py-4">N06030</td>
                      <td className="px-6 py-4">Ni-Cr-Fe-Mo</td>
                      <td className="px-6 py-4">Phosphoric acid applications</td>
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
                Ready to Order Hastelloy Pipes?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our Hastelloy alloy specialists
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