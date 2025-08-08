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
    <section className="py-16 lg:py-24 bg-gray-50" data-testid="stats-section">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div>
              <h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
                style={{ color: '#1a3e72' }}
                data-testid="stats-heading"
              >
                Stainless Steel Industry Leaders in Mumbai Since 2010
              </h1>

              {/* Orange Speech Bubble */}
              <div 
                className="relative p-6 rounded-lg mb-8"
                style={{ backgroundColor: '#f39c12' }}
                data-testid="description-bubble"
              >
                <div className="absolute -bottom-3 left-8 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-l-transparent border-r-transparent" style={{ borderTopColor: '#f39c12' }}></div>
                <p className="text-white text-lg font-medium leading-relaxed">
                  Mamta Steel Traders is a premier supplier of high-grade stainless steel products serving 50+ industries across India. With 12+ years of expertise, we provide the most durable and corrosion-resistant steel solutions.
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
                  data-testid={`stat-card-${index}`}
                >
                  <div 
                    className="text-4xl lg:text-5xl font-bold mb-2"
                    style={{ color: '#f39c12' }}
                    data-testid={`stat-value-${index}`}
                  >
                    {stat.value}
                  </div>
                  <p 
                    className="text-sm font-medium"
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
                className="text-2xl font-bold mb-6"
                style={{ color: '#1a3e72' }}
                data-testid="benefits-heading"
              >
                Why Choose Our Steel Solutions:
              </h2>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li 
                    key={index} 
                    className="flex items-center space-x-3"
                    data-testid={`benefit-item-${index}`}
                  >
                    <div className="flex-shrink-0">
                      <Check 
                        className="w-6 h-6"
                        style={{ color: '#f39c12' }}
                      />
                    </div>
                    <span 
                      className="text-lg"
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800&q=80"
                alt="Industrial steel manufacturing factory with workers and steel products"
                className="w-full h-[400px] lg:h-[600px] object-cover"
                loading="lazy"
                data-testid="factory-image"
              />
              
              {/* Trust Badge */}
              <div 
                className="absolute bottom-4 left-4 bg-black bg-opacity-80 text-white px-4 py-2 rounded-lg backdrop-blur-sm"
                data-testid="trust-badge"
              >
                <p className="text-sm font-semibold">
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
