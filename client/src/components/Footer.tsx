import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-slate-700 text-white" data-testid="footer">
      <div className="container mx-auto max-w-7xl px-6 lg:px-12 py-12">
        {/* Main Footer Content - Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 justify-items-center text-center lg:text-left lg:justify-items-start">
          
          {/* Company Info Section */}
          <div className="lg:col-span-1 group">
            <h3 className="text-orange-400 text-lg font-semibold mb-4 transform transition-all duration-300 group-hover:translate-x-1">
              MAMTA STEEL TRADERS
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 transition-colors duration-300 group-hover:text-gray-200">
              Experience and knowledge of International industrial 
              systems, dedicated to provide the best economical 
              solutions to our valued customers. We Won Many 
              Factory Awards and Certified.
            </p>
            
            {/* Social Media Icons */}
            <div>
              <p className="text-gray-300 text-sm mb-3 transition-colors duration-300 group-hover:text-gray-200">Follow us:</p>
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 hover:scale-110 transform transition-all duration-300 hover:rotate-3"
                  data-testid="social-facebook"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-sky-400 hover:scale-110 transform transition-all duration-300 hover:rotate-3"
                  data-testid="social-twitter"
                  aria-label="Follow us on Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 hover:scale-110 transform transition-all duration-300 hover:rotate-3"
                  data-testid="social-instagram"
                  aria-label="Follow us on Instagram"
                >
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 hover:scale-110 transform transition-all duration-300 hover:rotate-3"
                  data-testid="social-linkedin"
                  aria-label="Follow us on LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="group">
            <h3 className="text-orange-400 text-lg font-semibold mb-4 transform transition-all duration-300 group-hover:translate-x-1">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li className="transform transition-all duration-200 hover:translate-x-2">
                <Link href="/" className="text-gray-300 text-sm hover:text-white hover:text-orange-300 transition-colors duration-200 relative before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-orange-400 before:transition-all before:duration-300 hover:before:w-full">
                  Home
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-2">
                <Link href="/products" className="text-gray-300 text-sm hover:text-white hover:text-orange-300 transition-colors duration-200 relative before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-orange-400 before:transition-all before:duration-300 hover:before:w-full">
                  Products
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-2">
                <Link href="/about" className="text-gray-300 text-sm hover:text-white hover:text-orange-300 transition-colors duration-200 relative before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-orange-400 before:transition-all before:duration-300 hover:before:w-full">
                  About
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-2">
                <Link href="/technical-info" className="text-gray-300 text-sm hover:text-white hover:text-orange-300 transition-colors duration-200 relative before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-orange-400 before:transition-all before:duration-300 hover:before:w-full">
                  Quality
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-2">
                <Link href="/solutions" className="text-gray-300 text-sm hover:text-white hover:text-orange-300 transition-colors duration-200 relative before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-orange-400 before:transition-all before:duration-300 hover:before:w-full">
                  Content
                </Link>
              </li>
              <li className="transform transition-all duration-200 hover:translate-x-2">
                <Link href="/contact" className="text-gray-300 text-sm hover:text-white hover:text-orange-300 transition-colors duration-200 relative before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-0 before:bg-orange-400 before:transition-all before:duration-300 hover:before:w-full">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="group">
            <h3 className="text-orange-400 text-lg font-semibold mb-4 transform transition-all duration-300 group-hover:translate-x-1">
              Contact Info
            </h3>
            <div className="space-y-3">
              <div className="transform transition-all duration-200 hover:translate-x-1">
                <p className="text-white text-sm font-medium mb-1 transition-colors duration-300 hover:text-orange-300">Prakash Pramar</p>
                <a 
                  href="tel:+919619342876" 
                  className="text-blue-400 text-sm hover:text-blue-300 hover:underline transition-all duration-200 transform hover:scale-105"
                  data-testid="contact-phone-1"
                >
                  +91 9619342876
                </a>
              </div>
              <div className="transform transition-all duration-200 hover:translate-x-1">
                <a 
                  href="tel:+919867059210" 
                  className="text-blue-400 text-sm hover:text-blue-300 hover:underline transition-all duration-200 transform hover:scale-105"
                  data-testid="contact-phone-2"
                >
                  +91 9867059210
                </a>
              </div>
              <div className="transform transition-all duration-200 hover:translate-x-1">
                <a 
                  href="mailto:mamtasteeltraders@gmail.com" 
                  className="text-blue-400 text-sm hover:text-blue-300 hover:underline transition-all duration-200 transform hover:scale-105"
                  data-testid="contact-email"
                >
                  mamtasteeltraders@gmail.com
                </a>
              </div>
              <div className="pt-2 transform transition-all duration-200 hover:translate-x-1">
                <p className="text-gray-300 text-sm transition-colors duration-300 hover:text-orange-300">GST: 27DMIPR2047R1Z8</p>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className="group">
            <h3 className="text-orange-400 text-lg font-semibold mb-4 transform transition-all duration-300 group-hover:translate-x-1">
              Our Location
            </h3>
            <address className="text-gray-300 text-sm leading-relaxed not-italic transition-all duration-300 group-hover:text-gray-200 transform group-hover:translate-x-1">
              Office No. 20, 1st Floor<br />
              4549 Gulab Mohammad Building<br />
              Rangi Gali, 2nd Kumbharwada<br />
              Mumbai 400004<br />
              Maharashtra, India
            </address>
          </div>
        </div>

        {/* Animated Divider Line */}
        <div className="footer-divider" style={{paddingTop: "1px"}}></div>

        {/* Bottom Footer - Centered Layout */}
        <div className="text-center space-y-6">
          {/* Copyright Text - Centered */}
          <div className="text-gray-400 text-sm transition-colors duration-300 hover:text-gray-300">
            © 2019-2025 Mamta Steel Traders. All rights Reserved. Developed by{" "}
            <span className="text-white font-medium hover:text-orange-300 transition-colors duration-300 cursor-pointer">Narendra Kumar</span>
          </div>
          
          {/* Bottom Social Icons - Below divider, Centered */}
          <div className="flex justify-center space-x-8">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 social-bounce transform transition-all duration-300 hover:shadow-lg rounded-full p-2 hover:bg-blue-500/10"
              data-testid="bottom-social-linkedin"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-400 social-bounce transform transition-all duration-300 hover:shadow-lg rounded-full p-2 hover:bg-pink-400/10"
              data-testid="bottom-social-instagram"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white social-bounce transform transition-all duration-300 hover:shadow-lg rounded-full p-2 hover:bg-white/10"
              data-testid="bottom-social-github"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}