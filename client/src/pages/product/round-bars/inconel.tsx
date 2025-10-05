import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function InconelRoundBars() {
  const inconelGrades = [
    "Inconel 600 (UNS N06600)",
    "Inconel 601 (UNS N06601)",
    "Inconel 625 (UNS N06625)",
    "Inconel 718 (UNS N07718)",
    "Inconel 825 (UNS N08825)",
    "Inconel X-750 (UNS N07750)"
  ];

  const specifications = [
    "ASTM B166 - Standard Specification for Nickel-Chromium-Iron Alloys",
    "ASTM B564 - Standard Specification for Nickel Alloy Forgings",
    "ASTM B637 - Standard Specification for Precipitation-Hardening Nickel Alloy Bars",
    "AMS 5662, AMS 5665, AMS 5837 specifications",
    "Size Range: 6mm to 350mm diameter",
    "Length: Up to 6000mm",
    "Condition: Solution Annealed, Aged"
  ];

  const applications = [
    "Gas Turbine Components",
    "Jet Engine Parts",
    "Nuclear Reactors",
    "Heat Treatment Equipment",
    "Chemical Processing",
    "Aerospace Industry",
    "Power Generation",
    "Oil and Gas Industry",
    "Marine Applications",
    "High-Temperature Fasteners"
  ];

  const properties = [
    {
      grade: "Inconel 600",
      tempRange: "Up to 1093°C",
      strength: "Good",
      corrosion: "Excellent",
      oxidation: "Excellent"
    },
    {
      grade: "Inconel 625",
      tempRange: "Up to 982°C",
      strength: "Very High",
      corrosion: "Excellent",
      oxidation: "Excellent"
    },
    {
      grade: "Inconel 718",
      tempRange: "Up to 700°C",
      strength: "Very High",
      corrosion: "Good",
      oxidation: "Good"
    }
  ];

  const chemicalComposition625 = [
    { element: "Nickel (Ni)", range: "58.0 min" },
    { element: "Chromium (Cr)", range: "20.0-23.0" },
    { element: "Molybdenum (Mo)", range: "8.0-10.0" },
    { element: "Niobium (Nb)", range: "3.15-4.15" },
    { element: "Iron (Fe)", range: "5.0 max" },
    { element: "Titanium (Ti)", range: "0.40 max" },
    { element: "Aluminum (Al)", range: "0.40 max" },
    { element: "Carbon (C)", range: "0.10 max" }
  ];

  return (
    <>
      <ProductSEO
        title="Inconel Round Bars - 600, 625, 718, X-750 | High Temperature Nickel Alloy Bars | Mamta Steel Traders"
        description="Premium Inconel round bars for high-temperature applications. Grades: Inconel 600, 625, 718, X-750. Excellent oxidation resistance, high strength. ASTM B166, B564, B637 compliant for aerospace, gas turbine, and nuclear applications."
        keywords="inconel round bars, inconel 600, inconel 625, inconel 718, inconel X-750, high temperature alloy, nickel alloy bars, aerospace materials, gas turbine components, ASTM B166"
        canonicalUrl="/product/round-bars/inconel"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-heading font-bold mb-6" data-testid="text-inconel-title">
                Inconel Round Bars
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200" data-testid="text-inconel-subtitle">
                High-Temperature Performance for Critical Applications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-contact-inconel">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </Link>
                <a href="tel:+919819322576" className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-call-inconel">
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
              <span className="text-navy-primary dark:text-gold-primary font-medium" data-testid="breadcrumb-current">Inconel</span>
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
                  Inconel Round Bars Overview
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6" data-testid="text-overview-description">
                  Inconel is a family of austenitic nickel-chromium-based superalloys designed for extreme environments. These alloys excel in high-temperature applications, offering exceptional oxidation resistance, high strength at elevated temperatures, and excellent corrosion resistance.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <TrendingUp className="w-6 h-6 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-gray-100">High-Temperature Strength</h3>
                      <p className="text-gray-600 dark:text-gray-300">Maintains mechanical properties at temperatures up to 1093°C</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-gray-100">Oxidation Resistance</h3>
                      <p className="text-gray-600 dark:text-gray-300">Exceptional resistance to oxidation and scaling</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="w-6 h-6 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-gray-100">Aerospace Grade</h3>
                      <p className="text-gray-600 dark:text-gray-300">Widely used in aerospace and gas turbine applications</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&h=400&fit=crop&crop=center"
                  alt="High-temperature Inconel round bars for aerospace and industrial applications"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            </div>

            {/* Available Grades */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-grades-title">
                Available Inconel Grades
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {inconelGrades.map((grade, index) => (
                  <div key={index} className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-4 rounded-lg text-center">
                    <span className="font-semibold" data-testid={`grade-${index}`}>{grade}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Properties Comparison */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-properties-title">
                Properties Comparison
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200 dark:border-gray-600">
                      <th className="text-left py-3 px-4 font-semibold text-slate-800 dark:text-gray-100">Grade</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-800 dark:text-gray-100">Service Temp</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-800 dark:text-gray-100">Strength</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-800 dark:text-gray-100">Corrosion</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-800 dark:text-gray-100">Oxidation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {properties.map((prop, index) => (
                      <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300 font-medium">{prop.grade}</td>
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{prop.tempRange}</td>
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{prop.strength}</td>
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{prop.corrosion}</td>
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{prop.oxidation}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Inconel 625 Chemical Composition */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-chemical-composition-title">
                Inconel 625 Chemical Composition (%)
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {chemicalComposition625.map((comp, index) => (
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

            {/* Performance Highlights */}
            <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-8 text-white mb-16">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4" data-testid="text-performance-title">Why Choose Inconel?</h3>
                <p className="text-lg">Unmatched performance in extreme environments</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <TrendingUp className="w-12 h-12 text-yellow-300 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">1093°C Service</h4>
                  <p className="text-sm text-gray-200">Maintains strength at extreme temperatures</p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 text-yellow-300 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Oxidation Resistant</h4>
                  <p className="text-sm text-gray-200">Excellent resistance to scaling and oxidation</p>
                </div>
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-yellow-300 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Aerospace Proven</h4>
                  <p className="text-sm text-gray-200">Decades of successful aerospace use</p>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-yellow-300 mx-auto mb-3" />
                  <h4 className="font-semibold mb-2">Premium Quality</h4>
                  <p className="text-sm text-gray-200">AMS and ASTM certified materials</p>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4" data-testid="text-contact-title">
                Need High-Temperature Alloy Solutions?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Contact our aerospace materials experts for grade selection and technical support
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-navy-primary hover:bg-navy-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-get-quote">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Technical Quote
                </Link>
                <a href="tel:+919819322576" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-call-expert">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Aerospace Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}