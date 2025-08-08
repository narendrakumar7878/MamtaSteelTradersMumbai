import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-slate-700 text-white" data-testid="footer">
      <div className="container mx-auto max-w-7xl px-6 lg:px-12 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info Section */}
          <div className="lg:col-span-1">
            <h3 className="text-orange-400 text-lg font-semibold mb-4">
              MAMTA STEEL TRADERS
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Experience and knowledge of International industrial 
              systems, dedicated to provide the best economical 
              solutions to our valued customers. We Won Many 
              Factory Awards and Certified.
            </p>
            
            {/* Social Media Icons */}
            <div>
              <p className="text-gray-300 text-sm mb-3">Follow us:</p>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  data-testid="social-facebook"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  data-testid="social-twitter"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  data-testid="social-instagram"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  data-testid="social-linkedin"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-orange-400 text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 text-sm hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-300 text-sm hover:text-white transition-colors duration-200">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 text-sm hover:text-white transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/technical-info" className="text-gray-300 text-sm hover:text-white transition-colors duration-200">
                  Quality
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="text-gray-300 text-sm hover:text-white transition-colors duration-200">
                  Content
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 text-sm hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-orange-400 text-lg font-semibold mb-4">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div>
                <p className="text-white text-sm font-medium mb-1">Prakash Pramar</p>
                <a 
                  href="tel:+919619342876" 
                  className="text-blue-400 text-sm hover:text-blue-300 transition-colors duration-200"
                  data-testid="contact-phone-1"
                >
                  +91 9619342876
                </a>
              </div>
              <div>
                <a 
                  href="tel:+919867059210" 
                  className="text-blue-400 text-sm hover:text-blue-300 transition-colors duration-200"
                  data-testid="contact-phone-2"
                >
                  +91 9867059210
                </a>
              </div>
              <div>
                <a 
                  href="mailto:mamtasteeltraders@gmail.com" 
                  className="text-blue-400 text-sm hover:text-blue-300 transition-colors duration-200"
                  data-testid="contact-email"
                >
                  mamtasteeltraders@gmail.com
                </a>
              </div>
              <div className="pt-2">
                <p className="text-gray-300 text-sm">GST: 27DMIPR2047R1Z8</p>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div>
            <h3 className="text-orange-400 text-lg font-semibold mb-4">
              Our Location
            </h3>
            <address className="text-gray-300 text-sm leading-relaxed not-italic">
              Office No. 20, 1st Floor<br />
              4549 Gulab Mohammad Building<br />
              Rangi Gali, 2nd Kumbharwada<br />
              Mumbai 400004<br />
              Maharashtra, India
            </address>
          </div>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-gray-600 my-8" />

        {/* Bottom Footer */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="text-gray-400 text-sm">
            © 2019-2025 Mamta Steel Traders. All rights Reserved. Developed by{" "}
            <span className="text-white font-medium">Narendra Kumar</span>
          </div>
          
          {/* Bottom Social Icons */}
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              data-testid="bottom-social-linkedin"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              data-testid="bottom-social-instagram"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              data-testid="bottom-social-github"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}