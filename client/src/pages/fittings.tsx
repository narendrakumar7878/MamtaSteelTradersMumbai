import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Home, ChevronRight, Download, MessageCircle } from "lucide-react";

export default function Fittings() {
  return (
    <>
      <Helmet>
        <title>Pipe Fittings | Elbows, Tees, Reducers - Stainless Steel Fittings</title>
        <meta 
          name="description" 
          content="High-quality pipe fittings including elbows, tees, reducers, couplings, caps, and stub ends in stainless steel, duplex steel, and specialty alloys for industrial applications."
        />
        <meta name="keywords" content="pipe fittings, elbow fittings, tee fittings, reducer fittings, coupling fittings, cap fittings, stub end fittings, stainless steel fittings, ASTM ASME fittings" />
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
              <span className="text-[#1a3e72] font-medium">Pipe Fittings</span>
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
                <strong>Pipe Fittings</strong>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Comprehensive range of <strong>industrial pipe fittings</strong> manufactured to the highest standards. We supply <strong>stainless steel fittings</strong>, <strong>duplex steel fittings</strong>, and <strong>specialty alloy fittings</strong> for demanding piping applications across various industries.
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
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=400&fit=crop&crop=center" 
                alt="High-quality industrial pipe fittings including elbows, tees, reducers, and couplings for piping systems"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
                loading="lazy"
              />
            </motion.div>

            {/* Types of Fittings Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-[#0d2b4e] mb-8">
                <strong>Types of Pipe Fittings</strong>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Elbows</strong>
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Change direction in piping systems. Available in 45°, 90°, and 180° configurations.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>45° Elbow</strong> - Short radius and long radius</li>
                    <li>• <strong>90° Elbow</strong> - Short radius and long radius</li>
                    <li>• <strong>180° Return Elbow</strong></li>
                    <li>• <strong>Reducing Elbow</strong></li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Tees</strong>
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Create branch connections in piping systems for flow distribution.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Equal Tee</strong> - Same diameter on all outlets</li>
                    <li>• <strong>Reducing Tee</strong> - Different diameter branch</li>
                    <li>• <strong>Barred Tee</strong> - With internal reinforcement</li>
                    <li>• <strong>Wye Tee</strong> - Y-shaped configuration</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Reducers</strong>
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Connect pipes of different diameters for size transitions.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Concentric Reducer</strong> - Centered reduction</li>
                    <li>• <strong>Eccentric Reducer</strong> - Off-center reduction</li>
                    <li>• <strong>Swage Nipple</strong> - Threaded reducer</li>
                    <li>• <strong>Reducer Insert</strong> - Socket weld type</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Couplings</strong>
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Join two pipes of the same diameter for straight connections.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Full Coupling</strong> - Standard length</li>
                    <li>• <strong>Half Coupling</strong> - Branch connection</li>
                    <li>• <strong>Reducing Coupling</strong> - Different diameters</li>
                    <li>• <strong>Socket Weld Coupling</strong></li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Caps</strong>
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Close the end of pipes for permanent or temporary sealing.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Pipe Cap</strong> - Butt weld end closing</li>
                    <li>• <strong>Socket Weld Cap</strong> - Socket connection</li>
                    <li>• <strong>Threaded Cap</strong> - Screwed connection</li>
                    <li>• <strong>Ellipsoidal Cap</strong> - Pressure vessel end</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Stub Ends</strong>
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Used with lap joint flanges for easy disassembly and alignment.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Type A</strong> - Standard dimensions</li>
                    <li>• <strong>Type B</strong> - Long pattern</li>
                    <li>• <strong>Type C</strong> - Short pattern</li>
                    <li>• <strong>MSS Type</strong> - Special applications</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Size & Material Grades Table */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-[#0d2b4e] mb-8">
                <strong>Sizes & Material Grades</strong>
              </h2>

              <div className="overflow-x-auto mb-8">
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
                        <strong>15 NB up to 600 NB</strong> in SCH 5S, 10S, 10, 20, 40S, 40, STD, 60, 80S, 80, XS, 100, 120, 140, 160 & XXS
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-semibold text-[#0d2b4e]">Standards</td>
                      <td className="px-4 py-3 text-gray-700">
                        <strong>ASTM, ASME, API, AISI, BS, ANSI, DIN, JIS, MSSP, NACE</strong>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-semibold text-[#0d2b4e]">Connection Type</td>
                      <td className="px-4 py-3 text-gray-700">
                        <strong>Butt Weld, Socket Weld, Threaded (NPT/BSP)</strong>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-semibold text-[#0d2b4e]">Pressure Rating</td>
                      <td className="px-4 py-3 text-gray-700">
                        <strong>2000 LBS, 3000 LBS, 6000 LBS, 9000 LBS</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-[#0d2b4e]">Testing</td>
                      <td className="px-4 py-3 text-gray-700">
                        <strong>Hydrostatic Test, PMI Test, Dimensional Inspection</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Stainless Steel Grades */}
                <div>
                  <h3 className="text-2xl font-semibold text-[#1a3e72] mb-6">
                    <strong>Stainless Steel Fittings</strong>
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0d2b4e] mb-2">ASTM / ASME SA 403</h4>
                      <p className="text-gray-700 text-sm">
                        <strong>Grades:</strong> WP304, WP304L, WP304H, WP309, WP310, WP316, WP316L, WP316Ti, WP317, WP317L, WP321, WP321H, WP347, WP347H
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0d2b4e] mb-2">Duplex Steel Fittings</h4>
                      <p className="text-gray-700 text-sm">
                        <strong>Grades:</strong> UNS S31803, S32205, S32750, S32760, S32550
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0d2b4e] mb-2">Super Duplex Steel</h4>
                      <p className="text-gray-700 text-sm">
                        <strong>Grades:</strong> UNS S32750, S32760, SAF 2507
                      </p>
                    </div>
                  </div>
                </div>

                {/* Special Alloys */}
                <div>
                  <h3 className="text-2xl font-semibold text-[#1a3e72] mb-6">
                    <strong>Specialty Alloy Fittings</strong>
                  </h3>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0d2b4e] mb-2">Inconel Fittings</h4>
                      <p className="text-gray-700 text-sm">
                        <strong>Grades:</strong> Inconel 600, 601, 625, 686, 718, 800, 825, X-750
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0d2b4e] mb-2">Hastelloy Fittings</h4>
                      <p className="text-gray-700 text-sm">
                        <strong>Grades:</strong> Hastelloy C22, C276, C2000, B2, B3
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0d2b4e] mb-2">Monel Fittings</h4>
                      <p className="text-gray-700 text-sm">
                        <strong>Grades:</strong> Monel 400, Monel K500
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0d2b4e] mb-2">Titanium Fittings</h4>
                      <p className="text-gray-700 text-sm">
                        <strong>Grades:</strong> Grade 1, Grade 2, Grade 5, Grade 7, Grade 9
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Applications Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-[#0d2b4e] mb-8">
                <strong>Industry Applications</strong>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Petrochemical Plants</strong>
                  </h3>
                  <p className="text-gray-700">
                    Oil refineries, chemical processing, and petrochemical facilities requiring corrosion-resistant fittings.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Fertilizer Plants</strong>
                  </h3>
                  <p className="text-gray-700">
                    Chemical fertilizer manufacturing with aggressive media handling requirements.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Sugar Mills</strong>
                  </h3>
                  <p className="text-gray-700">
                    Sugar processing plants requiring hygienic and corrosion-resistant piping systems.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Chemical Plants</strong>
                  </h3>
                  <p className="text-gray-700">
                    Chemical processing industries with demanding corrosion and temperature requirements.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Pharmaceuticals</strong>
                  </h3>
                  <p className="text-gray-700">
                    Pharmaceutical manufacturing requiring ultra-clean and sterile piping systems.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Textile Machinery</strong>
                  </h3>
                  <p className="text-gray-700">
                    Textile processing equipment requiring precision-engineered fitting solutions.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Call-to-Action Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-[#1a3e72] to-[#0d2b4e] rounded-xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Need Custom Pipe Fittings?</h2>
                <p className="text-lg mb-8 opacity-90">
                  Get high-quality <strong>pipe fittings</strong> manufactured to your exact specifications. Available in all standard sizes, schedules, and materials for demanding piping applications.
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