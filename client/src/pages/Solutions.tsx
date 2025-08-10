import SEOHead from "@/components/SEOHead";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { 
  Factory, 
  Building, 
  Wrench, 
  Truck, 
  ArrowRight, 
  CheckCircle, 
  Home,
  ChevronRight,
  Phone,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";

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
      staggerChildren: 0.15,
      delayChildren: 0.2
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const solutions = [
  {
    icon: Factory,
    title: "Industrial Manufacturing",
    description: "Comprehensive steel solutions for manufacturing industries including automotive, aerospace, and heavy machinery.",
    features: ["Custom fabrication", "Quality assurance", "Timely delivery", "Technical support"],
    gradient: "from-[#1a3e72] to-[#2563eb]"
  },
  {
    icon: Building,
    title: "Construction & Infrastructure", 
    description: "High-grade structural steel products for construction projects, bridges, and infrastructure development.",
    features: ["Structural steel", "Reinforcement bars", "Custom cutting", "Site delivery"],
    gradient: "from-[#0d2b4e] to-[#1a3e72]"
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description: "Tailored steel solutions designed to meet specific project requirements and industry standards.",
    features: ["Design consultation", "Custom specifications", "Prototype development", "Quality testing"],
    gradient: "from-[#f39c12] to-[#e97e07]"
  },
  {
    icon: Truck,
    title: "Supply Chain Management",
    description: "End-to-end supply chain solutions ensuring efficient procurement, storage, and distribution.",
    features: ["Inventory management", "Just-in-time delivery", "Logistics support", "Order tracking"],
    gradient: "from-[#2563eb] to-[#3b82f6]"
  }
];

const processSteps = [
  { step: "01", title: "Consultation", description: "Understanding your requirements" },
  { step: "02", title: "Planning", description: "Designing optimal solutions" },
  { step: "03", title: "Execution", description: "Manufacturing and quality control" },
  { step: "04", title: "Delivery", description: "Timely delivery and support" }
];

export default function Solutions() {
  return (
    <>
      <SEOHead
        title="Steel Solutions | Mamta Steel Traders - Industrial Steel & Custom Fabrication"
        description="Comprehensive steel solutions for industrial manufacturing, construction, custom steel fabrication, and supply chain management. Expert consultation and structural steel products for diverse industry requirements."
        keywords="steel solutions, industrial steel, structural steel, custom steel fabrication, supply chain steel, steel manufacturing, steel supplier, construction steel, manufacturing steel, steel consultation"
      />
      
      <main className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
        {/* Breadcrumb Navigation */}
        <section className="bg-white border-b border-gray-100">
          <div className="container mx-auto px-6 lg:px-12 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="flex items-center text-gray-500 hover:text-[#f39c12] transition-colors duration-200">
                <Home className="w-4 h-4 mr-1" />
                Home
              </Link>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="text-[#0d2b4e] font-medium">Steel Solutions</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d2b4e]/10 to-[#f39c12]/10"></div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle, #1a3e72 1px, transparent 1px)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
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
                Steel Solutions
              </motion.h1>
              
              <motion.div 
                className="w-32 h-1 bg-gradient-to-r from-[#0d2b4e] to-[#f39c12] mx-auto mb-8 rounded-full"
                variants={fadeInUp}
              ></motion.div>
              
              <motion.p 
                className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed"
                variants={fadeInUp}
              >
                Comprehensive steel solutions tailored to meet diverse industry requirements with expert consultation and support.
              </motion.p>
            </motion.header>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {solutions.map((solution, index) => (
                <motion.article 
                  key={index}
                  variants={index % 2 === 0 ? slideInLeft : slideInRight}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-[#f39c12]/30 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#f39c12]/5 to-transparent rounded-bl-full"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-[#0d2b4e]/5 to-transparent rounded-tr-full"></div>
                    
                    <div className="relative z-10">
                      <header className="flex items-start mb-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${solution.gradient} rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300`}>
                          <solution.icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl font-bold text-[#0d2b4e] group-hover:text-[#f39c12] transition-colors duration-300">
                            {solution.title}
                          </h2>
                        </div>
                      </header>
                      
                      <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                        {solution.description}
                      </p>
                      
                      <ul className="space-y-3 mb-8">
                        {solution.features.map((feature, featureIndex) => (
                          <li 
                            key={featureIndex} 
                            className="flex items-center text-gray-700"
                          >
                            <CheckCircle className="w-5 h-5 text-[#f39c12] mr-3 flex-shrink-0" />
                            <span className="font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Link href="/contact">
                        <Button 
                          className="w-full bg-gradient-to-r from-[#0d2b4e] to-[#1a3e72] hover:from-[#f39c12] hover:to-[#e97e07] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 group-hover:scale-105"
                        >
                          <span className="flex items-center justify-center">
                            Get Consultation
                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </span>
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
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

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-[#0d2b4e] to-[#1a3e72] text-white relative overflow-hidden">
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
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Solution Process</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                A systematic approach to delivering exceptional steel solutions
              </p>
            </motion.header>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {processSteps.map((process, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  variants={scaleIn}
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#f39c12] to-[#e97e07] rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-2xl">{process.step}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-[#f39c12] to-transparent"></div>
                    )}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-[#f39c12] transition-colors duration-300">
                    {process.title}
                  </h3>
                  <p className="text-blue-100 leading-relaxed">
                    {process.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 lg:px-12">
            <motion.div 
              className="bg-gradient-to-br from-white to-blue-50 rounded-3xl p-12 shadow-xl border border-gray-100 relative overflow-hidden"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-[#f39c12]/10 to-transparent rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-[#0d2b4e]/10 to-transparent rounded-tl-full"></div>
              
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0d2b4e] mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  Contact our experts today for a consultation on your steel solution requirements. 
                  We're here to help you find the perfect steel solutions for your project.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-gradient-to-r from-[#0d2b4e] to-[#1a3e72] hover:from-[#f39c12] hover:to-[#e97e07] text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105">
                      <MessageSquare className="w-5 h-5 mr-2" />
                      Get Free Consultation
                    </Button>
                  </Link>
                  
                  <Link href="/contact">
                    <Button variant="outline" className="border-2 border-[#0d2b4e] text-[#0d2b4e] hover:bg-[#0d2b4e] hover:text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-300">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
