import { Link } from "wouter";
import ProductSEO from "@/components/ProductSEO";
import mamta_steel_traders000_img from "@/assets/MAMTA STEEL TRADERS000.jpg";

const enSeriesProducts = [
  {
    id: 1,
    name: "832M13 Round Bar (EN36C)",
    image: mamta_steel_traders000_img,
    description: "Premium 832M13 (EN36C) case hardening steel with excellent core strength and surface hardness for automotive applications.",
    specifications: ["832M13 Grade", "EN36C", "Case Hardening Steel", "Automotive Grade"],
    applications: ["Gears", "Shafts", "Automotive components", "Machine parts"]
  },
  {
    id: 2,
    name: "C55 Round Bars (EN9)",
    image: mamta_steel_traders000_img,
    description: "High-quality C55 EN9 070M55 carbon steel round bars with excellent machinability and strength for general engineering.",
    specifications: ["C55 Grade", "EN9", "070M55", "JSW Steel"],
    applications: ["General engineering", "Machine components", "Shafts", "Pins"]
  },
  {
    id: 3,
    name: "EN16 Round Bars (605M36)",
    image: mamta_steel_traders000_img,
    description: "Premium EN16 (605M36) case hardening steel round bars with superior hardenability and core toughness.",
    specifications: ["EN16 Grade", "605M36", "Case Hardening", "High Hardenability"],
    applications: ["Gears", "Crankshafts", "Heavy duty components", "Machine tools"]
  },
  {
    id: 4,
    name: "EN18 Round Bars (40Cr4)",
    image: mamta_steel_traders000_img,
    description: "High-strength EN18 (40Cr4/41Cr4) chromium steel round bars with excellent strength and toughness properties.",
    specifications: ["EN18 Grade", "40Cr4", "41Cr4", "Chrome Steel"],
    applications: ["Axles", "Connecting rods", "Bolts", "Heavy machinery"]
  },
  {
    id: 5,
    name: "EN19 Hex Bar (SAE 4140)",
    image: mamta_steel_traders000_img,
    description: "Premium EN19 (SAE 4140/42CrMo4) hex bars with excellent hardenability and strength for high-stress applications.",
    specifications: ["EN19 Grade", "SAE 4140", "709M40", "42CrMo4"],
    applications: ["High-stress components", "Aerospace parts", "Tool holders", "Machine shafts"]
  },
  {
    id: 6,
    name: "EN1A Leaded (EN1APb)",
    image: mamta_steel_traders000_img,
    description: "EN1A leaded (EN1APb) free machining steel with superior machinability for high-speed machining operations.",
    specifications: ["EN1A Leaded", "EN1APb", "Free Machining", "Lead Content"],
    applications: ["Machined components", "Fasteners", "Screws", "High-speed machining"]
  },
  {
    id: 7,
    name: "EN1A Non Leaded",
    image: mamta_steel_traders000_img,
    description: "High-quality EN1A non-leaded mild steel round bars with excellent weldability and formability for general applications.",
    specifications: ["EN1A Grade", "Non-Leaded", "Mild Steel", "Weldable"],
    applications: ["General fabrication", "Welded structures", "Machined parts", "Construction"]
  },
  {
    id: 8,
    name: "EN24 Flat Bars (SAE 4340)",
    image: mamta_steel_traders000_img,
    description: "Premium EN24 (SAE 4340/34CrNiMo6) flat bars with exceptional strength, toughness and hardenability properties.",
    specifications: ["EN24 Grade", "SAE 4340", "34CrNiMo6", "817M40"],
    applications: ["Aircraft landing gear", "High-strength bolts", "Crankshafts", "Connecting rods"]
  },
  {
    id: 9,
    name: "EN24 Round Bars (SAE 4340)",
    image: mamta_steel_traders000_img,
    description: "High-performance EN24 (SAE 4340) alloy steel round bars with superior mechanical properties for critical applications.",
    specifications: ["EN24 Grade", "SAE 4340", "Alloy Steel", "High Performance"],
    applications: ["Aerospace components", "High-strength fasteners", "Crankshafts", "Gears"]
  }
];

const keywordSections = [
  {
    title: "EN Series Steel Applications",
    keywords: [
      "Automotive Components Manufacturing",
      "Machine Tool Applications",
      "Heavy Engineering Parts",
      "Gears and Shafts Production",
      "Case Hardening Applications",
      "High-Strength Fasteners",
      "Aerospace Components",
      "General Engineering Parts"
    ]
  },
  {
    title: "EN Series Grades & Standards",
    keywords: [
      "EN8 EN9 EN19 Steel",
      "EN24 SAE 4340 Steel",
      "832M13 EN36C Grade",
      "EN1A Mild Steel",
      "42CrMo4 Chrome Steel",
      "605M36 Case Hardening",
      "Premium EN Series India",
      "EN Steel Supplier Mumbai"
    ]
  }
];

