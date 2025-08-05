import { Facebook, Twitter, Instagram, Linkedin, Github, Phone, Mail, FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12" data-testid="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-orange-400" data-testid="text-company-footer-title">
              MAMTA STEEL TRADERS
            </h3>
            <p className="text-gray-300 mb-4" data-testid="text-company-description">
              Experience and knowledge of International industrial systems, dedicated to provide the best economical 
              solutions to our valued customers. We Won Many Factory Awards and Certified.
            </p>
            <p className="text-gray-300 mb-4">Follow us:</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors" data-testid="link-facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors" data-testid="link-twitter">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors" data-testid="link-instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors" data-testid="link-linkedin">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400" data-testid="text-quick-links-title">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-link-home">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-link-products">Products</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-link-about">About</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-link-quality">Quality</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-link-content">Content</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors" data-testid="footer-link-contact">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-orange-400" data-testid="text-contact-info-title">
              Contact Info
            </h4>
            <div className="space-y-3">
              <p className="text-gray-300 font-semibold" data-testid="text-contact-person">Prakash Pramar</p>
              <a 
                href="tel:+919819322576" 
                className="text-gray-300 hover:text-orange-500 transition-colors flex items-center"
                data-testid="footer-link-phone-1"
              >
                <Phone className="w-4 h-4 mr-2" />
                +91 98193 22576
              </a>
              <a 
                href="tel:+919867995210" 
                className="text-gray-300 hover:text-orange-500 transition-colors flex items-center"
                data-testid="footer-link-phone-2"
              >
                <Phone className="w-4 h-4 mr-2" />
                +91 98679 95210
              </a>
              <a 
                href="mailto:mamtasteeltraders@gmail.com" 
                className="text-gray-300 hover:text-orange-500 transition-colors flex items-center"
                data-testid="footer-link-email"
              >
                <Mail className="w-4 h-4 mr-2" />
                mamtasteeltraders@gmail.com
              </a>
              <p className="text-gray-300 flex items-center" data-testid="text-gst-number">
                <FileText className="w-4 h-4 mr-2" />
                GST: 27DMIPR2047R1Z8
              </p>
            </div>
          </div>
        </div>
        
        {/* Our Location */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-400" data-testid="text-location-title">
                Our Location
              </h4>
              <div className="text-gray-300">
                <p data-testid="text-office-address">Office No. 20, 1st Floor</p>
                <p data-testid="text-building-address">45/49 Gulab Mohammad Building</p>
                <p data-testid="text-area-address">Rana Gali, 2nd Kumbharwada</p>
                <p data-testid="text-city-address">Mumbai 400004</p>
                <p data-testid="text-state-address">Maharashtra, India</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0" data-testid="text-copyright">
              © 2019-2025 Mamta Steel Traders. All rights Reserved. Developed by Narendra Kumar
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors" data-testid="footer-bottom-linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors" data-testid="footer-bottom-instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors" data-testid="footer-bottom-github">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
