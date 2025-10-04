import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Thermometer, Gauge, Factory, Settings } from "lucide-react";
import { Link } from "wouter";

export default function D2ToolSteel() {
  const specifications = [
    "ASTM A681 - Standard Specification for Tool Steels",
    "DIN 1.2379 (X153CrMoV12) - European Standard",
    "EN X153CrMoV12 - European Norm",
    "JIS SKD11 - Japanese Industrial Standard",
    "AISI D2 / HCHCR-D2 - High Carbon High Chromium Die Steel",
    "UNS T30402 - Unified Numbering System",
    "AFNOR Z160CDV12 - French Standard",
    "B.S. BD 2 - British Standard",
    "Available Forms: Round bars, flats, squares, plates, blocks",
    "Size Range: Round 20-450mm, Square 50-155mm, Flats 20-150mm thickness"
  ];

  const applications = [
    "Stamping and Blanking Dies for Stainless Steel",
    "Cold Forming Dies and Tools",
    "Thread Rolling Dies and Tools",
    "Drawing Dies for Wire and Tube Production",
    "Slitting Knives and Shear Blades",
    "Forming Rolls and Punches",
    "Deep Drawing Dies and Cupping Dies",
    "Trimmer Dies and Cutting Tools",
    "Cold Extrusion Dies",
    "Broaches and Plug Gauges",
    "Circular Cutters for Cold Rolled Strip",
    "Master Hobs for Cold Hobbing",
    "Plastic Moulds and Cut Moulds",
    "Brick and Tile Mould Liners",
    "Tyre Shredders and Chipper Knives",
    "Paper Cutting Machine Blades"
  ];

  const features = [
    { icon: Shield, title: "Superior Wear Resistance", desc: "Exceptional abrasion resistance due to high chromium carbide content and vanadium addition" },
    { icon: TrendingUp, title: "Deep Hardening Capability", desc: "Through-hardening capability for large sections with excellent core properties" },
    { icon: Award, title: "Dimensional Stability", desc: "Minimal distortion during heat treatment with excellent size holding properties" },
    { icon: CheckCircle, title: "Good Machinability", desc: "Good machinability in annealed condition for complex tooling manufacture" },
    { icon: Thermometer, title: "Corrosion Resistance", desc: "Better corrosion resistance when polished compared to other tool steels" },
    { icon: Gauge, title: "High Toughness", desc: "Superior toughness properties due to molybdenum and vanadium content" }
  ];

  const properties = [
    {
      property: "Carbon Content",
      value: "1.40-1.60%",
      description: "High carbon for maximum hardness and wear resistance"
    },
    {
      property: "Chromium Content",
      value: "11.00-13.00%",
      description: "Forms hard wear-resistant carbides and provides corrosion resistance"
    },
    {
      property: "Hardness (HRC)",
      value: "58-62",
      description: "After proper heat treatment and tempering"
    },
    {
      property: "Working Hardness",
      value: "58-62 HRC",
      description: "Typical working hardness range for tooling applications"
    },
    {
      property: "Annealed Hardness",
      value: "≤255 HB",
      description: "Brinell hardness in annealed condition for machining"
    },
    {
      property: "Vanadium Content",
      value: "0.15-0.35%",
      description: "Provides grain refinement and enhanced wear resistance"
    }
  ];

  const heatTreatment = [
    {
      process: "Annealing",
      temperature: "800-840°C",
      procedure: "Heat slowly to temperature, hold until uniformly heated (20-30 min after equalization), then cool slowly in furnace at ≤25°C/hour. Resulting hardness ≤255 HB for optimal machinability."
    },
    {
      process: "Hardening",
      temperature: "980-1040°C",
      procedure: "Preheat at 650-750°C and 800-850°C. Heat uniformly to austenitizing temperature, soak 20-30 min after equalization. Air cool or gas quench preferred. Use controlled atmosphere to prevent decarburization."
    },
    {
      process: "Tempering",
      temperature: "150-520°C",
      procedure: "Double temper immediately after hardening (mandatory for tools). 150-200°C for maximum hardness (60-62 HRC), 450-520°C for balanced properties (54-58 HRC). Hold for 2+ hours each temper cycle."
    }
  ];

  return (
    <>
      <ProductSEO
        title="D2 Tool Steel - HCHCR-D2 High Carbon High Chromium Steel Supplier Mumbai | DIN 1.2379"
        description="Premium HCHCR-D2 tool steel supplier in Mumbai. High carbon high chromium die steel with superior wear resistance. ASTM A681, DIN 1.2379, SKD11 certified. Stockist, dealer, trader of D2 round bars, flats, squares for stamping dies, blanking tools, cold forming applications."
        keywords="D2 tool steel, HCHCR-D2 steel, DIN 1.2379, X153CrMoV12, cold work tool steel, high carbon high chromium steel, stamping dies, D2 steel supplier Mumbai, tool steel stockist, D2 round bars, D2 flats, KNL D2, tool steel dealer Mumbai, precision tool steel"
        category="Cold Work Tool Steels"
        productName="D2 Tool Steel - HCHCR-D2 High Carbon High Chromium Die Steel"
        specifications={specifications}
        canonicalUrl="/product/cold-work-tool-steels/d2-tool-steel"
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
              <Link href="/product/cold-work-tool-steels" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-cold-work">Cold Work Tool Steels</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">D2 Tool Steel</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium HCHCR-D2 Tool Steel Supplier Mumbai
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High Carbon High Chromium Die Steel stockist, dealer & trader in Mumbai. DIN 1.2379, ASTM A681 certified with superior wear resistance for stamping dies, blanking tools & long-run tooling applications.
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

        {/* Product Overview */}
        <section className="py-16 bg-white" data-testid="overview-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-6" data-testid="overview-title">
                    About HCHCR-D2 Tool Steel
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong>HCHCR-D2 Tool Steel</strong> is a premium High Carbon High Chromium Cold Work Tool Steel with exceptional wear resistance and toughness. The controlled Vanadium content provides superior properties and grain refinement, making it ideal for long-run tooling applications.
                    </p>
                    <p>
                      As authorized <strong>D2 steel stockists, suppliers, dealers and traders in Mumbai</strong>, we provide high-quality HCHCR-D2 tool steel conforming to international standards including ASTM A681, DIN 1.2379 (X153CrMoV12), JIS SKD11, and UNS T30402. Available in round bars, flats, squares, plates, and custom sizes.
                    </p>
                    <p>
                      D2 tool steel consolidates maximum wear resistance, great durability, exceptional front line maintenance and treating resistance. It can be nitrided after special heat treatment for enhanced surface properties.
                    </p>
                    <p>
                      <strong>D2 is superior to D3 steel</strong> due to higher alloy content and better balanced chemistry, making it the preferred choice for demanding applications requiring both wear resistance and toughness.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Key Advantages of HCHCR-D2</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Maximum wear resistance with exceptional durability</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Superior toughness due to controlled vanadium content</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Excellent front line maintenance properties</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Can be nitrided for enhanced surface properties</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Air hardening with low distortion characteristics</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Suitable for long production runs</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-16 bg-white" data-testid="features-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="features-title">
              Why Choose Our HCHCR-D2 Tool Steel?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Material Properties */}
        <section className="py-16 bg-gray-50" data-testid="properties-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="properties-title">
                HCHCR-D2 Tool Steel Properties
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {properties.map((prop, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-gold-primary" data-testid={`property-${index}`}>
                    <h3 className="text-lg font-semibold text-navy-primary mb-2">{prop.property}</h3>
                    <div className="text-2xl font-bold text-gold-primary mb-2">{prop.value}</div>
                    <p className="text-gray-600 text-sm">{prop.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-16 bg-white" data-testid="specifications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="specifications-title">
                Technical Specifications
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-gray-50 p-8 rounded-lg" data-testid="specifications-standards">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Standards & Forms</h3>
                  <ul className="space-y-3">
                    {specifications.map((spec, index) => (
                      <li key={index} className="flex items-start" data-testid={`spec-${index}`}>
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg" data-testid="specifications-applications">
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

        {/* Heat Treatment Guide */}
        <section className="py-16 bg-gray-50" data-testid="heat-treatment-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="heat-treatment-title">
                HCHCR-D2 Heat Treatment Guide
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {heatTreatment.map((treatment, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-gold-primary" data-testid={`heat-treatment-${index}`}>
                    <div className="flex items-center mb-4">
                      <Thermometer className="w-8 h-8 text-gold-primary mr-3" />
                      <h3 className="text-xl font-semibold text-navy-primary">{treatment.process}</h3>
                    </div>
                    <div className="mb-3">
                      <span className="text-sm font-medium text-gray-600">Temperature:</span>
                      <div className="text-lg font-bold text-gold-primary">{treatment.temperature}</div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{treatment.procedure}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h4 className="text-lg font-semibold text-navy-primary mb-3 flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-gold-primary" />
                  Important Heat Treatment Notes for HCHCR-D2
                </h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• HCHCR-D2 requires careful heat treatment due to high alloy content</li>
                  <li>• Use controlled atmosphere or vacuum furnace to prevent decarburization</li>
                  <li>• Double tempering is mandatory for tools to ensure dimensional stability</li>
                  <li>• Air cooling or gas quenching preferred - oil quench only with caution for very thick sections</li>
                  <li>• Sub-zero treatment (-80°C to -196°C) optional for maximum wear resistance</li>
                  <li>• Stress relieving at 650-700°C after rough machining improves dimensional stability</li>
                  <li>• Nitriding after heat treatment can enhance surface hardness and wear resistance</li>
                  <li>• Always verify hardness after heat treatment to ensure proper processing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Chemical Composition */}
        <section className="py-16 bg-gray-50" data-testid="composition-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="composition-title">
                HCHCR-D2 Chemical Composition
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="composition-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Element</th>
                      <th className="px-6 py-4 text-left">Content (%)</th>
                      <th className="px-6 py-4 text-left">Purpose & Function</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Carbon (C)</td>
                      <td className="px-6 py-4">1.40 – 1.60</td>
                      <td className="px-6 py-4">Primary hardening element for maximum hardness and wear resistance</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Chromium (Cr)</td>
                      <td className="px-6 py-4">11.00 – 13.00</td>
                      <td className="px-6 py-4">Forms hard wear-resistant carbides and provides corrosion resistance</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Molybdenum (Mo)</td>
                      <td className="px-6 py-4">0.70 – 1.20</td>
                      <td className="px-6 py-4">Increases hardenability, toughness and high temperature strength</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Vanadium (V)</td>
                      <td className="px-6 py-4">0.15 – 0.35</td>
                      <td className="px-6 py-4">Refines grain structure, enhances wear resistance and cutting edge retention</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Manganese (Mn)</td>
                      <td className="px-6 py-4">0.20 – 0.60</td>
                      <td className="px-6 py-4">Deoxidizer, improves hardenability and hot workability</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Silicon (Si)</td>
                      <td className="px-6 py-4">0.10 – 0.60</td>
                      <td className="px-6 py-4">Deoxidizer and strengthens the steel matrix</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Phosphorus (P)</td>
                      <td className="px-6 py-4">0.030 Max</td>
                      <td className="px-6 py-4">Controlled as impurity to maintain toughness</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Sulfur (S)</td>
                      <td className="px-6 py-4">0.030 Max</td>
                      <td className="px-6 py-4">Controlled as impurity to prevent brittleness and hot shortness</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Nickel (Ni)</td>
                      <td className="px-6 py-4">0.30 Max</td>
                      <td className="px-6 py-4">Improves toughness and impact resistance</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Copper (Cu)</td>
                      <td className="px-6 py-4">0.25 Max</td>
                      <td className="px-6 py-4">Residual element with minor contribution to strength</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-navy-primary text-white" data-testid="contact-cta-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="cta-title">
                Ready to Order D2 Tool Steel?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our D2 tool steel specialists
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