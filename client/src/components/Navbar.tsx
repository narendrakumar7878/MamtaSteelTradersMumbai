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
  FileText,
  Cylinder,
  RectangleHorizontal,
  BarChart3,
  Puzzle,
  Circle,
  Gauge
} from "lucide-react";

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
          
          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
            <Link href="/" className={`hover:text-gold-primary transition-colors flex items-center ${isActive('/') ? 'text-gold-primary' : ''}`} data-testid="link-home">
              <Home className="w-4 h-4 mr-2" />
              Home
            </Link>
            <Link href="/about" className={`hover:text-gold-primary transition-colors flex items-center ${isActive('/about') ? 'text-gold-primary' : ''}`} data-testid="link-about">
              <Info className="w-4 h-4 mr-2" />
              About
            </Link>
            
            {/* Products Dropdown with Submenus */}
            <div className="relative group">
              <button className="hover:text-gold-primary transition-colors flex items-center" data-testid="dropdown-products">
                <Settings className="w-4 h-4 mr-2" />
                Products
                <ChevronDown className="w-4 h-4 ml-2 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 bg-white text-gray-800 min-w-64 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-2 z-50">
                <div className="py-2">
                  {/* Pipes */}
                  <div className="relative group/submenu">
                    <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center justify-between">
                      <div className="flex items-center">
                        <Cylinder className="w-4 h-4 mr-3 text-navy-primary" />
                        <span className="font-semibold text-navy-primary">Pipes</span>
                      </div>
                      <ChevronDown className="w-3 h-3 -rotate-90 text-gray-400" />
                    </div>
                  </div>
                  
                  {/* Sheets */}
                  <div className="relative group/submenu">
                    <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center justify-between">
                      <div className="flex items-center">
                        <RectangleHorizontal className="w-4 h-4 mr-3 text-navy-primary" />
                        <span className="font-semibold text-navy-primary">Sheets</span>
                      </div>
                      <ChevronDown className="w-3 h-3 -rotate-90 text-gray-400" />
                    </div>
                  </div>
                  
                  {/* Bars */}
                  <div className="relative group/submenu">
                    <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center justify-between">
                      <div className="flex items-center">
                        <BarChart3 className="w-4 h-4 mr-3 text-navy-primary" />
                        <span className="font-semibold text-navy-primary">Bars</span>
                      </div>
                      <ChevronDown className="w-3 h-3 -rotate-90 text-gray-400" />
                    </div>
                  </div>
                  
                  {/* Fittings */}
                  <div className="relative group/submenu">
                    <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center justify-between">
                      <div className="flex items-center">
                        <Puzzle className="w-4 h-4 mr-3 text-navy-primary" />
                        <span className="font-semibold text-navy-primary">Fittings</span>
                      </div>
                      <ChevronDown className="w-3 h-3 -rotate-90 text-gray-400" />
                    </div>
                  </div>
                  
                  {/* Flanges */}
                  <div className="relative group/submenu">
                    <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center justify-between">
                      <div className="flex items-center">
                        <Circle className="w-4 h-4 mr-3 text-navy-primary" />
                        <span className="font-semibold text-navy-primary">Flanges</span>
                      </div>
                      <ChevronDown className="w-3 h-3 -rotate-90 text-gray-400" />
                    </div>
                  </div>
                  
                  {/* Valves */}
                  <div className="relative group/submenu">
                    <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center justify-between">
                      <div className="flex items-center">
                        <Gauge className="w-4 h-4 mr-3 text-navy-primary" />
                        <span className="font-semibold text-navy-primary">Valves</span>
                      </div>
                      <ChevronDown className="w-3 h-3 -rotate-90 text-gray-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <Link href="/technical-info" className={`hover:text-gold-primary transition-colors flex items-center ${isActive('/technical-info') ? 'text-gold-primary' : ''}`} data-testid="link-technical-info">
              <FileText className="w-4 h-4 mr-2" />
              Technical Info
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
          <div className="md:hidden animate-in slide-in-from-top duration-300" data-testid="mobile-menu">
            <div className="py-4 space-y-2 bg-navy-secondary border-t border-navy-primary">
              <Link href="/" className="flex items-center py-2 px-4 hover:text-gold-primary hover:bg-navy-primary/20 transition-all duration-200" onClick={toggleMobileMenu} data-testid="mobile-link-home">
                <Home className="w-4 h-4 mr-3" />
                Home
              </Link>
              <Link href="/about" className="flex items-center py-2 px-4 hover:text-gold-primary hover:bg-navy-primary/20 transition-all duration-200" onClick={toggleMobileMenu} data-testid="mobile-link-about">
                <Info className="w-4 h-4 mr-3" />
                About
              </Link>
              
              {/* Mobile Products Menu */}
              <div className="py-2 px-4">
                <div className="flex items-center mb-2">
                  <Settings className="w-4 h-4 mr-3" />
                  <span className="font-semibold">Products</span>
                </div>
                <div className="ml-7 space-y-2">
                  <div className="flex items-center py-1 text-sm hover:text-gold-primary">
                    <Cylinder className="w-3 h-3 mr-2" />
                    Pipes
                  </div>
                  <div className="flex items-center py-1 text-sm hover:text-gold-primary">
                    <RectangleHorizontal className="w-3 h-3 mr-2" />
                    Sheets
                  </div>
                  <div className="flex items-center py-1 text-sm hover:text-gold-primary">
                    <BarChart3 className="w-3 h-3 mr-2" />
                    Bars
                  </div>
                  <div className="flex items-center py-1 text-sm hover:text-gold-primary">
                    <Puzzle className="w-3 h-3 mr-2" />
                    Fittings
                  </div>
                  <div className="flex items-center py-1 text-sm hover:text-gold-primary">
                    <Circle className="w-3 h-3 mr-2" />
                    Flanges
                  </div>
                  <div className="flex items-center py-1 text-sm hover:text-gold-primary">
                    <Gauge className="w-3 h-3 mr-2" />
                    Valves
                  </div>
                </div>
              </div>
              
              <Link href="/technical-info" className="flex items-center py-2 px-4 hover:text-gold-primary hover:bg-navy-primary/20 transition-all duration-200" onClick={toggleMobileMenu} data-testid="mobile-link-technical-info">
                <FileText className="w-4 h-4 mr-3" />
                Technical Info
              </Link>
              <Link href="/solutions" className="flex items-center py-2 px-4 hover:text-gold-primary hover:bg-navy-primary/20 transition-all duration-200" onClick={toggleMobileMenu} data-testid="mobile-link-solutions">
                <Wrench className="w-4 h-4 mr-3" />
                Solutions
              </Link>
              <Link href="/certificate" className="flex items-center py-2 px-4 hover:text-gold-primary hover:bg-navy-primary/20 transition-all duration-200" onClick={toggleMobileMenu} data-testid="mobile-link-certificate">
                <Award className="w-4 h-4 mr-3" />
                Certificate
              </Link>
              <Link href="/contact" className="flex items-center py-2 px-4 hover:text-gold-primary hover:bg-navy-primary/20 transition-all duration-200" onClick={toggleMobileMenu} data-testid="mobile-link-contact">
                <Mail className="w-4 h-4 mr-3" />
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
