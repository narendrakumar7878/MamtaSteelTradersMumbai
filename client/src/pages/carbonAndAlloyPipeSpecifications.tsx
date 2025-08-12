import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Home, ChevronRight, TrendingUp, Zap, Factory, Thermometer } from "lucide-react";

const carbonPipeSpecs = [
  {
    category: "Carbon Steel Seamless Pipes",
    standards: ["ASTM A106", "ASTM A53", "API 5L"],
    grades: ["Gr. A", "Gr. B", "Gr. C"],
    specifications: [
      {
        parameter: "Size Range",
        value: "1/8\" NB to 48\" NB",
        unit: "Nominal Bore"
      },
      {
        parameter: "Wall Thickness",
        value: "SCH 10 to SCH 160, XXS",
        unit: "Schedule"
      },
      {
        parameter: "Length",
        value: "6-12 meters standard",
        unit: "Meters"
      },
      {
        parameter: "Temperature Range",
        value: "-29°C to +427°C",
        unit: "Operating temperature"
      }
    ]
  },
  {
    category: "Alloy Steel Pipes",
    standards: ["ASTM A335", "ASTM A213", "ASME SA335"],
    grades: ["P5", "P9", "P11", "P22", "P91"],
    specifications: [
      {
        parameter: "Size Range",
        value: "1/2\" NB to 24\" NB",
        unit: "Nominal Bore"
      },
      {
        parameter: "Wall Thickness",
        value: "SCH 40 to SCH XXS",
        unit: "Schedule"
      },
      {
        parameter: "Length",
        value: "6-12 meters",
        unit: "Meters"
      },
      {
        parameter: "Temperature Range",
        value: "Up to +650°C",
        unit: "High temperature service"
      }
    ]
  }
];

const materialProperties = [
  {
    grade: "ASTM A106 Gr. B",
    type: "Carbon Steel",
    properties: {
      "Tensile Strength": "415-585 MPa",
      "Yield Strength": "240 MPa min",
      "Elongation": "30% min",
      "Carbon Content": "≤ 0.30%"
    },
    applications: ["Power plants", "Petrochemical", "Oil refineries", "Boiler tubes"]
  },
  {
    grade: "ASTM A335 P22",
    type: "Alloy Steel",
    properties: {
      "Tensile Strength": "415-585 MPa",
      "Yield Strength": "205 MPa min",
      "Elongation": "30% min",
      "Chromium": "1.90-2.60%",
      "Molybdenum": "0.87-1.13%"
    },
    applications: ["High temperature service", "Superheater tubes", "Heat exchangers", "Steam lines"]
  },
  {
    grade: "ASTM A335 P91",
    type: "Advanced Alloy Steel",
    properties: {
      "Tensile Strength": "585-760 MPa",
      "Yield Strength": "415 MPa min",
      "Elongation": "20% min",
      "Chromium": "8.0-9.5%",
      "Molybdenum": "0.85-1.05%"
    },
    applications: ["Ultra-supercritical boilers", "Steam turbines", "High pressure headers", "Reformer tubes"]
  }
];

const chemicalComposition = [
  {
    grade: "A106 Gr. B",
    elements: {
      "Carbon (C)": "≤ 0.30%",
      "Manganese (Mn)": "0.29-1.06%",
      "Phosphorus (P)": "≤ 0.035%",
      "Sulfur (S)": "≤ 0.035%",
      "Silicon (Si)": "≥ 0.10%"
    }
  },
  {
    grade: "A335 P22",
    elements: {
      "Carbon (C)": "0.05-0.15%",
      "Chromium (Cr)": "1.90-2.60%",
      "Molybdenum (Mo)": "0.87-1.13%",
      "Manganese (Mn)": "0.30-0.60%",
      "Silicon (Si)": "0.50% max"
    }
  }
];

