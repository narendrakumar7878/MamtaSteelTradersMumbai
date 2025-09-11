import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Wrench, Package, Target, Settings } from "lucide-react";
import { Link } from "wouter";

export default function StainlessSteelNuts() {
  const specifications = [
    "Material Grades: SS 304, 304L, 316, 316L, 310, 321, 347, 904L, Duplex 2205, Super Duplex 2507",
    "Standards: DIN 934, DIN 6915, ISO 4032, ISO 4035, ANSI/ASME B18.2.2, JIS B1181",
    "Size Range: M3 to M100 | 1/8\" to 4\" | Thread Tolerance: Class 6H",
    "Property Classes: A2-70, A4-80, A4-100 for stainless steel grades",
    "Surface Finish: Plain, Passivated, Electropolished, PTFE Coated",
    "Temperature Range: -200°C to +800°C depending on grade",
    "Corrosion Resistance: Excellent in marine, chemical, and food environments",
    "Testing: PMI Test, Hardness Test, Proof Load Test, Torque Test",
    "Special Features: Prevailing torque, vibration resistant, self-locking options"
  ];

  const nutTypes = [
    {
      name: "Hex Nuts",
      description: "Standard hexagonal nuts for general purpose applications with metric and imperial threading",
      grades: ["SS 304", "SS 316L", "Duplex 2205", "A2-70", "A4-80"],
      sizes: "M3-M100, #4-4\"",
      standards: ["DIN 934", "ISO 4032", "ANSI B18.2.2"],
      applications: ["General machinery", "Structural", "Marine", "Chemical"],
      features: ["Standard height", "Chamfered edges", "Machine threads"],
      image: "https://5.imimg.com/data5/SELLER/Default/2023/3/291916365/PS/WK/TN/31502840/stainless-steel-fasteners-250x250.jpg"
    },
    {
      name: "Nyloc Nuts (Lock Nuts)",
      description: "Self-locking nuts with nylon insert for vibration resistance and prevailing torque",
      grades: ["SS 304", "SS 316L", "A2-70", "A4-80"],
      sizes: "M3-M48, #4-2\"",
      standards: ["DIN 985", "ISO 7040", "ANSI B18.2.27"],
      applications: ["Automotive", "Aerospace", "Vibrating machinery", "Critical joints"],
      features: ["Nylon insert", "Reusable", "Temperature resistant"],
      image: "https://5.imimg.com/data5/SELLER/Default/2024/12/470522801/FX/AD/VP/69800097/stainless-steel-fasteners-manufacturers-250x250.jpg"
    },
    {
      name: "Flange Nuts",
      description: "Nuts with built-in washer flange for increased bearing surface and load distribution",
      grades: ["SS 304", "SS 316", "SS 321", "Duplex"],
      sizes: "M5-M20, 3/16\"-3/4\"",
      standards: ["DIN 6923", "ISO 4161", "JIS B1190"],
      applications: ["Sheet metal", "Thin materials", "HVAC", "Electronics"],
      features: ["Integrated washer", "No separate washer needed", "Even load distribution"],
      image: "https://5.imimg.com/data5/SELLER/Default/2024/1/379246059/XC/CD/CI/4256871/ss-foundation-bolt-250x250.webp"
    },
    {
      name: "Square Nuts",
      description: "Four-sided nuts for applications requiring non-rotation in square holes or slots",
      grades: ["SS 304", "SS 316L", "SS 321"],
      sizes: "M5-M30, 3/16\"-1.25\"",
      standards: ["DIN 557", "ISO 4036", "ANSI B18.2.13"],
      applications: ["Furniture", "Wood construction", "Channel fittings", "T-slots"],
      features: ["Four-sided grip", "Prevents rotation", "Large bearing surface"],
      image: "https://5.imimg.com/data5/SELLER/Default/2024/3/396905667/GJ/DV/UM/549408/super-duplex-steel-2507-fasteners-250x250.jpg"
    },
    {
      name: "Weld Nuts",
      description: "Square or hex nuts with projection welding capability for permanent attachment",
      grades: ["SS 304", "SS 316L", "SS 321"],
      sizes: "M4-M16, #6-5/8\"",
      standards: ["DIN 929", "ISO 4161", "AWS D1.3"],
      applications: ["Sheet metal assembly", "Automotive", "Appliances", "Enclosures"],
      features: ["Welding projections", "Permanent attachment", "Flush mounting"],
      image: "https://5.imimg.com/data5/SELLER/Default/2023/9/347650627/GC/SP/JQ/1566860/industrial-metal-fasteners-250x250.jpg"
    },
    {
      name: "Thin Nuts (Jam Nuts)",
      description: "Reduced height nuts for limited space applications and locking against standard nuts",
      grades: ["SS 304", "SS 316L", "A2-70", "A4-80"],
      sizes: "M3-M48, #4-2\"",
      standards: ["DIN 439", "ISO 4035", "ANSI B18.2.2"],
      applications: ["Lock nuts", "Space constraints", "Fine adjustment", "Double nutting"],
      features: ["Reduced height", "Space saving", "Lock nut function"],
      image: "https://5.imimg.com/data5/SELLER/Default/2022/12/RZ/CM/AZ/1437532/ss-fasteners-250x250.jpg"
    }
  ];

  const materialGrades = [
    {
      grade: "SS 304",
      description: "General purpose austenitic stainless steel",
      composition: "18% Cr, 8% Ni",
      hardness: "HRB 80-90",
      applications: "Food processing, architectural, general industrial",
      corrosionResistance: "Good in mild environments"
    },
    {
      grade: "SS 316L",
      description: "Low carbon molybdenum bearing marine grade",
      composition: "18% Cr, 10% Ni, 2% Mo",
      hardness: "HRB 85-95",
      applications: "Marine, pharmaceutical, chemical processing",
      corrosionResistance: "Excellent in chloride environments"
    },
    {
      grade: "SS 321",
      description: "Titanium stabilized for high temperature",
      composition: "18% Cr, 10% Ni, Ti stabilized",
      hardness: "HRB 85-95",
      applications: "High temperature, exhaust systems, aerospace",
      corrosionResistance: "Good with carbide precipitation resistance"
    },
    {
      grade: "Duplex 2205",
      description: "Duplex structure with high strength",
      composition: "22% Cr, 5% Ni, 3% Mo",
      hardness: "HRC 22-28",
      applications: "Oil & gas, marine, chemical processing",
      corrosionResistance: "Superior to austenitic grades"
    }
  ];

  const sizeSpecifications = [
    { metric: "M3", imperial: "#4-40", hexSize: "5.5mm", height: "2.4mm", proofLoad: "340N" },
    { metric: "M4", imperial: "#6-32", hexSize: "7mm", height: "3.2mm", proofLoad: "600N" },
    { metric: "M5", imperial: "#8-32", hexSize: "8mm", height: "4.0mm", proofLoad: "950N" },
    { metric: "M6", imperial: "1/4-20", hexSize: "10mm", height: "5.0mm", proofLoad: "1360N" },
    { metric: "M8", imperial: "5/16-18", hexSize: "13mm", height: "6.5mm", proofLoad: "2400N" },
    { metric: "M10", imperial: "3/8-16", hexSize: "17mm", height: "8.0mm", proofLoad: "3800N" },
    { metric: "M12", imperial: "1/2-13", hexSize: "19mm", height: "10.0mm", proofLoad: "5500N" },
    { metric: "M16", imperial: "5/8-11", hexSize: "24mm", height: "13.0mm", proofLoad: "9800N" },
    { metric: "M20", imperial: "3/4-10", hexSize: "30mm", height: "16.0mm", proofLoad: "15300N" },
    { metric: "M24", imperial: "1-8", hexSize: "36mm", height: "19.0mm", proofLoad: "22000N" }
  ];

  const applications = [
    "Marine and Offshore Structures - Superior corrosion resistance in saltwater",
    "Chemical Processing Plants - Resistance to aggressive chemical environments",
    "Food Processing Equipment - FDA approved grades for food contact applications",
    "Pharmaceutical Manufacturing - Clean room compatible and sterilizable",
    "Power Generation Equipment - High temperature and pressure applications",
    "Water Treatment Systems - Chloride and chemical resistance",
    "Architectural Applications - Aesthetic appeal with long-term durability",
    "Automotive Industry - Exhaust systems and high temperature applications"
  ];

  const features = [
    { icon: Shield, title: "Corrosion Resistant", desc: "Superior resistance to rust, chemicals, and marine environments" },
    { icon: TrendingUp, title: "High Strength", desc: "Excellent load bearing capacity and durability" },
    { icon: Award, title: "Quality Certified", desc: "Mill test certificates and third-party inspection" },
    { icon: Wrench, title: "Precision Threads", desc: "Accurate thread profile and tolerance control" },
    { icon: Package, title: "Complete Size Range", desc: "Metric and imperial sizes available" },
    { icon: Target, title: "Application Specific", desc: "Specialized designs for specific requirements" }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Nuts - SS 304, 316L Hex Nuts, Nyloc, Flange, Square, Weld Nuts | Mumbai Manufacturer"
        description="Premium stainless steel nuts manufacturer in Mumbai. SS 304, 316L, 321, Duplex hex nuts, nyloc lock nuts, flange nuts, square nuts, weld nuts. Marine grade, food grade SS nuts."
        keywords="stainless steel nuts, SS 304 nuts, SS 316L nuts, hex nuts stainless steel, nyloc nuts, lock nuts, flange nuts, square nuts, weld nuts, thin nuts, jam nuts, marine grade nuts, food grade nuts, chemical resistant nuts, duplex steel nuts, Mumbai nuts manufacturer, A2-70 nuts, A4-80 nuts, DIN 934 nuts, ISO 4032 nuts"
        category="Fasteners"
        productName="Stainless Steel Nuts"
        specifications={specifications}
        canonicalUrl="/product/fasteners/ss-nuts"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Stainless Steel Nuts</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Stainless Steel Nuts
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                Complete range of corrosion-resistant SS nuts including hex, nyloc, flange, square, and weld nuts
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-get-quote">
                  Get Quote Now
                </Link>
                <Link href="#nut-types" className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-view-products">
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
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="features-title">
                Why Choose Our Stainless Steel Nuts?
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

        {/* Nut Types Grid */}
        <section id="nut-types" className="py-16 bg-gray-50" data-testid="nut-types-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-4" data-testid="nut-types-title">
                Stainless Steel Nut Types
              </h2>
              <p className="text-center text-gray-600 mb-12 text-lg">
                Comprehensive range of stainless steel nuts for every industrial application
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {nutTypes.map((nut, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden" data-testid={`nut-${index}`}>
                    <img 
                      src={nut.image} 
                      alt={nut.name}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-navy-primary mb-3">{nut.name}</h3>
                      <p className="text-gray-600 mb-4">{nut.description}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-1">Available Grades:</h4>
                          <div className="flex flex-wrap gap-1">
                            {nut.grades.map((grade, gradeIndex) => (
                              <span key={gradeIndex} className="bg-gold-primary/20 text-navy-primary px-2 py-1 rounded text-xs font-medium">
                                {grade}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-1">Size Range:</h4>
                          <p className="text-sm text-gray-600">{nut.sizes}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-1">Standards:</h4>
                          <p className="text-sm text-gray-600">{nut.standards.join(", ")}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-1">Key Features:</h4>
                          <p className="text-sm text-gray-600">{nut.features.join(", ")}</p>
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

        {/* Size Specifications Table */}
        <section className="py-16 bg-white" data-testid="size-specs-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="size-specs-title">
                Detailed Size Specifications
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="size-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Metric Size</th>
                      <th className="px-4 py-3 text-left">Imperial Equivalent</th>
                      <th className="px-4 py-3 text-left">Hex Size (mm)</th>
                      <th className="px-4 py-3 text-left">Height (mm)</th>
                      <th className="px-4 py-3 text-left">Proof Load (N)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {sizeSpecifications.map((spec, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">{spec.metric}</td>
                        <td className="px-4 py-3">{spec.imperial}</td>
                        <td className="px-4 py-3">{spec.hexSize}</td>
                        <td className="px-4 py-3">{spec.height}</td>
                        <td className="px-4 py-3">{spec.proofLoad}</td>
                      </tr>
                    ))}
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
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="grades-title">
                Stainless Steel Grades & Properties
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="grades-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Grade</th>
                      <th className="px-6 py-4 text-left">Description</th>
                      <th className="px-6 py-4 text-left">Composition</th>
                      <th className="px-6 py-4 text-left">Hardness</th>
                      <th className="px-6 py-4 text-left">Applications</th>
                      <th className="px-6 py-4 text-left">Corrosion Resistance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {materialGrades.map((material, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">{material.grade}</td>
                        <td className="px-6 py-4">{material.description}</td>
                        <td className="px-6 py-4">{material.composition}</td>
                        <td className="px-6 py-4">{material.hardness}</td>
                        <td className="px-6 py-4">{material.applications}</td>
                        <td className="px-6 py-4">{material.corrosionResistance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 bg-white" data-testid="specifications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="specifications-title">
                Technical Specifications & Applications
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-lg shadow-md" data-testid="specifications-list">
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
                <div className="bg-gray-50 p-8 rounded-lg shadow-md" data-testid="applications-list">
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
        <section className="py-16 bg-gray-50" data-testid="keywords-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-8" data-testid="keywords-title">
                Popular Stainless Steel Nut Searches
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "SS 304 Hex Nuts", "SS 316L Nuts", "Nyloc Lock Nuts", "Marine Grade Nuts",
                  "Food Grade SS Nuts", "Flange Nuts Stainless", "Square Nuts SS", "Weld Nuts SS 316",
                  "Duplex Steel Nuts", "Chemical Resistant Nuts", "High Temperature Nuts", "A2-70 Nuts",
                  "A4-80 Nuts", "DIN 934 Nuts", "ISO 4032 Nuts", "Thin Jam Nuts"
                ].map((keyword, index) => (
                  <span key={index} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-navy-primary border border-gray-200 hover:shadow-md transition-shadow">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="cta-title">
                Need Stainless Steel Nuts for Your Project?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get the exact grade, size, and quantity with certified mill test certificates
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
                Get SS Nuts Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}