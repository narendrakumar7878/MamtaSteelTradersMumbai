import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function Alloy20RoundBars() {
  const specifications = [
    "ASTM B472 UNS 8020 (Alloy 20 / 20 CB 3)",
    "ASME SA-472 Grade Alloy 20",
    "Size Range: 6mm to 350mm diameter",
    "Length: Up to 6000mm",
    "Condition: Solution Annealed",
    "Finish: Black, Pickled, Polished"
  ];

  const applications = [
    "Chemical and Petrochemical Processing",
    "Sulfuric Acid Production",
    "Pharmaceutical Equipment",
    "Food Processing Industries",
    "Heat Exchangers",
    "Pressure Vessels",
    "Chemical Storage Tanks",
    "Pollution Control Equipment"
  ];

  const chemicalComposition = [
    { element: "Carbon (C)", range: "0.07 max" },
    { element: "Manganese (Mn)", range: "2.00 max" },
    { element: "Silicon (Si)", range: "1.00 max" },
    { element: "Phosphorus (P)", range: "0.045 max" },
    { element: "Sulfur (S)", range: "0.035 max" },
    { element: "Chromium (Cr)", range: "19.0 - 21.0" },
    { element: "Nickel (Ni)", range: "32.0 - 38.0" },
    { element: "Molybdenum (Mo)", range: "2.0 - 3.0" },
    { element: "Copper (Cu)", range: "3.0 - 4.0" },
    { element: "Niobium (Nb)", range: "8 x C min" }
  ];

  const mechanicalProperties = [
    { property: "Tensile Strength", value: "550 MPa (min)" },
    { property: "Yield Strength (0.2%)", value: "240 MPa (min)" },
    { property: "Elongation", value: "30% (min)" },
    { property: "Hardness", value: "217 HB (max)" },
    { property: "Density", value: "8.08 g/cm³" }
  ];

  return (
    <>
      <ProductSEO
        title="Alloy 20 Round Bars - UNS N08020 | Chemical Resistant Round Bars | Mamta Steel Traders"
        description="Premium Alloy 20 (UNS N08020) round bars for chemical processing. Excellent corrosion resistance to sulfuric acid and chlorides. ASTM B472 compliant with complete chemical composition and mechanical properties."
        keywords="alloy 20 round bars, UNS N08020, ASTM B472, chemical resistant round bars, alloy 20 bars, sulfuric acid resistant, corrosion resistant alloy, chemical processing equipment"
        canonicalUrl="/product/round-bars/alloy-20"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-heading font-bold mb-6" data-testid="text-alloy20-title">
                Alloy 20 Round Bars
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200" data-testid="text-alloy20-subtitle">
                Superior Chemical Resistance for Demanding Applications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-contact-alloy20">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </Link>
                <a href="tel:+919819322576" className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-call-alloy20">
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
              <span className="text-navy-primary dark:text-gold-primary font-medium" data-testid="breadcrumb-current">Alloy 20</span>
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
                  Alloy 20 Round Bars Overview
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6" data-testid="text-overview-description">
                  Alloy 20 (UNS N08020) is a nickel-chromium-molybdenum stainless steel designed for maximum resistance to acid corrosion, particularly sulfuric acid. Its unique chemical composition provides exceptional performance in severe chemical processing environments.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-gray-100">Superior Corrosion Resistance</h3>
                      <p className="text-gray-600 dark:text-gray-300">Excellent resistance to sulfuric acid and chloride environments</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-6 h-6 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-gray-100">Chemical Processing</h3>
                      <p className="text-gray-600 dark:text-gray-300">Ideal for chemical and petrochemical processing equipment</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="w-6 h-6 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-slate-800 dark:text-gray-100">High Temperature Performance</h3>
                      <p className="text-gray-600 dark:text-gray-300">Maintains strength and corrosion resistance at elevated temperatures</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center"
                  alt="High-quality Alloy 20 round bars for chemical processing applications"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
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

            {/* Chemical Composition */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-chemical-composition-title">
                Chemical Composition (%)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-200 dark:border-gray-600">
                      <th className="text-left py-3 px-4 font-semibold text-slate-800 dark:text-gray-100">Element</th>
                      <th className="text-left py-3 px-4 font-semibold text-slate-800 dark:text-gray-100">Range (%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemicalComposition.map((comp, index) => (
                      <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{comp.element}</td>
                        <td className="py-3 px-4 text-gray-700 dark:text-gray-300">{comp.range}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mechanical Properties */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-mechanical-properties-title">
                Mechanical Properties
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {mechanicalProperties.map((prop, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <span className="font-medium text-slate-800 dark:text-gray-100">{prop.property}</span>
                    <span className="text-navy-primary dark:text-gold-primary font-semibold">{prop.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Assurance */}
            <div className="bg-gradient-to-r from-navy-primary to-navy-secondary rounded-xl p-8 text-white mb-16">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4" data-testid="text-quality-title">Quality Assurance</h3>
                <p className="text-lg mb-6">All Alloy 20 round bars come with complete documentation and testing</p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <CheckCircle className="w-12 h-12 text-gold-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Material Test Certificate</h4>
                    <p className="text-sm text-gray-200">Complete chemical and mechanical analysis</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-gold-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">Third Party Inspection</h4>
                    <p className="text-sm text-gray-200">Independent quality verification available</p>
                  </div>
                  <div className="text-center">
                    <Award className="w-12 h-12 text-gold-primary mx-auto mb-3" />
                    <h4 className="font-semibold mb-2">ASTM Compliance</h4>
                    <p className="text-sm text-gray-200">Certified to ASTM B472 standards</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4" data-testid="text-contact-title">
                Need Custom Alloy 20 Solutions?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Contact our technical experts for custom specifications and technical support
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-navy-primary hover:bg-navy-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-get-quote">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Technical Quote
                </Link>
                <a href="tel:+919819322576" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-call-expert">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Material Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}