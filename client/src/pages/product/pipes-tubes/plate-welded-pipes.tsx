import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function PlateWeldedPipes() {
  const specifications = [
    "ASTM A134 - Standard Specification for Pipe, Steel, Electric-Resistance-Welded (Sizes NPS 16 and Over)",
    "AWWA C200 - Steel Water Pipe - 6 In. (150 mm) and Larger",
    "API 5L - Specification for Line Pipe (Plate Welded)",
    "ASTM A671 - Standard Specification for Electric-Fusion-Welded Steel Pipe for Atmospheric and Lower Temperatures",
    "Size Range: 16\" to 144\" NB (Large Diameter Pipes)",
    "Wall Thickness: 6mm to 50mm, Custom sizes available"
  ];

  const applications = [
    "Water Transmission and Distribution",
    "Sewage and Wastewater Systems",
    "Oil and Gas Transmission Pipelines",
    "Industrial Process Piping",
    "Power Plant Cooling Systems",
    "Municipal Infrastructure Projects",
    "Irrigation and Agricultural Systems",
    "Marine and Offshore Applications"
  ];

  const features = [
    { icon: Shield, title: "Large Diameter", desc: "Available in sizes up to 144\" for high-volume applications" },
    { icon: TrendingUp, title: "Cost Effective", desc: "Economical solution for large diameter piping projects" },
    { icon: Award, title: "Custom Fabrication", desc: "Tailored to specific project requirements and specifications" },
    { icon: CheckCircle, title: "Quality Welding", desc: "Advanced welding techniques ensure reliable joint integrity" }
  ];

  const manufacturingProcess = [
    {
      step: "1",
      title: "Plate Preparation",
      description: "High-quality steel plates are cut to required dimensions and edge preparation is performed for welding.",
      details: "Plates are inspected for defects, straightened, and edges are beveled or prepared as per welding requirements."
    },
    {
      step: "2", 
      title: "Rolling and Forming",
      description: "Steel plates are formed into cylindrical shape using specialized rolling equipment.",
      details: "Precise forming ensures proper roundness and dimensional accuracy of the pipe."
    },
    {
      step: "3",
      title: "Longitudinal Welding",
      description: "The longitudinal seam is welded using submerged arc welding (SAW) or other appropriate processes.",
      details: "Multiple welding passes ensure full penetration and high-quality weld integrity."
    },
    {
      step: "4",
      title: "Quality Testing",
      description: "Comprehensive testing including NDT, hydrostatic testing, and dimensional verification.",
      details: "All welds are tested using ultrasonic testing, radiographic testing, and visual inspection."
    }
  ];

  return (
    <>
      <ProductSEO
        title="Plate Welded Pipes"
        description="Premium quality large diameter plate welded pipes for water transmission, oil & gas, and industrial applications. ASTM A134, AWWA C200 certified. Custom fabrication available. Best prices in Mumbai for plate welded steel pipes."
        keywords="plate welded pipes, large diameter pipes, ASTM A134 pipes, AWWA C200 pipes, water transmission pipes, custom welded pipes, Mumbai plate welded pipe supplier"
        category="Pipes & Tubes"
        productName="Plate Welded Pipes"
        specifications={specifications}
        canonicalUrl="/product/pipes-tubes/plate-welded-pipes"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Plate Welded Pipes</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Plate Welded Pipes
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                Large diameter custom fabricated pipes for water transmission, oil & gas, and heavy industrial applications
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
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="features-title">
              Why Choose Our Plate Welded Pipes?
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

        {/* Manufacturing Process */}
        <section className="py-16 bg-gray-50" data-testid="manufacturing-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="manufacturing-title">
                Manufacturing Process
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {manufacturingProcess.map((process, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-md" data-testid={`process-${index}`}>
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-gold-primary text-white rounded-full flex items-center justify-center font-bold text-lg mr-4 flex-shrink-0">
                        {process.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-navy-primary mb-2">{process.title}</h3>
                        <p className="text-gray-700 mb-3">{process.description}</p>
                        <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">{process.details}</p>
                      </div>
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

        {/* Size Chart */}
        <section className="py-16 bg-gray-50" data-testid="size-chart-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="size-chart-title">
                Available Sizes and Specifications
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="size-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Diameter Range</th>
                      <th className="px-6 py-4 text-left">Wall Thickness</th>
                      <th className="px-6 py-4 text-left">Standard Length</th>
                      <th className="px-6 py-4 text-left">Typical Applications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">16" - 30"</td>
                      <td className="px-6 py-4">6mm - 20mm</td>
                      <td className="px-6 py-4">12m standard</td>
                      <td className="px-6 py-4">Water distribution, industrial piping</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">32" - 60"</td>
                      <td className="px-6 py-4">8mm - 25mm</td>
                      <td className="px-6 py-4">12m standard</td>
                      <td className="px-6 py-4">Water transmission, large infrastructure</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">62" - 100"</td>
                      <td className="px-6 py-4">10mm - 35mm</td>
                      <td className="px-6 py-4">12m standard</td>
                      <td className="px-6 py-4">Major water mains, oil & gas transmission</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">102" - 144"</td>
                      <td className="px-6 py-4">12mm - 50mm</td>
                      <td className="px-6 py-4">Custom lengths</td>
                      <td className="px-6 py-4">Major transmission lines, tunnels</td>
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
                Ready to Order Plate Welded Pipes?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our custom fabrication specialists
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