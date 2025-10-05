import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Wrench, Package, Target, Settings } from "lucide-react";
import ss_nots_bolts_mamta_steel_traders_img from "@/assets/SS NOTS BOLTS MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";

export default function StainlessSteelBolts() {
  const specifications = [
    "Material Grades: SS 304, 304L, 316, 316L, 310, 321, 347, 904L, Duplex 2205, Super Duplex 2507",
    "Standards: DIN 933, DIN 931, ISO 4017, ISO 4014, ANSI/ASME B18.2.1, JIS B1180",
    "Size Range: M3 to M100 | 1/8\" to 4\" | Thread Length up to 6000mm",
    "Property Classes: A2-70, A4-80, A4-100 for stainless steel grades",
    "Surface Finish: Plain, Passivated, Electropolished, PTFE Coated",
    "Temperature Range: -200°C to +800°C depending on grade",
    "Corrosion Resistance: Excellent in marine, chemical, and food environments",
    "Certifications: ASTM A193, ASTM A194, NACE MR0175, API 20E",
    "Testing: PMI Test, Tensile Test, Hardness Test, IGC Test, Impact Test"
  ];

  const boltTypes = [
    {
      name: "Hex Head Bolts",
      description: "Standard hexagon head bolts for general applications with full and partial threading options",
      grades: ["SS 304", "SS 316L", "Duplex 2205", "A2-70", "A4-80"],
      sizes: "M3-M100, 1/8\"-4\"",
      standards: ["DIN 933", "ISO 4017", "ANSI B18.2.1"],
      applications: ["Structural", "Machinery", "Marine", "Chemical"],
      image: ss_nots_bolts_mamta_steel_traders_img
    },
    {
      name: "Socket Head Cap Screws",
      description: "Allen key socket head cap screws for precision applications and tight spaces",
      grades: ["SS 316L", "SS 304", "A4-80", "A2-70"],
      sizes: "M3-M48, #4-2\"",
      standards: ["DIN 912", "ISO 4762", "ASME B18.3.1M"],
      applications: ["Precision machinery", "Aerospace", "Medical devices"],
      image: ss_nots_bolts_mamta_steel_traders_img
    },
    {
      name: "Flange Bolts",
      description: "Built-in washer flange bolts eliminating separate washer requirement",
      grades: ["SS 304", "SS 316", "SS 321", "Duplex"],
      sizes: "M5-M20, 3/16\"-3/4\"",
      standards: ["DIN 6921", "ISO 4162", "JIS B1189"],
      applications: ["Automotive", "Electronics", "HVAC systems"],
      image: ss_nots_bolts_mamta_steel_traders_img
    },
    {
      name: "U-Bolts",
      description: "U-shaped bolts for clamping pipes, tubes, and structural elements",
      grades: ["SS 316L", "SS 304", "Super Duplex 2507"],
      sizes: "M6-M48, 1/4\"-2\"",
      standards: ["ASTM A193", "DIN 3570", "Custom"],
      applications: ["Pipe clamps", "Marine rigging", "Construction"],
      image: ss_nots_bolts_mamta_steel_traders_img
    },
    {
      name: "Foundation Bolts (Anchor Bolts)",
      description: "Heavy duty foundation and anchor bolts for structural connections",
      grades: ["SS 316L", "SS 304", "Duplex 2205"],
      sizes: "M12-M100, 1/2\"-4\"",
      standards: ["ASTM A193", "ASTM A320", "DIN 529"],
      applications: ["Building foundations", "Equipment mounting", "Bridge construction"],
      image: ss_nots_bolts_mamta_steel_traders_img
    },
    {
      name: "J-Bolts",
      description: "Curved hook bolts for anchoring and securing structural elements",
      grades: ["SS 304", "SS 316L", "SS 321", "Duplex 2205"],
      sizes: "M8-M48, 5/16\"-2\"",
      standards: ["Custom", "DIN 3570", "ASTM A193"],
      applications: ["Concrete anchoring", "Structural securing", "Foundation work", "Equipment mounting"],
      image: ss_nots_bolts_mamta_steel_traders_img
    }
  ];

  const materialGrades = [
    {
      grade: "SS 304",
      description: "General purpose austenitic stainless steel",
      composition: "18% Cr, 8% Ni",
      properties: "Good corrosion resistance, non-magnetic, work hardenable",
      applications: "Food processing, chemical, architectural"
    },
    {
      grade: "SS 316L",
      description: "Low carbon molybdenum bearing stainless steel",
      composition: "18% Cr, 10% Ni, 2% Mo",
      properties: "Superior corrosion resistance, marine grade",
      applications: "Marine, pharmaceutical, chemical processing"
    },
    {
      grade: "SS 321",
      description: "Titanium stabilized stainless steel",
      composition: "18% Cr, 10% Ni, Ti stabilized",
      properties: "High temperature resistance, carbide precipitation resistant",
      applications: "High temperature, exhaust systems, aerospace"
    },
    {
      grade: "Duplex 2205",
      description: "Duplex stainless steel with balanced structure",
      composition: "22% Cr, 5% Ni, 3% Mo",
      properties: "High strength, excellent corrosion resistance",
      applications: "Oil & gas, marine, chemical processing"
    }
  ];

  const applications = [
    "Marine and Offshore Structures - Exceptional corrosion resistance in saltwater",
    "Chemical and Petrochemical Plants - Resistance to aggressive chemicals",
    "Food Processing Equipment - FDA approved grades for food contact",
    "Pharmaceutical Manufacturing - Clean room and sterile applications",
    "Power Generation Plants - High temperature and pressure applications",
    "Water Treatment Facilities - Chloride and chemical resistance",
    "Architectural and Construction - Aesthetic appeal with durability",
    "Aerospace Industry - Lightweight and high strength requirements"
  ];

  const features = [
    { icon: Shield, title: "Corrosion Resistant", desc: "Superior resistance to rust, chemicals, and marine environments" },
    { icon: TrendingUp, title: "High Strength", desc: "Excellent tensile strength and load bearing capacity" },
    { icon: Award, title: "Quality Certified", desc: "Mill test certificates and third-party inspection available" },
    { icon: Wrench, title: "Precision Manufactured", desc: "Tight tolerances and consistent quality" },
    { icon: Package, title: "Complete Range", desc: "Full range of sizes, grades, and configurations available" },
    { icon: Target, title: "Application Specific", desc: "Specialized grades for specific industrial requirements" }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Bolts - SS 304, 316L, Duplex 2205 Hex Head, Socket Cap, Flange Bolts | Mumbai Manufacturer"
        description="Premium stainless steel bolts manufacturer in Mumbai. SS 304, 316L, 321, Duplex 2205 hex head bolts, socket cap screws, flange bolts, U-bolts. Marine grade, food grade SS bolts."
        keywords="stainless steel bolts, SS 304 bolts, SS 316L bolts, duplex steel bolts, hex head bolts, socket head cap screws, flange bolts, U-bolts, J-bolts, foundation bolts, anchor bolts, marine grade bolts, food grade bolts, chemical resistant bolts, stainless steel fasteners, Mumbai SS bolts manufacturer, ASTM A193 bolts, DIN 933 bolts, ISO 4017 bolts, A2-70 bolts, A4-80 bolts"
        category="Fasteners"
        productName="Stainless Steel Bolts"
        specifications={specifications}
        canonicalUrl="/product/fasteners/ss-bolts"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Stainless Steel Bolts</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-heading md:text-heading font-bold mb-6" data-testid="hero-title">
                Premium Stainless Steel Bolts
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                Complete range of corrosion-resistant SS bolts in grades 304, 316L, 321, and Duplex steel
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-get-quote">
                  Get Quote Now
                </Link>
                <Link href="#bolt-types" className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-view-products">
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white" data-testid="features-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="features-title">
                Why Choose Our Stainless Steel Bolts?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center p-6 rounded-lg hover:shadow-md transition-shadow" data-testid={`feature-${index}`}>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gold-primary/20 rounded-full flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-gold-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy-primary mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bolt Types Grid */}
        <section id="bolt-types" className="py-16 bg-gray-50" data-testid="bolt-types-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-4" data-testid="bolt-types-title">
                Stainless Steel Bolt Types
              </h2>
              <p className="text-center text-gray-600 mb-12 text-lg">
                Comprehensive range of stainless steel bolts for every industrial application
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {boltTypes.map((bolt, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden" data-testid={`bolt-${index}`}>
                    <img 
                      src={bolt.image} 
                      alt={bolt.name}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-navy-primary mb-3">{bolt.name}</h3>
                      <p className="text-gray-600 mb-4">{bolt.description}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-1">Available Grades:</h4>
                          <div className="flex flex-wrap gap-1">
                            {bolt.grades.map((grade, gradeIndex) => (
                              <span key={gradeIndex} className="bg-gold-primary/20 text-navy-primary px-2 py-1 rounded text-xs font-medium">
                                {grade}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-1">Size Range:</h4>
                          <p className="text-sm text-gray-600">{bolt.sizes}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-1">Standards:</h4>
                          <p className="text-sm text-gray-600">{bolt.standards.join(", ")}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-1">Applications:</h4>
                          <p className="text-sm text-gray-600">{bolt.applications.join(", ")}</p>
                        </div>
                      </div>
                      
                      <Link href="/contact" className="text-gold-primary hover:text-gold-secondary font-medium text-sm">
                        Request Quote →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Specifications Table */}
        <section className="py-16 bg-white" data-testid="detailed-specs-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="detailed-specs-title">
                Detailed Size & Thread Specifications
              </h2>
              <div className="overflow-x-auto mb-8">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="size-specs-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Size (Metric)</th>
                      <th className="px-4 py-3 text-left">Thread Pitch</th>
                      <th className="px-4 py-3 text-left">Size (Imperial)</th>
                      <th className="px-4 py-3 text-left">TPI</th>
                      <th className="px-4 py-3 text-left">Standard Length</th>
                      <th className="px-4 py-3 text-left">Max Length</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3">M6</td>
                      <td className="px-4 py-3">1.0</td>
                      <td className="px-4 py-3">1/4\"</td>
                      <td className="px-4 py-3">20</td>
                      <td className="px-4 py-3">10-50mm</td>
                      <td className="px-4 py-3">200mm</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3">M8</td>
                      <td className="px-4 py-3">1.25</td>
                      <td className="px-4 py-3">5/16\"</td>
                      <td className="px-4 py-3">18</td>
                      <td className="px-4 py-3">15-60mm</td>
                      <td className="px-4 py-3">300mm</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3">M10</td>
                      <td className="px-4 py-3">1.5</td>
                      <td className="px-4 py-3">3/8\"</td>
                      <td className="px-4 py-3">16</td>
                      <td className="px-4 py-3">20-80mm</td>
                      <td className="px-4 py-3">500mm</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3">M12</td>
                      <td className="px-4 py-3">1.75</td>
                      <td className="px-4 py-3">1/2\"</td>
                      <td className="px-4 py-3">13</td>
                      <td className="px-4 py-3">25-100mm</td>
                      <td className="px-4 py-3">1000mm</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3">M16</td>
                      <td className="px-4 py-3">2.0</td>
                      <td className="px-4 py-3">5/8\"</td>
                      <td className="px-4 py-3">11</td>
                      <td className="px-4 py-3">30-150mm</td>
                      <td className="px-4 py-3">2000mm</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3">M20-M100</td>
                      <td className="px-4 py-3">2.5-6.0</td>
                      <td className="px-4 py-3">3/4\"-4\"</td>
                      <td className="px-4 py-3">10-4</td>
                      <td className="px-4 py-3">40-500mm</td>
                      <td className="px-4 py-3">6000mm</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              {/* Grade to Property Class Mapping */}
              <h3 className="text-2xl font-semibold text-navy-primary mb-6" data-testid="grade-mapping-title">
                Grade to Property Class Mapping
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="grade-mapping-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">SS Grade</th>
                      <th className="px-4 py-3 text-left">Property Class</th>
                      <th className="px-4 py-3 text-left">Min Tensile (MPa)</th>
                      <th className="px-4 py-3 text-left">Min Yield (MPa)</th>
                      <th className="px-4 py-3 text-left">Temperature Range</th>
                      <th className="px-4 py-3 text-left">Corrosion Rating</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">SS 304</td>
                      <td className="px-4 py-3">A2-70</td>
                      <td className="px-4 py-3">700</td>
                      <td className="px-4 py-3">450</td>
                      <td className="px-4 py-3">-200°C to +300°C</td>
                      <td className="px-4 py-3">Good</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">SS 316L</td>
                      <td className="px-4 py-3">A4-80</td>
                      <td className="px-4 py-3">800</td>
                      <td className="px-4 py-3">600</td>
                      <td className="px-4 py-3">-200°C to +400°C</td>
                      <td className="px-4 py-3">Excellent</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">SS 321</td>
                      <td className="px-4 py-3">A2-70</td>
                      <td className="px-4 py-3">700</td>
                      <td className="px-4 py-3">450</td>
                      <td className="px-4 py-3">-200°C to +800°C</td>
                      <td className="px-4 py-3">High Temp</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">Duplex 2205</td>
                      <td className="px-4 py-3">A5</td>
                      <td className="px-4 py-3">850</td>
                      <td className="px-4 py-3">550</td>
                      <td className="px-4 py-3">-50°C to +300°C</td>
                      <td className="px-4 py-3">Superior</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Material Grades */}
        <section className="py-16 bg-gray-50" data-testid="material-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="grades-title">
                Stainless Steel Grades & Properties
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="grades-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Grade</th>
                      <th className="px-6 py-4 text-left">Description</th>
                      <th className="px-6 py-4 text-left">Composition</th>
                      <th className="px-6 py-4 text-left">Key Properties</th>
                      <th className="px-6 py-4 text-left">Applications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {materialGrades.map((material, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">{material.grade}</td>
                        <td className="px-6 py-4">{material.description}</td>
                        <td className="px-6 py-4">{material.composition}</td>
                        <td className="px-6 py-4">{material.properties}</td>
                        <td className="px-6 py-4">{material.applications}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md" data-testid="specifications-list">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Technical Specifications</h3>
                  <ul className="space-y-3">
                    {specifications.map((spec, index) => (
                      <li key={index} className="flex items-start" data-testid={`spec-${index}`}>
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md" data-testid="applications-list">
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

        {/* Popular Search Keywords */}
        <section className="py-16 bg-white" data-testid="keywords-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-navy-primary mb-8" data-testid="keywords-title">
                Popular Stainless Steel Bolt Searches
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "SS 304 Hex Bolts", "SS 316L Socket Cap Screws", "Marine Grade Bolts", "Food Grade SS Bolts",
                  "Duplex Steel Bolts", "Chemical Resistant Bolts", "High Temperature Bolts", "ASTM A193 B8 Bolts",
                  "DIN 933 SS Bolts", "ISO 4017 Bolts", "Flange Bolts SS 316", "U-Bolts Stainless Steel",
                  "Foundation Anchor Bolts", "Stud Bolts SS 321", "Pharmaceutical Grade Bolts", "A4-80 Bolts"
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
                Need Stainless Steel Bolts for Your Project?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get the exact grade, size, and quantity with certified mill test certificates
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
                Get SS Bolts Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}