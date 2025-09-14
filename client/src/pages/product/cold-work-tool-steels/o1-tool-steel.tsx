import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Settings, Thermometer, Zap, Gauge, Wrench, Target } from "lucide-react";
import { Link } from "wouter";

export default function O1ToolSteel() {
  const specifications = [
    "ASTM A681 - Standard Specification for Tool Steels",
    "DIN 1.2510 (100MnCrW4) - German Standard for Oil Hardening Tool Steel",
    "JIS SKS3 - Japanese Industrial Standard for Oil Hardening Tool Steel",
    "AISI O1 - Oil Hardening Tool Steel Classification",
    "UNS T31501 - Unified Numbering System",
    "BS BO1 - British Standard Oil Hardening Tool Steel",
    "BS O1 - British Standard Tool Steel",
    "Available Forms: Round bars, flats, squares, plates, sheets",
    "Size Range: 3mm to 300mm diameter, thickness up to 100mm",
    "Surface Condition: Black, turned, ground",
    "Delivery Condition: Annealed (≤207 HB)"
  ];

  const applications = [
    "Hand Tools and Cutting Tools",
    "Knives and Blades",
    "Woodworking Tools",
    "Small Punches and Dies",
    "Taps and Reamers",
    "Files and Scrapers",
    "Measuring Tools and Gauges",
    "Springs and Clips"
  ];

  const features = [
    { icon: Shield, title: "Excellent Machinability", desc: "Superior machinability in annealed condition enables complex geometries" },
    { icon: TrendingUp, title: "Oil Hardening Capability", desc: "Hardens uniformly in oil with minimal distortion and excellent dimensional control" },
    { icon: Award, title: "Sharp Edge Retention", desc: "Exceptional ability to achieve and maintain very sharp cutting edges" },
    { icon: CheckCircle, title: "Cost Effective Solution", desc: "Economical choice offering excellent performance for general tooling" },
    { icon: Wrench, title: "Easy Heat Treatment", desc: "Simple heat treatment process with predictable results" },
    { icon: Target, title: "Versatile Applications", desc: "Suitable for wide range of hand tools and cutting applications" }
  ];

  const properties = [
    {
      property: "Carbon Content",
      value: "0.85-1.00%",
      description: "High carbon content for excellent hardness and edge retention"
    },
    {
      property: "Chromium Content",
      value: "0.40-0.60%",
      description: "Improves hardenability and wear resistance"
    },
    {
      property: "Hardness (HRC)",
      value: "62-65",
      description: "Maximum achievable hardness after proper heat treatment"
    },
    {
      property: "Working Hardness",
      value: "58-62 HRC",
      description: "Optimal working hardness for most tooling applications"
    },
    {
      property: "Tungsten Content",
      value: "0.40-0.60%",
      description: "Forms tungsten carbides for enhanced wear resistance"
    },
    {
      property: "Annealed Hardness",
      value: "≤207 HB",
      description: "Maximum hardness in annealed condition for easy machining"
    },
    {
      property: "Density",
      value: "7.85 g/cm³",
      description: "Typical density at room temperature"
    },
    {
      property: "Thermal Conductivity",
      value: "25 W/m·K",
      description: "At room temperature (varies with temperature)"
    }
  ];

  return (
    <>
      <ProductSEO
        title="O1 Tool Steel - AISI O1 Oil Hardening Cold Work Steel Supplier Mumbai | DIN 1.2510"
        description="Premium O1 tool steel supplier in Mumbai. Oil hardening cold work steel with excellent machinability. ASTM A681/DIN 1.2510 certified. O1 round bars for hand tools."
        keywords="O1 tool steel, AISI O1 steel, DIN 1.2510, 100MnCrW4, oil hardening tool steel, cold work tool steel, hand tools, cutting tools, O1 steel supplier Mumbai, tool steel stockist, O1 round bars, O1 flats, tool steel dealer Mumbai, precision tool steel"
        category="Cold Work Tool Steels"
        productName="O1 Tool Steel - AISI O1 Oil Hardening Cold Work Steel"
        specifications={specifications}
        canonicalUrl="/product/cold-work-tool-steels/o1-tool-steel"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">O1 Tool Steel</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium O1 Tool Steel - AISI O1
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                Oil hardening cold work tool steel with superior machinability and edge retention. Perfect for hand tools, cutting tools, and precision applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-get-quote">
                  Get Quote Now
                </Link>
                <a href="tel:+919876543210" className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-call-now">
                  Call Now: +91 98765 43210
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
                    About O1 Tool Steel
                  </h2>
                  <div className="space-y-4 text-gray-700 leading-relaxed">
                    <p>
                      <strong>O1 Tool Steel</strong> is a popular oil hardening cold work tool steel known for excellent machinability, sharp edge retention, and cost-effective performance. With balanced carbon, chromium, and tungsten content, O1 provides superior cutting ability and dimensional stability during heat treatment.
                    </p>
                    <p>
                      As authorized <strong>O1 steel stockists, suppliers, dealers and traders in Mumbai</strong>, we provide high-quality O1 tool steel conforming to international standards including ASTM A681, DIN 1.2510 (100MnCrW4), JIS SKS3, and UNS T31501. Available in round bars, flats, squares, plates, and custom sizes.
                    </p>
                    <p>
                      O1 tool steel combines excellent machinability with reliable performance, making it the preferred choice for hand tools, cutting tools, knives, woodworking tools, and general precision applications requiring sharp edges.
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Key Advantages of O1 Steel</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Superior machinability in annealed condition</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Excellent edge retention and sharpness capability</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Oil hardening with minimal distortion</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Cost-effective solution for general tooling</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Simple and predictable heat treatment</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span>Versatile for wide range of applications</span>
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
              Why Choose Our O1 Tool Steel?
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
                O1 Tool Steel Properties
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
                O1 Chemical Composition
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
                      <td className="px-6 py-4">0.85-1.00</td>
                      <td className="px-6 py-4">Primary hardening element for excellent hardness and edge retention</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Chromium (Cr)</td>
                      <td className="px-6 py-4">0.40-0.60</td>
                      <td className="px-6 py-4">Improves hardenability and wear resistance</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Tungsten (W)</td>
                      <td className="px-6 py-4">0.40-0.60</td>
                      <td className="px-6 py-4">Forms tungsten carbides for enhanced wear resistance</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Manganese (Mn)</td>
                      <td className="px-6 py-4">1.00-1.40</td>
                      <td className="px-6 py-4">Enhances hardenability and deoxidation during melting</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Silicon (Si)</td>
                      <td className="px-6 py-4">0.30 Max</td>
                      <td className="px-6 py-4">Deoxidizer and improves steel cleanliness</td>
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
                      <td className="px-6 py-4 font-semibold">Vanadium (V)</td>
                      <td className="px-6 py-4">0.30 Max</td>
                      <td className="px-6 py-4">Grain refinement and carbide formation</td>
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
                O1 Tool Steel Heat Treatment Guide
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
                        <li>• Heat to 760-790°C uniformly</li>
                        <li>• Hold for 1-2 hours depending on section size</li>
                        <li>• Cool slowly in furnace to ≤207 HB</li>
                        <li>• Provides excellent machinability</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-navy-primary mb-2">2. Stress Relieving</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Heat to 650-680°C after rough machining</li>
                        <li>• Hold for 1-2 hours</li>
                        <li>• Cool slowly to room temperature</li>
                        <li>• Reduces machining stresses</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-navy-primary mb-2">3. Hardening</h4>
                      <ul className="text-gray-700 space-y-1 text-sm">
                        <li>• Preheat: 650-700°C, hold 15-30 min</li>
                        <li>• Austenitize: 760-790°C, soak 10-20 min</li>
                        <li>• Oil quench (preferred) or air cool</li>
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
                          <td className="px-4 py-2 font-medium">175-200°C</td>
                          <td className="px-4 py-2">60-62 HRC</td>
                          <td className="px-4 py-2">Files, cutting tools</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-medium">200-250°C</td>
                          <td className="px-4 py-2">58-60 HRC</td>
                          <td className="px-4 py-2">Knives, hand tools</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-medium">250-300°C</td>
                          <td className="px-4 py-2">56-58 HRC</td>
                          <td className="px-4 py-2">Woodworking tools</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 font-medium">300-400°C</td>
                          <td className="px-4 py-2">52-56 HRC</td>
                          <td className="px-4 py-2">Springs, measuring tools</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-navy-primary mb-3 flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-gold-primary" />
                  Important Heat Treatment Notes for O1
                </h4>
                <ul className="text-gray-700 space-y-2 text-sm">
                  <li>• O1 offers simple heat treatment with predictable results</li>
                  <li>• Oil quenching preferred for minimal distortion and best properties</li>
                  <li>• Air hardening possible but may result in lower hardness</li>
                  <li>• Avoid overheating during austenitizing to prevent grain growth</li>
                  <li>• Double tempering recommended for critical applications</li>
                  <li>• Can be flame or induction hardened for selective hardening</li>
                  <li>• Lower carbon than D2/D3 allows better toughness</li>
                  <li>• Excellent for applications requiring sharp edges</li>
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
                Ready to Order O1 Tool Steel?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our O1 tool steel specialists
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3" data-testid="contact-phone">
                  <Phone className="w-6 h-6 text-gold-primary" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-blue-100">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3" data-testid="contact-email">
                  <Mail className="w-6 h-6 text-gold-primary" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-blue-100">info@mamtasteel.com</p>
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