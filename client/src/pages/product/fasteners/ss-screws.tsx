import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Wrench, Package, Target } from "lucide-react";
import { Link } from "wouter";

export default function StainlessSteelScrews() {
  const specifications = [
    "Material Grades: SS 304, 304L, 316, 316L, 310, 321, 347, 904L, Duplex 2205, Super Duplex 2507",
    "Standards: DIN 7991, DIN 912, ISO 14579, ISO 7380, ANSI/ASME B18.3.1M, JIS B1176",
    "Size Range: M2 to M48 | #0 to 2\" | Thread Length: Full and Partial Threading",
    "Drive Types: Phillips, Slotted, Hex Allen, Torx, Square Drive",
    "Head Styles: Button Head, Socket Head, Countersunk, Pan Head, Flat Head",
    "Property Classes: A2-70, A4-80, A4-100 for stainless steel grades",
    "Surface Finish: Plain, Passivated, Electropolished, Black Oxide",
    "Temperature Range: -200°C to +800°C depending on grade and application"
  ];

  const screwTypes = [
    {
      name: "Socket Head Cap Screws",
      description: "Cylindrical head screws with hexagonal socket drive for high strength applications",
      grades: ["SS 316L", "SS 304", "A4-80", "A2-70"],
      sizes: "M2-M48, #0-2\"",
      standards: ["DIN 912", "ISO 4762", "ASME B18.3.1M"],
      applications: ["Precision machinery", "Aerospace", "Medical devices", "Automotive"],
      driveType: "Hex Allen Key",
      headStyle: "Cylindrical",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/12/470522801/FX/AD/VP/69800097/stainless-steel-fasteners-manufacturers-250x250.jpg"
    },
    {
      name: "Socket Button Head Screws",
      description: "Low profile button head screws with hex socket for aesthetic and functional applications",
      grades: ["SS 304", "SS 316L", "A2-70", "A4-80"],
      sizes: "M3-M20, #4-3/4\"",
      standards: ["ISO 7380", "DIN 7380", "ASME B18.3.4M"],
      applications: ["Electronics", "Furniture", "Decorative", "Automotive trim"],
      driveType: "Hex Allen Key",
      headStyle: "Low Profile Button",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/3/291916365/PS/WK/TN/31502840/stainless-steel-fasteners-250x250.jpg"
    },
    {
      name: "Countersunk Head Screws",
      description: "Flat head screws designed to sit flush with surface for clean finished appearance",
      grades: ["SS 304", "SS 316L", "SS 321"],
      sizes: "M3-M20, #6-1\"",
      standards: ["DIN 7991", "ISO 10642", "ASME B18.3.5M"],
      applications: ["Furniture", "Architectural", "Marine hardware", "Electronics enclosures"],
      driveType: "Hex Allen, Phillips",
      headStyle: "Flat Countersunk",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/1/379246059/XC/CD/CI/4256871/ss-foundation-bolt-250x250.webp"
    },
    {
      name: "Wood Screws",
      description: "Self-tapping screws with aggressive thread design for wood and soft material applications",
      grades: ["SS 304", "SS 316L", "A2"],
      sizes: "#6-#14, 6mm-12mm",
      standards: ["DIN 96", "ISO 1482", "ASME B18.6.1"],
      applications: ["Outdoor furniture", "Marine decking", "Construction", "Cabinetry"],
      driveType: "Phillips, Slotted, Torx",
      headStyle: "Pan, Flat, Round",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/3/396905667/GJ/DV/UM/549408/super-duplex-steel-2507-fasteners-250x250.jpg"
    },
    {
      name: "Self-Tapping Screws",
      description: "Thread-forming screws for sheet metal and plastic applications without pre-drilling",
      grades: ["SS 304", "SS 316", "A2-70"],
      sizes: "#2-#14, M2.2-M6.3",
      standards: ["DIN 7982", "ISO 7049", "ASME B18.6.4"],
      applications: ["HVAC", "Automotive", "Electronics", "Sheet metal assembly"],
      driveType: "Phillips, Hex, Torx",
      headStyle: "Pan, Flat, Hex",
      image: "https://5.imimg.com/data5/SELLER/Default/2023/9/347650627/GC/SP/JQ/1566860/industrial-metal-fasteners-250x250.jpg"
    },
    {
      name: "Thumb Screws",
      description: "Hand-operated screws with large knurled heads for tool-free operation",
      grades: ["SS 304", "SS 316L", "Duplex"],
      sizes: "M4-M12, #8-1/2\"",
      standards: ["DIN 464", "Custom", "ASME B18.6.9"],
      applications: ["Laboratory equipment", "Food processing", "Access panels", "Adjustment screws"],
      driveType: "Hand Operation",
      headStyle: "Knurled Thumb",
      image: "https://5.imimg.com/data5/SELLER/Default/2022/12/RZ/CM/AZ/1437532/ss-fasteners-250x250.jpg"
    }
  ];

  const technicalSpecs = [
    {
      property: "Tensile Strength",
      ss304: "700 MPa min",
      ss316l: "800 MPa min",
      ss321: "700 MPa min",
      duplex2205: "850 MPa min"
    },
    {
      property: "Yield Strength",
      ss304: "450 MPa min",
      ss316l: "600 MPa min",
      ss321: "450 MPa min",
      duplex2205: "550 MPa min"
    },
    {
      property: "Elongation",
      ss304: "40% min",
      ss316l: "35% min",
      ss321: "40% min",
      duplex2205: "25% min"
    },
    {
      property: "Hardness",
      ss304: "HRB 85 max",
      ss316l: "HRB 90 max",
      ss321: "HRB 85 max",
      duplex2205: "HRC 32 max"
    },
    {
      property: "Temperature Range",
      ss304: "-200°C to +300°C",
      ss316l: "-200°C to +400°C",
      ss321: "-200°C to +800°C",
      duplex2205: "-50°C to +300°C"
    }
  ];

  const driveTypes = [
    {
      name: "Hex Allen Key",
      description: "Six-sided recess for maximum torque transmission",
      advantages: ["High torque capacity", "Precise fit", "Less cam-out"],
      applications: ["Precision machinery", "High-stress joints", "Automotive"]
    },
    {
      name: "Phillips",
      description: "Cross-shaped recess for general purpose applications",
      advantages: ["Self-centering", "Common tooling", "Good for production"],
      applications: ["General assembly", "Electronics", "Furniture"]
    },
    {
      name: "Torx",
      description: "Star-shaped recess providing superior torque transmission",
      advantages: ["Higher torque", "Less wear", "Reduced cam-out"],
      applications: ["Automotive", "Electronics", "Security applications"]
    },
    {
      name: "Slotted",
      description: "Traditional single slot design for basic applications",
      advantages: ["Simple tooling", "Economical", "Easy manufacture"],
      applications: ["General purpose", "Decorative", "Low-torque joints"]
    }
  ];

  const applications = [
    "Marine and Offshore Equipment - Exceptional corrosion resistance in saltwater environments",
    "Food Processing Machinery - FDA approved grades for direct food contact applications",
    "Chemical Processing Plants - Resistance to aggressive chemicals and high temperatures", 
    "Medical and Pharmaceutical Equipment - Biocompatible and sterilizable materials",
    "Aerospace Applications - Lightweight, high strength, and temperature resistant",
    "Automotive Industry - Under-hood applications and exhaust system components",
    "Electronic Enclosures - EMI shielding and corrosion protection",
    "Architectural Hardware - Weather resistance and aesthetic appeal"
  ];

  const features = [
    { icon: Shield, title: "Corrosion Resistant", desc: "Superior resistance to rust, chemicals, and environmental conditions" },
    { icon: TrendingUp, title: "High Strength", desc: "Excellent tensile and shear strength for demanding applications" },
    { icon: Award, title: "Quality Certified", desc: "Mill test certificates and compliance with international standards" },
    { icon: Wrench, title: "Precision Manufactured", desc: "Tight tolerances and consistent thread quality" },
    { icon: Package, title: "Complete Range", desc: "Full range of sizes, drives, and head styles available" },
    { icon: Target, title: "Application Specific", desc: "Specialized designs for specific industrial requirements" }
  ];

  return (
    <>
      <ProductSEO
        title="Stainless Steel Screws - SS 304, 316L Socket Head, Button Head, Countersunk, Wood Screws | Mumbai Manufacturer"
        description="Premium stainless steel screws manufacturer in Mumbai. SS 304, 316L, 321 socket head cap screws, button head screws, countersunk screws, wood screws, self-tapping screws."
        keywords="stainless steel screws, SS 304 screws, SS 316L screws, socket head cap screws, button head screws, countersunk screws, wood screws, self-tapping screws, thumb screws, hex allen screws, phillips screws, torx screws, marine grade screws, food grade screws, chemical resistant screws, duplex steel screws, Mumbai screws manufacturer, A2-70 screws, A4-80 screws, DIN 912 screws, ISO 4762 screws"
        category="Fasteners"
        productName="Stainless Steel Screws"
        specifications={specifications}
        canonicalUrl="/product/fasteners/ss-screws"
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
              <Link href="/product/fasteners" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-fasteners">Fasteners</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Stainless Steel Screws</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                Premium Stainless Steel Screws
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                Complete range of corrosion-resistant SS screws including socket head, button head, countersunk, and wood screws
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-get-quote">
                  Get Quote Now
                </Link>
                <Link href="#screw-types" className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-view-products">
                  View Products
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white" data-testid="features-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="features-title">
                Why Choose Our Stainless Steel Screws?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center p-6 rounded-lg hover:shadow-md transition-shadow" data-testid={`feature-${index}`}>
                    <div className="w-16 h-16 mx-auto mb-4 bg-gold-primary/20 rounded-full flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-gold-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy-primary mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Screw Types Grid */}
        <section id="screw-types" className="py-16 bg-gray-50" data-testid="screw-types-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-4" data-testid="screw-types-title">
                Stainless Steel Screw Types
              </h2>
              <p className="text-center text-gray-600 mb-12 text-lg">
                Comprehensive range of stainless steel screws for every industrial and commercial application
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {screwTypes.map((screw, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden" data-testid={`screw-${index}`}>
                    <img 
                      src={screw.image} 
                      alt={screw.name}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-navy-primary mb-3">{screw.name}</h3>
                      <p className="text-gray-600 mb-4">{screw.description}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-1">Available Grades:</h4>
                          <div className="flex flex-wrap gap-1">
                            {screw.grades.map((grade, gradeIndex) => (
                              <span key={gradeIndex} className="bg-gold-primary/20 text-navy-primary px-2 py-1 rounded text-xs font-medium">
                                {grade}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-1">Size Range:</h4>
                          <p className="text-sm text-gray-600">{screw.sizes}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-1">Drive Type:</h4>
                          <p className="text-sm text-gray-600">{screw.driveType}</p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-700 mb-1">Head Style:</h4>
                          <p className="text-sm text-gray-600">{screw.headStyle}</p>
                        </div>
                      </div>
                      
                      <Link href="/contact" className="text-gold-primary hover:text-gold-secondary font-medium text-sm">
                        Request Quote →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Properties Table */}
        <section className="py-16 bg-white" data-testid="technical-specs-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="tech-specs-title">
                Technical Properties by Grade
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-white border border-gray-200 rounded-lg shadow-md" data-testid="tech-table">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Property</th>
                      <th className="px-6 py-4 text-left">SS 304</th>
                      <th className="px-6 py-4 text-left">SS 316L</th>
                      <th className="px-6 py-4 text-left">SS 321</th>
                      <th className="px-6 py-4 text-left">Duplex 2205</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {technicalSpecs.map((spec, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">{spec.property}</td>
                        <td className="px-6 py-4">{spec.ss304}</td>
                        <td className="px-6 py-4">{spec.ss316l}</td>
                        <td className="px-6 py-4">{spec.ss321}</td>
                        <td className="px-6 py-4">{spec.duplex2205}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Drive Types */}
        <section className="py-16 bg-gray-50" data-testid="drive-types-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="drive-types-title">
                Drive Types & Applications
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {driveTypes.map((drive, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md" data-testid={`drive-${index}`}>
                    <h3 className="text-xl font-semibold text-navy-primary mb-3">{drive.name}</h3>
                    <p className="text-gray-600 mb-4">{drive.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Advantages:</h4>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {drive.advantages.map((advantage, advIndex) => (
                          <li key={advIndex}>{advantage}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-700 mb-2">Applications:</h4>
                      <p className="text-sm text-gray-600">{drive.applications.join(", ")}</p>
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
                Technical Specifications & Applications
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-lg shadow-md" data-testid="specifications-list">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Technical Specifications</h3>
                  <ul className="space-y-3">
                    {specifications.map((spec, index) => (
                      <li key={index} className="flex items-start" data-testid={`spec-${index}`}>
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg shadow-md" data-testid="applications-list">
                  <h3 className="text-2xl font-semibold text-navy-primary mb-6">Industrial Applications</h3>
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

        {/* Popular Search Keywords */}
        <section className="py-16 bg-gray-50" data-testid="keywords-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-primary mb-8" data-testid="keywords-title">
                Popular Stainless Steel Screw Searches
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "SS 304 Socket Screws", "SS 316L Button Head", "Countersunk SS Screws", "Marine Grade Screws",
                  "Food Grade SS Screws", "Wood Screws Stainless", "Self-Tapping SS", "Hex Allen Screws",
                  "Phillips Head Screws", "Torx Screws SS", "Chemical Resistant Screws", "A2-70 Screws",
                  "A4-80 Screws", "DIN 912 Screws", "ISO 4762 Screws", "Thumb Screws SS"
                ].map((keyword, index) => (
                  <span key={index} className="bg-white px-4 py-2 rounded-full text-sm font-medium text-navy-primary border border-gray-200 hover:shadow-md transition-shadow">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-navy-primary text-white" data-testid="contact-cta-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="cta-title">
                Need Stainless Steel Screws for Your Project?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get the exact grade, size, drive type, and quantity with certified mill test certificates
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
                Get SS Screws Quote
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}