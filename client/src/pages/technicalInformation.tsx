import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Home, ChevronRight, BookOpen, Gauge, Shield, TrendingUp, Settings, FileText, Zap } from "lucide-react";

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

const technicalSpecs = [
  {
    category: "Steel Pipes",
    icon: Settings,
    specifications: [
      {
        property: "Material Grades",
        value: "SS 304, 316, 321, 310, 904L"
      },
      {
        property: "Size Range",
        value: "1/2\" to 24\" NB (Nominal Bore)"
      },
      {
        property: "Wall Thickness",
        value: "SCH 5S to SCH XXS"
      },
      {
        property: "Length",
        value: "6 meter standard, custom lengths available"
      },
      {
        property: "Standards",
        value: "ASTM A312, ASTM A358, ASME B36.19M"
      }
    ]
  },
  {
    category: "Steel Sheets & Plates",
    icon: FileText,
    specifications: [
      {
        property: "Material Grades",
        value: "SS 304, 316L, 310, 321, Duplex 2205"
      },
      {
        property: "Thickness Range",
        value: "0.5mm to 100mm"
      },
      {
        property: "Width",
        value: "1000mm, 1219mm, 1500mm"
      },
      {
        property: "Length",
        value: "2000mm, 2438mm, 3048mm, 6096mm"
      },
      {
        property: "Surface Finish",
        value: "2B, BA, No.1, No.4, Hairline, Mirror"
      },
      {
        property: "Standards",
        value: "ASTM A240, ASME SA240, EN 10088"
      }
    ]
  },
  {
    category: "Steel Flanges",
    icon: Zap,
    specifications: [
      {
        property: "Types",
        value: "Weld Neck, Slip-on, Blind, Threaded"
      },
      {
        property: "Pressure Class",
        value: "150#, 300#, 600#, 900#, 1500#, 2500#"
      },
      {
        property: "Size Range",
        value: "1/2\" to 48\""
      },
      {
        property: "Material Grades",
        value: "SS 304, 316, 321, 347, Duplex"
      },
      {
        property: "Standards",
        value: "ASME B16.5, ASME B16.47, DIN, JIS"
      },
      {
        property: "Face Type",
        value: "Raised Face (RF), Flat Face (FF)"
      }
    ]
  }
];

const testingStandards = [
  {
    icon: Shield,
    title: "Chemical Analysis",
    description: "Complete chemical composition testing using advanced spectrometers"
  },
  {
    icon: Shield,
    title: "Mechanical Testing",
    description: "Tensile strength, yield strength, and elongation testing"
  },
  {
    icon: Shield,
    title: "Hardness Testing",
    description: "Brinell and Rockwell hardness testing as per standards"
  },
  {
    icon: Shield,
    title: "Corrosion Testing",
    description: "Intergranular corrosion and pitting resistance testing"
  }
];

