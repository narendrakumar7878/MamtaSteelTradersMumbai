import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MainHeader() {
  return (
    <div className="bg-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mr-4" data-testid="company-logo">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
          
          {/* Center Taglines */}
          <div className="text-center flex-1 max-w-2xl mx-8">
            <h1 className="text-2xl font-bold text-slate-800 mb-1" data-testid="text-company-title">
              Mamta Steel Traders - Leading Steel Products Manufacturer in Mumbai
            </h1>
            <p className="text-lg text-gray-600 mb-2" data-testid="text-company-subtitle">
              Premium Steel Solutions Provider
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full flex items-center" data-testid="badge-iso">
                ISO 9001:2015 Certified
              </span>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full flex items-center" data-testid="badge-msme">
                MSME-MH-17-0092705
              </span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full flex items-center" data-testid="badge-office-time">
                Office Time: 9:30am - 8:30pm
              </span>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex items-center">
            <Button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              data-testid="button-get-quote"
            >
              <Quote className="w-4 h-4 mr-2" />
              Get Instant Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
