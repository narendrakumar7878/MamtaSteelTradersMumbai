import SEOHead from "@/components/SEOHead";
import { Award, CheckCircle, FileText, Globe } from "lucide-react";

const certifications = [
  {
    title: "ISO 9001:2015",
    description: "Quality Management System certification ensuring consistent quality in all our processes and products.",
    icon: Award,
    status: "Certified"
  },
  {
    title: "MSME Registration",
    description: "Government of India MSME registration number: MSME-MH-17-0092705",
    icon: FileText,
    status: "Registered"
  },
  {
    title: "GST Compliance",
    description: "Goods and Services Tax registration: 27DMIPR2047R1Z8",
    icon: CheckCircle,
    status: "Compliant"
  },
  {
    title: "Quality Assurance",
    description: "Adherence to international quality standards and industry best practices.",
    icon: Globe,
    status: "Verified"
  }
];

export default function Certificate() {
  return (
    <>
      <SEOHead
        title="Certificates & Quality Standards"
        description="View our ISO 9001:2015 certification, MSME registration, and quality compliance certificates. Mamta Steel Traders maintains highest quality standards."
        keywords="ISO 9001:2015 certificate, MSME registration, quality certification, steel quality standards"
      />
      
      <div className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6">
          {/* Hero Section */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-2xl sm:text-2xl lg:text-heading font-bold text-slate-800 mb-4 sm:mb-6" data-testid="text-certificate-title">
              Certificates & Quality Standards
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4" data-testid="text-certificate-subtitle">
              Our commitment to quality is backed by internationally recognized certifications and compliance standards
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 lg:p-8 hover:shadow-lg transition-shadow duration-300 min-h-[180px] sm:min-h-0"
                data-testid={`certificate-card-${index}`}
              >
                <div className="flex items-start sm:items-center mb-4 sm:mb-6">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <cert.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-800" data-testid={`certificate-title-${index}`}>
                      {cert.title}
                    </h3>
                    <span className="text-sm sm:text-base text-green-600 font-medium" data-testid={`certificate-status-${index}`}>
                      {cert.status}
                    </span>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-600" data-testid={`certificate-description-${index}`}>
                  {cert.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quality Commitment */}
          <div className="bg-blue-50 rounded-lg p-6 sm:p-8 lg:p-12">
            <div className="text-center mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl lg:text-2xl font-bold text-slate-800 mb-3 sm:mb-4" data-testid="text-quality-title">
                Our Quality Commitment
              </h2>
              <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4" data-testid="text-quality-description">
                We are committed to delivering products that meet the highest international standards while 
                maintaining competitive pricing and excellent customer service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center" data-testid="quality-feature-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-slate-800 mb-2">100% Quality Tested</h4>
                <p className="text-sm sm:text-base text-gray-600">Every product undergoes rigorous quality testing</p>
              </div>
              <div className="text-center" data-testid="quality-feature-2">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Award className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-slate-800 mb-2">International Standards</h4>
                <p className="text-sm sm:text-base text-gray-600">Compliance with global quality benchmarks</p>
              </div>
              <div className="text-center" data-testid="quality-feature-3">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-slate-800 mb-2">Continuous Improvement</h4>
                <p className="text-sm sm:text-base text-gray-600">Regular audits and process optimization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
