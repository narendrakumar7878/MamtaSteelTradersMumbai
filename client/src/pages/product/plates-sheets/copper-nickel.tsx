import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function CopperNickelPlates() {
  const specifications = [
    "ASTM B122 - Standard Specification for Copper-Nickel Alloy Plate, Sheet, Strip, and Rolled Bar",
    "ASME SB-122 - Copper-Nickel Alloy Plate, Sheet, Strip, and Rolled Bar",
    "Thickness Range: 0.3mm to 200mm (Custom sizes available)",
    "Width Range: 1000mm to 2500mm",
    "Length: Single Random, Double Random & Cut Length",
    "Alloys: 90/10 CuNi (C70600), 70/30 CuNi (C71500), CuNi 80/20, CuNi10Fe1Mn",
    "Supply Condition: Hot Rolled, Cold Rolled, Annealed",
    "Surface Finish: Bright, Mill Finish, Polished",
    "Material Traceability: Complete mill test certificates",
    "Quality Standards: ISO certified manufacturing"
  ];

  const applications = [
    "Marine Heat Exchangers and Condensers",
    "Seawater Desalination Plants",
    "Offshore Oil and Gas Platforms",
    "Ship Hull Sheathing and Cladding",
    "Marine Propulsion Systems",
    "Coastal Power Plant Equipment",
    "Aquaculture and Fish Farming",
    "Chemical Processing Equipment",
    "Construction Industry Applications",
    "Industrial Manufacturing Components",
    "Pressure Vessels and Tanks",
    "Power Generation Equipment",
    "Petrochemical Industry Components",
    "Water Treatment Plants"
  ];

  const features = [
    { icon: Shield, title: "Marine Corrosion Resistant", desc: "Exceptional resistance to seawater and marine environments" },
    { icon: TrendingUp, title: "Biofouling Resistant", desc: "Natural resistance to marine organism growth and attachment" },
    { icon: Award, title: "Marine Certified", desc: "Approved by major marine classification societies" },
    { icon: CheckCircle, title: "Long Service Life", desc: "Proven track record of 30+ years in marine service" }
  ];

  return (
    <>
      <ProductSEO
        title="Copper Nickel Plates & Sheets"
        description="Premium quality copper nickel plates and sheets from ₹300-₹1800/kg in 90/10 and 70/30 compositions. ASTM B122 certified supplier in Mumbai for marine, seawater, and offshore applications. Available in all standard sizes with ISO certification."
        keywords="copper nickel plates, CuNi plates, 90/10 copper nickel, 70/30 copper nickel, ASTM B122 plates, marine plates, Mumbai copper nickel supplier, CuNi10Fe1Mn, copper nickel sheet price, cupro nickel plates, UNS C70600, UNS C71500"
        category="Plates & Sheets"
        productName="Copper Nickel Plates & Sheets"
        specifications={specifications}
        canonicalUrl="/product/plates-sheets/copper-nickel"
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
              <Link href="/product/plates-sheets" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-plates-sheets">Plates & Sheets</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Copper Nickel Plates & Sheets</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-heading md:text-heading font-bold mb-6" data-testid="hero-title">
                Premium Copper Nickel Plates & Sheets
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-performance copper-nickel alloy plates starting from ₹300/kg for marine, offshore, and industrial applications
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
              Why Choose Our Copper Nickel Plates?
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
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="specifications-title">
                Technical Specifications
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-lg shadow-md" data-testid="specifications-standards">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Standards & Alloys</h3>
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

        {/* Pricing Section */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white" data-testid="pricing-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="pricing-title">
                Copper Nickel Plate Pricing
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-gold-primary" data-testid="pricing-basic">
                  <h3 className="text-2xl font-bold text-navy-primary mb-4">90/10 CuNi</h3>
                  <p className="text-heading font-bold text-gold-primary mb-2">₹850-1150</p>
                  <p className="text-gray-600 mb-6">per kg</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Standard marine grade</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Thickness: 0.3-12mm</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />UNS C70600 certified</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />ASTM B122, ASME SB-122</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-navy-primary" data-testid="pricing-premium">
                  <h3 className="text-2xl font-bold text-navy-primary mb-4">70/30 CuNi</h3>
                  <p className="text-heading font-bold text-navy-primary mb-2">₹1150-1450</p>
                  <p className="text-gray-600 mb-6">per kg</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />High nickel content</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Thickness: 2-200mm</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />UNS C71500 grade</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Superior corrosion resistance</li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-green-500" data-testid="pricing-specialty">
                  <h3 className="text-2xl font-bold text-navy-primary mb-4">Special Grades</h3>
                  <p className="text-heading font-bold text-green-600 mb-2">₹300-1800</p>
                  <p className="text-gray-600 mb-6">per kg</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />CuNi10Fe1Mn variants</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Custom compositions</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />All thickness ranges</li>
                    <li className="flex items-center"><CheckCircle className="w-5 h-5 text-green-500 mr-2" />Volume discounts available</li>
                  </ul>
                </div>
              </div>
              <div className="text-center">
                <p className="text-gray-600 mb-4">*Prices are indicative and depend on thickness, finish, quantity and MTC requirements. GSM: 70-500+ available</p>
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="pricing-cta">
                  Get Current Price Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Copper Nickel Alloys */}
        <section className="py-16 bg-white" data-testid="alloy-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="alloy-grades-title">
                Available Copper Nickel Alloys
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="alloy-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Alloy</th>
                      <th className="px-6 py-4 text-left">UNS Number</th>
                      <th className="px-6 py-4 text-left">Composition</th>
                      <th className="px-6 py-4 text-left">Price Range</th>
                      <th className="px-6 py-4 text-left">Typical Applications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">90/10 CuNi</td>
                      <td className="px-6 py-4">C70600</td>
                      <td className="px-6 py-4">Bal Cu, 10% Ni, 1.4% Fe</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">₹850-1150/kg</td>
                      <td className="px-6 py-4">Seawater cooling systems, condensers</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">70/30 CuNi</td>
                      <td className="px-6 py-4">C71500</td>
                      <td className="px-6 py-4">Bal Cu, 30% Ni, 0.5% Fe</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">₹1150-1450/kg</td>
                      <td className="px-6 py-4">High velocity seawater, marine hardware</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">80/20 CuNi</td>
                      <td className="px-6 py-4">C71000</td>
                      <td className="px-6 py-4">Bal Cu, 20% Ni</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">₹950-1250/kg</td>
                      <td className="px-6 py-4">Moderate seawater applications</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">CuNi10Fe1Mn</td>
                      <td className="px-6 py-4">C70600</td>
                      <td className="px-6 py-4">Bal Cu, 10% Ni, 1.4% Fe, 0.7% Mn</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">₹950-1400/kg</td>
                      <td className="px-6 py-4">Enhanced erosion resistance</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">CuNi30Mn1Fe</td>
                      <td className="px-6 py-4">C71500</td>
                      <td className="px-6 py-4">Bal Cu, 30% Ni, 1% Mn, 1% Fe</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">₹1300-1800/kg</td>
                      <td className="px-6 py-4">High-stress marine environments</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-navy-primary mb-4">Available Sizes & Forms</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Thickness:</strong> 0.3mm to 200mm</li>
                    <li>• <strong>Width:</strong> 1000mm, 1250mm, 1500mm, 2000mm, 2500mm</li>
                    <li>• <strong>Length:</strong> Single Random, Double Random & Cut Length</li>
                    <li>• <strong>Shape:</strong> Rectangular, Square, Custom Shapes</li>
                    <li>• <strong>Surface:</strong> Bright, Mill Finish, Hot Rolled, Cold Rolled</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-navy-primary mb-4">Quality Certifications</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>ISO Certified:</strong> Quality management system</li>
                    <li>• <strong>Mill Test Certificate:</strong> With every shipment</li>
                    <li>• <strong>Third Party Inspection:</strong> Available on request</li>
                    <li>• <strong>Material Traceability:</strong> Complete documentation</li>
                    <li>• <strong>GST Compliant:</strong> All tax documentation provided</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-navy-primary text-white" data-testid="contact-cta-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6" data-testid="cta-title">
                Ready to Order Copper Nickel Plates?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our copper nickel specialists
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
                Get Detailed Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}