import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Home, ChevronRight, TestTube, Atom, BeakerIcon, Shield } from "lucide-react";

// Martensitic Steel Grades Data from provided image
const martensiticSteelData = [
  {
    grade: "SS410",
    uns: "S41000",
    indian: "X12Cr12",
    european: "1.4006",
    composition: {
      carbon: "0.08-0.15",
      manganese: "1.00",
      phosphorus: "0.040",
      sulfur: "0.030",
      silicon: "1",
      chromium: "11.50-13.50",
      nickel: "0.75 max",
      molybdenum: "—",
      others: "—"
    }
  },
  {
    grade: "SS415",
    uns: "S41500",
    indian: "X20Cr13Ni4Mn1Mo1",
    european: "1.4313",
    composition: {
      carbon: "0.05",
      manganese: "0.50-1.00",
      phosphorus: "0.030",
      sulfur: "0.030",
      silicon: "0.6",
      chromium: "11.50-14.00",
      nickel: "3.50-5.50",
      molybdenum: "0.50-1.00",
      others: "—"
    }
  },
  {
    grade: "SS420",
    uns: "S42000",
    indian: "X20Cr13",
    european: "1.4021",
    composition: {
      carbon: "0.15 min",
      manganese: "1.00",
      phosphorus: "0.040",
      sulfur: "0.030",
      silicon: "1",
      chromium: "12.00-14.00",
      nickel: "0.75 max",
      molybdenum: "0.50 max",
      others: "—"
    }
  },
  {
    grade: "SS420J1",
    uns: "—",
    indian: "X20Cr13",
    european: "1.4021",
    composition: {
      carbon: "0.16-0.25",
      manganese: "1.00",
      phosphorus: "0.040",
      sulfur: "0.030",
      silicon: "1",
      chromium: "12.00-14.00",
      nickel: "0.6",
      molybdenum: "—",
      others: "—"
    }
  },
  {
    grade: "SS420J2",
    uns: "—",
    indian: "X30Cr13",
    european: "1.4028",
    composition: {
      carbon: "0.26-0.40",
      manganese: "1.00",
      phosphorus: "0.040",
      sulfur: "0.030",
      silicon: "1",
      chromium: "12.00-14.00",
      nickel: "0.6",
      molybdenum: "—",
      others: "—"
    }
  },
  {
    grade: "SS420MoV",
    uns: "—",
    indian: "—",
    european: "1.4116",
    composition: {
      carbon: "0.45-0.55",
      manganese: "1.00",
      phosphorus: "0.040",
      sulfur: "0.015",
      silicon: "1",
      chromium: "14.00-15.00",
      nickel: "—",
      molybdenum: "0.50-0.80",
      others: "V=0.10-0.20"
    }
  },
  {
    grade: "SS431",
    uns: "S43100",
    indian: "X15Cr16Ni2",
    european: "1.4057",
    composition: {
      carbon: "0.2",
      manganese: "1.00",
      phosphorus: "0.040",
      sulfur: "0.030",
      silicon: "1",
      chromium: "15.00-17.00",
      nickel: "1.25-2.50",
      molybdenum: "—",
      others: "—"
    }
  },
  {
    grade: "BS",
    uns: "—",
    indian: "—",
    european: "—",
    composition: {
      carbon: "0.6-0.7",
      manganese: "1.00",
      phosphorus: "0.028",
      sulfur: "0.020",
      silicon: "0.75",
      chromium: "12.50-13.50",
      nickel: "—",
      molybdenum: "—",
      others: "—"
    }
  },
  {
    grade: "SS405",
    uns: "S40500",
    indian: "X04Cr12Al",
    european: "1.4002",
    composition: {
      carbon: "0.08",
      manganese: "1.00",
      phosphorus: "0.040",
      sulfur: "0.030",
      silicon: "1",
      chromium: "11.50-14.50",
      nickel: "0.6",
      molybdenum: "—",
      others: "Al=0.10-0.30"
    }
  }
];

