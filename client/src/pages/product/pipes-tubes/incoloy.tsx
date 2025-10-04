import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function IncoloyPipes() {
  const specifications = [
    "ASTM B407 - Standard Specification for Nickel-Iron-Chromium Alloy Seamless Pipe",
    "ASTM B514 - Standard Specification for Welded Nickel-Iron-Chromium Alloy Pipe",
    "ASTM B163 - Standard Specification for Seamless Nickel Alloy Tube",
    "ASME SB-407 - Nickel-Iron-Chromium Alloy Seamless Pipe and Tube",
    "Size Range: 1/8\" to 48\" NB in Schedule 5S, 10S, 40S, 80S, 160S, XXS",
    "Grades: Incoloy 800, 800H, 800HT, 825, 901, 925, 945"
  ];

  const applications = [
    "Heat Treatment Equipment",
    "Nuclear Steam Generator Tubing",
    "Chemical Processing Equipment",
    "Petrochemical Processing Units",
    "Power Plant Heat Exchangers",
    "Furnace Components",
    "Thermal Processing Equipment",
    "High Temperature Piping Systems"
  ];

  const features = [
    { icon: Shield, title: "Oxidation Resistant", desc: "Excellent resistance to oxidation and carburization at high temperatures" },
    { icon: TrendingUp, title: "High Temperature", desc: "Outstanding strength and stability at elevated temperatures" },
    { icon: Award, title: "Nuclear Grade", desc: "Meets nuclear industry standards for critical applications" },
    { icon: CheckCircle, title: "Versatile Alloys", desc: "Wide range of compositions for specific temperature requirements" }
  ];

  return (
    <>
      <ProductSEO
        title="Incoloy Pipes & Tubes"
        description="Premium quality Incoloy pipes and tubes in grades 800, 800H, 825, 925. ASTM B407, B514 certified for high-temperature and nuclear applications. Best prices in Mumbai for seamless and welded Incoloy pipes."
        keywords="Incoloy pipes, Incoloy tubes, Incoloy 800 pipes, Incoloy 825 pipes, ASTM B407, ASTM B514, high temperature pipes, Mumbai Incoloy supplier"
        category="Pipes & Tubes"
        productName="Incoloy Pipes & Tubes"
        specifications={specifications}
        canonicalUrl="/product/pipes-tubes/incoloy"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Incoloy Pipes & Tubes</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Incoloy Pipes & Tubes
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-performance Incoloy alloy pipes for high-temperature, nuclear, and chemical processing applications
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
              Why Choose Our Incoloy Pipes?
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

        {/* Incoloy Grades */}
        <section className="py-16 bg-white" data-testid="incoloy-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="incoloy-grades-title">
                Available Incoloy Grades
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="incoloy-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Incoloy Grade</th>
                      <th className="px-6 py-4 text-left">UNS Number</th>
                      <th className="px-6 py-4 text-left">Max Temp (°F)</th>
                      <th className="px-6 py-4 text-left">Key Applications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Incoloy 800</td>
                      <td className="px-6 py-4">N08800</td>
                      <td className="px-6 py-4">1500°F</td>
                      <td className="px-6 py-4">Heat treatment equipment, furnace components</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Incoloy 800H</td>
                      <td className="px-6 py-4">N08810</td>
                      <td className="px-6 py-4">1800°F</td>
                      <td className="px-6 py-4">Nuclear steam generators, petrochemical</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Incoloy 825</td>
                      <td className="px-6 py-4">N08825</td>
                      <td className="px-6 py-4">1600°F</td>
                      <td className="px-6 py-4">Chemical processing, pollution control</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Incoloy 925</td>
                      <td className="px-6 py-4">N09925</td>
                      <td className="px-6 py-4">1200°F</td>
                      <td className="px-6 py-4">Oil and gas downhole applications</td>
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
                Ready to Order Incoloy Pipes?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our Incoloy alloy experts
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