import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Thermometer, Cog, Settings, Zap, Package, Layers, Target } from "lucide-react";
import { Link } from "wouter";
import inconel625Image from "@assets/generated_images/Inconel_625_pipes_tubes_2b6a0f7c.png";

export default function InconelPipes() {
  const specifications = [
    "ASTM B444 - Inconel 625 Seamless Pipe & Tube",
    "ASTM B704 - Inconel 625 Welded Pipe",
    "ASTM B705 - Inconel 625 Welded Tube",
    "ASTM B775 - Inconel 625 Seamless Tube",
    "ASME SB-444 - Inconel 625 Seamless Pipe & Tube",
    "UNS N06625 / Werkstoff Nr. 2.4856",
    "Size Range: 1/2\" to 8\" NB in Schedule 10, 40, 80, 160",
    "Custom Sizes: Up to 150 NB available",
    "Form: Seamless / ERW / Welded / Fabricated / LSAW",
    "End: Plain End, Beveled End, Threaded"
  ];

  const applications = [
    "Chemical Processing Equipment",
    "Aerospace and Marine Engineering",
    "Pollution Control Equipment",
    "Nuclear Reactors",
    "Seawater Components",
    "Flare Stacks",
    "Aircraft Ducting Systems",
    "Jet Engine Exhaust Systems",
    "Turbine Shroud Rings",
    "Engine Thrust-Reverser Systems",
    "Specialized Seawater Equipment",
    "Heat Exchangers"
  ];

  const features = [
    { icon: Shield, title: "Corrosion Resistant", desc: "Exceptional resistance to corrosion and oxidation in harsh environments" },
    { icon: Thermometer, title: "High Temperature", desc: "Operational temperature range from cryogenic to 2,000°F (1,093°C)" },
    { icon: TrendingUp, title: "High Strength", desc: "Excellent fatigue strength and toughness from cryogenic to 1800°F" },
    { icon: Award, title: "Quality Certified", desc: "ASTM B444, B704, B705 certified with Mill Test Certificate" },
    { icon: CheckCircle, title: "Non-Magnetic", desc: "Non-magnetic properties suitable for specialized applications" },
    { icon: Cog, title: "Easy Fabrication", desc: "Excellent weldability and formability characteristics" },
    { icon: Settings, title: "Custom Sizes", desc: "Available in custom dimensions and specifications" },
    { icon: Zap, title: "Fatigue Resistant", desc: "Very high fatigue strength for demanding applications" }
  ];

  return (
    <>
      <ProductSEO
        title="Inconel 625 Seamless Pipes & Tubes | UNS N06625 | ASTM B444 Certified Supplier"
        description="Leading manufacturer of Inconel 625 Seamless, ERW & Welded Pipes & Tubes. ASTM B444, B704, B705, B775 certified. UNS N06625, Werkstoff 2.4856. Size 15 NB to 150 NB. Aerospace, chemical processing, marine applications. Mumbai supplier, India exporter."
        keywords="Inconel 625 pipes, Inconel 625 tubes, UNS N06625, ASTM B444, ASME SB-444, seamless pipes, welded pipes, ERW pipes, aerospace pipes, chemical processing, marine engineering, Mumbai supplier, India exporter, Werkstoff 2.4856, nickel alloy pipes, high temperature pipes"
        category="Pipes & Tubes"
        productName="Inconel Pipes & Tubes"
        specifications={specifications}
        canonicalUrl="/product/pipes-tubes/inconel"
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
              <Link href="/product/pipes-tubes" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-pipes-tubes">Pipes & Tubes</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Inconel Pipes & Tubes</span>
            </div>
          </div>
        </nav>

        {/* Hero Section with Product Image */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" data-testid="hero-title">
                    Inconel 625 Seamless Pipes & Tubes
                  </h1>
                  <div className="mb-6">
                    <span className="inline-block bg-gold-primary text-navy-primary px-4 py-2 rounded-full text-sm font-semibold mb-2">
                      UNS N06625 | ASTM B444 Certified
                    </span>
                  </div>
                  <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                    High-performance Inconel 625 seamless, ERW & welded pipes for aerospace, chemical processing, marine applications, and extreme temperature environments
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="font-semibold">Size Range</div>
                      <div className="text-blue-200">15 NB to 150 NB</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3 text-center">
                      <div className="font-semibold">Temperature</div>
                      <div className="text-blue-200">Up to 2,000°F</div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-get-quote">
                      Get Quote Now
                    </Link>
                    <a href="tel:+919819322575" className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-call-now">
                      Call Now: +91 98193 22575
                    </a>
                  </div>
                </div>
                <div className="relative" data-testid="hero-image">
                  <img 
                    src={inconel625Image} 
                    alt="Inconel 625 Seamless Pipes and Tubes - UNS N06625 ASTM B444 High Performance Alloy" 
                    className="w-full h-auto rounded-lg shadow-2xl" 
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-navy-primary text-sm font-semibold">Inconel 625 Pipes & Tubes</div>
                    <div className="text-gray-600 text-xs">Seamless | ERW | Welded</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-16 bg-white" data-testid="features-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="features-title">
              Why Choose Our Inconel 625 Pipes?
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="specifications-title">
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

        {/* Inconel Grades */}
        <section className="py-16 bg-white" data-testid="inconel-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="inconel-grades-title">
                Inconel 625 Technical Specifications
              </h2>
              <div className="overflow-x-auto">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-navy-primary mb-6">Chemical Composition of Inconel 625</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                        <thead className="bg-navy-primary text-white">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-medium">Element</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Ni</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Fe</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">C</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Mn</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Si</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Cr</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Mo</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Nb + Ta</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-semibold text-sm">Composition %</td>
                            <td className="px-4 py-3 text-sm">58.0 min</td>
                            <td className="px-4 py-3 text-sm">5.0 max</td>
                            <td className="px-4 py-3 text-sm">0.10 max</td>
                            <td className="px-4 py-3 text-sm">0.50 max</td>
                            <td className="px-4 py-3 text-sm">0.50 max</td>
                            <td className="px-4 py-3 text-sm">20.0-23.0</td>
                            <td className="px-4 py-3 text-sm">8.0-10.0</td>
                            <td className="px-4 py-3 text-sm">3.15-4.15</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-navy-primary mb-6">Mechanical & Physical Properties</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h4 className="text-lg font-semibold text-navy-primary mb-4">Physical Properties</h4>
                        <ul className="space-y-2">
                          <li className="flex justify-between"><span>Density:</span><span className="font-medium">8.4 g/cm³</span></li>
                          <li className="flex justify-between"><span>Melting Point:</span><span className="font-medium">1350°C (2460°F)</span></li>
                          <li className="flex justify-between"><span>Magnetic Properties:</span><span className="font-medium">Non-magnetic</span></li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h4 className="text-lg font-semibold text-navy-primary mb-4">Mechanical Properties</h4>
                        <ul className="space-y-2">
                          <li className="flex justify-between"><span>Tensile Strength:</span><span className="font-medium">930 MPa</span></li>
                          <li className="flex justify-between"><span>Yield Strength:</span><span className="font-medium">517 MPa</span></li>
                          <li className="flex justify-between"><span>Elongation:</span><span className="font-medium">42.5%</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-navy-primary mb-6">Available Stock Sizes</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                        <thead className="bg-navy-primary text-white">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-medium">Size (NB)</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Schedule 10</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Schedule 40</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Schedule 80</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Schedule 160</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Form</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-sm">1/2\"</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">Seamless, Welded, ERW</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-sm">1\"</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">Seamless, Welded, ERW</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-sm">2\"</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">Seamless, Welded, ERW</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-sm">3\"</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">Seamless, Welded, ERW</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-sm">4\"</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">Seamless, Welded, ERW</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-sm">6\"</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">Seamless, Welded, ERW</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-sm">8\"</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">✓</td>
                            <td className="px-4 py-3 text-sm">Seamless, Welded, ERW</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-navy-primary mb-6">International Standards & Certifications</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h4 className="text-lg font-semibold text-navy-primary mb-4">ASTM Standards</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span className="text-sm">ASTM B444 - Seamless Pipes</span></li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span className="text-sm">ASTM B704 - Welded Pipes</span></li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span className="text-sm">ASTM B705 - Welded Tubes</span></li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span className="text-sm">ASTM B775 - Seamless Tubes</span></li>
                        </ul>
                      </div>
                      <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h4 className="text-lg font-semibold text-navy-primary mb-4">International Standards</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span className="text-sm">ISO 6207</span></li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span className="text-sm">DIN 17751</span></li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span className="text-sm">BS 3074NA21</span></li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" /><span className="text-sm">WERKSTOFF Nr 2.4856</span></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-navy-primary text-white" data-testid="contact-cta-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="cta-title">
                Ready to Order Inconel 625 Pipes?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our Inconel 625 specialists
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="flex items-center justify-center space-x-3" data-testid="contact-phone">
                  <Phone className="w-6 h-6 text-gold-primary" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-blue-100">+91 98193 22575</p>
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
                Contact
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}