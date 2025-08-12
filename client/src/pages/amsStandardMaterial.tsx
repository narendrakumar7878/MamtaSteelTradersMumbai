import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Home, ChevronRight, Award, FileText, Settings } from "lucide-react";

export default function AmsStandardMaterial() {
  return (
    <>
      <Helmet>
        <title>AMS Standard Material Specifications | Aerospace Material Standards</title>
        <meta 
          name="description" 
          content="AMS (Aerospace Material Standards) specifications for aerospace and high-performance applications. Comprehensive material standards and requirements for critical components."
        />
        <meta name="keywords" content="AMS standards, aerospace materials, aerospace material standards, AMS specifications, aviation materials, high performance materials" />
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
              <Link href="/technicalInformation" className="text-gray-600 hover:text-[#1a3e72] transition-colors">
                Technical Info
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-[#1a3e72] font-medium">AMS Standard Material</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
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
                  <Award className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-[#0d2b4e] mb-6">
                AMS Standard Material
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                This page will contain AMS Standard Material specifications. AMS (Aerospace Material Standards) 
                provide comprehensive specifications for materials used in aerospace and high-performance applications.
              </p>
            </header>

            {/* Content Placeholder Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-12"
            >
              <div className="flex items-center space-x-3 mb-6">
                <FileText className="w-7 h-7 text-[#f39c12]" />
                <h2 className="text-3xl font-bold text-[#0d2b4e]">Coming Soon</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  This section will feature comprehensive AMS Standard Material specifications including:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">Material Categories</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Aerospace Alloys</li>
                      <li>• High-Temperature Materials</li>
                      <li>• Corrosion-Resistant Materials</li>
                      <li>• Structural Materials</li>
                      <li>• Specialty Coatings</li>
                      <li>• Fastener Materials</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-[#1a3e72] mb-3">Standard Types</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• AMS Material Specifications</li>
                      <li>• AMS Process Specifications</li>
                      <li>• AMS Quality Standards</li>
                      <li>• AMS Testing Requirements</li>
                      <li>• AMS Certification Guidelines</li>
                      <li>• AMS Traceability Standards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Information Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Settings className="w-6 h-6 text-[#f39c12]" />
                  <h3 className="text-xl font-bold text-[#0d2b4e]">Precision Standards</h3>
                </div>
                <p className="text-gray-600">
                  Detailed specifications for aerospace-grade materials meeting the highest industry standards for critical applications.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Award className="w-6 h-6 text-[#f39c12]" />
                  <h3 className="text-xl font-bold text-[#0d2b4e]">Quality Assurance</h3>
                </div>
                <p className="text-gray-600">
                  Comprehensive quality control measures and testing protocols ensuring material reliability and performance.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <FileText className="w-6 h-6 text-[#f39c12]" />
                  <h3 className="text-xl font-bold text-[#0d2b4e]">Documentation</h3>
                </div>
                <p className="text-gray-600">
                  Complete material certification and traceability documentation for aerospace and defense applications.
                </p>
              </motion.div>
            </div>

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-[#1a3e72] to-[#0d2b4e] rounded-xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Need AMS Standard Materials?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Contact us for detailed information about AMS standard materials and aerospace-grade specifications for your critical applications.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-[#f39c12] text-white font-semibold rounded-lg hover:bg-[#e67e22] transition-colors duration-300"
                >
                  Get AMS Material Information
                </Link>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </main>
    </>
  );
}