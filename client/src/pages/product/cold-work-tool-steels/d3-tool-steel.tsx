import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Settings, Thermometer, Zap, Gauge } from "lucide-react";
import { Link } from "wouter";

export default function D3ToolSteel() {
  const specifications = [
    "ASTM A681 - Standard Specification for Tool Steels",
    "DIN 1.2080 (X210Cr12) - German Standard for Cold Work Tool Steel",
    "JIS SKD1 - Japanese Industrial Standard for Cold Work Tool Steel",
    "AISI D3 - American Iron and Steel Institute Classification",
    "UNS T30403 - Unified Numbering System",
    "AFNOR Z200C12 - French Standard",
    "BS BD3 - British Standard Tool Steel",
    "Available Forms: Round bars, flats, squares, plates, blocks",
    "Size Range: 6mm to 500mm diameter, thickness up to 200mm",
    "Surface Condition: Black, turned, ground",
    "Delivery Condition: Annealed (≤255 HB)"
  ];

  const applications = [
    "Blanking and Piercing Dies",
    "Drawing Dies for Deep Drawing",
    "Thread Rolling Dies",
    "Cold Heading Dies",
    "Embossing Dies and Tools",
    "Forming Dies for Sheet Metal",
    "Cutting Tools and Knives",
    "Wire Drawing Dies"
  ];

  const features = [
    { icon: Shield, title: "Exceptional Wear Resistance", desc: "Ultra-high carbon content provides maximum wear resistance for abrasive applications" },
    { icon: TrendingUp, title: "High Compressive Strength", desc: "Superior compressive strength handles extreme loads without deformation" },
    { icon: Award, title: "Deep Hardening Capability", desc: "Good through-hardening capability; consult for large sections" },
    { icon: CheckCircle, title: "Dimensional Stability", desc: "Minimal distortion during heat treatment with proper processing" },
    { icon: Thermometer, title: "Heat Treatment Responsiveness", desc: "Excellent response to heat treatment with predictable hardening" },
    { icon: Zap, title: "Extended Tool Life", desc: "Longest tool life in severe wear applications compared to other grades" }
  ];

  const properties = [
    {
      property: "Carbon Content",
      value: "2.00-2.35%",
      description: "Ultra-high carbon for maximum hardness and wear resistance"
    },
    {
      property: "Chromium Content",
      value: "11.00-13.50%",
      description: "Forms extensive carbide network for wear resistance"
    },
    {
      property: "Hardness (HRC)",
      value: "58-64",
      description: "Achievable hardness range after proper heat treatment"
    },
    {
      property: "Working Hardness",
      value: "60-62 HRC",
      description: "Optimal working hardness for most applications"
    },
    {
      property: "Compressive Strength",
      value: "2500-3000 MPa",
      description: "High compressive strength at working hardness"
    },
    {
      property: "Density",
      value: "7.7 g/cm³",
      description: "Typical density at room temperature"
    },
    {
      property: "Thermal Conductivity",
      value: "20 W/m·K",
      description: "At room temperature (varies with temperature)"
    },
    {
      property: "Annealed Hardness",
      value: "≤255 HB",
      description: "Maximum hardness in annealed condition for machinability"
    }
  ];

  return (
    <>
      <ProductSEO
        title="D3 Tool Steel - AISI D3 High Carbon Cold Work Steel Supplier Mumbai | DIN 1.2080"
        description="Premium D3 tool steel supplier in Mumbai. Ultra-high carbon cold work steel with superior wear resistance. ASTM A681/DIN 1.2080 certified."
        keywords="D3 tool steel, AISI D3 steel, DIN 1.2080, X210Cr12, cold work tool steel, high carbon tool steel, blanking dies, thread rolling dies, D3 steel supplier Mumbai, tool steel stockist, D3 round bars, D3 flats, tool steel dealer Mumbai, precision tool steel"
        category="Cold Work Tool Steels"
        productName="D3 Tool Steel - AISI D3 High Carbon Cold Work Steel"
        specifications={specifications}
        canonicalUrl="/product/cold-work-tool-steels/d3-tool-steel"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">D3 Tool Steel</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium D3 Tool Steel - AISI D3
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                Ultra-high carbon cold work tool steel with exceptional wear resistance. Perfect for blanking dies, thread rolling dies, and extreme wear applications.
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

        {/* Overview Section */}
        <section className="py-16 bg-white" data-testid="overview-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-6" data-testid="overview-title">
                    About D3 Tool Steel
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong>D3 Tool Steel</strong> is an ultra-high carbon, high chromium cold work tool steel renowned for exceptional wear resistance and compressive strength. With carbon content up to 2.35%, D3 offers the highest wear resistance among standard tool steels, making it ideal for extreme wear applications.
                    </p>
                    <p>
                      As authorized <strong>D3 steel stockists, suppliers, dealers and traders in Mumbai</strong>, we provide high-quality D3 tool steel conforming to international standards including ASTM A681, DIN 1.2080 (X210Cr12), JIS SKD1, and UNS T30403. Available in round bars, flats, squares, plates, and custom sizes.
                    </p>
                    <p>
                      D3 tool steel combines maximum wear resistance with deep hardening capability, making it the preferred choice for blanking dies, thread rolling dies, and applications requiring extended tool life under severe abrasive conditions.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Key Advantages of D3 Steel</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Maximum wear resistance due to ultra-high carbon content</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Exceptional compressive strength for heavy-duty applications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Good through-hardening capability (consult for large sections)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Superior edge retention in cutting applications</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Excellent machinability in annealed condition</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Excellent dimensional stability after heat treatment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-16 bg-gray-50" data-testid="features-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="features-title">
              Why Choose Our D3 Tool Steel?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300" data-testid={`feature-${index}`}>
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
                D3 Tool Steel Properties
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Chemical Composition */}
        <section className="py-16 bg-gray-50" data-testid="composition-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="composition-title">
                D3 Chemical Composition
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
                      <td className="px-6 py-4">2.00-2.35</td>
                      <td className="px-6 py-4">Ultra-high carbon content for maximum hardness and wear resistance</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Chromium (Cr)</td>
                      <td className="px-6 py-4">11.00-13.50</td>
                      <td className="px-6 py-4">Forms extensive chromium carbide network for wear resistance</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Silicon (Si)</td>
                      <td className="px-6 py-4">0.60 Max</td>
                      <td className="px-6 py-4">Deoxidizer, improves strength and hot workability</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Manganese (Mn)</td>
                      <td className="px-6 py-4">0.60 Max</td>
                      <td className="px-6 py-4">Enhances hardenability and hot workability</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Phosphorus (P)</td>
                      <td className="px-6 py-4">0.03 Max</td>
                      <td className="px-6 py-4">Controlled for improved toughness and ductility</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Sulfur (S)</td>
                      <td className="px-6 py-4">0.03 Max</td>
                      <td className="px-6 py-4">Controlled for improved toughness and machinability</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Nickel (Ni)</td>
                      <td className="px-6 py-4">0.30 Max</td>
                      <td className="px-6 py-4">Contributes to toughness and corrosion resistance</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Copper (Cu)</td>
                      <td className="px-6 py-4">0.25 Max</td>
                      <td className="px-6 py-4">Residual element, controlled for quality</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Heat Treatment Guide */}
        <section className="py-16 bg-white" data-testid="heat-treatment-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="heat-treatment-title">
                D3 Tool Steel Heat Treatment Guide
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6 flex items-center">
                    <Thermometer className="w-6 h-6 mr-3 text-gold-primary" />
                    Heat Treatment Steps
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-navy-primary mb-2">1. Annealing</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Heat to 800-840°C uniformly</li>
                        <li>• Hold for 2-4 hours depending on section size</li>
                        <li>• Cool slowly in furnace to ≤255 HB</li>
                        <li>• Essential for machining and forming operations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-navy-primary mb-2">2. Stress Relieving</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Heat to 650-700°C after rough machining</li>
                        <li>• Hold for 1-2 hours</li>
                        <li>• Cool slowly to room temperature</li>
                        <li>• Improves dimensional stability</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-navy-primary mb-2">3. Hardening</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Preheat 1: 650-750°C, hold 30-60 min</li>
                        <li>• Preheat 2: 800-850°C, hold 15-30 min</li>
                        <li>• Austenitize: 950-1000°C, soak 15-30 min</li>
                        <li>• Air cool or oil quench (thin sections only)</li>
                        <li>• Tempering: Immediately after reaching room temperature</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6 flex items-center">
                    <Gauge className="w-6 h-6 mr-3 text-gold-primary" />
                    Tempering Chart
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-navy-primary text-white">
                        <tr>
                          <th className="px-4 py-2 text-left">Temperature</th>
                          <th className="px-4 py-2 text-left">Hardness</th>
                          <th className="px-4 py-2 text-left">Application</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-2 font-medium">150-200°C</td>
                          <td className="px-4 py-2">60-62 HRC</td>
                          <td className="px-4 py-2">Cutting tools, gauges</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-medium">200-250°C</td>
                          <td className="px-4 py-2">58-60 HRC</td>
                          <td className="px-4 py-2">Blanking dies, thread rolling</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-medium">250-300°C</td>
                          <td className="px-4 py-2">56-58 HRC</td>
                          <td className="px-4 py-2">Drawing dies, forming tools</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-medium">300-400°C</td>
                          <td className="px-4 py-2">52-56 HRC</td>
                          <td className="px-4 py-2">Heavy duty applications</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-navy-primary mb-3 flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-gold-primary" />
                  Important Heat Treatment Notes for D3
                </h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• D3 requires careful heat treatment due to ultra-high carbon content</li>
                  <li>• Use controlled atmosphere or vacuum furnace to prevent decarburization</li>
                  <li>• Double tempering is mandatory for dimensional stability</li>
                  <li>• Air cooling preferred - oil quench only for very thin sections</li>
                  <li>• Preheating is essential to prevent cracking during heating</li>
                  <li>• Sub-zero treatment (-80°C) can increase wear resistance further</li>
                  <li>• Avoid overheating as it leads to excessive grain growth</li>
                  <li>• Always verify hardness after heat treatment</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-navy-primary text-white" data-testid="contact-cta-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="cta-title">
                Ready to Order D3 Tool Steel?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our D3 tool steel specialists
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