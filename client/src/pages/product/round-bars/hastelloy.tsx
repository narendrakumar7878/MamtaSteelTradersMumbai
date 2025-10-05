import { Link } from "wouter";
import ProductSEO from "@/components/ProductSEO";
import mamta_steel_traders000_img from "@/assets/MAMTA STEEL TRADERS000.jpg";

const hastelloyProducts = [
  {
    id: 1,
    name: "Hastelloy B2 Round Bars",
    image: mamta_steel_traders000_img,
    description: "Premium Hastelloy B2 (UNS N10665, DIN 2.4617) round bars with excellent resistance to hydrochloric acid and reducing environments.",
    specifications: ["Hastelloy B2", "UNS N10665", "DIN 2.4617", "Molybdenum Based"],
    applications: ["Chemical processing", "Hydrochloric acid service", "Reducing environments", "Heat exchangers"]
  },
  {
    id: 2,
    name: "Hastelloy C22 Round Bars",
    image: mamta_steel_traders000_img,
    description: "High-performance Hastelloy C22 (Alloy 22, N06022, DIN 2.4602) with superior corrosion resistance in oxidizing and reducing environments.",
    specifications: ["Hastelloy C22", "Alloy 22", "N06022", "DIN 2.4602"],
    applications: ["Chemical processing", "Pollution control", "Waste treatment", "Pharmaceutical industry"]
  },
  {
    id: 3,
    name: "Hastelloy C276 Round Bar",
    image: mamta_steel_traders000_img,
    description: "Premium Hastelloy C276 nickel-molybdenum-chromium alloy with exceptional corrosion resistance in severe chemical environments.",
    specifications: ["Hastelloy C276", "Nickel Alloy", "Chemical Resistant", "High Temperature"],
    applications: ["Chemical processing", "Flue gas desulfurization", "Pollution control", "Pharmaceutical equipment"]
  }
];

const keywordSections = [
  {
    title: "Hastelloy Applications",
    keywords: [
      "Chemical Processing Equipment",
      "Pollution Control Systems",
      "Pharmaceutical Manufacturing",
      "Flue Gas Desulfurization",
      "Waste Treatment Plants",
      "Heat Exchanger Components",
      "Reactor Vessels",
      "High-Temperature Applications"
    ]
  },
  {
    title: "Hastelloy Grades & Standards",
    keywords: [
      "Hastelloy C276 C22 B2",
      "UNS N10665 N06022",
      "DIN 2.4617 2.4602",
      "Nickel Molybdenum Alloy",
      "Corrosion Resistant Alloy",
      "Chemical Resistant Steel",
      "Premium Hastelloy India",
      "Hastelloy Supplier Mumbai"
    ]
  }
];

export default function Hastelloy() {
  return (
    <>
      <ProductSEO
        title="Hastelloy Round Bars - C276, C22, B2 Nickel Alloy | Mamta Steel Traders"
        description="Premium Hastelloy round bars supplier in Mumbai. C276, C22, B2 grades with UNS N10665, N06022, DIN 2.4617, 2.4602 for chemical processing, pharmaceutical & pollution control. Worldwide delivery with mill certificates."
        keywords="Hastelloy round bars, C276 C22 B2, UNS N10665 N06022, DIN 2.4617 2.4602, nickel alloy, chemical resistant, Hastelloy supplier Mumbai, corrosion resistant alloy India"
        canonicalUrl="/product/round-bars/hastelloy"
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
              <li className="text-gray-900 font-medium">Hastelloy</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-heading md:text-heading font-bold mb-6" data-testid="hero-title">
              Premium Hastelloy Round Bars
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-4xl mx-auto" data-testid="hero-description">
              Leading supplier of Hastelloy C276, C22, B2 nickel-molybdenum-chromium alloy round bars. 
              Perfect for chemical processing, pharmaceutical, pollution control, and severe corrosive environments with exceptional resistance.
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
              Hastelloy Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hastelloyProducts.map((product) => (
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
              Hastelloy Technical Specifications
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Hastelloy Grades</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">ASTM Standards</h4>
                    <p className="text-gray-600 text-sm">B574, B575, B619, B622 - Hastelloy pipe, tube, sheet, and plate specifications</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">UNS Designations</h4>
                    <p className="text-gray-600 text-sm">N10665 (B2), N06022 (C22), N10276 (C276) - Standard designations</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">DIN Standards</h4>
                    <p className="text-gray-600 text-sm">2.4617 (B2), 2.4602 (C22), 2.4819 (C276) - European specifications</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Key Properties</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Exceptional corrosion resistance</li>
                      <li>• High-temperature stability</li>
                      <li>• Excellent fabricability</li>
                      <li>• Superior chemical resistance</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Applications & Industries</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Chemical Processing</h4>
                    <p className="text-gray-600 text-sm">Process vessels, heat exchangers, pumps, valves in corrosive chemical environments</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Pharmaceutical Industry</h4>
                    <p className="text-gray-600 text-sm">API manufacturing equipment, process piping, and reaction vessels</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Pollution Control</h4>
                    <p className="text-gray-600 text-sm">Flue gas desulfurization systems, scrubber components, and emission control</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Waste Treatment</h4>
                    <p className="text-gray-600 text-sm">Waste processing equipment, incinerator components, and treatment systems</p>
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
              Popular Hastelloy Searches
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
              Ready to Order Premium Hastelloy?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Get competitive prices, mill test certificates, and worldwide delivery for all Hastelloy grades.
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