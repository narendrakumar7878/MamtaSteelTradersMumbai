import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Home, ChevronRight, Download, MessageCircle, TrendingUp, Construction, ShoppingCart } from "lucide-react";

export default function AnglesChannels() {
  return (
    <>
      <Helmet>
        <title>Steel Angles & Channels | L-Shaped Angles, C-Channels - Structural Steel Products</title>
        <meta 
          name="description" 
          content="Premium quality steel angles and channels for structural applications. We supply stainless steel angles, carbon steel channels, equal and unequal angles in various sizes and specifications."
        />
        <meta name="keywords" content="steel angles, structural channels, L angles, C channels, equal angles, unequal angles, stainless steel angles, carbon steel channels, construction steel" />
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
              <span className="text-[#1a3e72] font-medium">Angles & Channels</span>
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
              <h1 className="text-4xl md:text-5xl font-bold text-[#0d2b4e] mb-6">
                <strong>Steel Angles & Channels</strong>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                High-quality <strong>steel angles</strong> and <strong>structural channels</strong> for construction and industrial applications. We supply <strong>stainless steel angles</strong>, <strong>carbon steel channels</strong>, and <strong>alloy steel profiles</strong> in various sizes and specifications to meet your project requirements.
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
                alt="High-quality steel angles and channels for structural construction and industrial applications"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
                loading="lazy"
              />
            </motion.div>

            {/* Types of Angles & Channels Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-[#0d2b4e] mb-8 text-center">
                Types of <strong>Steel Angles & Channels</strong>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Equal Angles */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <TrendingUp className="w-8 h-8 text-[#f39c12] mr-3" />
                    <h3 className="text-xl font-semibold text-[#0d2b4e]">Equal Angles</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    <strong>L-shaped steel angles</strong> with equal leg lengths for balanced structural support in construction and industrial applications.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Standard sizes: 20x20mm to 200x200mm</li>
                    <li>• Thickness: 3mm to 20mm</li>
                    <li>• Length: Up to 12 meters</li>
                  </ul>
                </div>

                {/* Unequal Angles */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <Construction className="w-8 h-8 text-[#f39c12] mr-3" />
                    <h3 className="text-xl font-semibold text-[#0d2b4e]">Unequal Angles</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    <strong>Unequal leg angles</strong> designed for specialized structural applications where different leg lengths are required.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Standard sizes: 25x15mm to 200x100mm</li>
                    <li>• Thickness: 3mm to 16mm</li>
                    <li>• Custom dimensions available</li>
                  </ul>
                </div>

                {/* C-Channels */}
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <ShoppingCart className="w-8 h-8 text-[#f39c12] mr-3" />
                    <h3 className="text-xl font-semibold text-[#0d2b4e]">C-Channels</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    <strong>Channel sections</strong> with C-shaped profile for structural framing, purlins, and support beams in construction.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Standard sizes: 75x40mm to 400x100mm</li>
                    <li>• Web thickness: 4.4mm to 11mm</li>
                    <li>• Flange thickness: 6.7mm to 16mm</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Materials & Grades Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-[#0d2b4e] mb-8 text-center">
                Materials & <strong>Steel Grades</strong>
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-semibold text-[#0d2b4e] mb-6">Stainless Steel Angles & Channels</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Austenitic Grades:</h4>
                      <p className="text-gray-600 text-sm">304, 304L, 316, 316L, 321, 347 - Excellent corrosion resistance and formability</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Duplex Grades:</h4>
                      <p className="text-gray-600 text-sm">2205, 2507 - Higher strength and superior corrosion resistance</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Ferritic Grades:</h4>
                      <p className="text-gray-600 text-sm">409, 430, 439 - Cost-effective with good corrosion resistance</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-semibold text-[#0d2b4e] mb-6">Carbon & Alloy Steel</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Carbon Steel:</h4>
                      <p className="text-gray-600 text-sm">A36, A572 Grade 50, A992 - Standard structural grades for construction</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">High Strength Steel:</h4>
                      <p className="text-gray-600 text-sm">A588, A709 - Weather-resistant and high-strength applications</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Alloy Steel:</h4>
                      <p className="text-gray-600 text-sm">4140, 4340, 8620 - Enhanced mechanical properties for demanding applications</p>
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
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-[#0d2b4e] mb-8 text-center">
                <strong>Applications</strong> & Industries
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-[#f8f9fa] rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[#0d2b4e] mb-3">Construction Industry</h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>• Structural framing and support systems</li>
                    <li>• Building frameworks and trusses</li>
                    <li>• Roof purlins and wall girts</li>
                    <li>• Stair stringers and handrails</li>
                  </ul>
                </div>

                <div className="bg-[#f8f9fa] rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[#0d2b4e] mb-3">Industrial Applications</h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>• Equipment frames and brackets</li>
                    <li>• Conveyor systems and supports</li>
                    <li>• Platform and walkway structures</li>
                    <li>• Machine bases and mounting systems</li>
                  </ul>
                </div>

                <div className="bg-[#f8f9fa] rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-[#0d2b4e] mb-3">Infrastructure</h3>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>• Bridge construction and reinforcement</li>
                    <li>• Highway barriers and guardrails</li>
                    <li>• Transmission tower components</li>
                    <li>• Marine and offshore structures</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Standards & Certifications */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-[#0d2b4e] mb-8 text-center">
                <strong>Standards</strong> & Certifications
              </h2>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                  <div>
                    <h3 className="font-semibold text-[#0d2b4e] mb-2">ASTM Standards</h3>
                    <p className="text-sm text-gray-600">A36, A572, A588, A992, A276</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0d2b4e] mb-2">EN Standards</h3>
                    <p className="text-sm text-gray-600">EN 10025, EN 10088, EN 10219</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0d2b4e] mb-2">JIS Standards</h3>
                    <p className="text-sm text-gray-600">JIS G3101, JIS G4303, JIS G3444</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0d2b4e] mb-2">IS Standards</h3>
                    <p className="text-sm text-gray-600">IS 2062, IS 6603, IS 1161</p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Technical Specifications */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-[#0d2b4e] mb-8 text-center">
                <strong>Technical Specifications</strong>
              </h2>
              
              <div className="bg-white rounded-xl p-8 shadow-lg overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="text-left py-3 text-[#0d2b4e] font-semibold">Product Type</th>
                      <th className="text-left py-3 text-[#0d2b4e] font-semibold">Size Range</th>
                      <th className="text-left py-3 text-[#0d2b4e] font-semibold">Thickness</th>
                      <th className="text-left py-3 text-[#0d2b4e] font-semibold">Length</th>
                      <th className="text-left py-3 text-[#0d2b4e] font-semibold">Finish</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-600">
                    <tr className="border-b border-gray-100">
                      <td className="py-3 font-medium">Equal Angles</td>
                      <td className="py-3">20x20mm - 200x200mm</td>
                      <td className="py-3">3mm - 20mm</td>
                      <td className="py-3">6m - 12m</td>
                      <td className="py-3">Hot Rolled, Cold Formed</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 font-medium">Unequal Angles</td>
                      <td className="py-3">25x15mm - 200x100mm</td>
                      <td className="py-3">3mm - 16mm</td>
                      <td className="py-3">6m - 12m</td>
                      <td className="py-3">Hot Rolled, Cold Formed</td>
                    </tr>
                    <tr className="border-b border-gray-100">
                      <td className="py-3 font-medium">C-Channels</td>
                      <td className="py-3">75x40mm - 400x100mm</td>
                      <td className="py-3">4.4mm - 16mm</td>
                      <td className="py-3">6m - 12m</td>
                      <td className="py-3">Hot Rolled, Cold Formed</td>
                    </tr>
                    <tr>
                      <td className="py-3 font-medium">U-Channels</td>
                      <td className="py-3">50x25mm - 300x100mm</td>
                      <td className="py-3">4mm - 15mm</td>
                      <td className="py-3">6m - 12m</td>
                      <td className="py-3">Hot Rolled, Cold Formed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.section>

            {/* Call to Action */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-[#0d2b4e] to-[#1a3e72] rounded-2xl p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Need <strong>Steel Angles & Channels</strong>?
                </h2>
                <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
                  Get high-quality steel angles and channels for your construction and industrial projects. Our expert team provides technical support and customized solutions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center px-8 py-4 bg-[#f39c12] text-white font-semibold rounded-lg hover:bg-[#e67e22] transition-colors duration-300"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Request Quote
                  </Link>
                  <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-[#0d2b4e] transition-all duration-300">
                    <Download className="w-5 h-5 mr-2" />
                    Download Catalog
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