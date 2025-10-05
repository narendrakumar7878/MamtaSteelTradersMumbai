import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Factory, Truck, Globe, Clock, Settings, Wrench, Target, Package, Users, Zap, Gauge, Cog, Hammer, HardHat, Building, Router, Layers, Grid, Scale, Box } from "lucide-react";
import { Link } from "wouter";

export default function HotDipGalvanizedChannels() {
  const specifications = [
    "ASTM A36/A36M - Standard Specification for Carbon Structural Steel",
    "ASTM A123/A123M - Standard Specification for Zinc (Hot-Dip Galvanized) Coatings on Iron and Steel Products", 
    "ASTM A153/A153M - Standard Specification for Zinc Coating (Hot-Dip) on Iron and Steel Hardware",
    "ASTM A325M - High Strength Bolts for Structural Steel Joints",
    "IS 2062:2011 - Hot Rolled Medium and High Tensile Structural Steel (Grade E250, E300, E350, E410, E450, E550)",
    "IS 808:1989 - Dimensions for Hot Rolled Steel Beam, Column, Channel and Angle Sections",
    "IS 4759:1968 - Specification for Hot Dip Galvanizing of Iron and Steel",
    "IS 6745:1972 - Specifications for Structural Steel (Standard Quality)",
    "IS 2629:1989 - Specification for Hot Dip Galvanizing of Iron and Steel - Methods of Test",
    "IS 2633:1986 - Specification for Hot Dip Galvanizing of Iron and Steel",
    "BS EN 10025-2 - Hot Rolled Products of Structural Steels",
    "BS EN ISO 1461 - Hot Dip Galvanized Coatings on Fabricated Iron and Steel Articles",
    "JIS G 3101 - Rolled Steels for General Structure",
    "JIS H 8641 - Hot Dip Galvanizing",
    "Size Range: ISMC 75 to ISMC 400 (Standard Indian Medium Channels)",
    "ISMCP Range: ISMCP 100 to ISMCP 400 (Parallel Flange Channels)",
    "Length: 6 meters, 9 meters, 12 meters (standard)",
    "Coating Thickness: 85-100 microns minimum (610-700 g/m²)",
    "Zinc Coating Class: 350-700 g/m² as per ASTM A123",
    "Galvanizing Standards: Triple Layer Protection - Eta, Zeta, Delta Layers",
    "Testing: Salt Spray Test (500+ hours), Adhesion Test, Coating Thickness Test",
    "Certification: Mill Test Certificate (EN 10204/3.1B), Galvanizing Certificate"
  ];

  const comprehensiveChannelTypes = [
    {
      category: "ISMC (Indian Standard Medium Channels)",
      types: [
        "ISMC 75 (75x40x4.8mm)", "ISMC 100 (100x50x5.1mm)", "ISMC 125 (125x65x5.3mm)",
        "ISMC 150 (150x75x5.7mm)", "ISMC 175 (175x75x6.1mm)", "ISMC 200 (200x75x6.5mm)",
        "ISMC 225 (225x80x6.9mm)", "ISMC 250 (250x82.5x7.3mm)", "ISMC 300 (300x90x7.8mm)",
        "ISMC 350 (350x100x8.1mm)", "ISMC 400 (400x100x8.6mm)"
      ],
      applications: "General construction, building framework, industrial structures",
      description: "Standard tapered flange channels as per IS 808"
    },
    {
      category: "ISMCP (Parallel Flange Channels)",
      types: [
        "ISMCP 100 (100x50x5mm)", "ISMCP 125 (125x65x6mm)", "ISMCP 150 (150x75x6mm)",
        "ISMCP 175 (175x75x7mm)", "ISMCP 200 (200x75x7mm)", "ISMCP 225 (225x80x8mm)",
        "ISMCP 250 (250x85x8mm)", "ISMCP 300 (300x90x9mm)", "ISMCP 350 (350x100x10mm)",
        "ISMCP 400 (400x100x11mm)"
      ],
      applications: "Modern construction, precise fabrication, modular structures",
      description: "Parallel flange channels for contemporary construction needs"
    },
    {
      category: "Special Purpose Channels",
      types: [
        "U Channels", "C Channels", "Z Channels", "Hat Channels", "Stud Channels",
        "Track Channels", "Omega Channels", "Perforated Channels", "Slotted Channels",
        "Custom Punched Channels", "Back-to-Back Channels", "Cold Formed Channels"
      ],
      applications: "Cable management, solar mounting, suspended ceilings, racking systems",
      description: "Specialized channel sections for specific applications"
    },
    {
      category: "Heavy Duty Structural Channels",
      types: [
        "ISMC 300 Heavy", "ISMC 350 Heavy", "ISMC 400 Heavy", "Custom Heavy Sections",
        "Marine Grade Channels", "Crane Beam Channels", "Bridge Construction Channels"
      ],
      applications: "Heavy industrial structures, crane systems, bridge construction",
      description: "High load bearing capacity for critical structural applications"
    }
  ];

  const detailedChannelSizes = [
    { size: "ISMC 75", depth: "75mm", flangeWidth: "40mm", webThickness: "4.8mm", weight: "7.14 kg/m", area: "9.10 cm²", ix: "61.6 cm⁴", applications: "Light framing, partitions" },
    { size: "ISMC 100", depth: "100mm", flangeWidth: "50mm", webThickness: "5.1mm", weight: "9.56 kg/m", area: "12.2 cm²", ix: "125 cm⁴", applications: "Medium structures, supports" },
    { size: "ISMC 125", depth: "125mm", flangeWidth: "65mm", webThickness: "5.3mm", weight: "13.1 kg/m", area: "16.7 cm²", ix: "238 cm⁴", applications: "Building frames, purlins" },
    { size: "ISMC 150", depth: "150mm", flangeWidth: "75mm", webThickness: "5.7mm", weight: "16.4 kg/m", area: "20.9 cm²", ix: "402 cm⁴", applications: "Structural framing, roofing" },
    { size: "ISMC 175", depth: "175mm", flangeWidth: "75mm", webThickness: "6.1mm", weight: "18.6 kg/m", area: "23.7 cm²", ix: "573 cm⁴", applications: "Industrial buildings, warehouses" },
    { size: "ISMC 200", depth: "200mm", flangeWidth: "75mm", webThickness: "6.5mm", weight: "22.3 kg/m", area: "28.5 cm²", ix: "818 cm⁴", applications: "Heavy framing, crane rails" },
    { size: "ISMC 225", depth: "225mm", flangeWidth: "80mm", webThickness: "6.9mm", weight: "25.7 kg/m", area: "32.8 cm²", ix: "1130 cm⁴", applications: "Major structures, bridges" },
    { size: "ISMC 250", depth: "250mm", flangeWidth: "82.5mm", webThickness: "7.3mm", weight: "29.3 kg/m", area: "37.3 cm²", ix: "1510 cm⁴", applications: "Heavy construction, towers" },
    { size: "ISMC 300", depth: "300mm", flangeWidth: "90mm", webThickness: "7.8mm", weight: "36.3 kg/m", area: "46.2 cm²", ix: "2690 cm⁴", applications: "Industrial plants, bridges" },
    { size: "ISMC 350", depth: "350mm", flangeWidth: "100mm", webThickness: "8.1mm", weight: "42.7 kg/m", area: "54.4 cm²", ix: "4020 cm⁴", applications: "Heavy industrial structures" },
    { size: "ISMC 400", depth: "400mm", flangeWidth: "100mm", webThickness: "8.6mm", weight: "50.9 kg/m", area: "64.8 cm²", ix: "5970 cm⁴", applications: "Major construction, crane beams" },
    { size: "ISMCP 100", depth: "100mm", flangeWidth: "50mm", webThickness: "5mm", weight: "10.2 kg/m", area: "13.0 cm²", ix: "142 cm⁴", applications: "Modern construction, modular" },
    { size: "ISMCP 150", depth: "150mm", flangeWidth: "75mm", webThickness: "6mm", weight: "17.9 kg/m", area: "22.8 cm²", ix: "487 cm⁴", applications: "Contemporary structures" },
    { size: "ISMCP 200", depth: "200mm", flangeWidth: "75mm", webThickness: "7mm", weight: "24.2 kg/m", area: "30.8 cm²", ix: "932 cm⁴", applications: "Architectural applications" },
    { size: "ISMCP 250", depth: "250mm", flangeWidth: "85mm", webThickness: "8mm", weight: "32.8 kg/m", area: "41.8 cm²", ix: "1740 cm⁴", applications: "High-end construction" },
    { size: "ISMCP 300", depth: "300mm", flangeWidth: "90mm", webThickness: "9mm", weight: "41.7 kg/m", area: "53.1 cm²", ix: "2890 cm⁴", applications: "Commercial buildings" },
    { size: "ISMCP 400", depth: "400mm", flangeWidth: "100mm", webThickness: "11mm", weight: "59.5 kg/m", area: "75.8 cm²", ix: "6830 cm⁴", applications: "Heavy duty structures" }
  ];

  const comprehensiveApplications = [
    {
      industry: "Construction & Building",
      applications: [
        "Building Framework", "Roof Purlins", "Wall Studs", "Floor Joists", "Canopy Structures",
        "Partition Walls", "Suspended Ceilings", "Staircase Supports", "Balcony Framework",
        "Door & Window Frames", "Structural Glazing", "Facade Systems", "Curtain Wall Support"
      ],
      benefits: "Cost-effective structural solution with long-lasting protection",
      specifications: "IS 808, IS 2062 compliance"
    },
    {
      industry: "Infrastructure & Transportation",
      applications: [
        "Bridge Construction", "Highway Barriers", "Railway Platforms", "Metro Stations",
        "Airport Terminals", "Bus Terminals", "Pedestrian Bridges", "Flyover Construction",
        "Tunnel Lining", "Road Infrastructure", "Traffic Control Systems", "Signage Structures"
      ],
      benefits: "Weather resistance for outdoor applications",
      specifications: "ASTM A123 certified coating"
    },
    {
      industry: "Industrial & Manufacturing",
      applications: [
        "Factory Buildings", "Warehouse Structures", "Industrial Sheds", "Crane Rails",
        "Equipment Supports", "Conveyor Systems", "Pipe Racks", "Platform Structures",
        "Machinery Foundations", "Storage Tanks Support", "Chemical Plant Structures", "Power Plants"
      ],
      benefits: "Corrosion resistance in industrial environments",
      specifications: "Chemical resistant galvanizing"
    },
    {
      industry: "Commercial & Retail",
      applications: [
        "Shopping Centers", "Office Buildings", "Retail Stores", "Exhibition Halls",
        "Convention Centers", "Sports Facilities", "Entertainment Venues", "Hotels",
        "Restaurants", "Showrooms", "Parking Structures", "Multi-story Buildings"
      ],
      benefits: "Aesthetic appeal with structural strength",
      specifications: "Architectural grade finish"
    },
    {
      industry: "Power & Energy",
      applications: [
        "Transmission Towers", "Substation Structures", "Solar Panel Mounting", "Wind Turbines",
        "Power Plant Buildings", "Electrical Panel Supports", "Cable Tray Systems", "Switchyard",
        "Control Buildings", "Transformer Foundations", "Battery Storage Systems", "Grid Stations"
      ],
      benefits: "Electrical compatibility and weather protection",
      specifications: "Power grade galvanizing"
    },
    {
      industry: "Telecommunication",
      applications: [
        "Cell Tower Construction", "Antenna Supports", "Equipment Shelters", "Cable Management",
        "Fiber Optic Infrastructure", "Data Center Structures", "Communication Towers",
        "Satellite Equipment Support", "Network Infrastructure", "Broadcasting Towers"
      ],
      benefits: "EMI compatibility and durability",
      specifications: "Telecom grade standards"
    },
    {
      industry: "Agricultural & Rural",
      applications: [
        "Farm Buildings", "Greenhouse Structures", "Poultry Sheds", "Dairy Barns",
        "Storage Silos", "Equipment Sheds", "Irrigation Systems", "Fencing Posts",
        "Cattle Sheds", "Grain Storage", "Cold Storage", "Processing Units"
      ],
      benefits: "Protection against agricultural chemicals",
      specifications: "Agricultural grade coating"
    },
    {
      industry: "Marine & Offshore",
      applications: [
        "Port Structures", "Jetty Construction", "Marine Platforms", "Shipyard Facilities",
        "Coastal Protection", "Harbor Infrastructure", "Offshore Platforms", "Dock Facilities",
        "Marine Equipment Support", "Breakwater Structures", "Lighthouse Support", "Naval Facilities"
      ],
      benefits: "Superior marine environment protection",
      specifications: "Marine grade galvanizing"
    }
  ];

  const galvanizingAdvantages = [
    {
      title: "Superior Corrosion Protection",
      description: "Hot-dip galvanizing provides the ultimate protection against rust and corrosion",
      details: [
        "Zinc coating acts as sacrificial protection",
        "50+ years life in rural environments",
        "25+ years in severe urban/coastal exposure",
        "Triple layer protection (Eta, Zeta, Delta)",
        "Self-healing properties of zinc coating"
      ],
      icon: Shield
    },
    {
      title: "Complete Coverage Protection",
      description: "100% protection of all surfaces including internal areas",
      details: [
        "Coating on all surfaces including sharp edges",
        "Internal protection of hollow sections",
        "No missed areas or holidays",
        "Uniform coating thickness",
        "Protection of welded joints and corners"
      ],
      icon: Package
    },
    {
      title: "Unmatched Durability",
      description: "Metallurgically bonded coating provides exceptional toughness",
      details: [
        "Resistant to mechanical damage",
        "Withstands rough handling during transport",
        "Impact resistant coating",
        "No peeling or flaking",
        "Maintains protection even when scratched"
      ],
      icon: Hammer
    },
    {
      title: "Cost Effectiveness",
      description: "Most economical protection system considering total lifecycle cost",
      details: [
        "Lowest first cost compared to other coatings",
        "Minimal maintenance requirements",
        "Long service life reduces replacement costs",
        "No need for periodic recoating",
        "Reduces total project costs"
      ],
      icon: Target
    },
    {
      title: "Immediate Usage",
      description: "Ready to use immediately after galvanizing process",
      details: [
        "No drying or curing time required",
        "Immediate handling and transport",
        "No weather dependency",
        "Fast project completion",
        "Immediate load bearing capability"
      ],
      icon: Zap
    },
    {
      title: "Quality Assurance",
      description: "Simple inspection and proven quality control methods",
      details: [
        "Visual assessment readily possible",
        "Magnetic thickness gauges for measurement",
        "Simple adhesion tests",
        "No special equipment required",
        "Quality control during production"
      ],
      icon: Gauge
    }
  ];

  const qualityFeatures = [
    { icon: Shield, title: "IS 808 Certified", desc: "Standard dimensions as per Indian Standards", color: "text-blue-600" },
    { icon: Award, title: "ASTM A123 Compliant", desc: "International standard hot-dip galvanizing", color: "text-green-600" },
    { icon: Layers, title: "85+ Micron Coating", desc: "Thick zinc coating for maximum protection", color: "text-purple-600" },
    { icon: HardHat, title: "Structural Grade", desc: "High load bearing capacity for construction", color: "text-orange-600" },
    { icon: Scale, title: "Precise Dimensions", desc: "Accurate section properties for design", color: "text-indigo-600" },
    { icon: CheckCircle, title: "Quality Tested", desc: "Salt spray tested for 500+ hours corrosion resistance", color: "text-teal-600" },
    { icon: Truck, title: "Ready Stock", desc: "Available ex-stock in all standard sizes", color: "text-red-600" },
    { icon: Globe, title: "Export Quality", desc: "International standard material for global projects", color: "text-gold-primary" }
  ];

  const manufacturingProcess = [
    {
      step: "Steel Channel Production",
      description: "High quality mild steel channels manufactured from prime quality steel",
      details: [
        "Material sourcing from certified steel mills (SAIL, TATA, JSW)",
        "Hot rolling process as per IS 808 standards",
        "Chemical composition verification",
        "Mechanical property testing",
        "Dimensional inspection and tolerance check"
      ]
    },
    {
      step: "Pre-Galvanizing Treatment", 
      description: "Complete cleaning and surface preparation before galvanizing",
      details: [
        "Degreasing to remove oils and organic contaminants",
        "Pickling in acid solution to remove mill scale and rust",
        "Flux treatment for metallurgical bonding preparation",
        "Pre-heating to required temperature",
        "Quality inspection before dipping process"
      ]
    },
    {
      step: "Hot-Dip Galvanizing Process",
      description: "Immersion in molten zinc bath at 450°C for metallurgical bonding",
      details: [
        "Zinc bath temperature control at 445-460°C",
        "Controlled immersion and withdrawal speed",
        "Formation of zinc-iron alloy layers",
        "Cooling and solidification process",
        "Inspection for coating uniformity and thickness"
      ]
    },
    {
      step: "Post-Galvanizing Quality Control",
      description: "Final processing, testing and quality certification",
      details: [
        "Cooling and proper handling procedures",
        "Coating thickness measurement by magnetic method",
        "Adhesion testing by bend and knife tests",
        "Visual inspection for surface defects",
        "Final certification and marking with grade identification"
      ]
    }
  ];

  const testingProcedures = [
    "Chemical Composition Analysis by OES (Optical Emission Spectroscopy)",
    "Mechanical Properties Testing (Tensile Strength, Yield Strength, Elongation)",
    "Coating Thickness Measurement by Magnetic Method (IS 2629)",
    "Coating Weight Test as per ASTM A123 (g/m²)",
    "Adhesion Test by Knife Test and Bend Test",
    "Salt Spray Test for Corrosion Resistance (ASTM B117 - 500+ hours)",
    "Uniformity Test for Coating Distribution",
    "Visual Inspection for Surface Defects and Finish Quality",
    "Dimensional Verification with Certified Measuring Instruments",
    "Straightness Check within Permissible Limits (IS 808)",
    "Impact Test for Coating Durability",
    "Hardness Test of Base Material",
    "Microscopic Examination of Coating Structure",
    "Embrittlement Test for Hydrogen Effects",
    "Surface Roughness Measurement",
    "Moment of Inertia and Section Modulus Verification"
  ];

  const indianCities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Pune",
    "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal",
    "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Ludhiana",
    "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivali", "Vasai-Virar",
    "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad",
    "Ranchi", "Howrah", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada", "Jodhpur",
    "Madurai", "Raipur", "Kota", "Chandigarh", "Guwahati", "Solapur", "Hubli-Dharwad",
    "Mysore", "Tiruchirappalli", "Bareilly", "Aligarh", "Tiruppur", "Gurgaon", "Moradabad",
    "Jalandhar", "Bhubaneswar", "Salem", "Mira-Bhayandar", "Warangal", "Guntur", "Bhiwandi",
    "Saharanpur", "Gorakhpur", "Bikaner", "Amravati", "Noida", "Jamshedpur", "Bhilai Nagar"
  ];

  return (
    <>
      <ProductSEO
        title="Hot Dip Galvanized Channels Manufacturer Mumbai | ISMC ISMCP | IS 808 ASTM A123 Certified"
        description="Leading manufacturer & supplier of hot dip galvanized steel channels in Mumbai. IS 808, ASTM A123 certified ISMC & ISMCP channels from 75mm to 400mm. Stock & supply across India with 85+ micron coating thickness, structural grade quality. Best prices for construction, industrial buildings, infrastructure projects."
        keywords="hot dip galvanized channels, galvanized steel channels Mumbai, ISMC galvanized channels, ISMCP galvanized channels, IS 808 channels, ASTM A123 galvanized channels, structural steel channels, galvanized channel iron, galvanized U channels, galvanized C channels, hot dip galvanized steel channels, galvanized channel bar, galvanized structural steel, galvanized iron channels, galvanized channel sections, galvanized medium channels, galvanized parallel flange channels, construction channels galvanized, galvanized channels suppliers Mumbai, galvanized channels stockist, galvanized channels manufacturer India, galvanized steel channel sections, GI channels, galvanized mild steel channels, galvanized channel beams, hot galvanized channels, zinc coated channels, corrosion resistant channels, galvanized structural channels, galvanized channel steel, galvanized building channels, galvanized fabrication channels, galvanized infrastructure channels, galvanized industrial channels, galvanized construction channels, galvanized framework channels, galvanized support channels, galvanized beam channels, galvanized purlin channels, Mumbai galvanized channels, galvanized channels price, galvanized channels weight chart, galvanized channels specifications, galvanized channels standard sizes, ISMC 75 galvanized, ISMC 100 galvanized, ISMC 150 galvanized, ISMC 200 galvanized, ISMC 250 galvanized, ISMC 300 galvanized, ISMC 400 galvanized, ISMCP 100 galvanized, ISMCP 150 galvanized, ISMCP 200 galvanized, ISMCP 250 galvanized, ISMCP 300 galvanized, ISMCP 400 galvanized, galvanized channels thickness, galvanized coating thickness, zinc coating channels, anti-corrosive channels, weather resistant channels, rust proof channels, galvanized channels IS 4759, galvanized channels BS EN ISO 1461, galvanized channel iron sections, hot dip galvanized medium channels, galvanized steel channel beams, construction grade galvanized channels"
        category="Galvanized Products"
        productName="Hot Dip Galvanized Channels"
        specifications={specifications}
        canonicalUrl="/product/galvanized/hot-dip-galvanized-channels"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white dark:bg-gray-800 py-4 border-b border-gray-200 dark:border-gray-700" data-testid="breadcrumb-nav">
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300">
              <Link href="/" className="hover:text-navy-primary dark:hover:text-gold-primary transition-colors" data-testid="breadcrumb-home">Home</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/products" className="hover:text-navy-primary dark:hover:text-gold-primary transition-colors" data-testid="breadcrumb-products">Products</Link>
              <ArrowRight className="w-4 h-4" />
              <Link href="/galvanized" className="hover:text-navy-primary dark:hover:text-gold-primary transition-colors" data-testid="breadcrumb-galvanized">Galvanized Products</Link>
              <ArrowRight className="w-4 h-4" />
              <span className="text-navy-primary dark:text-gold-primary font-medium" data-testid="breadcrumb-current">Hot Dip Galvanized Channels</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-20" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-heading font-bold mb-6" data-testid="hero-title">
                Hot Dip Galvanized Channels Manufacturer Mumbai
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100" data-testid="hero-subtitle">
                IS 808 & ASTM A123 Certified | 85+ Micron Coating | ISMC 75 to ISMC 400 | ISMCP Available | Ready Stock
              </p>
              <p className="text-lg md:text-xl mb-8 text-blue-200" data-testid="hero-description">
                Leading supplier of premium galvanized steel channels for construction, industrial buildings, infrastructure & structural applications across India
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center" data-testid="cta-get-quote">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Instant Quote
                </Link>
                <a href="tel:+919819322576" className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center" data-testid="cta-call-now">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: +91 9819322576
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-white dark:bg-gray-800" data-testid="features-section">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="features-title">
              Why Choose Our Hot Dip Galvanized Channels?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {qualityFeatures.map((feature, index) => (
                <div key={index} className="text-center p-6 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-shadow duration-300 bg-white dark:bg-gray-700" data-testid={`feature-${index}`}>
                  <feature.icon className={`w-12 h-12 ${feature.color} mx-auto mb-4`} />
                  <h3 className="text-xl font-semibold text-navy-primary dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comprehensive Channel Sizes Chart */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900" data-testid="channel-sizes-section">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="sizes-title">
                Complete Channel Sizes & Specifications Chart
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <thead className="bg-gradient-to-r from-navy-primary to-blue-600 text-white">
                    <tr>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Size</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Depth (mm)</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Flange Width (mm)</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Web Thickness (mm)</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Weight (kg/m)</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Area (cm²)</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Ixx (cm⁴)</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Applications</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detailedChannelSizes.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50 dark:bg-gray-700" : "bg-white dark:bg-gray-800"}>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold text-navy-primary dark:text-white">{item.size}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">{item.depth}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">{item.flangeWidth}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">{item.webThickness}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">{item.weight}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">{item.area}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">{item.ix}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">{item.applications}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  * Standard length: 6 meters | Custom lengths available up to 12 meters | Tolerances as per IS 808 | Section properties calculated for galvanized sections
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Channel Types */}
        <section className="py-16 bg-white dark:bg-gray-800" data-testid="channel-types-section">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="channel-types-title">
                Complete Range of Galvanized Channels Available
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {comprehensiveChannelTypes.map((category, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden" data-testid={`channel-category-${index}`}>
                    <div className="bg-gradient-to-r from-navy-primary to-blue-600 text-white px-6 py-4">
                      <h3 className="text-xl font-bold flex items-center">
                        <Box className="w-5 h-5 mr-2" />
                        {category.category}
                      </h3>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-1 gap-2 mb-4 max-h-60 overflow-y-auto">
                        {category.types.map((type, typeIndex) => (
                          <div key={typeIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">{type}</span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-3">
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <p className="text-sm text-blue-800 dark:text-blue-200">
                            <strong>Applications:</strong> {category.applications}
                          </p>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <p className="text-sm text-green-800 dark:text-green-200">
                            <strong>Description:</strong> {category.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Galvanizing Advantages */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900" data-testid="advantages-section">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="advantages-title">
                Why Hot Dip Galvanizing is the Best Protection for Channels
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galvanizingAdvantages.map((advantage, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-xl transition-shadow duration-300" data-testid={`advantage-${index}`}>
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <advantage.icon className="w-10 h-10 text-blue-600 mr-4" />
                        <h3 className="text-xl font-bold text-navy-primary dark:text-white">{advantage.title}</h3>
                      </div>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{advantage.description}</p>
                      <ul className="space-y-2">
                        {advantage.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 dark:text-gray-400 text-sm">{detail}</span>
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

        {/* Manufacturing Process */}
        <section className="py-16 bg-white dark:bg-gray-800" data-testid="manufacturing-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="manufacturing-title">
                Our Hot Dip Galvanizing Process for Channels
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {manufacturingProcess.map((process, index) => (
                  <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-700" data-testid={`process-${index}`}>
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {index + 1}
                      </div>
                      <h3 className="text-xl font-bold text-navy-primary dark:text-white">{process.step}</h3>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{process.description}</p>
                    <ul className="space-y-2">
                      {process.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Applications */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900" data-testid="applications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="applications-title">
                Industry Applications & Use Cases for Galvanized Channels
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {comprehensiveApplications.map((application, index) => (
                  <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden hover:shadow-xl transition-shadow duration-300" data-testid={`application-${index}`}>
                    <div className="bg-gradient-to-r from-navy-primary to-blue-600 text-white px-6 py-4">
                      <h3 className="text-lg font-bold flex items-center">
                        <Building className="w-5 h-5 mr-2" />
                        {application.industry}
                      </h3>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-2 mb-4 max-h-48 overflow-y-auto">
                        {application.applications.map((app, appIndex) => (
                          <div key={appIndex} className="flex items-start">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">{app}</span>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                          <p className="text-sm text-blue-800 dark:text-blue-200">
                            <strong>Benefits:</strong> {application.benefits}
                          </p>
                        </div>
                        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                          <p className="text-sm text-green-800 dark:text-green-200">
                            <strong>Standards:</strong> {application.specifications}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testing & Quality Control */}
        <section className="py-16 bg-white dark:bg-gray-800" data-testid="testing-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="testing-title">
                Quality Testing & Certification for Galvanized Channels
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-4">
                  <h3 className="text-xl font-semibold flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3" />
                    Comprehensive Testing Procedures for Channels
                  </h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {testingProcedures.map((test, index) => (
                      <div key={index} className="flex items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-lg" data-testid={`test-${index}`}>
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">{test}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 grid md:grid-cols-2 gap-6">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">Certifications Provided:</h4>
                      <ul className="text-blue-700 dark:text-blue-300 text-sm space-y-1">
                        <li>• Mill Test Certificate (EN 10204/3.1B)</li>
                        <li>• Galvanizing Certificate (IS 4759/ASTM A123)</li>
                        <li>• Chemical Composition Report</li>
                        <li>• Mechanical Properties Report</li>
                        <li>• Coating Thickness Certificate</li>
                        <li>• Dimensional Inspection Report (IS 808)</li>
                        <li>• Section Properties Verification</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">Quality Standards:</h4>
                      <ul className="text-green-700 dark:text-green-300 text-sm space-y-1">
                        <li>• ISO 9001:2015 Quality Management</li>
                        <li>• ISO 14001:2015 Environmental Management</li>
                        <li>• OHSAS 18001 Occupational Health & Safety</li>
                        <li>• PED Certified for European Markets</li>
                        <li>• CE Marking for Export Quality</li>
                        <li>• Third Party Inspection Available</li>
                        <li>• Bureau Veritas / SGS Certified</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900" data-testid="specifications-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="specifications-title">
                Technical Specifications & Standards for Galvanized Channels
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden">
                <div className="bg-navy-primary text-white px-6 py-4">
                  <h3 className="text-xl font-semibold">Complete Specification Standards & Compliance</h3>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-1 gap-4">
                    {specifications.map((spec, index) => (
                      <div key={index} className="flex items-start" data-testid={`specification-${index}`}>
                        <CheckCircle className="w-5 h-5 text-gold-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cities We Supply */}
        <section className="py-16 bg-white dark:bg-gray-800" data-testid="cities-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="cities-title">
                Cities We Supply Hot Dip Galvanized Channels
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                  {indianCities.map((city, index) => (
                    <div key={index} className="flex items-center p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg" data-testid={`city-${index}`}>
                      <MapPin className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{city}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-gray-600 dark:text-gray-300">
                    <strong>Pan India Supply:</strong> We supply galvanized channels to all major cities and industrial areas across India. 
                    Fast delivery through our extensive logistics network with proper packaging for safe transportation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-navy-primary text-white" data-testid="why-choose-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-12" data-testid="why-choose-title">
                Why Choose Mamta Steel Traders for Galvanized Channels?
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Factory className="w-8 h-8 text-navy-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">25+ Years Experience</h3>
                  <p className="text-blue-100">Trusted manufacturer & supplier in galvanized steel industry</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Package className="w-8 h-8 text-navy-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Complete Range</h3>
                  <p className="text-blue-100">ISMC 75 to ISMC 400, ISMCP available ex-stock for immediate delivery</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Award className="w-8 h-8 text-navy-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Certified Quality</h3>
                  <p className="text-blue-100">IS 808, IS 2062, ASTM A123 certified with comprehensive test certificates</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Truck className="w-8 h-8 text-navy-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
                  <p className="text-blue-100">Pan India supply with efficient logistics and proper packaging</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-navy-primary to-navy-secondary text-white" data-testid="cta-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6" data-testid="cta-title">
                Ready to Order Premium Hot Dip Galvanized Channels?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes for IS 808 & ASTM A123 certified galvanized channels with fast delivery across India & export worldwide
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center" data-testid="cta-contact">
                  <Mail className="w-5 h-5 mr-2" />
                  Request Quote Now
                </Link>
                <a href="https://wa.me/919819322576" target="_blank" rel="noopener noreferrer" className="border-2 border-white text-white hover:bg-white hover:text-navy-primary font-semibold py-4 px-8 rounded-lg transition-colors duration-300 inline-flex items-center" data-testid="cta-whatsapp">
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp: +91 9819322576
                </a>
              </div>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center" data-testid="contact-phone">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href="tel:+919819322576" className="hover:text-gold-primary transition-colors">+91 9819322576</a>
                </div>
                <div className="flex items-center justify-center" data-testid="contact-email">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:mamtasteeltraders@gmail.com" className="hover:text-gold-primary transition-colors">mamtasteeltraders@gmail.com</a>
                </div>
                <div className="flex items-center justify-center" data-testid="contact-location">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Mumbai, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}