import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

const productCategories = [
  {
    title: "Steel Pipes",
    description: "Premium quality stainless steel and carbon steel pipes for various industrial applications",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    products: ["Stainless Steel Pipes", "Carbon Steel Pipes", "Seamless Pipes", "Welded Pipes"]
  },
  {
    title: "Steel Sheets & Plates",
    description: "Durable MS/SS plates and checkered sheets for construction and manufacturing",
    image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    products: ["Stainless Steel Sheets", "MS Plates", "Checkered Plates", "Hot Rolled Sheets"]
  },
  {
    title: "Steel Flanges",
    description: "High-pressure flanges including weld neck, slip-on, and threaded flanges",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    products: ["Weld Neck Flanges", "Slip-on Flanges", "Threaded Flanges", "Blind Flanges"]
  }
];

export default function Products() {
  return (
    <>
      <SEOHead
        title="Products"
        description="Explore our comprehensive range of steel products including pipes, sheets, plates, and flanges. Premium quality stainless steel and carbon steel products for industrial use."
        keywords="steel pipes, steel sheets, steel flanges, stainless steel products, carbon steel pipes, industrial steel"
      />
      
      <div className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          {/* Hero Section */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-2xl sm:text-2xl lg:text-heading font-bold text-slate-800 mb-4 sm:mb-6" data-testid="text-products-title">
              Our Steel Products
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4" data-testid="text-products-subtitle">
              Comprehensive range of premium quality steel products designed to meet diverse industrial requirements
            </p>
          </div>

          {/* Product Categories */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {productCategories.map((category, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                data-testid={`product-category-${index}`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-lg shadow-lg"
                    loading="lazy"
                    data-testid={`product-image-${index}`}
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold text-slate-800 mb-3 sm:mb-4" data-testid={`product-title-${index}`}>
                    {category.title}
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6" data-testid={`product-description-${index}`}>
                    {category.description}
                  </p>
                  <ul className="space-y-2 mb-4 sm:mb-6">
                    {category.products.map((product, productIndex) => (
                      <li 
                        key={productIndex} 
                        className="flex items-center text-sm sm:text-base text-gray-700"
                        data-testid={`product-item-${index}-${productIndex}`}
                      >
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                        {product}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base min-h-[44px] min-w-[120px] sm:min-w-0"
                    data-testid={`product-button-${index}`}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-blue-50 rounded-lg p-6 sm:p-8 lg:p-12 text-center mt-8 sm:mt-12 lg:mt-16">
            <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold text-slate-800 mb-3 sm:mb-4" data-testid="text-cta-title">
              Need Custom Steel Solutions?
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-4" data-testid="text-cta-description">
              Our expert team can help you find the perfect steel products for your specific requirements
            </p>
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg min-h-[44px]"
              data-testid="button-contact-cta"
            >
              Contact Our Experts
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
