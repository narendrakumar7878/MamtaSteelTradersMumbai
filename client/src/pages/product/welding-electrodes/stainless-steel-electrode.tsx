import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function StainlessSteelElectrodes() {
  const [showAllCities, setShowAllCities] = useState(false);
  const [showAllCountries, setShowAllCountries] = useState(false);
  const specifications = [
    "AWS A5.4 E307-16 Classification",
    "JIS Z3221 ES307-16 Standard",
    "Size: 2.5mm to 5.0mm and custom sizes",
    "Current type: AC and DC+",
    "Hardness: 50-56 HRC (520-620 HV)",
    "Types: Round electrode",
    "Grade: AWS A5.4 E307-16",
    "Length: 350mm standard"
  ];

  const e307Features = [
    "Sound gas shielding",
    "Good arc properties",
    "High arc voltage",
    "Excellent electrical conductivity",
    "Easy slag removal",
    "Superior root pass capability",
    "Weldable in all positions (flat, horizontal, vertical, overhead)",
    "Controlled hydrogen formation for clean welds"
  ];

  const chemicalComposition = {
    C: "0.05",
    Mn: "5.66",
    Si: "0.68", 
    Ni: "9.73",
    Cr: "19.87",
    Mo: "0.98"
  };

  const mechanicalProperties = {
    tensileStrength: "640 N/mm² (93 ksi)",
    elongation: "46%"
  };

  const operatingData = [
    { diameter: "Ø 2.5 mm", length: "350 mm", current: "50 – 80 A" },
    { diameter: "Ø 3.15 mm", length: "350 mm", current: "80 – 110 A" },
    { diameter: "Ø 4.0 mm", length: "350 mm", current: "100 – 135 A" },
    { diameter: "Ø 5.0 mm", length: "350 mm", current: "140 – 180 A" }
  ];

  const dimensionSpecs = [
    { diameter: "Ø 2.5 mm", length: "350 mm", weightPerBox: "2.00 kg", weightPerCarton: "10.00 kg" },
    { diameter: "Ø 3.15 mm", length: "350 mm", weightPerBox: "2.00 kg", weightPerCarton: "10.00 kg" },
    { diameter: "Ø 4.0 mm", length: "350 mm", weightPerBox: "2.00 kg", weightPerCarton: "10.00 kg" },
    { diameter: "Ø 5.0 mm", length: "350 mm", weightPerBox: "2.00 kg", weightPerCarton: "10.00 kg" }
  ];

  const e307Applications = [
    "Welding of 14% Mn steel and armor steel plates",
    "Hardenable steel and difficult-to-weld steels",
    "Joining wear plates to supports",
    "Dissimilar metal welding (stainless to carbon steel)",
    "Buffer layers for hard facing applications",
    "Rails building and buttering layers",
    "Steel making and public works",
    "Mining, carrying and dredging equipment"
  ];

  const e307TopFeatures = [
    "Rutile-basic all position 5% Mn-alloyed stainless steel electrode",
    "Specially developed for steels difficult to weld, such as armor plates",
    "Ideal for austenitic high Mn-steels welding",
    "Commonly used as buffer layer in hardfacing applications",
    "Weldable on both AC and DC+ polarity",
    "Full austenite structure with 4-5% Mn content",
    "Highly resistant to impact, wearing and hot cracking"
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

  const features = [
    { icon: Shield, title: "High Mn Content", desc: "5% Manganese for superior resistance to impact and hot cracking" },
    { icon: TrendingUp, title: "Buffer Layer Specialist", desc: "Ideal for hard facing applications and armor steel welding" },
    { icon: Award, title: "AWS A5.4 E307-16", desc: "Certified to AWS A5.4 and JIS Z3221 ES307-16 standards" },
    { icon: CheckCircle, title: "All Position Welding", desc: "Suitable for flat, horizontal, vertical and overhead positions" }
  ];

  const weldingPositions = [
    { position: "1G", description: "Flat Position", suitable: "E307-16 - Excellent performance" },
    { position: "2G", description: "Horizontal Fillet", suitable: "E307-16 - Recommended for all applications" },
    { position: "3G", description: "Vertical Position", suitable: "E307-16 - Good for upward and downward welding" },
    { position: "4G", description: "Overhead Position", suitable: "E307-16 - Suitable with proper technique" }
  ];

  return (
    <>
      <ProductSEO
        title="E307-16 Stainless Steel Welding Electrodes | AWS A5.4 Certified | Mumbai Supplier"
        description="Premium E307-16 stainless steel welding electrodes AWS A5.4 certified. High manganese content for armor steel, dissimilar metal welding. Sizes 2.5mm-5.0mm. Mumbai stockist, supplier & exporter."
        keywords="E307-16 electrodes, stainless steel E307-16, AWS A5.4 E307-16, welding electrodes Mumbai, armor steel welding, dissimilar metal welding, buffer layer electrodes, E307-16 supplier India"
        category="Welding Electrodes"
        productName="E307-16 Stainless Steel Welding Electrodes"
        specifications={specifications}
        canonicalUrl="/product/welding-electrodes/stainless-steel-electrode"
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
              <span className="text-navy-primary font-medium" data-testid="breadcrumb-current">Stainless Steel Electrodes</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-16" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="hero-title">
                E307-16 Stainless Steel Welding Electrodes
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100" data-testid="hero-subtitle">
                AWS A5.4 Certified E307-16 electrodes with 5% Mn content for armor steel welding and dissimilar metal joining
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
              Why Choose Our Stainless Steel Electrodes?
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

        {/* E307-16 Applications */}
        <section className="py-16 bg-gray-50" data-testid="applications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="applications-title">
                E307-16 Applications
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                {e307Applications.map((application, index) => (
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

        {/* Top Features */}
        <section className="py-16 bg-white" data-testid="top-features-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="top-features-title">
                Top Features of E307-16
              </h2>
              <div className="grid md:grid-cols-1 gap-4">
                {e307TopFeatures.map((feature, index) => (
                  <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300" data-testid={`top-feature-${index}`}>
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

        {/* Dimension & Weight Specifications */}
        <section className="py-16 bg-gray-50" data-testid="dimension-specs-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="dimension-title">
                Dimension & Weight Specifications
              </h2>
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white px-6 py-4">
                  <h3 className="text-xl font-semibold">Available Sizes & Packaging</h3>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-navy-primary">Diameter</th>
                          <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-navy-primary">Length</th>
                          <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-navy-primary">Weight Per Box</th>
                          <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-navy-primary">Weight Per Carton</th>
                        </tr>
                      </thead>
                      <tbody>
                        {dimensionSpecs.map((spec, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                            <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-navy-primary">{spec.diameter}</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">{spec.length}</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">{spec.weightPerBox}</td>
                            <td className="border border-gray-300 px-4 py-3 text-center font-bold text-gold-primary">{spec.weightPerCarton}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Welding Positions */}
        <section className="py-16 bg-white" data-testid="welding-positions-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="positions-title">
                Welding Position Guidelines
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg overflow-hidden shadow-md">
                  <thead className="bg-navy-primary text-white">
                    <tr>
                      <th className="border border-gray-300 px-4 py-3 text-left">Position</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Description</th>
                      <th className="border border-gray-300 px-4 py-3 text-left">Suitable Electrodes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {weldingPositions.map((position, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="border border-gray-300 px-4 py-3 font-semibold text-navy-primary">{position.position}</td>
                        <td className="border border-gray-300 px-4 py-3">{position.description}</td>
                        <td className="border border-gray-300 px-4 py-3">{position.suitable}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* E307-16 Product Description */}
        <section className="py-16 bg-white" data-testid="product-description-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="description-title">
                E307-16 Stainless Steel Welding Electrodes
              </h2>
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg border border-gray-200 p-8">
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    <strong>Stainless Steel E307-16 Welding Electrodes</strong> provide a full austenite structure containing 4-5% Mn. 
                    The weld metal is highly resistant to impact, wearing and hot cracking. It is ideal for forming buffer layers 
                    for hard facing and joining armor steel plates that are low hardenable and work-hardening austenitic Mn steel.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    These electrodes can be used for dissimilar joining of C-Mn steels with austenitic and ferritic stainless steels. 
                    Typical applications include welding of 14% Mn steel, steel armor, hardenable steel and generally all hard-to-weld steels.
                  </p>
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    <strong>Mamta Steel Traders</strong> is a stockist, supplier, and exporter of AWS A5.4 
                    Stainless Steel E307-16 Welding Electrodes based in Mumbai, Maharashtra, India, serving clients across the globe.
                  </p>
                </div>
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
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Classification & Specifications */}
                <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                  <div className="bg-navy-primary text-white px-6 py-4">
                    <h3 className="text-xl font-semibold">Classification & Specifications</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      {specifications.map((spec, index) => (
                        <div key={index} className="flex items-start" data-testid={`specification-${index}`}>
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* E307-16 Features */}
                <div className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
                  <div className="bg-navy-primary text-white px-6 py-4">
                    <h3 className="text-xl font-semibold">E307-16 Features</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-3">
                      {e307Features.map((feature, index) => (
                        <div key={index} className="flex items-start" data-testid={`e307-feature-${index}`}>
                          <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chemical Composition & Mechanical Properties */}
        <section className="py-16 bg-white" data-testid="composition-properties-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="composition-title">
                Chemical Composition & Mechanical Properties
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Chemical Composition */}
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white px-6 py-4">
                    <h3 className="text-xl font-semibold">Chemical Composition (Weld Metal) %</h3>
                  </div>
                  <div className="p-6">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-navy-primary">C</th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-navy-primary">Mn</th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-navy-primary">Si</th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-navy-primary">Ni</th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-navy-primary">Cr</th>
                            <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-navy-primary">Mo</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-3 text-center">{chemicalComposition.C}</td>
                            <td className="border border-gray-300 px-4 py-3 text-center font-bold text-gold-primary">{chemicalComposition.Mn}</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">{chemicalComposition.Si}</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">{chemicalComposition.Ni}</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">{chemicalComposition.Cr}</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">{chemicalComposition.Mo}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* Mechanical Properties */}
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white px-6 py-4">
                    <h3 className="text-xl font-semibold">Typical Mechanical Properties</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-navy-primary">Tensile Strength</span>
                          <span className="text-lg font-bold text-gold-primary">{mechanicalProperties.tensileStrength}</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold text-navy-primary">Elongation</span>
                          <span className="text-lg font-bold text-gold-primary">{mechanicalProperties.elongation}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operating Data */}
        <section className="py-16 bg-gray-50" data-testid="operating-data-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-navy-primary mb-12" data-testid="operating-title">
                Operating Data & Specifications
              </h2>
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white px-6 py-4">
                  <h3 className="text-xl font-semibold">Welding Current & Diameter Specifications</h3>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-navy-primary">Diameter</th>
                          <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-navy-primary">Length</th>
                          <th className="border border-gray-300 px-4 py-3 text-center font-semibold text-navy-primary">AC/DC+ Current (A)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {operatingData.map((data, index) => (
                          <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                            <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-navy-primary">{data.diameter}</td>
                            <td className="border border-gray-300 px-4 py-3 text-center">{data.length}</td>
                            <td className="border border-gray-300 px-4 py-3 text-center font-bold text-gold-primary">{data.current}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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
                Delivery Coverage
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Cities */}
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  <div className="bg-navy-primary text-white px-6 py-4">
                    <h3 className="text-xl font-semibold flex items-center">
                      <MapPin className="w-5 h-5 mr-2" />
                      Major Cities We Deliver To
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

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-navy-primary to-navy-secondary text-white" data-testid="cta-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="cta-title">
                Ready to Order E307-16 Stainless Steel Electrodes?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get premium AWS A5.4 certified E307-16 electrodes with fast delivery worldwide
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-300" data-testid="cta-contact">
                  Request Quote
                </Link>
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <div className="flex items-center" data-testid="contact-phone">
                    <Phone className="w-4 h-4 mr-2" />
                    <a href="tel:+919819322576" className="hover:text-gold-primary transition-colors">+91 9819322576</a>
                  </div>
                  <div className="flex items-center" data-testid="contact-email">
                    <Mail className="w-4 h-4 mr-2" />
                    <a href="mailto:mamtasteeltraders@gmail.com" className="hover:text-gold-primary transition-colors">mamtasteeltraders@gmail.com</a>
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