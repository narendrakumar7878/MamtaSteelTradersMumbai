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
    <div className="bg-navy-primary text-white py-2 text-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex flex-wrap items-center space-x-6">
            <span className="flex items-center" data-testid="company-name">
              <Building className="w-4 h-4 mr-2" />
              Mamta Steel Traders
            </span>
            <span className="flex items-center" data-testid="company-address">
              <MapPin className="w-4 h-4 mr-2" />
              Mumbai Maharashtra, 400004
            </span>
          </div>
          <div className="flex flex-wrap items-center space-x-6">
            <a 
              href="mailto:mamtasteeltraders@gmail.com" 
              className="flex items-center hover:text-gold-primary transition-colors"
              data-testid="link-email"
            >
              <Mail className="w-4 h-4 mr-2" />
              mamtasteeltraders@gmail.com
            </a>
            <button 
              onClick={() => handlePhoneClick("+919819322576")}
              className="flex items-center hover:text-gold-primary transition-colors cursor-pointer"
              data-testid="button-phone"
            >
              <Phone className="w-4 h-4 mr-2" />
              +91 9819322576
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
