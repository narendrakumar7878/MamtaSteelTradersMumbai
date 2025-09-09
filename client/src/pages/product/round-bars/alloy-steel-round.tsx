import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, ShoppingCart, Filter, ChevronDown } from "lucide-react";
import { Link } from "wouter";

export default function AlloySteelRoundBars() {
  const products = [
    {
      id: 1,
      title: "1.7711 Round Bar",
      image: "https://textronsteelalloys.com/wp-content/uploads/2024/07/1.7711-Round-Bar-300x300.jpg",
      alt: "1.7711 Round Bars",
      link: "/product/round-bars/1-7711-round-bar"
    },
    {
      id: 2,
      title: "100Cr6 Round Bar",
      image: "https://textronsteelalloys.com/wp-content/uploads/2019/05/100Cr6-Steel-Round-Bar-52100-300x300.jpg",
      alt: "100CR6 Bearing Steel Round bar 52100 Exporter suppliers",
      link: "/product/round-bars/100cr6-round-bar"
    },
    {
      id: 3,
      title: "15CDV6 Round Bars (1.7734)",
      image: "https://textronsteelalloys.com/wp-content/uploads/2022/08/15cdv6-round-bar-300x300.jpg",
      alt: "15CDV6 Round Bars 1.7734",
      link: "/product/round-bars/15cdv6-round-bars"
    },
    {
      id: 4,
      title: "16MnCr5 Round Bar",
      image: "https://textronsteelalloys.com/wp-content/uploads/2019/06/16mncr5-round-bar-300x300.jpg",
      alt: "16MnCr5 Round Bar Stockist Supplier Manufacturer",
      link: "/product/round-bars/16mncr5-round-bar"
    },
    {
      id: 5,
      title: "17CrNiMo6 Round Bars",
      image: "https://textronsteelalloys.com/wp-content/uploads/2022/07/18CrNiMo7-6-1.6587-round-bars-300x300.jpg",
      alt: "17CrNiMo6, 18CrNiMo7-6 / 1.6587 Round bars",
      link: "/product/round-bars/17crnimo6-round-bars"
    },
    {
      id: 6,
      title: "18CrNiMo7-6 Round Bars",
      image: "https://textronsteelalloys.com/wp-content/uploads/2022/07/18CrNiMo7-6-1.6587-round-bars-300x300.jpg",
      alt: "17CrNiMo6, 18CrNiMo7-6 / 1.6587 Round bars",
      link: "/product/round-bars/18crnimo7-6-round-bars"
    },
    {
      id: 7,
      title: "20MnCr5",
      image: "https://textronsteelalloys.com/wp-content/uploads/2019/05/20mncr5-Steel-Bars-Manufacturers-Exporters-Suppliers-300x300.jpg",
      alt: "20MnCr5 Round Bars Suppliers Stockist Manufacturer Exporters",
      link: "/product/round-bars/20mncr5"
    },
    {
      id: 8,
      title: "20MnCr5 Round Bar",
      image: "https://textronsteelalloys.com/wp-content/uploads/2019/07/20mncr5-round-bar-300x300.jpg",
      alt: "20MnCr5 Round Bar Supplier Stockist",
      link: "/product/round-bars/20mncr5-round-bar"
    },
    {
      id: 9,
      title: "20NiCrMo2-2 Round Bars",
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=300&h=300&fit=crop&crop=center",
      alt: "20NiCrMo2-2 Round Bars",
      link: "/product/round-bars/20nicrmo2-2-round-bars"
    },
    {
      id: 10,
      title: "25CrMo4 Round Bar",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=300&fit=crop&crop=center",
      alt: "25CrMo4 Round Bar",
      link: "/product/round-bars/25crmo4-round-bar"
    },
    {
      id: 11,
      title: "30CrNiMo8 Round Bars",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop&crop=center",
      alt: "30CrNiMo8 Round Bars",
      link: "/product/round-bars/30crnimo8-round-bars"
    },
    {
      id: 12,
      title: "34CrNiMo6 Round Bar",
      image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=300&h=300&fit=crop&crop=center",
      alt: "34CrNiMo6 Round Bar",
      link: "/product/round-bars/34crnimo6-round-bar"
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-alloy-steel-title">
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
                <a href="tel:+919967444008" className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-call-alloy-steel">
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
                  Showing 1–12 of 41 results
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

            {/* Pagination */}
            <div className="flex justify-center">
              <nav className="flex items-center space-x-2">
                <button className="px-4 py-2 text-gray-500 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors" disabled>
                  Previous
                </button>
                <button className="px-4 py-2 bg-navy-primary text-white rounded-lg">1</button>
                <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">2</button>
                <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">3</button>
                <span className="px-2">...</span>
                <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">5</button>
                <button className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Next
                </button>
              </nav>
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
                <a href="tel:+919967444008" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-call-expert">
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