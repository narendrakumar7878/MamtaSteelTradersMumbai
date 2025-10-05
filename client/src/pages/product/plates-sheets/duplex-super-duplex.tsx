import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function DuplexSuperDuplexPlates() {
  const specifications = [
    "ASTM A240 - Standard Specification for Chromium and Chromium-Nickel Stainless Steel Plate, Sheet, and Strip",
    "ASTM A480 - Standard Specification for General Requirements for Flat-Rolled Stainless and Heat-Resisting Steel Plate, Sheet, and Strip",
    "EN 10088-2 - Stainless steels - Part 2: Technical delivery conditions for sheet/plate and strip",
    "ASME SA-240 - Chromium and Chromium-Nickel Stainless Steel Plate, Sheet, and Strip",
    "Thickness Range: 1mm to 50mm (Custom thickness available)",
    "Width Range: 1000mm, 1250mm, 1500mm, 2000mm, 2500mm",
    "Length Range: 2000mm, 2500mm, 3000mm, 6000mm",
    "Supply Condition: Hot Rolled & Cold Rolled",
    "Make: Jindal, Outokumpu, Textron Steel & Alloys",
    "Grades: 2205 (S31803), 2507 (S32750), 2304 (S32304), Zeron 100 (S32760), 1.4410, Alloy 20"
  ];

  const applications = [
    "Oil and Gas Processing Equipment",
    "Offshore Platforms and Subsea Equipment",
    "Chemical and Petrochemical Industries",
    "Pulp and Paper Processing",
    "Desalination and Water Treatment",
    "Marine and Shipbuilding Applications",
    "Heat Exchangers and Pressure Vessels",
    "Food Processing Industries",
    "Condensers and Dished Ends",
    "Filters and Fittings & Flanges",
    "Line Pipe and Pressure Vessels",
    "Valves and Seawater Desalination",
    "Upstream Oil & Gas - Norsok Qualified",
    "Pollution Control Equipment",
    "Wastewater Treatment Plants",
    "Storage Tanks and Concentrators"
  ];

  const features = [
    { icon: Shield, title: "Superior Corrosion Resistance", desc: "Excellent resistance to pitting, crevice corrosion, and stress corrosion cracking" },
    { icon: TrendingUp, title: "High Strength", desc: "Nearly twice the yield strength of austenitic stainless steels" },
    { icon: Award, title: "Chloride Resistant", desc: "Outstanding performance in chloride-containing environments" },
    { icon: CheckCircle, title: "Dual Phase Structure", desc: "Optimized ferritic-austenitic microstructure for enhanced properties" }
  ];

  return (
    <>
      <ProductSEO
        title="Duplex and Super Duplex Plates"
        description="Premium quality duplex and super duplex stainless steel plates in 7 certified grades including 1.4410 (S32750), 2205, 2507, Zeron 100. ASTM A240 certified from Jindal, Outokumpu suppliers. Best prices in Mumbai for offshore and chemical processing applications."
        keywords="duplex steel plates, super duplex plates, 1.4410 plates, S32750 plates, 2205 plates, 2507 plates, Zeron 100 plates, ASTM A240 plates, offshore steel plates, Mumbai duplex steel supplier, UNS S31803, UNS S32550, UNS S32760, Alloy 20"
        category="Plates & Sheets"
        productName="Duplex and Super Duplex Plates"
        specifications={specifications}
        canonicalUrl="/product/plates-sheets/duplex-super-duplex"
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white py-4 border-b border-gray-200" data-testid="breadcrumb-nav">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-home">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-products">Products</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/product/plates-sheets" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-plates-sheets">Plates & Sheets</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Duplex and Super Duplex Plates</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-heading md:text-heading font-bold mb-6" data-testid="hero-title">
                Premium Duplex & Super Duplex Plates
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-performance duplex stainless steel plates for oil & gas, offshore, and aggressive chemical environments
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-get-quote">
                  Get Quote Now
                </Link>
                <a href="tel:+919819322576" className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-call-now">
                  Call Now: +91 9819322576
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-16 bg-white" data-testid="features-section">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="features-title">
              Why Choose Our Duplex Steel Plates?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300" data-testid={`feature-${index}`}>
                  <feature.icon className="w-12 h-12 text-gold-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-navy-primary mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 bg-gray-50" data-testid="specifications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="specifications-title">
                Technical Specifications
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-lg shadow-md" data-testid="specifications-standards">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Standards & Grades</h3>
                  <ul className="space-y-3">
                    {specifications.map((spec, index) => (
                      <li key={index} className="flex items-start" data-testid={`spec-${index}`}>
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md" data-testid="specifications-applications">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Applications</h3>
                  <ul className="space-y-3">
                    {applications.map((app, index) => (
                      <li key={index} className="flex items-start" data-testid={`app-${index}`}>
                        <Star className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase - 7 Variants */}
        <section className="py-16 bg-gradient-to-b from-blue-50 to-white" data-testid="product-showcase-section">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-4" data-testid="showcase-title">
                Our Complete Duplex & Super Duplex Range
              </h2>
              <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                Textron Steel & Alloys stocks super duplex stainless steel plates certified to material grades with branded designations from Jindal, Outokumpu and other premium manufacturers.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {/* 1.4410 Plates */}
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" data-testid="product-1-4410">
                  <div className="bg-gradient-to-r from-navy-primary to-navy-secondary p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">1.4410 Plates</h3>
                    <p className="text-blue-100">Super Duplex UNS S32750</p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">The most common super duplex grade in the market. Designed for aggressive chloride-containing environments.</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />25% Cr super duplex</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />X2CrNiMoN25-7-4</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />High mechanical strength</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Excellent stress corrosion resistance</li>
                    </ul>
                  </div>
                </div>

                {/* Alloy 20 */}
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" data-testid="product-alloy-20">
                  <div className="bg-gradient-to-r from-green-600 to-green-700 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Alloy 20</h3>
                    <p className="text-green-100">UNS N08020</p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">High-performance nickel-chromium-molybdenum alloy with superior corrosion resistance.</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Chemical processing</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Sulfuric acid resistance</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />High temperature stability</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Pressure vessel applications</li>
                    </ul>
                  </div>
                </div>

                {/* UNS S31803 */}
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" data-testid="product-s31803">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">UNS S31803</h3>
                    <p className="text-purple-100">ASTM A240 / ASME SA240</p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">Standard duplex stainless steel with balanced austenitic-ferritic structure for enhanced properties.</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Balanced duplex structure</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Oil & gas qualified</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Cost-effective solution</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />General chemical processing</li>
                    </ul>
                  </div>
                </div>

                {/* UNS S32550 */}
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" data-testid="product-s32550">
                  <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">UNS S32550</h3>
                    <p className="text-orange-100">ASTM A240 / ASME SA240</p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">Super duplex grade with enhanced pitting and crevice corrosion resistance for demanding applications.</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Super duplex grade</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Enhanced pitting resistance</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Offshore applications</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Seawater environments</li>
                    </ul>
                  </div>
                </div>

                {/* UNS S32750 */}
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" data-testid="product-s32750">
                  <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">UNS S32750</h3>
                    <p className="text-red-100">ASTM A240 / ASME SA240</p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">Premium super duplex grade (2507) with exceptional corrosion resistance and mechanical properties.</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />2507 designation</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />High molybdenum content</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Norsok qualified</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Offshore oil & gas</li>
                    </ul>
                  </div>
                </div>

                {/* UNS S32760 */}
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" data-testid="product-s32760">
                  <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">UNS S32760</h3>
                    <p className="text-indigo-100">ASTM A240 / ASME SA240 (Zeron 100)</p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">Ultra-high performance super duplex for the most demanding corrosive environments.</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Zeron 100 brand</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Highest PREN value</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Severe chloride environments</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Extreme corrosion resistance</li>
                    </ul>
                  </div>
                </div>

                {/* UNS S32205 */}
                <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden" data-testid="product-s32205">
                  <div className="bg-gradient-to-r from-teal-600 to-teal-700 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">UNS S32205</h3>
                    <p className="text-teal-100">Plates, Coils, Sheets</p>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">Enhanced duplex grade with improved mechanical properties and corrosion resistance over S31803.</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Enhanced 2205 grade</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Improved properties</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Structural applications</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-green-500 mr-2" />Pressure vessels</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chemical Composition Table */}
        <section className="py-16 bg-white" data-testid="chemical-composition-section">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="composition-title">
                Chemical Composition & Specifications
              </h2>
              
              {/* Comprehensive Chemical Compositions for All 7 Variants */}
              
              {/* 1.4410 (S32750) Detailed Composition */}
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold text-navy-primary mb-6">1.4410 (S32750) Super Duplex - Chemical Composition</h3>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-navy-primary text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Element</th>
                        <th className="px-4 py-3 text-left">C</th>
                        <th className="px-4 py-3 text-left">Si</th>
                        <th className="px-4 py-3 text-left">Mn</th>
                        <th className="px-4 py-3 text-left">Ni</th>
                        <th className="px-4 py-3 text-left">P</th>
                        <th className="px-4 py-3 text-left">S</th>
                        <th className="px-4 py-3 text-left">Cr</th>
                        <th className="px-4 py-3 text-left">Mo</th>
                        <th className="px-4 py-3 text-left">N</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="px-4 py-3 font-semibold">Composition (%)</td>
                        <td className="px-4 py-3">max 0.03</td>
                        <td className="px-4 py-3">max 1.00</td>
                        <td className="px-4 py-3">max 2.00</td>
                        <td className="px-4 py-3">6.00-8.00</td>
                        <td className="px-4 py-3">max 0.035</td>
                        <td className="px-4 py-3">max 0.015</td>
                        <td className="px-4 py-3">24.00-26.00</td>
                        <td className="px-4 py-3">3.00-4.50</td>
                        <td className="px-4 py-3">0.24-0.35</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-gray-600"><strong>Alphanumerical Designation:</strong> X2CrNiMoN25-7-4 | <strong>PREN:</strong> 42 | <strong>Applications:</strong> Aggressive chloride environments, offshore</p>
              </div>

              {/* Alloy 20 (N08020) Composition */}
              <div className="bg-green-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold text-navy-primary mb-6">Alloy 20 (UNS N08020) - Chemical Composition</h3>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-green-600 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Element</th>
                        <th className="px-4 py-3 text-left">C</th>
                        <th className="px-4 py-3 text-left">Si</th>
                        <th className="px-4 py-3 text-left">Mn</th>
                        <th className="px-4 py-3 text-left">Ni</th>
                        <th className="px-4 py-3 text-left">Cr</th>
                        <th className="px-4 py-3 text-left">Mo</th>
                        <th className="px-4 py-3 text-left">Cu</th>
                        <th className="px-4 py-3 text-left">Cb+Ta</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="px-4 py-3 font-semibold">Composition (%)</td>
                        <td className="px-4 py-3">max 0.07</td>
                        <td className="px-4 py-3">max 1.00</td>
                        <td className="px-4 py-3">max 2.00</td>
                        <td className="px-4 py-3">32.0-38.0</td>
                        <td className="px-4 py-3">19.0-21.0</td>
                        <td className="px-4 py-3">2.0-3.0</td>
                        <td className="px-4 py-3">3.0-4.0</td>
                        <td className="px-4 py-3">8×C min</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-gray-600"><strong>Special Features:</strong> Excellent sulfuric acid resistance | <strong>PREN:</strong> 28 | <strong>Applications:</strong> Chemical processing, pressure vessels</p>
              </div>

              {/* UNS S31803 Composition */}
              <div className="bg-purple-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold text-navy-primary mb-6">UNS S31803 (2205 Duplex) - Chemical Composition</h3>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-purple-600 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Element</th>
                        <th className="px-4 py-3 text-left">C</th>
                        <th className="px-4 py-3 text-left">Si</th>
                        <th className="px-4 py-3 text-left">Mn</th>
                        <th className="px-4 py-3 text-left">Ni</th>
                        <th className="px-4 py-3 text-left">P</th>
                        <th className="px-4 py-3 text-left">S</th>
                        <th className="px-4 py-3 text-left">Cr</th>
                        <th className="px-4 py-3 text-left">Mo</th>
                        <th className="px-4 py-3 text-left">N</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="px-4 py-3 font-semibold">Composition (%)</td>
                        <td className="px-4 py-3">max 0.03</td>
                        <td className="px-4 py-3">max 1.00</td>
                        <td className="px-4 py-3">max 2.00</td>
                        <td className="px-4 py-3">4.5-6.5</td>
                        <td className="px-4 py-3">max 0.030</td>
                        <td className="px-4 py-3">max 0.020</td>
                        <td className="px-4 py-3">21.0-23.0</td>
                        <td className="px-4 py-3">2.5-3.5</td>
                        <td className="px-4 py-3">0.08-0.20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-gray-600"><strong>Structure:</strong> Balanced duplex (50% austenite + 50% ferrite) | <strong>PREN:</strong> 35 | <strong>Applications:</strong> Standard duplex for oil & gas</p>
              </div>

              {/* UNS S32205 Composition */}
              <div className="bg-teal-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold text-navy-primary mb-6">UNS S32205 (Enhanced 2205) - Chemical Composition</h3>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-teal-600 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Element</th>
                        <th className="px-4 py-3 text-left">C</th>
                        <th className="px-4 py-3 text-left">Si</th>
                        <th className="px-4 py-3 text-left">Mn</th>
                        <th className="px-4 py-3 text-left">Ni</th>
                        <th className="px-4 py-3 text-left">P</th>
                        <th className="px-4 py-3 text-left">S</th>
                        <th className="px-4 py-3 text-left">Cr</th>
                        <th className="px-4 py-3 text-left">Mo</th>
                        <th className="px-4 py-3 text-left">N</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="px-4 py-3 font-semibold">Composition (%)</td>
                        <td className="px-4 py-3">max 0.030</td>
                        <td className="px-4 py-3">max 1.00</td>
                        <td className="px-4 py-3">max 2.00</td>
                        <td className="px-4 py-3">4.5-6.5</td>
                        <td className="px-4 py-3">max 0.030</td>
                        <td className="px-4 py-3">max 0.020</td>
                        <td className="px-4 py-3">22.0-23.0</td>
                        <td className="px-4 py-3">3.0-3.5</td>
                        <td className="px-4 py-3">0.14-0.20</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-gray-600"><strong>Enhancement:</strong> Improved mechanical properties over S31803 | <strong>PREN:</strong> 35 | <strong>Applications:</strong> Structural applications, pressure vessels</p>
              </div>

              {/* UNS S32550 Composition */}
              <div className="bg-orange-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold text-navy-primary mb-6">UNS S32550 (Super Duplex) - Chemical Composition</h3>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-orange-600 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Element</th>
                        <th className="px-4 py-3 text-left">C</th>
                        <th className="px-4 py-3 text-left">Si</th>
                        <th className="px-4 py-3 text-left">Mn</th>
                        <th className="px-4 py-3 text-left">Ni</th>
                        <th className="px-4 py-3 text-left">P</th>
                        <th className="px-4 py-3 text-left">S</th>
                        <th className="px-4 py-3 text-left">Cr</th>
                        <th className="px-4 py-3 text-left">Mo</th>
                        <th className="px-4 py-3 text-left">N</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="px-4 py-3 font-semibold">Composition (%)</td>
                        <td className="px-4 py-3">max 0.04</td>
                        <td className="px-4 py-3">max 1.00</td>
                        <td className="px-4 py-3">max 1.50</td>
                        <td className="px-4 py-3">4.5-6.5</td>
                        <td className="px-4 py-3">max 0.035</td>
                        <td className="px-4 py-3">max 0.030</td>
                        <td className="px-4 py-3">24.0-27.0</td>
                        <td className="px-4 py-3">2.9-3.9</td>
                        <td className="px-4 py-3">0.10-0.25</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-gray-600"><strong>Special Feature:</strong> Enhanced pitting resistance | <strong>PREN:</strong> 38 | <strong>Applications:</strong> Offshore, seawater environments</p>
              </div>

              {/* UNS S32760 (Zeron 100) Composition */}
              <div className="bg-indigo-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-semibold text-navy-primary mb-6">UNS S32760 (Zeron 100) - Chemical Composition</h3>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-indigo-600 text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Element</th>
                        <th className="px-4 py-3 text-left">C</th>
                        <th className="px-4 py-3 text-left">Si</th>
                        <th className="px-4 py-3 text-left">Mn</th>
                        <th className="px-4 py-3 text-left">Ni</th>
                        <th className="px-4 py-3 text-left">P</th>
                        <th className="px-4 py-3 text-left">S</th>
                        <th className="px-4 py-3 text-left">Cr</th>
                        <th className="px-4 py-3 text-left">Mo</th>
                        <th className="px-4 py-3 text-left">N</th>
                        <th className="px-4 py-3 text-left">W</th>
                        <th className="px-4 py-3 text-left">Cu</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-t">
                        <td className="px-4 py-3 font-semibold">Composition (%)</td>
                        <td className="px-4 py-3">max 0.030</td>
                        <td className="px-4 py-3">max 1.00</td>
                        <td className="px-4 py-3">max 1.00</td>
                        <td className="px-4 py-3">6.0-8.0</td>
                        <td className="px-4 py-3">max 0.030</td>
                        <td className="px-4 py-3">max 0.010</td>
                        <td className="px-4 py-3">24.0-26.0</td>
                        <td className="px-4 py-3">3.0-4.0</td>
                        <td className="px-4 py-3">0.20-0.30</td>
                        <td className="px-4 py-3">0.50-1.00</td>
                        <td className="px-4 py-3">0.50-1.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-sm text-gray-600"><strong>Ultra Performance:</strong> Contains W and Cu for enhanced properties | <strong>PREN:</strong> 42+ | <strong>Applications:</strong> Most demanding chloride environments</p>
              </div>

              {/* Specifications Summary */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-navy-primary mb-4">Available Sizes</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Thickness:</strong> 1mm to 50mm</li>
                    <li>• <strong>Width:</strong> 1000/1250/1500/2000/2500mm</li>
                    <li>• <strong>Length:</strong> 2000/2500/3000/6000mm</li>
                    <li>• <strong>Supply:</strong> Hot rolled & Cold rolled</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-navy-primary mb-4">Quality Standards</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Mill Test Certificate with every shipment</li>
                    <li>• Third-party inspection available</li>
                    <li>• Complete material traceability</li>
                    <li>• NACE MR0175 compliant grades available</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h4 className="text-xl font-semibold text-navy-primary mb-4">Manufacturing Excellence</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Premium manufacturers: Jindal, Outokumpu</li>
                    <li>• Optimized design for weight savings</li>
                    <li>• Attractive life cycle costs</li>
                    <li>• Durability with limited maintenance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Duplex Steel Grades */}
        <section className="py-16 bg-gray-50" data-testid="duplex-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="duplex-grades-title">
                Complete Duplex Steel Grades Comparison
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="duplex-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Grade</th>
                      <th className="px-6 py-4 text-left">UNS Number</th>
                      <th className="px-6 py-4 text-left">PREN*</th>
                      <th className="px-6 py-4 text-left">Cr Content</th>
                      <th className="px-6 py-4 text-left">Key Applications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">2304 (Lean Duplex)</td>
                      <td className="px-6 py-4">S32304</td>
                      <td className="px-6 py-4">25</td>
                      <td className="px-6 py-4">23%</td>
                      <td className="px-6 py-4">Water treatment, structural applications</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">2205 (Standard Duplex)</td>
                      <td className="px-6 py-4">S31803/S32205</td>
                      <td className="px-6 py-4">35</td>
                      <td className="px-6 py-4">22%</td>
                      <td className="px-6 py-4">Oil & gas, chemical processing</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">2507 (Super Duplex)</td>
                      <td className="px-6 py-4">S32750</td>
                      <td className="px-6 py-4">42</td>
                      <td className="px-6 py-4">25%</td>
                      <td className="px-6 py-4">Offshore, seawater applications</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">1.4410 (Super Duplex)</td>
                      <td className="px-6 py-4">S32750</td>
                      <td className="px-6 py-4">42</td>
                      <td className="px-6 py-4">25%</td>
                      <td className="px-6 py-4">Aggressive chloride environments</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Zeron 100 (Super Duplex)</td>
                      <td className="px-6 py-4">S32760</td>
                      <td className="px-6 py-4">42+</td>
                      <td className="px-6 py-4">25%</td>
                      <td className="px-6 py-4">Severe chloride environments</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">S32550 (Super Duplex)</td>
                      <td className="px-6 py-4">S32550</td>
                      <td className="px-6 py-4">38</td>
                      <td className="px-6 py-4">25%</td>
                      <td className="px-6 py-4">Enhanced pitting resistance</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Alloy 20</td>
                      <td className="px-6 py-4">N08020</td>
                      <td className="px-6 py-4">28</td>
                      <td className="px-6 py-4">20%</td>
                      <td className="px-6 py-4">Chemical processing, sulfuric acid</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-4">*PREN = Pitting Resistance Equivalent Number (Cr + 3.3Mo + 16N)</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-navy-primary text-white" data-testid="contact-cta-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6" data-testid="cta-title">
                Ready to Order Duplex Steel Plates?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our duplex steel specialists
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3" data-testid="contact-phone">
                  <Phone className="w-6 h-6 text-gold-primary" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-blue-100">+91 9819322576</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3" data-testid="contact-email">
                  <Mail className="w-6 h-6 text-gold-primary" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-blue-100">mamtasteeltraders@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3" data-testid="contact-location">
                  <MapPin className="w-6 h-6 text-gold-primary" />
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-blue-100">Mumbai, Maharashtra</p>
                  </div>
                </div>
              </div>
              <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-block" data-testid="cta-contact-button">
                Get Detailed Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}