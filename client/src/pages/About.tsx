import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { 
  Award, 
  Users, 
  Factory, 
  Globe, 
  CheckCircle, 
  Target, 
  Eye, 
  Heart,
  Cog,
  Shield,
  TrendingUp,
  Zap
} from "lucide-react";

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
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

export default function About() {
  return (
    <>
      <SEOHead
        title="About Industry - Mamta Steel Traders | Leading Steel Manufacturer & Supplier"
        description="Mamta Steel Traders - Largest Manufacturer, Stockiest, Supplier, Importer and Exporter of Stainless Steel, Carbon Steel, Alloy Steel. Over 3 decades of experience in Mumbai, Maharashtra."
        keywords="about Mamta Steel Traders, steel manufacturer Mumbai, stainless steel supplier, carbon steel, alloy steel, steel pipes, steel plates, steel flanges"
      />
      
      <main itemScope itemType="https://schema.org/AboutPage" className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b4e]/5 to-[#f39c12]/5"></div>
          <div className="container mx-auto px-6 lg:px-12 relative">
            <motion.header 
              className="text-center mb-16"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-[#0d2b4e] to-[#f39c12] bg-clip-text text-transparent mb-8"
                variants={fadeInUp}
              >
                About Industry
              </motion.h1>
              <motion.div 
                className="w-32 h-1 bg-gradient-to-r from-[#0d2b4e] to-[#f39c12] mx-auto mb-8 rounded-full"
                variants={fadeInUp}
              ></motion.div>
            </motion.header>
          </div>
        </section>

        {/* Company Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.article 
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainer}
            >
              <motion.div variants={slideInLeft}>
                <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#f39c12]/20 to-transparent rounded-bl-full"></div>
                  <p className="text-lg leading-relaxed text-gray-700 relative z-10">
                    <span className="text-[#0d2b4e] font-semibold">Mamta Steel Traders</span> is one of the <strong>Largest Manufacturer, Stockiest, Supplier, Importer and Exporter</strong> of Stainless Steel, Carbon Steel, Alloy Steel, Mild Steel, High Nickel Alloys, Special Alloys, Aluminium Alloys, Copper Nickel, Titanium Alloys, Duplex & Super Duplex, Tantalum, Abrasion Resistant Steel, Hadfield Manganese Steel, Corten Steel, High Tensile, Quenched & Tempered Steel, Armour Steel etc in Form & Shapes of <em>Pipes, Tubes, Plates, Round Bars, Flanges and Fittings</em>. We also deal in IBR Products.
                  </p>
                  <div className="mt-8 p-6 bg-gradient-to-r from-[#0d2b4e]/10 to-[#f39c12]/10 rounded-xl">
                    <p className="text-gray-700 leading-relaxed">
                      Over <strong className="text-[#f39c12]">3 decades of experience</strong> and our commitment towards customer delight and providing top-notch quality of products, we are a well-recognized choice for the majority of the businesses and companies for their Industrial solutions.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={slideInRight}>
                <div className="relative">
                  <div className="bg-gradient-to-br from-[#0d2b4e] to-[#2563eb] rounded-2xl p-8 lg:p-12 text-white shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f39c12]/20 to-transparent rounded-2xl"></div>
                    <div className="relative z-10">
                      <Factory className="w-16 h-16 text-[#f39c12] mb-6" />
                      <h2 className="text-3xl font-bold mb-6">Our Industrial Excellence</h2>
                      <p className="text-blue-100 leading-relaxed mb-6">
                        Since Mamta Steel Traders was set up with a vision of excelling in the field of Manufacturing, Supplying and Fulfilling the demand of the dynamic metal market and the customers involved.
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[#f39c12]">30+</div>
                          <div className="text-sm text-blue-200">Years Experience</div>
                        </div>
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[#f39c12]">1000+</div>
                          <div className="text-sm text-blue-200">Happy Clients</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.article>
          </div>
        </section>

        {/* Animated Divider */}
        <div className="py-8">
          <motion.div 
            className="w-full h-1 bg-gradient-to-r from-transparent via-[#f39c12] to-transparent max-w-4xl mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          ></motion.div>
        </div>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-white to-slate-50">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.header 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#0d2b4e] mb-6">Why Choose Us</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what makes us the preferred choice for industrial steel solutions
              </p>
            </motion.header>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {[
                { icon: Factory, title: "State of the Art Manufacturing Facilities", description: "Modern equipment and cutting-edge technology" },
                { icon: Users, title: "Technically Qualified Engineers & Professionals", description: "Expert team with decades of experience" },
                { icon: TrendingUp, title: "Market Experience", description: "Deep understanding of industry requirements" },
                { icon: Shield, title: "International Standards", description: "Products in confirmation with global quality standards" },
                { icon: Cog, title: "Sophisticated Machinery", description: "Perfect finish with advanced manufacturing tools" },
                { icon: Globe, title: "Strong Market Networks", description: "Extensive distribution channels across regions" },
                { icon: Zap, title: "Cost-effective Solutions", description: "Competitive pricing without compromising quality" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group"
                >
                  <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#f39c12]/10 to-transparent rounded-bl-full"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-[#0d2b4e] to-[#2563eb] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0d2b4e] mb-4 group-hover:text-[#f39c12] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Values, Vision, Mission Section */}
        <section className="py-20 bg-gradient-to-br from-[#0d2b4e] to-[#1e40af] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          <div className="container mx-auto px-6 lg:px-12 relative">
            <motion.header 
              className="text-center mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Foundation</h2>
              <p className="text-xl text-blue-200 max-w-3xl mx-auto">
                Built on strong values, driven by clear vision, guided by our mission
              </p>
            </motion.header>

            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.article variants={fadeInUp} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 border border-white/20 group-hover:border-[#f39c12]/50">
                  <Heart className="w-16 h-16 text-[#f39c12] mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#f39c12] transition-colors duration-300">Our Values</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Integrity, Quality, Innovation, and Customer Satisfaction form the cornerstone of everything we do. We believe in building lasting relationships through trust and excellence.
                  </p>
                </div>
              </motion.article>

              <motion.article variants={fadeInUp} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 border border-white/20 group-hover:border-[#f39c12]/50">
                  <Eye className="w-16 h-16 text-[#f39c12] mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#f39c12] transition-colors duration-300">Our Vision</h3>
                  <p className="text-blue-100 leading-relaxed">
                    To be the global leader in steel manufacturing and supply, setting industry standards for quality, innovation, and sustainable practices while empowering industries worldwide.
                  </p>
                </div>
              </motion.article>

              <motion.article variants={fadeInUp} className="group">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 border border-white/20 group-hover:border-[#f39c12]/50">
                  <Target className="w-16 h-16 text-[#f39c12] mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-[#f39c12] transition-colors duration-300">Our Mission</h3>
                  <p className="text-blue-100 leading-relaxed">
                    To deliver exceptional steel solutions through cutting-edge technology, superior quality products, and outstanding customer service while maintaining ethical business practices.
                  </p>
                </div>
              </motion.article>
            </motion.div>
          </div>
        </section>

        {/* Animated Divider */}
        <div className="py-8 bg-white">
          <motion.div 
            className="w-full h-1 bg-gradient-to-r from-transparent via-[#0d2b4e] to-transparent max-w-4xl mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          ></motion.div>
        </div>

        {/* Closing Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div 
              className="max-w-5xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div 
                variants={fadeInUp}
                className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-12 shadow-xl border border-gray-100 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#f39c12]/10 to-transparent rounded-br-full"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#0d2b4e]/10 to-transparent rounded-tl-full"></div>
                
                <div className="relative z-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b4e] mb-8 text-center">
                    Your Trust, Our Commitment
                  </h2>
                  
                  <div className="space-y-6 text-lg leading-relaxed text-gray-700">
                    <p>
                      <strong className="text-[#0d2b4e]">Our Clients are our most valuable assets</strong> and for that we use our skilled people and latest technology and equipments to fulfill their needs.
                    </p>
                    
                    <p>
                      We help customers develop their energy resources; bringing world class capability and delivering it locally. We promote commercial arrangements that are aligned to our customers' needs, allowing us to deliver more value to the customer while increasing the returns from our most precious asset – our people.
                    </p>
                    
                    <p>
                      Provide technically sound solutions and create additional value in mutual interest with our customers resulting in being a <em className="text-[#f39c12] font-semibold">preferred Stockists & Suppliers</em> within the Stockists & Suppliers industry.
                    </p>
                    
                    <div className="bg-gradient-to-r from-[#0d2b4e]/5 to-[#f39c12]/5 rounded-xl p-6 border border-[#f39c12]/20">
                      <p className="text-center font-medium text-[#0d2b4e]">
                        We would appreciate to get your esteemed enquires and look forward to the pleasure receiving your valuable response.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Terms and Conditions Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div 
              className="max-w-5xl mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b4e] mb-8 text-center">
                  Terms and Conditions - Steel Supply & Material Delivery Policy
                </h2>
                
                <div className="bg-white rounded-lg p-8 shadow-lg">
                  <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed text-lg">
                    <li>
                      <strong>Credit Policy:</strong> Goods will not be provided on credit to maintain business efficiency and quality steel supplier standards.
                    </li>
                    
                    <li>
                      <strong>Payment Terms:</strong> 50% payment must be made in advance, and the remaining 50% must be paid on the day of material delivery to ensure smooth operations.
                    </li>
                    
                    <li>
                      <strong>Material Return Policy:</strong> No returns will be accepted after 5 days from the date the material is delivered to you to maintain inventory management standards.
                    </li>
                    
                    <li>
                      <strong>Extended Credit Policy:</strong> If our business relationship reaches a turnover of ₹10 crore and mutual trust remains strong, we may provide a 7-day credit period. If the relationship continues positively, the credit period can be extended further based on business partnership strength.
                    </li>
                    
                    <li>
                      <strong>Material Test Report Policy:</strong> If you require a material test report for quality assurance, please inform us along with your Purchase Order (PO). Test reports will not be provided after material delivery to ensure proper documentation process.
                    </li>
                    
                    <li>
                      <strong>Delivery & Payment Schedule:</strong> Timely delivery will be ensured from our side, and timely payment is required from your end to maintain business continuity and quality steel supplier relationship.
                    </li>
                    
                    <li>
                      <strong>Material Delivery Timeline:</strong> Delivery time will depend on your location, but from our side, the material will be prepared as soon as possible after receiving your Purchase Order to ensure customer satisfaction.
                    </li>
                    
                    <li>
                      <strong>Customer Support:</strong> For any queries regarding steel products, material delivery, payment terms, or quality steel supplier services, you can contact us via call or message for immediate assistance.
                    </li>
                    
                    <li>
                      <strong>Business Operations:</strong> All these terms are in place for the strength and smooth operation of our business to maintain our position as a reliable quality steel supplier in Mumbai, India.
                    </li>
                    
                    <li>
                      <strong>Quality Commitment:</strong> Our aim is to deliver the best quality material on time, and these terms and conditions are designed to strengthen our business relationship and ensure customer satisfaction with our steel supply services.
                    </li>
                  </ul>
                  
                  <div className="mt-8 p-6 bg-gradient-to-r from-[#0d2b4e]/5 to-[#f39c12]/5 rounded-xl border border-[#f39c12]/20">
                    <p className="text-center font-medium text-[#0d2b4e] text-lg">
                      <strong>Contact Us:</strong> For any clarifications regarding these terms and conditions, material delivery policy, or quality steel supplier services, please reach out to Mamta Steel Traders - Your trusted steel partner in Mumbai, India.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
