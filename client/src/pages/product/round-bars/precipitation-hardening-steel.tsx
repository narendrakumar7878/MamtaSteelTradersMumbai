import { Link } from "wouter";
import ProductSEO from "@/components/ProductSEO";

const precipitationHardeningProducts = [
  {
    id: 1,
    name: "17-4 PH Round Bar",
    image: "https://textronsteelalloys.com/wp-content/uploads/2019/12/17-4PH-Round-Bar-Stockist-Supplier-300x300.jpg",
    description: "Premium 17-4 PH (630) precipitation hardening stainless steel round bars with excellent strength and corrosion resistance.",
    specifications: ["17-4 PH", "AISI 630", "High Strength", "Corrosion Resistant"],
    applications: ["Aerospace components", "Chemical processing", "Nuclear applications", "High-strength fasteners"]
  },
  {
    id: 2,
    name: "AISI 630 Round Bars (1.4542)",
    image: "https://textronsteelalloys.com/wp-content/uploads/2022/06/aisi-630-300x300.jpg",
    description: "High-performance AISI 630 (1.4542, 17-4PH) precipitation hardening stainless steel with superior mechanical properties.",
    specifications: ["AISI 630", "1.4542", "17-4PH", "PH Stainless Steel"],
    applications: ["Pump shafts", "Valve components", "Aircraft fittings", "Marine hardware"]
  },
  {
    id: 3,
    name: "AMS 5629 13-8Mo",
    image: "https://textronsteelalloys.com/wp-content/uploads/2025/04/AMS-5629-13-8Mo-300x300.jpg",
    description: "Aerospace-grade AMS 5629 13-8Mo (XM13, 1.4534, UNS S13800) with exceptional strength and toughness for critical applications.",
    specifications: ["AMS 5629", "13-8Mo", "XM13", "1.4534", "S13800"],
    applications: ["Aerospace structures", "Landing gear", "Missile components", "High-performance applications"]
  },
  {
    id: 4,
    name: "AMS 5643 17-4PH",
    image: "https://textronsteelalloys.com/wp-content/uploads/2025/05/AMS-5643-17-4PH-Round-Bar-300x300.jpg",
    description: "Aerospace-specification AMS 5643 17-4PH (1.4542, AISI 630) round bars for demanding aerospace and defense applications.",
    specifications: ["AMS 5643", "17-4PH", "1.4542", "AISI 630"],
    applications: ["Aerospace fasteners", "Jet engine parts", "Defense applications", "High-stress components"]
  },
  {
    id: 5,
    name: "AMS 5659 15-5PH",
    image: "https://textronsteelalloys.com/wp-content/uploads/2025/04/AMS-5659-15-5PH-300x300.jpg",
    description: "Premium AMS 5659 15-5PH (XM12, UNS S15500, 1.4545) with superior strength-to-weight ratio for aerospace applications.",
    specifications: ["AMS 5659", "15-5PH", "XM12", "S15500", "1.4545"],
    applications: ["Aerospace components", "High-strength bolts", "Springs", "Structural parts"]
  },
  {
    id: 6,
    name: "Inconel X750",
    image: "https://textronsteelalloys.com/wp-content/uploads/2020/09/inconel-x750-spring-wire-300x300.jpg",
    description: "High-temperature Inconel X750 precipitation hardening superalloy wire and rods for extreme temperature applications.",
    specifications: ["Inconel X750", "Superalloy", "High Temperature", "Spring Properties"],
    applications: ["Gas turbines", "Jet engines", "High-temperature springs", "Nuclear reactors"]
  }
];

const keywordSections = [
  {
    title: "Precipitation Hardening Applications",
    keywords: [
      "Aerospace Component Manufacturing",
      "High-Strength Fasteners",
      "Chemical Processing Equipment",
      "Nuclear Industry Applications",
      "Marine Hardware Systems",
      "Oil & Gas Components",
      "Defense Applications",
      "Precision Machined Parts"
    ]
  },
  {
    title: "PH Steel Grades & Standards",
    keywords: [
      "17-4PH 15-5PH 13-8Mo",
      "AISI 630 Steel",
      "AMS 5643 5659 5629",
      "1.4542 1.4545 1.4534",
      "UNS S17400 S15500",
      "Inconel X750 Superalloy",
      "Premium PH Steel India",
      "PH Steel Supplier Mumbai"
    ]
  }
];

