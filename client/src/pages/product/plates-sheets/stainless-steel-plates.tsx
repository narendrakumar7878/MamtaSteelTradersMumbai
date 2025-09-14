import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function StainlessSteelPlates() {
  // Comprehensive stainless steel grades data for SEO optimization
  const stainlessSteelGrades = [
    {
      id: "304",
      name: "304 Stainless Steel Plates",
      shortName: "SS 304",
      image: "https://images.unsplash.com/photo-1565611124498-d8c4e0a6b7e5?w=300&h=300&fit=crop&crop=center",
      description: "General purpose austenitic stainless steel with excellent corrosion resistance and formability. Most widely used grade for commercial applications.",
      chemicalComposition: "18-20% Chromium, 8-10.5% Nickel, ≤0.08% Carbon, ≤2% Manganese, ≤1% Silicon",
      applications: ["Food processing equipment", "Kitchen appliances", "Chemical containers", "Architectural applications"],
      specifications: "ASTM A240, ASME SA240, EN 10028-7",
    },
    {
      id: "304L",
      name: "304L Stainless Steel Plates", 
      shortName: "SS 304L",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=300&fit=crop&crop=center",
      description: "Low carbon version of 304 with superior weldability and reduced carbide precipitation. Ideal for welded constructions.",
      chemicalComposition: "18-20% Chromium, 8-12% Nickel, ≤0.03% Carbon, ≤2% Manganese, ≤1% Silicon",
      applications: ["Pressure vessels", "Heat exchangers", "Pharmaceutical equipment", "Marine applications"],
      specifications: "ASTM A240, ASME SA240, EN 10028-7"
    },
    {
      id: "316",
      name: "316 Stainless Steel Plates",
      shortName: "SS 316", 
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&crop=center",
      description: "Molybdenum-bearing austenitic stainless steel with superior corrosion resistance, especially in chloride environments.",
      chemicalComposition: "16-18% Chromium, 10-14% Nickel, 2-3% Molybdenum, ≤0.08% Carbon",
      applications: ["Marine equipment", "Chemical processing", "Medical implants", "Coastal architecture"],
      specifications: "ASTM A240, ASME SA240, EN 10028-7"
    },
    {
      id: "316L",
      name: "316L Stainless Steel Plates",
      shortName: "SS 316L",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=300&h=300&fit=crop&crop=center", 
      description: "Low carbon variant of 316 with enhanced corrosion resistance and excellent weldability. Premium grade for critical applications.",
      chemicalComposition: "16-18% Chromium, 10-14% Nickel, 2-3% Molybdenum, ≤0.03% Carbon",
      applications: ["Surgical instruments", "Pharmaceutical equipment", "Food processing", "Oil and gas industry"],
      specifications: "ASTM A240, ASME SA240, EN 10028-7"
    },
    {
      id: "317L",
      name: "317L Stainless Steel Plates",
      shortName: "SS 317L",
      image: "https://images.unsplash.com/photo-1565611124498-d8c4e0a6b7e5?w=300&h=300&fit=crop&crop=center",
      description: "Super austenitic stainless steel with higher molybdenum content for enhanced corrosion resistance in aggressive environments.",
      chemicalComposition: "18-20% Chromium, 11-15% Nickel, 3-4% Molybdenum, ≤0.03% Carbon",
      applications: ["Chemical processing", "Pulp and paper industry", "Pollution control equipment", "Seawater applications"],
      specifications: "ASTM A240, ASME SA240, EN 10028-7"
    },
    {
      id: "321",
      name: "321 Stainless Steel Plates",
      shortName: "SS 321",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=300&fit=crop&crop=center",
      description: "Titanium stabilized austenitic stainless steel with excellent high-temperature properties and intergranular corrosion resistance.",
      chemicalComposition: "17-19% Chromium, 9-12% Nickel, 5×C min Ti, ≤0.08% Carbon",
      applications: ["High temperature applications", "Jet engine parts", "Heat exchangers", "Furnace equipment"],
      specifications: "ASTM A240, ASME SA240, EN 10028-7"
    },
    {
      id: "310",
      name: "310 Stainless Steel Plates",
      shortName: "SS 310",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&crop=center",
      description: "High chromium-nickel austenitic stainless steel with excellent oxidation resistance at elevated temperatures up to 1040°C.",
      chemicalComposition: "24-26% Chromium, 19-22% Nickel, ≤0.25% Carbon, ≤2% Manganese",
      applications: ["Furnace equipment", "Heat treatment fixtures", "Combustion chambers", "Kiln furniture"],
      specifications: "ASTM A240, ASME SA240, EN 10028-7"
    },
    {
      id: "309",
      name: "309 Stainless Steel Plates",
      shortName: "SS 309",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=300&h=300&fit=crop&crop=center",
      description: "High alloy austenitic stainless steel with excellent oxidation resistance and strength at high temperatures.",
      chemicalComposition: "22-24% Chromium, 12-15% Nickel, ≤0.20% Carbon, ≤2% Manganese",
      applications: ["Heat exchangers", "Furnace parts", "Aircraft components", "Thermal processing equipment"],
      specifications: "ASTM A240, ASME SA240, EN 10028-7"
    },
    {
      id: "15-5PH",
      name: "15-5PH Stainless Steel Plates",
      shortName: "15-5PH",
      image: "https://images.unsplash.com/photo-1565611124498-d8c4e0a6b7e5?w=300&h=300&fit=crop&crop=center",
      description: "Precipitation hardening stainless steel with high strength, hardness and moderate corrosion resistance. UNS S15500.",
      chemicalComposition: "14-15.5% Chromium, 3.5-5.5% Nickel, 2.5-4.5% Copper, ≤0.07% Carbon",
      applications: ["Aerospace components", "Valves and fittings", "Gears and shafts", "Nuclear reactor components"],
      specifications: "AMS 5862, ASTM A693, UNS S15500"
    },
    {
      id: "17-4PH",
      name: "17-4PH Stainless Steel Plates", 
      shortName: "17-4PH",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=300&fit=crop&crop=center",
      description: "Precipitation hardening stainless steel with excellent strength and corrosion resistance. Widely used in aerospace and industrial applications.",
      chemicalComposition: "15.5-17.5% Chromium, 3-5% Nickel, 3-5% Copper, 0.15-0.45% Niobium",
      applications: ["Aerospace structural components", "Chemical processing equipment", "Paper mill equipment", "Pump shafts"],
      specifications: "AMS 5604, ASTM A564, UNS S17400"
    },
    {
      id: "253MA",
      name: "253MA Stainless Steel Plates",
      shortName: "253MA",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&crop=center",
      description: "High temperature austenitic stainless steel with excellent oxidation resistance and creep strength at elevated temperatures.",
      chemicalComposition: "20-22% Chromium, 10-12% Nickel, 1.4-2.0% Silicon, 0.14-0.20% Nitrogen",
      applications: ["Power generation", "Petrochemical furnaces", "Heat treatment equipment", "Thermal processing"],
      specifications: "ASTM A240, EN 10028-7, UNS S30815"
    },
    {
      id: "420J1",
      name: "420J1 Stainless Steel Plates",
      shortName: "420J1",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=300&h=300&fit=crop&crop=center",
      description: "Martensitic stainless steel with good hardness and wear resistance. Equivalent to 420S1, widely used in cutlery applications.",
      chemicalComposition: "12-14% Chromium, ≤0.16% Carbon, ≤1% Manganese, ≤1% Silicon",
      applications: ["Cutlery and kitchen knives", "Surgical instruments", "Valve components", "Pump parts"],
      specifications: "JIS G4303, ASTM A240, UNS S42000"
    },
    {
      id: "410",
      name: "410 Stainless Steel Plates",
      shortName: "SS 410",
      image: "https://images.unsplash.com/photo-1565611124498-d8c4e0a6b7e5?w=300&h=300&fit=crop&crop=center",
      description: "General purpose martensitic stainless steel with good corrosion resistance and high strength after heat treatment.",
      chemicalComposition: "11.5-13.5% Chromium, ≤0.15% Carbon, ≤1% Manganese, ≤1% Silicon",
      applications: ["Pump shafts", "Bolts and nuts", "Valve trim", "Turbine blades"],
      specifications: "ASTM A240, ASME SA240, EN 10028-7"
    },
    {
      id: "430",
      name: "430 Stainless Steel Plates",
      shortName: "SS 430", 
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=300&fit=crop&crop=center",
      description: "Ferritic stainless steel with good corrosion resistance and formability. Magnetic properties and cost-effective solution.",
      chemicalComposition: "16-18% Chromium, ≤0.12% Carbon, ≤1% Manganese, ≤1% Silicon",
      applications: ["Automotive trim", "Kitchen equipment", "Architectural applications", "Decorative applications"],
      specifications: "ASTM A240, ASME SA240, EN 10028-7"
    },
    {
      id: "904L",
      name: "904L Stainless Steel Plates",
      shortName: "SS 904L",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&crop=center",
      description: "Super austenitic stainless steel with exceptional corrosion resistance in aggressive environments including sulfuric acid.",
      chemicalComposition: "19-23% Chromium, 23-28% Nickel, 4-5% Molybdenum, 1.5% Copper",
      applications: ["Chemical processing", "Oil and gas industry", "Pollution control", "Seawater desalination"],
      specifications: "ASTM A240, ASME SA240, EN 10028-7"
    },
    {
      id: "347",
      name: "347 Stainless Steel Plates",
      shortName: "SS 347",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=300&h=300&fit=crop&crop=center",
      description: "Niobium stabilized austenitic stainless steel with excellent high temperature properties and intergranular corrosion resistance.",
      chemicalComposition: "17-19% Chromium, 9-13% Nickel, 10×C min Nb, ≤0.08% Carbon",
      applications: ["High temperature applications", "Aircraft exhaust systems", "Pressure vessels", "Heat exchangers"],
      specifications: "ASTM A240, ASME SA240, EN 10028-7"
    },
    {
      id: "2205",
      name: "2205 Duplex Stainless Steel Plates",
      shortName: "2205 Duplex",
      image: "https://images.unsplash.com/photo-1565611124498-d8c4e0a6b7e5?w=300&h=300&fit=crop&crop=center",
      description: "Duplex stainless steel with excellent strength and pitting corrosion resistance. Combines austenitic and ferritic properties.",
      chemicalComposition: "21-23% Chromium, 4.5-6.5% Nickel, 2.5-3.5% Molybdenum, 0.08-0.20% Nitrogen",
      applications: ["Oil and gas industry", "Chemical processing", "Marine applications", "Pressure vessels"],
      specifications: "ASTM A240, ASME SA240, EN 10028-7"
    },
    {
      id: "2507",
      name: "2507 Super Duplex Stainless Steel Plates",
      shortName: "2507 Super Duplex",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=300&fit=crop&crop=center",
      description: "Super duplex stainless steel with exceptional corrosion resistance and high strength for extreme service conditions.",
      chemicalComposition: "24-26% Chromium, 6-8% Nickel, 3-5% Molybdenum, 0.24-0.32% Nitrogen",
      applications: ["Offshore oil platforms", "Chemical processing", "Seawater systems", "Heat exchangers"],
      specifications: "ASTM A240, ASME SA240, EN 10028-7"
    }
  ];

  const specifications = [
    "ASTM A240/A240M - Standard Specification for Chromium and Chromium-Nickel Stainless Steel Plate, Sheet, and Strip",
    "ASTM A167 - Standard Specification for Stainless and Heat-Resisting Chromium-Nickel Steel Plate, Sheet, and Strip",
    "ASTM A693 - Standard Specification for Precipitation-Hardening Stainless Steel Plate, Sheet, and Strip",
    "JIS G4304/G4305 - Hot-rolled and Cold-rolled Stainless Steel Plates",
    "EN 10028-7 - Flat products made of steels for pressure purposes",
    "Thickness Range: 0.3mm to 100mm",
    "Width: Up to 2500mm | Length: Up to 12000mm",
    "Grades: 304, 304L, 316, 316L, 317L, 321, 347, 310, 309, 410, 430, 904L, 15-5PH, 17-4PH, 253MA, Duplex 2205, Super Duplex 2507"
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
        title="Stainless Steel Plates & Sheets - 304, 316, 304L, 316L, 321, 310 & More | Premium Supplier"
        description="High-quality stainless steel plates and sheets in austenitic, duplex, and precipitation hardening grades. From standard 304/316 to specialty grades like 904L and duplex 2205. ASTM certified with multiple surface finishes. Expert material selection guidance and custom cutting services available."
        keywords="stainless steel plates, stainless steel sheets, austenitic stainless steel, duplex stainless steel, precipitation hardening steel, ASTM A240, mill test certificate, custom cutting service"
        category="Plates & Sheets"
        productName="Stainless Steel Plates & Sheets"
        specifications={specifications}
        canonicalUrl="/product/plates-sheets/stainless-steel-plates"
      />

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Stainless Steel Plates and Sheets",
            "description": "Comprehensive range of premium stainless steel plates in all standard and specialty grades",
            "numberOfItems": stainlessSteelGrades.length,
            "itemListElement": stainlessSteelGrades.map((grade, index) => ({
              "@type": "Product",
              "position": index + 1,
              "name": grade.name,
              "description": grade.description,
              "sku": grade.id,
              "material": "Stainless Steel",
              "category": "Plates & Sheets",
              "manufacturer": {
                "@type": "Organization",
                "name": "Mamta Steel"
              },
              "brand": {
                "@type": "Brand",
                "name": "Mamta Steel"
              },
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Chemical Composition",
                  "value": grade.chemicalComposition
                },
                {
                  "@type": "PropertyValue", 
                  "name": "Standards",
                  "value": grade.specifications
                },
                {
                  "@type": "PropertyValue",
                  "name": "Grade",
                  "value": grade.shortName
                }
              ],
              "applicationCategory": grade.applications,
              "url": `/product/plates-sheets/stainless-steel-plates#${grade.id}`,
              "image": grade.image,
              "offers": {
                "@type": "Offer",
                "availability": "https://schema.org/InStock",
                "priceCurrency": "INR",
                "seller": {
                  "@type": "Organization",
                  "name": "Mamta Steel",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-98765-43210",
                    "contactType": "sales"
                  }
                }
              }
            }))
          })
        }}
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

        {/* Comprehensive Stainless Steel Grades Gallery */}
        <section className="py-16 bg-white" data-testid="grades-gallery-section">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-6" data-testid="grades-title">
                  Complete Range of Stainless Steel Plates & Sheets
                </h2>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto" data-testid="grades-subtitle">
                  Discover our comprehensive collection of premium stainless steel plates in all standard and specialty grades. Each grade is engineered for specific applications with detailed technical specifications and superior quality assurance.
                </p>
              </div>

              {/* Grade Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {stainlessSteelGrades.map((grade, index) => (
                  <div 
                    key={grade.id} 
                    className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group" 
                    data-testid={`grade-card-${grade.id}`}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <img 
                        src={grade.image} 
                        alt={grade.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading={index < 8 ? "eager" : "lazy"}
                        data-testid={`grade-image-${grade.id}`}
                      />
                      <div className="absolute top-4 right-4 bg-navy-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                        {grade.shortName}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-navy-primary mb-3 line-clamp-2" data-testid={`grade-name-${grade.id}`}>
                        {grade.name}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3" data-testid={`grade-description-${grade.id}`}>
                        {grade.description}
                      </p>

                      {/* Chemical Composition */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-navy-primary mb-2">Chemical Composition:</h4>
                        <p className="text-xs text-gray-600 line-clamp-2" data-testid={`grade-composition-${grade.id}`}>
                          {grade.chemicalComposition}
                        </p>
                      </div>

                      {/* Applications */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-navy-primary mb-2">Key Applications:</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {grade.applications.slice(0, 3).map((app, appIndex) => (
                            <li key={appIndex} className="flex items-start" data-testid={`grade-app-${grade.id}-${appIndex}`}>
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                              {app}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Specifications */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-navy-primary mb-2">Standards:</h4>
                        <p className="text-xs text-gray-600" data-testid={`grade-specs-${grade.id}`}>
                          {grade.specifications}
                        </p>
                      </div>

                      {/* CTA Button */}
                      <div className="pt-4 border-t border-gray-100">
                        <Link 
                          href="/contact" 
                          className="w-full bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-2 px-4 rounded-lg transition-colors duration-300 text-center text-sm block"
                          data-testid={`grade-cta-${grade.id}`}
                        >
                          Get {grade.shortName} Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Call to Action */}
              <div className="mt-16 text-center bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-navy-primary mb-4" data-testid="enhanced-cta-title">
                  Need Help Selecting the Right Grade?
                </h3>
                <p className="text-gray-600 mb-6 max-w-3xl mx-auto" data-testid="enhanced-cta-description">
                  Our technical experts can help you choose the perfect stainless steel grade for your specific application. Get professional guidance on material selection, specifications, and custom requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="bg-navy-primary hover:bg-navy-secondary text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                    data-testid="enhanced-cta-contact"
                  >
                    Consult Our Experts
                  </Link>
                  <a 
                    href="tel:+919876543210" 
                    className="border-2 border-navy-primary text-navy-primary hover:bg-navy-primary hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
                    data-testid="enhanced-cta-call"
                  >
                    Call: +91 98765 43210
                  </a>
                </div>
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

        {/* Chemical Composition Table */}
        <section className="py-16 bg-gray-50" data-testid="composition-section">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="composition-title">
                Chemical Composition of Stainless Steel Grades
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="composition-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Grade</th>
                      <th className="px-4 py-3 text-left">Carbon (C)</th>
                      <th className="px-4 py-3 text-left">Chromium (Cr)</th>
                      <th className="px-4 py-3 text-left">Nickel (Ni)</th>
                      <th className="px-4 py-3 text-left">Molybdenum (Mo)</th>
                      <th className="px-4 py-3 text-left">Other Elements</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-navy-primary">304</td>
                      <td className="px-4 py-3">≤0.08%</td>
                      <td className="px-4 py-3">18-20%</td>
                      <td className="px-4 py-3">8-10.5%</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">≤2% Mn, ≤1% Si</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-navy-primary">304L</td>
                      <td className="px-4 py-3">≤0.03%</td>
                      <td className="px-4 py-3">18-20%</td>
                      <td className="px-4 py-3">8-12%</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">≤2% Mn, ≤1% Si</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-navy-primary">316</td>
                      <td className="px-4 py-3">≤0.08%</td>
                      <td className="px-4 py-3">16-18%</td>
                      <td className="px-4 py-3">10-14%</td>
                      <td className="px-4 py-3">2-3%</td>
                      <td className="px-4 py-3">≤2% Mn, ≤1% Si</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-navy-primary">316L</td>
                      <td className="px-4 py-3">≤0.03%</td>
                      <td className="px-4 py-3">16-18%</td>
                      <td className="px-4 py-3">10-14%</td>
                      <td className="px-4 py-3">2-3%</td>
                      <td className="px-4 py-3">≤2% Mn, ≤1% Si</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-navy-primary">317L</td>
                      <td className="px-4 py-3">≤0.03%</td>
                      <td className="px-4 py-3">18-20%</td>
                      <td className="px-4 py-3">11-15%</td>
                      <td className="px-4 py-3">3-4%</td>
                      <td className="px-4 py-3">≤2% Mn, ≤1% Si</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-navy-primary">321</td>
                      <td className="px-4 py-3">≤0.08%</td>
                      <td className="px-4 py-3">17-19%</td>
                      <td className="px-4 py-3">9-12%</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">5×C min Ti</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-navy-primary">347</td>
                      <td className="px-4 py-3">≤0.08%</td>
                      <td className="px-4 py-3">17-19%</td>
                      <td className="px-4 py-3">9-13%</td>
                      <td className="px-4 py-3">-</td>
                      <td className="px-4 py-3">10×C min Nb</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-navy-primary">904L</td>
                      <td className="px-4 py-3">≤0.02%</td>
                      <td className="px-4 py-3">19-23%</td>
                      <td className="px-4 py-3">23-28%</td>
                      <td className="px-4 py-3">4-5%</td>
                      <td className="px-4 py-3">1.5% Cu</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-navy-primary">2205</td>
                      <td className="px-4 py-3">≤0.03%</td>
                      <td className="px-4 py-3">21-23%</td>
                      <td className="px-4 py-3">4.5-6.5%</td>
                      <td className="px-4 py-3">2.5-3.5%</td>
                      <td className="px-4 py-3">0.08-0.20% N</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-4 py-3 font-semibold text-navy-primary">2507</td>
                      <td className="px-4 py-3">≤0.03%</td>
                      <td className="px-4 py-3">24-26%</td>
                      <td className="px-4 py-3">6-8%</td>
                      <td className="px-4 py-3">3-5%</td>
                      <td className="px-4 py-3">0.24-0.32% N</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-4 text-center">
                All compositions are in weight percentage. Balance is Iron (Fe) with trace elements as per ASTM standards.
              </p>
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