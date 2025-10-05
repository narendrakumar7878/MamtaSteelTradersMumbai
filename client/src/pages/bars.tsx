import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Home, ChevronRight, Download, MessageCircle } from "lucide-react";

export default function Bars() {
  return (
    <>
      <Helmet>
        <title>Round Bar | Stainless Steel Bars, Duplex Steel, Nickel Alloy Bars</title>
        <meta 
          name="description" 
          content="High-quality round bars in stainless steel, duplex steel, nickel alloy, Hastelloy, Inconel, and Titanium. Stock Bar, Hexagon, Square, Round products in various dimensions and grades."
        />
        <meta name="keywords" content="round bar, stainless steel bar, duplex steel bar, nickel alloy bar, ASTM ASME SA 276, Hastelloy bar, Inconel bar, Incoloy bar, Monel bar, Titanium bar, Tantalum bar" />
      </Helmet>

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="flex items-center text-gray-600 hover:text-[#1a3e72] transition-colors">
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link href="/products" className="text-gray-600 hover:text-[#1a3e72] transition-colors">
                Products
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-[#1a3e72] font-medium">Round Bar</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            {/* Header Section */}
            <header className="text-center mb-16">
              <h1 className="text-heading md:text-heading font-bold text-[#0d2b4e] mb-6">
                <strong>Round Bar</strong>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We also stock <strong>Bar</strong>, <strong>Hexagon</strong>, <strong>Square</strong>, <strong>Round products</strong> in various dimensions and grades. We stock <strong>Stainless Steel</strong>, <strong>Carbon and Alloy</strong> specialty steels supplied in the as rolled, annealed and normalized conditions. We offer <strong>cut to size</strong> and <strong>heat treatment</strong> through our service center.
              </p>
            </header>

            {/* User Industries Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-[#0d2b4e] mb-6">
                <strong>User Industries:</strong>
              </h2>
              
              <div className="prose max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong>Chemicals</strong>, <strong>Fats, & Fertilizers</strong>, <strong>Sugar Mills & Distilleries</strong>, <strong>Cement Industries</strong>, <strong>Ship Builders</strong>, <strong>Paper Industries</strong>, <strong>Pumps</strong>, <strong>Petrochemicals</strong>, <strong>Oil & Natural Gas Organization</strong> in terms of the specific materials, Technology, Finance & Personal.
                </p>
              </div>
            </motion.section>

            {/* Stainless & Duplex Steel Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-[#0d2b4e] mb-8">
                <strong>Stainless & Duplex Steel</strong>
              </h2>

              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Image Section */}
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&crop=center" 
                    alt="High-quality stainless steel and duplex steel round bars for industrial applications in various dimensions and grades"
                    className="w-full h-80 object-cover rounded-lg shadow-md"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>

                {/* Specifications Table */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                    <tbody>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-3 bg-[#f39c12] text-white font-semibold">Range:</td>
                        <td className="px-4 py-3 text-gray-700">
                          <strong>3.17 MM TO 350 MM DIA</strong>
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-3 bg-[#1a3e72] text-white font-semibold">Stainless Steel:</td>
                        <td className="px-4 py-3 text-gray-700 text-sm">
                          <strong>ASTM / ASME SA 276 TP</strong> 304, 304L, 309S, 309H, 310S, 316, 316L, 316 TI, 317, 321, 347, 410, 420, 430, 431, 440A, B & C, 446<br/>
                          <strong>ASTM / ASME SA 479 TP</strong> 304, 304L, 304H, 309S, 309H, 310S, 310H, 316, 316H, 316L, 316 TI, 317, 321, 321H, 347, 347 H, 410, 430, 431 & 444.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 bg-[#1a3e72] text-white font-semibold">Duplex Steel:</td>
                        <td className="px-4 py-3 text-gray-700">
                          <strong>ASTM / ASME SA 276 UNS NO.</strong> S 31803, S 32205, S 32550, S 32750, S 32760.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.section>

            {/* Nickel & Copper Alloy Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-[#0d2b4e] mb-8">
                <strong>Nickel & Copper Alloy</strong>
              </h2>

              <div className="grid lg:grid-cols-2 gap-8 items-start">
                {/* Image Section */}
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=400&fit=crop&crop=center" 
                    alt="Nickel and copper alloy round bars for high-performance industrial applications"
                    className="w-full h-80 object-cover rounded-lg shadow-md"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>

                {/* Specifications */}
                <div className="space-y-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                      <tbody>
                        <tr className="border-b border-gray-200">
                          <td className="px-4 py-3 bg-[#f39c12] text-white font-semibold">Range:</td>
                          <td className="px-4 py-3 text-gray-700">
                            <strong>3.17 MM TO 350 MM DIA</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#1a3e72] mb-4">Nickel Alloy Specifications:</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>ASTM / ASME SB 160 UNS 2200</strong> (NICKEL 200) / UNS 2201 (NICKEL 201)</li>
                      <li>• <strong>ASTM / ASME SB 164 UNS 4400</strong> (MONEL 400)</li>
                      <li>• <strong>ASTM / ASME SB 425 UNS 8825</strong> (INCONEL 825)</li>
                      <li>• <strong>ASTM / ASME SB 166 UNS 6600</strong> (INCONEL 600) / UNS 6601 (INCONEL 601)</li>
                      <li>• <strong>ASTM / ASME SB 446 UNS 6625</strong> (INCONEL 625)</li>
                      <li>• <strong>ASTM / ASME SB 574 UNS 10276</strong> (HASTELLOY C 276)</li>
                      <li>• <strong>ASTM / ASME SB 472 UNS 8020</strong> (ALLOY 20 / 20 CB 3)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Specialty Materials Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Hastelloy */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-[#0d2b4e] mb-4">
                  <strong>Hastelloy</strong>
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Grades:</strong> Hastelloy C-22, Hastelloy C-276, Hastelloy C-2000
                  </p>
                  <div>
                    <h4 className="font-semibold text-[#1a3e72] mb-2">Types Available:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Hastelloy Round Bar</strong></li>
                      <li>• <strong>Hastelloy Bright Bar</strong></li>
                      <li>• <strong>Hastelloy Polish Bar</strong></li>
                      <li>• <strong>Hastelloy Black Round Bar</strong></li>
                      <li>• <strong>Hastelloy Forged Bar</strong></li>
                      <li>• <strong>Hastelloy Hex Bar</strong></li>
                      <li>• <strong>Hastelloy Flat Bar</strong></li>
                      <li>• <strong>Hastelloy Rod</strong></li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Inconel */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-[#0d2b4e] mb-4">
                  <strong>Inconel</strong>
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Grades:</strong> Inconel 600, Inconel 601, Inconel 625, Inconel 625LCF, Inconel 686, Inconel 718, Inconel 800, Inconel 825, Inconel X-750
                  </p>
                  <p className="text-gray-700">
                    <strong>Sizes:</strong> 1mm to 200mm diameter
                  </p>
                  <p className="text-gray-700">
                    <strong>Type:</strong> Bars, Rods, wire
                  </p>
                  <p className="text-gray-700">
                    <strong>Standard:</strong> ASTM, ASME, API, AISI, BS, ANSI, DIN, JIS, MSSP, NACE
                  </p>
                </div>
              </motion.div>

              {/* Incoloy */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-[#0d2b4e] mb-4">
                  <strong>Incoloy</strong>
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Grades:</strong> Incoloy 800, incoloy 825, Incoloy 925, Incoloy a-286, Incoloy DS
                  </p>
                  <p className="text-gray-700 text-sm">
                    <strong>Standard:</strong> ASTM B408, AMS 5766, ISO 9723, ISO 9724, BS 3076NA15, BS 3075NA15, EN 10095, VdTÜV 412 & 434
                  </p>
                  <div>
                    <h4 className="font-semibold text-[#1a3e72] mb-2">Types:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Round Bar Bright Bar</strong></li>
                      <li>• <strong>Polish Bar</strong></li>
                      <li>• <strong>Black Round Bar</strong></li>
                      <li>• <strong>Forged Bar</strong></li>
                      <li>• <strong>Hex Bar</strong></li>
                      <li>• <strong>Flat Bar</strong></li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Monel */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-[#0d2b4e] mb-4">
                  <strong>Monel</strong>
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Grades:</strong> Monel 400, Monel k500
                  </p>
                  <p className="text-gray-700">
                    <strong>Range:</strong> 5 mm dia To 500 mm dia in 100 mm TO 6000 mm Length
                  </p>
                  <p className="text-gray-700">
                    <strong>Standard:</strong> ASTM / ASME SB 164
                  </p>
                </div>
              </motion.div>

              {/* Nitronic 50 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-[#0d2b4e] mb-4">
                  <strong>Nitronic 50</strong>
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700 text-sm">
                    <strong>Nitronic 50 Stainless Steel</strong> is an austenitic stainless steel with a blend of strength and corrosion resistance that is better than Stainless Steel 316, 316L, 317 and 317L.
                  </p>
                  <div>
                    <h4 className="font-semibold text-[#1a3e72] mb-2">Grades Available:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>XM-19 (UNS S20910)</strong></li>
                      <li>• <strong>Nitronic 50 Annealed</strong></li>
                      <li>• <strong>XM-19HS</strong></li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Nitronic 60 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-[#0d2b4e] mb-4">
                  <strong>Nitronic 60</strong>
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700 text-sm">
                    <strong>Nitronic 60 Stainless Steel</strong> is an austenitic alloy, considered to have the best galling resistance of the entire range of Stainless Steels.
                  </p>
                  <div>
                    <h4 className="font-semibold text-[#1a3e72] mb-2">Industries Served:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Oil and gas production</strong></li>
                      <li>• <strong>Hydroelectric power</strong></li>
                      <li>• <strong>Petrochemical</strong></li>
                      <li>• <strong>Food processing</strong></li>
                      <li>• <strong>Automotive</strong></li>
                      <li>• <strong>Pharmaceutical</strong></li>
                      <li>• <strong>Construction and chemical sector</strong></li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Titanium Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-[#0d2b4e] mb-8">
                <strong>Titanium Round Bar</strong>
              </h2>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-4">Specifications:</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Grade:</strong> Gr1, Gr2, Gr3, Gr5, Gr7</p>
                    <p><strong>Standard:</strong> ASTM B348, ASTM F136, ASTM F67, AMS 4928</p>
                    <p><strong>Size:</strong> Diameter: 4mm to 350mm, Length: 50mm to 6000mm</p>
                    <p><strong>MOQ:</strong> 10 kg</p>
                    <p><strong>Delivery time:</strong> 7-30 days after confirmed</p>
                  </div>
                </div>

                {/* Chemical Requirements Table */}
                <div className="overflow-x-auto">
                  <h4 className="text-lg font-semibold text-[#1a3e72] mb-4">Chemical Requirements:</h4>
                  <table className="w-full text-xs border-collapse bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                    <thead>
                      <tr className="bg-[#1a3e72] text-white">
                        <th className="px-2 py-2 text-left">Grade</th>
                        <th className="px-2 py-2 text-left">N</th>
                        <th className="px-2 py-2 text-left">C</th>
                        <th className="px-2 py-2 text-left">H</th>
                        <th className="px-2 py-2 text-left">Fe</th>
                        <th className="px-2 py-2 text-left">O</th>
                        <th className="px-2 py-2 text-left">Al</th>
                        <th className="px-2 py-2 text-left">V</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-2 py-2 font-semibold">Gr1</td>
                        <td className="px-2 py-2">0.03</td>
                        <td className="px-2 py-2">0.08</td>
                        <td className="px-2 py-2">0.015</td>
                        <td className="px-2 py-2">0.020</td>
                        <td className="px-2 py-2">0.018</td>
                        <td className="px-2 py-2">-</td>
                        <td className="px-2 py-2">-</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-2 py-2 font-semibold">Gr2</td>
                        <td className="px-2 py-2">0.03</td>
                        <td className="px-2 py-2">0.08</td>
                        <td className="px-2 py-2">0.015</td>
                        <td className="px-2 py-2">0.030</td>
                        <td className="px-2 py-2">0.025</td>
                        <td className="px-2 py-2">-</td>
                        <td className="px-2 py-2">-</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2 font-semibold">Gr5</td>
                        <td className="px-2 py-2">0.03</td>
                        <td className="px-2 py-2">0.08</td>
                        <td className="px-2 py-2">0.015</td>
                        <td className="px-2 py-2">0.040</td>
                        <td className="px-2 py-2">0.020</td>
                        <td className="px-2 py-2">5.5~6.75</td>
                        <td className="px-2 py-2">3.5~4.5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.section>

            {/* Tantalum Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-[#0d2b4e] mb-8">
                <strong>Tantalum Bar</strong>
              </h2>

              <div className="grid lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-4">Specifications:</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Material:</strong> Tantalum bar</p>
                    <p><strong>Grade:</strong> RO5200, RO5400, RO5252(Ta-2.5W), RO5255(Ta-10W)</p>
                    <p><strong>Size:</strong> Dia3~120mm</p>
                    <p><strong>Standard:</strong> ASTM B 365 Tantalum products/Tantalum bars</p>
                    <p><strong>Purity:</strong> &gt;=99.95% or 99.99%</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-[#1a3e72] mb-4">Dimension Tolerances:</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs border-collapse bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                      <thead>
                        <tr className="bg-[#1a3e72] text-white">
                          <th className="px-2 py-2 text-left">Diameter</th>
                          <th className="px-2 py-2 text-left">Tolerance</th>
                          <th className="px-2 py-2 text-left">Length</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-2 py-2">3.0-4.5</td>
                          <td className="px-2 py-2">±0.05</td>
                          <td className="px-2 py-2">500-1500</td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-2 py-2">4.5-6.5</td>
                          <td className="px-2 py-2">±0.10</td>
                          <td className="px-2 py-2">500-1500</td>
                        </tr>
                        <tr>
                          <td className="px-2 py-2">25-40</td>
                          <td className="px-2 py-2">±2.0</td>
                          <td className="px-2 py-2">150-4000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Call-to-Action Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-[#1a3e72] to-[#0d2b4e] rounded-xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Need Custom Round Bars?</h2>
                <p className="text-lg mb-8 opacity-90">
                  Get high-quality <strong>round bars</strong> in various materials and grades manufactured to your exact specifications. Available in stainless steel, duplex steel, nickel alloys, and specialty materials.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact"
                    className="inline-flex items-center px-8 py-3 bg-[#f39c12] text-white font-semibold rounded-lg hover:bg-[#e67e22] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Request a Quote
                  </Link>
                  
                  <button className="inline-flex items-center px-8 py-3 bg-white text-[#1a3e72] font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <Download className="w-5 h-5 mr-2" />
                    Download Brochure
                  </button>
                </div>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </main>
    </>
  );
}