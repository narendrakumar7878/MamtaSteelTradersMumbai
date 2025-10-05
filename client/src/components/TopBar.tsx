import { Mail, Phone, MapPin, Building } from "lucide-react";

export default function TopBar() {
  const handlePhoneClick = (phone: string) => {
    if (window.innerWidth <= 768) {
      window.location.href = `tel:${phone}`;
    } else {
      navigator.clipboard.writeText(phone);
    }
  };

  return (
    <div className="bg-navy-primary text-white py-2 text-xs sm:text-sm">
      <div className="w-full max-w-full mx-auto px-2 sm:px-3 lg:px-4 xl:px-6">
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-center gap-2">
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center gap-2 sm:gap-4 lg:gap-6 w-full sm:w-auto justify-center sm:justify-start">
            <span className="flex items-center" data-testid="company-name">
              <Building className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Mamta Steel Traders</span>
              <span className="sm:hidden">MST</span>
            </span>
            <span className="flex items-center text-center sm:text-left" data-testid="company-address">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden md:inline">Mumbai Maharashtra, 400004</span>
              <span className="md:hidden">Mumbai, 400004</span>
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-center gap-2 sm:gap-4 lg:gap-6 w-full sm:w-auto justify-center sm:justify-end">
            <a 
              href="mailto:mamtasteeltraders@gmail.com" 
              className="flex items-center hover:text-gold-primary transition-colors"
              data-testid="link-email"
            >
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden lg:inline">mamtasteeltraders@gmail.com</span>
              <span className="lg:hidden">Email Us</span>
            </a>
            <button 
              onClick={() => handlePhoneClick("+919819322576")}
              className="flex items-center hover:text-gold-primary transition-colors cursor-pointer"
              data-testid="button-phone"
            >
              <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              +91 9819322576
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
