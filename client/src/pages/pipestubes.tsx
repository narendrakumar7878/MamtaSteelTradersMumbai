import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Home, ChevronRight } from "lucide-react";

export default function Pipestubes() {
  const pipeCategories = [
    {
      title: "Stainless Steel Pipes & Tubes",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      keywords: [
        "ASTM / ASME SA 312 GR. TP 304, 304L, 304H, 309S, 309H, 310S, 310H",
        "316, 316TI, 316H, 316 LN, 317, 317L, 321, 321H, 347, 347H, 904L",
        "Seamless / ERW / Welded in Round & Square",
        "15 NB UP TO 1200 NB SCH 5S, 10S, 10, 20, 40S, 40, STD, 60, 80S, 80, XS",
        "Duplex Steel: S 31803, S 32205, S 32550, S 32750, S 32760"
      ]
    },
    {
      title: "Carbon Steel Pipes & Tubes",
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=400&h=300&fit=crop",
      keywords: [
        "ASTM / ASME A 53 GR. A, B",
        "ASTM / ASME 106 GR. A, B, C",
        "API 5L GR. B, API 5L X 42, X 46, X 52, X 60, X 70",
        "ASTM / ASME A 691 GR A, B, C",
        "Seamless / ERW / Welded in Round & Square"
      ]
    },
    {
      title: "Alloy Steel Pipes",
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=400&h=300&fit=crop",
      keywords: [
        "ASTM / ASME A 335 GR P1, P5, P9, P11, P12, P22, P23, P91",
        "ASTM / ASME A 691 GR P1 CR, 1 1/4 CR, 2 1/4 CR, 5 CR, 9CR, 91",
        "High Temperature Applications",
        "Seamless / ERW / Welded",
        "15 NB UP TO 1200 NB"
      ]
    },
    {
      title: "Duplex & Super Duplex Pipes",
      image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=400&h=300&fit=crop",
      keywords: [
        "ASTM / ASME SA 790 UNS NO S 31803",
        "S 32205, S 32550, S 32750, S 32760",
        "Corrosion Resistant Applications",
        "Seamless / ERW / Welded",
        "Round & Square Forms"
      ]
    },
    {
      title: "EFSW / SAW / HSAW / LSAW Pipes",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop",
      keywords: [
        "Electric Fusion Submerged Arc Welded",
        "Submerged Arc Welded (SAW)",
        "Helical Submerged Arc Welded (HSAW)",
        "Longitudinal Submerged Arc Welded (LSAW)",
        "Large Diameter Applications"
      ]
    },
    {
      title: "Welded Wear Resistant Pipes",
      image: "https://images.unsplash.com/photo-1597149850956-d5d37543ba4c?w=400&h=300&fit=crop",
      keywords: [
        "AR400 Wear Resistant Steel",
        "Abrasion Resistant Applications",
        "Mining Industry Applications",
        "Heavy Duty Construction",
        "High Durability"
      ]
    },
    {
      title: "Plate Welded Pipes",
      image: "https://images.unsplash.com/photo-1565008538560-97b52ba6a53e?w=400&h=300&fit=crop",
      keywords: [
        "Custom Fabricated Pipes",
        "Large Diameter Welded Pipes",
        "Heavy Wall Thickness",
        "Structural Applications",
        "API 5L Compliance"
      ]
    },
    {
      title: "Large OD Seamless Pipes",
      image: "https://images.unsplash.com/photo-1578321272911-a1161b8a4c9a?w=400&h=300&fit=crop",
      keywords: [
        "Large Outside Diameter Seamless",
        "High Pressure Applications",
        "Oil & Gas Industry",
        "Petrochemical Applications",
        "ASTM / ASME Standards"
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Pipes & Tubes | Stainless Steel, Carbon Steel, Alloy Steel Pipes</title>
        <meta 
          name="description" 
          content="High-quality stainless steel, carbon steel, alloy steel pipes and tubes. Available in seamless, welded, ERW, EFSW, HSAW, and LSAW types with various grades and sizes."
        />
        <meta name="keywords" content="pipes tubes, stainless steel pipes, carbon steel pipes, alloy steel pipes, seamless pipes, welded pipes, ERW pipes, duplex pipes, ASTM pipes" />
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
              <Link href="/products" className="text-gray-600 hover:text-[#1a3e72] transition-colors">
                Products
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-[#1a3e72] font-medium">Pipes & Tubes</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <section id="pipes-tubes" aria-label="Pipes and Tubes Product Gallery" className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
          >
            {/* Header Section */}
            <header className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-[#0d2b4e] mb-6">
                <strong>Pipes & Tubes – Stainless Steel, Carbon Steel, Alloy Steel and More</strong>
              </h1>
              
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                We supply a wide range of precisely engineered <strong>stainless steel pipes & tubes</strong>, made in compliance with international quality and safety standards. Our range comprises of <strong>seamless pipes</strong>, <strong>welded pipes</strong>, and <strong>ERW pipes</strong> available in different dimensions & grades.
              </p>
            </header>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pipeCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={`${category.title} - High quality steel pipes and tubes`}
                      className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-[#0d2b4e] mb-4">
                      <strong>{category.title}</strong>
                    </h2>
                    
                    <div className="space-y-2">
                      <h3 className="text-sm font-semibold text-[#f39c12] mb-2">Key Specifications:</h3>
                      <ul className="space-y-1">
                        {category.keywords.map((keyword, keyIndex) => (
                          <li key={keyIndex} className="text-sm text-gray-700 leading-relaxed">
                            • <strong>{keyword}</strong>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Information Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-16 bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-[#0d2b4e] mb-6 text-center">
                <strong>Our Pipe & Tube Capabilities</strong>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#f39c12] mb-2">Size Range</h3>
                  <p className="text-gray-700">
                    <strong>15 NB UP TO 1200 NB</strong> in various schedules including SCH 5S, 10S, 10, 20, 40S, 40, STD, 60, 80S, 80, XS, 100, 120, 140, 160 & XXS
                  </p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#f39c12] mb-2">Manufacturing Types</h3>
                  <p className="text-gray-700">
                    <strong>Seamless</strong>, <strong>ERW</strong>, <strong>Welded</strong>, <strong>EFSW</strong>, <strong>SAW</strong>, <strong>HSAW</strong>, <strong>LSAW</strong>
                  </p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#f39c12] mb-2">Forms Available</h3>
                  <p className="text-gray-700">
                    <strong>Round</strong>, <strong>Square</strong>, <strong>Rectangular</strong>, <strong>Hydraulic</strong> and custom shapes
                  </p>
                </div>
                
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-[#f39c12] mb-2">Standards</h3>
                  <p className="text-gray-700">
                    <strong>ASTM</strong>, <strong>ASME</strong>, <strong>API</strong>, <strong>AISI</strong>, <strong>BS</strong>, <strong>ANSI</strong>, <strong>DIN</strong>, <strong>JIS</strong>
                  </p>
                </div>
              </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mt-12 text-center"
            >
              <div className="bg-gradient-to-r from-[#1a3e72] to-[#0d2b4e] rounded-xl p-8 text-white">
                <h2 className="text-2xl font-bold mb-4">Need Custom Pipe & Tube Solutions?</h2>
                <p className="text-lg mb-6 opacity-90">
                  Contact us for detailed specifications, pricing, and availability of our comprehensive range of <strong>pipes & tubes</strong> for your specific applications.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center px-8 py-3 bg-[#f39c12] text-white font-semibold rounded-lg hover:bg-[#e67e22] transition-colors duration-300"
                >
                  Get Pipe & Tube Quote
                </Link>
              </div>
            </motion.section>
          </motion.div>
        </section>
      </main>
    </>
  );
}