import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function TitaniumRoundBars() {
  const titaniumGrades = [
    "Grade 1 (Pure Titanium)",
    "Grade 2 (Pure Titanium)",
    "Grade 3 (Pure Titanium)",
    "Grade 5 (Ti-6Al-4V)",
    "Grade 7 (Ti-0.2Pd)",
    "Grade 12 (Ti-0.3Mo-0.8Ni)"
  ];

  const specifications = [
    "ASTM B348 - Standard Specification for Titanium and Titanium Alloy Bars and Billets",
    "ASTM F136 - Standard Specification for Wrought Titanium-6Aluminum-4Vanadium ELI Alloy",
    "ASTM F67 - Standard Specification for Unalloyed Titanium for Surgical Implant Applications",
    "AMS 4928, AMS 4911 specifications",
    "Size Range: 6mm to 350mm diameter",
    "Length: Up to 6000mm",
    "Condition: Annealed"
  ];

  const applications = [
    "Aerospace Components",
    "Medical Implants",
    "Chemical Processing",
    "Marine Applications",
    "Automotive Industry",
    "Power Generation",
    "Oil and Gas Industry",
    "Sports Equipment",
    "Architectural Applications",
    "Defense Applications"
  ];

  const gradeProperties = [
    {
      grade: "Grade 1",
      purity: "99.5%",
      strength: "240 MPa",
      elongation: "24%",
      applications: "Chemical processing, marine"
    },
    {
      grade: "Grade 2",
      purity: "99.2%",
      strength: "345 MPa",
      elongation: "20%",
      applications: "General industrial, aerospace"
    },
    {
      grade: "Grade 5",
      purity: "89%",
      strength: "895 MPa",
      elongation: "10%",
      applications: "Aerospace, automotive, medical"
    }
  ];

  const chemicalCompositionGr5 = [
    { element: "Titanium (Ti)", range: "Balance" },
    { element: "Aluminum (Al)", range: "5.5 - 6.75" },
    { element: "Vanadium (V)", range: "3.5 - 4.5" },
    { element: "Iron (Fe)", range: "0.30 max" },
    { element: "Oxygen (O)", range: "0.20 max" },
    { element: "Carbon (C)", range: "0.08 max" },
    { element: "Nitrogen (N)", range: "0.05 max" },
    { element: "Hydrogen (H)", range: "0.015 max" }
  ];

  const advantages = [
    {
      title: "High Strength-to-Weight Ratio",
      description: "45% lighter than steel with comparable strength",
      icon: "⚖️"
    },
    {
      title: "Excellent Corrosion Resistance",
      description: "Superior resistance to seawater, acids, and chlorides",
      icon: "🛡️"
    },
    {
      title: "Biocompatibility",
      description: "Non-toxic and compatible with human tissue",
      icon: "🏥"
    },
    {
      title: "Temperature Resistance",
      description: "Maintains properties from cryogenic to 600°C",
      icon: "🌡️"
    }
  ];

  return (
    <>
      <ProductSEO
        title="Titanium Round Bars - Grade 1, 2, 5 (Ti-6Al-4V) | Aerospace & Medical Grade | Mamta Steel Traders"
        description="Premium titanium round bars for aerospace, medical, and industrial applications. Grades 1, 2, 5 (Ti-6Al-4V) available. High strength-to-weight ratio, excellent corrosion resistance. ASTM B348, F136, F67 compliant."
        keywords="titanium round bars, titanium grade 2, titanium grade 5, Ti-6Al-4V, aerospace titanium, medical grade titanium, ASTM B348, ASTM F136, titanium bars, lightweight alloy"
        canonicalUrl="/product/round-bars/titanium"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-titanium-title">
                Titanium Round Bars
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200" data-testid="text-titanium-subtitle">
                Lightweight, High-Strength Solutions for Critical Applications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-contact-titanium">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </Link>
                <a href="tel:+919819322576" className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-call-titanium">
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
              <span className="text-navy-primary dark:text-gold-primary font-medium" data-testid="breadcrumb-current">Titanium</span>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Overview Section */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-overview-title">
                  Titanium Round Bars Overview
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6" data-testid="text-overview-description">
                  Titanium is a premium metal known for its exceptional strength-to-weight ratio, outstanding corrosion resistance, and biocompatibility. Our titanium round bars are ideal for aerospace, medical, chemical processing, and high-performance applications where weight reduction and reliability are critical.
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
                  src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&h=400&fit=crop&crop=center"
                  alt="Lightweight titanium round bars for aerospace and medical applications"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>

            {/* Available Grades */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-grades-title">
                Available Titanium Grades
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {titaniumGrades.map((grade, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-600 to-gray-800 text-white p-4 rounded-lg text-center">
                    <span className="font-semibold" data-testid={`grade-${index}`}>{grade}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Grade Properties Comparison */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-properties-title">
                Grade Properties Comparison
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200 dark:border-gray-600">
                      <th className="text-left py-3 px-4 font-semibold text-slate-800 dark:text-gray-100">Grade</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-800 dark:text-gray-100">Purity</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-800 dark:text-gray-100">Tensile Strength</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-800 dark:text-gray-100">Elongation</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-800 dark:text-gray-100">Typical Applications</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gradeProperties.map((prop, index) => (
                      <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300 font-medium">{prop.grade}</td>
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{prop.purity}</td>
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{prop.strength}</td>
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{prop.elongation}</td>
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300 text-sm">{prop.applications}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Grade 5 Chemical Composition */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-chemical-composition-title">
                Grade 5 (Ti-6Al-4V) Chemical Composition (%)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {chemicalCompositionGr5.map((comp, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="font-medium text-slate-800 dark:text-gray-100">{comp.element}</span>
                    <span className="text-navy-primary dark:text-gold-primary font-semibold">{comp.range}</span>
                  </div>
                ))}
              </div>
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
            <div className="bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl p-8 text-white mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4" data-testid="text-performance-title">Why Choose Titanium?</h3>
                <p className="text-lg">Unmatched performance characteristics for demanding applications</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-gold-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">45% Lighter</h4>
                  <p className="text-sm text-gray-200">Than steel with comparable strength</p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-gold-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Corrosion Proof</h4>
                  <p className="text-sm text-gray-200">Excellent resistance to seawater and chemicals</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-gold-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Biocompatible</h4>
                  <p className="text-sm text-gray-200">Safe for medical implants and devices</p>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-gold-primary mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Aerospace Proven</h4>
                  <p className="text-sm text-gray-200">Used in critical aircraft components</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4" data-testid="text-contact-title">
                Need Titanium Solutions?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Contact our titanium specialists for grade selection and technical support
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-navy-primary hover:bg-navy-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-get-quote">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Technical Quote
                </Link>
                <a href="tel:+919819322576" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-call-expert">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Titanium Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}