import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, CheckCircle, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function BronzeRoundBars() {
  const specifications = [
    "ASTM B124 - Standard Specification for Copper and Copper Alloy Forging Rod, Bar, and Shapes",
    "ASTM B150 - Standard Specification for Aluminum Bronze Rod, Bar, and Shapes", 
    "Size Range: 6mm to 300mm diameter",
    "Length: Up to 6000mm",
    "Condition: Hard Drawn, Soft Annealed",
    "Finish: Mill Finish, Polished"
  ];

  const applications = [
    "Marine Hardware",
    "Pump Components", 
    "Valve Parts",
    "Bearings and Bushings",
    "Electrical Components",
    "Architectural Applications",
    "Fasteners",
    "Marine Propellers"
  ];

  return (
    <>
      <ProductSEO
        title="Bronze Round Bars - Marine Grade | ASTM B124, B150 | Mamta Steel Traders"
        description="High-quality bronze round bars for marine and industrial applications. Excellent corrosion resistance and machinability. ASTM B124, B150 compliant with various bronze alloys available."
        keywords="bronze round bars, marine bronze, ASTM B124, ASTM B150, bronze bars, marine hardware, pump components, valve parts"
        canonicalUrl="/product/round-bars/bronze"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white relative overflow-hidden">
          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Bronze Round Bars</h1>
              <p className="text-xl mb-8 text-gray-200">Traditional Bronze for Marine and Industrial Applications</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </Link>
                <a href="tel:+919967444008" className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Home</Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <Link href="/products" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Products</Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <Link href="/product/round-bars/round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary transition-colors">Round Bars</Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span className="text-navy-primary font-medium">Bronze</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 dark:text-gray-100 mb-6">Bronze Round Bars Overview</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  Bronze round bars offer excellent corrosion resistance, superior machinability, and attractive appearance. 
                  Ideal for marine applications, bronze provides reliable performance in harsh environments.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-gray-100">Corrosion Resistance</h3>
                      <p className="text-gray-600 dark:text-gray-300">Excellent resistance to saltwater and marine environments</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-blue-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-gray-100">Machinability</h3>
                      <p className="text-gray-600 dark:text-gray-300">Superior machining characteristics for complex parts</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="w-6 h-6 text-gold-primary mr-3 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-gray-100">Proven Performance</h3>
                      <p className="text-gray-600 dark:text-gray-300">Decades of reliable service in marine applications</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=center"
                  alt="High-quality bronze round bars for marine applications"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Specifications Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">Technical Specifications</h3>
                <div className="space-y-3">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-navy-primary rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700 dark:text-gray-300">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6">Key Applications</h3>
                <div className="space-y-3">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gold-primary rounded-full mr-3 mt-2"></div>
                      <span className="text-gray-700 dark:text-gray-300">{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4">Need Bronze Solutions?</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">Contact our experts for technical support</p>
              <Link href="/contact" className="bg-navy-primary hover:bg-navy-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center">
                <Mail className="w-5 h-5 mr-2" />
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}