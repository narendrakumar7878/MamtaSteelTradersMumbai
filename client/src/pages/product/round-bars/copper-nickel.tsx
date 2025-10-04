import { Link } from "wouter";
import ProductSEO from "@/components/ProductSEO";
import copper_mamta_steel_traders_img from "@/assets/COPPER MAMTA STEEL TRADERS.jpg";

const copperNickelProducts = [
  {
    id: 1,
    name: "C14500 Tellurium Copper",
    image: copper_mamta_steel_traders_img,
    description: "High-performance tellurium copper with excellent machinability and thermal conductivity for electrical and electronic applications.",
    specifications: ["C14500 Grade", "Tellurium Enhanced", "High Machinability", "Excellent Thermal Properties"],
    applications: ["Electrical components", "Electronic parts", "Heat exchangers", "Machined components"]
  },
  {
    id: 2,
    name: "C15000 Zirconium Copper",
    image: copper_mamta_steel_traders_img,
    description: "Premium CuZr zirconium copper round bars with superior strength and electrical conductivity for demanding applications.",
    specifications: ["C15000 Grade", "Zirconium Copper", "High Strength", "Excellent Conductivity"],
    applications: ["Spot welding electrodes", "Seam welding wheels", "Electrical contacts", "Resistance welding"]
  },
  {
    id: 3,
    name: "C17510 Beryllium Copper",
    image: copper_mamta_steel_traders_img,
    description: "High-strength beryllium copper with exceptional spring properties and corrosion resistance for critical applications.",
    specifications: ["C17510 Grade", "Beryllium Copper", "High Strength", "Spring Properties"],
    applications: ["Springs", "Electrical contacts", "Non-sparking tools", "Aerospace components"]
  },
  {
    id: 4,
    name: "C18150 Chromium Zirconium Copper",
    image: copper_mamta_steel_traders_img,
    description: "Premium chromium zirconium copper with excellent thermal and electrical properties for industrial applications.",
    specifications: ["C18150 Grade", "Chromium Zirconium", "High Conductivity", "Thermal Stability"],
    applications: ["Electrical contacts", "Heat sinks", "Electronic components", "Industrial equipment"]
  },
  {
    id: 5,
    name: "C70600 Copper Nickel (90/10)",
    image: copper_mamta_steel_traders_img,
    description: "C70600 copper nickel 90/10 round bars with excellent corrosion resistance and marine applications suitability.",
    specifications: ["C70600 Grade", "Cu-Ni 90/10", "Marine Grade", "Corrosion Resistant"],
    applications: ["Marine equipment", "Heat exchangers", "Condensers", "Seawater systems"]
  },
  {
    id: 6,
    name: "C93200 Round Bar (SAE660)",
    image: copper_mamta_steel_traders_img,
    description: "High-strength C93200 bronze round bars with excellent wear resistance and bearing properties for heavy-duty applications.",
    specifications: ["C93200 Grade", "SAE660", "High Strength", "Wear Resistant"],
    applications: ["Bearings", "Bushings", "Gears", "Heavy machinery"]
  },
  {
    id: 7,
    name: "Cu-Ni 70/30",
    image: copper_mamta_steel_traders_img,
    description: "Premium copper nickel 70/30 round bars with superior corrosion resistance for marine and chemical industries.",
    specifications: ["Cu-Ni 70/30", "High Nickel Content", "Corrosion Resistant", "Marine Grade"],
    applications: ["Marine piping", "Heat exchangers", "Chemical processing", "Offshore platforms"]
  },
  {
    id: 8,
    name: "Cu-Ni 90/10",
    image: copper_mamta_steel_traders_img,
    description: "High-quality copper nickel 90/10 round bars with excellent seawater corrosion resistance and thermal properties.",
    specifications: ["Cu-Ni 90/10", "Seawater Resistant", "Thermal Stability", "Marine Applications"],
    applications: ["Seawater piping", "Marine condensers", "Heat exchangers", "Desalination plants"]
  },
  {
    id: 9,
    name: "SAE660 Round Bar",
    image: copper_mamta_steel_traders_img,
    description: "Premium SAE660 bronze round bars with exceptional bearing properties and wear resistance for industrial applications.",
    specifications: ["SAE660 Grade", "C93200 Equivalent", "Bearing Bronze", "High Load Capacity"],
    applications: ["Heavy-duty bearings", "Industrial bushings", "Wear plates", "Machine components"]
  }
];

