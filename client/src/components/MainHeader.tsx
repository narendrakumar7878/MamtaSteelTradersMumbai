import { Quote, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function MainHeader() {
  return (
    <div className="bg-[#1a3e72] shadow-md py-6">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Left: Company Logo */}
          <div className="flex items-center">
            <div className="w-28 h-16 bg-[#0d2b4e] rounded-lg flex items-center justify-center shadow-lg p-2" data-testid="company-logo">
              {/* Flexible logo container that supports images */}
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
                  <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
                {/* 
                Future logo implementation:
                <img src="/logo.png" alt="Mamta Steel Traders Logo" className="w-full h-full object-contain" />
                */}
              </div>
            </div>
          </div>
          
          {/* Center: Business Information */}
          <div className="text-center md:text-left flex-1 max-w-xl">
            <div className="space-y-4">
              <h2 className="text-xl lg:text-2xl font-bold text-white tracking-wide" data-testid="text-company-tagline">
                Premium Steel Solutions Provider
              </h2>
              <div className="space-y-2 text-sm lg:text-base font-medium text-gray-100">
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full" data-testid="badge-iso">
                    ISO 9001:2015 Certified
                  </span>
                  <span className="bg-[#0d2b4e] text-white px-3 py-1 rounded-full" data-testid="badge-msme">
                    MSME-MH-17-0092705
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: CTA Button and Office Time */}
          <div className="flex flex-col items-center gap-3">
            <Link href="/contact">
              <Button 
                className="bg-[#f39c12] text-white hover:scale-110 hover:shadow-2xl hover:shadow-orange-300/50 px-6 py-3 font-semibold text-lg tracking-wide transition-all duration-300 shadow-lg"
                style={{ borderRadius: '30px' }}
                data-testid="button-get-quote"
              >
                <Phone className="w-5 h-5 mr-2" />
                <Quote className="w-5 h-5 mr-2" />
                Get Instant Quote
              </Button>
            </Link>
            <div className="flex items-center text-xs text-gray-200 gap-1" data-testid="badge-office-time">
              <Clock className="w-3 h-3" />
              Office Time: 9:30am - 8:30pm
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
