import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Home, ChevronRight, TestTube, Atom, BeakerIcon } from "lucide-react";

const compositionData = [
  {
    grade: "SS 304",
    elements: {
      "Carbon (C)": "≤ 0.08%",
      "Chromium (Cr)": "18.0-20.0%",
      "Nickel (Ni)": "8.0-10.5%",
      "Manganese (Mn)": "≤ 2.0%",
      "Silicon (Si)": "≤ 1.0%",
      "Phosphorus (P)": "≤ 0.045%",
      "Sulfur (S)": "≤ 0.030%"
    }
  },
  {
    grade: "SS 316L",
    elements: {
      "Carbon (C)": "≤ 0.03%",
      "Chromium (Cr)": "16.0-18.0%",
      "Nickel (Ni)": "10.0-14.0%",
      "Molybdenum (Mo)": "2.0-3.0%",
      "Manganese (Mn)": "≤ 2.0%",
      "Silicon (Si)": "≤ 1.0%",
      "Phosphorus (P)": "≤ 0.045%",
      "Sulfur (S)": "≤ 0.030%"
    }
  },
  {
    grade: "SS 321",
    elements: {
      "Carbon (C)": "≤ 0.08%",
      "Chromium (Cr)": "17.0-19.0%",
      "Nickel (Ni)": "9.0-12.0%",
      "Titanium (Ti)": "5 × C min, 0.70% max",
      "Manganese (Mn)": "≤ 2.0%",
      "Silicon (Si)": "≤ 1.0%",
      "Phosphorus (P)": "≤ 0.045%",
      "Sulfur (S)": "≤ 0.030%"
    }
  }
];

export default function ChemicalComposition() {
  return (
    <>
      <Helmet>
        <title>Chemical Composition - Stainless Steel Grades | Mamta Steel Traders</title>
        <meta 
          name="description" 
          content="Detailed chemical composition specifications for stainless steel grades including SS 304, 316L, 321. Complete elemental analysis for carbon alloy steel and pipe specifications."
        />
        <meta name="keywords" content="chemical composition, stainless steel, SS 304, SS 316L, SS 321, carbon alloy steel, elemental analysis, pipe specification" />
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
              <span className="text-[#1a3e72] font-medium">Chemical Composition</span>
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
                  <TestTube className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-[#0d2b4e] mb-6">
                Chemical Composition
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive chemical composition data for our premium stainless steel grades. 
                Detailed elemental analysis ensuring optimal performance in carbon alloy steel applications and pipe specifications.
              </p>
            </header>

            {/* Composition Tables */}
            <section className="space-y-8">
              {compositionData.map((grade, index) => (
                <motion.article
                  key={grade.grade}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-[#1a3e72] to-[#0d2b4e] p-6">
                    <div className="flex items-center space-x-3">
                      <Atom className="w-6 h-6 text-[#f39c12]" />
                      <h2 className="text-2xl font-bold text-white">{grade.grade} Chemical Composition</h2>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-3 px-4 font-semibold text-[#0d2b4e]">Element</th>
                            <th className="text-left py-3 px-4 font-semibold text-[#0d2b4e]">Composition (%)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.entries(grade.elements).map(([element, percentage], idx) => (
                            <tr key={element} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                              <td className="py-3 px-4 font-medium text-gray-800">{element}</td>
                              <td className="py-3 px-4 text-[#1a3e72] font-semibold">{percentage}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.article>
              ))}
            </section>

            {/* Properties and Applications */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center space-x-3 mb-6">
                <BeakerIcon className="w-6 h-6 text-[#f39c12]" />
                <h2 className="text-3xl font-bold text-[#0d2b4e]">Key Properties & Standards</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-4">Testing Standards</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• ASTM A240 - Standard specification for stainless steel</li>
                    <li>• ASME SA240 - Pressure vessel plate specifications</li>
                    <li>• EN 10088 - European stainless steel standards</li>
                    <li>• JIS G4304 - Japanese industrial standards</li>
                    <li>• IS 6911 - Indian standards for stainless steel</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-4">Quality Assurance</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Spectroscopic analysis for chemical composition</li>
                    <li>• Heat treatment verification certificates</li>
                    <li>• Mill test certificates with complete elemental analysis</li>
                    <li>• Third-party inspection available</li>
                    <li>• ISO 9001:2015 certified manufacturing processes</li>
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
                <h2 className="text-2xl font-bold mb-4">Need Detailed Chemical Analysis?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Get comprehensive mill test certificates and detailed chemical composition reports for your stainless steel requirements.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-[#f39c12] text-white font-semibold rounded-lg hover:bg-[#e67e22] transition-colors duration-300"
                >
                  Request Test Certificates
                </Link>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </main>
    </>
  );
}