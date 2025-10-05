import { Link } from "wouter";
import ProductSEO from "@/components/ProductSEO";
import ss_round_bar_mamta_steel_traders_img from "@/assets/SS ROUND BAR  MAMTA STEEL TRADERS.jpg";

const stainlessSteelProducts = [
  {
    id: 1,
    name: "1.4122 Round Bars (X39CrMo17-1)",
    image: ss_round_bar_mamta_steel_traders_img,
    description: "Premium 1.4122 (X39CrMo17-1) martensitic stainless steel round bars with excellent hardness and corrosion resistance.",
    specifications: ["1.4122 Grade", "X39CrMo17-1", "Martensitic SS", "High Hardness"],
    applications: ["Cutlery", "Surgical instruments", "Valve components", "Pump shafts"]
  },
  {
    id: 2,
    name: "316L Urea Grade (1.4435)",
    image: ss_round_bar_mamta_steel_traders_img,
    description: "High-quality 1.4435 (316L Urea Grade) with enhanced corrosion resistance for urea and chemical processing applications.",
    specifications: ["1.4435 Grade", "316L UG", "Urea Grade", "Enhanced Corrosion Resistant"],
    applications: ["Urea plants", "Chemical processing", "Fertilizer industry", "Process equipment"]
  },
  {
    id: 3,
    name: "904L Round Bar (1.4539)",
    image: ss_round_bar_mamta_steel_traders_img,
    description: "Super austenitic 904L (1.4539, N08904) stainless steel round bars with superior corrosion resistance in acids.",
    specifications: ["904L Grade", "1.4539", "N08904", "Super Austenitic"],
    applications: ["Chemical processing", "Pharmaceuticals", "Oil & gas", "Pulp & paper"]
  },
  {
    id: 4,
    name: "17-7PH Wire",
    image: ss_round_bar_mamta_steel_traders_img,
    description: "High-strength 17-7PH precipitation hardening stainless steel wire with excellent spring properties and corrosion resistance.",
    specifications: ["17-7PH Grade", "Spring Steel", "High Strength", "Corrosion Resistant"],
    applications: ["Springs", "Wire forms", "Fasteners", "Aerospace components"]
  },
  {
    id: 5,
    name: "304Cu2 Wire",
    image: ss_round_bar_mamta_steel_traders_img,
    description: "Premium 304Cu2 austenitic stainless steel wire with copper addition for enhanced deep drawing properties.",
    specifications: ["304Cu2 Grade", "Copper Modified", "Deep Drawing", "Austenitic SS"],
    applications: ["Deep drawing", "Wire forms", "Kitchen appliances", "Automotive parts"]
  },
  {
    id: 6,
    name: "317L Round Bar",
    image: ss_round_bar_mamta_steel_traders_img,
    description: "High-performance 317L stainless steel round bars with enhanced molybdenum content for superior corrosion resistance.",
    specifications: ["317L Grade", "High Molybdenum", "Corrosion Resistant", "Austenitic SS"],
    applications: ["Chemical processing", "Marine applications", "Pulp & paper", "Pharmaceuticals"]
  },
  {
    id: 7,
    name: "416 Round Bars (1.4005)",
    image: ss_round_bar_mamta_steel_traders_img,
    description: "Free machining 416 (1.4005, X12CrS13) martensitic stainless steel round bars with excellent machinability.",
    specifications: ["416 Grade", "1.4005", "X12CrS13", "Free Machining"],
    applications: ["Machined components", "Valve parts", "Pump components", "Fasteners"]
  },
  {
    id: 8,
    name: "430F Round Bars (S43020)",
    image: ss_round_bar_mamta_steel_traders_img,
    description: "Premium 430F (S43020, 1.4105) ferritic stainless steel round bars with superior machinability and magnetic properties.",
    specifications: ["430F Grade", "S43020", "1.4105", "Ferritic SS"],
    applications: ["Automotive parts", "Appliance components", "Hardware", "Machined parts"]
  },
  {
    id: 9,
    name: "A286 Round Bar",
    image: ss_round_bar_mamta_steel_traders_img,
    description: "High-temperature A286 (660) precipitation hardening stainless steel round bars for aerospace and high-temperature applications.",
    specifications: ["A286 Grade", "Alloy 660", "High Temperature", "Aerospace Grade"],
    applications: ["Aerospace components", "Gas turbines", "High-temperature fasteners", "Jet engine parts"]
  }
];

