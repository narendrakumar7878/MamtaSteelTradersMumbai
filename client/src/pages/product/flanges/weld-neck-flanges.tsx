import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function WeldNeckFlanges() {
  const specifications = [
    "ASTM A105 - Standard Specification for Carbon Steel Forgings for Piping Applications",
    "ASTM A182 - Standard Specification for Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
    "ASME B16.5 - Pipe Flanges and Flanged Fittings: NPS 1/2 through NPS 24",
    "ASME B16.47 - Large Diameter Steel Flanges: NPS 26 through NPS 60",
    "Size Range: 1/2 inch to 60 inches",
    "Pressure Class: 150# to 2500#"
  ];

  const applications = [
    "High Pressure Piping Systems",
    "High Temperature Applications",
    "Critical Process Lines",
    "Oil and Gas Transmission",
    "Power Plant Piping",
    "Chemical Processing Equipment",
    "Refineries and Petrochemical Plants",
    "Steam and Hot Water Systems"
  ];

  const features = [
    { icon: Shield, title: "High Strength", desc: "Superior strength due to gradual transition from pipe to flange" },
    { icon: TrendingUp, title: "Fatigue Resistant", desc: "Excellent fatigue resistance under thermal and pressure cycling" },
    { icon: Award, title: "Full Penetration Weld", desc: "Allows for complete joint penetration radiographic examination" },
    { icon: CheckCircle, title: "Long Neck Design", desc: "Long tapered hub provides stress distribution and reinforcement" }
  ];

  const advantages = [
    {
      title: "Superior Structural Integrity",
      description: "The long tapered hub provides excellent stress distribution, making it ideal for high pressure and high temperature applications.",
      benefits: ["Maximum strength", "Stress concentration reduction", "Enhanced fatigue life", "Superior leak tightness"]
    },
    {
      title: "Best for Critical Applications",
      description: "Weld neck flanges are the preferred choice for critical piping systems where reliability is paramount.",
      benefits: ["Radiographic examination possible", "Full penetration weld", "Zero leakage potential", "Long service life"]
    },
    {
      title: "High Pressure Capability",
      description: "Designed to handle the highest pressures in industrial applications with maximum safety margins.",
      benefits: ["Pressure class up to 2500#", "High temperature resistance", "Thermal shock resistance", "Vibration resistance"]
    }
  ];

  return (
    <>
      <ProductSEO
        title="Weld Neck Flanges"
        description="Premium quality weld neck flanges for high pressure and high temperature applications. ASME B16.5, B16.47 certified with superior strength and fatigue resistance. Best prices in Mumbai for weld neck flanges."
        keywords="weld neck flanges, ASME B16.5 flanges, high pressure flanges, high temperature flanges, Mumbai flanges supplier"
        category="Flanges"
        productName="Weld Neck Flanges"
        specifications={specifications}
        canonicalUrl="/product/flanges/weld-neck-flanges"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Weld Neck Flanges</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Weld Neck Flanges
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-strength weld neck flanges for critical high pressure and high temperature piping applications
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
              Why Choose Our Weld Neck Flanges?
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

        {/* Advantages */}
        <section className="py-16 bg-gray-50" data-testid="advantages-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="advantages-title">
                Weld Neck Flange Advantages
              </h2>
              <div className="space-y-8">
                {advantages.map((advantage, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-md" data-testid={`advantage-${index}`}>
                    <h3 className="text-2xl font-semibold text-navy-primary mb-4">{advantage.title}</h3>
                    <p className="text-gray-700 mb-6">{advantage.description}</p>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {advantage.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center" data-testid={`benefit-${index}-${benefitIndex}`}>
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
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

        {/* Pressure Temperature Ratings */}
        <section className="py-16 bg-gray-50" data-testid="ratings-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="ratings-title">
                Pressure-Temperature Ratings
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="ratings-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Class</th>
                      <th className="px-6 py-4 text-left">100°F (38°C)</th>
                      <th className="px-6 py-4 text-left">200°F (93°C)</th>
                      <th className="px-6 py-4 text-left">400°F (204°C)</th>
                      <th className="px-6 py-4 text-left">600°F (316°C)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">150#</td>
                      <td className="px-6 py-4">285 PSI</td>
                      <td className="px-6 py-4">260 PSI</td>
                      <td className="px-6 py-4">200 PSI</td>
                      <td className="px-6 py-4">150 PSI</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">300#</td>
                      <td className="px-6 py-4">740 PSI</td>
                      <td className="px-6 py-4">675 PSI</td>
                      <td className="px-6 py-4">535 PSI</td>
                      <td className="px-6 py-4">410 PSI</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">600#</td>
                      <td className="px-6 py-4">1480 PSI</td>
                      <td className="px-6 py-4">1350 PSI</td>
                      <td className="px-6 py-4">1070 PSI</td>
                      <td className="px-6 py-4">815 PSI</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">900#</td>
                      <td className="px-6 py-4">2220 PSI</td>
                      <td className="px-6 py-4">2025 PSI</td>
                      <td className="px-6 py-4">1605 PSI</td>
                      <td className="px-6 py-4">1225 PSI</td>
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
                Ready to Order Weld Neck Flanges?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our high-pressure flange specialists
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