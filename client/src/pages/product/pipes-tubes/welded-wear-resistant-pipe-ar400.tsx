import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function WeldedWearResistantPipeAR400() {
  const specifications = [
    "ASTM A514 - Standard Specification for High-Yield-Strength, Quenched and Tempered Alloy Steel Plate",
    "ASTM A709 - Standard Specification for Structural Steel for Bridges",
    "AR400 - Abrasion Resistant Steel with 400 BHN (Brinell Hardness)",
    "Hardox 400 Equivalent - European standard for wear resistant steel",
    "Size Range: 4\" to 60\" NB in various wall thicknesses",
    "Hardness: 360-440 BHN (Brinell Hardness Number)"
  ];

  const applications = [
    "Mining and Quarrying Equipment",
    "Material Handling Chutes and Hoppers",
    "Cement and Aggregate Processing",
    "Coal and Ash Handling Systems",
    "Agricultural Equipment and Machinery",
    "Construction and Demolition Equipment",
    "Waste Management and Recycling",
    "Bulk Material Transfer Systems"
  ];

  const features = [
    { icon: Shield, title: "Abrasion Resistant", desc: "Superior resistance to wear and abrasion in harsh environments" },
    { icon: TrendingUp, title: "High Hardness", desc: "400 BHN hardness for maximum wear resistance" },
    { icon: Award, title: "Weldable", desc: "Good weldability for easy fabrication and repair" },
    { icon: CheckCircle, title: "Long Service Life", desc: "Extended equipment life reduces maintenance costs" }
  ];

  const properties = [
    {
      property: "Brinell Hardness",
      value: "360-440 BHN",
      description: "High surface hardness for wear resistance"
    },
    {
      property: "Yield Strength",
      value: "1000 MPa min",
      description: "High strength for structural applications"
    },
    {
      property: "Tensile Strength",
      value: "1250 MPa min",
      description: "Excellent mechanical properties"
    },
    {
      property: "Elongation",
      value: "10% min",
      description: "Adequate ductility for fabrication"
    },
    {
      property: "Impact Toughness",
      value: "20J at -20°C",
      description: "Good toughness at low temperatures"
    },
    {
      property: "Weldability",
      value: "Good",
      description: "Can be welded with proper procedures"
    }
  ];

  return (
    <>
      <ProductSEO
        title="Welded Wear Resistant Pipe AR400"
        description="Premium quality AR400 abrasion resistant welded pipes with 400 BHN hardness. ASTM A514 certified for mining, material handling, and high-wear applications. Best prices in Mumbai for AR400 wear resistant pipes."
        keywords="AR400 pipes, wear resistant pipes, abrasion resistant pipes, Hardox 400 pipes, mining pipes, 400 BHN pipes, Mumbai AR400 supplier"
        category="Pipes & Tubes"
        productName="Welded Wear Resistant Pipe AR400"
        specifications={specifications}
        canonicalUrl="/product/pipes-tubes/welded-wear-resistant-pipe-ar400"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Welded Wear Resistant Pipe AR400</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-heading md:text-heading font-bold mb-6" data-testid="hero-title">
                Premium AR400 Wear Resistant Pipes
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-hardness abrasion resistant pipes for mining, material handling, and extreme wear applications
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
              Why Choose Our AR400 Pipes?
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

        {/* Material Properties */}
        <section className="py-16 bg-gray-50" data-testid="properties-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="properties-title">
                AR400 Material Properties
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
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="specifications-title">
                Technical Specifications
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-gray-50 p-8 rounded-lg" data-testid="specifications-standards">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Standards & Specifications</h3>
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

        {/* Comparison Table */}
        <section className="py-16 bg-gray-50" data-testid="comparison-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary mb-12" data-testid="comparison-title">
                AR400 vs Standard Steel Comparison
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="comparison-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Property</th>
                      <th className="px-6 py-4 text-left">AR400</th>
                      <th className="px-6 py-4 text-left">Mild Steel</th>
                      <th className="px-6 py-4 text-left">Improvement Factor</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Hardness (BHN)</td>
                      <td className="px-6 py-4">360-440</td>
                      <td className="px-6 py-4">120-160</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">3x Harder</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Wear Life</td>
                      <td className="px-6 py-4">High</td>
                      <td className="px-6 py-4">Standard</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">5-10x Longer</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Yield Strength (MPa)</td>
                      <td className="px-6 py-4">1000+</td>
                      <td className="px-6 py-4">250-300</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">4x Stronger</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">Cost Effectiveness</td>
                      <td className="px-6 py-4">High ROI</td>
                      <td className="px-6 py-4">Low Initial Cost</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">Lower Total Cost</td>
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
              <h2 className="text-2xl font-bold mb-6" data-testid="cta-title">
                Ready to Order AR400 Pipes?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our wear resistant steel specialists
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