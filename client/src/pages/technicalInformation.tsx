import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Home, ChevronRight, BookOpen, Gauge, Shield, TrendingUp } from "lucide-react";

const technicalData = [
  {
    title: "Stainless Steel Properties",
    icon: Shield,
    content: "Our stainless steel products feature exceptional corrosion resistance, high temperature performance, and excellent mechanical properties. Manufactured according to international standards including ASTM, ASME, and EN specifications."
  },
  {
    title: "Manufacturing Standards",
    icon: Gauge,
    content: "All products are manufactured following stringent quality control processes with adherence to ISO 9001:2015 standards. Our stainless steel pipe specifications meet ASTM A312 and ASME B36.19M requirements."
  },
  {
    title: "Performance Testing",
    icon: TrendingUp,
    content: "Comprehensive testing includes chemical composition analysis, mechanical testing, non-destructive testing, and dimensional verification to ensure optimal carbon alloy steel performance."
  }
];

export default function TechnicalInformation() {
  return (
    <>
      <Helmet>
        <title>Technical Information - Stainless Steel Specifications | Mamta Steel Traders</title>
        <meta 
          name="description" 
          content="Comprehensive technical information on stainless steel specifications, chemical composition, and pipe specifications. Expert guidance on carbon alloy steel properties and manufacturing standards."
        />
        <meta name="keywords" content="stainless steel, technical information, pipe specification, chemical composition, carbon alloy steel, manufacturing standards" />
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
              <span className="text-[#1a3e72] font-medium">Technical Information</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header Section */}
            <header className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex justify-center mb-6"
              >
                <div className="p-4 bg-[#1a3e72] rounded-full">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-[#0d2b4e] mb-6">
                Technical Information
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive technical specifications and detailed information about our premium stainless steel products, 
                chemical composition standards, and carbon alloy steel pipe specifications for industrial applications.
              </p>
            </header>

            {/* Technical Data Cards */}
            <section className="grid md:grid-cols-1 gap-8 mb-12">
              {technicalData.map((item, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#f39c12] rounded-lg flex-shrink-0">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-[#0d2b4e] mb-4">{item.title}</h2>
                      <p className="text-gray-700 leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </section>

            {/* Technical Specifications Overview */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-[#0d2b4e] mb-6 text-center">
                Stainless Steel Technical Overview
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-4">Material Grades</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• SS 304 - General purpose stainless steel</li>
                    <li>• SS 316L - Enhanced corrosion resistance</li>
                    <li>• SS 321 - High temperature applications</li>
                    <li>• SS 310 - Extreme heat resistance</li>
                    <li>• Duplex 2205 - Superior strength</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-4">Applications</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Chemical processing equipment</li>
                    <li>• Food and beverage industry</li>
                    <li>• Pharmaceutical manufacturing</li>
                    <li>• Oil and gas pipelines</li>
                    <li>• Architectural structures</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-center mt-12"
            >
              <div className="bg-gradient-to-r from-[#1a3e72] to-[#0d2b4e] rounded-xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Need Detailed Specifications?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Contact our technical team for comprehensive pipe specification data and chemical composition details.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-[#f39c12] text-white font-semibold rounded-lg hover:bg-[#e67e22] transition-colors duration-300"
                >
                  Get Technical Support
                </Link>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </main>
    </>
  );
}