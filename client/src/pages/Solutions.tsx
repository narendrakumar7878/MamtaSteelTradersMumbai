import SEOHead from "@/components/SEOHead";
import { Factory, Building, Wrench, Truck } from "lucide-react";

const solutions = [
  {
    icon: Factory,
    title: "Industrial Manufacturing",
    description: "Comprehensive steel solutions for manufacturing industries including automotive, aerospace, and heavy machinery.",
    features: ["Custom fabrication", "Quality assurance", "Timely delivery", "Technical support"]
  },
  {
    icon: Building,
    title: "Construction & Infrastructure",
    description: "High-grade structural steel products for construction projects, bridges, and infrastructure development.",
    features: ["Structural steel", "Reinforcement bars", "Custom cutting", "Site delivery"]
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description: "Tailored steel solutions designed to meet specific project requirements and industry standards.",
    features: ["Design consultation", "Custom specifications", "Prototype development", "Quality testing"]
  },
  {
    icon: Truck,
    title: "Supply Chain Management",
    description: "End-to-end supply chain solutions ensuring efficient procurement, storage, and distribution.",
    features: ["Inventory management", "Just-in-time delivery", "Logistics support", "Order tracking"]
  }
];

export default function Solutions() {
  return (
    <>
      <SEOHead
        title="Solutions"
        description="Comprehensive steel solutions for industrial manufacturing, construction, and custom applications. Expert consultation and end-to-end supply chain management."
        keywords="steel solutions, industrial manufacturing, construction steel, custom steel solutions, supply chain management"
      />
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6" data-testid="text-solutions-title">
              Steel Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-solutions-subtitle">
              Comprehensive steel solutions tailored to meet diverse industry requirements with expert consultation and support
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {solutions.map((solution, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
                data-testid={`solution-card-${index}`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800" data-testid={`solution-title-${index}`}>
                    {solution.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6" data-testid={`solution-description-${index}`}>
                  {solution.description}
                </p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className="flex items-center text-gray-700"
                      data-testid={`solution-feature-${index}-${featureIndex}`}
                    >
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="bg-blue-50 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-slate-800 text-center mb-12" data-testid="text-process-title">
              Our Solution Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Consultation", description: "Understanding your requirements" },
                { step: "02", title: "Planning", description: "Designing optimal solutions" },
                { step: "03", title: "Execution", description: "Manufacturing and quality control" },
                { step: "04", title: "Delivery", description: "Timely delivery and support" }
              ].map((process, index) => (
                <div key={index} className="text-center" data-testid={`process-step-${index}`}>
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{process.step}</span>
                  </div>
                  <h4 className="text-xl font-semibold text-slate-800 mb-2" data-testid={`process-title-${index}`}>
                    {process.title}
                  </h4>
                  <p className="text-gray-600" data-testid={`process-description-${index}`}>
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
