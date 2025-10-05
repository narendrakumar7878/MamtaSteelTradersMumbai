import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Home, ChevronRight, Download, MessageCircle } from "lucide-react";

export default function PlatesSheets() {
  return (
    <>
      <Helmet>
        <title>Plates & Sheets | Industrial Steel Sheets, Stainless Steel, Duplex Steel</title>
        <meta 
          name="description" 
          content="High-quality industrial plates & sheets including stainless steel sheets, duplex steel plates, and custom sizes for industries like construction, shipbuilding, petrochemicals, and more."
        />
        <meta name="keywords" content="plates, sheets, stainless steel, duplex steel, ASTM SA 240, industrial steel plates, steel sheet supplier, duplex steel plates manufacturer, NACE MR 01-75s" />
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
              <span className="text-[#1a3e72] font-medium">Plates & Sheets</span>
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
                <strong>Sheets & Plates</strong>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We offer wide variety of <strong>industrial steel sheets</strong>, <strong>industrial steel plates</strong>, <strong>industrial stainless steel sheets</strong>, <strong>industrial stainless steel plates</strong>, which are fabricated from finest quality of raw materials. Manufactured as per the international quality and safety standards, we offer these products in different dimensions and at highly competitive prices. These products are mostly applied in construction and engineering industry.
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
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center" 
                    alt="High-quality stainless steel and duplex steel sheets and plates for industrial applications including construction, shipbuilding, and petrochemicals"
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
                          <strong>0.1 mm to 100 mm thick</strong> upto <strong>2500 mm width</strong> & upto <strong>8000 mm length</strong> available with <strong>NACE MR 01-75s</strong>.
                        </td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="px-4 py-3 bg-[#1a3e72] text-white font-semibold">Stainless Steel:</td>
                        <td className="px-4 py-3 text-gray-700">
                          <strong>ASTM / ASME SA 240</strong> 304, 304L, 304H, 309S, 309H, 310S, 310H, 316, 316H, 316L, 316 TI, 317, 317L, 321, 321H, 347, 347 H, 409, 410, 410S, 430.
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 bg-[#1a3e72] text-white font-semibold">Duplex Steel:</td>
                        <td className="px-4 py-3 text-gray-700">
                          <strong>ASTM / ASME SA 240 UNS NO.</strong> S 31803, S 32205, S 32550, S 32750, S 32760.
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
                    alt="Nickel and copper alloy sheets and plates for high-performance industrial applications"
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
                          <td className="px-4 py-3 bg-[#f39c12] text-white font-semibold">Sheet and Plates Range:</td>
                          <td className="px-4 py-3 text-gray-700">
                            <strong>5 mm to 100 mm thick</strong> in upto <strong>2500 mm width</strong> & upto <strong>6000 length</strong> available with <strong>NACE MR 01-75s</strong>.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#1a3e72] mb-4">Nickel Alloy Specifications:</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>ASTM / ASME SB 162 UNS 2200</strong> (NICKEL 200) / UNS 2201 (NICKEL 201)</li>
                      <li>• <strong>ASTM / ASME SB 127 UNS 4400</strong> (MONEL 400)</li>
                      <li>• <strong>ASTM / ASME SB 424 UNS 8825</strong> (INCONEL 825)</li>
                      <li>• <strong>ASTM / ASME SB 168 UNS 6600</strong> (INCONEL 600) / UNS 6601 (INCONEL 601)</li>
                      <li>• <strong>ASTM / ASME SB 443 UNS 6625</strong> (INCONEL 625)</li>
                      <li>• <strong>ASTM / ASME SB 574 UNS 10276</strong> (HASTELLOY C 276)</li>
                      <li>• <strong>ASTM / ASME SB 462 UNS 8020</strong> (ALLOY 20 / 20 CB 3)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Additional Materials Section */}
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
                    <h4 className="font-semibold text-[#1a3e72] mb-2">Forms Available:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Hastelloy Sheet</strong></li>
                      <li>• <strong>Hastelloy Coil</strong></li>
                      <li>• <strong>Hastelloy Strips</strong></li>
                      <li>• <strong>Hastelloy Plates</strong></li>
                      <li>• <strong>Hastelloy Circle</strong></li>
                      <li>• <strong>Hastelloy Ring</strong></li>
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
                  <strong>Inconel Sheet and Plates</strong>
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Grades:</strong> Inconel 600, Inconel 601, Inconel 625, Inconel 625LCF, Inconel 686, Inconel 718, Inconel 800, Inconel 825, Inconel X-750
                  </p>
                  <p className="text-gray-700">
                    <strong>Standard:</strong> ASTM / ASME SB 168, ASTM / ASME SB 424, ASTM / ASME SB 443
                  </p>
                </div>
              </motion.div>

              {/* Titanium */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <h3 className="text-xl font-bold text-[#0d2b4e] mb-4">
                  <strong>Titanium</strong>
                </h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <strong>Grades:</strong> Grade 1, Grade 2, Grade 3, Grade 4, Grade 5, Grade 7, Grade 9, Grade 23
                  </p>
                  <div>
                    <h4 className="font-semibold text-[#1a3e72] mb-2">Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Dimensional accuracy</strong></li>
                      <li>• <strong>High strength</strong></li>
                      <li>• <strong>Durability</strong></li>
                      <li>• <strong>Corrosion resistance</strong></li>
                      <li>• <strong>Excellent finish</strong></li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Call-to-Action Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-[#1a3e72] to-[#0d2b4e] rounded-xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Need Custom Plates & Sheets?</h2>
                <p className="text-lg mb-8 opacity-90">
                  Get high-quality <strong>industrial steel plates</strong> and <strong>sheets</strong> manufactured to your exact specifications. Available in various grades and dimensions for all industrial applications.
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