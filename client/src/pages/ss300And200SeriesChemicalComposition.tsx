import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Home, ChevronRight, Layers, FlaskConical, Target } from "lucide-react";

const series300Data = [
  {
    grade: "SS 301",
    elements: {
      "Carbon (C)": "≤ 0.15%",
      "Chromium (Cr)": "16.0-18.0%",
      "Nickel (Ni)": "6.0-8.0%",
      "Manganese (Mn)": "≤ 2.0%",
      "Silicon (Si)": "≤ 1.0%",
      "Phosphorus (P)": "≤ 0.045%",
      "Sulfur (S)": "≤ 0.030%"
    }
  },
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
    grade: "SS 316",
    elements: {
      "Carbon (C)": "≤ 0.08%",
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

const series200Data = [
  {
    grade: "SS 201",
    elements: {
      "Carbon (C)": "≤ 0.15%",
      "Chromium (Cr)": "16.0-18.0%",
      "Nickel (Ni)": "3.5-5.5%",
      "Manganese (Mn)": "5.5-7.5%",
      "Nitrogen (N)": "≤ 0.25%",
      "Silicon (Si)": "≤ 1.0%",
      "Phosphorus (P)": "≤ 0.060%",
      "Sulfur (S)": "≤ 0.030%"
    }
  },
  {
    grade: "SS 202",
    elements: {
      "Carbon (C)": "≤ 0.15%",
      "Chromium (Cr)": "17.0-19.0%",
      "Nickel (Ni)": "4.0-6.0%",
      "Manganese (Mn)": "7.5-10.0%",
      "Nitrogen (N)": "≤ 0.25%",
      "Silicon (Si)": "≤ 1.0%",
      "Phosphorus (P)": "≤ 0.060%",
      "Sulfur (S)": "≤ 0.030%"
    }
  }
];

export default function SS300And200SeriesChemicalComposition() {
  return (
    <>
      <Helmet>
        <title>SS 300 & 200 Series Chemical Composition | Mamta Steel Traders</title>
        <meta 
          name="description" 
          content="Complete chemical composition specifications for SS 300 and 200 series stainless steel grades. Detailed elemental analysis for pipe specifications and carbon alloy steel applications."
        />
        <meta name="keywords" content="SS 300 series, SS 200 series, chemical composition, stainless steel grades, pipe specification, carbon alloy steel, elemental analysis" />
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
              <span className="text-[#1a3e72] font-medium">SS 300 & 200 Series Chemical Composition</span>
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
                  <Layers className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-[#0d2b4e] mb-6">
                SS 300 & 200 Series Chemical Composition
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive chemical composition specifications for 300 and 200 series stainless steel grades. 
                Detailed elemental analysis for optimal pipe specification performance and carbon alloy steel applications.
              </p>
            </header>

            {/* 300 Series Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <div className="flex items-center space-x-3 mb-8">
                <FlaskConical className="w-7 h-7 text-[#f39c12]" />
                <h2 className="text-3xl font-bold text-[#0d2b4e]">300 Series Austenitic Stainless Steel</h2>
              </div>
              
              <div className="grid gap-6">
                {series300Data.map((grade, index) => (
                  <motion.article
                    key={grade.grade}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-[#1a3e72] to-[#0d2b4e] p-4">
                      <h3 className="text-xl font-bold text-white">{grade.grade} Chemical Composition</h3>
                    </div>
                    
                    <div className="p-6">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-2 px-3 font-semibold text-[#0d2b4e] text-sm">Element</th>
                              <th className="text-left py-2 px-3 font-semibold text-[#0d2b4e] text-sm">Composition (%)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.entries(grade.elements).map(([element, percentage], idx) => (
                              <tr key={element} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                                <td className="py-2 px-3 font-medium text-gray-800 text-sm">{element}</td>
                                <td className="py-2 px-3 text-[#1a3e72] font-semibold text-sm">{percentage}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>

            {/* 200 Series Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <div className="flex items-center space-x-3 mb-8">
                <Target className="w-7 h-7 text-[#f39c12]" />
                <h2 className="text-3xl font-bold text-[#0d2b4e]">200 Series Austenitic Stainless Steel</h2>
              </div>
              
              <div className="grid gap-6">
                {series200Data.map((grade, index) => (
                  <motion.article
                    key={grade.grade}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-[#f39c12] to-[#e67e22] p-4">
                      <h3 className="text-xl font-bold text-white">{grade.grade} Chemical Composition</h3>
                    </div>
                    
                    <div className="p-6">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-2 px-3 font-semibold text-[#0d2b4e] text-sm">Element</th>
                              <th className="text-left py-2 px-3 font-semibold text-[#0d2b4e] text-sm">Composition (%)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {Object.entries(grade.elements).map(([element, percentage], idx) => (
                              <tr key={element} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                                <td className="py-2 px-3 font-medium text-gray-800 text-sm">{element}</td>
                                <td className="py-2 px-3 text-[#1a3e72] font-semibold text-sm">{percentage}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>

            {/* Series Comparison */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-12"
            >
              <h2 className="text-3xl font-bold text-[#0d2b4e] mb-6 text-center">Series Comparison & Applications</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-4">300 Series Characteristics</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Higher nickel content for superior corrosion resistance</li>
                    <li>• Excellent formability and weldability</li>
                    <li>• Non-magnetic in annealed condition</li>
                    <li>• Ideal for food processing and chemical industries</li>
                    <li>• Premium pipe specification applications</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-4">200 Series Characteristics</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Lower nickel, higher manganese content</li>
                    <li>• Cost-effective alternative to 300 series</li>
                    <li>• Good corrosion resistance in mild environments</li>
                    <li>• Suitable for architectural and decorative applications</li>
                    <li>• Carbon alloy steel reinforcement applications</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-[#1a3e72] to-[#0d2b4e] rounded-xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Need Grade Selection Assistance?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Our technical experts can help you choose the right stainless steel grade based on your specific application requirements.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-[#f39c12] text-white font-semibold rounded-lg hover:bg-[#e67e22] transition-colors duration-300"
                >
                  Consult Our Experts
                </Link>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </main>
    </>
  );
}