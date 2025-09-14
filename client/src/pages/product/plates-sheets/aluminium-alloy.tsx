import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Zap, Settings, Users, Globe } from "lucide-react";
import { Link } from "wouter";

export default function AluminiumAlloyPlates() {
  const specifications = [
    "ASTM B209 - Standard Specification for Aluminum and Aluminum-Alloy Sheet and Plate",
    "ASTM B221 - Standard Specification for Aluminum and Aluminum-Alloy Extruded Bars, Rods, Wire, Profiles, and Tubes", 
    "AMS-QQ-A-250/4 - Aerospace Material Specification for High-Strength Applications",
    "AA (Aluminum Association) Standards - 1xxx, 3xxx, 5xxx, 6xxx, 7xxx Series",
    "EN 485 - Aluminium and aluminium alloys - Sheet, strip and plate",
    "DIN, MIL-Spec, QQ, DFARS and SAE Standards",
    "Thickness Range: 0.5mm to 200mm",
    "Alloys: 1100, 2024, 3003, 5052, 5083, 6061, 6063, 7075"
  ];

  const applications = [
    "Aircraft fuselage and wing tension members",
    "Commercial & military aircraft structures",
    "Critical aircraft components and fuselage skins", 
    "Shear webs and ribs for aerospace applications",
    "Marine and shipbuilding applications",
    "Automotive body panels and parts",
    "Building and construction cladding",
    "Food processing equipment",
    "Chemical processing industry",
    "Transportation and railway components",
    "Electronic and electrical enclosures",
    "Truck wheels and crew machine products",
    "Veterinary and orthopedic braces",
    "Scientific instruments and rivets"
  ];

  const features = [
    { icon: Shield, title: "Corrosion Resistant", desc: "Natural oxide layer provides excellent corrosion protection in marine environments" },
    { icon: TrendingUp, title: "Lightweight", desc: "One-third the weight of steel with exceptional strength-to-weight ratio" },
    { icon: Award, title: "Aerospace Grade", desc: "Meets stringent aerospace, military and marine industry standards" },
    { icon: CheckCircle, title: "Excellent Formability", desc: "Superior formability and machinability for complex shapes and precision components" },
    { icon: Zap, title: "High Fatigue Resistance", desc: "Excellent fatigue resistance especially in thick plate form for critical applications" },
    { icon: Settings, title: "Heat Treatable", desc: "Available in various tempers including T3, T4, T6, T8 and annealed state" },
    { icon: Users, title: "Industry Approved", desc: "Approved by major aerospace and defense contractors worldwide" },
    { icon: Globe, title: "DFARS Compliant", desc: "Defense Federal Acquisition Regulation Supplement compliant materials" }
  ];

  // Chemical composition data for 2024 T351
  const chemicalComposition = [
    { element: "Si", min: "–", max: "0.50" },
    { element: "Fe", min: "–", max: "0.50" },
    { element: "Cu", min: "3.80", max: "4.90" },
    { element: "Mn", min: "0.30", max: "0.90" },
    { element: "Mg", min: "1.20", max: "1.80" },
    { element: "Cr", min: "–", max: "0.10" },
    { element: "Zn", min: "–", max: "0.25" },
    { element: "Ti", min: "–", max: "0.15" },
    { element: "V", min: "–", max: "0.05" },
    { element: "Zr", min: "–", max: "0.05" },
    { element: "Other Each", min: "–", max: "0.05" },
    { element: "Other Total", min: "–", max: "0.05" }
  ];

  // Product gallery data
  const productImages = [
    {
      src: "https://textronsteelalloys.com/wp-content/uploads/2025/05/2024-T351-Plates-Sheets-300x300.webp",
      alt: "2024 T351 Plates Sheets AMS QQ-A-250/4, ASTM B209",
      title: "2024 T351 Aluminum Plates",
      description: "High-strength 2024 T351 aluminum plates for aerospace applications"
    },
    {
      src: "https://textronsteelalloys.com/wp-content/uploads/2019/07/Aluminum-Sheet-5052-h32-300x300.jpg", 
      alt: "5052-h32-sheet-stockist-supplier",
      title: "5052-H32 Aluminum Sheet",
      description: "Marine grade 5052-H32 aluminum sheets with excellent corrosion resistance"
    },
    {
      src: "https://textronsteelalloys.com/wp-content/uploads/2025/05/Aluminium-5083-300x300.jpeg",
      alt: "Aluminium 5083 Temper O, H111, H112, H116", 
      title: "5083 Aluminum Plates",
      description: "5083 aluminum plates in various tempers for marine and structural applications"
    },
    {
      src: "https://textronsteelalloys.com/wp-content/uploads/2019/07/6061-t6-plate-Aluminium-Plates-Sheets-Exporters-Suppliers-300x300.jpg",
      alt: "6061-t6-plate-sheet",
      title: "6061 T6 Aluminum Plates", 
      description: "Versatile 6061 T6 aluminum plates for general engineering applications"
    },
    {
      src: "https://textronsteelalloys.com/wp-content/uploads/2019/07/7075-plate-t6-t651-aluminum-300x300.jpg",
      alt: "7075-PLATE-T6-T651-STOCKIST",
      title: "7075 T6/T651 Aluminum Plates",
      description: "Ultra-high strength 7075 aluminum plates for aerospace and defense applications"
    }
  ];

  return (
    <>
      <ProductSEO
        title="Aluminium Alloy Plates & Sheets | 2024 T351, 5052, 6061, 7075 | ASTM B209, AMS-QQ-A-250/4 | DFARS Compliant"
        description="Premium aluminium alloy plates & sheets in aerospace grades 2024 T351, 5052-H32, 6061-T6, 7075-T651. ASTM B209, AMS-QQ-A-250/4, DFARS compliant. For aircraft fuselage, wing tension members, marine applications. Heat treatable aluminum with excellent fatigue resistance. Best prices from Mumbai supplier."
        keywords="aluminium alloy plates, 2024 T351 plates, aluminum plates ASTM B209, AMS-QQ-A-250/4 plates, DFARS aluminum, aerospace aluminum plates, 5052 H32 sheets, 6061 T6 plates, 7075 T651 plates, aircraft fuselage plates, wing tension members, marine aluminum, heat treatable aluminum, aluminum chemical composition, aluminum alloy supplier Mumbai, aluminum plates manufacturer, aluminum sheets exporter, aerospace grade aluminum, military specification aluminum, aluminum fatigue resistance, aluminum corrosion resistance"
        category="Plates & Sheets"
        productName="Aluminium Alloy Plates & Sheets - 2024 T351, 5052, 6061, 7075"
        specifications={specifications}
        canonicalUrl="/product/plates-sheets/aluminium-alloy"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Aluminium Alloy Plates & Sheets</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Aluminium Alloy Plates & Sheets
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                Lightweight, corrosion-resistant aluminium alloy plates for aerospace, marine, automotive, and construction applications
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
              Why Choose Our Aluminium Alloy Plates?
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

        {/* Aluminium Alloy Grades */}
        <section className="py-16 bg-white" data-testid="alloy-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="alloy-grades-title">
                Available Aluminium Alloy Grades
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="alloy-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Alloy</th>
                      <th className="px-6 py-4 text-left">Series</th>
                      <th className="px-6 py-4 text-left">Temper</th>
                      <th className="px-6 py-4 text-left">Key Characteristics</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">1100</td>
                      <td className="px-6 py-4">1xxx (Pure Al)</td>
                      <td className="px-6 py-4">O, H14, H18</td>
                      <td className="px-6 py-4">Excellent corrosion resistance, high conductivity</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">3003</td>
                      <td className="px-6 py-4">3xxx (Al-Mn)</td>
                      <td className="px-6 py-4">O, H14, H18</td>
                      <td className="px-6 py-4">Good formability, moderate strength</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">5052</td>
                      <td className="px-6 py-4">5xxx (Al-Mg)</td>
                      <td className="px-6 py-4">O, H32, H34</td>
                      <td className="px-6 py-4">Good marine corrosion resistance</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">6061</td>
                      <td className="px-6 py-4">6xxx (Al-Mg-Si)</td>
                      <td className="px-6 py-4">T6, T651</td>
                      <td className="px-6 py-4">Heat treatable, excellent machining</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">7075</td>
                      <td className="px-6 py-4">7xxx (Al-Zn)</td>
                      <td className="px-6 py-4">T6, T651</td>
                      <td className="px-6 py-4">Aerospace grade, highest strength</td>
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
                Ready to Order Aluminium Alloy Plates?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our aluminium alloy specialists
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