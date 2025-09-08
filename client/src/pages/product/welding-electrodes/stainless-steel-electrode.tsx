import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function StainlessSteelElectrodes() {
  const specifications = [
    "AWS A5.4/A5.4M - Specification for Stainless Steel Electrodes for Shielded Metal Arc Welding",
    "AWS A5.9/A5.9M - Specification for Bare Stainless Steel Welding Electrodes and Rods",
    "AWS A5.22/A5.22M - Specification for Stainless Steel Flux Cored and Metal Cored Welding Electrodes",
    "ASME Section II Part C - Welding Rods, Electrodes, and Filler Metals",
    "Diameter Range: 1.6mm to 6.0mm",
    "Length: 300mm to 450mm",
    "Polarity: DC+, AC suitable for most grades"
  ];

  const electrodeTypes = [
    "E308L-16 (304L Base Metal)",
    "E316L-16 (316L Base Metal)", 
    "E309L-16 (Dissimilar Metal Welding)",
    "E310-16 (High Temperature Applications)",
    "E347-16 (Stabilized Stainless Steel)",
    "E410-16 (Martensitic Stainless Steel)",
    "E430-16 (Ferritic Stainless Steel)",
    "E2209-16 (Duplex Stainless Steel)"
  ];

  const applications = [
    "Stainless Steel Fabrication",
    "Chemical Process Equipment",
    "Food Processing Equipment",
    "Pharmaceutical Industry",
    "Marine Applications",
    "Oil and Gas Industry",
    "Power Generation Plants",
    "Aerospace Components"
  ];

  const features = [
    { icon: Shield, title: "Corrosion Resistant", desc: "Provides excellent corrosion resistance in various environments" },
    { icon: TrendingUp, title: "High Quality Welds", desc: "Superior arc stability and weld bead appearance" },
    { icon: Award, title: "AWS Classified", desc: "AWS A5.4 and A5.9 certified stainless steel electrodes" },
    { icon: CheckCircle, title: "Multiple Grades", desc: "Wide range of grades for different base metal combinations" }
  ];

  const weldingPositions = [
    { position: "1G", description: "Flat Position", suitable: "All electrodes" },
    { position: "2G", description: "Horizontal Fillet", suitable: "All electrodes" },
    { position: "3G", description: "Vertical Position", suitable: "E308L-16, E316L-16, E309L-16" },
    { position: "4G", description: "Overhead Position", suitable: "E308L-16, E316L-16 (with skill)" }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Welding Electrodes"
        description="High-quality stainless steel welding electrodes AWS A5.4 certified. E308L, E316L, E309L grades for SMAW welding applications from Mumbai steel supplier."
        keywords="stainless steel electrodes, AWS A5.4 electrodes, E308L electrodes, E316L electrodes, SMAW electrodes, Mumbai steel supplier"
        category="Welding Electrodes"
        productName="Stainless Steel Welding Electrodes"
        specifications={specifications}
        canonicalUrl="/product/welding-electrodes/stainless-steel-electrode"
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
              <Link href="/product/welding-electrodes" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-welding">Welding Electrodes</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Stainless Steel Electrodes</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Stainless Steel Electrodes
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-quality AWS certified stainless steel welding electrodes for superior weld quality
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
              Why Choose Our Stainless Steel Electrodes?
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

        {/* Electrode Types */}
        <section className="py-16 bg-gray-50" data-testid="electrode-types-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="electrode-types-title">
                Available Electrode Types
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {electrodeTypes.map((type, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300" data-testid={`electrode-type-${index}`}>
                    <h3 className="text-lg font-semibold text-navy-primary mb-2">{type}</h3>
                    <div className="w-12 h-12 bg-gold-primary rounded-full mx-auto flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Welding Positions */}
        <section className="py-16 bg-white" data-testid="welding-positions-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="positions-title">
                Welding Position Guidelines
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-md">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left">Position</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Description</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Suitable Electrodes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weldingPositions.map((position, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-navy-primary">{position.position}</td>
                        <td className="border border-gray-300 px-4 py-3">{position.description}</td>
                        <td className="border border-gray-300 px-4 py-3">{position.suitable}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-gray-50" data-testid="specifications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="specifications-title">
                Technical Specifications
              </h2>
              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-navy-primary text-white px-6 py-4">
                  <h3 className="text-xl font-semibold">Specification Standards</h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-1 gap-4">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex items-start" data-testid={`specification-${index}`}>
                        <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 bg-white" data-testid="applications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="applications-title">
                Industrial Applications
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {applications.map((application, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300" data-testid={`application-${index}`}>
                    <div className="w-12 h-12 bg-navy-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Star className="w-6 h-6 text-gold-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-navy-primary">{application}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-navy-primary to-navy-secondary text-white" data-testid="cta-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="cta-title">
                Ready to Order Stainless Steel Electrodes?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get premium quality welding electrodes with fast delivery across India
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-contact">
                  Request Quote
                </Link>
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <div className="flex items-center" data-testid="contact-phone">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href="tel:+919876543210" className="hover:text-gold-primary transition-colors">+91 98765 43210</a>
                  </div>
                  <div className="flex items-center" data-testid="contact-email">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href="mailto:info@mamtasteel.com" className="hover:text-gold-primary transition-colors">info@mamtasteel.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}