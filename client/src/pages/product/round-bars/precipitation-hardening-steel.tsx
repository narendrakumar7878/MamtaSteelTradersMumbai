import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function PrecipitationHardeningSteelRoundBars() {
  const specifications = [
    "ASTM A564 - Standard Specification for Hot-Rolled and Cold-Finished Age-Hardening Stainless Steel Bars and Shapes",
    "ASTM A693 - Standard Specification for Precipitation-Hardening Stainless Steel Plate, Sheet, and Strip",
    "AMS 5528 - Aerospace Material Specification for Precipitation Hardening Steel",
    "ASME SA-564 - Hot-Rolled and Cold-Finished Age-Hardening Stainless Steel Bars and Shapes",
    "Diameter Range: 6mm to 300mm",
    "Grades: 17-4 PH, 15-5 PH, 17-7 PH, 15-7 Mo, PH 13-8 Mo"
  ];

  const applications = [
    "Aerospace and Aircraft Components",
    "Nuclear Power Plant Equipment",
    "Chemical Processing Equipment",
    "High-Performance Fasteners",
    "Medical and Surgical Instruments",
    "Turbine and Engine Components",
    "Marine and Offshore Hardware",
    "Precision Instrumentation"
  ];

  const features = [
    { icon: Shield, title: "High Strength", desc: "Excellent strength-to-weight ratio through precipitation hardening" },
    { icon: TrendingUp, title: "Age Hardenable", desc: "Achieves high strength through simple aging heat treatment" },
    { icon: Award, title: "Aerospace Grade", desc: "Meets stringent aerospace and nuclear industry requirements" },
    { icon: CheckCircle, title: "Corrosion Resistant", desc: "Combines high strength with excellent corrosion resistance" }
  ];

  return (
    <>
      <ProductSEO
        title="Precipitation Hardening Steel Round Bars"
        description="Premium quality precipitation hardening steel round bars in grades 17-4 PH, 15-5 PH, 17-7 PH. ASTM A564 certified for aerospace, nuclear, and high-performance applications. Best prices in Mumbai for PH steel round bars."
        keywords="precipitation hardening steel bars, 17-4 PH round bars, 15-5 PH round bars, ASTM A564 bars, PH steel bars, Mumbai PH steel supplier"
        category="Round Bars"
        productName="Precipitation Hardening Steel Round Bars"
        specifications={specifications}
        canonicalUrl="/product/round-bars/precipitation-hardening-steel"
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
              <Link href="/product/round-bars" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-round-bars">Round Bars</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Precipitation Hardening Steel Round Bars</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Precipitation Hardening Steel Round Bars
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-strength precipitation hardening steel round bars for aerospace, nuclear, and high-performance applications
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
              Why Choose Our Precipitation Hardening Steel Round Bars?
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

        {/* PH Steel Grades */}
        <section className="py-16 bg-white" data-testid="ph-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="ph-grades-title">
                Available Precipitation Hardening Steel Grades
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="ph-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">PH Grade</th>
                      <th className="px-6 py-4 text-left">UNS Number</th>
                      <th className="px-6 py-4 text-left">Yield Strength (MPa)</th>
                      <th className="px-6 py-4 text-left">Key Applications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">17-4 PH</td>
                      <td className="px-6 py-4">S17400</td>
                      <td className="px-6 py-4">1100-1300</td>
                      <td className="px-6 py-4">Aerospace, chemical processing</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">15-5 PH</td>
                      <td className="px-6 py-4">S15500</td>
                      <td className="px-6 py-4">1000-1200</td>
                      <td className="px-6 py-4">Nuclear, high-strength fasteners</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">17-7 PH</td>
                      <td className="px-6 py-4">S17700</td>
                      <td className="px-6 py-4">1400-1600</td>
                      <td className="px-6 py-4">Springs, high-stress components</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">PH 13-8 Mo</td>
                      <td className="px-6 py-4">S13800</td>
                      <td className="px-6 py-4">1500-1700</td>
                      <td className="px-6 py-4">Aerospace, ultra-high strength</td>
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
                Ready to Order Precipitation Hardening Steel Round Bars?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our PH steel specialists
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