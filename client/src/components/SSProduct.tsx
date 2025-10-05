import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight, CheckCircle } from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const hoverEffect = {
  hover: { 
    scale: 1.02, 
    y: -5,
    transition: { duration: 0.3 }
  }
};

export default function SSProduct() {
  // SEO-optimized structured data for steel products
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mamta Steel Traders",
    "description": "Major Importer, Stockist, Supplier of Stainless Steel, Alloy Steel, Carbon Steel & Mild Steel Grades",
    "url": "https://mamtasteel.com",
    "industry": "Steel Manufacturing and Supply",
    "products": [
      {
        "@type": "Product",
        "name": "Stainless Steel",
        "description": "Stainless Steel 202, 303, 304, 304L, 304H, 316, 316L, 316H, 316Ti, 310, 310s, 321, 321H, 317L, 347, 904L etc",
        "category": "Steel Products"
      },
      {
        "@type": "Product", 
        "name": "Alloy Steel",
        "description": "SA387 Gr. 5, Gr. 9, Gr. 11, Gr. 12, Gr. 22, Gr.91, 16Mo3, C45, EN19, Abrex, Hardox, Rockstar, Rockhard, High Manganese, UttamHard, SailHard, JspHard, Tiscral",
        "category": "Steel Products"
      },
      {
        "@type": "Product",
        "name": "Carbon Steel", 
        "description": "EN1A, EN8, EN9, EN15, EN16, EN18, EN19, EN24, EN25, EN26, EN27, EN28, EN31, EN32, EN30B, EN36B, EN36C, EN39B, EN40B, EN41B, EN42, EN47, 100CR6, 52100, 18CrNiMo7-6, X22CrMoV12-1 and other special Grades",
        "category": "Steel Products"
      },
      {
        "@type": "Product",
        "name": "Mild Steel",
        "description": "IS2062 E250A, E250BR, E250BO, E250C, E350A, E350BR, E350BO, E350C, E450BR",
        "category": "Steel Products"
      }
    ]
  };

  const steelCategories = [
    {
      title: "Stainless Steel",
      icon: "🔗",
      grades: "Stainless Steel - 202, 303, 304, 304L, 304H, 316, 316L, 316H, 316Ti, 310, 310s, 321, 321H, 317L, 347, 904L etc.",
      products: ["Pipes", "Tubes", "Sheets", "Plates", "Round Bars", "Flat Bars", "Square Bars", "Hollow Bars", "Forged Bars", "Fittings", "Flanges"],
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20",
      borderColor: "border-blue-200 dark:border-blue-700",
      iconColor: "text-blue-600 dark:text-blue-400"
    },
    {
      title: "Alloy Steel", 
      icon: "⚡",
      grades: "SA387 Gr. 5, Gr. 9, Gr. 11, Gr. 12, Gr. 22, Gr.91, 16Mo3, C45, EN19, Abrex, Hardox, Rockstar, Rockhard, High Manganese, UttamHard, SailHard, JspHard, Tiscral",
      products: ["Pipes", "Tubes", "Sheets", "Plates", "Round Bars", "Flat Bars", "Square Bars", "Hollow Bars", "Forged Bars", "Fittings", "Flanges"],
      bgColor: "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20",
      borderColor: "border-green-200 dark:border-green-700",
      iconColor: "text-green-600 dark:text-green-400"
    },
    {
      title: "Carbon Steel",
      icon: "🔧",
      grades: "EN1A, EN8, EN9, EN15, EN16, EN18, EN19, EN24, EN25, EN26, EN27, EN28, EN31, EN32, EN30B, EN36B, EN36C, EN39B, EN40B, EN41B, EN42, EN47, 100CR6, 52100, 18CrNiMo7-6, X22CrMoV12-1 and other special Grades",
      products: ["Pipes", "Tubes", "Sheets", "Plates", "Round Bars", "Flat Bars", "Square Bars", "Hollow Bars", "Forged Bars", "Fittings", "Flanges"],
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20",
      borderColor: "border-orange-200 dark:border-orange-700",
      iconColor: "text-orange-600 dark:text-orange-400"
    },
    {
      title: "Mild Steel",
      icon: "🏗️",
      grades: "IS2062 E250A, E250BR, E250BO, E250C, E350A, E350BR, E350BO, E350C, E450BR",
      products: ["Pipes", "Tubes", "Sheets", "Plates", "Round Bars", "Flat Bars", "Square Bars", "Hollow Bars", "Forged Bars", "Fittings", "Flanges"],
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20",
      borderColor: "border-purple-200 dark:border-purple-700",
      iconColor: "text-purple-600 dark:text-purple-400"
    }
  ];

  return (
    <>
      {/* SEO Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      
      <section 
        className="px-3 sm:px-4 lg:px-6 py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
        aria-labelledby="steel-products-heading"
      >
        <div className="max-w-7xl mx-auto">
          {/* Main Heading - SEO Optimized */}
          <motion.div 
            className="text-center mb-8 sm:mb-12 lg:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h1 
              id="steel-products-heading"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight px-2 sm:px-0"
            >
              <span className="text-[#f39c12]">Mamta Steel Traders</span> is Major Importer, Stockist, Supplier of{" "}
              <span className="text-[#0d2b4e]">Stainless Steel, Alloy Steel, Carbon Steel & Mild Steel Grades</span>
            </h1>
            
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 max-w-6xl mx-auto leading-relaxed px-2 sm:px-4">
              Pipes, Tubes, Sheets, Plates, Round Bars, Flat Bars, Square Bars, Hollow Bars, Forged Bars, Fittings, Flanges, 
              etc in Stainless Steel, Alloy Steel, Carbon Steel, Mild Steel
            </p>
          </motion.div>

          {/* Steel Categories Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {steelCategories.map((category, index) => (
              <motion.article
                key={category.title}
                className={`${category.bgColor} ${category.borderColor} border-2 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
                variants={fadeInUp}
                whileHover="hover"
                custom={index}
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <span className="text-2xl sm:text-3xl lg:text-4xl mr-3 sm:mr-4" role="img" aria-label={category.title}>
                    {category.icon}
                  </span>
                  <h2 className={`text-xl sm:text-2xl lg:text-3xl font-bold ${category.iconColor}`}>
                    {category.title}
                  </h2>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
                  {category.grades}
                </p>
                
                <div className="mb-4 sm:mb-6">
                  <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2 sm:mb-3">
                    Available Products:
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2" role="list">
                    {category.products.map((product) => (
                      <li key={product} className="flex items-center text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-1.5 sm:mr-2 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{product}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </motion.div>

          {/* SEO-Optimized Content Section */}
          <motion.div 
            className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg mb-6 sm:mb-8 lg:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-gray-900 dark:text-white mb-4 sm:mb-6 lg:mb-8">
              Premium Quality Steel Products Supplier in India
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <div>
                <h3 className="text-base sm:text-lg lg:text-2xl font-semibold text-[#0d2b4e] dark:text-blue-400 mb-2 sm:mb-3 lg:mb-4">
                  Stainless Steel 304, 316, 316L, 310, 321, 904L Supplier in India
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  We specialize in supplying premium quality stainless steel grades including 202, 303, 304, 304L, 304H, 316, 316L, 316H, 316Ti, 310, 310s, 321, 321H, 317L, 347, and 904L. Our stainless steel products are available in various forms including pipes, tubes, sheets, plates, and bars.
                </p>
              </div>
              
              <div>
                <h3 className="text-base sm:text-lg lg:text-2xl font-semibold text-[#0d2b4e] dark:text-blue-400 mb-2 sm:mb-3 lg:mb-4">
                  Carbon Steel & Alloy Steel Stockist
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our extensive inventory includes carbon steel grades like EN1A, EN8, EN9, EN15, EN16, EN18, EN19, EN24, EN25, EN26, EN27, EN28, EN31, EN32, and alloy steel grades SA387 Gr.5, Gr.9, Gr.11, Gr.12, Gr.22, Gr.91, 16Mo3, C45, EN19, Abrex, Hardox.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div 
            className="text-center bg-gradient-to-r from-[#0d2b4e] to-[#1a3e72] rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-12 text-white shadow-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Contact Us for Best Price & Quick Delivery
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 opacity-90">
              Get instant quotes for all grades of Stainless Steel, Alloy Steel, Carbon Steel & Mild Steel products
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link href="/contact">
                <Button 
                  className="min-h-[44px] bg-[#f39c12] hover:bg-[#e97e07] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl text-sm sm:text-base lg:text-lg transition-all duration-300 hover:scale-105 shadow-lg"
                  data-testid="button-contact-best-price"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Contact Us for Best Price
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                </Button>
              </Link>
              
              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="min-h-[44px] border-2 border-white text-white hover:bg-white hover:text-[#0d2b4e] font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg sm:rounded-xl text-sm sm:text-base lg:text-lg transition-all duration-300"
                  data-testid="button-get-quote"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Get Instant Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}