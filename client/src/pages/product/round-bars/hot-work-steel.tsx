import { Link } from "wouter";
import ProductSEO from "@/components/ProductSEO";
import mamta_steel_traders000_img from "@/assets/MAMTA STEEL TRADERS000.jpg";

const hotWorkProducts = [
  {
    id: 1,
    name: "1.2714 Flat Bars",
    image: mamta_steel_traders000_img,
    description: "Premium 55NiCrMoV7 hot work tool steel flat bars with excellent high-temperature strength and thermal conductivity.",
    specifications: ["DIN 1.2714", "55NiCrMoV7", "High thermal conductivity", "Forging dies applications"],
    applications: ["Die casting dies", "Forging tools", "Extrusion tools", "Hot shear blades"]
  },
  {
    id: 2,
    name: "H11 Round Bars",
    image: mamta_steel_traders000_img,
    description: "AISI H11 (DIN 1.2343) premium hot work tool steel with superior toughness and thermal shock resistance.",
    specifications: ["AISI H11", "DIN 1.2343", "Thermal shock resistant", "Die casting applications"],
    applications: ["Aluminum die casting", "Brass die casting", "Forging dies", "Hot forming tools"]
  },
  {
    id: 3,
    name: "H13 Flat Bars",
    image: mamta_steel_traders000_img,
    description: "H13 (DIN 1.2344) SKD61 flat bars - premium hot work tool steel with excellent hardenability and toughness.",
    specifications: ["AISI H13", "DIN 1.2344", "SKD61", "X40CrMoV5-1", "T20813"],
    applications: ["Die casting dies", "Extrusion dies", "Forging tools", "Hot work applications"]
  },
  {
    id: 4,
    name: "H13 Round Bars",
    image: mamta_steel_traders000_img,
    description: "Premium H13 round bars (DIN 1.2344) with exceptional thermal fatigue resistance and high-temperature strength.",
    specifications: ["AISI H13", "DIN 1.2344", "SKD61", "X40CrMoV5-1", "Superior thermal fatigue resistance"],
    applications: ["Aluminum die casting", "Zinc die casting", "Plastic molding", "Hot forging dies"]
  },
  {
    id: 5,
    name: "H21 Round Bars",
    image: mamta_steel_traders000_img,
    description: "AISI H21 (DIN 1.2581) SKD5 premium tungsten hot work steel with excellent high-temperature performance.",
    specifications: ["AISI H21", "DIN 1.2581", "SKD5", "X30WCrV93", "T20821"],
    applications: ["Hot extrusion dies", "Forging dies", "Hot stamping tools", "High-temperature applications"]
  },
  {
    id: 6,
    name: "S7 Round Bars",
    image: mamta_steel_traders000_img,
    description: "S7 (DIN 1.2357) shock-resistant tool steel with outstanding impact toughness and wear resistance.",
    specifications: ["AISI S7", "DIN 1.2357", "Shock resistant", "High impact toughness"],
    applications: ["Punches", "Dies", "Hammers", "High impact tooling"]
  }
];

const keywordSections = [
  {
    title: "Hot Work Tool Steel Applications",
    keywords: [
      "Die Casting Dies Manufacturing",
      "Aluminum Die Casting Tools", 
      "Forging Dies Production",
      "Extrusion Dies Manufacturing",
      "Hot Forming Tools",
      "Plastic Injection Molding Dies",
      "Hot Stamping Dies",
      "Thermal Shock Resistant Steel"
    ]
  },
  {
    title: "Industry Standards & Grades",
    keywords: [
      "AISI H11 H13 H21 Steel",
      "DIN 1.2343 1.2344 Tool Steel", 
      "SKD61 Hot Work Steel",
      "JIS SKD5 Tool Steel",
      "X40CrMoV5-1 Grade",
      "55NiCrMoV7 Tool Steel",
      "Premium Tool Steel India",
      "Hot Work Steel Stockist Mumbai"
    ]
  }
];

export default function HotWorkSteel() {
  return (
    <>
      <ProductSEO
        title="Hot Work Steel Round Bars - H11, H13, H21, S7 Tool Steel | Mamta Steel Traders"
        description="Premium hot work steel round bars supplier in Mumbai. AISI H11, H13, H21, S7, DIN 1.2343, 1.2344, 1.2581 tool steel for die casting, forging dies & extrusion tools. Worldwide delivery with mill test certificates."
        keywords="hot work steel, H11 steel, H13 steel, H21 steel, S7 steel, DIN 1.2343, DIN 1.2344, SKD61, die casting steel, forging die steel, tool steel supplier Mumbai, hot work tool steel India"
        canonicalUrl="/product/round-bars/hot-work-steel"
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
              <li className="text-gray-900 font-medium">Hot Work Steel</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
              Premium Hot Work Steel Round Bars
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-4xl mx-auto" data-testid="hero-description">
              Leading supplier of AISI H11, H13, H21, S7 and DIN 1.2343, 1.2344, 1.2581 hot work tool steel round bars. 
              Perfect for die casting dies, forging tools, extrusion dies and high-temperature applications with superior thermal shock resistance.
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
              Hot Work Steel Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hotWorkProducts.map((product) => (
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
              Technical Specifications & Standards
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Hot Work Steel Grades</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">AISI Standards</h4>
                    <p className="text-gray-600 text-sm">H11, H13, H21, S7 - Premium hot work tool steels</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">DIN Standards</h4>
                    <p className="text-gray-600 text-sm">1.2343, 1.2344, 1.2581, 1.2357 - European specifications</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">JIS Standards</h4>
                    <p className="text-gray-600 text-sm">SKD5, SKD61 - Japanese industrial standards</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Key Properties</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• High thermal conductivity</li>
                      <li>• Excellent thermal shock resistance</li>
                      <li>• Superior hardenability</li>
                      <li>• High-temperature strength retention</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Applications & Industries</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Die Casting Industry</h4>
                    <p className="text-gray-600 text-sm">Aluminum, zinc, and brass die casting dies with superior thermal fatigue resistance</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Forging Applications</h4>
                    <p className="text-gray-600 text-sm">Hot forging dies, upset forging tools, and closed-die forging applications</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Extrusion Tools</h4>
                    <p className="text-gray-600 text-sm">Hot extrusion dies for aluminum, brass, and other non-ferrous metals</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Plastic Industry</h4>
                    <p className="text-gray-600 text-sm">Injection molding dies, blow molding tools, and thermoforming dies</p>
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
              Popular Hot Work Steel Searches
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
              Ready to Order Premium Hot Work Steel?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Get competitive prices, mill test certificates, and worldwide delivery for all hot work tool steel grades.
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