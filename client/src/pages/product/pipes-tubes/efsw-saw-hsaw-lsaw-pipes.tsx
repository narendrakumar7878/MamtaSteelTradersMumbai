import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function EFSWPipes() {
  const specifications = [
    "API 5L - Specification for Line Pipe (EFSW, SAW, HSAW, LSAW)",
    "ASTM A671 - Standard Specification for Electric-Fusion-Welded Steel Pipe",
    "ASTM A672 - Standard Specification for Electric-Fusion-Welded Steel Pipe for High-Pressure Service",
    "ASTM A134 - Standard Specification for Pipe, Steel, Electric-Resistance-Welded (Sizes NPS 16 and Over)",
    "Size Range: 16\" to 120\" NB (Large Diameter Pipes)",
    "Wall Thickness: Up to 50mm, Grades: API 5L X42, X52, X60, X65, X70"
  ];

  const applications = [
    "Oil and Gas Transmission Pipelines",
    "Water Transmission Lines",
    "Structural and Piling Applications",
    "Power Plant Cooling Water Systems",
    "Industrial Process Piping",
    "Municipal Water Distribution",
    "Offshore and Subsea Pipelines",
    "Chemical Plant Transfer Lines"
  ];

  const features = [
    { icon: Shield, title: "High Pressure Rating", desc: "Designed for high-pressure transmission and distribution systems" },
    { icon: TrendingUp, title: "Large Diameter", desc: "Available in sizes from 16\" to 120\" for high-volume applications" },
    { icon: Award, title: "API 5L Certified", desc: "Meets stringent API 5L standards for line pipe applications" },
    { icon: CheckCircle, title: "Multiple Welding Types", desc: "EFSW, SAW, HSAW, and LSAW welding processes available" }
  ];

  const weldingProcesses = [
    {
      name: "EFSW",
      fullName: "Electric Fusion Spiral Welded",
      description: "Continuous spiral welding process for large diameter pipes",
      sizes: "16\" - 120\"",
      advantages: "Cost-effective for large quantities, good mechanical properties"
    },
    {
      name: "SAW",
      fullName: "Submerged Arc Welded",
      description: "High-quality longitudinal welding with submerged arc process",
      sizes: "16\" - 60\"",
      advantages: "Excellent weld quality, high deposition rates"
    },
    {
      name: "HSAW",
      fullName: "Helical Submerged Arc Welded",
      description: "Helical welding pattern for enhanced strength",
      sizes: "20\" - 100\"",
      advantages: "Superior pressure resistance, continuous welding"
    },
    {
      name: "LSAW",
      fullName: "Longitudinal Submerged Arc Welded",
      description: "Straight longitudinal welding for premium applications",
      sizes: "16\" - 64\"",
      advantages: "Highest quality, best for high-pressure service"
    }
  ];

  return (
    <>
      <ProductSEO
        title="EFSW/SAW/HSAW/LSAW Pipes"
        description="Premium quality large diameter welded pipes including EFSW, SAW, HSAW, and LSAW processes. API 5L certified for oil & gas transmission, water lines, and structural applications. Best prices in Mumbai for welded steel pipes."
        keywords="EFSW pipes, SAW pipes, HSAW pipes, LSAW pipes, large diameter pipes, API 5L pipes, welded steel pipes, transmission pipes, Mumbai welded pipe supplier"
        category="Pipes & Tubes"
        productName="EFSW/SAW/HSAW/LSAW Pipes"
        specifications={specifications}
        canonicalUrl="/product/pipes-tubes/efsw-saw-hsaw-lsaw-pipes"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">EFSW/SAW/HSAW/LSAW Pipes</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium EFSW/SAW/HSAW/LSAW Pipes
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-quality large diameter welded pipes for oil & gas transmission, water distribution, and industrial applications
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
              Why Choose Our Welded Pipes?
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

        {/* Welding Processes */}
        <section className="py-16 bg-gray-50" data-testid="welding-processes-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="welding-processes-title">
                Welding Processes Available
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {weldingProcesses.map((process, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-md border-l-4 border-gold-primary" data-testid={`process-${index}`}>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-navy-primary text-white rounded-lg flex items-center justify-center font-bold mr-4">
                        {process.name}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-navy-primary">{process.fullName}</h3>
                        <p className="text-sm text-gray-600">Size Range: {process.sizes}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{process.description}</p>
                    <div className="bg-gold-primary/10 p-4 rounded-lg">
                      <h4 className="font-semibold text-navy-primary mb-2">Key Advantages:</h4>
                      <p className="text-gray-700">{process.advantages}</p>
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

        {/* API 5L Grades */}
        <section className="py-16 bg-gray-50" data-testid="api-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="api-grades-title">
                Available API 5L Grades
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="api-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">API Grade</th>
                      <th className="px-6 py-4 text-left">Yield Strength (PSI)</th>
                      <th className="px-6 py-4 text-left">Tensile Strength (PSI)</th>
                      <th className="px-6 py-4 text-left">Typical Applications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">X42</td>
                      <td className="px-6 py-4">42,000</td>
                      <td className="px-6 py-4">60,000</td>
                      <td className="px-6 py-4">Low pressure gas and water transmission</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">X52</td>
                      <td className="px-6 py-4">52,000</td>
                      <td className="px-6 py-4">66,000</td>
                      <td className="px-6 py-4">Medium pressure gas transmission</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">X60</td>
                      <td className="px-6 py-4">60,000</td>
                      <td className="px-6 py-4">75,000</td>
                      <td className="px-6 py-4">High pressure oil and gas pipelines</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">X70</td>
                      <td className="px-6 py-4">70,000</td>
                      <td className="px-6 py-4">82,000</td>
                      <td className="px-6 py-4">High pressure transmission, offshore</td>
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
                Ready to Order Welded Pipes?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our welded pipe specialists
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