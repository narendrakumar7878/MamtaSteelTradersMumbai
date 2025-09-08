import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function LapJointFlanges() {
  const specifications = [
    "ASTM A105 - Standard Specification for Carbon Steel Forgings for Piping Applications",
    "ASTM A182 - Standard Specification for Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
    "ASME B16.5 - Pipe Flanges and Flanged Fittings: NPS 1/2 through NPS 24",
    "ASME B16.9 - Factory-Made Wrought Buttwelding Fittings",
    "Size Range: 1/2 inch to 24 inches",
    "Pressure Class: 150# to 600#"
  ];

  const applications = [
    "Frequent Dismantling Applications",
    "Lined Piping Systems",
    "Corrosive Service Lines",
    "Cost-Sensitive Projects",
    "Rotating Equipment Connections",
    "Laboratory and Pilot Plant Piping",
    "Temporary Installations",
    "Maintenance-Intensive Systems"
  ];

  const features = [
    { icon: Shield, title: "Cost Effective", desc: "Lower cost alternative using backing flanges with stub ends" },
    { icon: TrendingUp, title: "Easy Alignment", desc: "Backing flange can rotate freely for easy bolt hole alignment" },
    { icon: Award, title: "Material Savings", desc: "Expensive alloy only required for stub end, not entire flange" },
    { icon: CheckCircle, title: "Maintenance Friendly", desc: "Easy disassembly and reassembly for maintenance work" }
  ];

  const components = [
    {
      component: "Lap Joint Flange",
      description: "Backing flange that provides bolting surface",
      material: "Usually carbon steel for cost savings",
      function: "Provides structural support and bolt connection"
    },
    {
      component: "Stub End",
      description: "Short pipe section with flared end",
      material: "Same material as piping system",
      function: "Provides corrosion resistance and sealing surface"
    },
    {
      component: "Gasket",
      description: "Sealing element between stub ends",
      material: "Various materials based on service",
      function: "Creates leak-tight seal between flanges"
    }
  ];

  const advantages = [
    "Lower initial cost compared to other flange types",
    "Easy alignment during installation",
    "Frequent disassembly capability",
    "Material cost optimization",
    "Reduced welding requirements",
    "Suitable for lined piping systems"
  ];

  const limitations = [
    "Lower pressure ratings compared to other types",
    "Not suitable for high-vibration applications",
    "Limited to flat face design only",
    "Potential for gasket displacement",
    "More components to manage",
    "Careful handling required during assembly"
  ];

  return (
    <>
      <ProductSEO
        title="Lap Joint Flanges"
        description="Cost-effective lap joint flanges with stub ends for frequent dismantling applications. ASME B16.5 certified for lined piping and corrosive service. Best prices in Mumbai for lap joint flanges."
        keywords="lap joint flanges, stub end flanges, backing flanges, ASME B16.5 flanges, lined piping flanges, Mumbai flanges supplier"
        category="Flanges"
        productName="Lap Joint Flanges"
        specifications={specifications}
        canonicalUrl="/product/flanges/lap-joint-flanges"
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
              <Link href="/product/flanges" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-flanges">Flanges</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Lap Joint Flanges</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Lap Joint Flanges
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                Cost-effective flanging solution with stub ends for frequent dismantling and maintenance applications
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

        {/* Product Features */}
        <section className="py-16 bg-white" data-testid="features-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="features-title">
              Why Choose Our Lap Joint Flanges?
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

        {/* System Components */}
        <section className="py-16 bg-gray-50" data-testid="components-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="components-title">
                Lap Joint Flange Components
              </h2>
              <div className="space-y-6">
                {components.map((comp, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md" data-testid={`component-${index}`}>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div>
                        <h3 className="text-lg font-bold text-navy-primary mb-2">{comp.component}</h3>
                        <p className="text-gray-700 text-sm">{comp.description}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Material</h4>
                        <p className="text-gray-600 text-sm">{comp.material}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-1">Function</h4>
                        <p className="text-gray-600 text-sm">{comp.function}</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <CheckCircle className="w-8 h-8 text-green-500" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Advantages vs Limitations */}
        <section className="py-16 bg-white" data-testid="comparison-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="comparison-title">
                Advantages vs Limitations
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 p-8 rounded-lg border border-green-200">
                  <h3 className="text-2xl font-semibold text-green-800 mb-6 flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3" />
                    Advantages
                  </h3>
                  <ul className="space-y-3">
                    {advantages.map((advantage, index) => (
                      <li key={index} className="flex items-start" data-testid={`advantage-${index}`}>
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-green-800">{advantage}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-orange-50 p-8 rounded-lg border border-orange-200">
                  <h3 className="text-2xl font-semibold text-orange-800 mb-6 flex items-center">
                    <Star className="w-6 h-6 mr-3" />
                    Limitations
                  </h3>
                  <ul className="space-y-3">
                    {limitations.map((limitation, index) => (
                      <li key={index} className="flex items-start" data-testid={`limitation-${index}`}>
                        <Star className="w-5 h-5 text-orange-600 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-orange-800">{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
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
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Standards & Sizes</h3>
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

        {/* Installation Guidelines */}
        <section className="py-16 bg-white" data-testid="installation-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="installation-title">
                Installation Guidelines
              </h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-navy-primary mb-4">Assembly Steps</h3>
                    <ol className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="bg-gold-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">1</span>
                        Weld stub end to pipe with appropriate weld procedure
                      </li>
                      <li className="flex items-start">
                        <span className="bg-gold-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">2</span>
                        Slide backing flange over stub end before welding
                      </li>
                      <li className="flex items-start">
                        <span className="bg-gold-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">3</span>
                        Align bolt holes and install gasket
                      </li>
                      <li className="flex items-start">
                        <span className="bg-gold-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-0.5">4</span>
                        Bolt flanges together with proper torque sequence
                      </li>
                    </ol>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-navy-primary mb-4">Important Notes</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        Ensure proper support during assembly
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        Check stub end face for damage before assembly
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        Use appropriate gasket material for service
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        Follow proper bolt torque specifications
                      </li>
                    </ul>
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
                Ready to Order Lap Joint Flanges?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our lap joint flange specialists
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