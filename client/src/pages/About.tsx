import SEOHead from "@/components/SEOHead";
import { Award, Users, Factory, Globe } from "lucide-react";

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about Mamta Steel Traders - Premium Steel Solutions Provider in Mumbai. ISO 9001:2015 certified with 15+ years of experience in steel manufacturing and supply."
        keywords="about Mamta Steel Traders, steel company Mumbai, ISO certified steel manufacturer"
      />
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6" data-testid="text-about-title">
              About Mamta Steel Traders
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-about-subtitle">
              Premium Steel Solutions Provider with over 15 years of excellence in manufacturing and supplying 
              high-quality stainless steel products across India.
            </p>
          </div>

          {/* Company Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6" data-testid="text-overview-title">
                Our Story
              </h2>
              <p className="text-gray-600 mb-4" data-testid="text-overview-content">
                Established with a vision to provide premium quality steel products, Mamta Steel Traders has 
                grown to become one of Mumbai's most trusted steel manufacturers and suppliers. Our commitment 
                to quality, innovation, and customer satisfaction has made us a preferred choice for industries 
                across Maharashtra and beyond.
              </p>
              <p className="text-gray-600" data-testid="text-overview-content-2">
                With our ISO 9001:2015 certification and MSME registration, we ensure that every product 
                meets international quality standards while maintaining competitive pricing.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-800 mb-4" data-testid="text-mission-title">
                Our Mission
              </h3>
              <p className="text-gray-600" data-testid="text-mission-content">
                To be the leading provider of premium steel solutions by delivering exceptional quality products, 
                innovative solutions, and outstanding customer service while maintaining sustainable business practices.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center" data-testid="feature-quality">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">ISO Certified</h3>
              <p className="text-gray-600">ISO 9001:2015 certified quality management system</p>
            </div>
            <div className="text-center" data-testid="feature-experience">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Factory className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">15+ Years Experience</h3>
              <p className="text-gray-600">Extensive experience in steel manufacturing and supply</p>
            </div>
            <div className="text-center" data-testid="feature-clients">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">500+ Happy Clients</h3>
              <p className="text-gray-600">Trusted by industries across India</p>
            </div>
            <div className="text-center" data-testid="feature-reach">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Pan India Supply</h3>
              <p className="text-gray-600">Nationwide distribution network</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