export default function TechnicalInformation() {
  return (
    <>
      <Helmet>
        <title>Technical Information & Specifications - Stainless Steel Products | Mamta Steel Traders</title>
        <meta 
          name="description" 
          content="Comprehensive technical specifications for stainless steel pipes, sheets, plates, and flanges. Complete chemical composition data, ASTM/ASME standards compliance, and manufacturing guidelines for industrial applications."
        />
        <meta name="keywords" content="stainless steel specifications, technical information, ASTM A312, ASME B16.5, chemical composition, pipe specifications, steel grades SS 304 316L, carbon alloy steel, manufacturing standards, quality testing" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Technical Information & Specifications - Stainless Steel Products | Mamta Steel Traders" />
        <meta property="og:description" content="Comprehensive technical specifications for stainless steel pipes, sheets, plates, and flanges. Complete chemical composition data and standards compliance." />
        <meta property="og:site_name" content="Mamta Steel Traders" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Technical Information & Specifications - Stainless Steel Products" />
        <meta name="twitter:description" content="Comprehensive technical specifications for stainless steel pipes, sheets, plates, and flanges." />
        
        {/* Additional SEO */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Mamta Steel Traders" />
        <meta name="subject" content="Technical Specifications for Stainless Steel Products" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Structured Data - JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TechnicalArticle",
            "headline": "Technical Information & Specifications - Stainless Steel Products",
            "description": "Comprehensive technical specifications for stainless steel pipes, sheets, plates, and flanges including chemical composition and standards compliance.",
            "author": {
              "@type": "Organization",
              "name": "Mamta Steel Traders"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Mamta Steel Traders"
            },
            "about": [
              {
                "@type": "Thing",
                "name": "Stainless Steel Specifications"
              },
              {
                "@type": "Thing", 
                "name": "ASTM Standards"
              },
              {
                "@type": "Thing",
                "name": "Chemical Composition"
              }
            ],
            "keywords": ["stainless steel", "technical specifications", "ASTM A312", "ASME standards", "chemical composition", "pipe specifications"]
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

            {/* Technical Data Overview Cards */}
            <section className="grid md:grid-cols-1 gap-8 mb-16">
              {technicalData.map((item, index) => (
                <motion.article
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  role="article"
                  aria-labelledby={`technical-title-${index}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-[#f39c12] rounded-lg flex-shrink-0" aria-hidden="true">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 id={`technical-title-${index}`} className="text-2xl font-bold text-[#0d2b4e] mb-4">{item.title}</h2>
                      <p className="text-gray-700 leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </section>

            {/* Detailed Technical Specifications */}
            <section className="mb-16" role="region" aria-labelledby="detailed-specs-heading">
              <motion.header
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center mb-12"
              >
                <h2 id="detailed-specs-heading" className="text-3xl md:text-4xl font-bold text-[#0d2b4e] mb-4">
                  Detailed Product Specifications
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Comprehensive technical specifications for all our steel products including dimensions, standards, and quality parameters.
                </p>
              </motion.header>

              <div className="space-y-12">
                {technicalSpecs.map((spec, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.7 + index * 0.2 }}
                    className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                    role="article"
                    aria-labelledby={`spec-category-${index}`}
                    data-testid={`spec-section-${index}`}
                  >
                    <div className="bg-gradient-to-r from-[#1a3e72] to-[#0d2b4e] p-6">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-[#f39c12] rounded-lg flex items-center justify-center mr-4" aria-hidden="true">
                          <spec.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 id={`spec-category-${index}`} className="text-2xl md:text-3xl font-bold text-white" data-testid={`spec-title-${index}`}>
                          {spec.category}
                        </h3>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {spec.specifications.map((item, itemIndex) => (
                          <motion.div
                            key={itemIndex}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 + index * 0.2 + itemIndex * 0.1 }}
                            className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-md"
                            data-testid={`spec-item-${index}-${itemIndex}`}
                          >
                            <h4 className="font-semibold text-[#0d2b4e] mb-3 text-lg" data-testid={`spec-property-${index}-${itemIndex}`}>
                              {item.property}
                            </h4>
                            <p className="text-gray-700 font-medium" data-testid={`spec-value-${index}-${itemIndex}`}>
                              {item.value}
                            </p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </section>

            {/* Testing & Quality Standards */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 md:p-12 mb-16 border border-blue-100"
              role="region"
              aria-labelledby="testing-standards-heading"
            >
              <header className="text-center mb-12">
                <h2 id="testing-standards-heading" className="text-3xl md:text-4xl font-bold text-[#0d2b4e] mb-4" data-testid="text-testing-title">
                  Testing & Quality Standards
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Rigorous testing procedures ensure the highest quality and compliance with international standards.
                </p>
              </header>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {testingStandards.map((test, index) => (
                  <motion.article
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                    className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                    data-testid={`testing-item-${index}`}
                  >
                    <div className="w-16 h-16 bg-[#f39c12] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg" aria-hidden="true">
                      <test.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-[#0d2b4e] mb-3" data-testid={`testing-title-${index}`}>
                      {test.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed" data-testid={`testing-description-${index}`}>
                      {test.description}
                    </p>
                  </motion.article>
                ))}
              </div>
            </motion.section>

            {/* Standards Compliance */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="mb-16"
              role="region"
              aria-labelledby="standards-compliance-heading"
            >
              <header className="text-center mb-12">
                <h2 id="standards-compliance-heading" className="text-3xl md:text-4xl font-bold text-[#0d2b4e] mb-4" data-testid="text-standards-title">
                  International Standards Compliance
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our products meet and exceed the most stringent international quality and safety standards.
                </p>
              </header>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.article
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.9 }}
                  className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  data-testid="standards-astm"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-[#1a3e72] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">ASTM</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0d2b4e] mb-3">ASTM Standards</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• A312 - Seamless Steel Pipes</li>
                    <li>• A358 - Electric-Fusion-Welded Austenitic</li>
                    <li>• A240 - Heat-Resisting Steel Plate</li>
                    <li>• A479 - Stainless Steel Bars</li>
                    <li>• A182 - Forged Flanges</li>
                  </ul>
                </motion.article>

                <motion.article
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 2.0 }}
                  className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  data-testid="standards-asme"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-[#f39c12] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">ASME</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0d2b4e] mb-3">ASME Standards</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• B16.5 - Pipe Flanges</li>
                    <li>• B16.47 - Large Diameter Steel Flanges</li>
                    <li>• B36.19M - Stainless Steel Pipe</li>
                    <li>• SA240 - Heat-Resisting Steel Plate</li>
                    <li>• SA358 - Electric-Fusion-Welded</li>
                  </ul>
                </motion.article>

                <motion.article
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 2.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  data-testid="standards-din"
                >
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-[#0d2b4e] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">DIN</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#0d2b4e] mb-3">DIN Standards</h3>
                  </div>
                  <ul className="space-y-2 text-gray-700">
                    <li>• DIN 1.4301 - SS 304 Grade</li>
                    <li>• DIN 1.4404 - SS 316L Grade</li>
                    <li>• DIN 2463 - Steel Flanges</li>
                    <li>• EN 10088 - Stainless Steels List</li>
                    <li>• ISO 9001:2015 - Quality Management</li>
                  </ul>
                </motion.article>
              </div>
            </motion.section>

            {/* Technical Overview Grid */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-12"
              role="region"
              aria-labelledby="technical-overview-heading"
            >
              <header className="text-center mb-12">
                <h2 id="technical-overview-heading" className="text-3xl md:text-4xl font-bold text-[#0d2b4e] mb-4">
                  Stainless Steel Technical Overview
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Key material grades and their primary applications across industries.
                </p>
              </header>
              
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold text-[#1a3e72] mb-6 flex items-center">
                    <div className="w-8 h-8 bg-[#f39c12] rounded-full mr-3"></div>
                    Material Grades
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#1a3e72] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">SS 304</h4>
                        <p className="text-gray-600">General purpose stainless steel with excellent formability</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#1a3e72] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">SS 316L</h4>
                        <p className="text-gray-600">Enhanced corrosion resistance for marine environments</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#1a3e72] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">SS 321</h4>
                        <p className="text-gray-600">High temperature applications and thermal cycling</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#1a3e72] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Duplex 2205</h4>
                        <p className="text-gray-600">Superior strength and excellent corrosion resistance</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-semibold text-[#1a3e72] mb-6 flex items-center">
                    <div className="w-8 h-8 bg-[#f39c12] rounded-full mr-3"></div>
                    Key Applications
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#f39c12] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Chemical Processing</h4>
                        <p className="text-gray-600">Equipment for aggressive chemical environments</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#f39c12] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Food & Beverage</h4>
                        <p className="text-gray-600">Hygienic processing and storage systems</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#f39c12] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Oil & Gas</h4>
                        <p className="text-gray-600">Pipelines and offshore platform structures</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-[#f39c12] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-800">Architecture</h4>
                        <p className="text-gray-600">Modern building facades and structural elements</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Enhanced CTA Section */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.4 }}
              className="text-center mt-16"
              role="region"
              aria-labelledby="cta-heading"
            >
              <div className="bg-gradient-to-r from-[#1a3e72] via-[#0d2b4e] to-[#1a3e72] rounded-2xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-transparent to-blue-600/20"></div>
                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 2.5 }}
                    className="mb-6"
                  >
                    <div className="flex justify-center items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-[#f39c12] rounded-full flex items-center justify-center">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-[#f39c12] rounded-full flex items-center justify-center">
                        <Shield className="w-6 h-6 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-[#f39c12] rounded-full flex items-center justify-center">
                        <Settings className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h2 id="cta-heading" className="text-3xl md:text-4xl font-bold mb-4">
                      Need Detailed Technical Specifications?
                    </h2>
                  </motion.div>
                  
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.6 }}
                    className="text-xl mb-8 opacity-95 max-w-3xl mx-auto leading-relaxed"
                  >
                    Our technical experts provide comprehensive documentation, material certificates, and custom specifications 
                    for your stainless steel and carbon alloy steel requirements.
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 2.7 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                  >
                    <Link 
                      href="/contact"
                      className="group inline-flex items-center px-8 py-4 bg-[#f39c12] text-white font-semibold rounded-xl hover:bg-[#e67e22] transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-500/50"
                      aria-label="Contact our technical support team"
                    >
                      <span>Get Technical Support</span>
                      <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    
                    <Link 
                      href="/chemicalComposition"
                      className="group inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40 focus:outline-none focus:ring-4 focus:ring-white/30"
                      aria-label="View detailed chemical composition data"
                    >
                      <span>View Chemical Composition</span>
                      <TrendingUp className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300" />
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