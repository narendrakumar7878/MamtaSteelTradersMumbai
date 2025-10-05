import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function DuplexSuperDuplexRoundBars() {
  const duplexGrades = [
    "UNS S31803 (SAF 2205)",
    "UNS S32205 (SAF 2205)",
    "UNS S32750 (SAF 2507)",
    "UNS S32760 (Zeron 100)",
    "UNS S31254 (254 SMO)",
    "UNS S32550 (Ferralium 255)"
  ];

  const specifications = [
    "ASTM A276 - Standard Specification for Stainless Steel Bars and Shapes",
    "ASTM A479 - Standard Specification for Stainless Steel Bars for Boiler and Pressure Vessel Construction",
    "ASTM A564 - Standard Specification for Hot-Rolled and Cold-Finished Age-Hardening Stainless Steel Bars",
    "Size Range: 6mm to 350mm diameter",
    "Length: Up to 6000mm",
    "Condition: Solution Annealed"
  ];

  const applications = [
    "Oil and Gas Industry",
    "Chemical Processing Equipment",
    "Marine Applications",
    "Desalination Plants",
    "Pulp and Paper Industry",
    "Heat Exchangers",
    "Pressure Vessels",
    "Offshore Platforms",
    "Petrochemical Plants",
    "Power Generation"
  ];

  const advantages = [
    {
      title: "High Strength",
      description: "Approximately twice the yield strength of austenitic stainless steels",
      icon: "💪"
    },
    {
      title: "Excellent Corrosion Resistance",
      description: "Superior resistance to chloride stress corrosion cracking",
      icon: "🛡️"
    },
    {
      title: "Cost Effective",
      description: "Lower nickel content reduces material costs",
      icon: "💰"
    },
    {
      title: "Weldability",
      description: "Good weldability with proper procedures",
      icon: "🔧"
    }
  ];

  const gradeComparison = [
    {
      grade: "UNS S31803 (2205)",
      chromium: "21.0-23.0",
      nickel: "4.5-6.5",
      molybdenum: "2.5-3.5",
      nitrogen: "0.08-0.20",
      pitting: "32-38"
    },
    {
      grade: "UNS S32750 (2507)",
      chromium: "24.0-26.0",
      nickel: "6.0-8.0",
      molybdenum: "3.0-5.0",
      nitrogen: "0.24-0.32",
      pitting: ">40"
    },
    {
      grade: "UNS S32760 (Zeron 100)",
      chromium: "24.0-26.0",
      nickel: "6.0-8.0",
      molybdenum: "3.0-4.0",
      nitrogen: "0.20-0.30",
      pitting: ">40"
    }
  ];

  return (
    <>
      <ProductSEO
        title="Duplex & Super Duplex Round Bars - UNS S31803, S32205, S32750 | High Strength Stainless Steel | Mamta Steel Traders"
        description="Premium duplex and super duplex stainless steel round bars. High strength, excellent corrosion resistance. Grades: UNS S31803, S32205, S32750, S32760. ASTM A276, A479 compliant for oil, gas, and marine applications."
        keywords="duplex round bars, super duplex round bars, UNS S31803, UNS S32205, UNS S32750, SAF 2205, SAF 2507, Zeron 100, duplex stainless steel, marine grade stainless steel"
        canonicalUrl="/product/round-bars/duplex-super-duplex"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-heading font-bold mb-6" data-testid="text-duplex-title">
                Duplex & Super Duplex Round Bars
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200" data-testid="text-duplex-subtitle">
                High Strength, Superior Corrosion Resistance for Critical Applications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-contact-duplex">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </Link>
                <a href="tel:+919819322576" className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-call-duplex">
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
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary dark:hover:text-gold-primary transition-colors" data-testid="breadcrumb-home">
                Home
              </Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <Link href="/products" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary dark:hover:text-gold-primary transition-colors" data-testid="breadcrumb-products">
                Products
              </Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <Link href="/product/round-bars/round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary dark:hover:text-gold-primary transition-colors" data-testid="breadcrumb-round-bars">
                Round Bars
              </Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span className="text-navy-primary dark:text-gold-primary font-medium" data-testid="breadcrumb-current">Duplex & Super Duplex</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Overview Section */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-overview-title">
                  Duplex & Super Duplex Overview
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6" data-testid="text-overview-description">
                  Duplex and Super Duplex stainless steels combine the best properties of austenitic and ferritic grades. They offer high strength, excellent corrosion resistance, and good weldability, making them ideal for demanding applications in oil & gas, marine, and chemical processing industries.
                </p>
                <div className="space-y-4">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="flex items-start">
                      <div className="text-2xl mr-3 mt-0.5">{advantage.icon}</div>
                      <div>
                        <h3 className="font-semibold text-slate-800 dark:text-gray-100">{advantage.title}</h3>
                        <p className="text-gray-600 dark:text-gray-300">{advantage.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=center"
                  alt="High-strength duplex and super duplex stainless steel round bars"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>

            {/* Available Grades */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-grades-title">
                Available Grades
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {duplexGrades.map((grade, index) => (
                  <div key={index} className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white p-4 rounded-lg text-center">
                    <span className="font-semibold" data-testid={`grade-${index}`}>{grade}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Grade Comparison Table */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-comparison-title">
                Chemical Composition Comparison (%)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200 dark:border-gray-600">
                      <th className="text-left py-3 px-4 font-semibold text-slate-800 dark:text-gray-100">Grade</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-800 dark:text-gray-100">Cr</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-800 dark:text-gray-100">Ni</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-800 dark:text-gray-100">Mo</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-800 dark:text-gray-100">N</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-800 dark:text-gray-100">PREN</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gradeComparison.map((grade, index) => (
                      <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300 font-medium">{grade.grade}</td>
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{grade.chromium}</td>
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{grade.nickel}</td>
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{grade.molybdenum}</td>
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{grade.nitrogen}</td>
                        <td className="py-3 px-4 text-navy-primary dark:text-gold-primary font-semibold">{grade.pitting}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                PREN = Pitting Resistance Equivalent Number = %Cr + 3.3(%Mo) + 16(%N)
              </p>
            </div>

            {/* Specifications Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Technical Specifications */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-specifications-title">
                  Technical Specifications
                </h3>
                <div className="space-y-3">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-navy-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300" data-testid={`spec-${index}`}>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-applications-title">
                  Key Applications
                </h3>
                <div className="space-y-3">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gold-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300" data-testid={`application-${index}`}>{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Advantages */}
            <div className="bg-gradient-to-r from-navy-primary to-navy-secondary rounded-xl p-8 text-white mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4" data-testid="text-performance-title">Performance Advantages</h3>
                <p className="text-lg">Why choose Duplex & Super Duplex over conventional stainless steels?</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-gold-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">2x Strength</h4>
                  <p className="text-sm text-gray-200">Double the yield strength of 316L</p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-gold-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">SCC Resistance</h4>
                  <p className="text-sm text-gray-200">Excellent chloride stress corrosion cracking resistance</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-gold-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Cost Effective</h4>
                  <p className="text-sm text-gray-200">Lower nickel content reduces costs</p>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-gold-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Proven Track Record</h4>
                  <p className="text-sm text-gray-200">Decades of successful offshore use</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4" data-testid="text-contact-title">
                Need Duplex Steel Solutions?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Contact our metallurgical experts for grade selection and technical support
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-navy-primary hover:bg-navy-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-get-quote">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Technical Quote
                </Link>
                <a href="tel:+919819322576" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-call-expert">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Metallurgy Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}