export default function ENSeries() {
  return (
    <>
      <ProductSEO
        title="EN Series Round Bars - EN8, EN9, EN19, EN24, EN36C Steel | Mamta Steel Traders"
        description="Premium EN series round bars supplier in Mumbai. EN8, EN9, EN19, EN24 SAE 4340, EN36C, EN1A grades for automotive, aerospace & engineering applications. Worldwide delivery with mill test certificates."
        keywords="EN series round bars, EN8 EN9 EN19 steel, EN24 SAE 4340, EN36C 832M13, EN1A steel, case hardening steel, alloy steel supplier Mumbai, EN series steel India"
        canonicalUrl="/product/round-bars/en-series"
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
              <li className="text-gray-900 font-medium">EN Series</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-heading md:text-heading font-bold mb-6" data-testid="hero-title">
              Premium EN Series Round Bars
            </h1>
            <p className="text-xl mb-8 text-blue-100 max-w-4xl mx-auto" data-testid="hero-description">
              Leading supplier of EN8, EN9, EN19, EN24 SAE 4340, EN36C, EN1A steel round bars. 
              Perfect for automotive, aerospace, machine tools, and general engineering applications with superior mechanical properties.
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
              EN Series Steel Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {enSeriesProducts.map((product) => (
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
              EN Series Technical Specifications
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">EN Series Grades</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">BS Standards</h4>
                    <p className="text-gray-600 text-sm">BS 970 - British Standard for wrought steels for mechanical and allied engineering purposes</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">SAE Equivalents</h4>
                    <p className="text-gray-600 text-sm">EN24 ≡ SAE 4340, EN19 ≡ SAE 4140 - American equivalent grades</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">DIN Standards</h4>
                    <p className="text-gray-600 text-sm">EN19 ≡ 42CrMo4, EN24 ≡ 34CrNiMo6 - German standard equivalents</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">Key Properties</h4>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>• Excellent hardenability</li>
                      <li>• Superior strength-to-weight ratio</li>
                      <li>• Good machinability</li>
                      <li>• High fatigue resistance</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Applications & Industries</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Automotive Industry</h4>
                    <p className="text-gray-600 text-sm">Crankshafts, connecting rods, gears, axles, and transmission components</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Aerospace Applications</h4>
                    <p className="text-gray-600 text-sm">Aircraft landing gear, high-strength fasteners, and critical structural components</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">Machine Tools</h4>
                    <p className="text-gray-600 text-sm">Machine shafts, tool holders, spindles, and precision machinery parts</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-600 mb-2">General Engineering</h4>
                    <p className="text-gray-600 text-sm">Heavy machinery components, pins, bolts, and general fabrication</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* EN Series Comparison Table */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">
              EN Series Steel Comparison
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">EN Grade</th>
                    <th className="px-6 py-4 text-left">SAE Equivalent</th>
                    <th className="px-6 py-4 text-left">Carbon %</th>
                    <th className="px-6 py-4 text-left">Key Properties</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">EN8</td>
                    <td className="px-6 py-4">SAE 1040</td>
                    <td className="px-6 py-4">0.36-0.44%</td>
                    <td className="px-6 py-4">Good strength, machinability</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">EN9</td>
                    <td className="px-6 py-4">SAE 1055</td>
                    <td className="px-6 py-4">0.50-0.60%</td>
                    <td className="px-6 py-4">High strength, wear resistant</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">EN19</td>
                    <td className="px-6 py-4">SAE 4140</td>
                    <td className="px-6 py-4">0.36-0.44%</td>
                    <td className="px-6 py-4">High strength, good hardenability</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-semibold">EN24</td>
                    <td className="px-6 py-4">SAE 4340</td>
                    <td className="px-6 py-4">0.36-0.44%</td>
                    <td className="px-6 py-4">Ultra-high strength, toughness</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Popular Keywords Sections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-12 text-gray-900">
              Popular EN Series Searches
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {keywordSections.map((section, sectionIndex) => (
                <div key={sectionIndex} className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-6 text-gray-900">{section.title}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {section.keywords.map((keyword, index) => (
                      <div 
                        key={index}
                        className="bg-gray-50 p-3 rounded border hover:shadow-md transition-shadow"
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
              Ready to Order Premium EN Series Steel?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Get competitive prices, mill test certificates, and worldwide delivery for all EN series grades.
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