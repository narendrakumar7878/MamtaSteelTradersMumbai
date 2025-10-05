import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Home, ChevronRight, Download, MessageCircle } from "lucide-react";

export default function Fasteners() {
  return (
    <>
      <Helmet>
        <title>Industrial Fasteners | Bolts, Nuts, Screws - Stainless Steel Fasteners</title>
        <meta 
          name="description" 
          content="High-quality industrial fasteners including bolts, nuts, screws, washers, and studs in stainless steel, duplex steel, and specialty alloys for critical applications."
        />
        <meta name="keywords" content="industrial fasteners, stainless steel bolts, nuts, screws, washers, studs, ASTM fasteners, duplex steel fasteners, high strength fasteners" />
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
              <span className="text-[#1a3e72] font-medium">Industrial Fasteners</span>
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
                <strong>Industrial Fasteners</strong>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Premium quality <strong>industrial fasteners</strong> engineered for critical applications. We supply <strong>stainless steel fasteners</strong>, <strong>duplex steel fasteners</strong>, and <strong>specialty alloy fasteners</strong> meeting the highest industry standards for strength, durability, and corrosion resistance.
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
                src="https://images.unsplash.com/photo-1609205253004-0c4e5e5df06e?w=1200&h=400&fit=crop&crop=center" 
                alt="High-quality industrial fasteners including stainless steel bolts, nuts, screws, and washers for critical applications"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
                loading="lazy"
              />
            </motion.div>

            {/* Types of Fasteners Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-[#0d2b4e] mb-8">
                <strong>Types of Industrial Fasteners</strong>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Bolts</strong>
                  </h3>
                  <p className="text-gray-700 mb-3">
                    High-strength bolts for critical structural and mechanical connections.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Hex Head Bolts</strong> - Standard and heavy hex</li>
                    <li>• <strong>Socket Head Cap Screws</strong> - High strength</li>
                    <li>• <strong>Carriage Bolts</strong> - Round head with square neck</li>
                    <li>• <strong>U-Bolts</strong> - Pipe and structural clamps</li>
                    <li>• <strong>Eye Bolts</strong> - Lifting applications</li>
                    <li>• <strong>Anchor Bolts</strong> - Foundation anchoring</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Nuts</strong>
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Precision-engineered nuts for secure and reliable fastening systems.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Hex Nuts</strong> - Standard and heavy duty</li>
                    <li>• <strong>Lock Nuts</strong> - Prevailing torque type</li>
                    <li>• <strong>Flange Nuts</strong> - Integrated washer</li>
                    <li>• <strong>Wing Nuts</strong> - Hand-tightened applications</li>
                    <li>• <strong>Cap Nuts</strong> - Decorative and protective</li>
                    <li>• <strong>Square Nuts</strong> - Anti-rotation design</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Screws</strong>
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Comprehensive range of screws for assembly and fastening applications.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Machine Screws</strong> - Precision threaded</li>
                    <li>• <strong>Self-Tapping Screws</strong> - Thread forming</li>
                    <li>• <strong>Socket Head Screws</strong> - Allen key drive</li>
                    <li>• <strong>Thumb Screws</strong> - Hand operation</li>
                    <li>• <strong>Set Screws</strong> - Grub screws</li>
                    <li>• <strong>Wood Screws</strong> - Tapered thread</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Washers</strong>
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Load distribution and sealing washers for optimal fastener performance.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Flat Washers</strong> - Load distribution</li>
                    <li>• <strong>Lock Washers</strong> - Spring and split type</li>
                    <li>• <strong>Fender Washers</strong> - Large diameter</li>
                    <li>• <strong>Sealing Washers</strong> - Rubber and metal</li>
                    <li>• <strong>Belleville Washers</strong> - Conical spring</li>
                    <li>• <strong>Wave Washers</strong> - Multi-wave spring</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Studs</strong>
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Threaded rods and studs for permanent and semi-permanent connections.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Fully Threaded Studs</strong> - Complete thread</li>
                    <li>• <strong>Double End Studs</strong> - Both ends threaded</li>
                    <li>• <strong>Tap End Studs</strong> - One end for tapping</li>
                    <li>• <strong>Threaded Rod</strong> - Continuous thread</li>
                    <li>• <strong>B7 Studs</strong> - High temperature service</li>
                    <li>• <strong>B8 Studs</strong> - Stainless steel grade</li>
                  </ul>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Specialty Fasteners</strong>
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Custom and specialty fasteners for unique application requirements.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Security Fasteners</strong> - Tamper resistant</li>
                    <li>• <strong>Captive Fasteners</strong> - Panel attachments</li>
                    <li>• <strong>Thumb Fasteners</strong> - Quick release</li>
                    <li>• <strong>Rivet Nuts</strong> - Blind threaded inserts</li>
                    <li>• <strong>Clevis Pins</strong> - Pivot connections</li>
                    <li>• <strong>Cotter Pins</strong> - Safety locking</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Grades & Sizes Table */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-[#0d2b4e] mb-8">
                <strong>Grades & Sizes</strong>
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
                        <strong>M3 to M100</strong> (Metric) | <strong>#2 to 4"</strong> (Imperial) | Custom sizes available
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-semibold text-[#0d2b4e]">Thread Types</td>
                      <td className="px-4 py-3 text-gray-700">
                        <strong>Metric (M), UNC, UNF, BSW, BSF, ACME, Trapezoidal</strong>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-semibold text-[#0d2b4e]">Strength Grades</td>
                      <td className="px-4 py-3 text-gray-700">
                        <strong>Grade 2, Grade 5, Grade 8, A325, A490, B7, B8</strong>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="px-4 py-3 font-semibold text-[#0d2b4e]">Standards</td>
                      <td className="px-4 py-3 text-gray-700">
                        <strong>ASTM, ASME, DIN, ISO, JIS, BS, ANSI</strong>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-semibold text-[#0d2b4e]">Testing</td>
                      <td className="px-4 py-3 text-gray-700">
                        <strong>Tensile Test, Proof Load Test, Hardness Test, Dimensional Inspection</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Stainless Steel Grades */}
                <div>
                  <h3 className="text-2xl font-semibold text-[#1a3e72] mb-6">
                    <strong>Stainless Steel Fasteners</strong>
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0d2b4e] mb-2">ASTM A193 Grade B8</h4>
                      <p className="text-gray-700 text-sm">
                        <strong>Material:</strong> 304 Stainless Steel - General purpose, good corrosion resistance
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0d2b4e] mb-2">ASTM A193 Grade B8M</h4>
                      <p className="text-gray-700 text-sm">
                        <strong>Material:</strong> 316 Stainless Steel - Enhanced corrosion resistance, marine applications
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0d2b4e] mb-2">ASTM A193 Grade B8T</h4>
                      <p className="text-gray-700 text-sm">
                        <strong>Material:</strong> 321 Stainless Steel - High temperature applications
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0d2b4e] mb-2">Duplex Steel Fasteners</h4>
                      <p className="text-gray-700 text-sm">
                        <strong>Grades:</strong> S31803, S32205, S32750, S32760 - Super duplex grades
                      </p>
                    </div>
                  </div>
                </div>

                {/* Carbon & Alloy Steel */}
                <div>
                  <h3 className="text-2xl font-semibold text-[#1a3e72] mb-6">
                    <strong>Carbon & Alloy Steel Fasteners</strong>
                  </h3>

                  <div className="space-y-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0d2b4e] mb-2">ASTM A193 Grade B7</h4>
                      <p className="text-gray-700 text-sm">
                        <strong>Material:</strong> Chrome-Moly Steel - High temperature and pressure service
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0d2b4e] mb-2">ASTM A325</h4>
                      <p className="text-gray-700 text-sm">
                        <strong>Material:</strong> Structural Bolts - High strength structural connections
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0d2b4e] mb-2">ASTM A490</h4>
                      <p className="text-gray-700 text-sm">
                        <strong>Material:</strong> Heat Treated Steel - Ultra-high strength structural bolts
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-[#0d2b4e] mb-2">Special Alloys</h4>
                      <p className="text-gray-700 text-sm">
                        <strong>Materials:</strong> Inconel, Hastelloy, Monel, Titanium - Exotic applications
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Coatings & Finishes */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-[#0d2b4e] mb-8">
                <strong>Coatings & Finishes</strong>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="bg-[#f39c12] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">Zn</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0d2b4e] mb-2">
                    <strong>Zinc Plating</strong>
                  </h3>
                  <p className="text-gray-600 text-sm">Standard corrosion protection for carbon steel fasteners</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="bg-[#1a3e72] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">HDG</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0d2b4e] mb-2">
                    <strong>Hot Dip Galvanizing</strong>
                  </h3>
                  <p className="text-gray-600 text-sm">Superior long-term corrosion protection for outdoor applications</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="bg-[#f39c12] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">SS</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0d2b4e] mb-2">
                    <strong>Passivation</strong>
                  </h3>
                  <p className="text-gray-600 text-sm">Chemical treatment to enhance stainless steel corrosion resistance</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="bg-[#1a3e72] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">PTFE</span>
                  </div>
                  <h3 className="text-lg font-semibold text-[#0d2b4e] mb-2">
                    <strong>PTFE Coating</strong>
                  </h3>
                  <p className="text-gray-600 text-sm">Low friction coating for special applications and environments</p>
                </div>
              </div>
            </motion.section>

            {/* Applications */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-12"
            >
              <h2 className="text-2xl font-bold text-[#0d2b4e] mb-8">
                <strong>Industry Applications</strong>
              </h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Construction</strong>
                  </h3>
                  <p className="text-gray-700">
                    Structural bolting, steel frame construction, bridge building, and infrastructure projects requiring high-strength fasteners.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Automotive</strong>
                  </h3>
                  <p className="text-gray-700">
                    Engine assembly, chassis components, suspension systems, and safety-critical automotive applications.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Aerospace</strong>
                  </h3>
                  <p className="text-gray-700">
                    Aircraft structures, engine components, and space applications requiring lightweight, high-strength fasteners.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Marine</strong>
                  </h3>
                  <p className="text-gray-700">
                    Shipbuilding, offshore platforms, marine equipment requiring superior corrosion resistance in saltwater environments.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Power Generation</strong>
                  </h3>
                  <p className="text-gray-700">
                    Turbines, generators, pressure vessels, and nuclear applications requiring high-temperature resistance.
                  </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">
                    <strong>Chemical Processing</strong>
                  </h3>
                  <p className="text-gray-700">
                    Equipment assembly in corrosive environments, chemical plants, and process industries.
                  </p>
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
                <h2 className="text-2xl font-bold mb-4">Need Custom Fasteners?</h2>
                <p className="text-lg mb-8 opacity-90">
                  Get high-quality <strong>industrial fasteners</strong> manufactured to your exact specifications. Available in all grades, sizes, and materials for critical applications.
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