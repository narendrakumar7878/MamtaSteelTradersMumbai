import SEOHead from "@/components/SEOHead";
import { Settings, FileText, Zap, Shield } from "lucide-react";

const technicalSpecs = [
  {
    category: "Steel Pipes",
    icon: Settings,
    specifications: [
      {
        property: "Material Grades",
        value: "SS 304, 316, 321, 310, 904L"
      },
      {
        property: "Size Range",
        value: "1/2\" to 24\" NB (Nominal Bore)"
      },
      {
        property: "Wall Thickness",
        value: "SCH 5S to SCH XXS"
      },
      {
        property: "Length",
        value: "6 meter standard, custom lengths available"
      },
      {
        property: "Standards",
        value: "ASTM A312, ASTM A358, ASME B36.19M"
      }
    ]
  },
  {
    category: "Steel Sheets & Plates",
    icon: FileText,
    specifications: [
      {
        property: "Material Grades",
        value: "SS 304, 316L, 310, 321, Duplex 2205"
      },
      {
        property: "Thickness Range",
        value: "0.5mm to 100mm"
      },
      {
        property: "Width",
        value: "1000mm, 1219mm, 1500mm"
      },
      {
        property: "Length",
        value: "2000mm, 2438mm, 3048mm, 6096mm"
      },
      {
        property: "Surface Finish",
        value: "2B, BA, No.1, No.4, Hairline, Mirror"
      },
      {
        property: "Standards",
        value: "ASTM A240, ASME SA240, EN 10088"
      }
    ]
  },
  {
    category: "Steel Flanges",
    icon: Zap,
    specifications: [
      {
        property: "Types",
        value: "Weld Neck, Slip-on, Blind, Threaded"
      },
      {
        property: "Pressure Class",
        value: "150#, 300#, 600#, 900#, 1500#, 2500#"
      },
      {
        property: "Size Range",
        value: "1/2\" to 48\""
      },
      {
        property: "Material Grades",
        value: "SS 304, 316, 321, 347, Duplex"
      },
      {
        property: "Standards",
        value: "ASME B16.5, ASME B16.47, DIN, JIS"
      },
      {
        property: "Face Type",
        value: "Raised Face (RF), Flat Face (FF)"
      }
    ]
  }
];

const testingStandards = [
  {
    icon: Shield,
    title: "Chemical Analysis",
    description: "Complete chemical composition testing using advanced spectrometers"
  },
  {
    icon: Shield,
    title: "Mechanical Testing",
    description: "Tensile strength, yield strength, and elongation testing"
  },
  {
    icon: Shield,
    title: "Hardness Testing",
    description: "Brinell and Rockwell hardness testing as per standards"
  },
  {
    icon: Shield,
    title: "Corrosion Testing",
    description: "Intergranular corrosion and pitting resistance testing"
  }
];

export default function TechnicalInfo() {
  return (
    <>
      <SEOHead
        title="Technical Information & Specifications"
        description="Detailed technical specifications for steel pipes, sheets, plates, and flanges. Material grades, dimensions, standards, and testing procedures."
        keywords="steel specifications, material grades, ASTM standards, steel pipe dimensions, flange specifications"
      />
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-heading md:text-heading font-bold text-slate-800 mb-6" data-testid="text-technical-title">
              Technical Information & Specifications
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-technical-subtitle">
              Comprehensive technical specifications and standards for our steel products
            </p>
          </div>

          {/* Technical Specifications */}
          <div className="space-y-12 mb-16">
            {technicalSpecs.map((spec, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm"
                data-testid={`spec-section-${index}`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <spec.icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-800" data-testid={`spec-title-${index}`}>
                    {spec.category}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {spec.specifications.map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="bg-blue-50 p-4 rounded-lg"
                      data-testid={`spec-item-${index}-${itemIndex}`}
                    >
                      <h4 className="font-semibold text-slate-800 mb-2" data-testid={`spec-property-${index}-${itemIndex}`}>
                        {item.property}
                      </h4>
                      <p className="text-gray-600" data-testid={`spec-value-${index}-${itemIndex}`}>
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Testing & Quality Standards */}
          <div className="bg-blue-50 rounded-lg p-12">
            <h2 className="text-2xl font-bold text-slate-800 text-center mb-8" data-testid="text-testing-title">
              Testing & Quality Standards
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {testingStandards.map((test, index) => (
                <div key={index} className="text-center" data-testid={`testing-item-${index}`}>
                  <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <test.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-800 mb-2" data-testid={`testing-title-${index}`}>
                    {test.title}
                  </h4>
                  <p className="text-gray-600" data-testid={`testing-description-${index}`}>
                    {test.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Standards Compliance */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-8" data-testid="text-standards-title">
              Standards Compliance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white border border-gray-200 rounded-lg p-6" data-testid="standards-astm">
                <h3 className="text-xl font-bold text-slate-800 mb-2">ASTM Standards</h3>
                <p className="text-gray-600">A312, A358, A240, A479, A182</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6" data-testid="standards-asme">
                <h3 className="text-xl font-bold text-slate-800 mb-2">ASME Standards</h3>
                <p className="text-gray-600">B16.5, B16.47, B36.19M, SA240</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-lg p-6" data-testid="standards-din">
                <h3 className="text-xl font-bold text-slate-800 mb-2">DIN Standards</h3>
                <p className="text-gray-600">DIN 1.4301, DIN 1.4404, DIN 2463</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}