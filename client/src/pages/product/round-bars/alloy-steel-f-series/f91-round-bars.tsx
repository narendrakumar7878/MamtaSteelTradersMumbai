import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, ShoppingCart, ArrowLeft, FileText, CheckCircle, Settings, Zap, Atom } from "lucide-react";
import { Link } from "wouter";

export default function F91RoundBars() {
  const chemicalComposition = [
    { element: "Carbon (C)", min: "0.08", max: "0.12" },
    { element: "Manganese (Mn)", min: "0.30", max: "0.60" },
    { element: "Silicon (Si)", min: "0.20", max: "0.50" },
    { element: "Phosphorus (P)", min: "—", max: "0.025" },
    { element: "Sulfur (S)", min: "—", max: "0.015" },
    { element: "Chromium (Cr)", min: "8.00", max: "9.50" },
    { element: "Nickel (Ni)", min: "—", max: "0.04" },
    { element: "Molybdenum (Mo)", min: "0.85", max: "1.05" },
    { element: "Vanadium (V)", min: "0.18", max: "0.25" },
    { element: "Niobium (Nb)", min: "0.06", max: "0.10" },
    { element: "Nitrogen (N)", min: "0.03", max: "0.07" },
    { element: "Aluminum (Al)", min: "—", max: "0.02" },
    { element: "Zirconium (Zr)", min: "—", max: "0.01" }
  ];

  const equivalentGrades = [
    { country: "Germany / DIN", grade: "X10CrMoVNb9-1" },
    { country: "USA / ASTM", grade: "A182 F91" },
    { country: "Europe", grade: "9Cr-1Mo-V Steel" },
    { country: "UNS", grade: "K90901" }
  ];

  const applications = [
    "Advanced Power Plant Components",
    "Ultra-Supercritical Steam Headers", 
    "High-Temperature Superheater Tubes",
    "Modern Thermal Power Plants",
    "High-Efficiency Boiler Components",
    "Steam Turbine Components",
    "Advanced Heat Exchanger Tubing",
    "Next-Generation Energy Systems",
    "Power engineering turbines",
    "Boiler steam boiler parts",
    "Boiler drums and pressure vessels",
    "Chemical and Petrochemical Industries equipment"
  ];

  const specifications = [
    "ASTM A182 F91 - Forging material specification for F91 grade alloy steel",
    "Modified 9Cr-1Mo steel with Chrome and Nb, V additions",
    "Elevated mechanical characteristics and excellent creep resistance",
    "Excellent resistance to embrittlement from hydrogen under pressure",
    "High-temperature service up to 600°C",
    "Size Range: 70mm to 850mm diameter round bars",
    "Condition: As Rolled, Forged, Annealed",
    "Surface: Black, Bright, Proof machined, Machined to requirements"
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Ultra-High Temperature",
      description: "Excellent performance at temperatures up to 650°C with superior creep strength"
    },
    {
      icon: <Atom className="w-6 h-6" />,
      title: "Advanced Metallurgy",
      description: "Modified 9Cr-1Mo steel with vanadium and niobium additions"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Next-Gen Power Plants",
      description: "Designed for ultra-supercritical and advanced power generation"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Long-Term Stability",
      description: "Enhanced microstructural stability for extended service life"
    }
  ];

  return (
    <>
      <ProductSEO
        title="F91 Round Bars - ASTM A182 F91 Forged Bars UNS K90901 | 9Cr-1Mo-V | Mamta Steel Traders"
        description="Premium ASTM A182 F91 round bars (X10CrMoVNb9-1) modified 9Cr-1Mo-V steel for ultra-supercritical power plants. Advanced alloy for high-temperature applications up to 650°C. Mumbai supplier."
        keywords="F91 round bars, ASTM A182 F91, X10CrMoVNb9-1, UNS K90901, 9Cr-1Mo-V steel, modified 9Cr-1Mo, ultra supercritical power plant, advanced alloy steel, F91 chemical composition"
        canonicalUrl="/product/round-bars/alloy-steel-f-series/f91-round-bars"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
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
              <Link href="/product/round-bars/alloy-steel-f-series" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary dark:hover:text-gold-primary transition-colors" data-testid="breadcrumb-f-series">
                F Series
              </Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span className="text-navy-primary dark:text-gold-primary font-medium" data-testid="breadcrumb-current">F91 Round Bars</span>
            </nav>
          </div>
        </div>

        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Link 
            href="/product/round-bars/alloy-steel-f-series" 
            className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:text-navy-secondary dark:hover:text-gold-secondary transition-colors font-medium"
            data-testid="button-back-to-f-series"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to F Series
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-f91-title">
                    F91 Round Bars
                    <span className="block text-2xl md:text-3xl text-gold-primary font-normal mt-2">
                      ASTM A182 F91 Forged Bars UNS K90901
                    </span>
                  </h1>
                  <p className="text-xl mb-8 text-gray-200" data-testid="text-f91-subtitle">
                    Advanced modified 9Cr-1Mo-V steel for ultra-supercritical power plants and next-generation energy systems
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-contact-f91">
                      <Mail className="w-5 h-5 mr-2" />
                      Get Quote
                    </Link>
                    <a href="tel:+919819322576" className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-call-f91">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Expert
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://textronsteelalloys.com/wp-content/uploads/2024/03/ASTMA182F91RoundBars-400x400.jpg"
                    alt="F91 Round Bars ASTM A182 F91"
                    className="w-full rounded-xl shadow-2xl"
                    loading="lazy"
                  />
                  <div className="absolute -top-4 -right-4 bg-gold-primary text-navy-primary px-4 py-2 rounded-lg font-bold shadow-xl">
                    9Cr-1Mo-V
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            
            {/* Key Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {features.map((feature, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-navy-primary dark:bg-gold-primary text-white dark:text-navy-primary rounded-lg mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 dark:text-gray-100 mb-2" data-testid={`feature-title-${index}`}>
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400" data-testid={`feature-desc-${index}`}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Product Description */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-description-title">
                F91 Round Bars / ASTM A182 F91 Forged Bars
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                <p className="mb-4">
                  <strong>F91 Round Bars</strong> (X10CrMoVNb9-1), is an Alloy Steel with Chrome and an Addition of Nb, 
                  which has Elevated Mechanical Characteristics and it is very often used in the Chemical and Petrochemical 
                  Industries for the Fabrication of Flanges, Valves, Tubes and for Equipments that require an excellent Creep 
                  Resistance and to Embrittlement Because of Hydrogen Under Pressure and at an Elevated Temperature (Up To 600°C).
                </p>
                <p className="mb-4">
                  ASTM A182 F91 is a forging material specification for F91 grade alloy steel and is used for manufacturing bare 
                  forgings or forged and machined products for applications involving high temperature service.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div>
                    <h4 className="font-bold mb-3 text-navy-primary dark:text-gold-primary">Supply Conditions:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• As Rolled / Forged, Annealed</li>
                      <li>• Black, Bright, Proof machined</li>
                      <li>• Machined to Requirements</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-3 text-navy-primary dark:text-gold-primary">Material Forms:</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Rolled Bar</li>
                      <li>• Forged Bar</li>
                      <li>• Cut Pieces</li>
                      <li>• Machined to specification</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Chemical Composition */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-composition-title">
                Chemical Composition of F91 Round Bars
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-navy-primary text-white">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Elements</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center">Min. %</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center">Max. %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chemicalComposition.map((comp, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50 dark:bg-gray-700" : "bg-white dark:bg-gray-800"}>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium" data-testid={`comp-element-${index}`}>
                          {comp.element}
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center" data-testid={`comp-min-${index}`}>
                          {comp.min}
                        </td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-center" data-testid={`comp-max-${index}`}>
                          {comp.max}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Equivalent Grades & Specifications */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {/* Equivalent Grades */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-equivalent-title">
                  F91 Steel Equivalent Grades
                </h3>
                <div className="space-y-4">
                  {equivalentGrades.map((grade, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="font-medium text-gray-700 dark:text-gray-300" data-testid={`grade-country-${index}`}>
                        {grade.country}
                      </span>
                      <span className="text-navy-primary dark:text-gold-primary font-semibold" data-testid={`grade-value-${index}`}>
                        {grade.grade}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Size Range */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-size-title">
                  Size Range & Specifications
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-gradient-to-r from-navy-primary to-navy-secondary text-white rounded-lg">
                    <div className="text-center">
                      <h4 className="font-bold text-lg mb-2">Round Bar Diameter</h4>
                      <p className="text-2xl font-bold text-gold-primary">70mm - 850mm</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-navy-primary dark:text-gold-primary">Standard Specifications:</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      {specifications.slice(0, 4).map((spec, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-navy-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          <span data-testid={`spec-${index}`}>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Applications */}
            <div className="bg-gradient-to-r from-navy-primary to-navy-secondary rounded-xl p-8 text-white mb-16">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center" data-testid="text-applications-title">
                  Applications of F91 Round Bars
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-200" data-testid={`application-${index}`}>
                        {application}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-8">
                  <p className="text-lg text-gray-200 mb-4">
                    F91 main fields of application are typically power engineering (turbines). Advantages include creep rupture behavior, 
                    proof stress at elevated temperature, and excellent Modulus of Elasticity properties.
                  </p>
                </div>
              </div>
            </div>

            {/* SEO Keywords Section */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-search-title">
                People Also Search For
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "a182 f91 material equivalent",
                  "a182 f91 chemical composition",
                  "a182 f91 type 1",
                  "a182 f91 type 2", 
                  "a182 f91 hardness",
                  "astm a182 f91 pdf",
                  "f91 material specification",
                  "x10crmovnb9-1 astm equivalent",
                  "x10crmovnb9-1 chemical composition",
                  "f91 vs f22 comparison",
                  "modified 9cr-1mo steel",
                  "f91 steel suppliers mumbai"
                ].map((keyword, index) => (
                  <span key={index} className="px-3 py-1 bg-navy-primary text-white text-xs rounded-full" data-testid={`keyword-${index}`}>
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4" data-testid="text-contact-title">
                Need F91 Round Bars for Advanced Power Applications?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Get expert consultation and competitive pricing for ASTM A182 F91 ultra-high temperature steel
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-navy-primary hover:bg-navy-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-get-quote">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Advanced Steel Quote
                </Link>
                <a href="tel:+919819322576" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-call-now">
                  <Phone className="w-5 h-5 mr-2" />
                  +91 99674 44008
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}