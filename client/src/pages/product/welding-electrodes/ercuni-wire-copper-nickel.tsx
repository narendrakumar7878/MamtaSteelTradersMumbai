import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Anchor, Zap, Settings } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function ERCuNiWire() {
  const [showAllCities, setShowAllCities] = useState(false);
  const [showAllCountries, setShowAllCountries] = useState(false);
  const specifications = [
    "AWS A5.7/A5.7M:2007 - Copper and Copper-Alloy Bare Welding Rods and Electrodes",
    "AWS A5.8/A5.8M:2004 - Filler Metals for Brazing and Braze Welding",
    "UNS C70600 (90-10 Cu-Ni) Chemical Composition",
    "MIG Wire Diameter: 0.8, 0.9, 1.0, 1.2, 1.6, 2.0 mm",
    "TIG Wire Diameter: 1.6, 2.0, 2.4, 3.2, 4.0, 4.8, 6.4, 8.0, 9.5 mm",
    "Standard Packaging: 15kg, 25kg spools",
    "Welding Process: GTAW (TIG), GMAW (MIG), Oxy-fuel welding"
  ];

  const chemicalComposition: Record<string, string> = {
    Cu: "Balance",
    Fe: "0.40 - 0.70",
    Mn: "0.50 - 1.50",
    Ni: "29.00 - 32.00",
    P: "0.020 max",
    Pb: "0.020 max",
    Si: "0.25 max",
    C: "0.040 max",
    Ti: "0.20 - 0.50",
    S: "0.010 max",
    Others: "0.50 max"
  };
  const compositionEntries = Object.entries(chemicalComposition);

  const migWireSizes = [
    { diameter: "0.8 mm", application: "Precision welding, thin sections" },
    { diameter: "0.9 mm", application: "Light gauge materials" },
    { diameter: "1.0 mm", application: "General purpose welding" },
    { diameter: "1.2 mm", application: "Medium thickness applications" },
    { diameter: "1.6 mm", application: "Heavy duty welding" },
    { diameter: "2.0 mm", application: "Thick section welding" }
  ];

  const tigWireSizes = [
    { diameter: "1.6 mm", application: "Precision TIG welding" },
    { diameter: "2.0 mm", application: "General TIG applications" },
    { diameter: "2.4 mm", application: "Medium thickness welding" },
    { diameter: "3.2 mm", application: "Heavy section welding" },
    { diameter: "4.0 mm", application: "Structural applications" },
    { diameter: "4.8 mm", application: "Heavy duty welding" },
    { diameter: "6.4 mm", application: "Large fabrication" },
    { diameter: "8.0 mm", application: "Heavy industrial welding" },
    { diameter: "9.5 mm", application: "Maximum thickness applications" }
  ];

  const ercuniFeatures = [
    "Higher electrical resistance than pure copper",
    "Exceptional high tensile strength",
    "Superior bending proof performance",
    "Excellent seawater corrosion resistance",
    "Smooth flow characteristics in welding",
    "Stable arc and spatter-free operation",
    "Clean, porosity-free weld deposits",
    "Suitable for dissimilar metal welding"
  ];

  const applications = [
    "Desalination plants and evaporators",
    "Salt and seawater processing systems",
    "Offshore platforms and marine structures",
    "Shipbuilding and naval applications",
    "Oil refineries and petrochemical plants",
    "Food processing industries",
    "Chemical process equipment",
    "Heat exchangers and condensers",
    "Power generation plant condensers",
    "70/30, 80/20, and 90/10 copper-nickel alloys welding"
  ];

  const deliveryCities = [
    "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad",
    "Surat", "Kanpur", "Jaipur", "Lucknow", "Nagpur", "Indore", "Thane", "Bhopal",
    "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Ludhiana",
    "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivali", "Vasai-Virar",
    "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad",
    "Ranchi", "Howrah", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada", "Jodhpur",
    "Madurai", "Raipur", "Kota", "Guwahati", "Chandigarh", "Solapur", "Hubli-Dharwad"
  ];

  const deliveryCountries = [
    "India", "UAE", "Saudi Arabia", "Qatar", "Kuwait", "Oman", "Bahrain", "Singapore",
    "Malaysia", "Thailand", "Vietnam", "Indonesia", "Philippines", "South Korea", "Japan",
    "China", "Hong Kong", "Taiwan", "Australia", "New Zealand", "USA", "Canada", "Mexico",
    "Brazil", "Argentina", "Chile", "Colombia", "Venezuela", "UK", "Germany", "France",
    "Italy", "Spain", "Netherlands", "Belgium", "Norway", "Sweden", "Denmark", "Finland",
    "Russia", "Turkey", "Iran", "Iraq", "Egypt", "Nigeria", "South Africa", "Morocco",
    "Algeria", "Libya", "Tunisia", "Kenya", "Ghana", "Zimbabwe", "Angola", "Mozambique"
  ];

  const relatedProducts = [
    "ERCu (Low Alloyed Copper)",
    "RbCuZn-A/B/C/D (Copper-Zinc Brass)",
    "ERCuSi-A (Silicon Bronze)",
    "ERCuSn-A (Phosphor Bronze)",
    "ERCuAl-A1/A2/A3/ERCuAlNi (Aluminum Bronze)",
    "ERCuMnNiAl (Manganese Bronze)",
    "CuNi1, CuNi2, CuNi6, CuNi10, CuNi15, CuNi20, CuNi23 Mn"
  ];



  const features = [
    { icon: Anchor, title: "Marine Excellence", desc: "Specially designed for seawater corrosion resistance and offshore applications" },
    { icon: Shield, title: "Superior Durability", desc: "Higher resistance than copper with exceptional tensile strength" },
    { icon: Award, title: "AWS Certified", desc: "AWS A5.7 & A5.8 certified ERCuNi wire for TIG and MIG welding" },
    { icon: Zap, title: "Versatile Welding", desc: "Suitable for GTAW, GMAW, and oxy-fuel welding processes" }
  ];


  return (
    <>
      <ProductSEO
        title="ERCuNi Wire TIG MIG Copper Nickel Welding Wire | AWS A5.7 Certified | Mumbai Supplier"
        description="Premium ERCuNi copper-nickel welding wire AWS A5.7 certified. TIG & MIG sizes 0.8mm-9.5mm for marine, offshore, desalination applications. Best supplier in India from Mumbai."
        keywords="ERCuNi wire, copper nickel welding wire, AWS A5.7 ERCuNi, TIG MIG wire, marine welding wire, seawater resistant wire, offshore welding, desalination plant wire, Mumbai copper nickel supplier, ERCuNi wire India"
        category="Welding Electrodes"
        productName="ERCuNi Copper Nickel Welding Wire"
        specifications={specifications}
        canonicalUrl="/product/welding-electrodes/ercuni-wire-copper-nickel"
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
              <Link href="/product/welding-electrodes" className="hover:text-navy-primary transition-colors" data-testid="breadcrumb-welding">Welding Electrodes</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">ERCuNi Wire</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                ERCuNi Wire - Premium Copper Nickel Welding Wire
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                AWS A5.7 & A5.8 certified ERCuNi wire for TIG/MIG welding. Perfect for marine, offshore & seawater applications
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
              Why Choose Mamta Steel Traders ERCuNi Wire?
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

        {/* Chemical Composition */}
        <section className="py-16 bg-gray-50" data-testid="composition-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="composition-title">
                Chemical Composition
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-md">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left">Element</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compositionEntries.map(([element, percentage], index) => (
                      <tr key={element} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-navy-primary">{element}</td>
                        <td className="border border-gray-300 px-4 py-3">{percentage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Product Description */}
        <section className="py-16 bg-white" data-testid="product-description-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="description-title">
                ERCuNi Copper-Nickel Welding Wire
              </h2>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg border border-gray-200 p-8">
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    <strong>ERCuNi Wire</strong> is specially designed for gas metal arc welding (GMAW) and gas tungsten arc welding (GTAW). 
                    It can also be effectively used for oxy-fuel welding of 70/30, 80/20, and 90/10 copper-nickel alloys.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    This copper-nickel alloy welding wire is exceptionally suited for seawater corrosion resistance applications. 
                    It is particularly ideal for welding and hard facing in marine environments, desalination plants, shipbuilding, 
                    oil refineries, and food processing industries.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    <strong>Mamta Steel Traders</strong> is a premier stockist, supplier, and exporter of AWS A5.7 & A5.8 
                    ERCuNi Copper-Nickel Welding Wire based in Mumbai, Maharashtra, India, serving clients worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MIG & TIG Wire Sizes */}
        <section className="py-16 bg-gray-50" data-testid="wire-sizes-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="sizes-title">
                Available MIG & TIG Wire Sizes
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* MIG Wire Sizes */}
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white px-6 py-4">
                    <h3 className="text-xl font-semibold">MIG Wire Diameters</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {migWireSizes.map((size, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300" data-testid={`mig-size-${index}`}>
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-navy-primary text-lg">{size.diameter}</span>
                            <span className="text-gray-600">{size.application}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* TIG Wire Sizes */}
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white px-6 py-4">
                    <h3 className="text-xl font-semibold">TIG Wire Diameters</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {tigWireSizes.map((size, index) => (
                        <div key={index} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300" data-testid={`tig-size-${index}`}>
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-navy-primary text-lg">{size.diameter}</span>
                            <span className="text-gray-600">{size.application}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ERCuNi Features */}
        <section className="py-16 bg-white" data-testid="ercuni-features-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="ercuni-features-title">
                ERCuNi Wire Features & Benefits
              </h2>
              <div className="grid md:grid-cols-1 gap-4">
                {ercuniFeatures.map((feature, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300" data-testid={`ercuni-feature-${index}`}>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-gold-primary mr-4 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed text-lg">{feature}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-gray-50" data-testid="specifications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="specifications-title">
                Technical Specifications
              </h2>
              <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                <div className="bg-navy-primary text-white px-6 py-4">
                  <h3 className="text-xl font-semibold">Specification Standards</h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-1 gap-4">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex items-start" data-testid={`specification-${index}`}>
                        <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="py-16 bg-white" data-testid="applications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="applications-title">
                ERCuNi Wire Applications
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {applications.map((application, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300" data-testid={`application-${index}`}>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-navy-primary rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                        <Star className="w-4 h-4 text-gold-primary" />
                      </div>
                      <p className="text-gray-700 leading-relaxed">{application}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-16 bg-gray-50" data-testid="related-products-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="related-title">
                Other Copper & Copper-Based Alloy Products
              </h2>
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white px-6 py-4">
                  <h3 className="text-xl font-semibold">Available TIG & MIG Welding Wires (AWS A5.7 & A5.8)</h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {relatedProducts.map((product, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4 hover:shadow-md transition-shadow duration-300" data-testid={`related-product-${index}`}>
                        <div className="flex items-start">
                          <Settings className="w-5 h-5 text-gold-primary mr-3 mt-1 flex-shrink-0" />
                          <span className="text-gray-700 leading-relaxed">{product}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Delivery Coverage */}
        <section className="py-16 bg-white" data-testid="delivery-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="delivery-title">
                Worldwide Delivery Coverage
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Cities */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  <div className="bg-navy-primary text-white px-6 py-4">
                    <h3 className="text-xl font-semibold flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Major Indian Cities We Supply To
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {deliveryCities.slice(0, showAllCities ? deliveryCities.length : 25).map((city, index) => (
                          <span key={index} className="bg-navy-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                            {city}
                          </span>
                        ))}
                      </div>
                      {deliveryCities.length > 25 && (
                        <button 
                          onClick={() => setShowAllCities(!showAllCities)}
                          className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300"
                          data-testid="toggle-cities"
                        >
                          {showAllCities ? 'Show Less Cities' : `Show All ${deliveryCities.length} Cities`}
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Countries */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  <div className="bg-navy-primary text-white px-6 py-4">
                    <h3 className="text-xl font-semibold flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Countries We Export To
                    </h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {deliveryCountries.slice(0, showAllCountries ? deliveryCountries.length : 20).map((country, index) => (
                          <span key={index} className="bg-gold-primary text-navy-primary px-3 py-1 rounded-full text-sm font-medium">
                            {country}
                          </span>
                        ))}
                      </div>
                      {deliveryCountries.length > 20 && (
                        <button 
                          onClick={() => setShowAllCountries(!showAllCountries)}
                          className="bg-navy-primary hover:bg-navy-secondary text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300"
                          data-testid="toggle-countries"
                        >
                          {showAllCountries ? 'Show Less Countries' : `Show All ${deliveryCountries.length} Countries`}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Summary */}
        <section className="py-16 bg-gray-50" data-testid="specs-summary-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="specs-summary-title">
                ERCuNi Wire Technical Summary
              </h2>
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Applications Summary */}
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  <div className="bg-navy-primary text-white px-6 py-4">
                    <h3 className="text-lg font-semibold">Key Applications</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-gold-primary mr-2" />Marine & Offshore</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-gold-primary mr-2" />Desalination Plants</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-gold-primary mr-2" />Oil & Gas Industry</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-gold-primary mr-2" />Food Processing</li>
                    </ul>
                  </div>
                </div>

                {/* Wire Sizes Summary */}
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  <div className="bg-navy-primary text-white px-6 py-4">
                    <h3 className="text-lg font-semibold">Available Sizes</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      <div>
                        <span className="font-semibold text-navy-primary">MIG Wire:</span>
                        <p className="text-sm text-gray-600">0.8, 0.9, 1.0, 1.2, 1.6, 2.0 mm</p>
                      </div>
                      <div>
                        <span className="font-semibold text-navy-primary">TIG Wire:</span>
                        <p className="text-sm text-gray-600">1.6, 2.0, 2.4, 3.2, 4.0, 4.8, 6.4, 8.0, 9.5 mm</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Standards & Certification */}
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  <div className="bg-navy-primary text-white px-6 py-4">
                    <h3 className="text-lg font-semibold">Standards & Quality</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-center"><Award className="w-4 h-4 text-gold-primary mr-2" />AWS A5.7:2007</li>
                      <li className="flex items-center"><Award className="w-4 h-4 text-gold-primary mr-2" />AWS A5.8:2004</li>
                      <li className="flex items-center"><Shield className="w-4 h-4 text-gold-primary mr-2" />High Quality Assurance</li>
                      <li className="flex items-center"><CheckCircle className="w-4 h-4 text-gold-primary mr-2" />Mumbai Supplier</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-navy-primary to-navy-secondary text-white" data-testid="cta-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="cta-title">
                Ready to Order ERCuNi Copper-Nickel Wire?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get premium AWS A5.7 & A5.8 certified ERCuNi wire with fast delivery worldwide
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-contact">
                  Request Quote
                </Link>
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <div className="flex items-center" data-testid="contact-phone">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href="tel:+919876543210" className="hover:text-gold-primary transition-colors">+91 98765 43210</a>
                  </div>
                  <div className="flex items-center" data-testid="contact-email">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href="mailto:info@mamtasteel.com" className="hover:text-gold-primary transition-colors">info@mamtasteel.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}