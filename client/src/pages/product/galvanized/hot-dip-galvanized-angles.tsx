import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, MapPin, Star, CheckCircle, TrendingUp, Shield, Award, Factory, Truck, Globe, Clock, Settings, Wrench, Target, Package, Users, Zap, Gauge, Cog, Hammer, HardHat, Building, Router, Layers, Grid, Scale } from "lucide-react";
import { Link } from "wouter";

export default function HotDipGalvanizedAngles() {
  const specifications = [
    "ASTM A36/A36M - Standard Specification for Carbon Structural Steel",
    "ASTM A123/A123M - Standard Specification for Zinc (Hot-Dip Galvanized) Coatings on Iron and Steel Products",
    "ASTM A153/A153M - Standard Specification for Zinc Coating (Hot-Dip) on Iron and Steel Hardware",
    "ASTM A325M - High Strength Bolts for Structural Steel Joints",
    "IS 2062:2011 - Hot Rolled Medium and High Tensile Structural Steel (Grade E250, E300, E350, E410, E450, E550)",
    "IS 4759:1968 - Specification for Hot Dip Galvanizing of Iron and Steel",
    "IS 6745:1972 - Specifications for Structural Steel (Standard Quality)",
    "IS 2629:1989 - Specification for Hot Dip Galvanizing of Iron and Steel - Methods of Test",
    "IS 2633:1986 - Specification for Hot Dip Galvanizing of Iron and Steel",
    "BS EN 10025-2 - Hot Rolled Products of Structural Steels",
    "BS EN ISO 1461 - Hot Dip Galvanized Coatings on Fabricated Iron and Steel Articles",
    "JIS G 3101 - Rolled Steels for General Structure",
    "JIS H 8641 - Hot Dip Galvanizing",
    "Size Range: 20mm x 20mm x 3mm to 200mm x 200mm x 20mm",
    "Length: 6 meters, 9 meters, 12 meters (standard)",
    "Coating Thickness: 85-100 microns minimum (610-700 g/m²)",
    "Zinc Coating Class: 350-700 g/m² as per ASTM A123",
    "Galvanizing Standards: Triple Layer Protection - Eta, Zeta, Delta Layers",
    "Testing: Salt Spray Test (500+ hours), Adhesion Test, Coating Thickness Test",
    "Certification: Mill Test Certificate (EN 10204/3.1B), Galvanizing Certificate"
  ];

  const comprehensiveAngleTypes = [
    {
      category: "Equal Angles (L-Section)",
      types: [
        "20 x 20 x 3mm", "25 x 25 x 3mm", "25 x 25 x 5mm", "30 x 30 x 3mm",
        "32 x 32 x 3mm", "35 x 35 x 3mm", "35 x 35 x 5mm", "37 x 37 x 3mm",
        "40 x 40 x 3mm", "40 x 40 x 5mm", "40 x 40 x 6mm", "45 x 45 x 3mm",
        "45 x 45 x 5mm", "50 x 50 x 3mm", "50 x 50 x 5mm", "50 x 50 x 6mm",
        "60 x 60 x 5mm", "60 x 60 x 6mm", "65 x 65 x 5mm", "65 x 65 x 6mm",
        "70 x 70 x 6mm", "75 x 75 x 6mm", "75 x 75 x 8mm", "75 x 75 x 10mm",
        "80 x 80 x 6mm", "80 x 80 x 8mm", "90 x 90 x 6mm", "90 x 90 x 8mm",
        "90 x 90 x 10mm", "100 x 100 x 6mm", "100 x 100 x 8mm", "100 x 100 x 10mm",
        "100 x 100 x 12mm", "110 x 110 x 10mm", "125 x 125 x 10mm", "125 x 125 x 12mm",
        "130 x 130 x 10mm", "130 x 130 x 12mm", "150 x 150 x 10mm", "150 x 150 x 12mm",
        "150 x 150 x 15mm", "150 x 150 x 16mm", "150 x 150 x 20mm", "200 x 200 x 15mm",
        "200 x 200 x 16mm", "200 x 200 x 20mm"
      ],
      applications: "General construction, framework, bracing, support structures",
      description: "Most commonly used angles with equal leg dimensions"
    },
    {
      category: "Unequal Angles",
      types: [
        "30 x 20 x 3mm", "40 x 25 x 3mm", "50 x 30 x 5mm", "60 x 40 x 5mm",
        "65 x 50 x 5mm", "75 x 50 x 6mm", "80 x 60 x 6mm", "100 x 65 x 7mm",
        "100 x 75 x 8mm", "125 x 75 x 8mm", "150 x 75 x 9mm", "150 x 100 x 10mm",
        "200 x 100 x 10mm", "200 x 150 x 12mm"
      ],
      applications: "Asymmetric loading conditions, specialized structures",
      description: "Different leg lengths for specific structural requirements"
    },
    {
      category: "Special Purpose Angles",
      types: [
        "Perforated Angles", "Slotted Angles", "Punched Angles", "Drilled Angles",
        "Custom Cut Lengths", "Fabricated Assemblies", "Corner Angles", "Bent Angles",
        "Welded Angle Sections", "Reinforced Angles"
      ],
      applications: "Shelving systems, cable trays, specialized fixtures",
      description: "Custom processed angles for specific applications"
    },
    {
      category: "Heavy Duty Structural Angles",
      types: [
        "150 x 150 x 20mm", "200 x 200 x 20mm", "250 x 250 x 25mm",
        "Extra Heavy Sections", "Marine Grade Angles", "Bridge Construction Angles"
      ],
      applications: "Heavy construction, bridges, marine structures",
      description: "High load bearing capacity for critical applications"
    }
  ];

  const detailedSizeChart = [
    { size: "20 x 20 x 3mm", weight: "0.89 kg/m", area: "1.13 cm²", ix: "0.40 cm⁴", iy: "0.40 cm⁴", applications: "Light framing, furniture" },
    { size: "25 x 25 x 3mm", weight: "1.11 kg/m", area: "1.41 cm²", ix: "0.80 cm⁴", iy: "0.80 cm⁴", applications: "Light structures, brackets" },
    { size: "25 x 25 x 5mm", weight: "1.77 kg/m", area: "2.26 cm²", ix: "1.23 cm⁴", iy: "1.23 cm⁴", applications: "Medium framing, supports" },
    { size: "30 x 30 x 3mm", weight: "1.36 kg/m", area: "1.74 cm²", ix: "1.36 cm⁴", iy: "1.36 cm⁴", applications: "General construction" },
    { size: "35 x 35 x 3mm", weight: "1.58 kg/m", area: "2.01 cm²", ix: "2.08 cm⁴", iy: "2.08 cm⁴", applications: "Structural framing" },
    { size: "35 x 35 x 5mm", weight: "2.57 kg/m", area: "3.28 cm²", ix: "3.26 cm⁴", iy: "3.26 cm⁴", applications: "Load bearing structures" },
    { size: "40 x 40 x 3mm", weight: "1.84 kg/m", area: "2.35 cm²", ix: "3.05 cm⁴", iy: "3.05 cm⁴", applications: "Medium duty framing" },
    { size: "40 x 40 x 5mm", weight: "3.08 kg/m", area: "3.92 cm²", ix: "4.85 cm⁴", iy: "4.85 cm⁴", applications: "Structural supports" },
    { size: "40 x 40 x 6mm", weight: "3.63 kg/m", area: "4.62 cm²", ix: "5.56 cm⁴", iy: "5.56 cm⁴", applications: "Heavy duty applications" },
    { size: "50 x 50 x 5mm", weight: "3.77 kg/m", area: "4.80 cm²", ix: "9.61 cm⁴", iy: "9.61 cm⁴", applications: "General structural work" },
    { size: "50 x 50 x 6mm", weight: "4.47 kg/m", area: "5.69 cm²", ix: "11.2 cm⁴", iy: "11.2 cm⁴", applications: "Medium load structures" },
    { size: "65 x 65 x 5mm", weight: "4.9 kg/m", area: "6.24 cm²", ix: "20.0 cm⁴", iy: "20.0 cm⁴", applications: "Industrial structures" },
    { size: "65 x 65 x 6mm", weight: "5.82 kg/m", area: "7.41 cm²", ix: "23.4 cm⁴", iy: "23.4 cm⁴", applications: "Heavy framing" },
    { size: "75 x 75 x 6mm", weight: "6.85 kg/m", area: "8.73 cm²", ix: "37.1 cm⁴", iy: "37.1 cm⁴", applications: "Transmission towers" },
    { size: "75 x 75 x 8mm", weight: "8.99 kg/m", area: "11.5 cm²", ix: "47.1 cm⁴", iy: "47.1 cm⁴", applications: "Heavy construction" },
    { size: "75 x 75 x 10mm", weight: "11.1 kg/m", area: "14.1 cm²", ix: "56.6 cm⁴", iy: "56.6 cm⁴", applications: "Power transmission" },
    { size: "90 x 90 x 8mm", weight: "11.0 kg/m", area: "14.0 cm²", ix: "81.9 cm⁴", iy: "81.9 cm⁴", applications: "Industrial buildings" },
    { size: "90 x 90 x 10mm", weight: "13.6 kg/m", area: "17.3 cm²", ix: "99.2 cm⁴", iy: "99.2 cm⁴", applications: "Heavy duty structures" },
    { size: "100 x 100 x 8mm", weight: "12.20 kg/m", area: "15.5 cm²", ix: "124 cm⁴", iy: "124 cm⁴", applications: "Commercial buildings" },
    { size: "100 x 100 x 10mm", weight: "15.1 kg/m", area: "19.2 cm²", ix: "151 cm⁴", iy: "151 cm⁴", applications: "Structural supports" },
    { size: "100 x 100 x 12mm", weight: "17.8 kg/m", area: "22.7 cm²", ix: "175 cm⁴", iy: "175 cm⁴", applications: "Heavy load bearing" },
    { size: "130 x 130 x 10mm", weight: "19.7 kg/m", area: "25.1 cm²", ix: "316 cm⁴", iy: "316 cm⁴", applications: "Major structures" },
    { size: "130 x 130 x 12mm", weight: "23.2 kg/m", area: "29.5 cm²", ix: "367 cm⁴", iy: "367 cm⁴", applications: "Bridge construction" },
    { size: "150 x 150 x 12mm", weight: "27.3 kg/m", area: "34.8 cm²", ix: "570 cm⁴", iy: "570 cm⁴", applications: "Heavy infrastructure" },
    { size: "150 x 150 x 15mm", weight: "33.8 kg/m", area: "43.0 cm²", ix: "688 cm⁴", iy: "688 cm⁴", applications: "Major construction" },
    { size: "150 x 150 x 16mm", weight: "35.9 kg/m", area: "45.7 cm²", ix: "721 cm⁴", iy: "721 cm⁴", applications: "Industrial plants" },
    { size: "150 x 150 x 20mm", weight: "44.1 kg/m", area: "56.2 cm²", ix: "869 cm⁴", iy: "869 cm⁴", applications: "Heavy duty construction" },
    { size: "200 x 200 x 15mm", weight: "45.5 kg/m", area: "58.0 cm²", ix: "1350 cm⁴", iy: "1350 cm⁴", applications: "Major infrastructure" },
    { size: "200 x 200 x 16mm", weight: "48.5 kg/m", area: "61.8 cm²", ix: "1420 cm⁴", iy: "1420 cm⁴", applications: "Bridge supports" },
    { size: "200 x 200 x 20mm", weight: "59.9 kg/m", area: "76.3 cm²", ix: "1720 cm⁴", iy: "1720 cm⁴", applications: "Heavy industrial use" }
  ];

  const comprehensiveApplications = [
    {
      industry: "Construction & Building",
      applications: [
        "Structural Framework", "Building Supports", "Roof Trusses", "Floor Joists",
        "Column Supports", "Beam Connections", "Staircase Structures", "Balcony Railings",
        "Door & Window Frames", "Partition Supports", "False Ceiling Framework"
      ],
      benefits: "Long-lasting corrosion protection, cost-effective structural solution",
      specifications: "IS 2062, ASTM A36 compliance"
    },
    {
      industry: "Infrastructure & Transportation",
      applications: [
        "Bridge Construction", "Highway Barriers", "Railway Infrastructure", "Metro Stations",
        "Flyover Supports", "Tunnel Reinforcement", "Road Dividers", "Traffic Signal Poles",
        "Street Light Poles", "Bus Shelters", "Railway Platform Canopies"
      ],
      benefits: "Weather resistance, high load bearing capacity",
      specifications: "IS 2062 Grade E350/E410 compliant"
    },
    {
      industry: "Power & Transmission",
      applications: [
        "Transmission Towers", "Distribution Poles", "Substation Structures", "Power Plant Framework",
        "Electrical Panel Supports", "Cable Tray Systems", "Solar Panel Mounting", "Wind Turbine Towers",
        "Transformer Foundations", "Switch Yard Structures", "Control Room Framework"
      ],
      benefits: "Excellent corrosion resistance, electrical grounding compatibility",
      specifications: "IS 4759, ASTM A123 certified"
    },
    {
      industry: "Telecommunication",
      applications: [
        "Cell Tower Construction", "Antenna Mounting", "Microwave Tower", "Radio Masts",
        "Satellite Dish Support", "Communication Equipment Housing", "Cable Management",
        "Equipment Rack Structures", "Base Station Framework", "Repeater Tower"
      ],
      benefits: "EMI compatibility, weather resistance",
      specifications: "TIA/EIA standards compliant"
    },
    {
      industry: "Industrial & Manufacturing",
      applications: [
        "Factory Buildings", "Warehouse Structures", "Industrial Sheds", "Material Handling Systems",
        "Conveyor Supports", "Machine Foundations", "Equipment Mounting", "Pipe Racks",
        "Storage Tank Supports", "Cooling Tower Structures", "Chimney Supports"
      ],
      benefits: "Chemical resistance, maintenance-free operation",
      specifications: "IS 6745, ASTM A153 compliant"
    },
    {
      industry: "Marine & Offshore",
      applications: [
        "Port Structures", "Jetty Construction", "Marine Platforms", "Offshore Rigs",
        "Ship Building", "Harbor Equipment", "Dock Facilities", "Breakwater Structures",
        "Lighthouse Supports", "Navigation Aids", "Coastal Protection"
      ],
      benefits: "Superior corrosion resistance in marine environment",
      specifications: "Marine grade galvanizing as per ASTM A123"
    },
    {
      industry: "Agricultural & Rural",
      applications: [
        "Farm Buildings", "Greenhouse Structures", "Poultry Sheds", "Dairy Farms",
        "Storage Silos", "Irrigation Systems", "Fencing Structures", "Equipment Sheds",
        "Barn Construction", "Livestock Shelters", "Grain Storage"
      ],
      benefits: "Corrosion resistance against fertilizers and chemicals",
      specifications: "Agricultural grade galvanizing"
    },
    {
      industry: "Commercial & Retail",
      applications: [
        "Shopping Mall Structures", "Office Buildings", "Retail Stores", "Warehouse Roofing",
        "Parking Structures", "Canopy Systems", "Signage Supports", "Display Structures",
        "Exhibition Halls", "Sports Facilities", "Entertainment Venues"
      ],
      benefits: "Aesthetic appeal with structural strength",
      specifications: "Architectural grade finish"
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
      title: "Lowest Total Cost",
      description: "Most economical protection system considering initial cost and maintenance",
      details: [
        "Lowest first cost compared to other coatings",
        "Minimal maintenance requirements",
        "Long service life reduces replacement costs",
        "No need for periodic recoating",
        "Reduces lifecycle costs significantly"
      ],
      icon: Target
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
      title: "Complete Coverage",
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
      title: "Easy Inspection",
      description: "Simple visual and non-destructive testing methods",
      details: [
        "Visual assessment readily possible",
        "Magnetic thickness gauges for measurement",
        "Simple adhesion tests",
        "No special equipment required",
        "Quality control during production"
      ],
      icon: Gauge
    },
    {
      title: "Immediate Protection",
      description: "Ready to use immediately after galvanizing process",
      details: [
        "No drying or curing time required",
        "Immediate handling and transport",
        "No weather dependency",
        "Fast project completion",
        "Immediate load bearing capability"
      ],
      icon: Zap
    }
  ];

  const qualityFeatures = [
    { icon: Shield, title: "IS 2062 Certified", desc: "High grade structural steel as per Indian Standards", color: "text-blue-600" },
    { icon: Award, title: "ASTM A123 Compliant", desc: "International standard hot-dip galvanizing", color: "text-green-600" },
    { icon: Layers, title: "85+ Micron Coating", desc: "Thick zinc coating for maximum protection", color: "text-purple-600" },
    { icon: HardHat, title: "Structural Grade", desc: "High tensile strength for load bearing applications", color: "text-orange-600" },
    { icon: Scale, title: "Precise Dimensions", desc: "Tight tolerances for perfect structural fit", color: "text-indigo-600" },
    { icon: CheckCircle, title: "Quality Tested", desc: "Salt spray tested for 500+ hours corrosion resistance", color: "text-teal-600" },
    { icon: Truck, title: "Ready Stock", desc: "Available ex-stock in all standard sizes", color: "text-red-600" },
    { icon: Globe, title: "Export Quality", desc: "International standard material for global projects", color: "text-gold-primary" }
  ];

  const manufacturingProcess = [
    {
      step: "Steel Preparation",
      description: "High quality mild steel angles manufactured from prime quality steel",
      details: [
        "Material sourcing from certified steel mills",
        "Chemical composition verification",
        "Mechanical property testing",
        "Dimensional inspection",
        "Surface preparation for galvanizing"
      ]
    },
    {
      step: "Pre-Galvanizing Treatment", 
      description: "Complete cleaning and surface preparation before galvanizing",
      details: [
        "Degreasing to remove oils and organic contaminants",
        "Pickling in acid solution to remove mill scale",
        "Flux treatment for metallurgical bonding",
        "Pre-heating to required temperature",
        "Quality inspection before dipping"
      ]
    },
    {
      step: "Hot-Dip Galvanizing",
      description: "Immersion in molten zinc bath at 450°C for metallurgical bonding",
      details: [
        "Zinc bath temperature control at 445-460°C",
        "Controlled immersion and withdrawal",
        "Formation of zinc-iron alloy layers",
        "Cooling and solidification",
        "Inspection for coating uniformity"
      ]
    },
    {
      step: "Post-Galvanizing Treatment",
      description: "Final processing and quality control",
      details: [
        "Cooling and handling procedures",
        "Coating thickness measurement",
        "Adhesion testing",
        "Visual inspection for defects",
        "Final certification and marking"
      ]
    }
  ];

  const testingProcedures = [
    "Chemical Composition Analysis by OES (Optical Emission Spectroscopy)",
    "Mechanical Properties Testing (Tensile Strength, Yield Strength, Elongation)",
    "Coating Thickness Measurement by Magnetic Method (IS 2629)",
    "Coating Weight Test as per ASTM A123 (g/m²)",
    "Adhesion Test by Knife Test and Bend Test",
    "Salt Spray Test for Corrosion Resistance (ASTM B117)",
    "Uniformity Test for Coating Distribution",
    "Visual Inspection for Surface Defects",
    "Dimensional Verification with Certified Instruments",
    "Straightness Check within Permissible Limits",
    "Impact Test for Coating Durability",
    "Hardness Test of Base Material",
    "Microscopic Examination of Coating Structure",
    "Embrittlement Test for Hydrogen Effects"
  ];

  const indianCities = [
    "Mumbai", "Delhi", "Bangalore", "Hyderabad", "Ahmedabad", "Chennai", "Kolkata", "Pune",
    "Jaipur", "Surat", "Lucknow", "Kanpur", "Nagpur", "Indore", "Thane", "Bhopal",
    "Visakhapatnam", "Pimpri-Chinchwad", "Patna", "Vadodara", "Ghaziabad", "Ludhiana",
    "Agra", "Nashik", "Faridabad", "Meerut", "Rajkot", "Kalyan-Dombivali", "Vasai-Virar",
    "Varanasi", "Srinagar", "Aurangabad", "Dhanbad", "Amritsar", "Navi Mumbai", "Allahabad",
    "Ranchi", "Howrah", "Coimbatore", "Jabalpur", "Gwalior", "Vijayawada", "Jodhpur",
    "Madurai", "Raipur", "Kota", "Chandigarh", "Guwahati", "Solapur", "Hubli-Dharwad"
  ];

  

  return (
    <>
      <ProductSEO
        title="Hot Dip Galvanized Angles Manufacturer & Supplier Mumbai | IS 2062 | ASTM A123 Certified"
        description="Leading manufacturer & supplier of hot dip galvanized steel angles in Mumbai. IS 2062, ASTM A123 certified galvanized angles from 20x20x3mm to 200x200x20mm. Stock & supply across India with 85+ micron coating thickness, structural grade quality. Best prices for construction, transmission towers, infrastructure projects."
        keywords="hot dip galvanized angles, galvanized steel angles Mumbai, IS 2062 galvanized angles, ASTM A123 galvanized angles, galvanized angle iron, structural galvanized angles, galvanized L angles, galvanized steel L section, hot dip galvanized steel angles, galvanized angle bar, galvanized structural steel, galvanized iron angles, galvanized equal angles, galvanized unequal angles, transmission tower angles, construction angles galvanized, galvanized angle suppliers Mumbai, galvanized angles stockist, galvanized angles manufacturer India, galvanized steel angle iron, GI angles, galvanized mild steel angles, galvanized angle sections, hot galvanized angles, zinc coated angles, corrosion resistant angles, galvanized structural angles, galvanized angle steel, galvanized L shaped steel, galvanized corner angles, galvanized building angles, galvanized fabrication angles, galvanized infrastructure angles, galvanized tower angles, galvanized framework angles, galvanized support angles, galvanized bracket angles, galvanized mounting angles, galvanized industrial angles, Mumbai galvanized angles, galvanized angles price, galvanized angles weight chart, galvanized angles specifications, galvanized angles standard sizes, 25x25x3 galvanized angle, 40x40x5 galvanized angle, 50x50x5 galvanized angle, 75x75x6 galvanized angle, 100x100x8 galvanized angle, 150x150x12 galvanized angle, galvanized angles thickness, galvanized coating thickness, zinc coating angles, anti-corrosive angles, weather resistant angles, rust proof angles, galvanized angles IS 4759, galvanized angles BS EN ISO 1461"
        category="Galvanized Products"
        productName="Hot Dip Galvanized Angles"
        specifications={specifications}
        canonicalUrl="/product/galvanized/hot-dip-galvanized-angles"
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
              <span className="text-navy-primary dark:text-gold-primary font-medium" data-testid="breadcrumb-current">Hot Dip Galvanized Angles</span>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-navy-primary to-navy-secondary text-white py-20" data-testid="hero-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-heading font-bold mb-6" data-testid="hero-title">
                Hot Dip Galvanized Angles Manufacturer Mumbai
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-blue-100" data-testid="hero-subtitle">
                IS 2062 & ASTM A123 Certified | 85+ Micron Coating | 20x20mm to 200x200mm | Ready Stock Available
              </p>
              <p className="text-lg md:text-xl mb-8 text-blue-200" data-testid="hero-description">
                Leading supplier of premium galvanized steel angles for construction, transmission towers, infrastructure & industrial applications across India
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
              Why Choose Our Hot Dip Galvanized Angles?
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

        {/* Comprehensive Size Chart */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900" data-testid="size-chart-section">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="size-chart-title">
                Complete Size Chart & Specifications
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <thead className="bg-gradient-to-r from-navy-primary to-blue-600 text-white">
                    <tr>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Size (mm)</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Weight (kg/m)</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Area (cm²)</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Ixx (cm⁴)</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Iyy (cm⁴)</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left">Applications</th>
                    </tr>
                  </thead>
                  <tbody>
                    {detailedSizeChart.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50 dark:bg-gray-700" : "bg-white dark:bg-gray-800"}>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-semibold text-navy-primary dark:text-white">{item.size}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">{item.weight}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">{item.area}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">{item.ix}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">{item.iy}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-gray-700 dark:text-gray-300">{item.applications}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 text-center">
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  * Standard length: 6 meters | Custom lengths available up to 12 meters | Tolerances as per IS 2062
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Angle Types */}
        <section className="py-16 bg-white dark:bg-gray-800" data-testid="angle-types-section">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="angle-types-title">
                Complete Range of Galvanized Angles Available
              </h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {comprehensiveAngleTypes.map((category, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden" data-testid={`angle-category-${index}`}>
                    <div className="bg-gradient-to-r from-navy-primary to-blue-600 text-white px-6 py-4">
                      <h3 className="text-xl font-bold">{category.category}</h3>
                    </div>
                    <div className="p-6">
                      <div className="grid md:grid-cols-2 gap-2 mb-4 max-h-60 overflow-y-auto">
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
                Why Hot Dip Galvanizing is the Best Protection
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
                Our Hot Dip Galvanizing Process
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
                Industry Applications & Use Cases
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
                Quality Testing & Certification
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden">
                <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-4">
                  <h3 className="text-xl font-semibold flex items-center">
                    <CheckCircle className="w-6 h-6 mr-3" />
                    Comprehensive Testing Procedures
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
                        <li>• Dimensional Inspection Report</li>
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
                Technical Specifications & Standards
              </h2>
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-600 overflow-hidden">
                <div className="bg-navy-primary text-white px-6 py-4">
                  <h3 className="text-xl font-semibold">Specification Standards & Compliance</h3>
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
        <section className="py-16 bg-gray-50 dark:bg-gray-900" data-testid="cities-section">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-center text-navy-primary dark:text-white mb-12" data-testid="cities-title">
                Cities We Supply Hot Dip Galvanized Angles
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
                    <strong>Pan India Supply:</strong> We supply galvanized angles to all major cities and industrial areas across India. 
                    Fast delivery through our extensive logistics network.
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
                Why Choose Mamta Steel Traders for Galvanized Angles?
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
                  <h3 className="text-xl font-semibold mb-2">Ready Stock</h3>
                  <p className="text-blue-100">Complete range available ex-stock for immediate delivery</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Award className="w-8 h-8 text-navy-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Certified Quality</h3>
                  <p className="text-blue-100">IS 2062, ASTM A123 certified with test certificates</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Truck className="w-8 h-8 text-navy-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Pan India Supply</h3>
                  <p className="text-blue-100">Fast delivery across India with logistics support</p>
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
                Ready to Order Premium Hot Dip Galvanized Angles?
              </h2>
              <p className="text-xl mb-8 text-blue-100" data-testid="cta-subtitle">
                Get instant quotes for IS 2062 & ASTM A123 certified galvanized angles with fast delivery across India & export worldwide
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