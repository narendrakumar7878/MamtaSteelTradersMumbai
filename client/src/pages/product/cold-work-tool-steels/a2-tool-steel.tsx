import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Thermometer, Gauge, Factory, Settings } from "lucide-react";
import { Link } from "wouter";

export default function A2ToolSteel() {
  const specifications = [
    "ASTM A681 - Standard Specification for Tool Steels",
    "DIN 1.2363 - Cold Work Tool Steel Standard",
    "JIS SKD12 - Japanese Industrial Standard for Cold Work Tool Steel",
    "AISI A2 - Air Hardening Tool Steel Classification",
    "UNS T30102 - Unified Numbering System",
    "Available Forms: Round bars, flats, plates, blocks, squares",
    "Size Range: 6mm to 500mm diameter for round bars",
    "Length: Up to 6000mm as per customer requirements"
  ];

  const applications = [
    "Blanking and Forming Dies for Sheet Metal",
    "Punches and Piercing Tools",
    "Thread Rolling Dies and Tools",
    "Cutting Tools and Industrial Knives",
    "Cold Heading Dies and Punches",
    "Measuring Tools and Precision Gauges",
    "Wear Plates and Protective Liners",
    "Trimming and Shaving Dies",
    "Drawing Dies for Wire Production",
    "Master Hobs for Gear Manufacturing",
    "Broaches and Reamers",
    "Paper Cutting Machine Blades",
    "Wood Working Tools and Cutters"
  ];

  const features = [
    { icon: Shield, title: "Air Hardening", desc: "Hardens in air for minimal distortion and excellent dimensional stability during heat treatment" },
    { icon: TrendingUp, title: "Superior Toughness", desc: "Balanced combination of hardness and toughness for demanding cold work applications" },
    { icon: Award, title: "Excellent Machinability", desc: "Good machinability in annealed condition enabling complex tooling manufacture" },
    { icon: CheckCircle, title: "Versatile Performance", desc: "Suitable for wide range of cold work applications with consistent results" },
    { icon: Thermometer, title: "Heat Treatment Stability", desc: "Excellent dimensional stability during heat treatment with minimal warping" },
    { icon: Gauge, title: "Precision Grade", desc: "Available in precision ground finish for high accuracy applications" }
  ];

  const properties = [
    {
      property: "Carbon Content",
      value: "0.95-1.05%",
      description: "High carbon for excellent hardness and wear resistance"
    },
    {
      property: "Chromium Content", 
      value: "4.75-5.50%",
      description: "Provides air hardening capability and corrosion resistance"
    },
    {
      property: "Hardness (HRC)",
      value: "57-62",
      description: "After proper heat treatment and tempering"
    },
    {
      property: "Working Hardness",
      value: "58-60 HRC",
      description: "Typical working hardness range for tooling applications"
    },
    {
      property: "Annealed Hardness",
      value: "≤250 HB",
      description: "Brinell hardness in annealed condition for machining"
    },
    {
      property: "Density",
      value: "7.86 g/cm³",
      description: "Material density at room temperature"
    }
  ];

  const heatTreatment = [
    {
      process: "Annealing",
      temperature: "800-840°C",
      procedure: "Heat slowly to temperature, hold for sufficient time, then cool slowly in furnace at 25°C/hour max. Resulting hardness ≤250 HB."
    },
    {
      process: "Hardening",
      temperature: "955-980°C",
      procedure: "Preheat at 650-750°C, optional second preheat at 800-850°C. Heat uniformly to austenitizing temperature. Air cool (primary advantage of A2). Oil quench only for very thick sections >75mm."
    },
    {
      process: "Tempering",
      temperature: "150-500°C",
      procedure: "Temper immediately after hardening. 150-200°C for maximum hardness (60-62 HRC), 300-400°C for balanced hardness/toughness (55-58 HRC). Hold for 2+ hours minimum."
    }
  ];

  return (
    <>
      <ProductSEO
        title="A2 Tool Steel - Cold Work Tool Steel Supplier Mumbai | AISI A2, DIN 1.2363"
        description="Premium A2 air hardening tool steel supplier in Mumbai. ASTM A681, DIN 1.2363, JIS SKD12 certified. Best for blanking dies, punches, cutting tools. Stockist, dealer, trader with competitive prices. Heat treated A2 steel available."
        keywords="A2 tool steel, AISI A2 steel, DIN 1.2363, cold work tool steel, air hardening steel, blanking dies, tool steel supplier Mumbai, A2 steel stockist, tool steel dealer, A2 round bars, tool steel trader Mumbai, precision tool steel"
        category="Cold Work Tool Steels"
        productName="A2 Tool Steel - Air Hardening Cold Work Tool Steel"
        specifications={specifications}
        canonicalUrl="/product/cold-work-tool-steels/a2-tool-steel"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">A2 Tool Steel</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium A2 Tool Steel Supplier Mumbai
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                Air hardening cold work tool steel stockist, dealer & trader in Mumbai. ASTM A681, DIN 1.2363 certified for blanking dies, punches, cutting tools & precision tooling applications.
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
                    About A2 Tool Steel
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong>A2 Tool Steel</strong> is a versatile air-hardening cold work tool steel that offers an excellent balance of hardness, toughness, and dimensional stability. This premium grade steel is ideal for applications requiring complex shapes with minimal distortion during heat treatment.
                    </p>
                    <p>
                      As authorized <strong>A2 steel stockists, suppliers, dealers and traders in Mumbai</strong>, we provide high-quality A2 tool steel in various forms including round bars, flats, plates, and custom sizes. Our A2 steel meets international standards including ASTM A681, DIN 1.2363, and JIS SKD12.
                    </p>
                    <p>
                      A2 tool steel is particularly valued for its air hardening capability, which eliminates the need for oil or water quenching, making it perfect for intricate tooling applications where dimensional accuracy is critical.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Key Advantages</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Air hardening eliminates quench cracking risks</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Excellent dimensional stability during heat treatment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Good machinability in annealed condition</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>High wear resistance and edge retention</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Suitable for complex tooling shapes</span>
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
              Why Choose Our A2 Tool Steel?
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
                A2 Tool Steel Properties
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
                A2 Heat Treatment Guide
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
                  Important Heat Treatment Notes
                </h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• A2 steel is designed for air hardening - this eliminates quench cracking and distortion risks</li>
                  <li>• Use controlled atmosphere or neutral salt bath to prevent decarburization during heat treatment</li>
                  <li>• For sections &gt;75mm thickness, oil quenching may be used but air cooling is preferred</li>
                  <li>• Always temper immediately after hardening to prevent delayed cracking</li>
                  <li>• Stress relieving at 600-650°C after rough machining helps dimensional stability</li>
                  <li>• Double tempering may be beneficial for maximum toughness in critical applications</li>
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
                A2 Chemical Composition
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="composition-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Element</th>
                      <th className="px-6 py-4 text-left">Composition (%)</th>
                      <th className="px-6 py-4 text-left">Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Carbon (C)</td>
                      <td className="px-6 py-4">0.95-1.05</td>
                      <td className="px-6 py-4">Primary hardening element for high hardness and wear resistance</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Chromium (Cr)</td>
                      <td className="px-6 py-4">4.75-5.50</td>
                      <td className="px-6 py-4">Provides air hardening capability and corrosion resistance</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Molybdenum (Mo)</td>
                      <td className="px-6 py-4">0.90-1.40</td>
                      <td className="px-6 py-4">Increases toughness, hardenability and high temperature strength</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Vanadium (V)</td>
                      <td className="px-6 py-4">0.15-0.50</td>
                      <td className="px-6 py-4">Grain refinement, increased wear resistance and cutting edge retention</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Manganese (Mn)</td>
                      <td className="px-6 py-4">0.40-1.00</td>
                      <td className="px-6 py-4">Deoxidizer and improves hardenability</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Silicon (Si)</td>
                      <td className="px-6 py-4">0.10-0.50</td>
                      <td className="px-6 py-4">Deoxidizer and strengthens the steel matrix</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Phosphorus (P)</td>
                      <td className="px-6 py-4">≤ 0.030</td>
                      <td className="px-6 py-4">Controlled as impurity to maintain toughness</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Sulfur (S)</td>
                      <td className="px-6 py-4">≤ 0.030</td>
                      <td className="px-6 py-4">Controlled as impurity to prevent brittleness</td>
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
                Ready to Order A2 Tool Steel?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our A2 tool steel specialists
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