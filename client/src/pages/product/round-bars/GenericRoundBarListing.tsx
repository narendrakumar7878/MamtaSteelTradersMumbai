import ProductSEO from "@/components/ProductSEO";
import { ArrowRight, Phone, Mail, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

interface GenericRoundBarListingProps {
  title: string;
  count: number;
  description: string;
  image: string;
}

export default function GenericRoundBarListing({ title, count, description, image }: GenericRoundBarListingProps) {
  // Generate placeholder items based on count
  const generateItems = (count: number) => {
    const items = [];
    for (let i = 1; i <= count; i++) {
      items.push({
        id: i,
        name: `${title} Grade ${i}`,
        description: `High-quality ${title.toLowerCase()} product for industrial applications`,
        specifications: [
          "Size Range: 6mm to 300mm dia",
          "Length: Up to 12 meters",
          "Finish: Hot rolled, Cold drawn",
          "Standard: ASTM, EN, JIS"
        ],
        applications: [
          "Industrial machinery",
          "Construction projects",
          "Automotive components",
          "Marine applications"
        ]
      });
    }
    return items;
  };

  const items = generateItems(count);

  return (
    <>
      <ProductSEO
        title={`${title} Round Bars - Premium Quality | Mamta Steel Traders`}
        description={`${description}. Available in various sizes and specifications. Contact us for quotes and technical specifications.`}
        keywords={`${title.toLowerCase()} round bars, ${title.toLowerCase()} steel, industrial round bars, steel suppliers`}
        canonicalUrl={`/product/round-bars/${title.toLowerCase().replace(/\s+/g, '-')}`}
      />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-navy-primary via-navy-secondary to-slate-800 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6" data-testid="text-category-title">
                {title} Round Bars
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200" data-testid="text-category-subtitle">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-contact-category">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </Link>
                <a href="tel:+919967444008" className="border-2 border-white hover:bg-white hover:text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-call-category">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>

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
              <span className="text-navy-primary dark:text-gold-primary font-medium" data-testid="breadcrumb-current">{title}</span>
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

        {/* Products Grid */}
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-products-title">
                {title} Products ({count} Items)
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto" data-testid="text-products-description">
                Explore our comprehensive range of {title.toLowerCase()} round bars available in various grades and specifications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
                  data-testid={`card-product-${item.id}`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 bg-navy-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Grade {item.id}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 dark:text-gray-100 mb-3" data-testid={`text-product-name-${item.id}`}>
                      {item.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4" data-testid={`text-product-description-${item.id}`}>
                      {item.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-slate-800 dark:text-gray-100 mb-2">Specifications:</h4>
                      <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                        {item.specifications.map((spec, index) => (
                          <li key={index}>• {spec}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-800 dark:text-gray-100 mb-2">Applications:</h4>
                      <ul className="text-xs text-gray-600 dark:text-gray-300 space-y-1">
                        {item.applications.map((app, index) => (
                          <li key={index}>• {app}</li>
                        ))}
                      </ul>
                    </div>

                    <Link 
                      href="/contact"
                      className="w-full bg-navy-primary hover:bg-navy-secondary text-white px-4 py-2 rounded-lg font-semibold transition-colors inline-flex items-center justify-center text-sm"
                      data-testid={`button-quote-${item.id}`}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-100 dark:bg-gray-800 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-gray-100 mb-6" data-testid="text-contact-title">
                Need Custom {title} Solutions?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8" data-testid="text-contact-description">
                Contact our technical experts for custom specifications, sizes, and grades
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-navy-primary hover:bg-navy-secondary text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-get-quote">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Custom Quote
                </Link>
                <a href="tel:+919967444008" className="bg-gold-primary hover:bg-gold-secondary text-navy-primary px-8 py-3 rounded-lg font-semibold transition-colors inline-flex items-center justify-center" data-testid="button-call-expert">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Technical Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}