import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, ShoppingCart, Filter, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import alloys_steel_mamta_steel_traders_img from "@/assets/ALLOYS STEEL  MAMTA STEEL TRADERS.jpg";

export default function AlloySteelRoundBars() {
  const products = [
    {
      id: 1,
      title: "1.7711 Round Bar",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "1.7711 Round Bars",
      link: "/contact"
    },
    {
      id: 2,
      title: "100Cr6 Round Bar",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "100CR6 Bearing Steel Round bar 52100",
      link: "/contact"
    },
    {
      id: 3,
      title: "15CDV6 Round Bars (1.7734)",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "15CDV6 Round Bars 1.7734",
      link: "/contact"
    },
    {
      id: 4,
      title: "16MnCr5 Round Bar",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "16MnCr5 Round Bar Stockist Supplier",
      link: "/contact"
    },
    {
      id: 5,
      title: "17CrNiMo6 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "17CrNiMo6 Round bars",
      link: "/contact"
    },
    {
      id: 6,
      title: "18CrNiMo7-6 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "18CrNiMo7-6 / 1.6587 Round bars",
      link: "/contact"
    },
    {
      id: 7,
      title: "20MnCr5 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "20MnCr5 Round Bars Suppliers Stockist",
      link: "/contact"
    },
    {
      id: 8,
      title: "20MnCr5 Round Bar",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "20MnCr5 Round Bar Supplier Stockist",
      link: "/contact"
    },
    {
      id: 9,
      title: "20NiCrMo2-2 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "20NiCrMo2-2 Round Bars",
      link: "/contact"
    },
    {
      id: 10,
      title: "25CrMo4 Round Bar",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "25CrMo4 Round Bar",
      link: "/contact"
    },
    {
      id: 11,
      title: "30CrNiMo8 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "30CrNiMo8 Round Bars",
      link: "/contact"
    },
    {
      id: 12,
      title: "31CrMoV9 Round Bar",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "31CrMoV9 Round Bar",
      link: "/contact"
    },
    {
      id: 13,
      title: "34CrNiMo6 Round Bar",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "34CrNiMo6 Round Bar",
      link: "/contact"
    },
    {
      id: 14,
      title: "39NiCrMo3 Round Bars / 1.6510",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "39NiCrMo3 Round Bars / 1.6510 Round Bars",
      link: "/contact"
    },
    {
      id: 15,
      title: "40Cr7Al10Mo2 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "40Cr7Al10Mo2 Round Bars",
      link: "/contact"
    },
    {
      id: 16,
      title: "40CrMoV4-6 Round Bar",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "40CrMoV4-6 Round Bar",
      link: "/contact"
    },
    {
      id: 17,
      title: "4140 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "SAE 4140 AISI 4140 Round Bars EN19 1.7225 42CRMO4",
      link: "/contact"
    },
    {
      id: 18,
      title: "41Cr4 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "41Cr4 Round Bars EN18",
      link: "/contact"
    },
    {
      id: 19,
      title: "4340 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "4340 Round Bars High Strength",
      link: "/contact"
    },
    {
      id: 20,
      title: "8620 Bright Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "8620 Bright Round Bar",
      link: "/contact"
    },
    {
      id: 21,
      title: "905M39 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "905M39 Round Bars BS 970",
      link: "/contact"
    },
    {
      id: 22,
      title: "A193 Grade B7 Round Bar",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "ASTM A193 Grade B7 Round Bars",
      link: "/contact"
    },
    {
      id: 23,
      title: "AISI 8620 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "SAE 8620 Round Bars, AISI 8620, 1.6523",
      link: "/contact"
    },
    {
      id: 24,
      title: "42CrMo4 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "42CrMo4 Round Bars EN19",
      link: "/contact"
    },
    {
      id: 25,
      title: "EN8 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "EN8 Carbon Steel Round Bars",
      link: "/contact"
    },
    {
      id: 26,
      title: "EN9 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "EN9 Carbon Steel Round Bars",
      link: "/contact"
    },
    {
      id: 27,
      title: "EN19 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "EN19 Alloy Steel Round Bars",
      link: "/contact"
    },
    {
      id: 28,
      title: "EN24 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "EN24 Alloy Steel Round Bars",
      link: "/contact"
    },
    {
      id: 29,
      title: "4130 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "4130 Chromoly Steel Round Bars",
      link: "/contact"
    },
    {
      id: 30,
      title: "4150 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "4150 Alloy Steel Round Bars",
      link: "/contact"
    },
    {
      id: 31,
      title: "4340V Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "4340V Vacuum Melted Steel Bars",
      link: "/contact"
    },
    {
      id: 32,
      title: "8740 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "8740 Alloy Steel Round Bars",
      link: "/contact"
    },
    {
      id: 33,
      title: "9310 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "9310 Case Hardening Steel Bars",
      link: "/contact"
    },
    {
      id: 34,
      title: "12L14 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "12L14 Free Machining Steel Bars",
      link: "/contact"
    },
    {
      id: 35,
      title: "1144 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "1144 Stress Proof Steel Bars",
      link: "/contact"
    },
    {
      id: 36,
      title: "35CrMo Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "35CrMo Alloy Steel Round Bars",
      link: "/contact"
    },
    {
      id: 37,
      title: "SCM440 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "SCM440 JIS Alloy Steel Bars",
      link: "/contact"
    },
    {
      id: 38,
      title: "SNCM420 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "SNCM420 Case Hardening Steel",
      link: "/contact"
    },
    {
      id: 39,
      title: "50CrMo4 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "50CrMo4 Alloy Steel Round Bars",
      link: "/contact"
    },
    {
      id: 40,
      title: "36NiCrMo4 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "36NiCrMo4 High Tensile Steel Bars",
      link: "/contact"
    },
    {
      id: 41,
      title: "38NiCrMo4 Round Bars",
      image: alloys_steel_mamta_steel_traders_img,
      alt: "38NiCrMo4 High Strength Steel Bars",
      link: "/contact"
    }
  ];

  const specifications = [
    "ASTM A193 - Standard Specification for Alloy-Steel and Stainless Steel Bolting Materials",
    "ASTM A479 - Standard Specification for Stainless Steel and Heat-Resisting Steel Bars",
    "ASTM A276 - Standard Specification for Stainless Steel Bars and Shapes",
    "DIN Standards - German Industrial Standards for Alloy Steel",
    "Size Range: 6mm to 500mm diameter",
    "Various Grades: 4140, 4340, 4130, 25CrMo4, 34CrNiMo6, etc."
  ];

  const applications = [
    "Automotive Components and Drive Shafts",
    "Aerospace and Defense Applications", 
    "Oil and Gas Equipment Manufacturing",
    "Heavy Machinery and Industrial Equipment",
    "High-Strength Fasteners and Bolts",
    "Mining and Construction Equipment",
    "Power Generation Components",
    "Marine and Offshore Applications"
  ];

  return (
    <>
      <ProductSEO
        title="Alloy Steel Round Bars - 4140, 4340, 25CrMo4, 34CrNiMo6 | Premium Grade | Mamta Steel Traders"
        description="High-quality alloy steel round bars in various grades including 4140, 4340, 25CrMo4, 34CrNiMo6. ASTM A193, A479, DIN standards. Complete range for automotive, aerospace, and industrial applications."
        keywords="alloy steel round bars, 4140 round bars, 4340 round bars, 25CrMo4, 34CrNiMo6, ASTM A193, automotive steel, aerospace steel, industrial steel bars"
        canonicalUrl="/product/round-bars/alloy-steel-round"
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
              <span className="text-navy-primary dark:text-gold-primary font-medium" data-testid="breadcrumb-current">Alloy Steel Round Bars</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-heading font-bold mb-6" data-testid="text-alloy-steel-title">
                Alloy Steel Round Bars
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200" data-testid="text-alloy-steel-subtitle">
                Premium Quality for Demanding Applications
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-contact-alloy-steel">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </Link>
                <a href="tel:+919819322576" className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-call-alloy-steel">
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
            {/* Results and Sorting Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-600 dark:text-gray-300" data-testid="results-count">
                  Showing 1–41 of 41 results
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
                        View Details
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
                      View Specifications →
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

            {/* All Items Displayed - No Pagination Needed */}
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300">
                All 41 Alloy Steel Round Bar products are displayed above
              </p>
            </div>

            {/* Contact Section */}
            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-gray-100 mb-4" data-testid="text-contact-title">
                Need Custom Alloy Steel Solutions?
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                Contact our technical experts for custom specifications and material selection
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-navy-primary hover:bg-navy-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-get-quote">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Technical Quote
                </Link>
                <a href="tel:+919819322576" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-call-expert">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Steel Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}