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
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6" data-testid="text-certificate-title">
              Certificates & Quality Standards
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-certificate-subtitle">
              Our commitment to quality is backed by internationally recognized certifications and compliance standards
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
                data-testid={`certificate-card-${index}`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <cert.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-800" data-testid={`certificate-title-${index}`}>
                      {cert.title}
                    </h3>
                    <span className="text-green-600 font-medium" data-testid={`certificate-status-${index}`}>
                      {cert.status}
                    </span>
                  </div>
                </div>
                <p className="text-gray-600" data-testid={`certificate-description-${index}`}>
                  {cert.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quality Commitment */}
          <div className="bg-blue-50 rounded-lg p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-slate-800 mb-4" data-testid="text-quality-title">
                Our Quality Commitment
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto" data-testid="text-quality-description">
                We are committed to delivering products that meet the highest international standards while 
                maintaining competitive pricing and excellent customer service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center" data-testid="quality-feature-1">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-2">100% Quality Tested</h4>
                <p className="text-gray-600">Every product undergoes rigorous quality testing</p>
              </div>
              <div className="text-center" data-testid="quality-feature-2">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-2">International Standards</h4>
                <p className="text-gray-600">Compliance with global quality benchmarks</p>
              </div>
              <div className="text-center" data-testid="quality-feature-3">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-slate-800 mb-2">Continuous Improvement</h4>
                <p className="text-gray-600">Regular audits and process optimization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
