import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Home, ChevronRight, Download, MessageCircle } from "lucide-react";

export default function Flanges() {
  return (
    <>
      <Helmet>
        <title>Flanges | Weld Neck, Slip On, Blind Flanges - Stainless Steel</title>
        <meta 
          name="description" 
          content="High-quality industrial flanges including Weld Neck, Slip On, Blind, Socket Weld, Lap Joint, and Threaded flanges in stainless steel, duplex steel, and specialty alloys."
        />
        <meta name="keywords" content="flanges, weld neck flange, slip on flange, blind flange, socket weld flange, lap joint flange, threaded flange, stainless steel flanges, ASTM ASME flanges" />
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
              <span className="text-[#1a3e72] font-medium">Flanges</span>
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
                <strong>Flanges</strong>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Premium quality <strong>industrial flanges</strong> manufactured to meet the highest standards for piping systems. We supply a comprehensive range of <strong>stainless steel flanges</strong>, <strong>duplex steel flanges</strong>, and <strong>specialty alloy flanges</strong> for various industrial applications.
              </p>
            </header>

            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-16"
            >
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&h=400&fit=crop&crop=center" 
                alt="High-quality industrial flanges including weld neck, slip on, and blind flanges for piping systems"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
                loading="lazy"
              />
            </motion.div>

            {/* Types of Flanges Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-[#0d2b4e] mb-8">
                <strong>Types of Flanges</strong>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Weld Neck Flange</strong>
                  </h3>
                  <p className="text-gray-700">
                    Provides excellent stress distribution and is ideal for high-pressure applications. The long tapered hub provides reinforcement for the attachment.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Slip On Flange</strong>
                  </h3>
                  <p className="text-gray-700">
                    Easy to install and cost-effective. The pipe slips into the flange and is then welded both inside and outside for secure connection.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Blind Flange</strong>
                  </h3>
                  <p className="text-gray-700">
                    Used to close the end of piping systems or pressure vessel openings. Essential for maintenance access and system isolation.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Socket Weld Flange</strong>
                  </h3>
                  <p className="text-gray-700">
                    Designed for smaller diameter pipes. The pipe is inserted into the socket and welded externally, providing excellent strength.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Lap Joint Flange</strong>
                  </h3>
                  <p className="text-gray-700">
                    Used with stub ends for easy alignment and disassembly. Ideal for systems requiring frequent maintenance and inspection.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Threaded Flange</strong>
                  </h3>
                  <p className="text-gray-700">
                    Features internal threads for connection without welding. Perfect for applications where welding is not feasible or desired.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Material Grades & Standards Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-[#0d2b4e] mb-8">
                <strong>Material Grades & Standards</strong>
              </h2>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Stainless Steel */}
                <div>
                  <h3 className="text-2xl font-semibold text-[#1a3e72] mb-6">
                    <strong>Stainless Steel Flanges</strong>
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0d2b4e] mb-2">ASTM / ASME SA 182</h4>
                      <p className="text-gray-700 text-sm">
                        <strong>Grades:</strong> F304, F304L, F304H, F309, F310, F316, F316L, F316Ti, F317, F317L, F321, F321H, F347, F347H, F410, F420, F430, F431, F440A, F440B, F440C
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0d2b4e] mb-2">Duplex Steel Flanges</h4>
                      <p className="text-gray-700 text-sm">
                        <strong>Grades:</strong> F51 (S31803), F53 (S32750), F55 (S32760), F60 (S32205), F61 (S32550)
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0d2b4e] mb-2">Super Duplex Steel</h4>
                      <p className="text-gray-700 text-sm">
                        <strong>Grades:</strong> F53 (UNS S32750), F55 (UNS S32760), SAF 2507
                      </p>
                    </div>
                  </div>
                </div>

                {/* Nickel Alloys */}
                <div>
                  <h3 className="text-2xl font-semibold text-[#1a3e72] mb-6">
                    <strong>Nickel Alloy Flanges</strong>
                  </h3>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0d2b4e] mb-2">Inconel Flanges</h4>
                      <p className="text-gray-700 text-sm">
                        <strong>Grades:</strong> Inconel 600, 601, 625, 686, 718, 725, 750, 800, 825, X-750
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0d2b4e] mb-2">Hastelloy Flanges</h4>
                      <p className="text-gray-700 text-sm">
                        <strong>Grades:</strong> Hastelloy C22, C276, C2000, B2, B3, X
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0d2b4e] mb-2">Monel Flanges</h4>
                      <p className="text-gray-700 text-sm">
                        <strong>Grades:</strong> Monel 400, Monel K500
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0d2b4e] mb-2">Incoloy Flanges</h4>
                      <p className="text-gray-700 text-sm">
                        <strong>Grades:</strong> Incoloy 800, 800H, 800HT, 825, 925, A286
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Specifications Table */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-[#0d2b4e] mb-8">
                <strong>Specifications & Standards</strong>
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-gray-50 rounded-lg overflow-hidden shadow-sm">
                  <thead>
                    <tr className="bg-[#1a3e72] text-white">
                      <th className="px-4 py-3 text-left font-semibold">Parameter</th>
                      <th className="px-4 py-3 text-left font-semibold">Specification</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-semibold text-[#0d2b4e]">Size Range</td>
                      <td className="px-4 py-3 text-gray-700">
                        <strong>15 NB up to 1500 NB</strong> in 150 LBS, 300 LBS, 600 LBS, 900 LBS, 1500 LBS, 2500 LBS available with <strong>NACE MR 01-75</strong>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-semibold text-[#0d2b4e]">Standards</td>
                      <td className="px-4 py-3 text-gray-700">
                        <strong>ASTM, ASME, API, AISI, BS, ANSI, DIN, JIS, MSSP, NACE</strong>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-semibold text-[#0d2b4e]">Types</td>
                      <td className="px-4 py-3 text-gray-700">
                        <strong>Socket Weld, Slip On, Blind, Lapped, Screwed, Weld Neck, Long Weld Neck, Reducing, Spectacle, Ring Joint</strong>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-semibold text-[#0d2b4e]">Pressure Class</td>
                      <td className="px-4 py-3 text-gray-700">
                        <strong>150#, 300#, 600#, 900#, 1500#, 2500#</strong>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-semibold text-[#0d2b4e]">Facing Types</td>
                      <td className="px-4 py-3 text-gray-700">
                        <strong>Flat Face (FF), Raised Face (RF), Ring Type Joint (RTJ)</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-[#0d2b4e]">Features</td>
                      <td className="px-4 py-3 text-gray-700">
                        <strong>Dimensional accuracy, High strength, Durability, Corrosion resistance, Excellent finish</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.section>

            {/* Applications Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-[#0d2b4e] mb-8">
                <strong>Industry Applications</strong>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="bg-[#f39c12] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">⚡</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0d2b4e] mb-2">
                    <strong>Petrochemicals</strong>
                  </h3>
                  <p className="text-gray-600 text-sm">Oil refineries, chemical processing plants, and petrochemical facilities</p>
                </div>

                <div className="text-center">
                  <div className="bg-[#1a3e72] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">⚙</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0d2b4e] mb-2">
                    <strong>Power Generation</strong>
                  </h3>
                  <p className="text-gray-600 text-sm">Thermal power plants, nuclear facilities, and renewable energy systems</p>
                </div>

                <div className="text-center">
                  <div className="bg-[#f39c12] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">🏭</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0d2b4e] mb-2">
                    <strong>Process Industries</strong>
                  </h3>
                  <p className="text-gray-600 text-sm">Food processing, pharmaceuticals, and chemical manufacturing</p>
                </div>

                <div className="text-center">
                  <div className="bg-[#1a3e72] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">🚢</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0d2b4e] mb-2">
                    <strong>Marine & Offshore</strong>
                  </h3>
                  <p className="text-gray-600 text-sm">Shipbuilding, offshore platforms, and marine equipment</p>
                </div>
              </div>
            </motion.section>

            {/* Call-to-Action Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-[#1a3e72] to-[#0d2b4e] rounded-xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Need Custom Flanges?</h2>
                <p className="text-lg mb-8 opacity-90">
                  Get high-quality <strong>industrial flanges</strong> manufactured to your exact specifications. Available in all standard sizes, pressure classes, and materials for demanding applications.
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