// Ferritic Steel Grades Data from provided image
const ferriticSteelData = [
  {
    grade: "SS409L",
    uns: "—",
    indian: "—",
    european: "—",
    composition: {
      carbon: "0.03",
      manganese: "1",
      phosphorus: "0.04",
      sulfur: "0.02",
      silicon: "1",
      chromium: "10.50-11.70",
      nickel: "0.50 max",
      molybdenum: "—",
      nitrogen: "300",
      others: "Ti=6X (C+N) Min, 0.75 Max"
    }
  },
  {
    grade: "SS409Ni",
    uns: "S40975",
    indian: "X02Cr12Ni1Ti",
    european: "1.4516",
    composition: {
      carbon: "0.03",
      manganese: "1",
      phosphorus: "0.04",
      sulfur: "0.03",
      silicon: "1",
      chromium: "10.50-11.70",
      nickel: "0.50-1.00",
      molybdenum: "—",
      nitrogen: "300",
      others: "Ti=6X(C+N) Min, 0.75 Max"
    }
  },
  {
    grade: "SS410S",
    uns: "S41008",
    indian: "X 04Cr12",
    european: "1.4",
    composition: {
      carbon: "0.08",
      manganese: "1",
      phosphorus: "0.04",
      sulfur: "0.03",
      silicon: "1",
      chromium: "11.50-13.50",
      nickel: "0.60 max",
      molybdenum: "—",
      nitrogen: "—",
      others: "—"
    }
  },
  {
    grade: "SS430",
    uns: "S43000",
    indian: "X07Cr17",
    european: "1.4016",
    composition: {
      carbon: "0.12",
      manganese: "1",
      phosphorus: "0.04",
      sulfur: "0.03",
      silicon: "1",
      chromium: "16.00-18.00",
      nickel: "0.75 max",
      molybdenum: "—",
      nitrogen: "—",
      others: "—"
    }
  },
  {
    grade: "SS432",
    uns: "—",
    indian: "X02Cr18Mo1TiNbZr",
    european: "—",
    composition: {
      carbon: "0.025",
      manganese: "1",
      phosphorus: "0.04",
      sulfur: "0.03",
      silicon: "1",
      chromium: "17.00-20.00",
      nickel: "—",
      molybdenum: "0.40-0.80",
      nitrogen: "250",
      others: "Ti/Nb=8X(C+N) Min, 0.80 Max"
    }
  },
  {
    grade: "SS436",
    uns: "S43600",
    indian: "X02Cr17Mo1Nb",
    european: "—",
    composition: {
      carbon: "0.12",
      manganese: "1",
      phosphorus: "0.04",
      sulfur: "0.03",
      silicon: "1",
      chromium: "16.00-18.00",
      nickel: "—",
      molybdenum: "0.75-1.25",
      nitrogen: "—",
      others: "Nb= 5XC Min , 0.70 Max"
    }
  },
  {
    grade: "SS436L",
    uns: "S43932",
    indian: "X02Cr17Mo2TiNbZr",
    european: "—",
    composition: {
      carbon: "0.025",
      manganese: "1",
      phosphorus: "0.04",
      sulfur: "0.03",
      silicon: "1",
      chromium: "16.00-19.00",
      nickel: "—",
      molybdenum: "0.75-1.25",
      nitrogen: "250",
      others: "% Nb or & Ti or % combination = 8X (C+N) Min, 0.80 Max"
    }
  },
  {
    grade: "SS439",
    uns: "S43035",
    indian: "X02Cr18Ti",
    european: "—",
    composition: {
      carbon: "0.03",
      manganese: "1",
      phosphorus: "0.04",
      sulfur: "0.03",
      silicon: "1",
      chromium: "17.00-19.00",
      nickel: "0.50 max",
      molybdenum: "—",
      nitrogen: "300",
      others: "Ti=0.20+4X (C+N)"
    }
  },
  {
    grade: "SS441",
    uns: "S43940",
    indian: "X02Cr18TiNb",
    european: "1.4509",
    composition: {
      carbon: "0.03",
      manganese: "1",
      phosphorus: "0.04",
      sulfur: "0.015",
      silicon: "1",
      chromium: "17.50-18.50",
      nickel: "—",
      molybdenum: "—",
      nitrogen: "—",
      others: "Nb=3X% C+0.3 Min"
    }
  },
  {
    grade: "SS444",
    uns: "—",
    indian: "—",
    european: "—",
    composition: {
      carbon: "0.025",
      manganese: "1",
      phosphorus: "0.04",
      sulfur: "0.03",
      silicon: "1",
      chromium: "17.50-19.50",
      nickel: "1",
      molybdenum: "1.75-2.50",
      nitrogen: "350",
      others: "(Ti+Nb) 0.20+4(C+N)"
    }
  },
  {
    grade: "SS446",
    uns: "S44600",
    indian: "X10Cr25",
    european: "1.4749",
    composition: {
      carbon: "0.2",
      manganese: "1.5",
      phosphorus: "0.04",
      sulfur: "0.03",
      silicon: "1",
      chromium: "23.00-27.00",
      nickel: "0.75",
      molybdenum: "—",
      nitrogen: "2500",
      others: "—"
    }
  }
];

