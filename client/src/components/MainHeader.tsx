import { Quote, Phone, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function MainHeader() {
  return (
    <div className="bg-[#1a3e72] shadow-md py-3 sm:py-4 lg:py-6">
      <div className="container mx-auto px-2 sm:px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3 sm:gap-4 lg:gap-6">
          {/* Left: Company Logo */}
          <div className="flex items-center">
            <div className="w-20 h-12 sm:w-24 sm:h-14 lg:w-28 lg:h-16 bg-[#0d2b4e] rounded-lg flex items-center justify-center shadow-lg p-1 sm:p-2" data-testid="company-logo">
              {/* Flexible logo container that supports images */}
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
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
          <div className="text-center lg:text-left flex-1 max-w-xl">
            <div className="space-y-2 sm:space-y-3 lg:space-y-4">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white tracking-wide" data-testid="text-company-tagline">
                Premium Steel Solutions Provider
              </h2>
              <div className="space-y-2 text-xs sm:text-sm lg:text-base font-medium text-gray-100">
                <div className="flex flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-3">
                  <span className="bg-green-100 text-green-800 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm" data-testid="badge-iso">
                    ISO 9001:2015
                  </span>
                  <span className="bg-[#0d2b4e] text-white px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm" data-testid="badge-msme">
                    <span className="hidden sm:inline">MSME-MH-17-0092705</span>
                    <span className="sm:hidden">MSME Certified</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right: CTA Button and Office Time */}
          <div className="flex flex-col items-center gap-2 sm:gap-3">
            <Link href="/contact">
              <Button 
                className="bg-[#f39c12] text-white hover:scale-105 lg:hover:scale-110 hover:shadow-xl lg:hover:shadow-2xl hover:shadow-orange-300/50 px-4 py-2 sm:px-5 sm:py-2.5 lg:px-6 lg:py-3 font-semibold text-sm sm:text-base lg:text-lg tracking-wide transition-all duration-300 shadow-lg"
                style={{ borderRadius: '30px' }}
                data-testid="button-contact"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                Contact
              </Button>
            </Link>
            <div className="flex items-center text-[10px] sm:text-xs text-gray-200 gap-1" data-testid="badge-office-time">
              <Clock className="w-3 h-3" />
              <span className="hidden sm:inline">Office Time: 9:30am - 8:30pm</span>
              <span className="sm:hidden">9:30am - 8:30pm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
