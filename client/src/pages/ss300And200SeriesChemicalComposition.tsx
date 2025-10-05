import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Home, ChevronRight, Layers, FlaskConical, Target, Database } from "lucide-react";

// Comprehensive SS 200 & 300 Series Chemical Composition Data from provided image
const comprehensiveSeriesData = [
  {
    grade: "SS 201",
    composition: {
      carbon: "0.15",
      manganese: "5.5-7.5",
      phosphorus: "0.06",
      sulfur: "0.03",
      silicon: "1",
      chromium: "16.00-18.00",
      nickel: "3.50-5.50",
      nitrogen: "2500",
      others: "—"
    }
  },
  {
    grade: "SS 201L",
    composition: {
      carbon: "0.03",
      manganese: "5.5-7.5",
      phosphorus: "0.045",
      sulfur: "0.03",
      silicon: "0.75",
      chromium: "16.00-18.00",
      nickel: "3.50-5.50",
      nitrogen: "2500",
      others: "—"
    }
  },
  {
    grade: "SS 201LN",
    composition: {
      carbon: "0.03",
      manganese: "6.4-7.5",
      phosphorus: "0.045",
      sulfur: "0.015",
      silicon: "0.75",
      chromium: "16.00-17.50",
      nickel: "4.00-5.00",
      nitrogen: "1000-2500",
      others: "Cu = 1.0 Max"
    }
  },
  {
    grade: "SS 202",
    composition: {
      carbon: "0.15",
      manganese: "7.5-10.0",
      phosphorus: "0.06",
      sulfur: "0.03",
      silicon: "1",
      chromium: "17.00-19.00",
      nickel: "4.00-6.00",
      nitrogen: "2500",
      others: "—"
    }
  },
  {
    grade: "SS 204Cu",
    composition: {
      carbon: "0.1",
      manganese: "6.5-9.0",
      phosphorus: "0.06",
      sulfur: "0.01",
      silicon: "0.75",
      chromium: "16.00-17.50",
      nickel: "1.50-3.50",
      nitrogen: "1000-2000",
      others: "Cu = 2.0-4.0"
    }
  },
  {
    grade: "JSLAUS (J1)",
    composition: {
      carbon: "0.08",
      manganese: "6.0-8.0",
      phosphorus: "0.07",
      sulfur: "0.01",
      silicon: "0.75",
      chromium: "16.00-18.00",
      nickel: "4.00-6.00",
      nitrogen: "1000",
      others: "Cu = 1.5-2.0"
    }
  },
  {
    grade: "SS J4",
    composition: {
      carbon: "0.1",
      manganese: "8.50-10.0",
      phosphorus: "0.08",
      sulfur: "0.01",
      silicon: "0.75",
      chromium: "15.00-16.00",
      nickel: "1.00-2.00",
      nitrogen: "2000",
      others: "Cu = 1.5-2.0"
    }
  },
  {
    grade: "JSL U",
    composition: {
      carbon: "0.15(max)",
      manganese: "9.7 to 10.7",
      phosphorus: "0.10(max)",
      sulfur: "0.03(max)",
      silicon: "0.75(max)",
      chromium: "15.1 to 16.0",
      nickel: "0.45 to 0.60",
      nitrogen: "—",
      others: "Cu = 1.75-2.50 / N=0.2 Max"
    }
  },
  {
    grade: "JSL U SD",
    composition: {
      carbon: "0.15(max)",
      manganese: "9.7 to 10.30",
      phosphorus: "0.10(max)",
      sulfur: "0.03(max)",
      silicon: "0.75(max)",
      chromium: "13.25 to 14.25",
      nickel: "0.40 to 0.50",
      nitrogen: "—",
      others: "Cu = 1.00-1.50 / N=0.2 Max"
    }
  },
  {
    grade: "SS JT",
    composition: {
      carbon: "0.1",
      manganese: "9.0-10.0",
      phosphorus: "0.1",
      sulfur: "0.01",
      silicon: "0.75",
      chromium: "14.5-16.5",
      nickel: "0.25-0.35",
      nitrogen: "—",
      others: "Cu = 40-1.00 / N=2000"
    }
  }
];

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
        <title>SS 200 & 300 Series Chemical Composition - Complete Specifications | Mamta Steel Traders</title>
        <meta 
          name="description" 
          content="Complete chemical composition specifications for SS 200 & 300 series stainless steel grades including SS 201, SS 201L, SS 201LN, SS 202, SS 204Cu, JSLAUS J1, SS J4, JSL U, JSL U SD, SS JT with detailed elemental analysis, carbon content, chromium content, and nickel percentages for industrial applications."
        />
        <meta name="keywords" content="SS 200 series chemical composition, SS 300 series chemical composition, SS 201, SS 201L, SS 201LN, SS 202, SS 204Cu, JSLAUS J1, SS J4, JSL U, JSL U SD, SS JT, stainless steel grades, austenitic steel, carbon content, chromium content, nickel content, manganese content, pipe specification, industrial steel grades" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SS 200 & 300 Series Chemical Composition - Complete Specifications" />
        <meta property="og:description" content="Complete chemical composition data for SS 200 & 300 series stainless steel grades with detailed elemental analysis including carbon, chromium, nickel, and manganese percentages." />
        <meta property="og:site_name" content="Mamta Steel Traders" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SS 200 & 300 Series Chemical Composition Specifications" />
        <meta name="twitter:description" content="Complete chemical composition data for SS 200 & 300 series stainless steel grades with detailed elemental analysis." />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Mamta Steel Traders" />
        <meta name="subject" content="SS 200 & 300 Series Chemical Composition" />
        
        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dataset",
            "name": "SS 200 & 300 Series Stainless Steel Chemical Composition",
            "description": "Comprehensive chemical composition specifications for SS 200 and 300 series stainless steel grades including detailed elemental analysis and industrial applications",
            "publisher": {
              "@type": "Organization",
              "name": "Mamta Steel Traders"
            },
            "about": [
              {
                "@type": "Thing",
                "name": "SS 201 Chemical Composition",
                "description": "Chemical composition specifications for SS 201 austenitic stainless steel grade"
              },
              {
                "@type": "Thing",
                "name": "SS 202 Chemical Composition", 
                "description": "Chemical composition specifications for SS 202 austenitic stainless steel grade"
              },
              {
                "@type": "Thing",
                "name": "SS 204Cu Chemical Composition",
                "description": "Chemical composition specifications for SS 204Cu copper-bearing austenitic stainless steel grade"
              }
            ],
            "keywords": ["stainless steel", "chemical composition", "SS 200 series", "SS 300 series", "austenitic steel", "industrial materials"]
          })}
        </script>
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
              
              <h1 className="text-heading md:text-heading font-bold text-[#0d2b4e] mb-6">
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
                <h2 className="text-2xl font-bold text-[#0d2b4e]">300 Series Austenitic Stainless Steel</h2>
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
                <h2 className="text-2xl font-bold text-[#0d2b4e]">200 Series Austenitic Stainless Steel</h2>
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
              <h2 className="text-2xl font-bold text-[#0d2b4e] mb-6 text-center">Series Comparison & Applications</h2>
              
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

            {/* Comprehensive Chemical Composition Table */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mb-16"
              role="region"
              aria-labelledby="comprehensive-composition-heading"
            >
              <header className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Database className="w-8 h-8 text-[#f39c12]" />
                  <h2 id="comprehensive-composition-heading" className="text-2xl font-bold text-[#0d2b4e]">
                    SS 200 & 300 Series Chemical Composition
                  </h2>
                </div>
                <p className="text-lg text-gray-600 max-w-4xl">
                  Complete chemical composition specifications for all SS 200 and 300 series stainless steel grades with detailed elemental analysis including carbon, manganese, phosphorus, sulfur, silicon, chromium, nickel, and nitrogen content for industrial applications.
                </p>
              </header>

              <article className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="overflow-x-auto max-w-full">
                  <table className="w-full min-w-[1200px] border-collapse" role="table" aria-label="SS 200 & 300 Series Chemical Composition">
                    <thead className="bg-gradient-to-r from-[#1a3e72] to-[#0d2b4e] sticky top-0 z-10">
                      <tr>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400 border-b border-blue-400" scope="col">Grade</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400 border-b border-blue-400" scope="col">%C<br/><span className="text-xs font-normal">(Max)</span></th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400 border-b border-blue-400" scope="col">%Mn<br/><span className="text-xs font-normal">(Max)</span></th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400 border-b border-blue-400" scope="col">%P<br/><span className="text-xs font-normal">(Max)</span></th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400 border-b border-blue-400" scope="col">%S<br/><span className="text-xs font-normal">(Max)</span></th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400 border-b border-blue-400" scope="col">%Si<br/><span className="text-xs font-normal">(Max)</span></th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400 border-b border-blue-400" scope="col">%Cr</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400 border-b border-blue-400" scope="col">%Ni</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400 border-b border-blue-400" scope="col">N PPM<br/><span className="text-xs font-normal">(Max)</span></th>
                        <th className="text-left py-4 px-3 font-bold text-white border-b border-blue-400" scope="col">% Others</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comprehensiveSeriesData.map((grade, index) => (
                        <tr 
                          key={grade.grade}
                          id={`${grade.grade.replace(/\s+/g, '-').toLowerCase()}-chemical-composition`}
                          className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-all duration-200 border-b border-gray-200`}
                          aria-label={`Chemical composition data for ${grade.grade} stainless steel grade`}
                        >
                          <td className="py-3 px-3 font-bold text-[#0d2b4e] border-r border-gray-300 whitespace-nowrap" data-grade={grade.grade}>
                            {grade.grade}
                          </td>
                          <td className="py-3 px-3 font-medium text-[#1a3e72] border-r border-gray-300 text-center text-sm" data-carbon-content={grade.composition.carbon}>
                            {grade.composition.carbon}
                          </td>
                          <td className="py-3 px-3 font-medium text-[#1a3e72] border-r border-gray-300 text-center text-sm" data-manganese-content={grade.composition.manganese}>
                            {grade.composition.manganese}
                          </td>
                          <td className="py-3 px-3 font-medium text-[#1a3e72] border-r border-gray-300 text-center text-sm" data-phosphorus-content={grade.composition.phosphorus}>
                            {grade.composition.phosphorus}
                          </td>
                          <td className="py-3 px-3 font-medium text-[#1a3e72] border-r border-gray-300 text-center text-sm" data-sulfur-content={grade.composition.sulfur}>
                            {grade.composition.sulfur}
                          </td>
                          <td className="py-3 px-3 font-medium text-[#1a3e72] border-r border-gray-300 text-center text-sm" data-silicon-content={grade.composition.silicon}>
                            {grade.composition.silicon}
                          </td>
                          <td className="py-3 px-3 font-medium text-[#1a3e72] border-r border-gray-300 text-center text-sm" data-chromium-content={grade.composition.chromium}>
                            {grade.composition.chromium}
                          </td>
                          <td className="py-3 px-3 font-medium text-[#1a3e72] border-r border-gray-300 text-center text-sm" data-nickel-content={grade.composition.nickel}>
                            {grade.composition.nickel}
                          </td>
                          <td className="py-3 px-3 font-medium text-[#1a3e72] border-r border-gray-300 text-center text-sm" data-nitrogen-content={grade.composition.nitrogen}>
                            {grade.composition.nitrogen}
                          </td>
                          <td className="py-3 px-3 font-medium text-[#1a3e72] text-xs" data-other-elements={grade.composition.others}>
                            {grade.composition.others}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>
            </motion.section>

            {/* Technical Properties & Applications */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16"
              role="region"
              aria-labelledby="technical-properties-heading"
            >
              <header className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <FlaskConical className="w-8 h-8 text-[#f39c12]" />
                  <h2 id="technical-properties-heading" className="text-2xl font-bold text-[#0d2b4e]">
                    Technical Properties & Industrial Applications
                  </h2>
                </div>
                <p className="text-lg text-gray-600 max-w-4xl">
                  Understanding the chemical composition helps in selecting the appropriate stainless steel grade for specific industrial applications and performance requirements.
                </p>
              </header>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <article>
                  <h3 className="text-2xl font-semibold text-[#1a3e72] mb-6 flex items-center">
                    <div className="w-6 h-6 bg-[#f39c12] rounded-full mr-3"></div>
                    Standard Grades
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#1a3e72] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">SS 201 & SS 201L</h4>
                        <p className="text-gray-600 text-sm">General purpose austenitic grades with good corrosion resistance and formability</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#1a3e72] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">SS 202</h4>
                        <p className="text-gray-600 text-sm">Higher manganese content for enhanced work hardening properties</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#1a3e72] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">SS 201LN</h4>
                        <p className="text-gray-600 text-sm">Low carbon, nitrogen strengthened grade for improved properties</p>
                      </div>
                    </div>
                  </div>
                </article>
                
                <article>
                  <h3 className="text-2xl font-semibold text-[#1a3e72] mb-6 flex items-center">
                    <div className="w-6 h-6 bg-[#f39c12] rounded-full mr-3"></div>
                    Special Grades
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#f39c12] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">SS 204Cu</h4>
                        <p className="text-gray-600 text-sm">Copper-bearing grade with enhanced corrosion resistance in certain environments</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#f39c12] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">JSLAUS (J1)</h4>
                        <p className="text-gray-600 text-sm">Japanese standard grade with optimized composition for automotive applications</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#f39c12] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">JSL U Series</h4>
                        <p className="text-gray-600 text-sm">Ultra-low nickel grades for cost-effective applications with copper additions</p>
                      </div>
                    </div>
                  </div>
                </article>
                
                <article>
                  <h3 className="text-2xl font-semibold text-[#1a3e72] mb-6 flex items-center">
                    <div className="w-6 h-6 bg-[#f39c12] rounded-full mr-3"></div>
                    Applications
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Automotive Industry</h4>
                        <p className="text-gray-600 text-sm">Exhaust systems, trim components, and structural applications</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Kitchen & Appliances</h4>
                        <p className="text-gray-600 text-sm">Cookware, kitchen equipment, and home appliance components</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Construction & Architecture</h4>
                        <p className="text-gray-600 text-sm">Roofing, cladding, and decorative architectural elements</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-[#1a3e72] via-[#0d2b4e] to-[#1a3e72] rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-blue-600/20"></div>
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="mb-6"
                  >
                    <div className="flex justify-center items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-[#f39c12] rounded-full flex items-center justify-center">
                        <Database className="w-6 h-6 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-[#f39c12] rounded-full flex items-center justify-center">
                        <FlaskConical className="w-6 h-6 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-[#f39c12] rounded-full flex items-center justify-center">
                        <Target className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold mb-4">
                      Need Grade Selection Assistance?
                    </h2>
                  </motion.div>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                    className="text-xl mb-8 opacity-95 max-w-3xl mx-auto leading-relaxed"
                  >
                    Our technical experts can help you choose the right SS 200 or 300 series stainless steel grade based on your specific chemical composition requirements, application needs, and performance criteria.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.7 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  >
                    <Link 
                      href="/contact"
                      className="group inline-flex items-center px-8 py-4 bg-[#f39c12] text-white font-semibold rounded-xl hover:bg-[#e67e22] transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-500/50"
                      aria-label="Contact our technical experts for stainless steel grade selection assistance"
                    >
                      <span>Consult Our Experts</span>
                      <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    
                    <Link 
                      href="/technicalInformation"
                      className="group inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 focus:outline-none focus:ring-4 focus:ring-white/30"
                      aria-label="View comprehensive technical specifications and data sheets"
                    >
                      <span>View Technical Specs</span>
                      <Database className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </main>
    </>
  );
}