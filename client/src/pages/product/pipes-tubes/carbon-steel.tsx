import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, ExternalLink } from "lucide-react";
import { Link } from "wouter";

export default function CarbonSteelPipes() {
  const specifications = [
    "ASTM A106 Grade A, B, C - Seamless Carbon Steel Pipe for High-Temperature Service",
    "ASTM A53 Grade A, B - Welded and Seamless Steel Pipe",
    "API 5L Grade A, B, X42, X46, X52, X56, X60, X65, X70 - Line Pipe",
    "ASTM A333 Grade 1, 6 - Low-Temperature Service",
    "Size Range: 1/8\" to 48\" NB in Schedule 40, 80, 160, XXS",
    "Wall Thickness: 2.77mm to 25.4mm"
  ];

  const applications = [
    "Oil and Gas Pipelines",
    "Power Generation Plants",
    "Refineries and Petrochemical Plants",
    "Steam Lines and Boiler Tubes",
    "Water Distribution Systems",
    "Industrial Process Piping",
    "HVAC Systems",
    "Fire Protection Systems"
  ];

  const features = [
    { icon: Shield, title: "High Pressure Rating", desc: "Suitable for high pressure applications up to 6000 PSI" },
    { icon: TrendingUp, title: "Temperature Resistant", desc: "Operating temperature up to 400°C" },
    { icon: Award, title: "API Certified", desc: "API 5L certified for oil and gas applications" },
    { icon: CheckCircle, title: "Multiple Grades", desc: "Wide range of carbon steel grades available" }
  ];

  const products = [
    {
      name: "A106 Grade B",
      image: "https://textronsteelalloys.com/wp-content/uploads/2018/12/carbon-300x300.jpg",
      alt: "ASTM A106 Grade B Carbon Steel Seamless Pipe",
      description: "High-temperature service seamless carbon steel pipes. Most commonly used grade for industrial applications.",
      applications: ["Power Plants", "Refineries", "High-Temperature Steam Lines"]
    },
    {
      name: "A333 Grade 6 Pipes",
      image: "https://textronsteelalloys.com/wp-content/uploads/2022/06/a333-gr6-seamless-pipe-300x300.jpg",
      alt: "A333 Grade 6 Seamless Pipe JSL MSL 3.1 MTC",
      description: "Low-temperature carbon steel seamless pipes designed for cryogenic applications.",
      applications: ["Cryogenic Storage", "LNG Plants", "Low-Temperature Processing"]
    },
    {
      name: "AISI 4130 / SAE 4130",
      image: "https://textronsteelalloys.com/wp-content/uploads/2022/07/aisi-sae-4130-1.7218-25CRMO-300x300.jpg",
      alt: "AISI 4130 SAE 4130 1.7218 25CrMo4 Seamless Pipes Tubes",
      description: "Chromium-molybdenum alloy steel pipes with excellent strength and toughness properties.",
      applications: ["Aerospace", "Automotive", "Oil & Gas Drilling"]
    },
    {
      name: "API 5L PSL-1 / PSL-2 Pipes",
      image: "https://textronsteelalloys.com/wp-content/uploads/2019/01/api-5l-x52-psl-1-2-seamless-pipe-300x300.jpg",
      alt: "API 5L Seamless Pipe Tube Stockist Supplier",
      description: "Line pipes for oil and gas transmission systems meeting API 5L specifications.",
      applications: ["Oil Pipelines", "Gas Transmission", "Offshore Applications"]
    },
    {
      name: "ASTM A53 Grade B",
      image: "https://textronsteelalloys.com/wp-content/uploads/2018/12/carbon-300x300.jpg",
      alt: "ASTM A53 Grade B Welded and Seamless Steel Pipe",
      description: "Standard specification for welded and seamless steel pipe for general structural and pressure applications.",
      applications: ["Water Lines", "Gas Distribution", "Structural Applications"]
    }
  ];

  return (
    <>
      <ProductSEO
        title="Carbon Steel Pipes"
        description="High-quality carbon steel pipes in grades A106, A53, API 5L. Seamless and welded carbon steel pipes for oil & gas, power plants. Best prices in Mumbai with Mill Test Certificate."
        keywords="carbon steel pipes, ASTM A106, ASTM A53, API 5L pipes, seamless carbon steel, welded pipes, Mumbai steel supplier"
        category="Pipes & Tubes"
        productName="Carbon Steel Pipes"
        specifications={specifications}
        canonicalUrl="/product/pipes-tubes/carbon-steel"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Carbon Steel Pipes</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Carbon Steel Pipes
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                High-grade carbon steel pipes for oil & gas, power generation, and industrial applications
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

        {/* Product Gallery */}
        <section className="py-16 bg-gray-50" data-testid="product-gallery-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-4" data-testid="gallery-title">
                Our Carbon Steel Pipe Products
              </h2>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto" data-testid="gallery-subtitle">
                Complete range of carbon steel pipes including ASTM A106, A333, AISI 4130, and API 5L grades. 
                Each product is manufactured to the highest quality standards with full Mill Test Certificates.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" data-testid={`product-card-${index}`}>
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        width="300"
                        height="300"
                        data-testid={`product-image-${index}`}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-navy-primary mb-3" data-testid={`product-name-${index}`}>
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed" data-testid={`product-description-${index}`}>
                        {product.description}
                      </p>
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-navy-primary mb-2">Applications:</h4>
                        <div className="flex flex-wrap gap-1">
                          {product.applications.map((app, appIndex) => (
                            <span key={appIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full" data-testid={`product-app-${index}-${appIndex}`}>
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Link href="/contact" className="inline-flex items-center text-gold-primary hover:text-gold-secondary font-semibold text-sm transition-colors" data-testid={`product-cta-${index}`}>
                        Get Quote
                        <ExternalLink className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Features */}
        <section className="py-16 bg-white" data-testid="features-section">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="features-title">
              Why Choose Our Carbon Steel Pipes?
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

        {/* Pressure Rating Table */}
        <section className="py-16 bg-white" data-testid="pressure-rating-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="pressure-rating-title">
                Pressure Ratings & Temperatures
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="pressure-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Grade</th>
                      <th className="px-6 py-4 text-left">Max Temperature</th>
                      <th className="px-6 py-4 text-left">Max Pressure (PSI)</th>
                      <th className="px-6 py-4 text-left">Application</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">A106 Grade A</td>
                      <td className="px-6 py-4">482°C</td>
                      <td className="px-6 py-4">Up to 3000</td>
                      <td className="px-6 py-4">Low-pressure steam</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">A106 Grade B</td>
                      <td className="px-6 py-4">427°C</td>
                      <td className="px-6 py-4">Up to 6000</td>
                      <td className="px-6 py-4">High-pressure steam</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">API 5L X52</td>
                      <td className="px-6 py-4">93°C</td>
                      <td className="px-6 py-4">Up to 1440</td>
                      <td className="px-6 py-4">Oil & gas transmission</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">API 5L X65</td>
                      <td className="px-6 py-4">93°C</td>
                      <td className="px-6 py-4">Up to 1440</td>
                      <td className="px-6 py-4">High-pressure pipelines</td>
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
                Need Carbon Steel Pipes for Your Project?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get competitive prices and fast delivery from Mumbai's trusted steel supplier
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