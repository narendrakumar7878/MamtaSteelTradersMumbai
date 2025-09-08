import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function LargeODSeamlessPipes() {
  const specifications = [
    "ASTM A106 - Standard Specification for Seamless Carbon Steel Pipe for High-Temperature Service",
    "ASTM A335 - Standard Specification for Seamless Ferritic Alloy-Steel Pipe for High-Temperature Service",
    "ASTM A312 - Standard Specification for Seamless Stainless Steel Pipes",
    "API 5L - Specification for Large Diameter Seamless Line Pipe",
    "Size Range: 14\" to 48\" NB (Large Outside Diameter)",
    "Wall Thickness: SCH 10 to SCH XXS, Grades: A106 Gr B, A335 P11/P22/P91"
  ];

  const applications = [
    "High-Pressure Steam Generation",
    "Power Plant Boiler Tubes",
    "Oil Refinery Process Piping",
    "Petrochemical Processing Units",
    "High-Temperature Heat Exchangers",
    "Critical Process Equipment",
    "Pressure Vessel Applications",
    "Heavy Industrial Machinery"
  ];

  const features = [
    { icon: Shield, title: "Seamless Construction", desc: "No longitudinal weld seam for maximum integrity and reliability" },
    { icon: TrendingUp, title: "High Pressure Rating", desc: "Superior pressure handling capability for critical applications" },
    { icon: Award, title: "Premium Quality", desc: "Manufactured to the highest standards for demanding applications" },
    { icon: CheckCircle, title: "Large Diameter", desc: "Available in large outside diameters up to 48 inches" }
  ];

  const advantages = [
    {
      title: "Superior Structural Integrity",
      description: "Seamless construction eliminates the weakest point - the weld seam, providing uniform strength throughout the pipe wall.",
      benefits: ["No weld defects", "Uniform grain structure", "Better fatigue resistance", "Higher burst pressure"]
    },
    {
      title: "Enhanced Corrosion Resistance", 
      description: "Absence of weld seam eliminates potential galvanic corrosion and crevice corrosion at weld areas.",
      benefits: ["No weld zone corrosion", "Uniform corrosion pattern", "Longer service life", "Reduced maintenance"]
    },
    {
      title: "Improved Flow Characteristics",
      description: "Smooth internal surface without weld bead provides better flow characteristics and reduced pressure drop.",
      benefits: ["Lower friction coefficient", "Reduced turbulence", "Better fluid dynamics", "Energy savings"]
    },
    {
      title: "High Temperature Performance",
      description: "Seamless pipes maintain their properties better at elevated temperatures compared to welded alternatives.",
      benefits: ["No heat affected zone", "Stable microstructure", "Better creep resistance", "Thermal cycling capability"]
    }
  ];

  return (
    <>
      <ProductSEO
        title="Large OD Seamless Pipes"
        description="Premium quality large outside diameter seamless steel pipes up to 48\" in carbon steel, alloy steel, and stainless steel. ASTM A106, A335, A312 certified for high-pressure and high-temperature applications. Best prices in Mumbai."
        keywords="large OD seamless pipes, large diameter seamless pipes, ASTM A106 seamless pipes, ASTM A335 seamless pipes, high pressure seamless pipes, Mumbai seamless pipe supplier"
        category="Pipes & Tubes"
        productName="Large OD Seamless Pipes"
        specifications={specifications}
        canonicalUrl="/product/pipes-tubes/large-od-seamless-pipes"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Large OD Seamless Pipes</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Large OD Seamless Pipes
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-integrity large diameter seamless pipes for critical high-pressure and high-temperature applications
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
              Why Choose Our Large OD Seamless Pipes?
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

        {/* Advantages Section */}
        <section className="py-16 bg-gray-50" data-testid="advantages-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="advantages-title">
                Seamless Pipe Advantages
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {advantages.map((advantage, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-md" data-testid={`advantage-${index}`}>
                    <h3 className="text-xl font-semibold text-navy-primary mb-4">{advantage.title}</h3>
                    <p className="text-gray-700 mb-6">{advantage.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-navy-primary">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {advantage.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
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

        {/* Size and Grade Chart */}
        <section className="py-16 bg-gray-50" data-testid="size-grade-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="size-grade-title">
                Available Sizes and Grades
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="size-grade-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Size Range</th>
                      <th className="px-6 py-4 text-left">Material Grade</th>
                      <th className="px-6 py-4 text-left">Max Temp (°F)</th>
                      <th className="px-6 py-4 text-left">Typical Applications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">14" - 24"</td>
                      <td className="px-6 py-4">A106 Gr B</td>
                      <td className="px-6 py-4">850°F</td>
                      <td className="px-6 py-4">High-pressure steam lines, boiler tubes</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">26" - 36"</td>
                      <td className="px-6 py-4">A335 P11/P22</td>
                      <td className="px-6 py-4">1200°F</td>
                      <td className="px-6 py-4">Power plant superheater tubes</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">38" - 48"</td>
                      <td className="px-6 py-4">A335 P91</td>
                      <td className="px-6 py-4">1200°F</td>
                      <td className="px-6 py-4">Advanced power plant applications</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">14" - 48"</td>
                      <td className="px-6 py-4">A312 SS 304/316</td>
                      <td className="px-6 py-4">1500°F</td>
                      <td className="px-6 py-4">Chemical processing, food industry</td>
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
                Ready to Order Large OD Seamless Pipes?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our seamless pipe specialists
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