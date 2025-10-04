import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";

export default function AluminiumAlloyRoundBars() {
  const aluminiumProducts = [
    {
      id: 1,
      title: "2014 T6 Round Bars",
      image: "https://textronsteelalloys.com/wp-content/uploads/2025/05/2014-round-bar-300x300.jpg",
      alt: "2014 T6 Round Bars Hindalco Jindal",
      link: "/contact",
      description: "High strength aluminum alloy with excellent machinability"
    },
    {
      id: 2,
      title: "2024 T6 Round Bars",
      image: "https://textronsteelalloys.com/wp-content/uploads/2025/06/2024-T6-T851-Round-Bars-300x300.jpeg",
      alt: "2024 T6 T851 Round Bars AMS 4339 4112",
      link: "/contact",
      description: "Aerospace grade aluminum with superior strength-to-weight ratio"
    },
    {
      id: 3,
      title: "5083 H111 Round Bars",
      image: "https://textronsteelalloys.com/wp-content/uploads/2019/11/5083-h111-Aluminium-Round-Bar-300x300.jpg",
      alt: "5083 H111 Aluminium Round Bar Marine Grade",
      link: "/contact",
      description: "Marine grade aluminum with excellent corrosion resistance"
    },
    {
      id: 4,
      title: "6061 T6 Round Bars",
      image: "https://textronsteelalloys.com/wp-content/uploads/2025/08/6061-T6-Round-Bars-300x300.jpg",
      alt: "Aluminium 6061 T6 Round Bars General Purpose",
      link: "/contact",
      description: "Most versatile aluminum alloy for general engineering applications"
    },
    {
      id: 5,
      title: "Aluminium 2024 Round Bars",
      image: "https://textronsteelalloys.com/wp-content/uploads/2025/04/Aluminium-2024-Round-Bars-300x300.jpeg",
      alt: "Aluminium 2024 Round Bars Aircraft Grade",
      link: "/contact",
      description: "Aircraft structural components with high fatigue resistance"
    },
    {
      id: 6,
      title: "Aluminium 24345 Round Bar",
      image: "https://textronsteelalloys.com/wp-content/uploads/woocommerce-placeholder-300x300.png",
      alt: "Aluminium 24345 Round Bar Special Alloy",
      link: "/contact",
      description: "Specialized aluminum alloy for specific industrial applications"
    }
  ];

  const specifications = [
    "ASTM B221 - Standard Specification for Aluminum and Aluminum-Alloy Extruded Bars, Rods, Wire, Profiles, and Tubes",
    "ASTM B211 - Standard Specification for Aluminum and Aluminum-Alloy Rolled or Extruded Bar, Rod, and Wire", 
    "ASTM B247 - Standard Specification for Aluminum and Aluminum-Alloy Die Forgings, Hand Forgings, and Rolled Ring Forgings",
    "ASTM B316/B316M - Standard Specification for Aluminum and Aluminum-Alloy Rivet and Cold-Heading Wire and Rods",
    "EN 573 - Aluminium and aluminium alloys - Chemical composition and form of wrought products",
    "EN 755 - Aluminium and aluminium alloys - Extruded rod/bar, tube and profiles",
    "AA (Aluminum Association) Standards - 2xxx, 5xxx, 6xxx, 7xxx Series",
    "AMS (Aerospace Material Specifications) - AMS 4339, AMS 4112, AMS 4126",
    "JIS H4040 - Aluminium and aluminium alloy bars and rods",
    "IS 737 - Specification for wrought aluminium and aluminium alloy bars, rods and sections",
    "Diameter Range: 6mm to 500mm diameter",
    "Tempers: T6, T651, T851, H111, O (Annealed)",
    "Alloys: 2014, 2024, 5083, 6061, 6063, 6082, 7075, 7050, 24345"
  ];

  const applications = [
    "Aerospace and Aircraft Structural Components",
    "Defense and Military Applications", 
    "Automotive Industry - Engine Parts, Chassis Components",
    "Marine and Shipbuilding - Hull Structures, Deck Fittings",
    "Railway and Transportation Systems",
    "Electrical and Electronic Components - Heat Sinks, Conductors",
    "Mechanical Engineering - Precision Machined Parts",
    "Oil and Gas Industry - Offshore Equipment",
    "Chemical and Petrochemical Plants",
    "Sporting Goods and Recreation Equipment",
    "Architectural and Construction - Window Frames, Structural Elements",
    "Food Processing Equipment - Non-contaminating Applications",
    "Medical Device Components",
    "Robotics and Automation Systems",
    "Telecommunications Equipment",
    "Power Generation Equipment"
  ];

  const features = [
    { icon: Shield, title: "Lightweight", desc: "One-third the weight of steel with excellent strength-to-weight ratio" },
    { icon: TrendingUp, title: "High Strength", desc: "Heat treatable alloys provide superior mechanical properties" },
    { icon: Award, title: "Corrosion Resistant", desc: "Natural oxide layer provides excellent corrosion protection" },
    { icon: CheckCircle, title: "Machining Excellence", desc: "Excellent machinability and surface finish characteristics" }
  ];

  return (
    <>
      <ProductSEO
        title="Aluminium Alloy Round Bars - 2014, 2024, 5083, 6061 T6 | Aerospace Grade | Mumbai Supplier | Mamta Steel Traders"
        description="Premium aluminium alloy round bars: 2014 T6, 2024 T6, 5083 H111, 6061 T6. ASTM B221, B211, AMS 4339 certified. Aerospace, marine, automotive applications. Best prices Mumbai. Worldwide shipping available."
        keywords="aluminium alloy round bars, aluminum round bars, 2014 t6 round bars, 2024 t6 round bars, 6061 t6 round bars, 5083 h111 bars, aerospace aluminum, marine grade aluminum, ASTM B221 bars, ASTM B211 bars, AMS 4339, aircraft aluminum, Mumbai aluminum supplier, India aluminum exporter, lightweight aluminum bars, high strength aluminum alloy, corrosion resistant aluminum"
        canonicalUrl="/product/round-bars/aluminium-alloy"
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
              <Link href="/product/round-bars" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-round-bars">Round Bars</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Aluminium Alloy Round Bars</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Aluminium Alloy Round Bars
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                Lightweight, high-strength aluminium alloy round bars for aerospace, automotive, and precision engineering applications
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
              Why Choose Our Aluminium Alloy Round Bars?
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
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Standards & Alloys</h3>
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

        {/* Products Grid */}
        <section className="py-16 bg-gray-50" data-testid="products-grid">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-4" data-testid="products-title">
                Our Aluminium Alloy Round Bar Products
              </h2>
              <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
                Complete range of premium aluminium alloy round bars for aerospace, marine, automotive, and industrial applications. 
                All grades available with mill test certificates and worldwide shipping.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {aluminiumProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 overflow-hidden group" data-testid={`product-${product.id}`}>
                    <div className="relative overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.alt}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 bg-navy-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Premium Grade
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-navy-primary mb-3" data-testid={`product-title-${product.id}`}>
                        {product.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span>ASTM Certified</span>
                        </div>
                        <Link 
                          href={product.link} 
                          className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-4 py-2 rounded-lg font-semibold transition-colors text-sm"
                          data-testid={`product-cta-${product.id}`}
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Additional Product Info */}
              <div className="bg-gradient-to-r from-navy-primary to-navy-secondary rounded-2xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Need Custom Sizes or Special Alloys?</h3>
                <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
                  We can supply custom dimensions, special tempers, and certificate requirements. 
                  Contact our technical team for detailed specifications and pricing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors">
                    Request Custom Quote
                  </Link>
                  <a href="tel:+919819322576" className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors">
                    Call: +91 99674 44008
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Keywords Section */}
        <section className="py-16 bg-white" data-testid="seo-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-navy-primary mb-8" data-testid="seo-title">
                Popular Searches for Aluminium Alloy Round Bars
              </h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-navy-primary mb-4">By Alloy Grade</h3>
                  <div className="flex flex-wrap gap-2">
                    {["2014 aluminum round bar", "2024 aluminum round bar", "6061 aluminum round bar", "5083 aluminum round bar", "7075 aluminum round bar", "6082 aluminum round bar"].map((keyword, index) => (
                      <span key={index} className="px-3 py-1 bg-navy-primary text-white text-xs rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-navy-primary mb-4">By Application</h3>
                  <div className="flex flex-wrap gap-2">
                    {["aerospace aluminum bars", "marine aluminum rods", "automotive aluminum", "aircraft aluminum", "lightweight aluminum bars", "structural aluminum"].map((keyword, index) => (
                      <span key={index} className="px-3 py-1 bg-navy-primary text-white text-xs rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-navy-primary mb-4">By Location</h3>
                  <div className="flex flex-wrap gap-2">
                    {["aluminum bars Mumbai", "aluminum supplier India", "aluminum exporter", "aluminum stockist Mumbai", "aluminum dealer India", "aluminum distributor"].map((keyword, index) => (
                      <span key={index} className="px-3 py-1 bg-navy-primary text-white text-xs rounded-full">
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Aluminium Alloy Grades */}
        <section className="py-16 bg-gray-50" data-testid="alloy-grades-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="alloy-grades-title">
                Available Aluminium Alloy Grades
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="alloy-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Alloy</th>
                      <th className="px-6 py-4 text-left">Series</th>
                      <th className="px-6 py-4 text-left">Temper</th>
                      <th className="px-6 py-4 text-left">Key Applications</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">2024</td>
                      <td className="px-6 py-4">2xxx (Al-Cu)</td>
                      <td className="px-6 py-4">T4, T6, T351</td>
                      <td className="px-6 py-4">Aerospace structures, aircraft components</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">6061</td>
                      <td className="px-6 py-4">6xxx (Al-Mg-Si)</td>
                      <td className="px-6 py-4">T6, T651</td>
                      <td className="px-6 py-4">General engineering, automotive, marine</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">6082</td>
                      <td className="px-6 py-4">6xxx (Al-Mg-Si)</td>
                      <td className="px-6 py-4">T6, T651</td>
                      <td className="px-6 py-4">Structural applications, machinery</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold">7075</td>
                      <td className="px-6 py-4">7xxx (Al-Zn)</td>
                      <td className="px-6 py-4">T6, T651</td>
                      <td className="px-6 py-4">Aerospace, high-stress applications</td>
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
                Ready to Order Aluminium Alloy Round Bars?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes and technical support from our aluminium alloy specialists
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