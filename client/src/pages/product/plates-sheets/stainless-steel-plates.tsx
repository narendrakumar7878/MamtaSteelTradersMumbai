import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function StainlessSteelPlates() {
  const specifications = [
    "ASTM A240/A240M - Standard Specification for Chromium and Chromium-Nickel Stainless Steel Plate, Sheet, and Strip",
    "ASTM A167 - Standard Specification for Stainless and Heat-Resisting Chromium-Nickel Steel Plate, Sheet, and Strip",
    "ASTM A463/A463M - Standard Specification for Steel Sheet, Aluminum-Coated, by the Hot-Dip Process",
    "JIS G4304/G4305 - Hot-rolled and Cold-rolled Stainless Steel Plates",
    "Thickness Range: 0.3mm to 100mm",
    "Width: Up to 2500mm | Length: Up to 12000mm",
    "Grades: 304, 304L, 316, 316L, 321, 347, 310, 410, 430, 904L"
  ];

  const applications = [
    "Chemical Processing Equipment",
    "Food and Beverage Industry",
    "Pharmaceutical Equipment",
    "Oil and Gas Processing",
    "Marine and Offshore Applications",
    "Architecture and Construction",
    "Kitchen Equipment and Appliances",
    "Medical and Surgical Instruments"
  ];

  const features = [
    { icon: Shield, title: "Corrosion Resistant", desc: "Excellent resistance to corrosion in various environments" },
    { icon: TrendingUp, title: "High Strength", desc: "Superior mechanical properties and durability" },
    { icon: Award, title: "Multiple Finishes", desc: "2B, BA, No.1, No.4, HL, Mirror finish available" },
    { icon: CheckCircle, title: "Custom Sizes", desc: "Cut-to-size service available for specific requirements" }
  ];

  const finishTypes = [
    { name: "2B Finish", description: "Cold rolled, heat treated, pickled, and passed through polishing rolls" },
    { name: "BA Finish", description: "Bright annealed finish with a reflective surface" },
    { name: "No.4 Finish", description: "General purpose polished finish, one-directional satin finish" },
    { name: "HL Finish", description: "Hairline finish with continuous polishing marks" },
    { name: "Mirror Finish", description: "Highly reflective surface suitable for decorative applications" }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Plates & Sheets"
        description="High-quality stainless steel plates and sheets in grades 304, 316, 321. Available in various finishes - 2B, BA, No.4, Mirror. Custom cutting service available in Mumbai."
        keywords="stainless steel plates, stainless steel sheets, 304 plates, 316 plates, 2B finish, BA finish, mirror finish, Mumbai steel supplier"
        category="Plates & Sheets"
        productName="Stainless Steel Plates & Sheets"
        specifications={specifications}
        canonicalUrl="/product/plates-sheets/stainless-steel-plates"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Stainless Steel Plates</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Stainless Steel Plates & Sheets
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-grade stainless steel plates in all standard grades and custom finishes
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
              Why Choose Our Stainless Steel Plates?
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

        {/* Surface Finishes */}
        <section className="py-16 bg-gray-50" data-testid="finishes-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="finishes-title">
                Available Surface Finishes
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {finishTypes.map((finish, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200" data-testid={`finish-${index}`}>
                    <h3 className="text-xl font-semibold text-navy-primary mb-3">{finish.name}</h3>
                    <p className="text-gray-700">{finish.description}</p>
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

        {/* Size Chart */}
        <section className="py-16 bg-gray-50" data-testid="size-chart-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="size-chart-title">
                Standard Sizes Available
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="size-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Thickness (mm)</th>
                      <th className="px-6 py-4 text-left">Width (mm)</th>
                      <th className="px-6 py-4 text-left">Length (mm)</th>
                      <th className="px-6 py-4 text-left">Grade</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">0.3 - 3.0</td>
                      <td className="px-6 py-4">1000 - 2000</td>
                      <td className="px-6 py-4">2000 - 6000</td>
                      <td className="px-6 py-4">304, 316, 430</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">3.0 - 12.0</td>
                      <td className="px-6 py-4">1500 - 2500</td>
                      <td className="px-6 py-4">3000 - 12000</td>
                      <td className="px-6 py-4">304, 304L, 316, 316L</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">12.0 - 50.0</td>
                      <td className="px-6 py-4">1500 - 2500</td>
                      <td className="px-6 py-4">6000 - 12000</td>
                      <td className="px-6 py-4">304, 316, 321, 347</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4">50.0 - 100.0</td>
                      <td className="px-6 py-4">2000 - 2500</td>
                      <td className="px-6 py-4">6000 - 12000</td>
                      <td className="px-6 py-4">304, 316, 904L</td>
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
                Need Custom Stainless Steel Plates?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get cut-to-size plates with the exact finish you need
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
                Get Custom Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}