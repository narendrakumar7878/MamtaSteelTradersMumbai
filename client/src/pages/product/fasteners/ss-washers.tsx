import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Wrench, Package, Target } from "lucide-react";
import { Link } from "wouter";

export default function StainlessSteelWashers() {
  const specifications = [
    "Material Grades: SS 304, 304L, 316, 316L, 310, 321, 347, 904L, Duplex 2205, Super Duplex 2507",
    "Standards: DIN 125, DIN 127, ISO 7089, ISO 7093, ANSI/ASME B18.22.1, JIS B1256",
    "Size Range: M3 to M100 | 1/8\" to 4\" | Inner Diameter to Outer Diameter Ratio",
    "Thickness Range: 0.5mm to 12mm depending on size and application",
    "Surface Finish: Plain, Passivated, Electropolished, PTFE Coated, Zinc Plated",
    "Temperature Range: -200°C to +800°C depending on grade and application",
    "Load Distribution: Up to 3x increased bearing surface area",
    "Certifications: ASTM F436, ASTM A193, NACE MR0175, API 20E compliance"
  ];

  const washerTypes = [
    {
      name: "Plain Washers (Flat Washers)",
      description: "Standard flat washers for load distribution and surface protection in general applications",
      grades: ["SS 304", "SS 316L", "Duplex 2205", "A2", "A4"],
      sizes: "M3-M100, #6-4\"",
      thickness: "0.5mm-8mm",
      standards: ["DIN 125", "ISO 7089", "ASME B18.22.1"],
      applications: ["General assembly", "Structural", "Marine", "Chemical processing"],
      features: ["Even load distribution", "Surface protection", "Prevents embedment"],
      image: "https://5.imimg.com/data5/SELLER/Default/2023/3/291916365/PS/WK/TN/31502840/stainless-steel-fasteners-250x250.jpg"
    },
    {
      name: "Spring Washers (Lock Washers)",
      description: "Split ring washers providing spring tension and vibration resistance for threaded connections",
      grades: ["SS 304", "SS 316L", "A2-70", "A4-80"],
      sizes: "M3-M48, #4-2\"",
      thickness: "0.6mm-6mm",
      standards: ["DIN 127", "ISO 7980", "ASME B18.21.1"],
      applications: ["Vibrating machinery", "Automotive", "Electronics", "Dynamic loads"],
      features: ["Vibration resistance", "Preload maintenance", "Self-energizing"],
      image: "https://5.imimg.com/data5/SELLER/Default/2024/12/470522801/FX/AD/VP/69800097/stainless-steel-fasteners-manufacturers-250x250.jpg"
    },
    {
      name: "Lock Washers (Toothed)",
      description: "Internal and external toothed washers for positive locking and torque transmission",
      grades: ["SS 304", "SS 316", "SS 321"],
      sizes: "M4-M30, #6-1.25\"",
      thickness: "0.8mm-3mm",
      standards: ["DIN 6797", "ISO 6798", "Custom"],
      applications: ["Electronics", "Control panels", "Sheet metal", "Electrical connections"],
      features: ["Positive locking", "Torque transmission", "Anti-rotation"],
      image: "https://5.imimg.com/data5/SELLER/Default/2024/1/379246059/XC/CD/CI/4256871/ss-foundation-bolt-250x250.webp"
    },
    {
      name: "Fender Washers (Large Diameter)",
      description: "Oversized washers with large outer diameter for maximum load distribution",
      grades: ["SS 304", "SS 316L", "SS 321"],
      sizes: "M6-M20, 1/4\"-3/4\"",
      thickness: "1mm-5mm",
      standards: ["ASME B18.22.1", "Custom specifications"],
      applications: ["Roofing", "Signage", "Thin materials", "Repair applications"],
      features: ["Large bearing surface", "Prevents pull-through", "Even stress distribution"],
      image: "https://5.imimg.com/data5/SELLER/Default/2024/3/396905667/GJ/DV/UM/549408/super-duplex-steel-2507-fasteners-250x250.jpg"
    },
    {
      name: "Belleville Washers (Disc Springs)",
      description: "Conical spring washers providing high loads in minimal space with controlled deflection",
      grades: ["SS 316L", "SS 17-7 PH", "Duplex 2205"],
      sizes: "M4-M100, 3/16\"-4\"",
      thickness: "0.2mm-12mm",
      standards: ["DIN 2093", "ISO 19690", "ASME B18.21.2"],
      applications: ["Pressure vessels", "Valve assemblies", "Precision equipment", "Preload applications"],
      features: ["High spring rate", "Space efficient", "Predictable deflection"],
      image: "https://5.imimg.com/data5/SELLER/Default/2023/9/347650627/GC/SP/JQ/1566860/industrial-metal-fasteners-250x250.jpg"
    },
    {
      name: "Wave Washers",
      description: "Multi-wave spring washers for light to medium loads with controlled compression",
      grades: ["SS 304", "SS 316L", "SS 17-7 PH"],
      sizes: "M3-M48, #4-2\"",
      thickness: "0.3mm-3mm",
      standards: ["DIN 137", "Custom specifications"],
      applications: ["Electronics", "Bearings", "Automotive", "Precision instruments"],
      features: ["Continuous contact", "Low spring rate", "Smooth operation"],
      image: "https://5.imimg.com/data5/SELLER/Default/2022/12/RZ/CM/AZ/1437532/ss-fasteners-250x250.jpg"
    }
  ];

  const sizeChart = [
    { size: "M3", innerDia: "3.2mm", outerDia: "7mm", thickness: "0.5mm", loadRating: "250N" },
    { size: "M4", innerDia: "4.3mm", outerDia: "9mm", thickness: "0.8mm", loadRating: "400N" },
    { size: "M5", innerDia: "5.3mm", outerDia: "10mm", thickness: "1.0mm", loadRating: "620N" },
    { size: "M6", innerDia: "6.4mm", outerDia: "12mm", thickness: "1.6mm", loadRating: "900N" },
    { size: "M8", innerDia: "8.4mm", outerDia: "16mm", thickness: "1.6mm", loadRating: "1600N" },
    { size: "M10", innerDia: "10.5mm", outerDia: "20mm", thickness: "2.0mm", loadRating: "2500N" },
    { size: "M12", innerDia: "13.0mm", outerDia: "24mm", thickness: "2.5mm", loadRating: "3600N" },
    { size: "M16", innerDia: "17.0mm", outerDia: "30mm", thickness: "3.0mm", loadRating: "6400N" },
    { size: "M20", innerDia: "21.0mm", outerDia: "37mm", thickness: "3.0mm", loadRating: "10000N" },
    { size: "M24", innerDia: "25.0mm", outerDia: "44mm", thickness: "4.0mm", loadRating: "14500N" }
  ];

  const materialProperties = [
    {
      grade: "SS 304",
      description: "General purpose austenitic stainless steel",
      springRate: "Medium",
      tempRange: "-200°C to +300°C",
      corrosionResistance: "Good",
      magnetism: "Non-magnetic",
      applications: "General industrial, food processing"
    },
    {
      grade: "SS 316L",
      description: "Low carbon molybdenum bearing marine grade",
      springRate: "Medium",
      tempRange: "-200°C to +400°C",
      corrosionResistance: "Excellent",
      magnetism: "Non-magnetic",
      applications: "Marine, pharmaceutical, chemical"
    },
    {
      grade: "SS 17-7 PH",
      description: "Precipitation hardened spring steel",
      springRate: "High",
      tempRange: "-200°C to +300°C",
      corrosionResistance: "Good",
      magnetism: "Magnetic",
      applications: "Springs, high-stress applications"
    },
    {
      grade: "Duplex 2205",
      description: "Duplex structure with high strength",
      springRate: "High",
      tempRange: "-50°C to +300°C",
      corrosionResistance: "Superior",
      magnetism: "Magnetic",
      applications: "Oil & gas, high-strength requirements"
    }
  ];

  const applications = [
    "Marine and Offshore Structures - Superior corrosion resistance in saltwater environments",
    "Chemical Processing Equipment - Resistance to aggressive chemicals and high temperatures",
    "Food Processing Machinery - FDA approved grades for direct food contact applications",
    "Pharmaceutical Manufacturing - Clean room compatible and sterilizable materials",
    "Power Generation Plants - High temperature and pressure applications with load cycling",
    "Automotive Industry - Engine components and exhaust system applications",
    "Aerospace Applications - Lightweight, high strength, and vibration resistance",
    "Electronics Manufacturing - EMI shielding and precision assembly applications"
  ];

  const features = [
    { icon: Shield, title: "Corrosion Resistant", desc: "Superior resistance to rust, chemicals, and environmental conditions" },
    { icon: TrendingUp, title: "Load Distribution", desc: "Even stress distribution preventing material damage and joint failure" },
    { icon: Award, title: "Quality Certified", desc: "Mill test certificates and compliance with international standards" },
    { icon: Wrench, title: "Precision Manufactured", desc: "Tight tolerances for consistent performance and fit" },
    { icon: Package, title: "Complete Range", desc: "Full range of sizes, types, and materials available" },
    { icon: Target, title: "Application Specific", desc: "Specialized designs for specific load and environmental requirements" }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Washers - SS 304, 316L Plain, Spring, Lock, Belleville Washers | Mumbai Manufacturer"
        description="Premium stainless steel washers manufacturer. SS 304, 316L, 321 plain washers, spring washers, lock washers, belleville washers, wave washers. Marine grade, food grade SS washers."
        keywords="stainless steel washers, SS 304 washers, SS 316L washers, plain washers, flat washers, spring washers, lock washers, belleville washers, disc springs, wave washers, fender washers, toothed washers, marine grade washers, food grade washers, chemical resistant washers, duplex steel washers, washer manufacturer, DIN 125 washers, ISO 7089 washers, ASME B18.22.1 washers"
        category="Fasteners"
        productName="Stainless Steel Washers"
        specifications={specifications}
        canonicalUrl="/product/fasteners/ss-washers"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Stainless Steel Washers</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Stainless Steel Washers
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                Complete range of corrosion-resistant SS washers including plain, spring, lock, belleville, and wave washers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-get-quote">
                  Get Quote Now
                </Link>
                <Link href="#washer-types" className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-view-products">
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
                Why Choose Our Stainless Steel Washers?
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

        {/* Washer Types Grid */}
        <section id="washer-types" className="py-16 bg-gray-50" data-testid="washer-types-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-4" data-testid="washer-types-title">
                Stainless Steel Washer Types
              </h2>
              <p className="text-center text-gray-600 mb-12 text-lg">
                Comprehensive range of stainless steel washers for every industrial and commercial application
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {washerTypes.map((washer, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden" data-testid={`washer-${index}`}>
                    <img 
                      src={washer.image} 
                      alt={washer.name}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-navy-primary mb-3">{washer.name}</h3>
                      <p className="text-gray-600 mb-4">{washer.description}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-1">Available Grades:</h4>
                          <div className="flex flex-wrap gap-1">
                            {washer.grades.map((grade, gradeIndex) => (
                              <span key={gradeIndex} className="bg-gold-primary/20 text-navy-primary px-2 py-1 rounded text-xs font-medium">
                                {grade}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-1">Size Range:</h4>
                          <p className="text-sm text-gray-600">{washer.sizes}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-1">Thickness:</h4>
                          <p className="text-sm text-gray-600">{washer.thickness}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-1">Key Features:</h4>
                          <p className="text-sm text-gray-600">{washer.features.join(", ")}</p>
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

        {/* Size Chart */}
        <section className="py-16 bg-white" data-testid="size-chart-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="size-chart-title">
                Standard Washer Size Chart
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="size-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Size</th>
                      <th className="px-4 py-3 text-left">Inner Diameter</th>
                      <th className="px-4 py-3 text-left">Outer Diameter</th>
                      <th className="px-4 py-3 text-left">Thickness</th>
                      <th className="px-4 py-3 text-left">Load Rating</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {sizeChart.map((size, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">{size.size}</td>
                        <td className="px-4 py-3">{size.innerDia}</td>
                        <td className="px-4 py-3">{size.outerDia}</td>
                        <td className="px-4 py-3">{size.thickness}</td>
                        <td className="px-4 py-3">{size.loadRating}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Material Properties */}
        <section className="py-16 bg-gray-50" data-testid="material-properties-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="properties-title">
                Material Properties & Characteristics
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="properties-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Grade</th>
                      <th className="px-6 py-4 text-left">Description</th>
                      <th className="px-6 py-4 text-left">Spring Rate</th>
                      <th className="px-6 py-4 text-left">Temperature Range</th>
                      <th className="px-6 py-4 text-left">Corrosion Resistance</th>
                      <th className="px-6 py-4 text-left">Magnetism</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {materialProperties.map((material, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">{material.grade}</td>
                        <td className="px-6 py-4">{material.description}</td>
                        <td className="px-6 py-4">{material.springRate}</td>
                        <td className="px-6 py-4">{material.tempRange}</td>
                        <td className="px-6 py-4">{material.corrosionResistance}</td>
                        <td className="px-6 py-4">{material.magnetism}</td>
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
                Popular Stainless Steel Washer Searches
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "SS 304 Plain Washers", "SS 316L Flat Washers", "Spring Washers SS", "Lock Washers Stainless",
                  "Belleville Washers SS", "Wave Washers Stainless", "Marine Grade Washers", "Food Grade Washers",
                  "Chemical Resistant Washers", "Duplex Steel Washers", "Fender Washers SS", "Toothed Washers",
                  "DIN 125 Washers", "ISO 7089 Washers", "ASME B18.22.1", "Disc Springs SS"
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
                Need Stainless Steel Washers for Your Project?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get the exact grade, size, thickness, and quantity with certified mill test certificates
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
                Get SS Washers Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}