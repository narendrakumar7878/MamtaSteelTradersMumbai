import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function MainHeader() {
  return (
    <div className="bg-white shadow-md py-6">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: Company Logo */}
          <div className="flex items-center">
            <div className="w-20 h-20 bg-navy-primary rounded-lg flex items-center justify-center shadow-lg" data-testid="company-logo">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
              </svg>
            </div>
          </div>
          
          {/* Center: Business Information */}
          <div className="text-center flex-1 max-w-xl">
            <div className="space-y-3">
              <h2 className="text-xl lg:text-2xl font-bold text-navy-primary tracking-wide" data-testid="text-company-tagline">
                Premium Steel Solutions Provider
              </h2>
              <div className="space-y-2 text-sm lg:text-base font-medium text-gray-700">
                <div className="flex flex-wrap justify-center items-center gap-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full" data-testid="badge-iso">
                    ISO 9001:2015 Certified
                  </span>
                  <span className="bg-navy-primary/10 text-navy-primary px-3 py-1 rounded-full" data-testid="badge-msme">
                    MSME-MH-17-0092705
                  </span>
                </div>
                <div className="bg-gold-primary/10 text-gold-primary px-4 py-2 rounded-full inline-block font-semibold" data-testid="badge-office-time">
                  Office Time: 9:30am - 8:30pm
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: CTA Button */}
          <div className="flex items-center">
            <Button 
              className="bg-gold-primary hover:bg-gold-hover text-white px-8 py-4 rounded-lg font-semibold text-lg tracking-wide transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              data-testid="button-get-quote"
            >
              <Quote className="w-5 h-5 mr-3" />
              Get Instant Quote
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
