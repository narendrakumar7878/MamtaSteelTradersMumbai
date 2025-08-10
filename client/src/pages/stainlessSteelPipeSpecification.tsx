import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Home, ChevronRight, Cylinder, Ruler, Settings, CheckCircle } from "lucide-react";

const pipeSpecifications = [
  {
    category: "Seamless Pipes",
    standards: ["ASTM A312", "ASTM A358", "ASME B36.19M"],
    specifications: [
      {
        parameter: "Size Range",
        value: "1/8\" NB to 24\" NB",
        unit: "Nominal Bore"
      },
      {
        parameter: "Wall Thickness",
        value: "SCH 5S to SCH XXS",
        unit: "Schedule"
      },
      {
        parameter: "Length",
        value: "6 meters standard, up to 18 meters",
        unit: "Meters"
      },
      {
        parameter: "Outside Diameter Tolerance",
        value: "±0.4mm to ±1.6mm",
        unit: "Based on size"
      },
      {
        parameter: "Wall Thickness Tolerance",
        value: "±10% to ±12.5%",
        unit: "Based on schedule"
      }
    ]
  },
  {
    category: "Welded Pipes",
    standards: ["ASTM A554", "ASTM A249", "ASTM A269"],
    specifications: [
      {
        parameter: "Size Range",
        value: "1/4\" OD to 48\" OD",
        unit: "Outside Diameter"
      },
      {
        parameter: "Wall Thickness",
        value: "0.5mm to 25mm",
        unit: "Millimeters"
      },
      {
        parameter: "Length",
        value: "6 meters standard, custom available",
        unit: "Meters"
      },
      {
        parameter: "Weld Type",
        value: "TIG/GTAW welded",
        unit: "Process"
      },
      {
        parameter: "Surface Finish",
        value: "180 grit, 320 grit, mirror",
        unit: "Polish grade"
      }
    ]
  }
];

const gradeSpecifications = [
  {
    grade: "SS 304/304L",
    applications: ["Food processing", "Chemical equipment", "Architectural"],
    properties: {
      "Tensile Strength": "515-620 MPa",
      "Yield Strength": "205-310 MPa",
      "Elongation": "40% min",
      "Hardness": "≤200 HB"
    }
  },
  {
    grade: "SS 316/316L",
    applications: ["Marine environments", "Pharmaceutical", "Chemical processing"],
    properties: {
      "Tensile Strength": "515-620 MPa",
      "Yield Strength": "205-310 MPa",
      "Elongation": "40% min",
      "Hardness": "≤200 HB"
    }
  },
  {
    grade: "SS 321",
    applications: ["High temperature", "Exhaust systems", "Heat exchangers"],
    properties: {
      "Tensile Strength": "515-620 MPa",
      "Yield Strength": "205-310 MPa",
      "Elongation": "40% min",
      "Hardness": "≤200 HB"
    }
  }
];

export default function StainlessSteelPipeSpecification() {
  return (
    <>
      <Helmet>
        <title>Stainless Steel Pipe Specifications - ASTM Standards | Mamta Steel Traders</title>
        <meta 
          name="description" 
          content="Comprehensive stainless steel pipe specifications including seamless and welded pipes. ASTM A312, A358 standards with detailed dimensional tolerances and chemical composition."
        />
        <meta name="keywords" content="stainless steel pipe specification, ASTM A312, seamless pipes, welded pipes, pipe dimensions, chemical composition, carbon alloy steel" />
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
              <span className="text-[#1a3e72] font-medium">Stainless Steel Pipe Specification</span>
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
                  <Cylinder className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-[#0d2b4e] mb-6">
                Stainless Steel Pipe Specifications
              </h1>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Comprehensive specifications for stainless steel pipes including seamless and welded varieties. 
                Complete dimensional data, tolerances, and standards compliance for carbon alloy steel pipe applications.
              </p>
            </header>

            {/* Pipe Type Specifications */}
            <section className="space-y-8 mb-12">
              {pipeSpecifications.map((pipeType, index) => (
                <motion.article
                  key={pipeType.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-[#1a3e72] to-[#0d2b4e] p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Ruler className="w-6 h-6 text-[#f39c12]" />
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

            {/* Grade Specifications */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-12"
            >
              <div className="flex items-center space-x-3 mb-8">
                <Settings className="w-7 h-7 text-[#f39c12]" />
                <h2 className="text-3xl font-bold text-[#0d2b4e]">Material Grade Specifications</h2>
              </div>
              
              <div className="grid gap-6">
                {gradeSpecifications.map((grade, index) => (
                  <motion.article
                    key={grade.grade}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg p-6"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <CheckCircle className="w-5 h-5 text-[#f39c12]" />
                      <h3 className="text-xl font-bold text-[#0d2b4e]">{grade.grade}</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-[#1a3e72] mb-3">Mechanical Properties</h4>
                        <div className="space-y-2">
                          {Object.entries(grade.properties).map(([property, value]) => (
                            <div key={property} className="flex justify-between text-sm">
                              <span className="text-gray-700">{property}:</span>
                              <span className="font-medium text-[#1a3e72]">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-[#1a3e72] mb-3">Typical Applications</h4>
                        <ul className="space-y-1">
                          {grade.applications.map((application) => (
                            <li key={application} className="text-sm text-gray-700 flex items-center">
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              {application}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.section>

            {/* Testing and Quality */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-12"
            >
              <h2 className="text-3xl font-bold text-[#0d2b4e] mb-6 text-center">Quality Assurance & Testing</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-4">Standard Tests</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Hydrostatic pressure testing to ASTM A312</li>
                    <li>• Non-destructive testing (NDT) - Eddy current</li>
                    <li>• Dimensional verification and visual inspection</li>
                    <li>• Chemical composition analysis</li>
                    <li>• Mechanical property testing</li>
                    <li>• Intergranular corrosion testing (ASTM A262)</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-[#1a3e72] mb-4">Certification & Documentation</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Mill Test Certificate (MTC) with full traceability</li>
                    <li>• Material Test Certificate (3.1/3.2 as per EN 10204)</li>
                    <li>• Pressure Equipment Directive (PED) compliance</li>
                    <li>• Third-party inspection certificates available</li>
                    <li>• NACE compliance for sour service applications</li>
                    <li>• API 5L certification for line pipe applications</li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="text-center"
            >
              <div className="bg-gradient-to-r from-[#1a3e72] to-[#0d2b4e] rounded-xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Need Custom Pipe Specifications?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Get detailed specifications, material certificates, and technical support for your stainless steel pipe requirements.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-[#f39c12] text-white font-semibold rounded-lg hover:bg-[#e67e22] transition-colors duration-300"
                >
                  Request Detailed Specifications
                </Link>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </main>
    </>
  );
}