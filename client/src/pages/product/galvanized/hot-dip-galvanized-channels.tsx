import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function HotDipGalvanizedChannels() {
  const specifications = [
    "ASTM A36/A36M - Standard Specification for Carbon Structural Steel",
    "ASTM A123/A123M - Standard Specification for Zinc (Hot-Dip Galvanized) Coatings on Iron and Steel Products",
    "IS 2062 - Hot Rolled Medium and High Tensile Structural Steel",
    "IS 808 - Dimensions for Hot Rolled Steel Beam, Column, Channel and Angle Sections",
    "Coating Thickness: 85-100 microns (610-700 g/m²)",
    "Size Range: ISMC 75 to ISMC 400",
    "Length: 6m, 9m, 12m standard lengths"
  ];

  const channelTypes = [
    "ISMC (Indian Standard Medium Channels)",
    "ISMCP (Parallel Flange Channels)", 
    "Custom Cut Lengths",
    "Punched and Drilled Channels",
    "Slotted Channels",
    "Perforated Channels",
    "Back-to-Back Channel Sections",
    "Heavy Duty Structural Channels"
  ];

  const applications = [
    "Building Construction",
    "Industrial Structures",
    "Warehouse Framing",
    "Bridge Construction",
    "Transmission Towers",
    "Support Structures",
    "Agricultural Buildings",
    "Infrastructure Projects"
  ];

  const features = [
    { icon: Shield, title: "Weather Resistant", desc: "Hot-dip galvanizing provides superior weather protection" },
    { icon: TrendingUp, title: "Load Bearing", desc: "Excellent load-bearing capacity for structural applications" },
    { icon: Award, title: "IS & ASTM Certified", desc: "IS 808 and ASTM A123 certified galvanized channels" },
    { icon: CheckCircle, title: "Maintenance Free", desc: "Long-lasting protection with minimal maintenance required" }
  ];

  const channelSizes = [
    { size: "ISMC 75", depth: "75mm", width: "40mm", weight: "7.14 kg/m" },
    { size: "ISMC 100", depth: "100mm", width: "50mm", weight: "9.56 kg/m" },
    { size: "ISMC 150", depth: "150mm", width: "75mm", weight: "16.40 kg/m" },
    { size: "ISMC 200", depth: "200mm", width: "75mm", weight: "22.30 kg/m" },
    { size: "ISMC 250", depth: "250mm", width: "82.5mm", weight: "29.30 kg/m" },
    { size: "ISMC 400", depth: "400mm", width: "100mm", weight: "50.90 kg/m" }
  ];

  return (
    <>
      <ProductSEO
        title="Hot Dip Galvanized Channels"
        description="Premium hot-dip galvanized steel channels ISMC and ISMCP sections. ASTM A123 certified for construction and structural applications from Mumbai steel supplier."
        keywords="galvanized channels, hot dip galvanized steel, ISMC channels, ASTM A123 channels, structural steel channels, Mumbai steel supplier"
        category="Galvanized"
        productName="Hot Dip Galvanized Channels"
        specifications={specifications}
        canonicalUrl="/product/galvanized/hot-dip-galvanized-channels"
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
              <Link href="/product/galvanized" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-galvanized">Galvanized</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Hot Dip Galvanized Channels</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Hot Dip Galvanized Channels
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-quality ISMC and ISMCP galvanized steel channels for construction and structural applications
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
              Why Choose Our Galvanized Channels?
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

        {/* Channel Sizes */}
        <section className="py-16 bg-gray-50" data-testid="channel-sizes-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="sizes-title">
                Standard Channel Sizes
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-md">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left">Size</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Depth</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Flange Width</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Weight per Meter</th>
                    </tr>
                  </thead>
                  <tbody>
                    {channelSizes.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-navy-primary">{item.size}</td>
                        <td className="border border-gray-300 px-4 py-3">{item.depth}</td>
                        <td className="border border-gray-300 px-4 py-3">{item.width}</td>
                        <td className="border border-gray-300 px-4 py-3">{item.weight}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Channel Types */}
        <section className="py-16 bg-white" data-testid="channel-types-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="channel-types-title">
                Available Channel Types
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {channelTypes.map((type, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200 text-center hover:shadow-lg transition-shadow duration-300" data-testid={`channel-type-${index}`}>
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
                Ready to Order Galvanized Channels?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get premium quality hot-dip galvanized channels with fast delivery across India
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