import { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  Home, 
  Info, 
  Settings, 
  Wrench, 
  Award, 
  Mail, 
  Menu, 
  X, 
  ChevronDown,
  Quote,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return location === path;
  };

  return (
    <nav className="bg-navy-secondary text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo (Mobile) */}
          <div className="flex items-center md:hidden">
            <div className="w-8 h-8 bg-gold-primary rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
              </svg>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`hover:text-gold-primary transition-colors flex items-center ${isActive('/') ? 'text-gold-primary' : ''}`} data-testid="link-home">
              <Home className="w-4 h-4 mr-2" />
              Home
            </Link>
            <Link href="/about" className={`hover:text-gold-primary transition-colors flex items-center ${isActive('/about') ? 'text-gold-primary' : ''}`} data-testid="link-about">
              <Info className="w-4 h-4 mr-2" />
              About
            </Link>
            
            {/* Products Dropdown */}
            <div className="relative group">
              <button className="hover:text-gold-primary transition-colors flex items-center" data-testid="dropdown-products">
                <Settings className="w-4 h-4 mr-2" />
                Products
                <ChevronDown className="w-4 h-4 ml-2" />
              </button>
              <div className="absolute top-full left-0 bg-white text-gray-800 min-w-48 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-b">
                    <span className="font-semibold text-navy-primary">Pipes</span>
                    <div className="ml-4 mt-1">
                      <Link href="/products" className="block py-1 text-sm hover:text-gold-primary" data-testid="link-steel-pipe">Steel Pipe</Link>
                      <Link href="/products" className="block py-1 text-sm hover:text-gold-primary" data-testid="link-carbon-pipe">Carbon Pipe</Link>
                    </div>
                  </div>
                  <Link href="/products" className="block px-4 py-2 hover:bg-gray-100 hover:text-gold-primary" data-testid="link-sheets">Sheets</Link>
                  <Link href="/products" className="block px-4 py-2 hover:bg-gray-100 hover:text-gold-primary" data-testid="link-flange">Flange</Link>
                </div>
              </div>
            </div>
            
            <Link href="/technical-info" className={`hover:text-gold-primary transition-colors flex items-center ${isActive('/technical-info') ? 'text-gold-primary' : ''}`} data-testid="link-technical-info">
              <FileText className="w-4 h-4 mr-2" />
              TechnicalInfo
            </Link>
            
            <Link href="/solutions" className={`hover:text-gold-primary transition-colors flex items-center ${isActive('/solutions') ? 'text-gold-primary' : ''}`} data-testid="link-solutions">
              <Wrench className="w-4 h-4 mr-2" />
              Solutions
            </Link>
            <Link href="/certificate" className={`hover:text-gold-primary transition-colors flex items-center ${isActive('/certificate') ? 'text-gold-primary' : ''}`} data-testid="link-certificate">
              <Award className="w-4 h-4 mr-2" />
              Certificate
            </Link>
            <Link href="/contact" className={`hover:text-gold-primary transition-colors flex items-center ${isActive('/contact') ? 'text-gold-primary' : ''}`} data-testid="link-contact">
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Link>
          </div>
          
          {/* CTA Button (Desktop) */}
          <div className="hidden md:block">
            <Button 
              className="bg-gold-primary hover:bg-gold-hover text-white px-4 py-2 rounded-lg font-medium transition-all duration-300"
              data-testid="button-get-quote-nav"
            >
              <Quote className="w-4 h-4 mr-2" />
              Get Quote
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white" 
            onClick={toggleMobileMenu}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden" data-testid="mobile-menu">
            <div className="py-4 space-y-2">
              <Link href="/" className="block py-2 hover:text-gold-primary" onClick={toggleMobileMenu} data-testid="mobile-link-home">Home</Link>
              <Link href="/about" className="block py-2 hover:text-gold-primary" onClick={toggleMobileMenu} data-testid="mobile-link-about">About</Link>
              <div className="py-2">
                <span className="font-semibold">Products</span>
                <div className="ml-4 mt-2 space-y-1">
                  <Link href="/products" className="block py-1 text-sm hover:text-gold-primary" onClick={toggleMobileMenu} data-testid="mobile-link-steel-pipe">Steel Pipe</Link>
                  <Link href="/products" className="block py-1 text-sm hover:text-gold-primary" onClick={toggleMobileMenu} data-testid="mobile-link-carbon-pipe">Carbon Pipe</Link>
                  <Link href="/products" className="block py-1 text-sm hover:text-gold-primary" onClick={toggleMobileMenu} data-testid="mobile-link-sheets">Sheets</Link>
                  <Link href="/products" className="block py-1 text-sm hover:text-gold-primary" onClick={toggleMobileMenu} data-testid="mobile-link-flange">Flange</Link>
                </div>
              </div>
              <Link href="/technical-info" className="block py-2 hover:text-gold-primary" onClick={toggleMobileMenu} data-testid="mobile-link-technical-info">TechnicalInfo</Link>
              <Link href="/solutions" className="block py-2 hover:text-gold-primary" onClick={toggleMobileMenu} data-testid="mobile-link-solutions">Solutions</Link>
              <Link href="/certificate" className="block py-2 hover:text-gold-primary" onClick={toggleMobileMenu} data-testid="mobile-link-certificate">Certificate</Link>
              <Link href="/contact" className="block py-2 hover:text-gold-primary" onClick={toggleMobileMenu} data-testid="mobile-link-contact">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