export default function CarbonAndAlloyPipeSpecifications() {
  return (
    <>
      <Helmet>
        <title>Carbon & Alloy Steel Pipes & Tubes Specifications | API, ASTM, IS Standards</title>
        <meta 
          name="description" 
          content="Complete application and specifications of carbon and alloy steel pipes & tubes for oil & gas, automotive, boilers, railways, water, gas, sewage, and more. Includes API, ASTM, IS, BS, DIN standards."
        />
        <meta name="keywords" content="carbon steel pipes, alloy steel pipes, ASTM A106, ASTM A335, pipe specifications, chemical composition, high temperature pipes, API 5L, IS 4270, oil gas pipes, automotive industry" />
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
              <span className="text-[#1a3e72] font-medium">Carbon & Alloy Pipe Specifications</span>
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
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-[#0d2b4e] mb-6">
                Carbon & Alloy Pipe Specifications
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive specifications for carbon steel and alloy steel pipes including high-temperature service grades. 
                Complete dimensional data, chemical composition, and mechanical properties for industrial applications.
              </p>
            </header>

            {/* Pipe Specifications */}
            <section className="space-y-8 mb-12">
              {carbonPipeSpecs.map((pipeType, index) => (
                <motion.article
                  key={pipeType.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-[#1a3e72] to-[#0d2b4e] p-6">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center space-x-3">
                        <Factory className="w-6 h-6 text-[#f39c12]" />
                        <h2 className="text-2xl font-bold text-white">{pipeType.category}</h2>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {pipeType.standards.map((standard) => (
                          <span key={standard} className="px-3 py-1 bg-[#f39c12] text-white text-sm rounded-full font-medium">
                            {standard}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-3">
                      <span className="text-white/90 text-sm">Available Grades: </span>
                      <span className="text-[#f39c12] font-medium">{pipeType.grades.join(", ")}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-3 px-4 font-semibold text-[#0d2b4e]">Parameter</th>
                            <th className="text-left py-3 px-4 font-semibold text-[#0d2b4e]">Specification</th>
                            <th className="text-left py-3 px-4 font-semibold text-[#0d2b4e]">Unit/Notes</th>
                          </tr>
                        </thead>
                        <tbody>
                          {pipeType.specifications.map((spec, idx) => (
                            <tr key={spec.parameter} className={`${idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-blue-50 transition-colors`}>
                              <td className="py-3 px-4 font-medium text-gray-800">{spec.parameter}</td>
                              <td className="py-3 px-4 text-[#1a3e72] font-semibold">{spec.value}</td>
                              <td className="py-3 px-4 text-gray-600">{spec.unit}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </motion.article>
              ))}
            </section>

            {/* Material Properties */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-12"
            >
              <div className="flex items-center space-x-3 mb-8">
                <Zap className="w-7 h-7 text-[#f39c12]" />
                <h2 className="text-3xl font-bold text-[#0d2b4e]">Material Properties & Applications</h2>
              </div>
              
              <div className="grid gap-6">
                {materialProperties.map((material, index) => (
                  <motion.article
                    key={material.grade}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6"
                  >
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <div className="flex items-center space-x-3">
                        <Thermometer className="w-5 h-5 text-[#f39c12]" />
                        <h3 className="text-xl font-bold text-[#0d2b4e]">{material.grade}</h3>
                      </div>
                      <span className="px-3 py-1 bg-[#f39c12] text-white text-sm rounded-full font-medium">
                        {material.type}
                      </span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-[#1a3e72] mb-3">Mechanical Properties</h4>
                        <div className="space-y-2">
                          {Object.entries(material.properties).map(([property, value]) => (
                            <div key={property} className="flex justify-between text-sm">
                              <span className="text-gray-700">{property}:</span>
                              <span className="font-medium text-[#1a3e72]">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[#1a3e72] mb-3">Typical Applications</h4>
                        <div className="grid grid-cols-1 gap-1">
                          {material.applications.map((application) => (
                            <div key={application} className="text-sm text-gray-700 flex items-center">
                              <div className="w-2 h-2 bg-[#f39c12] rounded-full mr-2 flex-shrink-0"></div>
                              {application}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>

            {/* Chemical Composition */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#0d2b4e] mb-8 text-center">Chemical Composition</h2>
              
              <div className="grid gap-6">
                {chemicalComposition.map((comp, index) => (
                  <motion.article
                    key={comp.grade}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    <div className="bg-gradient-to-r from-[#f39c12] to-[#e67e22] p-4">
                      <h3 className="text-xl font-bold text-white">{comp.grade} Chemical Composition</h3>
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
                            {Object.entries(comp.elements).map(([element, percentage], idx) => (
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

            {/* Testing Standards */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-12"
            >
              <h2 className="text-3xl font-bold text-[#0d2b4e] mb-6 text-center">Testing & Quality Standards</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-4">Mandatory Testing</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Hydrostatic pressure testing</li>
                    <li>• Non-destructive testing (NDT)</li>
                    <li>• Chemical composition verification</li>
                    <li>• Mechanical property testing</li>
                    <li>• Dimensional inspection</li>
                    <li>• Impact testing (where required)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-4">Quality Certifications</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Mill Test Certificate (MTC) as per EN 10204 3.1</li>
                    <li>• Material Test Certificate (MTC) 3.2 available</li>
                    <li>• API 5L PSL1/PSL2 certification</li>
                    <li>• NACE MR0175 compliance for sour service</li>
                    <li>• PED 2014/68/EU compliance</li>
                    <li>• Third-party inspection certificates</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Application & Specifications Table */}
            <motion.section
              id="carbon-alloy-pipe-specifications"
              aria-label="Carbon and Alloy Steel Pipes and Tubes Specifications"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="mb-12"
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-[#1a3e72] to-[#0d2b4e] p-6 text-center">
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    <strong>Application & Specifications of Carbon and Alloy Steel Pipes & Tubes</strong>
                  </h1>
                </div>
                
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-orange-400 to-orange-500">
                          <th className="border border-gray-300 px-4 py-3 text-left font-bold text-white text-sm md:text-base">
                            <strong>Application Sector</strong>
                          </th>
                          <th className="border border-gray-300 px-4 py-3 text-left font-bold text-white text-sm md:text-base">
                            <strong>Standard / Specification Codes</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-gray-100 hover:bg-blue-50 transition-colors duration-200">
                          <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800 text-sm md:text-base">
                            <strong>Oil & Gas Sector</strong>
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm md:text-base">
                            <strong>API 5L</strong><br />
                            <strong>IS / ISO</strong> : 3183<br />
                            <strong>BS</strong> : 6323 (PSL)<br />
                            <strong>IS</strong> : 3601, 3074
                          </td>
                        </tr>
                        <tr className="bg-white hover:bg-blue-50 transition-colors duration-200">
                          <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800 text-sm md:text-base">
                            <strong>Automotive Industry</strong>
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm md:text-base">
                            <strong>ASTM</strong> : A53<br />
                            <strong>BS</strong> : 3603<br />
                            <strong>IS</strong> : 6286
                          </td>
                        </tr>
                        <tr className="bg-gray-100 hover:bg-blue-50 transition-colors duration-200">
                          <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800 text-sm md:text-base">
                            <strong>Hydrocarbon & Process Industry</strong>
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm md:text-base">
                            <strong>ASTM A179, A214, A334, A426</strong><br />
                            <strong>BS</strong> : 3059 (Pt.1, Pt.ii), 6323 (PLV)<br />
                            <strong>IS</strong> : 2440 (Pt.i), 1161<br />
                            <strong>RQD</strong> : EH CHEK II
                          </td>
                        </tr>
                        <tr className="bg-white hover:bg-blue-50 transition-colors duration-200">
                          <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800 text-sm md:text-base">
                            <strong>Boiler, Heat Exchanger, Super Heater, Air Heater & Condenser</strong>
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm md:text-base">
                            <strong>ASTM A178, A214, A334, A335</strong><br />
                            <strong>BS</strong> : 3059 (Pt.ii Pt.ii), 6323 (PLV)<br />
                            <strong>IS</strong> : 2440 (PLV)<br />
                            <strong>IS</strong> : 1239 (Pt.ii), 1161
                          </td>
                        </tr>
                        <tr className="bg-gray-100 hover:bg-blue-50 transition-colors duration-200">
                          <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800 text-sm md:text-base">
                            <strong>Railways</strong>
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm md:text-base">
                            <strong>IS</strong> : 1161, 3501, 4923, 5295<br />
                            <strong>BS</strong> : 6323 (PLV)<br />
                            <strong>IS</strong> : 1157<br />
                            <strong>DIN</strong> : 2440, 2441<br />
                            <strong>ISO</strong> : 65
                          </td>
                        </tr>
                        <tr className="bg-white hover:bg-blue-50 transition-colors duration-200">
                          <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800 text-sm md:text-base">
                            <strong>Mechanical, Structural & General Engineering</strong>
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm md:text-base">
                            <strong>IS</strong> : 1161, 3501, 4923, 5295<br />
                            <strong>BS</strong> : 6323 (PLV)<br />
                            <strong>IS</strong> : 1239 (PLV)
                          </td>
                        </tr>
                        <tr className="bg-gray-100 hover:bg-blue-50 transition-colors duration-200">
                          <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800 text-sm md:text-base">
                            <strong>Water, Gas & Sewage</strong>
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm md:text-base">
                            <strong>IS</strong> : 3589, 1239 (PLI)<br />
                            <strong>BS</strong> : 1387<br />
                            <strong>DIN</strong> : 2440, 2441<br />
                            <strong>ISO</strong> : 65
                          </td>
                        </tr>
                        <tr className="bg-white hover:bg-blue-50 transition-colors duration-200">
                          <td className="border border-gray-300 px-4 py-3 font-semibold text-gray-800 text-sm md:text-base">
                            <strong>Water Well</strong>
                          </td>
                          <td className="border border-gray-300 px-4 py-3 text-gray-700 text-sm md:text-base">
                            <strong>IS</strong> : 4270
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Applications List */}
                <div className="bg-gray-50 p-6 border-t">
                  <ul className="space-y-2 text-sm">
                    <li><strong>• Boiler Tubes Applications & Specifications</strong></li>
                    <li><strong>• Galvanized Tubes Applications & Specifications</strong></li>
                    <li><strong>• Oil and Gas Pipes & Tubes - Applications & Specifications</strong></li>
                    <li><strong>• Heat Exchanger Pipes & Tubes Applications & Specifications</strong></li>
                    <li><strong>• Super Heater Pipes & Tubes - Applications & Specifications</strong></li>
                    <li><strong>• Railways Pipes & Tubes - Applications & Specifications</strong></li>
                    <li><strong>• Black & Galvanized ERW Pipes & Tubes conforming to IS 1239 (Pt-I) Equivalent to IS 1537</strong></li>
                    <li><strong>• Structural Tubes Conforming to IS (116)</strong></li>
                    <li><strong>• ERW Line Pipes conforming to API 5L</strong></li>
                    <li><strong>• IS | ISO : 3183 & ASTM A53</strong></li>
                    <li><strong>• ERW Boiler, Super Heater, Heat Exchanger, Condenser & Air Heater Pipes & Tubes</strong></li>
                  </ul>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="font-bold text-[#1a3e72] text-sm">
                      <strong>Jindal Stainless Steel Pipes & Tubes</strong>
                    </p>
                    <p className="text-gray-700 text-sm mt-1">
                      <strong>M.S. Pipes & Tubes</strong>
                    </p>
                    <p className="text-gray-700 text-sm">
                      <strong>Carbon & Alloy Steel Pipe</strong>
                    </p>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.7 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-[#1a3e72] to-[#0d2b4e] rounded-xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Need High-Temperature Pipe Solutions?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Get expert consultation on carbon steel and alloy steel pipe selection for your high-temperature and high-pressure applications.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-[#f39c12] text-white font-semibold rounded-lg hover:bg-[#e67e22] transition-colors duration-300"
                >
                  Consult Our Engineers
                </Link>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </main>
    </>
  );
}