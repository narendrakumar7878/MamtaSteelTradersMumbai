import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function DuplexSuperDuplexPipes() {
  const specifications = [
    "ASTM A790 - Standard Specification for Seamless and Welded Ferritic/Austenitic Stainless Steel Pipe",
    "ASTM A928 - Standard Specification for Ferritic/Austenitic (Duplex) Stainless Steel Pipe Electric Fusion Welded",
    "ASTM A789 - Standard Specification for Seamless and Welded Ferritic/Austenitic Stainless Steel Tubing",
    "ASME SA-790 - Seamless and Welded Ferritic/Austenitic Stainless Steel Pipe",
    "Size Range: 1/8\" to 48\" NB in Schedule 5S, 10S, 40S, 80S, 160S, XXS",
    "Grades: 2205 (S31803), 2507 (S32750), 2304 (S32304), Zeron 100 (S32760)"
  ];

  const applications = [
    "Oil and Gas Processing Equipment",
    "Offshore Platforms and Subsea Pipelines",
    "Chemical and Petrochemical Industries",
    "Pulp and Paper Processing",
    "Desalination and Water Treatment",
    "Marine and Shipbuilding Applications",
    "Power Generation Plants",
    "Food Processing Industries"
  ];

  const features = [
    { icon: Shield, title: "Superior Corrosion Resistance", desc: "Excellent resistance to pitting, crevice corrosion, and stress corrosion cracking" },
    { icon: TrendingUp, title: "High Strength", desc: "Nearly twice the yield strength of austenitic stainless steels" },
    { icon: Award, title: "Chloride Resistant", desc: "Outstanding performance in chloride-containing environments" },
    { icon: CheckCircle, title: "Dual Phase Structure", desc: "Optimized ferritic-austenitic microstructure for enhanced properties" }
  ];

  return (
    <>
      <ProductSEO
        title="Duplex and Super Duplex Pipes"
        description="Premium quality duplex and super duplex stainless steel pipes in grades 2205, 2507, Zeron 100. ASTM A790, A789 certified for oil & gas, offshore, and chemical processing. Best prices in Mumbai for seamless and welded duplex pipes."
        keywords="duplex pipes, super duplex pipes, 2205 pipes, 2507 pipes, Zeron 100 pipes, ASTM A790, ASTM A789, offshore pipes, Mumbai duplex steel supplier"
        category="Pipes & Tubes"
        productName="Duplex and Super Duplex Pipes"
        specifications={specifications}
        canonicalUrl="/product/pipes-tubes/duplex-super-duplex-pipes"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Duplex and Super Duplex Pipes</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Duplex & Super Duplex Pipes
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-performance duplex stainless steel pipes for oil & gas, offshore, and aggressive chemical environments
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
              Why Choose Our Duplex Steel Pipes?
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

        {/* Duplex Steel Grades */}
        <section className="py-16 bg-white" data-testid="duplex-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="duplex-grades-title">
                Available Duplex Steel Grades
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="duplex-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Grade</th>
                      <th className="px-6 py-4 text-left">UNS Number</th>
                      <th className="px-6 py-4 text-left">PREN*</th>
                      <th className="px-6 py-4 text-left">Key Applications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">2304 (Lean Duplex)</td>
                      <td className="px-6 py-4">S32304</td>
                      <td className="px-6 py-4">25</td>
                      <td className="px-6 py-4">Water treatment, structural applications</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">2205 (Standard Duplex)</td>
                      <td className="px-6 py-4">S31803/S32205</td>
                      <td className="px-6 py-4">35</td>
                      <td className="px-6 py-4">Oil & gas, chemical processing</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">2507 (Super Duplex)</td>
                      <td className="px-6 py-4">S32750</td>
                      <td className="px-6 py-4">42</td>
                      <td className="px-6 py-4">Offshore, seawater applications</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Zeron 100 (Super Duplex)</td>
                      <td className="px-6 py-4">S32760</td>
                      <td className="px-6 py-4">42+</td>
                      <td className="px-6 py-4">Severe chloride environments</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-4">*PREN = Pitting Resistance Equivalent Number</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-navy-primary text-white" data-testid="contact-cta-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="cta-title">
                Ready to Order Duplex Steel Pipes?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our duplex steel specialists
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