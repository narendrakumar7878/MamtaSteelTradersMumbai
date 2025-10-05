import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Cpu, Factory, Wrench, Globe } from "lucide-react";
import { Link } from "wouter";

export default function NickelAlloyPipes() {
  const specifications = [
    "Range: 15 NB UP TO 1200 NB IN SCH 5S, 10S, 10, 20, 40S, 40, STD, 60, 80S, 80, XS, 100, 120, 140, 160 & XXS",
    "Form: Seamless / ERW / Welded in Round & Square",
    "ASTM / ASME SB 163 UNS 2200 (NICKEL 200)",
    "ASTM / ASME SB 164 UNS 2201 (NICKEL 201)",
    "ASTM / ASME SB 163 / 165 UNS 4400 (MONEL 400)",
    "ASTM / ASME SB 464 UNS 8020 (ALLOY 20 / 20 CB3)",
    "ASTM / ASME SB 704/705 UNS 8825 INCONEL (825)",
    "ASTM / ASME SB 167 / 517 UNS 6600 (INCONEL 600)",
    "ASTM / ASME SB 167 UNS 6601 (INCONEL 601)",
    "ASTM / ASME SB 704 /705 UNS 6625 (INCONEL 625)",
    "ASTM / ASME SB 619/622/626 UNS 10276 (HASTELLOY C 276)"
  ];

  const applications = [
    "Chemical Processing Equipment",
    "Marine Engineering Applications", 
    "Aerospace and Gas Turbine Components",
    "Heat Exchangers and Condensers",
    "Food Processing Industries",
    "Nuclear Power Plants",
    "Petrochemical Processing Units",
    "High Temperature Furnace Applications",
    "Pollution Control Equipment",
    "Oil & Gas Industry",
    "Power Generation Plants",
    "Desalination Plants"
  ];

  const features = [
    { icon: Shield, title: "Corrosion Resistant", desc: "Excellent resistance to acids, alkalis and marine environments" },
    { icon: TrendingUp, title: "High Temperature", desc: "Superior performance at elevated temperatures up to 1200°C" },
    { icon: Award, title: "Quality Certified", desc: "Mill Test Certificate with chemical and mechanical properties" },
    { icon: CheckCircle, title: "Multiple Alloys", desc: "Wide range of nickel and copper alloy compositions available" },
    { icon: Cpu, title: "Precision Engineering", desc: "Manufactured to exact specifications with tight tolerances" },
    { icon: Factory, title: "Large Inventory", desc: "Extensive stock of nickel and copper alloy pipes and tubes" },
    { icon: Wrench, title: "Custom Fabrication", desc: "Bespoke fabrication services for special requirements" },
    { icon: Globe, title: "Global Supply", desc: "Worldwide delivery with comprehensive export documentation" }
  ];

  return (
    <>
      <ProductSEO
        title="Nickel & Copper Alloy Pipes & Tubes - Premium Quality Supplier Mumbai"
        description="Leading supplier of Nickel & Copper Alloy Pipes & Tubes in Mumbai. Range: 15 NB to 1200 NB in SCH 5S to XXS. ASTM/ASME certified Nickel 200, 201, Monel 400, Inconel 600/625/825, Hastelloy C276, Copper alloys. Seamless, ERW, Welded forms available."
        keywords="nickel alloy pipes, copper alloy pipes, nickel copper tubes, Monel 400 pipes, Inconel 625 pipes, Hastelloy C276, ASTM SB 163, ASME SB 164, seamless pipes, ERW pipes, welded pipes, Mumbai supplier, India exporter"
        category="Pipes & Tubes"
        productName="Nickel Alloy Pipes & Tubes"
        specifications={specifications}
        canonicalUrl="/product/pipes-tubes/nickel-alloy"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Nickel Alloy Pipes & Tubes</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-heading md:text-heading font-bold mb-6" data-testid="hero-title">
                Premium Nickel & Copper Alloy Pipes & Tubes
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-performance nickel & copper alloy pipes for extreme environments, corrosive applications and marine industries
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
              Why Choose Our Nickel & Copper Alloy Pipes?
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

        {/* Alloy Grades */}
        <section className="py-16 bg-white" data-testid="alloy-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="alloy-grades-title">
                Available Nickel & Copper Alloy Grades
              </h2>
              <div className="overflow-x-auto">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-navy-primary mb-6">Nickel Alloy Grades</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                        <thead className="bg-navy-primary text-white">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-medium">Alloy Grade</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">UNS Number</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">ASTM/ASME Standard</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Key Features</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-semibold text-sm">Nickel 200</td>
                            <td className="px-4 py-3 text-sm">UNS 2200</td>
                            <td className="px-4 py-3 text-sm">ASTM/ASME SB 163</td>
                            <td className="px-4 py-3 text-sm">Pure nickel, excellent corrosion resistance</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-semibold text-sm">Nickel 201</td>
                            <td className="px-4 py-3 text-sm">UNS 2201</td>
                            <td className="px-4 py-3 text-sm">ASTM/ASME SB 164</td>
                            <td className="px-4 py-3 text-sm">Low carbon nickel, high temperature service</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-semibold text-sm">Monel 400</td>
                            <td className="px-4 py-3 text-sm">UNS 4400</td>
                            <td className="px-4 py-3 text-sm">ASTM/ASME SB 163/165</td>
                            <td className="px-4 py-3 text-sm">Nickel-copper alloy, seawater resistant</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-semibold text-sm">Alloy 20/20 CB3</td>
                            <td className="px-4 py-3 text-sm">UNS 8020</td>
                            <td className="px-4 py-3 text-sm">ASTM/ASME SB 464</td>
                            <td className="px-4 py-3 text-sm">Superior corrosion resistance in sulfuric acid</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-semibold text-sm">Inconel 825</td>
                            <td className="px-4 py-3 text-sm">UNS 8825</td>
                            <td className="px-4 py-3 text-sm">ASTM/ASME SB 704/705</td>
                            <td className="px-4 py-3 text-sm">Excellent resistance to corrosion and oxidation</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-semibold text-sm">Inconel 600</td>
                            <td className="px-4 py-3 text-sm">UNS 6600</td>
                            <td className="px-4 py-3 text-sm">ASTM/ASME SB 167/517</td>
                            <td className="px-4 py-3 text-sm">High temperature oxidation resistance</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-semibold text-sm">Inconel 601</td>
                            <td className="px-4 py-3 text-sm">UNS 6601</td>
                            <td className="px-4 py-3 text-sm">ASTM/ASME SB 167</td>
                            <td className="px-4 py-3 text-sm">Outstanding high temperature strength</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-semibold text-sm">Inconel 625</td>
                            <td className="px-4 py-3 text-sm">UNS 6625</td>
                            <td className="px-4 py-3 text-sm">ASTM/ASME SB 704/705</td>
                            <td className="px-4 py-3 text-sm">Outstanding strength and toughness</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-semibold text-sm">Hastelloy C 276</td>
                            <td className="px-4 py-3 text-sm">UNS 10276</td>
                            <td className="px-4 py-3 text-sm">ASTM/ASME SB 619/622/626</td>
                            <td className="px-4 py-3 text-sm">Excellent corrosion resistance in wide range of chemicals</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-navy-primary mb-6">Copper Alloy Grades</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md">
                        <thead className="bg-navy-primary text-white">
                          <tr>
                            <th className="px-4 py-3 text-left text-sm font-medium">Copper Alloy</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">UNS Number</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">ASTM/ASME Standard</th>
                            <th className="px-4 py-3 text-left text-sm font-medium">Composition</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-semibold text-sm">Copper C 10100</td>
                            <td className="px-4 py-3 text-sm">UNS C 10100</td>
                            <td className="px-4 py-3 text-sm">ASTM/ASME SB 111</td>
                            <td className="px-4 py-3 text-sm">Oxygen Free Electronic Copper</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-semibold text-sm">Copper C 10200</td>
                            <td className="px-4 py-3 text-sm">UNS C 10200</td>
                            <td className="px-4 py-3 text-sm">ASTM/ASME SB 111</td>
                            <td className="px-4 py-3 text-sm">Oxygen Free Copper</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-semibold text-sm">Copper C 10300</td>
                            <td className="px-4 py-3 text-sm">UNS C 10300</td>
                            <td className="px-4 py-3 text-sm">ASTM/ASME SB 111</td>
                            <td className="px-4 py-3 text-sm">Oxygen Free Silver Bearing Copper</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-semibold text-sm">Copper C 10800</td>
                            <td className="px-4 py-3 text-sm">UNS C 10800</td>
                            <td className="px-4 py-3 text-sm">ASTM/ASME SB 111</td>
                            <td className="px-4 py-3 text-sm">Tough Pitch Copper with Silver</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-semibold text-sm">Copper C 12000</td>
                            <td className="px-4 py-3 text-sm">UNS C 12000</td>
                            <td className="px-4 py-3 text-sm">ASTM/ASME SB 111</td>
                            <td className="px-4 py-3 text-sm">Phosphorus Deoxidized Copper</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-semibold text-sm">Copper C 12200</td>
                            <td className="px-4 py-3 text-sm">UNS C 12200</td>
                            <td className="px-4 py-3 text-sm">ASTM/ASME SB 111</td>
                            <td className="px-4 py-3 text-sm">Phosphorus Deoxidized High Residual Phosphorus</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-semibold text-sm">Cu-Ni 90/10</td>
                            <td className="px-4 py-3 text-sm">UNS C 70600</td>
                            <td className="px-4 py-3 text-sm">ASTM/ASME SB 111, SB 466</td>
                            <td className="px-4 py-3 text-sm">90% Copper, 10% Nickel</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-semibold text-sm">Cu-Ni 70/30</td>
                            <td className="px-4 py-3 text-sm">UNS C 71500</td>
                            <td className="px-4 py-3 text-sm">ASTM/ASME SB 111, SB 466</td>
                            <td className="px-4 py-3 text-sm">70% Copper, 30% Nickel</td>
                          </tr>
                        </tbody>
                      </table>
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
              <h2 className="text-2xl font-bold mb-6" data-testid="cta-title">
                Ready to Order Nickel & Copper Alloy Pipes?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our nickel & copper alloy experts
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
                Contact
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}