export default function PrecipitationHardeningSteel() {
  return (
    <>
      <ProductSEO
        title="Precipitation Hardening Steel - 17-4PH, 15-5PH, 13-8Mo, AMS 5643 | Mamta Steel Traders"
        description="Premium precipitation hardening steel supplier in Mumbai. 17-4PH, 15-5PH, 13-8Mo, AISI 630, AMS 5643, 5659, 5629 grades for aerospace, chemical, nuclear & high-strength applications. Worldwide delivery with mill certificates."
        keywords="precipitation hardening steel, 17-4PH 15-5PH 13-8Mo, AISI 630, AMS 5643 5659 5629, PH steel, aerospace grade steel, Mumbai PH steel supplier, high strength stainless steel"
        canonicalUrl="/product/round-bars/precipitation-hardening-steel"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Breadcrumb */}
        <nav className="bg-white shadow-sm border-b" aria-label="Breadcrumb">
          <div className="container mx-auto px-4 py-3">
            <ol className="flex items-center space-x-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-blue-600 transition-colors" data-testid="breadcrumb-home">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/product/round-bars/round-bars" className="hover:text-blue-600 transition-colors" data-testid="breadcrumb-products">
                  Round Bars
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">Precipitation Hardening Steel</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
              Precipitation Hardening Steel Round Bars
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-4xl mx-auto" data-testid="hero-description">
              Leading supplier of 17-4PH, 15-5PH, 13-8Mo, AISI 630, AMS 5643, 5659, 5629 precipitation hardening steel round bars. 
              Perfect for aerospace, chemical processing, nuclear, and high-strength applications with exceptional mechanical properties.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors" 
                data-testid="cta-quote"
              >
                Get Quote Now
              </Link>
              <a 
                href="tel:+919819322576" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors" 
                data-testid="cta-call"
              >
                Call: +91 9819322576
              </a>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900" data-testid="products-heading">
              Precipitation Hardening Steel Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {precipitationHardeningProducts.map((product) => (
                <div 
                  key={product.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow border"
                  data-testid={`product-card-${product.id}`}
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Specifications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.specifications.map((spec, index) => (
                          <span 
                            key={index}
                            className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-900 mb-2">Applications:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {product.applications.slice(0, 3).map((app, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-1 h-1 bg-blue-500 rounded-full mr-2"></span>
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link 
                      href="/contact"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded font-medium transition-colors text-center block"
                      data-testid={`quote-button-${product.id}`}
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              PH Steel Technical Specifications
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">PH Steel Grades</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">ASTM Standards</h4>
                    <p className="text-gray-600 text-sm">A564, A693 - Precipitation hardening stainless steel bars and forgings</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">AMS Specifications</h4>
                    <p className="text-gray-600 text-sm">5643 (17-4PH), 5659 (15-5PH), 5629 (13-8Mo) - Aerospace material specifications</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">UNS Designations</h4>
                    <p className="text-gray-600 text-sm">S17400 (17-4PH), S15500 (15-5PH), S13800 (13-8Mo) - Standard designations</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Key Properties</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Ultra-high strength</li>
                      <li>• Excellent corrosion resistance</li>
                      <li>• Superior toughness</li>
                      <li>• Heat treatable</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Applications & Industries</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Aerospace Industry</h4>
                    <p className="text-gray-600 text-sm">Aircraft structures, landing gear, fasteners, jet engine components</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Chemical Processing</h4>
                    <p className="text-gray-600 text-sm">Pump shafts, valve components, reactor vessels, process equipment</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Nuclear Applications</h4>
                    <p className="text-gray-600 text-sm">Nuclear reactor components, fuel handling equipment, control mechanisms</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Defense Applications</h4>
                    <p className="text-gray-600 text-sm">Military vehicles, weapons systems, armor components, missile parts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Keywords Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Popular PH Steel Searches
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {keywordSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-semibold mb-6 text-gray-900">{section.title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {section.keywords.map((keyword, index) => (
                      <div 
                        key={index}
                        className="bg-white p-3 rounded border hover:shadow-md transition-shadow"
                      >
                        <span className="text-sm font-medium text-blue-700">{keyword}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Order Premium PH Steel?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Get competitive prices, mill test certificates, and worldwide delivery for all precipitation hardening steel grades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                data-testid="bottom-cta-quote"
              >
                Request Quote
              </Link>
              <a 
                href="mailto:mamtasteeltraders@gmail.com" 
                className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors"
                data-testid="bottom-cta-email"
              >
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}