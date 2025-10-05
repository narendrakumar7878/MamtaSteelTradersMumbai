import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, ShoppingCart, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import alloys_steel_mamta_steel_traders_img from "@/assets/ALLOYS STEEL  MAMTA STEEL TRADERS.jpg";

export default function AlloySteelFSeries() {
  const products = [
    {
      id: 1,
      title: "1.7380 Round Bars (F22)",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "1.7380 Round Bars F22",
      link: "/contact"
    },
    {
      id: 2,
      title: "9Cr1Mo Round Bar (F91)",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "9Cr1Mo Round Bar T91 P91 F91",
      link: "/contact"
    },
    {
      id: 3,
      title: "F11 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "F11 Round Bars, ASTM A182 F11 Round Bars",
      link: "/contact"
    },
    {
      id: 4,
      title: "F22 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "ASTM A182 F22 Round Bars",
      link: "/contact"
    },
    {
      id: 5,
      title: "F91 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "ASTM A182 F91 Round Bars",
      link: "/contact"
    },
    {
      id: 6,
      title: "X10CrMoVNb9-1 Round Bar",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "X10CrMoVNb9-1 Round Bar 1.4903",
      link: "/contact"
    }
  ];

  const specifications = [
    "ASTM A182 - Standard Specification for Forged or Rolled Alloy and Stainless Steel Pipe Flanges",
    "ASTM A335 - Standard Specification for Seamless Ferritic Alloy-Steel Pipe for High-Temperature Service",
    "ASTM A213 - Standard Specification for Seamless Ferritic and Austenitic Alloy-Steel Boiler",
    "DIN Standards - German Industrial Standards for F-Series Alloys",
    "Size Range: 6mm to 500mm diameter",
    "Grades: F5, F9, F11, F12, F22, F91 and Special Grades"
  ];

  const applications = [
    "Power Plant and Boiler Components",
    "High-Temperature Pressure Vessels", 
    "Steam and Gas Turbine Parts",
    "Petrochemical Plant Equipment",
    "Oil Refinery Processing Units",
    "Heat Exchanger Components",
    "Superheater and Reheater Tubes",
    "High-Temperature Piping Systems"
  ];

  return (
    <>
      <ProductSEO
        title="Alloy Steel F Series Round Bars - F5, F9, F11, F12, F22, F91 | High Temperature | Mamta Steel Traders"
        description="Premium quality alloy steel F-series round bars including F5, F9, F11, F12, F22, F91 grades. ASTM A182, A335, A213 standards. For high-temperature power plant and petrochemical applications."
        keywords="F series round bars, F11 round bars, F22 round bars, F91 round bars, ASTM A182, high temperature steel, power plant steel, boiler steel, petrochemical steel"
        canonicalUrl="/product/round-bars/alloy-steel-f-series"
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Breadcrumb */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary dark:hover:text-gold-primary transition-colors" data-testid="breadcrumb-home">
                Home
              </Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <Link href="/products" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary dark:hover:text-gold-primary transition-colors" data-testid="breadcrumb-products">
                Products
              </Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <Link href="/product/round-bars/round-bars" className="text-gray-600 dark:text-gray-400 hover:text-navy-primary dark:hover:text-gold-primary transition-colors" data-testid="breadcrumb-round-bars">
                Round Bars
              </Link>
              <ArrowRight className="w-4 h-4 text-gray-400" />
              <span className="text-navy-primary dark:text-gold-primary font-medium" data-testid="breadcrumb-current">Alloy Steel F Series</span>
            </nav>
          </div>
        </div>

        {/* Back Button */}
        <div className="container mx-auto px-4 py-6">
          <Link 
            href="/product/round-bars/round-bars" 
            className="inline-flex items-center text-navy-primary dark:text-gold-primary hover:text-navy-secondary dark:hover:text-gold-secondary transition-colors font-medium"
            data-testid="button-back-to-allbar"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Round Bars
          </Link>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-heading font-bold mb-6" data-testid="text-f-series-title">
                Alloy Steel F Series Round Bars
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200" data-testid="text-f-series-subtitle">
                High-Temperature Performance Materials for Critical Applications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-contact-f-series">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </Link>
                <a href="tel:+919819322576" className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-call-f-series">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Results Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-600 dark:text-gray-300" data-testid="results-count">
                  Showing all 6 F-Series products
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300" data-testid="sort-dropdown">
                  <option value="menu_order">Default sorting</option>
                  <option value="popularity">Sort by popularity</option>
                  <option value="date">Sort by latest</option>
                  <option value="price">Sort by price: low to high</option>
                  <option value="price-desc">Sort by price: high to low</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {products.map((product) => (
                <div key={product.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" data-testid={`product-card-${product.id}`}>
                  <div className="relative group">
                    <img
                      src={product.image}
                      alt={product.alt}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link
                        href={product.link}
                        className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-6 py-2 rounded-lg font-semibold transition-colors inline-flex items-center"
                        data-testid={`product-link-${product.id}`}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Get Quote
                      </Link>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-800 dark:text-gray-100 mb-2" data-testid={`product-title-${product.id}`}>
                      <Link href={product.link} className="hover:text-navy-primary dark:hover:text-gold-primary transition-colors">
                        {product.title}
                      </Link>
                    </h3>
                    <Link
                      href={product.link}
                      className="text-navy-primary dark:text-gold-primary hover:underline font-medium"
                      data-testid={`product-details-${product.id}`}
                    >
                      Get Specifications →
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Specifications Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Technical Specifications */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-specifications-title">
                  Technical Specifications
                </h3>
                <div className="space-y-3">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-navy-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300" data-testid={`spec-${index}`}>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-applications-title">
                  Key Applications
                </h3>
                <div className="space-y-3">
                  {applications.map((application, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-gold-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300" data-testid={`application-${index}`}>{application}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* F-Series Grades Information */}
            <div className="bg-gradient-to-r from-navy-primary to-navy-secondary rounded-xl p-8 text-white mb-16">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-2xl md:text-2xl font-bold mb-6" data-testid="text-grades-title">
                  F-Series Grade Information
                </h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold mb-3">Low Alloy Grades:</h4>
                    <ul className="space-y-2 text-gray-200">
                      <li>• F5 - 5Cr-0.5Mo Steel</li>
                      <li>• F9 - 9Cr-1Mo Steel</li>
                      <li>• F11 - 1.25Cr-0.5Mo Steel</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">High Alloy Grades:</h4>
                    <ul className="space-y-2 text-gray-200">
                      <li>• F12 - 1Cr-0.5Mo Steel</li>
                      <li>• F22 - 2.25Cr-1Mo Steel</li>
                      <li>• F91 - 9Cr-1Mo-V Steel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4" data-testid="text-contact-title">
                Need Custom F-Series Solutions?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Contact our metallurgy experts for high-temperature material selection and custom specifications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-navy-primary hover:bg-navy-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-get-quote">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Technical Quote
                </Link>
                <a href="tel:+919819322576" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-call-expert">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Metallurgy Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}