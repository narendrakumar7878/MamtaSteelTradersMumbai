import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, ShoppingCart, ArrowLeft, FileText, CheckCircle, Settings, Zap } from "lucide-react";
import { Link } from "wouter";

export default function F11RoundBars() {
  const chemicalComposition = [
    { element: "Carbon (C)", min: "0.05", max: "0.15" },
    { element: "Silicon (Si)", min: "0.50", max: "1.00" },
    { element: "Manganese (Mn)", min: "0.30", max: "0.60" },
    { element: "Sulfur (S)", min: "—", max: "0.04" },
    { element: "Phosphorus (P)", min: "—", max: "0.04" },
    { element: "Chromium (Cr)", min: "1.00", max: "1.50" },
    { element: "Molybdenum (Mo)", min: "0.44", max: "0.65" }
  ];

  const equivalentGrades = [
    { country: "Germany / DIN", grade: "13CrMo44 / 1.7335" },
    { country: "China / GB", grade: "15CrMoA" },
    { country: "USA / ASTM", grade: "A182 F11" },
    { country: "India / IS", grade: "15CrMo" }
  ];

  const applications = [
    "Oil patch wellhead applications for connectors",
    "Hangers and block valves manufacturing",
    "High-temperature pressure systems",
    "Petrochemical plant equipment",
    "Coal conversion facilities",
    "Nuclear power components",
    "Steam turbine cylinders",
    "Thermal power equipment",
    "Corrosive media handling systems",
    "Flanges and fittings manufacturing"
  ];

  const specifications = [
    "ASTM A182 F11 - Standard Specification for Forged or Rolled Alloy and Stainless Steel",
    "Heat resistant steels with high temperature mechanical properties",
    "High temperature oxidation resistance",
    "Good toughness and process performance",
    "Resistance to hydrogen corrosion at elevated temperatures",
    "Size Range: 70mm to 850mm diameter round bars",
    "Condition: As Rolled, Forged, Annealed",
    "Surface: Black, Bright, Proof machined, Machined to requirements"
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "High Temperature Resistance",
      description: "Excellent performance at elevated temperatures up to 600°C"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Superior Machinability",
      description: "Easy machining with sawing, turning, drilling, boring and milling"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Corrosion Resistant",
      description: "Good resistance to hydrogen corrosion and oxidation"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "ASTM Certified",
      description: "Complies with ASTM A182 F11 international standards"
    }
  ];

  return (
    <>
      <ProductSEO
        title="F11 Round Bars - ASTM A182 F11 Alloy Steel Forged Bars | Heat Resistant | Mamta Steel Traders"
        description="Premium ASTM A182 F11 round bars (13CrMo44) for high-temperature applications. Heat resistant steel for petrochemical, power plants, oil & gas. 70mm to 850mm dia. Mumbai supplier."
        keywords="F11 round bars, ASTM A182 F11, 13CrMo44, 1.7335, heat resistant steel, high temperature steel, petrochemical steel, power plant steel, oil gas applications, alloy steel bars, forged bars, F11 chemical composition"
        canonicalUrl="/product/round-bars/alloy-steel-f-series/f11-round-bars"
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
              <span className="text-navy-primary dark:text-gold-primary font-medium" data-testid="breadcrumb-current">F11 Round Bars</span>
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
                  <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-f11-title">
                    F11 Round Bars
                    <span className="block text-2xl md:text-3xl text-gold-primary font-normal mt-2">
                      ASTM A182 F11 Alloy Steel Forged Bars
                    </span>
                  </h1>
                  <p className="text-xl mb-8 text-gray-200" data-testid="text-f11-subtitle">
                    High-temperature resistant alloy steel bars for critical petrochemical and power industry applications
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-contact-f11">
                      <Mail className="w-5 h-5 mr-2" />
                      Get Quote
                    </Link>
                    <a href="tel:+919819322576" className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-call-f11">
                      <Phone className="w-5 h-5 mr-2" />
                      Call Expert
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://textronsteelalloys.com/wp-content/uploads/2024/03/F11-Round-Bar-400x400.jpg"
                    alt="F11 Round Bars ASTM A182 F11"
                    className="w-full rounded-xl shadow-2xl"
                    loading="lazy"
                  />
                  <div className="absolute -top-4 -right-4 bg-gold-primary text-navy-primary px-4 py-2 rounded-lg font-bold shadow-xl">
                    ASTM A182
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
                F11 Round Bars / ASTM A182 F11
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300">
                <p className="mb-4">
                  <strong>F11 Round Bars / ASTM A182 F11</strong> are heat resistant steels, and belongs to the ASTM A182 standard. 
                  At high temperatures, they have high temperature mechanical properties, high temperature oxidation resistance, 
                  good toughness and process performance, and have a certain resistance to hydrogen corrosion.
                </p>
                <p className="mb-4">
                  F11 are mainly used in pressure systems, included are flanges, fittings, valves and similar parts and widely 
                  used in the manufacture of petrochemical, coal conversion, nuclear power, steam turbine cylinders, thermal 
                  power and other large-scale equipment with harsh operating conditions and complex corrosive media.
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
                Chemical Composition of F11 Round Bars
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
                  F11 Steel Equivalent Grades
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
                  Applications of F11 Round Bars
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
                    F11 is widely used in the oil patch wellhead applications for connectors, hangers and block valves and a wide range of Fittings and Flanges
                  </p>
                </div>
              </div>
            </div>

            {/* Machining Information */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-machining-title">
                Machining of F11 Round Bars
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                F11 is readily machinable allowing processes such as Sawing, Turning, Drilling, Boring and Milling to be relatively easily achieved.
              </p>
              <div className="grid md:grid-cols-5 gap-4">
                {["Sawing", "Turning", "Drilling", "Boring", "Milling"].map((process, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <Settings className="w-8 h-8 text-navy-primary dark:text-gold-primary mx-auto mb-2" />
                    <p className="font-medium text-sm" data-testid={`machining-${index}`}>{process}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* SEO Keywords Section */}
            <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-8 mb-16">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-search-title">
                People Also Search For
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "astm a182 f11 chemical composition",
                  "astm a182 f11 material specification", 
                  "astm a182 f11 equivalent",
                  "astm a182 f11 class 2",
                  "astm a182 f11 cl2", 
                  "astm a182 f11 pdf",
                  "astm a182 f11 material equivalent",
                  "f11 round bars suppliers",
                  "13crmo44 equivalent astm",
                  "f11 vs f22 difference"
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
                Need F11 Round Bars for Your Project?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Get expert consultation and competitive pricing for ASTM A182 F11 round bars
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-navy-primary hover:bg-navy-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-get-quote">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Technical Quote
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