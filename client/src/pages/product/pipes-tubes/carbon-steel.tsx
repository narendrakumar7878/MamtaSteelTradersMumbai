import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, ExternalLink } from "lucide-react";
import ss_pipe_mamta_steel_traders_img from "@/assets/SS PIPE MAMTA STEEL TRADERS.jpg";
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
      image: ss_pipe_mamta_steel_traders_img,
      alt: "ASTM A106 Grade B Carbon Steel Seamless Pipe",
      description: "High-temperature service seamless carbon steel pipes. Most commonly used grade for industrial applications.",
      applications: ["Power Plants", "Refineries", "High-Temperature Steam Lines"]
    },
    {
      name: "A333 Grade 6 Pipes",
      image: ss_pipe_mamta_steel_traders_img,
      alt: "A333 Grade 6 Seamless Pipe JSL MSL 3.1 MTC",
      description: "Low-temperature carbon steel seamless pipes designed for cryogenic applications.",
      applications: ["Cryogenic Storage", "LNG Plants", "Low-Temperature Processing"]
    },
    {
      name: "AISI 4130 / SAE 4130",
      image: ss_pipe_mamta_steel_traders_img,
      alt: "AISI 4130 SAE 4130 1.7218 25CrMo4 Seamless Pipes Tubes",
      description: "Chromium-molybdenum alloy steel pipes with excellent strength and toughness properties.",
      applications: ["Aerospace", "Automotive", "Oil & Gas Drilling"]
    },
    {
      name: "API 5L PSL-1 / PSL-2 Pipes",
      image: ss_pipe_mamta_steel_traders_img,
      alt: "API 5L Seamless Pipe Tube Stockist Supplier",
      description: "Line pipes for oil and gas transmission systems meeting API 5L specifications.",
      applications: ["Oil Pipelines", "Gas Transmission", "Offshore Applications"]
    },
    {
      name: "ASTM A53 Grade B",
      image: ss_pipe_mamta_steel_traders_img,
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
                <a href="tel:+919819322576" className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-call-now">
                  Call Now: +91 9819322576
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

        {/* Detailed Product Description */}
        <section className="py-16 bg-gray-50" data-testid="detailed-description-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="description-title">
                Carbon Steel Pipes: Comprehensive Technical Overview
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Technical Description */}
                <div className="bg-white p-8 rounded-lg shadow-md" data-testid="technical-description">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">ASTM A106 Grade B Technical Details</h3>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 mb-4">
                      <strong>ASTM A106 Grade B</strong> is a seamless carbon steel pipe material specifically designed for high-temperature 
                      service applications. It is commonly used in Industrial Plants, Power Plants, Refineries and Chemical plants. 
                      ASTM A106 comes in three grades A, B, and C, with Grade B being the most widely used due to its excellent 
                      balance of strength, ductility, and cost-effectiveness.
                    </p>
                    
                    <p className="text-gray-700 mb-4">
                      ASTM A106 Grade B pipes are manufactured through seamless process using hot-finished or cold-drawn methods. 
                      NPS 1-1/2″ and under may be either hot finished or cold drawn, while NPS 2″ and larger are typically hot finished. 
                      The manufacturing process ensures uniform mechanical properties and excellent resistance to high-temperature service conditions.
                    </p>
                    
                    <p className="text-gray-700 mb-4">
                      When specified, these carbon steel pipes may undergo normalizing or stress relief heat treatment to optimize their 
                      mechanical properties and relieve residual stresses from manufacturing. The pipes are designed to handle operating 
                      temperatures up to 427°C (800°F) and pressures up to 6000 PSI, making them ideal for steam lines and pressure vessel applications.
                    </p>
                    
                    <h4 className="text-lg font-semibold text-navy-primary mt-6 mb-3">Manufacturing Excellence</h4>
                    <p className="text-gray-700 mb-4">
                      Our company is one of the pioneers in Manufacturing, Stocking and Supplying of ASTM A106 Grade B Carbon Steel Pipes, 
                      available at market leading prices. We maintain a ready stock inventory of more than 50,000 Metric Tons to ensure 
                      immediate delivery for urgent requirements.
                    </p>
                  </div>
                </div>

                {/* Scope and Applications */}
                <div className="bg-white p-8 rounded-lg shadow-md" data-testid="scope-applications">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Scope & Applications</h3>
                  <div className="prose prose-gray max-w-none">
                    <p className="text-gray-700 mb-4">
                      <strong>ASTM A106 Seamless Pressure Pipe</strong> (also covered in ASME specifications as SA 106) is the standard 
                      specification for seamless carbon steel nominal wall pipe for high-temperature service. These pipes are suitable 
                      for bending, flanging and similar forming operations.
                    </p>
                    
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h4 className="text-lg font-semibold text-navy-primary mb-2">Manufacturing Standards:</h4>
                      <ul className="text-gray-700 space-y-1">
                        <li>• NPS 1-1/2″ and under may be either hot finished or cold drawn</li>
                        <li>• NPS 2″ and larger shall be hot finished unless otherwise specified</li>
                        <li>• Suitable for bending, curling and similar forming processes</li>
                      </ul>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-navy-primary mt-6 mb-3">Key Applications</h4>
                    <div className="grid grid-cols-1 gap-2">
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700">High-temperature steam lines and boiler applications</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700">Power generation plants and refineries</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700">Chemical processing and petrochemical industries</span>
                      </div>
                      <div className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-gray-700">Industrial piping systems and pressure vessels</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-gold-50 rounded-lg">
                      <p className="text-gray-700 text-sm">
                        <strong>Quality Assurance:</strong> All pipes come with Mill Test Certificate (MTC) and are tested 
                        for hydrostatic pressure and non-destructive examination (NDE) as per international standards.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Global Supply Information */}
              <div className="mt-12 bg-white p-8 rounded-lg shadow-md" data-testid="global-supply-info">
                <h3 className="text-2xl font-semibold text-navy-primary mb-6">Global Supply & Distribution Network</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-navy-primary mb-4">Major Supply Destinations</h4>
                    <p className="text-gray-700 mb-3">
                      We supply Carbon Steel A106 Grade B Seamless Pipes to major industrial cities across India and globally:
                    </p>
                    <div className="text-sm text-gray-600 leading-relaxed">
                      Mumbai, Delhi, Chennai, Kolkata, Bengaluru, Hyderabad, Pune, Ahmedabad, Surat, Vadodara, 
                      Coimbatore, Nashik, Rajkot, Kanpur, Indore, Jaipur, Lucknow, Bhopal, Visakhapatnam, 
                      Thiruvananthapuram, and other major industrial centers.
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-navy-primary mb-4">International Export Markets</h4>
                    <p className="text-gray-700 mb-3">
                      Our export network covers over 50 countries including:
                    </p>
                    <div className="text-sm text-gray-600 leading-relaxed">
                      UAE, Saudi Arabia, Qatar, Kuwait, Oman, Turkey, Singapore, Malaysia, Thailand, Indonesia, 
                      Bangladesh, Sri Lanka, South Korea, Japan, Australia, Canada, USA, UK, Germany, France, 
                      Italy, Netherlands, Brazil, Mexico, and many more.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Individual Product Variants */}
        <section className="py-16 bg-white" data-testid="product-variants-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="variants-title">
                Carbon Steel Pipe Product Variants
              </h2>
              
              <div className="space-y-12">
                {/* A106 Grade B Detailed */}
                <div className="bg-gray-50 p-8 rounded-lg shadow-md" data-testid="a106-grade-b-variant">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-semibold text-navy-primary mb-4">ASTM A106 Grade B Seamless Pipes</h3>
                      <p className="text-gray-700 mb-4">
                        The most widely used grade of seamless carbon steel pipe for high-temperature service. ASTM A106 Grade B 
                        offers excellent mechanical properties and is suitable for bending, flanging, and similar forming operations.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Key Specifications:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Standard: ASTM A106 / ASME SA106</li>
                            <li>• Size Range: ½" to 8" NB</li>
                            <li>• Schedules: 40 (STD), 80 (XH)</li>
                            <li>• Manufacturing: Hot finished or cold drawn</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Applications:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• High-temperature steam lines</li>
                            <li>• Power plant boiler tubes</li>
                            <li>• Refinery process piping</li>
                            <li>• Chemical plant pressure piping</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <img 
                        src={ss_pipe_mamta_steel_traders_img} 
                        alt="ASTM A106 Grade B Carbon Steel Seamless Pipe"
                        className="w-48 h-48 object-cover rounded-lg shadow-sm"
                        loading="lazy"
                        width="300"
                        height="300"
                        data-testid="a106-product-image"
                      />
                    </div>
                  </div>
                </div>

                {/* A333 Grade 6 */}
                <div className="bg-gray-50 p-8 rounded-lg shadow-md" data-testid="a333-grade-6-variant">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-semibold text-navy-primary mb-4">ASTM A333 Grade 6 Low-Temperature Pipes</h3>
                      <p className="text-gray-700 mb-4">
                        Seamless carbon steel pipes specifically designed for low-temperature service applications. A333 Grade 6 
                        maintains excellent impact toughness at sub-zero temperatures, making it ideal for cryogenic applications.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Key Features:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Low-temperature impact toughness</li>
                            <li>• Seamless construction</li>
                            <li>• Normalized or normalized and tempered</li>
                            <li>• Full MTC and impact test reports</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Applications:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• LNG (Liquefied Natural Gas) plants</li>
                            <li>• Cryogenic storage systems</li>
                            <li>• Low-temperature process piping</li>
                            <li>• Refrigeration systems</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <img 
                        src={ss_pipe_mamta_steel_traders_img} 
                        alt="A333 Grade 6 Seamless Pipe JSL MSL 3.1 MTC"
                        className="w-48 h-48 object-cover rounded-lg shadow-sm"
                        loading="lazy"
                        width="300"
                        height="300"
                        data-testid="a333-product-image"
                      />
                    </div>
                  </div>
                </div>

                {/* AISI 4130 */}
                <div className="bg-gray-50 p-8 rounded-lg shadow-md" data-testid="aisi-4130-variant">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-semibold text-navy-primary mb-4">AISI 4130 / SAE 4130 Alloy Steel Pipes</h3>
                      <p className="text-gray-700 mb-4">
                        Chromium-molybdenum alloy steel pipes offering superior strength and toughness properties. AISI 4130 provides 
                        excellent weldability and is heat treatable to achieve various mechanical property combinations.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Alloy Composition:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Chromium: 0.80-1.10%</li>
                            <li>• Molybdenum: 0.15-0.25%</li>
                            <li>• Carbon: 0.28-0.33%</li>
                            <li>• Heat treatable for various properties</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Applications:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Aerospace structural components</li>
                            <li>• Automotive drive shafts</li>
                            <li>• Oil & gas drilling equipment</li>
                            <li>• High-stress pressure applications</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <img 
                        src={ss_pipe_mamta_steel_traders_img} 
                        alt="AISI 4130 SAE 4130 1.7218 25CrMo4 Seamless Pipes Tubes"
                        className="w-48 h-48 object-cover rounded-lg shadow-sm"
                        loading="lazy"
                        width="300"
                        height="300"
                        data-testid="aisi-4130-product-image"
                      />
                    </div>
                  </div>
                </div>

                {/* API 5L */}
                <div className="bg-gray-50 p-8 rounded-lg shadow-md" data-testid="api-5l-variant">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-semibold text-navy-primary mb-4">API 5L PSL-1 / PSL-2 Line Pipes</h3>
                      <p className="text-gray-700 mb-4">
                        Specification for line pipe used in oil and gas transmission systems. API 5L pipes are designed to handle 
                        the transportation of gas, water, and oil in the natural gas and oil industries.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Grade Options:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• API 5L Grade B</li>
                            <li>• API 5L X42, X46, X52</li>
                            <li>• API 5L X56, X60, X65, X70</li>
                            <li>• PSL-1 and PSL-2 specifications</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Applications:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Oil transmission pipelines</li>
                            <li>• Natural gas distribution</li>
                            <li>• Offshore pipeline systems</li>
                            <li>• Cross-country transmission lines</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <img 
                        src={ss_pipe_mamta_steel_traders_img} 
                        alt="API 5L Seamless Pipe Tube Stockist Supplier"
                        className="w-48 h-48 object-cover rounded-lg shadow-sm"
                        loading="lazy"
                        width="300"
                        height="300"
                        data-testid="api-5l-product-image"
                      />
                    </div>
                  </div>
                </div>

                {/* ASTM A53 Grade B */}
                <div className="bg-gray-50 p-8 rounded-lg shadow-md" data-testid="a53-grade-b-variant">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-semibold text-navy-primary mb-4">ASTM A53 Grade B Steel Pipes</h3>
                      <p className="text-gray-700 mb-4">
                        Standard specification for pipe, steel, black and hot-dipped, zinc-coated, welded and seamless. 
                        A53 Grade B is suitable for general structural and pressure applications in water, gas, and steam service.
                      </p>
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Manufacturing Types:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Seamless (Type S)</li>
                            <li>• Electric Resistance Welded (Type E)</li>
                            <li>• Furnace Welded (Type F)</li>
                            <li>• Black or galvanized finish</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-navy-primary mb-2">Applications:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Water distribution systems</li>
                            <li>• Gas distribution networks</li>
                            <li>• General structural applications</li>
                            <li>• Steam lines (moderate temperature)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center">
                      <img 
                        src={ss_pipe_mamta_steel_traders_img} 
                        alt="ASTM A53 Grade B Welded and Seamless Steel Pipe"
                        className="w-48 h-48 object-cover rounded-lg shadow-sm"
                        loading="lazy"
                        width="300"
                        height="300"
                        data-testid="a53-product-image"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA for Product Variants */}
              <div className="mt-12 text-center bg-navy-primary p-8 rounded-lg" data-testid="variants-cta">
                <h3 className="text-2xl font-bold text-white mb-4">Need Specific Grade Information?</h3>
                <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                  Our technical team can help you select the right carbon steel pipe grade for your specific application. 
                  Contact us for detailed specifications, pricing, and availability.
                </p>
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-block" data-testid="variants-contact-button">
                  Get Technical Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Chemical Composition & Mechanical Properties */}
        <section className="py-16 bg-white" data-testid="technical-specs-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="technical-specs-title">
                ASTM A106 Grade B - Chemical Composition & Mechanical Properties
              </h2>
              
              {/* Chemical Composition Table */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8" data-testid="chemical-composition-section">
                <h3 className="text-2xl font-semibold text-navy-primary mb-6">Chemical Composition (%)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm" data-testid="chemical-composition-table">
                    <thead className="bg-navy-primary text-white">
                      <tr>
                        <th className="px-4 py-3 text-left">Element</th>
                        <th className="px-4 py-3 text-center">C</th>
                        <th className="px-4 py-3 text-center">Si</th>
                        <th className="px-4 py-3 text-center">Mn</th>
                        <th className="px-4 py-3 text-center">P/S</th>
                        <th className="px-4 py-3 text-center">Cr</th>
                        <th className="px-4 py-3 text-center">Mo</th>
                        <th className="px-4 py-3 text-center">Ni</th>
                        <th className="px-4 py-3 text-center">Cu</th>
                        <th className="px-4 py-3 text-center">V</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-4 py-3 font-medium">Max/Min/Req</td>
                        <td className="px-4 py-3 text-center">0.30 max</td>
                        <td className="px-4 py-3 text-center">0.10 min</td>
                        <td className="px-4 py-3 text-center">0.29-1.06</td>
                        <td className="px-4 py-3 text-center">0.035 max</td>
                        <td className="px-4 py-3 text-center">0.40 max</td>
                        <td className="px-4 py-3 text-center">0.15 max</td>
                        <td className="px-4 py-3 text-center">0.40 max</td>
                        <td className="px-4 py-3 text-center">0.40 max</td>
                        <td className="px-4 py-3 text-center">0.08 max</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Mechanical Properties Table */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-8" data-testid="mechanical-properties-section">
                <h3 className="text-2xl font-semibold text-navy-primary mb-6">Mechanical Properties</h3>
                <div className="overflow-x-auto">
                  <table className="w-full bg-white border border-gray-200 rounded-lg shadow-sm" data-testid="mechanical-properties-table">
                    <thead className="bg-navy-primary text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">Property</th>
                        <th className="px-6 py-4 text-center">Minimum Value</th>
                        <th className="px-6 py-4 text-center">Unit</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">Tensile Strength</td>
                        <td className="px-6 py-4 text-center">415</td>
                        <td className="px-6 py-4 text-center">MPa</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">Yield Strength</td>
                        <td className="px-6 py-4 text-center">240</td>
                        <td className="px-6 py-4 text-center">MPa</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">Elongation</td>
                        <td className="px-6 py-4 text-center">30/16.5</td>
                        <td className="px-6 py-4 text-center">%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Additional Specifications */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md" data-testid="a106-specifications-section">
                  <h3 className="text-xl font-semibold text-navy-primary mb-4">ASTM A106 Seamless Pipe Specifications</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start" data-testid="spec-standard">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>Standard:</strong> ASTM A106 (ASME SA106)</span>
                    </li>
                    <li className="flex items-start" data-testid="spec-grades">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>Grades:</strong> A, B, C (Grade B most common)</span>
                    </li>
                    <li className="flex items-start" data-testid="spec-sizes">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>Sizes:</strong> ½" to 8" NB</span>
                    </li>
                    <li className="flex items-start" data-testid="spec-schedules">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>Schedules:</strong> 40 (STD) and 80 (XH)</span>
                    </li>
                    <li className="flex items-start" data-testid="spec-dimensions">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>Diameter:</strong> 10.3 to 114.3 mm</span>
                    </li>
                    <li className="flex items-start" data-testid="spec-thickness">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span><strong>Thickness:</strong> 0.8 to 12 mm</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-md" data-testid="pipe-marking-section">
                  <h3 className="text-xl font-semibold text-navy-primary mb-4">Pipe Marking Standards</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start" data-testid="marking-manufacturer">
                      <Star className="w-4 h-4 text-gold-primary mr-2 mt-1 flex-shrink-0" />
                      <span>Manufacturer's name or brand</span>
                    </li>
                    <li className="flex items-start" data-testid="marking-length">
                      <Star className="w-4 h-4 text-gold-primary mr-2 mt-1 flex-shrink-0" />
                      <span>Length of pipe</span>
                    </li>
                    <li className="flex items-start" data-testid="marking-grade">
                      <Star className="w-4 h-4 text-gold-primary mr-2 mt-1 flex-shrink-0" />
                      <span>A106 A, A106 B or A106 C</span>
                    </li>
                    <li className="flex items-start" data-testid="marking-size">
                      <Star className="w-4 h-4 text-gold-primary mr-2 mt-1 flex-shrink-0" />
                      <span>NPS Size</span>
                    </li>
                    <li className="flex items-start" data-testid="marking-schedule">
                      <Star className="w-4 h-4 text-gold-primary mr-2 mt-1 flex-shrink-0" />
                      <span>Wall thickness or designated Schedule</span>
                    </li>
                    <li className="flex items-start" data-testid="marking-test">
                      <Star className="w-4 h-4 text-gold-primary mr-2 mt-1 flex-shrink-0" />
                      <span>Hydrostatic test pressures and/or NDE</span>
                    </li>
                    <li className="flex items-start" data-testid="marking-heat">
                      <Star className="w-4 h-4 text-gold-primary mr-2 mt-1 flex-shrink-0" />
                      <span>Heat Number</span>
                    </li>
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