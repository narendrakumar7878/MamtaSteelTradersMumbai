import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Home, ChevronRight, Award, FileText, Settings } from "lucide-react";

export default function AmsStandardMaterial() {
  return (
    <>
      <Helmet>
        <title>AMS Standard Material Specifications | Aerospace, ASTM, Stainless Steel, High Temperature Alloys</title>
        <meta 
          name="description" 
          content="AMS Standard Material specifications for aerospace, defense, automotive, stainless steel, and high temperature alloys. Learn about ASTM, AMS usage, and detailed alloy lists."
        />
        <meta name="keywords" content="AMS standards, aerospace materials, ASTM, stainless steel, high temperature alloys, aerospace material specifications, aviation materials" />
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
              
              <h1 className="text-heading md:text-heading font-bold text-[#0d2b4e] mb-6">
                <strong>AMS Standard Material</strong>
              </h1>
            </header>

            {/* Main Content Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-12"
            >
              <article className="space-y-8">
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    <strong>AMS stands for Aerospace Material Specifications</strong>, a set of standards and specifications developed by the Society of Automotive Engineers (SAE). These standards are widely used to define the requirements for materials used in aerospace, defense, and high-performance applications such as automotive, power generation, and oil and gas applications.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    The thermal Steel and Alloys discuss these <strong>AMS Standard Material</strong> and not use ideal devices and Supply for importing all our clients application.
                  </p>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    Thermal Steel and Alloys value objective is to identify all convenient adversary by offering a comprehensive and flexible range of products and services.
                  </p>
                </div>

                <section className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#f39c12] mb-4">What is AMS?</h2>
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      AMS (Aerospace Material Specifications), developed by the Society of Automotive Engineers (SAE), provides standards applicable to aerospace and defense materials. AMS standards focus on materials that require high performance under extreme conditions, such as high temperatures, pressures, or corrosive environments. These specifications may include guidelines, engineering standards, and quality requirements.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Primary Usage: Primarily used in the aerospace, defense, and automotive industries.
                    </p>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#f39c12] mb-4">What is ASTM?</h2>
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <strong>ASTM</strong> (American Society for Testing and Materials) is a globally recognized organization that develops standards for materials, products, systems, and services across a wide range of industries. These standards cover everything from manufacturing processes and testing methods to chemical composition and mechanical properties.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Primary Usage: <strong>ASTM</strong> standards are used across various industries, including construction, automotive, and manufacturing.
                    </p>
                  </div>
                </section>

                <section className="space-y-6">
                  <h2 className="text-2xl font-bold text-[#f39c12] mb-4">Why Uses ASTM and AMS Standards?</h2>
                  <div className="prose max-w-none">
                    <p className="text-lg text-gray-700 leading-relaxed">
                      <strong>ASTM</strong>: Widely used across many industries, including construction, automotive, medical, and consumer products.
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      AMS: Primarily tailored for aerospace & Defense, and High-Performance industries, automotive, power generation, where meeting stringent material standards is essential.
                    </p>
                  </div>
                </section>
              </article>
            </motion.section>

            {/* Material Lists Section */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Stainless Steel Section */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-[#f39c12] mb-6">Stainless Steel:</h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>SS304 MATERIALS</strong> • SS304H • SS304-A08</li>
                  <li>• <strong>SS316 MATERIALS</strong> • SS316H</li>
                  <li>• <strong>SS321 MATERIALS</strong> • SS321H</li>
                  <li>• <strong>SS347 MATERIALS</strong> • SS347H</li>
                  <li>• <strong>SS SUPER DUPLEX</strong> • SS2507</li>
                  <li>• <strong>SS DUPLEX MATERIALS</strong> • SS2205 • SS2507 • AMS5561</li>
                  <li>• <strong>SS SUPERAUSTENITIC MATERIALS</strong> • SS904L</li>
                  <li>• <strong>SS410 MATERIALS</strong></li>
                  <li>• <strong>SS416 MATERIALS</strong></li>
                  <li>• <strong>SS17-4 PH / SS MARAGING</strong> • ASTM A564-TYPE T</li>
                  <li>• <strong>SS630 MATERIALS</strong></li>
                  <li>• <strong>Inconel 625 MATERIALS</strong></li>
                  <li>• <strong>Monel 400 MATERIALS</strong></li>
                  <li>• <strong>SS 253 MA MATERIALS</strong></li>
                  <li>• <strong>SS316Ti MATERIALS</strong></li>
                  <li>• <strong>Inconel 718 MATERIALS</strong></li>
                  <li>• <strong>Hastelloy MATERIALS</strong></li>
                  <li>• <strong>NITRONIC MATERIALS</strong> • NITRONIC-40</li>
                  <li>• <strong>TITANIUM MATERIALS</strong></li>
                  <li>• <strong>SS904 Low / SS904L UNS S30408</strong> • S30408-24</li>
                  <li>• <strong>SS304 Tube / SS304H Tube</strong> • UNS S30403-24</li>
                  <li>• <strong>SMO 254 MATERIALS</strong></li>
                  <li>• <strong>SMO MATERIALS</strong></li>
                  <li>• <strong>T-9 AM350CL</strong></li>
                </ul>
              </motion.section>

              {/* High Temperature Alloys Section */}
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <h2 className="text-2xl font-bold text-[#f39c12] mb-6"><strong>High Temperature Alloys:</strong></h2>
                <ul className="space-y-2 text-gray-700">
                  <li>• Alloy 900 Tube</li>
                  <li>• Rene41 / Alloy 41 / AMS 5545</li>
                  <li>• Inconel X-F - 750</li>
                  <li>• Hastelloy C - 276</li>
                  <li>• Hastelloy C - 22</li>
                  <li>• Inconel - 600</li>
                  <li>• Monel 401-K-500</li>
                  <li>• Monel 410</li>
                  <li>• <strong>Inconel</strong></li>
                </ul>
              </motion.section>
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