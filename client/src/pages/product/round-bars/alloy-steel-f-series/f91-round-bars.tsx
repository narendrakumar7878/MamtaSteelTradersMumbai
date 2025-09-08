import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function F91RoundBars() {
  const specifications = [
    "ASTM A182 - Standard Specification for Forged or Rolled Alloy and Stainless Steel Pipe Flanges, Forged Fittings, and Valves and Parts for High-Temperature Service",
    "ASTM A336 - Standard Specification for Alloy Steel Forgings for Pressure and High-Temperature Parts",
    "ASME SA-182 - Forged or Rolled Alloy-Steel Pipe Flanges, Forged Fittings, and Valves and Parts",
    "ASTM A335 - Standard Specification for Seamless Ferritic Alloy-Steel Pipe for High-Temperature Service",
    "Size Range: 10mm to 300mm diameter",
    "Grade: F91 (9Cr-1Mo-V Steel) - Modified 9Cr-1Mo"
  ];

  const applications = [
    "Advanced Power Plant Components",
    "Ultra-Supercritical Steam Headers",
    "High-Temperature Superheater Tubes",
    "Modern Thermal Power Plants",
    "High-Efficiency Boiler Components",
    "Steam Turbine Components",
    "Advanced Heat Exchanger Tubing",
    "Next-Generation Energy Systems"
  ];

  const features = [
    { icon: Shield, title: "Ultra-High Temperature", desc: "Excellent performance at temperatures up to 650°C with superior creep strength" },
    { icon: TrendingUp, title: "Advanced Metallurgy", desc: "Modified 9Cr-1Mo steel with vanadium and niobium additions" },
    { icon: Award, title: "Next-Gen Power Plants", desc: "Designed for ultra-supercritical and advanced power generation" },
    { icon: CheckCircle, title: "Long-Term Stability", desc: "Enhanced microstructural stability for extended service life" }
  ];

  return (
    <>
      <ProductSEO
        title="F91 Round Bars (9Cr-1Mo-V)"
        description="Premium quality F91 modified 9Cr-1Mo-V alloy steel round bars for ultra-supercritical power plants. ASTM A182, A336 certified for advanced high-temperature applications. Best prices in Mumbai for F91 round bars."
        keywords="F91 round bars, 9Cr-1Mo-V steel bars, ASTM A182 F91, ultra-supercritical power plant components, advanced alloy steel bars, Mumbai F91 steel supplier"
        category="Round Bars"
        productName="F91 Round Bars (9Cr-1Mo-V)"
        specifications={specifications}
        canonicalUrl="/product/round-bars/alloy-steel-f-series/f91-round-bars"
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
              <Link href="/product/round-bars/alloy-steel-f-series" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-f-series">Alloy Steel F Series</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">F91 Round Bars</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium F91 Round Bars
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                Advanced F91 (9Cr-1Mo-V) alloy steel round bars for ultra-supercritical power plants and next-generation energy systems
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
              Why Choose Our F91 Round Bars?
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
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Standards & Grade</h3>
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

        {/* Chemical Composition */}
        <section className="py-16 bg-white" data-testid="composition-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="composition-title">
                F91 Chemical Composition
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="composition-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Element</th>
                      <th className="px-6 py-4 text-left">Composition (%)</th>
                      <th className="px-6 py-4 text-left">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Carbon (C)</td>
                      <td className="px-6 py-4">0.08 - 0.12</td>
                      <td className="px-6 py-4">Controlled carbon for optimal strength</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Chromium (Cr)</td>
                      <td className="px-6 py-4">8.00 - 9.50</td>
                      <td className="px-6 py-4">High temperature oxidation resistance</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Molybdenum (Mo)</td>
                      <td className="px-6 py-4">0.85 - 1.05</td>
                      <td className="px-6 py-4">Enhanced creep strength</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Vanadium (V)</td>
                      <td className="px-6 py-4">0.18 - 0.25</td>
                      <td className="px-6 py-4">Precipitation strengthening</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Niobium (Nb)</td>
                      <td className="px-6 py-4">0.06 - 0.10</td>
                      <td className="px-6 py-4">Microstructural stability</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Nitrogen (N)</td>
                      <td className="px-6 py-4">0.030 - 0.070</td>
                      <td className="px-6 py-4">Solid solution strengthening</td>
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
                Ready to Order F91 Round Bars?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our F91 advanced alloy steel specialists
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