const keywordSections = [
  {
    title: "Copper Nickel Applications",
    keywords: [
      "Marine Equipment Manufacturing",
      "Heat Exchanger Components",
      "Seawater Piping Systems",
      "Chemical Processing Equipment",
      "Offshore Platform Applications",
      "Desalination Plant Components",
      "Marine Condenser Tubes",
      "Shipbuilding Materials"
    ]
  },
  {
    title: "Copper Alloy Grades & Standards",
    keywords: [
      "C70600 Copper Nickel 90/10",
      "Cu-Ni 70/30 Marine Grade",
      "C17510 Beryllium Copper",
      "C93200 SAE660 Bronze",
      "C14500 Tellurium Copper",
      "C15000 Zirconium Copper",
      "Premium Copper Alloys India",
      "Copper Nickel Supplier Mumbai"
    ]
  }
];

export default function CopperNickel() {
  return (
    <>
      <ProductSEO
        title="Copper Nickel Round Bars - Cu-Ni 70/30, 90/10, C70600, C93200 | Mamta Steel Traders"
        description="Premium copper nickel round bars supplier in Mumbai. C70600, Cu-Ni 70/30, 90/10, C17510 beryllium copper, C93200 SAE660 bronze for marine, chemical & electrical applications. Worldwide delivery with mill certificates."
        keywords="copper nickel round bars, Cu-Ni 70/30, Cu-Ni 90/10, C70600, C93200 SAE660, beryllium copper C17510, marine grade copper nickel, copper alloy supplier Mumbai, seawater resistant copper"
        canonicalUrl="/product/round-bars/copper-nickel"
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
              <li className="text-gray-900 font-medium">Copper Nickel</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
              Premium Copper Nickel Round Bars
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-4xl mx-auto" data-testid="hero-description">
              Leading supplier of Cu-Ni 70/30, 90/10, C70600, C93200 SAE660, beryllium copper C17510 round bars. 
              Perfect for marine applications, chemical processing, heat exchangers, and electrical components with superior corrosion resistance.
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
              Copper Nickel Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {copperNickelProducts.map((product) => (
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
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Copper Nickel Grades</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">ASTM Standards</h4>
                    <p className="text-gray-600 text-sm">B466, B467, B171 - Copper nickel pipe, tube, and plate specifications</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">UNS Designations</h4>
                    <p className="text-gray-600 text-sm">C70600 (Cu-Ni 90/10), C71500 (Cu-Ni 70/30) - Industry standard designations</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Marine Grade</h4>
                    <p className="text-gray-600 text-sm">DNV, ABS, Lloyd's Register approved for marine applications</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Key Properties</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Superior seawater corrosion resistance</li>
                      <li>• Excellent thermal conductivity</li>
                      <li>• High strength and ductility</li>
                      <li>• Natural biofouling resistance</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Applications & Industries</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Marine Industry</h4>
                    <p className="text-gray-600 text-sm">Seawater piping, marine condensers, heat exchangers, and offshore platform equipment</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Chemical Processing</h4>
                    <p className="text-gray-600 text-sm">Chemical plant equipment, process vessels, and corrosion-resistant applications</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Power Generation</h4>
                    <p className="text-gray-600 text-sm">Steam condenser tubes, heat exchanger components, and cooling systems</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Electrical Applications</h4>
                    <p className="text-gray-600 text-sm">Electrical contacts, springs, beryllium copper components, and conductive elements</p>
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
              Popular Copper Nickel Searches
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
              Ready to Order Premium Copper Nickel?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Get competitive prices, mill test certificates, and worldwide delivery for all copper nickel grades.
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