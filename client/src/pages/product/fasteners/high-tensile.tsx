import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import ss_nots_bolts_mamta_steel_traders_img from "@/assets/SS NOTS BOLTS MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function HighTensileFasteners() {
  const specifications = [
    "ASTM A193 Grade B7, B16 - Alloy Steel and Stainless Steel Bolting Materials",
    "ASTM A320 Grade L7, L43 - Alloy Steel and Stainless Steel Bolting Materials for Low Temperature Service",
    "ASTM A325 - Structural Bolts, Steel, Heat Treated",
    "ASTM A490 - Heat Treated Steel Structural Bolts",
    "ISO 898-1 - Property Classes 8.8, 10.9, 12.9",
    "DIN Standards - DIN 912, DIN 933, DIN 931, DIN 6912",
    "Size Range: M3 to M100 | 1/8\" to 4\"",
    "Length: Up to 6000mm",
    "Thread Pitch: Coarse and Fine Thread Available",
    "Surface Finish: Plain, Zinc Plated, Hot Dip Galvanized"
  ];

  const productCategories = [
    {
      name: "Hex Head Bolts",
      description: "High tensile hexagon head bolts in various grades",
      grades: ["8.8", "10.9", "12.9", "B7", "B16"],
      image: ss_nots_bolts_mamta_steel_traders_img
    },
    {
      name: "Socket Head Cap Screws",
      description: "Allen key socket head cap screws for precision applications",
      grades: ["12.9", "A4-80", "A2-70"],
      image: ss_nots_bolts_mamta_steel_traders_img
    },
    {
      name: "Stud Bolts",
      description: "Fully threaded stud bolts for flange applications",
      grades: ["B7", "B16", "L7", "316L"],
      image: ss_nots_bolts_mamta_steel_traders_img
    },
    {
      name: "Hex Nuts",
      description: "High strength hex nuts matching bolt grades",
      grades: ["2H", "2HM", "A4-80", "A2-70"],
      image: ss_nots_bolts_mamta_steel_traders_img
    },
    {
      name: "Washers",
      description: "Hardened washers for high tensile applications",
      grades: ["HV300", "A4", "A2", "Carbon Steel"],
      image: ss_nots_bolts_mamta_steel_traders_img
    },
    {
      name: "U-Bolts",
      description: "Heavy duty U-bolts for structural applications",
      grades: ["8.8", "10.9", "316L", "304L"],
      image: ss_nots_bolts_mamta_steel_traders_img
    }
  ];

  const applications = [
    "Structural Steel Construction",
    "Heavy Machinery Assembly",
    "Bridge Construction",
    "Power Plant Equipment",
    "Pressure Vessel Applications",
    "Wind Energy Projects",
    "Oil and Gas Equipment",
    "Marine and Offshore Structures"
  ];

  const features = [
    { icon: Shield, title: "High Strength", desc: "Superior tensile strength up to 1220 MPa" },
    { icon: TrendingUp, title: "Corrosion Resistant", desc: "Various coatings available for corrosion protection" },
    { icon: Award, title: "Quality Certified", desc: "Mill test certificates and third-party inspection" },
    { icon: CheckCircle, title: "Multiple Grades", desc: "Wide range of property classes and materials" }
  ];

  return (
    <>
      <ProductSEO
        title="High Tensile Fasteners - SS 316L, 304, Duplex Steel Bolts, Nuts & Washers | Mumbai Supplier"
        description="Premium high tensile fasteners manufacturer in Mumbai. SS 316L, 304, Duplex steel bolts, nuts, washers. ASTM A193 B7/B16, ISO 898 Grade 8.8/10.9/12.9. Best prices & quality."
        keywords="high tensile fasteners, stainless steel fasteners, SS 316L bolts, SS 304 fasteners, duplex steel fasteners, ASTM A193 B7 bolts, B16 bolts, ISO 898 fasteners, hex head bolts, socket head cap screws, stud bolts, hex nuts, washers, U-bolts, Mumbai fastener supplier, high tensile bolts manufacturer, stainless steel nuts supplier, marine grade fasteners, food grade fasteners, chemical resistant fasteners"
        category="Fasteners"
        productName="High Tensile Fasteners"
        specifications={specifications}
        canonicalUrl="/product/fasteners/high-tensile"
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
              <Link href="/product/fasteners" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-fasteners">Fasteners</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">High Tensile Fasteners</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-heading md:text-heading font-bold mb-6" data-testid="hero-title">
                Premium High Tensile Fasteners
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                Superior strength fasteners for critical structural and industrial applications
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
              Why Choose Our High Tensile Fasteners?
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

        {/* Product Categories Grid */}
        <section className="py-16 bg-white" data-testid="product-categories-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-4" data-testid="categories-title">
                High Tensile Fastener Categories
              </h2>
              <p className="text-center text-gray-600 mb-12 text-lg">
                Complete range of high strength fasteners for critical applications
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productCategories.map((category, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200" data-testid={`category-${index}`}>
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-navy-primary mb-2">{category.name}</h3>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">Available Grades:</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.grades.map((grade, gradeIndex) => (
                            <span key={gradeIndex} className="bg-gold-primary/20 text-navy-primary px-2 py-1 rounded text-xs font-medium">
                              {grade}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Link href="/contact" className="text-gold-primary hover:text-gold-secondary font-medium text-sm">
                        Get Quote →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 bg-gray-50" data-testid="specifications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="specifications-title">
                Technical Specifications & Applications
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-lg shadow-md" data-testid="specifications-standards">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Standards & Specifications</h3>
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
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Industrial Applications</h3>
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

        {/* Property Classes */}
        <section className="py-16 bg-white" data-testid="property-classes-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="property-classes-title">
                Property Classes & Strength Ratings
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="property-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Property Class / Grade</th>
                      <th className="px-6 py-4 text-left">Tensile Strength (MPa)</th>
                      <th className="px-6 py-4 text-left">Yield Strength (MPa)</th>
                      <th className="px-6 py-4 text-left">Hardness (HRC)</th>
                      <th className="px-6 py-4 text-left">Applications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Class 8.8</td>
                      <td className="px-6 py-4">800 min</td>
                      <td className="px-6 py-4">640 min</td>
                      <td className="px-6 py-4">23-34</td>
                      <td className="px-6 py-4">General structural</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Class 10.9</td>
                      <td className="px-6 py-4">1000 min</td>
                      <td className="px-6 py-4">900 min</td>
                      <td className="px-6 py-4">32-39</td>
                      <td className="px-6 py-4">Heavy machinery</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Class 12.9</td>
                      <td className="px-6 py-4">1200 min</td>
                      <td className="px-6 py-4">1080 min</td>
                      <td className="px-6 py-4">39-44</td>
                      <td className="px-6 py-4">Aerospace, Critical</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">ASTM A193 B7</td>
                      <td className="px-6 py-4">860 min</td>
                      <td className="px-6 py-4">720 min</td>
                      <td className="px-6 py-4">23-35</td>
                      <td className="px-6 py-4">Pressure vessels</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">ASTM A193 B16</td>
                      <td className="px-6 py-4">700 min</td>
                      <td className="px-6 py-4">520 min</td>
                      <td className="px-6 py-4">22-32</td>
                      <td className="px-6 py-4">High temp service</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">SS 316L A4-80</td>
                      <td className="px-6 py-4">800 min</td>
                      <td className="px-6 py-4">600 min</td>
                      <td className="px-6 py-4">-</td>
                      <td className="px-6 py-4">Marine, Chemical</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Search Keywords */}
        <section className="py-16 bg-white" data-testid="keywords-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-navy-primary mb-8" data-testid="keywords-title">
                Popular Fastener Searches
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "SS 316L Bolts", "SS 304 Fasteners", "Duplex Steel Fasteners", "Marine Grade Bolts",
                  "Food Grade Fasteners", "Chemical Resistant Bolts", "High Tensile Nuts", "Stainless Steel Washers",
                  "ASTM A193 B7 Bolts", "ASTM A193 B16 Bolts", "ISO 898 Grade 8.8", "ISO 898 Grade 10.9",
                  "Hex Head Bolts", "Socket Head Cap Screws", "Stud Bolts", "U-Bolts", "Foundation Bolts"
                ].map((keyword, index) => (
                  <span key={index} className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-navy-primary border border-gray-200 hover:shadow-md transition-shadow">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-navy-primary text-white" data-testid="contact-cta-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6" data-testid="cta-title">
                Need High Tensile Fasteners for Your Project?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get the exact grade and size with certified quality documentation
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
                Get Fastener Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}