import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Zap, Settings } from "lucide-react";
import aluminium_mamta_steel_traders_img from "@/assets/ALUMINIUM MAMTA STEEL TRADERS.jpg";
import { Link } from "wouter";
import { useState } from "react";

export default function AluminiumWire() {
  const [showAllCities, setShowAllCities] = useState(false);
  const [showAllCountries, setShowAllCountries] = useState(false);

  const specifications = [
    "AWS A5.10/A5.10M:1999 Classification",
    "AWS/ASME SFA A5.10 Standard Compliance",
    "Diameter Range: 0.8mm to 6.4mm (0.030\" to 1/4\")",
    "Available Forms: Spools and Cut Length Rods",
    "Welding Process: TIG (GTAW) and MIG (GMAW)",
    "Base Metal: 5000 Series Aluminum Alloys",
    "Packaging: 15kg, 25kg Spools and Custom Packaging",
    "Length: Standard 1000mm for cut length rods"
  ];

  const aluminumWireProducts = [
    {
      id: 1,
      title: "ER5356 Aluminum TIG/MIG Wire",
      image: aluminium_mamta_steel_traders_img,
      alt: "ER5356 Aluminum TIG MIG Wire Filler Rods",
      description: "5% magnesium aluminum filler metal with excellent corrosion resistance and high shear strength",
      awsClass: "ER5356",
      certification: "AWS A5.10/A5.10M:1999",
      composition: "5% Mg, Al Balance with Ti, Mn, Cr additions",
      applications: ["Marine applications", "Saltwater exposure", "5000 series aluminum welding", "Structural welding"],
      features: ["Excellent corrosion resistance", "High shear strength", "Good color match after anodizing", "Crack resistance"],
      specifications: [
        "Magnesium content: 4.5-5.5%",
        "Tensile strength: 310 MPa min",
        "Elongation: 17% min",
        "Welding positions: All positions"
      ]
    },
    {
      id: 2,
      title: "ER1100 Aluminum TIG/MIG Wire",
      image: aluminium_mamta_steel_traders_img,
      alt: "ER1100 Aluminum TIG MIG Wire Al99",
      description: "99% pure aluminum filler metal for welding commercially pure aluminum",
      awsClass: "ER1100",
      certification: "AWS A5.10/A5.10M:1999",
      composition: "99% Al minimum, very low alloy content",
      applications: ["Chemical equipment", "Food processing", "Decorative applications", "Heat exchangers"],
      features: ["High purity aluminum", "Excellent corrosion resistance", "Good formability", "Easy welding characteristics"],
      specifications: [
        "Aluminum content: 99.0% min",
        "Silicon: 0.95% max",
        "Iron: 0.95% max",
        "Copper: 0.05-0.20%"
      ]
    },
    {
      id: 3,
      title: "ER4043 Aluminum TIG/MIG Wire",
      image: aluminium_mamta_steel_traders_img,
      alt: "ER4043 Aluminum TIG MIG Wire Filler Rods",
      description: "Silicon-aluminum filler metal with excellent fluidity and crater filling characteristics",
      awsClass: "ER4043",
      certification: "AWS A5.10/A5.10M:1999",
      composition: "5% Si, Al Balance",
      applications: ["General purpose welding", "Casting repair", "6000 series aluminum", "Architectural applications"],
      features: ["Excellent fluidity", "Good crater filling", "Low melting point", "Reduced hot cracking"],
      specifications: [
        "Silicon content: 4.5-6.0%",
        "Melting range: 574-632°C",
        "Good feeding characteristics",
        "Suitable for fillet welds"
      ]
    },
    {
      id: 4,
      title: "ERCuAl-A1 Aluminum Bronze Wire",
      image: aluminium_mamta_steel_traders_img,
      alt: "ERCuAl-A1 Aluminum Bronze TIG MIG Wire C61000",
      description: "Aluminum bronze wire with excellent strength and corrosion resistance",
      awsClass: "ERCuAl-A1",
      certification: "AWS A5.7",
      composition: "Cu-Al alloy C61000",
      applications: ["Marine hardware", "Propeller shafts", "Valve components", "Pump parts"],
      features: ["High strength", "Excellent corrosion resistance", "Good wear resistance", "Marine grade"],
      specifications: [
        "Aluminum: 6.0-8.0%",
        "Copper: Balance",
        "Iron: 1.5-3.5%",
        "Tensile strength: 600 MPa min"
      ]
    },
    {
      id: 5,
      title: "ERCuAl-A2 Aluminum Bronze Wire",
      image: aluminium_mamta_steel_traders_img,
      alt: "ERCuAl-A2 Aluminum Bronze TIG MIG Wire C61800",
      description: "High strength aluminum bronze for demanding applications",
      awsClass: "ERCuAl-A2",
      certification: "AWS A5.7",
      composition: "Cu-Al alloy C61800",
      applications: ["Heavy duty marine", "Mining equipment", "Industrial machinery", "Wear plates"],
      features: ["Superior strength", "Excellent impact resistance", "High temperature stability", "Anti-galling properties"],
      specifications: [
        "Aluminum: 8.5-9.5%",
        "Iron: 3.0-5.0%",
        "Nickel: 4.0-5.5%",
        "Tensile strength: 700 MPa min"
      ]
    },
    {
      id: 6,
      title: "ERCuAl-A3 Aluminum Bronze Wire",
      image: aluminium_mamta_steel_traders_img,
      alt: "ERCuAl-A3 Aluminum Bronze TIG MIG Wire C62400",
      description: "Premium aluminum bronze with maximum strength and durability",
      awsClass: "ERCuAl-A3",
      certification: "AWS A5.7",
      composition: "Cu-Al alloy C62400",
      applications: ["Aerospace components", "High-stress marine", "Oil & gas equipment", "Critical machinery"],
      features: ["Maximum strength", "Superior fatigue resistance", "Excellent machinability", "Precision applications"],
      specifications: [
        "Aluminum: 10.0-11.5%",
        "Iron: 3.5-4.5%",
        "Nickel: 4.0-5.0%",
        "Manganese: 1.5% max"
      ]
    },
    {
      id: 7,
      title: "ERCuSi-A Silicon Bronze Wire",
      image: aluminium_mamta_steel_traders_img,
      alt: "ERCuSi-A Silicon Bronze TIG MIG Wire",
      description: "Silicon bronze wire for general purpose welding and brazing",
      awsClass: "ERCuSi-A",
      certification: "AWS A5.7",
      composition: "Cu-Si alloy",
      applications: ["Sheet metal work", "Artistic applications", "HVAC systems", "Plumbing repairs"],
      features: ["Good fluidity", "Easy welding", "Attractive appearance", "Good electrical conductivity"],
      specifications: [
        "Silicon: 2.8-4.0%",
        "Copper: Balance",
        "Manganese: 0.5-1.5%",
        "Low spatter welding"
      ]
    },
    {
      id: 8,
      title: "General Purpose Aluminum Alloy Wire",
      image: aluminium_mamta_steel_traders_img,
      alt: "General Purpose Aluminum Alloy TIG MIG Wire",
      description: "Multi-purpose aluminum welding wire for various applications",
      awsClass: "Multiple Classifications",
      certification: "AWS A5.10",
      composition: "Various aluminum alloys",
      applications: ["General fabrication", "Repair work", "Mixed aluminum grades", "Training purposes"],
      features: ["Versatile application", "Cost-effective", "Good performance", "Multiple sizes available"],
      specifications: [
        "Multiple alloy options",
        "Standard wire sizes",
        "Consistent quality",
        "Suitable for beginners"
      ]
    }
  ];

  const features = [
    { icon: Shield, title: "Superior Quality", desc: "AWS certified aluminum welding wires with guaranteed composition" },
    { icon: TrendingUp, title: "High Performance", desc: "Excellent mechanical properties and weld quality" },
    { icon: Award, title: "Corrosion Resistant", desc: "Outstanding resistance to saltwater and marine environments" },
    { icon: CheckCircle, title: "Easy Welding", desc: "Smooth arc characteristics and minimal spatter" },
    { icon: Zap, title: "All Position Welding", desc: "Suitable for flat, horizontal, vertical, and overhead welding" },
    { icon: Settings, title: "Versatile Applications", desc: "Compatible with TIG and MIG welding processes" }
  ];

  const advantages = [
    {
      title: "Marine & Saltwater Applications",
      description: "Our aluminum wires, especially ER5356, offer exceptional corrosion resistance in marine environments.",
      benefits: ["Saltwater resistance", "Long service life", "Minimal maintenance", "Superior durability"]
    },
    {
      title: "High Strength Welding",
      description: "Aluminum bronze wires provide superior mechanical properties for demanding applications.",
      benefits: ["High tensile strength", "Excellent impact resistance", "Fatigue resistance", "Wear resistance"]
    },
    {
      title: "Precision Welding",
      description: "Perfect for applications requiring high precision and quality standards.",
      benefits: ["Consistent composition", "Smooth welding", "Minimal defects", "Professional results"]
    }
  ];

  const applications = [
    "Marine and Offshore Structures",
    "Automotive Body Welding",
    "Aerospace Components",
    "Shipbuilding Industry",
    "Aluminum Fabrication",
    "Structural Welding",
    "Repair and Maintenance",
    "Food Processing Equipment",
    "Chemical Plant Components",
    "Architectural Applications",
    "Railway Components",
    "Heat Exchanger Manufacturing"
  ];

  const cities = [
    "Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata", "Hyderabad", "Pune", "Ahmedabad", 
    "Surat", "Jaipur", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal", 
    "Visakhapatnam", "Pimpri", "Patna", "Vadodara", "Ghaziabad", "Ludhiana", "Agra", 
    "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan", "Vasai", "Varanasi"
  ];

  const countries = [
    "India", "USA", "UAE", "Saudi Arabia", "Qatar", "Oman", "Kuwait", "Bahrain",
    "Singapore", "Malaysia", "Thailand", "Indonesia", "Philippines", "Vietnam",
    "South Korea", "Japan", "China", "Australia", "New Zealand", "South Africa"
  ];

  const visibleCities = showAllCities ? cities : cities.slice(0, 10);
  const visibleCountries = showAllCountries ? countries : countries.slice(0, 8);

  return (
    <>
      <ProductSEO
        title="Aluminum Welding Wire - TIG MIG Filler Rods | ER5356, ER1100, ER4043"
        description="Premium quality aluminum welding wires including ER5356, ER1100, ER4043, ERCuAl-A1/A2/A3, and ERCuSi-A. AWS certified TIG/MIG wires for marine, aerospace, and industrial applications. Best prices in Mumbai."
        keywords="aluminum welding wire, ER5356 wire, ER1100 aluminum wire, ER4043 filler rod, aluminum TIG wire, aluminum MIG wire, marine welding wire, AWS A5.10, aluminum bronze wire, ERCuAl wire, Mumbai aluminum wire supplier"
        category="Welding Electrodes"
        productName="Aluminum Welding Wire"
        specifications={specifications}
        canonicalUrl="/product/welding-electrodes/aluminiumwire"
      />

      <div className="min-h-screen bg-white dark:bg-gray-900">
        {/* Breadcrumb */}
        <div className="bg-gray-50 dark:bg-gray-800 py-4">
          <div className="container mx-auto px-4">
            <nav className="text-sm" data-testid="breadcrumb-nav">
              <Link href="/" className="text-blue-600 dark:text-blue-400 hover:underline" data-testid="link-home">Home</Link>
              <span className="mx-2 text-gray-500">/</span>
              <Link href="/products" className="text-blue-600 dark:text-blue-400 hover:underline" data-testid="link-products">Products</Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-700 dark:text-gray-300">Aluminum Welding Wire</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-main-heading">
                Premium Aluminum Welding Wire & Filler Rods
              </h1>
              <p className="text-xl mb-8 text-blue-100" data-testid="text-hero-description">
                AWS certified ER5356, ER1100, ER4043, and Aluminum Bronze wires for TIG/MIG welding. 
                Superior quality for marine, aerospace, and industrial applications.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center" data-testid="button-get-quote">
                  Get Quote <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a href="tel:+919819322576" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center" data-testid="button-call-now">
                  <Phone className="mr-2 w-5 h-5" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="text-features-heading">
              Key Features & Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200" data-testid={`card-feature-${index}`}>
                  <feature.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="text-products-heading">
              Our Aluminum Welding Wire Products
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {aluminumWireProducts.map((product) => (
                <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200" data-testid={`card-product-${product.id}`}>
                  <div className="aspect-w-1 aspect-h-1">
                    <img 
                      src={product.image} 
                      alt={product.alt}
                      className="w-full h-64 object-cover"
                      data-testid={`img-product-${product.id}`}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white" data-testid={`text-product-title-${product.id}`}>
                      {product.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3" data-testid={`text-product-description-${product.id}`}>
                      {product.description}
                    </p>
                    <div className="mb-3">
                      <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded" data-testid={`badge-aws-class-${product.id}`}>
                        {product.awsClass}
                      </span>
                    </div>
                    <Link href="/contact" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-center inline-block transition-colors duration-200" data-testid={`button-enquire-${product.id}`}>
                      Enquire Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Specifications */}
        <div className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="text-specifications-heading">
              Technical Specifications
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white" data-testid="text-general-specs-heading">General Specifications</h3>
                <ul className="space-y-2">
                  {specifications.map((spec, index) => (
                    <li key={index} className="flex items-start" data-testid={`item-specification-${index}`}>
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white" data-testid="text-applications-heading">Applications</h3>
                <ul className="space-y-2">
                  {applications.map((app, index) => (
                    <li key={index} className="flex items-start" data-testid={`item-application-${index}`}>
                      <Star className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Advantages */}
        <div className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="text-advantages-heading">
              Why Choose Our Aluminum Welding Wires?
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {advantages.map((advantage, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6" data-testid={`card-advantage-${index}`}>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{advantage.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{advantage.description}</p>
                  <ul className="space-y-2">
                    {advantage.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center" data-testid={`item-benefit-${index}-${benefitIndex}`}>
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="text-service-areas-heading">
              Service Areas
            </h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                  <MapPin className="mr-2 w-5 h-5 text-blue-600" />
                  Cities We Serve
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {visibleCities.map((city, index) => (
                    <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm" data-testid={`badge-city-${index}`}>
                      {city}
                    </span>
                  ))}
                </div>
                {cities.length > 10 && (
                  <button 
                    onClick={() => setShowAllCities(!showAllCities)}
                    className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                    data-testid="button-show-all-cities"
                  >
                    {showAllCities ? 'Show Less' : `Show All ${cities.length} Cities`}
                  </button>
                )}
              </div>
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center">
                  <MapPin className="mr-2 w-5 h-5 text-green-600" />
                  Export Countries
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {visibleCountries.map((country, index) => (
                    <span key={index} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm" data-testid={`badge-country-${index}`}>
                      {country}
                    </span>
                  ))}
                </div>
                {countries.length > 8 && (
                  <button 
                    onClick={() => setShowAllCountries(!showAllCountries)}
                    className="text-green-600 dark:text-green-400 hover:underline text-sm"
                    data-testid="button-show-all-countries"
                  >
                    {showAllCountries ? 'Show Less' : `Show All ${countries.length} Countries`}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6" data-testid="text-cta-heading">
              Ready to Get Premium Aluminum Welding Wires?
            </h2>
            <p className="text-xl mb-8 text-blue-100" data-testid="text-cta-description">
              Contact us today for the best prices on AWS certified aluminum welding wires. 
              Expert consultation and fast delivery available.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center" data-testid="button-contact-us">
                Contact Us <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a href="mailto:mamtasteeltraders@gmail.com" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center" data-testid="button-email-us">
                <Mail className="mr-2 w-5 h-5" />
                Email Us
              </a>
              <a href="tel:+919819322576" className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center" data-testid="button-call-direct">
                <Phone className="mr-2 w-5 h-5" />
                +91 99674 49008
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}