import { Check } from "lucide-react";

const stats = [
  {
    value: "500+",
    label: "Clients Served"
  },
  {
    value: "1000+",
    label: "Products Available"
  },
  {
    value: "12+",
    label: "Years Experience"
  }
];

const benefits = [
  "ISI-certified stainless steel products",
  "Jindal, Tata Steel & SAIL authorized dealer",
  "Same-day delivery in Mumbai",
  "Competitive wholesale prices",
  "Custom cutting & fabrication services"
];

export default function StatsSection() {
  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-24 bg-gray-50" data-testid="stats-section">
      <div className="w-full max-w-full mx-auto px-2 sm:px-3 lg:px-4 xl:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-6 sm:space-y-8">
            {/* Main Heading */}
            <div>
              <h1 
                className="text-2xl sm:text-2xl lg:text-heading font-bold mb-4 sm:mb-6 leading-tight"
                style={{ color: '#1a3e72' }}
                data-testid="stats-heading"
              >
                Stainless Steel Industry Leaders in Mumbai Since 2010
              </h1>

              {/* Orange Speech Bubble */}
              <div 
                className="relative p-4 sm:p-5 lg:p-6 rounded-lg mb-6 sm:mb-8"
                style={{ backgroundColor: '#f39c12' }}
                data-testid="description-bubble"
              >
                <div className="absolute -bottom-3 left-6 sm:left-8 w-0 h-0 border-l-[12px] sm:border-l-[15px] border-r-[12px] sm:border-r-[15px] border-t-[12px] sm:border-t-[15px] border-l-transparent border-r-transparent" style={{ borderTopColor: '#f39c12' }}></div>
                <p className="text-white text-sm sm:text-base lg:text-lg font-medium leading-relaxed">
                  Mamta Steel Traders is a premier supplier of high-grade stainless steel products serving 50+ industries across India. With 12+ years of expertise, we provide the most durable and corrosion-resistant steel solutions.
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-4 sm:p-5 lg:p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                  data-testid={`stat-card-${index}`}
                >
                  <div 
                    className="text-2xl sm:text-2xl lg:text-heading font-bold mb-1 sm:mb-2"
                    style={{ color: '#f39c12' }}
                    data-testid={`stat-value-${index}`}
                  >
                    {stat.value}
                  </div>
                  <p 
                    className="text-xs sm:text-sm font-medium"
                    style={{ color: '#333333' }}
                    data-testid={`stat-label-${index}`}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Benefits List */}
            <div>
              <h2 
                className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6"
                style={{ color: '#1a3e72' }}
                data-testid="benefits-heading"
              >
                Why Choose Our Steel Solutions:
              </h2>
              <ul className="space-y-3 sm:space-y-4">
                {benefits.map((benefit, index) => (
                  <li 
                    key={index} 
                    className="flex items-center space-x-2 sm:space-x-3"
                    data-testid={`benefit-item-${index}`}
                  >
                    <div className="flex-shrink-0">
                      <Check 
                        className="w-5 h-5 sm:w-6 sm:h-6"
                        style={{ color: '#f39c12' }}
                      />
                    </div>
                    <span 
                      className="text-sm sm:text-base lg:text-lg"
                      style={{ color: '#333333' }}
                    >
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80"
                alt="Industrial steel manufacturing factory with workers and steel products"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] object-cover"
                loading="lazy"
                data-testid="factory-image"
              />
              
              {/* Trust Badge */}
              <div 
                className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 bg-black bg-opacity-80 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg backdrop-blur-sm"
                data-testid="trust-badge"
              >
                <p className="text-xs sm:text-sm font-semibold">
                  Trusted by 500+ Companies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