// Ferritic + Martensitic Steel Data from provided image
const ferriticMartensiticSteelData = [
  {
    grade: "SS409M",
    composition: {
      carbon: "0.03",
      manganese: "8-1.5",
      phosphorus: "0.04",
      sulfur: "0.03",
      silicon: "1",
      chromium: "10.50-12.50",
      nickel: "1.50 max",
      molybdenum: "—",
      nitrogen: "300",
      others: "Ti=0.75 Max"
    }
  }
];

export default function ChemicalComposition() {
  return (
    <>
      <Helmet>
        <title>Chemical Composition of Stainless Steel Grades - Martensitic, Ferritic & Duplex | Mamta Steel Traders</title>
        <meta 
          name="description" 
          content="Complete chemical composition specifications for martensitic, ferritic, and duplex stainless steel grades including SS410, SS316L, SS430, SS409L with detailed elemental analysis, UNS numbers, and international standards."
        />
        <meta name="keywords" content="chemical composition, martensitic steel, ferritic steel, SS410, SS415, SS420, SS430, SS409L, SS444, UNS numbers, ASTM standards, elemental analysis, stainless steel grades, carbon content, chromium content, nickel content" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Chemical Composition of Stainless Steel Grades - Martensitic, Ferritic & Duplex" />
        <meta property="og:description" content="Complete chemical composition specifications for martensitic, ferritic, and duplex stainless steel grades with detailed elemental analysis." />
        <meta property="og:site_name" content="Mamta Steel Traders" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Chemical Composition of Stainless Steel Grades" />
        <meta name="twitter:description" content="Complete chemical composition specifications for martensitic, ferritic, and duplex stainless steel grades." />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Mamta Steel Traders" />
        <meta name="subject" content="Chemical Composition of Stainless Steel Grades" />
        
        {/* Structured Data - JSON-LD for each steel grade */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechnicalArticle",
            "headline": "Chemical Composition of Stainless Steel Grades",
            "description": "Comprehensive chemical composition data for martensitic, ferritic, and duplex stainless steel grades including elemental analysis and standards compliance.",
            "author": {
              "@type": "Organization",
              "name": "Mamta Steel Traders"
            },
            "about": [
              ...martensiticSteelData.map(grade => ({
                "@type": "Thing",
                "name": `${grade.grade} Chemical Composition`,
                "description": `Chemical composition specifications for ${grade.grade} martensitic stainless steel grade with UNS ${grade.uns}`
              })),
              ...ferriticSteelData.map(grade => ({
                "@type": "Thing", 
                "name": `${grade.grade} Chemical Composition`,
                "description": `Chemical composition specifications for ${grade.grade} ferritic stainless steel grade`
              }))
            ],
            "keywords": ["martensitic steel", "ferritic steel", "chemical composition", "stainless steel grades", "elemental analysis"]
          })}
        </script>
      </Helmet>

      <main className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <div className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center space-x-2 text-sm" role="navigation" aria-label="Breadcrumb">
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
            className="max-w-7xl mx-auto"
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
                Chemical Composition of Stainless Steel Grades
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Comprehensive chemical composition specifications for martensitic, ferritic, and duplex stainless steel grades. 
                Detailed elemental analysis with UNS numbers, Indian IS standards, and European EN standards for industrial applications.
              </p>
            </header>

            {/* Martensitic Steel Grades Table */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-16"
              role="region"
              aria-labelledby="martensitic-steel-heading"
            >
              <header className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Shield className="w-8 h-8 text-[#f39c12]" />
                  <h2 id="martensitic-steel-heading" className="text-3xl md:text-4xl font-bold text-[#0d2b4e]">
                    Chemical Composition of Martensitic Steel Grade
                  </h2>
                </div>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Detailed chemical composition specifications for martensitic stainless steel grades with high strength and hardness properties.
                </p>
              </header>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[1200px]" role="table" aria-label="Martensitic Steel Chemical Composition">
                    <thead className="bg-gradient-to-r from-[#1a3e72] to-[#0d2b4e]">
                      <tr>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">Grade</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">UNS</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">Indian / IS</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">European / EN</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">%C (Max)</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">%Mn (Max)</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">%P (Max)</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">%S (Max)</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">%Si (Max)</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">%Cr</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">%Ni</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">%Mo</th>
                        <th className="text-left py-4 px-3 font-bold text-white" scope="col">% Others</th>
                      </tr>
                    </thead>
                    <tbody>
                      {martensiticSteelData.map((grade, index) => (
                        <tr 
                          key={grade.grade}
                          id={`${grade.grade}-chemical-composition`}
                          className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-all duration-200`}
                          aria-label={`Chemical composition data for ${grade.grade} martensitic stainless steel`}
                        >
                          <td className="py-4 px-3 font-bold text-[#0d2b4e] border-r border-gray-200" data-grade={grade.grade}>
                            {grade.grade}
                          </td>
                          <td className="py-4 px-3 text-gray-700 border-r border-gray-200" data-uns={grade.uns}>
                            {grade.uns}
                          </td>
                          <td className="py-4 px-3 text-gray-700 border-r border-gray-200" data-indian-standard={grade.indian}>
                            {grade.indian}
                          </td>
                          <td className="py-4 px-3 text-gray-700 border-r border-gray-200" data-european-standard={grade.european}>
                            {grade.european}
                          </td>
                          <td className="py-4 px-3 font-medium text-[#1a3e72] border-r border-gray-200" data-carbon-content={grade.composition.carbon}>
                            {grade.composition.carbon}
                          </td>
                          <td className="py-4 px-3 font-medium text-[#1a3e72] border-r border-gray-200" data-manganese-content={grade.composition.manganese}>
                            {grade.composition.manganese}
                          </td>
                          <td className="py-4 px-3 font-medium text-[#1a3e72] border-r border-gray-200" data-phosphorus-content={grade.composition.phosphorus}>
                            {grade.composition.phosphorus}
                          </td>
                          <td className="py-4 px-3 font-medium text-[#1a3e72] border-r border-gray-200" data-sulfur-content={grade.composition.sulfur}>
                            {grade.composition.sulfur}
                          </td>
                          <td className="py-4 px-3 font-medium text-[#1a3e72] border-r border-gray-200" data-silicon-content={grade.composition.silicon}>
                            {grade.composition.silicon}
                          </td>
                          <td className="py-4 px-3 font-medium text-[#1a3e72] border-r border-gray-200" data-chromium-content={grade.composition.chromium}>
                            {grade.composition.chromium}
                          </td>
                          <td className="py-4 px-3 font-medium text-[#1a3e72] border-r border-gray-200" data-nickel-content={grade.composition.nickel}>
                            {grade.composition.nickel}
                          </td>
                          <td className="py-4 px-3 font-medium text-[#1a3e72] border-r border-gray-200" data-molybdenum-content={grade.composition.molybdenum}>
                            {grade.composition.molybdenum}
                          </td>
                          <td className="py-4 px-3 font-medium text-[#1a3e72]" data-other-elements={grade.composition.others}>
                            {grade.composition.others}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.section>

            {/* Ferritic Steel Grades Table */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-16"
              role="region"
              aria-labelledby="ferritic-steel-heading"
            >
              <header className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <Atom className="w-8 h-8 text-[#f39c12]" />
                  <h2 id="ferritic-steel-heading" className="text-3xl md:text-4xl font-bold text-[#0d2b4e]">
                    Chemical Composition of Ferritic Steel Grade
                  </h2>
                </div>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Comprehensive chemical composition data for ferritic stainless steel grades with excellent corrosion resistance and magnetic properties.
                </p>
              </header>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[1400px]" role="table" aria-label="Ferritic Steel Chemical Composition">
                    <thead className="bg-gradient-to-r from-[#1a3e72] to-[#0d2b4e]">
                      <tr>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">Grade</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">UNS</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">Indian IS</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">European EN</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">%C (Max)</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">%Mn (Max)</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">%P (Max)</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">%S (Max)</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">%Si (Max)</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">%Cr</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">%Ni</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">%Mo</th>
                        <th className="text-left py-4 px-3 font-bold text-white border-r border-blue-400" scope="col">N PPM (Max)</th>
                        <th className="text-left py-4 px-3 font-bold text-white" scope="col">% Others</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ferriticSteelData.map((grade, index) => (
                        <tr 
                          key={grade.grade}
                          id={`${grade.grade}-chemical-composition`}
                          className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-all duration-200`}
                          aria-label={`Chemical composition data for ${grade.grade} ferritic stainless steel`}
                        >
                          <td className="py-4 px-3 font-bold text-[#0d2b4e] border-r border-gray-200" data-grade={grade.grade}>
                            {grade.grade}
                          </td>
                          <td className="py-4 px-3 text-gray-700 border-r border-gray-200" data-uns={grade.uns}>
                            {grade.uns}
                          </td>
                          <td className="py-4 px-3 text-gray-700 border-r border-gray-200" data-indian-standard={grade.indian}>
                            {grade.indian}
                          </td>
                          <td className="py-4 px-3 text-gray-700 border-r border-gray-200" data-european-standard={grade.european}>
                            {grade.european}
                          </td>
                          <td className="py-4 px-3 font-medium text-[#1a3e72] border-r border-gray-200" data-carbon-content={grade.composition.carbon}>
                            {grade.composition.carbon}
                          </td>
                          <td className="py-4 px-3 font-medium text-[#1a3e72] border-r border-gray-200" data-manganese-content={grade.composition.manganese}>
                            {grade.composition.manganese}
                          </td>
                          <td className="py-4 px-3 font-medium text-[#1a3e72] border-r border-gray-200" data-phosphorus-content={grade.composition.phosphorus}>
                            {grade.composition.phosphorus}
                          </td>
                          <td className="py-4 px-3 font-medium text-[#1a3e72] border-r border-gray-200" data-sulfur-content={grade.composition.sulfur}>
                            {grade.composition.sulfur}
                          </td>
                          <td className="py-4 px-3 font-medium text-[#1a3e72] border-r border-gray-200" data-silicon-content={grade.composition.silicon}>
                            {grade.composition.silicon}
                          </td>
                          <td className="py-4 px-3 font-medium text-[#1a3e72] border-r border-gray-200" data-chromium-content={grade.composition.chromium}>
                            {grade.composition.chromium}
                          </td>
                          <td className="py-4 px-3 font-medium text-[#1a3e72] border-r border-gray-200" data-nickel-content={grade.composition.nickel}>
                            {grade.composition.nickel}
                          </td>
                          <td className="py-4 px-3 font-medium text-[#1a3e72] border-r border-gray-200" data-molybdenum-content={grade.composition.molybdenum}>
                            {grade.composition.molybdenum}
                          </td>
                          <td className="py-4 px-3 font-medium text-[#1a3e72] border-r border-gray-200" data-nitrogen-content={grade.composition.nitrogen}>
                            {grade.composition.nitrogen}
                          </td>
                          <td className="py-4 px-3 font-medium text-[#1a3e72]" data-other-elements={grade.composition.others}>
                            {grade.composition.others}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.section>

            {/* Ferritic + Martensitic Steel Grades Table */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-16"
              role="region"
              aria-labelledby="ferritic-martensitic-steel-heading"
            >
              <header className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <BeakerIcon className="w-8 h-8 text-[#f39c12]" />
                  <h2 id="ferritic-martensitic-steel-heading" className="text-3xl md:text-4xl font-bold text-[#0d2b4e]">
                    Chemical Composition of Ferritic + Martensitic Steel
                  </h2>
                </div>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Duplex stainless steel grades combining properties of both ferritic and martensitic structures for enhanced performance.
                </p>
              </header>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[1200px]" role="table" aria-label="Ferritic + Martensitic Steel Chemical Composition">
                    <thead className="bg-gradient-to-r from-[#1a3e72] to-[#0d2b4e]">
                      <tr>
                        <th className="text-left py-4 px-4 font-bold text-white border-r border-blue-400" scope="col">Grade</th>
                        <th className="text-left py-4 px-4 font-bold text-white border-r border-blue-400" scope="col">%C (Max)</th>
                        <th className="text-left py-4 px-4 font-bold text-white border-r border-blue-400" scope="col">%Mn (Max)</th>
                        <th className="text-left py-4 px-4 font-bold text-white border-r border-blue-400" scope="col">%P (Max)</th>
                        <th className="text-left py-4 px-4 font-bold text-white border-r border-blue-400" scope="col">%S (Max)</th>
                        <th className="text-left py-4 px-4 font-bold text-white border-r border-blue-400" scope="col">%Si (Max)</th>
                        <th className="text-left py-4 px-4 font-bold text-white border-r border-blue-400" scope="col">%Cr</th>
                        <th className="text-left py-4 px-4 font-bold text-white border-r border-blue-400" scope="col">%Ni</th>
                        <th className="text-left py-4 px-4 font-bold text-white border-r border-blue-400" scope="col">%Mo</th>
                        <th className="text-left py-4 px-4 font-bold text-white border-r border-blue-400" scope="col">N PPM (Max)</th>
                        <th className="text-left py-4 px-4 font-bold text-white" scope="col">% Others</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ferriticMartensiticSteelData.map((grade, index) => (
                        <tr 
                          key={grade.grade}
                          id={`${grade.grade}-chemical-composition`}
                          className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-all duration-200`}
                          aria-label={`Chemical composition data for ${grade.grade} ferritic-martensitic stainless steel`}
                        >
                          <td className="py-4 px-4 font-bold text-[#0d2b4e] border-r border-gray-200" data-grade={grade.grade}>
                            {grade.grade}
                          </td>
                          <td className="py-4 px-4 font-medium text-[#1a3e72] border-r border-gray-200" data-carbon-content={grade.composition.carbon}>
                            {grade.composition.carbon}
                          </td>
                          <td className="py-4 px-4 font-medium text-[#1a3e72] border-r border-gray-200" data-manganese-content={grade.composition.manganese}>
                            {grade.composition.manganese}
                          </td>
                          <td className="py-4 px-4 font-medium text-[#1a3e72] border-r border-gray-200" data-phosphorus-content={grade.composition.phosphorus}>
                            {grade.composition.phosphorus}
                          </td>
                          <td className="py-4 px-4 font-medium text-[#1a3e72] border-r border-gray-200" data-sulfur-content={grade.composition.sulfur}>
                            {grade.composition.sulfur}
                          </td>
                          <td className="py-4 px-4 font-medium text-[#1a3e72] border-r border-gray-200" data-silicon-content={grade.composition.silicon}>
                            {grade.composition.silicon}
                          </td>
                          <td className="py-4 px-4 font-medium text-[#1a3e72] border-r border-gray-200" data-chromium-content={grade.composition.chromium}>
                            {grade.composition.chromium}
                          </td>
                          <td className="py-4 px-4 font-medium text-[#1a3e72] border-r border-gray-200" data-nickel-content={grade.composition.nickel}>
                            {grade.composition.nickel}
                          </td>
                          <td className="py-4 px-4 font-medium text-[#1a3e72] border-r border-gray-200" data-molybdenum-content={grade.composition.molybdenum}>
                            {grade.composition.molybdenum}
                          </td>
                          <td className="py-4 px-4 font-medium text-[#1a3e72] border-r border-gray-200" data-nitrogen-content={grade.composition.nitrogen}>
                            {grade.composition.nitrogen}
                          </td>
                          <td className="py-4 px-4 font-medium text-[#1a3e72]" data-other-elements={grade.composition.others}>
                            {grade.composition.others}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.section>

            {/* Standards and Applications */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12 bg-white rounded-xl shadow-lg p-8 md:p-12 mb-16"
              role="region"
              aria-labelledby="standards-applications-heading"
            >
              <header className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="w-8 h-8 text-[#f39c12]" />
                  <h2 id="standards-applications-heading" className="text-3xl md:text-4xl font-bold text-[#0d2b4e]">
                    Standards & Applications
                  </h2>
                </div>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Our chemical composition data adheres to international standards ensuring quality and reliability across all applications.
                </p>
              </header>
              
              <div className="grid md:grid-cols-2 gap-12">
                <article>
                  <h3 className="text-2xl font-semibold text-[#1a3e72] mb-6 flex items-center">
                    <div className="w-6 h-6 bg-[#f39c12] rounded-full mr-3"></div>
                    International Standards
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#1a3e72] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">ASTM A240</h4>
                        <p className="text-gray-600">Standard specification for chromium and chromium-nickel stainless steel plate, sheet, and strip</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#1a3e72] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">ASME SA240</h4>
                        <p className="text-gray-600">Pressure vessel plate specifications for boiler and pressure vessel applications</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#1a3e72] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">EN 10088</h4>
                        <p className="text-gray-600">European standards for stainless steels with chemical composition requirements</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#1a3e72] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">IS 6911</h4>
                        <p className="text-gray-600">Indian standards for stainless steel plates, sheets and strips</p>
                      </div>
                    </div>
                  </div>
                </article>
                
                <article>
                  <h3 className="text-2xl font-semibold text-[#1a3e72] mb-6 flex items-center">
                    <div className="w-6 h-6 bg-[#f39c12] rounded-full mr-3"></div>
                    Applications by Grade Type
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#f39c12] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Martensitic Grades</h4>
                        <p className="text-gray-600">Cutlery, surgical instruments, valve components, and high-strength applications</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#f39c12] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Ferritic Grades</h4>
                        <p className="text-gray-600">Automotive exhaust systems, architectural trim, and decorative applications</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#f39c12] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Duplex Grades</h4>
                        <p className="text-gray-600">Chemical processing, oil & gas pipelines, and marine environments</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#f39c12] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">High-Temperature Applications</h4>
                        <p className="text-gray-600">Heat exchangers, furnace parts, and high-temperature structural components</p>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </motion.section>

            {/* Enhanced CTA Section */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-center"
              role="region"
              aria-labelledby="cta-heading"
            >
              <div className="bg-gradient-to-r from-[#1a3e72] via-[#0d2b4e] to-[#1a3e72] rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-blue-600/20"></div>
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    className="mb-6"
                  >
                    <div className="flex justify-center items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-[#f39c12] rounded-full flex items-center justify-center">
                        <TestTube className="w-6 h-6 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-[#f39c12] rounded-full flex items-center justify-center">
                        <Atom className="w-6 h-6 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-[#f39c12] rounded-full flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
                      Need Detailed Chemical Analysis Reports?
                    </h2>
                  </motion.div>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    className="text-xl mb-8 opacity-95 max-w-3xl mx-auto leading-relaxed"
                  >
                    Get comprehensive mill test certificates, detailed chemical composition reports, and material certifications 
                    for all stainless steel grades including martensitic, ferritic, and duplex grades.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  >
                    <Link 
                      href="/contact"
                      className="group inline-flex items-center px-8 py-4 bg-[#f39c12] text-white font-semibold rounded-xl hover:bg-[#e67e22] transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-500/50"
                      aria-label="Request detailed chemical analysis and test certificates"
                    >
                      <span>Request Test Certificates</span>
                      <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    
                    <Link 
                      href="/technicalInformation"
                      className="group inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 focus:outline-none focus:ring-4 focus:ring-white/30"
                      aria-label="View technical specifications and pipe data"
                    >
                      <span>View Technical Specs</span>
                      <TestTube className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.section>

            {/* Source Reference */}
            <motion.footer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.5 }}
              className="mt-8 text-center text-sm text-gray-500"
            >
              <p>
                Source: <a 
                  href="https://www.textronsteelalloys.com/chemical-composition-400-series-martensitic-ferritic/" 
                  target="_blank" 
                  rel="nofollow noopener noreferrer"
                  className="text-[#1a3e72] hover:text-[#0d2b4e] transition-colors duration-200"
                >
                  Textron Steel & Alloys
                </a>
              </p>
            </motion.footer>
          </motion.div>
        </div>
      </main>
    </>
  );
}