const keywordSections = [
  {
    title: "Stainless Steel Applications",
    keywords: [
      "Chemical Processing Equipment",
      "Food Processing Industry",
      "Pharmaceutical Manufacturing",
      "Marine Applications",
      "Architectural Hardware",
      "Automotive Components",
      "Aerospace Parts",
      "Oil & Gas Industry"
    ]
  },
  {
    title: "SS Grades & Standards",
    keywords: [
      "304 316 316L 317L Steel",
      "904L Super Austenitic",
      "17-7PH 15-5PH PH Steel",
      "416 430F Martensitic SS",
      "1.4301 1.4401 1.4404",
      "ASTM A276 A479 Standards",
      "Premium Stainless Steel India",
      "SS Round Bars Mumbai Supplier"
    ]
  }
];

export default function StainlessSteelRoundBars() {
  return (
    <>
      <ProductSEO
        title="Stainless Steel Round Bars - 304, 316L, 904L, 17-7PH, A286 | Mamta Steel Traders"
        description="Premium stainless steel round bars supplier in Mumbai. 304, 316L, 904L, 317L, 17-7PH, A286, 416, 430F grades with ASTM A276, A479 standards for chemical, food, pharmaceutical & marine applications. Worldwide delivery."
        keywords="stainless steel round bars, 304 316L 904L, 17-7PH A286, 416 430F, ASTM A276 A479, SS round bars Mumbai, stainless steel supplier India, chemical grade stainless steel"
        canonicalUrl="/product/round-bars/stainless-steel-round-bars"
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
              <li className="text-gray-900 font-medium">Stainless Steel Round Bars</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-heading md:text-heading font-bold mb-6" data-testid="hero-title">
              Premium Stainless Steel Round Bars
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-4xl mx-auto" data-testid="hero-description">
              Leading supplier of 304, 316L, 904L, 317L, 17-7PH, A286, 416, 430F stainless steel round bars. 
              Perfect for chemical processing, food industry, pharmaceuticals, marine, and architectural applications with superior corrosion resistance.
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
            <h2 className="text-2xl font-bold text-center mb-12 text-gray-900" data-testid="products-heading">
              Stainless Steel Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stainlessSteelProducts.map((product) => (
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
            <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">
              Stainless Steel Technical Specifications
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">SS Grades & Standards</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">ASTM Standards</h4>
                    <p className="text-gray-600 text-sm">A276, A479, A484 - Stainless steel bars, billets, and forgings specifications</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">EN Standards</h4>
                    <p className="text-gray-600 text-sm">1.4301 (304), 1.4401 (316), 1.4404 (316L) - European designations</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">JIS Standards</h4>
                    <p className="text-gray-600 text-sm">SUS304, SUS316L, SUS317L - Japanese stainless steel standards</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Key Properties</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Excellent corrosion resistance</li>
                      <li>• High strength-to-weight ratio</li>
                      <li>• Superior hygienic properties</li>
                      <li>• Temperature resistance</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Applications & Industries</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Food & Beverage</h4>
                    <p className="text-gray-600 text-sm">Food processing equipment, dairy industry, brewing, kitchen appliances</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Chemical Processing</h4>
                    <p className="text-gray-600 text-sm">Process vessels, heat exchangers, chemical reactors, piping systems</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Pharmaceutical</h4>
                    <p className="text-gray-600 text-sm">API manufacturing, clean room equipment, sterile processing</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Architecture & Construction</h4>
                    <p className="text-gray-600 text-sm">Architectural hardware, structural components, decorative elements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Keywords Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">
              Popular Stainless Steel Searches
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
            <h2 className="text-2xl font-bold mb-6">
              Ready to Order Premium Stainless Steel?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Get competitive prices, mill test certificates, and worldwide delivery for all stainless steel grades.
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