import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Zap, Settings, Users, Factory, Globe } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function StainlessSteelFlanges() {
  const [showAllSizes, setShowAllSizes] = useState(false);
  const [showAllGrades, setShowAllGrades] = useState(false);
  const [showAllCities, setShowAllCities] = useState(false);

  const specifications = [
    "ASTM A182/A240 - Standard Specification for Stainless Steel Flanges",
    "ASME B16.5 - Pipe Flanges and Flanged Fittings: NPS 1/2 through NPS 24",
    "ASME B16.47 - Large Diameter Steel Flanges: NPS 26 through NPS 60",
    "Size Range: 1/2 inch to 60 inches (All Standard Sizes Available)",
    "Pressure Class: 150#, 300#, 600#, 900#, 1500#, 2500#",
    "Thickness: 3mm to 200mm as per requirement",
    "Face Type: RF (Raised Face), FF (Flat Face), RTJ (Ring Type Joint)",
    "Testing: PMI Test, Hydrostatic Test, Radiographic Test"
  ];

  const stainlessSteelGrades = [
    {
      grade: "SS 304",
      uns: "S30400",
      description: "General purpose austenitic stainless steel with good corrosion resistance",
      applications: ["Food processing", "Chemical equipment", "Marine applications"],
      composition: "18% Cr, 8% Ni, Balance Fe"
    },
    {
      grade: "SS 304L",
      uns: "S30403", 
      description: "Low carbon version of 304 with enhanced corrosion resistance",
      applications: ["Welded structures", "Chemical tanks", "Heat exchangers"],
      composition: "18% Cr, 10% Ni, 0.03% C max"
    },
    {
      grade: "SS 304H",
      uns: "S30409",
      description: "High carbon version for high temperature applications",
      applications: ["High temperature service", "Furnace parts", "Heat treatment"],
      composition: "18% Cr, 9% Ni, 0.04-0.10% C"
    },
    {
      grade: "SS 316",
      uns: "S31600",
      description: "Molybdenum bearing grade with superior corrosion resistance",
      applications: ["Marine environments", "Chemical processing", "Medical equipment"],
      composition: "16% Cr, 10% Ni, 2% Mo"
    },
    {
      grade: "SS 316L",
      uns: "S31603",
      description: "Low carbon molybdenum grade for welded applications",
      applications: ["Pharmaceutical", "Food processing", "Chemical plants"],
      composition: "17% Cr, 12% Ni, 2.5% Mo"
    },
    {
      grade: "SS 316H",
      uns: "S31609",
      description: "High carbon grade for elevated temperature service",
      applications: ["High temperature applications", "Petrochemical", "Power plants"],
      composition: "16% Cr, 11% Ni, 2% Mo, 0.04-0.10% C"
    },
    {
      grade: "SS 321",
      uns: "S32100",
      description: "Titanium stabilized grade resistant to intergranular corrosion",
      applications: ["Aircraft exhaust", "Furnace parts", "Heat exchangers"],
      composition: "17% Cr, 9% Ni, Ti stabilized"
    },
    {
      grade: "SS 347",
      uns: "S34700",
      description: "Niobium stabilized grade for high temperature applications",
      applications: ["Jet engine parts", "Nuclear applications", "High temp service"],
      composition: "17% Cr, 11% Ni, Nb stabilized"
    }
  ];

  const flangeTypes = [
    {
      type: "Weld Neck Flanges",
      description: "Best for high pressure and high temperature applications",
      sizes: "1/2\" to 60\" NB",
      pressureClass: "150# to 2500#",
      features: ["Full penetration weld", "Excellent stress distribution", "High strength"],
      image: "https://textronsteelalloys.com/wp-content/uploads/2013/06/k-300x300.jpg"
    },
    {
      type: "Slip On Flanges", 
      description: "Cost-effective solution for low pressure applications",
      sizes: "1/2\" to 24\" NB",
      pressureClass: "150# to 600#",
      features: ["Easy installation", "Lower cost", "Good for low pressure"],
      image: "https://textronsteelalloys.com/wp-content/uploads/2013/06/k-300x300.jpg"
    },
    {
      type: "Socket Weld Flanges",
      description: "Ideal for small bore piping applications",
      sizes: "1/2\" to 3\" NB",
      pressureClass: "3000# to 9000#",
      features: ["High pressure capability", "Small bore applications", "Smooth bore"],
      image: "https://textronsteelalloys.com/wp-content/uploads/2013/06/k-300x300.jpg"
    },
    {
      type: "Threaded Flanges",
      description: "For applications where welding is not possible",
      sizes: "1/2\" to 4\" NB",
      pressureClass: "150# to 300#",
      features: ["No welding required", "Easy maintenance", "Quick installation"],
      image: "https://textronsteelalloys.com/wp-content/uploads/2013/06/k-300x300.jpg"
    },
    {
      type: "Blind Flanges",
      description: "For closing pipe ends and pressure testing",
      sizes: "1/2\" to 60\" NB", 
      pressureClass: "150# to 2500#",
      features: ["Complete closure", "Pressure testing", "Easy access"],
      image: "https://textronsteelalloys.com/wp-content/uploads/2013/06/k-300x300.jpg"
    },
    {
      type: "Lap Joint Flanges",
      description: "Used with stub ends for easy alignment",
      sizes: "1/2\" to 24\" NB",
      pressureClass: "150# to 600#", 
      features: ["Easy alignment", "Cost effective", "Stub end compatibility"],
      image: "https://textronsteelalloys.com/wp-content/uploads/2013/06/k-300x300.jpg"
    }
  ];

  const standardSizes = [
    "1/2\"", "3/4\"", "1\"", "1-1/4\"", "1-1/2\"", "2\"", "2-1/2\"", "3\"", "3-1/2\"", "4\"",
    "5\"", "6\"", "8\"", "10\"", "12\"", "14\"", "16\"", "18\"", "20\"", "22\"", "24\"",
    "26\"", "28\"", "30\"", "32\"", "34\"", "36\"", "38\"", "40\"", "42\"", "44\"", "48\"",
    "52\"", "56\"", "60\""
  ];

  const pressureClasses = [
    {
      class: "150#",
      workingPressure: "285 PSI",
      temperature: "260°C",
      applications: "Low pressure systems, water lines, general applications"
    },
    {
      class: "300#", 
      workingPressure: "740 PSI",
      temperature: "260°C",
      applications: "Medium pressure systems, steam lines, process piping"
    },
    {
      class: "600#",
      workingPressure: "1480 PSI", 
      temperature: "260°C",
      applications: "High pressure systems, oil & gas, petrochemical"
    },
    {
      class: "900#",
      workingPressure: "2220 PSI",
      temperature: "260°C",
      applications: "Very high pressure, critical applications"
    },
    {
      class: "1500#",
      workingPressure: "3705 PSI",
      temperature: "260°C", 
      applications: "Extreme pressure, specialized applications"
    },
    {
      class: "2500#",
      workingPressure: "6170 PSI",
      temperature: "260°C",
      applications: "Ultra-high pressure, nuclear, aerospace"
    }
  ];

  const chemicalComposition = {
    "SS 304": { C: "0.08 max", Mn: "2.0 max", Si: "0.75 max", P: "0.045 max", S: "0.030 max", Cr: "18-20", Ni: "8-11" },
    "SS 304L": { C: "0.035 max", Mn: "2.0 max", Si: "1.0 max", P: "0.045 max", S: "0.030 max", Cr: "18-20", Ni: "8-13" },
    "SS 316": { C: "0.08 max", Mn: "2.0 max", Si: "0.75 max", P: "0.045 max", S: "0.030 max", Cr: "16-18", Ni: "10-14", Mo: "2-3" },
    "SS 316L": { C: "0.035 max", Mn: "2.0 max", Si: "0.75 max", P: "0.045 max", S: "0.030 max", Cr: "16-18", Ni: "10-14", Mo: "2-3" }
  };

  const mechanicalProperties = {
    tensileStrength: "515 MPa (75,000 PSI)",
    yieldStrength: "205 MPa (30,000 PSI)", 
    elongation: "40% minimum",
    hardness: "201 HB maximum",
    density: "8.0 g/cm³",
    meltingPoint: "1400°C (2550°F)"
  };

  const applications = [
    "Oil and Gas Industry - Refineries, Pipelines, Offshore Platforms",
    "Chemical Processing Plants - Reactors, Heat Exchangers, Storage Tanks",
    "Petrochemical Industries - Distillation Columns, Process Equipment",
    "Power Generation Plants - Steam Lines, Boiler Applications",
    "Water Treatment Plants - Filtration Systems, Pumping Stations",
    "Food Processing Industries - Dairy, Beverage, Pharmaceutical",
    "Marine Applications - Shipbuilding, Offshore Structures",
    "Nuclear Power Plants - Reactor Systems, Cooling Circuits",
    "Pulp & Paper Industry - Digesters, Bleaching Equipment",
    "High Temperature Applications - Furnace Parts, Heat Treatment"
  ];

  const features = [
    { icon: Shield, title: "Corrosion Resistant", desc: "Superior resistance to corrosion, oxidation and chemical attack" },
    { icon: TrendingUp, title: "High Pressure Rating", desc: "Available in pressure classes from 150# to 2500# for all applications" },
    { icon: Award, title: "ASME B16.5 Certified", desc: "Manufactured as per ASME B16.5 and B16.47 standards with full compliance" },
    { icon: CheckCircle, title: "Complete Size Range", desc: "Available in all standard sizes from 1/2\" to 60\" NB" },
    { icon: Zap, title: "Multiple Grades", desc: "Available in SS 304, 304L, 316, 316L, 321, 347 and other special grades" },
    { icon: Settings, title: "Custom Manufacturing", desc: "Custom sizes, grades and specifications available as per customer requirements" },
    { icon: Users, title: "Expert Team", desc: "Experienced engineering team providing technical support and solutions" },
    { icon: Factory, title: "Mumbai Based", desc: "Located in Mumbai with excellent logistics and supply chain network" }
  ];

  const testingAndCertification = [
    "Positive Material Identification (PMI)",
    "Mechanical Testing - Tensile, Hardness, Impact",
    "Chemical Analysis - Spectro Analysis",
    "Hydrostatic Pressure Testing",
    "Radiographic Testing (RT)",
    "Magnetic Particle Testing (MPT)",
    "Liquid Penetrant Testing (LPT)",
    "Dimensional Inspection",
    "Visual Inspection",
    "Third Party Inspection - Lloyd's, DNV, Bureau Veritas, SGS"
  ];

  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad",
    "Surat", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal",
    "Visakhapatnam", "Pimpri", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra",
    "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan", "Vasai", "Varanasi"
  ];

  const visibleSizes = showAllSizes ? standardSizes : standardSizes.slice(0, 12);
  const visibleGrades = showAllGrades ? stainlessSteelGrades : stainlessSteelGrades.slice(0, 4);
  const visibleCities = showAllCities ? cities : cities.slice(0, 12);

  return (
    <>
      <ProductSEO
        title="Best Stainless Steel Flanges Supplier Mumbai - SS 304, 316L Flanges | Mamta Steel Traders"
        description="Leading stainless steel flanges manufacturer & supplier in Mumbai, India. Best prices on SS 304, 304L, 316, 316L flanges. All sizes 1/2 inch to 60 inch NB, pressure classes 150# to 2500#. ASME B16.5 certified. Contact Mamta Steel Traders for competitive quotes."
        keywords="stainless steel flanges, SS flanges supplier Mumbai, best price flanges Mumbai, stainless steel flanges manufacturer India, SS 304 flanges, SS 316L flanges, ASME B16.5 flanges, weld neck flanges, slip on flanges, all size flanges Mumbai, stainless steel flanges exporter, Mamta Steel Traders, flanges by grade, flanges by size, best stainless steel flanges prices"
        category="Flanges"
        productName="Stainless Steel Flanges - All Grades & Sizes"
        specifications={specifications}
        canonicalUrl="/product/flanges/stainless-steel"
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Breadcrumb */}
        <div className="bg-gray-50 dark:bg-gray-800 py-4">
          <div className="container mx-auto px-4">
            <nav className="text-sm" data-testid="breadcrumb-nav">
              <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline" data-testid="link-home">Home</Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link href="/products" className="text-blue-600 dark:text-blue-400 hover:underline" data-testid="link-products">Products</Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link href="/flanges" className="text-blue-600 dark:text-blue-400 hover:underline" data-testid="link-flanges">Flanges</Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-700 dark:text-gray-300">Stainless Steel Flanges</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-main-heading">
                Best Stainless Steel Flanges Supplier in Mumbai
              </h1>
              <p className="text-xl mb-4 text-blue-100" data-testid="text-hero-subtitle">
                Premium Quality SS 304, 304L, 316, 316L Flanges | All Sizes Available 1/2" to 60" NB
              </p>
              <p className="text-lg mb-8 text-blue-200" data-testid="text-hero-description">
                ASME B16.5 Certified | Best Prices in Mumbai | Mamta Steel Traders - Your Trusted Partner
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center" data-testid="button-get-quote">
                  Get Best Price Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a href="tel:+919819322576" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center" data-testid="button-call-now">
                  <Phone className="mr-2 w-5 h-5" />
                  Call: +91 91932 25757
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="text-features-heading">
              Why Choose Mamta Steel Traders for SS Flanges?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200" data-testid={`card-feature-${index}`}>
                  <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stainless Steel Grades */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="text-grades-heading">
              Stainless Steel Flanges by Grade
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {visibleGrades.map((grade, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200" data-testid={`card-grade-${index}`}>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white" data-testid={`text-grade-name-${index}`}>
                        {grade.grade}
                      </h3>
                      <span className="text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded" data-testid={`badge-uns-${index}`}>
                        {grade.uns}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4" data-testid={`text-grade-description-${index}`}>
                      {grade.description}
                    </p>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Composition:</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{grade.composition}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Applications:</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300">
                        {grade.applications.map((app, appIndex) => (
                          <li key={appIndex} className="flex items-center" data-testid={`item-grade-app-${index}-${appIndex}`}>
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {stainlessSteelGrades.length > 4 && (
              <div className="text-center mt-8">
                <button 
                  onClick={() => setShowAllGrades(!showAllGrades)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
                  data-testid="button-show-all-grades"
                >
                  {showAllGrades ? 'Show Less Grades' : `Show All ${stainlessSteelGrades.length} Grades`}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Flange Types */}
        <div className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="text-flange-types-heading">
              Stainless Steel Flange Types Available
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {flangeTypes.map((flange, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200" data-testid={`card-flange-type-${index}`}>
                  <img 
                    src={flange.image} 
                    alt={flange.type}
                    className="w-full h-48 object-cover"
                    data-testid={`img-flange-${index}`}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white" data-testid={`text-flange-type-${index}`}>
                      {flange.type}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3" data-testid={`text-flange-description-${index}`}>
                      {flange.description}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="font-semibold">Sizes:</span>
                        <p className="text-gray-600 dark:text-gray-300">{flange.sizes}</p>
                      </div>
                      <div>
                        <span className="font-semibold">Pressure:</span>
                        <p className="text-gray-600 dark:text-gray-300">{flange.pressureClass}</p>
                      </div>
                    </div>
                    <div>
                      <span className="font-semibold mb-2 block">Features:</span>
                      <ul className="text-sm space-y-1">
                        {flange.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center" data-testid={`item-flange-feature-${index}-${featureIndex}`}>
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                            <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Size Chart */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="text-sizes-heading">
              Available Flange Sizes - All Standard Dimensions
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Standard Sizes Available:</h3>
              <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-3">
                {visibleSizes.map((size, index) => (
                  <div key={index} className="bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-2 rounded text-center font-semibold" data-testid={`badge-size-${index}`}>
                    {size}
                  </div>
                ))}
              </div>
              {standardSizes.length > 12 && (
                <div className="text-center mt-6">
                  <button 
                    onClick={() => setShowAllSizes(!showAllSizes)}
                    className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                    data-testid="button-show-all-sizes"
                  >
                    {showAllSizes ? 'Show Less Sizes' : `Show All ${standardSizes.length} Standard Sizes`}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Pressure Class Chart */}
        <div className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="text-pressure-heading">
              Pressure Class & Temperature Ratings
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg" data-testid="table-pressure-classes">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Pressure Class</th>
                    <th className="px-6 py-4 text-left">Working Pressure</th>
                    <th className="px-6 py-4 text-left">Max Temperature</th>
                    <th className="px-6 py-4 text-left">Typical Applications</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                  {pressureClasses.map((pressure, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-600" data-testid={`row-pressure-${index}`}>
                      <td className="px-6 py-4 font-semibold text-blue-600">{pressure.class}</td>
                      <td className="px-6 py-4 text-gray-900 dark:text-gray-100">{pressure.workingPressure}</td>
                      <td className="px-6 py-4 text-gray-900 dark:text-gray-100">{pressure.temperature}</td>
                      <td className="px-6 py-4 text-gray-600 dark:text-gray-300">{pressure.applications}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Chemical Composition */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="text-composition-heading">
              Chemical Composition & Mechanical Properties
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Chemical Composition (%)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm" data-testid="table-chemical-composition">
                    <thead className="bg-gray-100 dark:bg-gray-600">
                      <tr>
                        <th className="px-3 py-2 text-left">Grade</th>
                        <th className="px-3 py-2 text-left">C</th>
                        <th className="px-3 py-2 text-left">Cr</th>
                        <th className="px-3 py-2 text-left">Ni</th>
                        <th className="px-3 py-2 text-left">Mo</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                      {Object.entries(chemicalComposition).map(([grade, comp], index) => (
                        <tr key={index} data-testid={`row-composition-${index}`}>
                          <td className="px-3 py-2 font-semibold">{grade}</td>
                          <td className="px-3 py-2">{comp.C}</td>
                          <td className="px-3 py-2">{comp.Cr}</td>
                          <td className="px-3 py-2">{comp.Ni}</td>
                          <td className="px-3 py-2">{(comp as any).Mo || '-'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Mechanical Properties</h3>
                <ul className="space-y-3">
                  {Object.entries(mechanicalProperties).map(([property, value], index) => (
                    <li key={index} className="flex justify-between" data-testid={`item-mechanical-${index}`}>
                      <span className="font-medium text-gray-700 dark:text-gray-300 capitalize">
                        {property.replace(/([A-Z])/g, ' $1').trim()}:
                      </span>
                      <span className="text-gray-900 dark:text-gray-100">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Applications */}
        <div className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="text-applications-heading">
              Industrial Applications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {applications.map((app, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200" data-testid={`card-application-${index}`}>
                  <div className="flex items-start">
                    <Star className="w-6 h-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{app}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testing & Certification */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="text-testing-heading">
              Quality Testing & Certifications
            </h2>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">
                All our stainless steel flanges undergo rigorous testing and quality control processes
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {testingAndCertification.map((test, index) => (
                  <div key={index} className="flex items-center" data-testid={`item-test-${index}`}>
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700 dark:text-gray-300">{test}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="text-service-areas-heading">
              We Supply Across India
            </h2>
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                <MapPin className="mr-2 w-5 h-5 text-blue-600" />
                Major Cities We Serve
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {visibleCities.map((city, index) => (
                  <div key={index} className="bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-2 rounded text-center" data-testid={`badge-city-${index}`}>
                    {city}
                  </div>
                ))}
              </div>
              {cities.length > 12 && (
                <div className="text-center mt-4">
                  <button 
                    onClick={() => setShowAllCities(!showAllCities)}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    data-testid="button-show-all-cities"
                  >
                    {showAllCities ? 'Show Less' : `Show All ${cities.length} Cities`}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6" data-testid="text-cta-heading">
              Get Best Prices on Stainless Steel Flanges
            </h2>
            <p className="text-xl mb-4 text-blue-100" data-testid="text-cta-subtitle">
              Leading SS Flanges Supplier in Mumbai | Competitive Rates | Quick Delivery
            </p>
            <p className="text-lg mb-8 text-blue-200" data-testid="text-cta-description">
              Contact Mamta Steel Traders for the best prices on all grades and sizes of stainless steel flanges
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3" data-testid="contact-phone">
                <Phone className="w-6 h-6 text-orange-400" />
                <div>
                  <p className="font-semibold">Call Us Now</p>
                  <p className="text-blue-100">+91 91932 25757</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3" data-testid="contact-email">
                <Mail className="w-6 h-6 text-orange-400" />
                <div>
                  <p className="font-semibold">Email Us</p>
                  <p className="text-blue-100">mamtasteeltraders@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3" data-testid="contact-location">
                <MapPin className="w-6 h-6 text-orange-400" />
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-blue-100">Mumbai, Maharashtra</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center" data-testid="button-contact-us">
                Get Quote Now <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="mailto:mamtasteeltraders@gmail.com" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center" data-testid="button-email-us">
                <Mail className="mr-2 w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}