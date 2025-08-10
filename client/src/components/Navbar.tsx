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
  Gauge,
  BookOpen,
  TestTube,
  Layers,
  TrendingUp,
  Zap
} from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileTechnicalInfoOpen, setMobileTechnicalInfoOpen] = useState(false);
  const [mobileSubmenus, setMobileSubmenus] = useState({
    pipes: false,
    sheets: false,
    bars: false,
    fittings: false,
    flanges: false,
    valves: false
  });
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Reset all submenu states when closing mobile menu
    if (isMobileMenuOpen) {
      setMobileProductsOpen(false);
      setMobileTechnicalInfoOpen(false);
      setMobileSubmenus({
        pipes: false,
        sheets: false,
        bars: false,
        fittings: false,
        flanges: false,
        valves: false
      });
    }
  };

  const toggleMobileProducts = () => {
    setMobileProductsOpen(!mobileProductsOpen);
    // Close all submenus when toggling main products menu
    setMobileSubmenus({
      pipes: false,
      sheets: false,
      bars: false,
      fittings: false,
      flanges: false,
      valves: false
    });
  };

  const toggleMobileSubmenu = (submenu: keyof typeof mobileSubmenus) => {
    setMobileSubmenus(prev => ({
      ...prev,
      [submenu]: !prev[submenu]
    }));
  };

  const toggleMobileTechnicalInfo = () => {
    setMobileTechnicalInfoOpen(!mobileTechnicalInfoOpen);
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
                    <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center justify-between" data-testid="submenu-pipes">
                      <div className="flex items-center">
                        <Cylinder className="w-4 h-4 mr-3 text-navy-primary" />
                        <span className="font-semibold text-navy-primary">Pipes</span>
                      </div>
                      <ChevronDown className="w-3 h-3 -rotate-90 text-gray-400 group-hover/submenu:rotate-0 transition-transform duration-200" />
                    </div>
                    {/* Pipes Submenu */}
                    <div className="absolute left-full top-0 bg-white min-w-48 rounded-lg shadow-xl opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 transform translate-x-2 group-hover/submenu:translate-x-4 z-60 ml-2">
                      <div className="py-2">
                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700 hover:text-navy-primary transition-colors" data-testid="link-steel-pipes">
                          Steel Pipes
                        </div>
                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700 hover:text-navy-primary transition-colors" data-testid="link-carbon-pipes">
                          Carbon Pipes
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Sheets */}
                  <div className="relative group/submenu">
                    <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center justify-between" data-testid="submenu-sheets">
                      <div className="flex items-center">
                        <RectangleHorizontal className="w-4 h-4 mr-3 text-navy-primary" />
                        <span className="font-semibold text-navy-primary">Sheets</span>
                      </div>
                      <ChevronDown className="w-3 h-3 -rotate-90 text-gray-400 group-hover/submenu:rotate-0 transition-transform duration-200" />
                    </div>
                    {/* Sheets Submenu */}
                    <div className="absolute left-full top-0 bg-white min-w-48 rounded-lg shadow-xl opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 transform translate-x-2 group-hover/submenu:translate-x-4 z-60 ml-2">
                      <div className="py-2">
                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700 hover:text-navy-primary transition-colors" data-testid="link-steel-sheets">
                          Steel Sheets
                        </div>
                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700 hover:text-navy-primary transition-colors" data-testid="link-carbon-sheets">
                          Carbon Sheets
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bars */}
                  <div className="relative group/submenu">
                    <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center justify-between" data-testid="submenu-bars">
                      <div className="flex items-center">
                        <BarChart3 className="w-4 h-4 mr-3 text-navy-primary" />
                        <span className="font-semibold text-navy-primary">Bars</span>
                      </div>
                      <ChevronDown className="w-3 h-3 -rotate-90 text-gray-400 group-hover/submenu:rotate-0 transition-transform duration-200" />
                    </div>
                    {/* Bars Submenu */}
                    <div className="absolute left-full top-0 bg-white min-w-48 rounded-lg shadow-xl opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 transform translate-x-2 group-hover/submenu:translate-x-4 z-60 ml-2">
                      <div className="py-2">
                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700 hover:text-navy-primary transition-colors" data-testid="link-bars-placeholder">
                          Add bars items here
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Fittings */}
                  <div className="relative group/submenu">
                    <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center justify-between" data-testid="submenu-fittings">
                      <div className="flex items-center">
                        <Puzzle className="w-4 h-4 mr-3 text-navy-primary" />
                        <span className="font-semibold text-navy-primary">Fittings</span>
                      </div>
                      <ChevronDown className="w-3 h-3 -rotate-90 text-gray-400 group-hover/submenu:rotate-0 transition-transform duration-200" />
                    </div>
                    {/* Fittings Submenu */}
                    <div className="absolute left-full top-0 bg-white min-w-48 rounded-lg shadow-xl opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 transform translate-x-2 group-hover/submenu:translate-x-4 z-60 ml-2">
                      <div className="py-2">
                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700 hover:text-navy-primary transition-colors" data-testid="link-fittings-placeholder">
                          Add fittings items here
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Flanges */}
                  <div className="relative group/submenu">
                    <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center justify-between" data-testid="submenu-flanges">
                      <div className="flex items-center">
                        <Circle className="w-4 h-4 mr-3 text-navy-primary" />
                        <span className="font-semibold text-navy-primary">Flanges</span>
                      </div>
                      <ChevronDown className="w-3 h-3 -rotate-90 text-gray-400 group-hover/submenu:rotate-0 transition-transform duration-200" />
                    </div>
                    {/* Flanges Submenu */}
                    <div className="absolute left-full top-0 bg-white min-w-48 rounded-lg shadow-xl opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 transform translate-x-2 group-hover/submenu:translate-x-4 z-60 ml-2">
                      <div className="py-2">
                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700 hover:text-navy-primary transition-colors" data-testid="link-flanges-placeholder">
                          Add flanges items here
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Valves */}
                  <div className="relative group/submenu">
                    <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center justify-between" data-testid="submenu-valves">
                      <div className="flex items-center">
                        <Gauge className="w-4 h-4 mr-3 text-navy-primary" />
                        <span className="font-semibold text-navy-primary">Valves</span>
                      </div>
                      <ChevronDown className="w-3 h-3 -rotate-90 text-gray-400 group-hover/submenu:rotate-0 transition-transform duration-200" />
                    </div>
                    {/* Valves Submenu */}
                    <div className="absolute left-full top-0 bg-white min-w-48 rounded-lg shadow-xl opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-300 transform translate-x-2 group-hover/submenu:translate-x-4 z-60 ml-2">
                      <div className="py-2">
                        <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700 hover:text-navy-primary transition-colors" data-testid="link-valves-placeholder">
                          Add valves items here
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Technical Info Dropdown */}
            <div className="relative group">
              <button className="hover:text-gold-primary transition-colors flex items-center" data-testid="dropdown-technical-info">
                <FileText className="w-4 h-4 mr-2" />
                Technical Info
                <ChevronDown className="w-4 h-4 ml-2 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 bg-white text-gray-800 min-w-80 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-2 z-50">
                <div className="py-2">
                  <Link href="/technical-information" className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center transition-colors duration-200" data-testid="link-technical-information">
                    <BookOpen className="w-4 h-4 mr-3 text-navy-primary" />
                    <span className="font-semibold text-navy-primary">Technical Information</span>
                  </Link>
                  
                  <Link href="/chemical-composition" className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center transition-colors duration-200" data-testid="link-chemical-composition">
                    <TestTube className="w-4 h-4 mr-3 text-navy-primary" />
                    <span className="font-semibold text-navy-primary">Chemical Composition</span>
                  </Link>
                  
                  <Link href="/ss300-and-200-series-chemical-composition" className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center transition-colors duration-200" data-testid="link-ss300-200-series">
                    <Layers className="w-4 h-4 mr-3 text-navy-primary" />
                    <span className="font-semibold text-navy-primary">SS 300 & 200 Series Chemical Composition</span>
                  </Link>
                  
                  <Link href="/stainless-steel-pipe-specification" className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center transition-colors duration-200" data-testid="link-stainless-pipe-spec">
                    <Cylinder className="w-4 h-4 mr-3 text-navy-primary" />
                    <span className="font-semibold text-navy-primary">Stainless Steel Pipe Specification</span>
                  </Link>
                  
                  <Link href="/carbon-and-alloy-pipe-specifications" className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center transition-colors duration-200" data-testid="link-carbon-alloy-pipe-spec">
                    <TrendingUp className="w-4 h-4 mr-3 text-navy-primary" />
                    <span className="font-semibold text-navy-primary">Carbon & Alloy Pipe Specifications</span>
                  </Link>
                </div>
              </div>
            </div>
            
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
                <div className="flex items-center justify-between cursor-pointer" onClick={toggleMobileProducts} data-testid="mobile-dropdown-products">
                  <div className="flex items-center">
                    <Settings className="w-4 h-4 mr-3" />
                    <span className="font-semibold">Products</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                </div>
                {mobileProductsOpen && (
                  <div className="ml-7 mt-2 space-y-1 animate-in slide-in-from-top duration-200">
                    {/* Mobile Pipes Submenu */}
                    <div>
                      <div className="flex items-center justify-between py-2 cursor-pointer" onClick={() => toggleMobileSubmenu('pipes')} data-testid="mobile-submenu-pipes">
                        <div className="flex items-center text-sm hover:text-gold-primary">
                          <Cylinder className="w-3 h-3 mr-2" />
                          Pipes
                        </div>
                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${mobileSubmenus.pipes ? 'rotate-180' : ''}`} />
                      </div>
                      {mobileSubmenus.pipes && (
                        <div className="ml-5 space-y-1 animate-in slide-in-from-top duration-200">
                          <div className="py-1 text-xs text-gray-600 hover:text-navy-primary cursor-pointer" data-testid="mobile-link-steel-pipes">
                            Steel Pipes
                          </div>
                          <div className="py-1 text-xs text-gray-600 hover:text-navy-primary cursor-pointer" data-testid="mobile-link-carbon-pipes">
                            Carbon Pipes
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Mobile Sheets Submenu */}
                    <div>
                      <div className="flex items-center justify-between py-2 cursor-pointer" onClick={() => toggleMobileSubmenu('sheets')} data-testid="mobile-submenu-sheets">
                        <div className="flex items-center text-sm hover:text-gold-primary">
                          <RectangleHorizontal className="w-3 h-3 mr-2" />
                          Sheets
                        </div>
                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${mobileSubmenus.sheets ? 'rotate-180' : ''}`} />
                      </div>
                      {mobileSubmenus.sheets && (
                        <div className="ml-5 space-y-1 animate-in slide-in-from-top duration-200">
                          <div className="py-1 text-xs text-gray-600 hover:text-navy-primary cursor-pointer" data-testid="mobile-link-steel-sheets">
                            Steel Sheets
                          </div>
                          <div className="py-1 text-xs text-gray-600 hover:text-navy-primary cursor-pointer" data-testid="mobile-link-carbon-sheets">
                            Carbon Sheets
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Mobile Bars Submenu */}
                    <div>
                      <div className="flex items-center justify-between py-2 cursor-pointer" onClick={() => toggleMobileSubmenu('bars')} data-testid="mobile-submenu-bars">
                        <div className="flex items-center text-sm hover:text-gold-primary">
                          <BarChart3 className="w-3 h-3 mr-2" />
                          Bars
                        </div>
                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${mobileSubmenus.bars ? 'rotate-180' : ''}`} />
                      </div>
                      {mobileSubmenus.bars && (
                        <div className="ml-5 space-y-1 animate-in slide-in-from-top duration-200">
                          <div className="py-1 text-xs text-gray-600 hover:text-navy-primary cursor-pointer" data-testid="mobile-link-bars-placeholder">
                            Add bars items here
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Mobile Fittings Submenu */}
                    <div>
                      <div className="flex items-center justify-between py-2 cursor-pointer" onClick={() => toggleMobileSubmenu('fittings')} data-testid="mobile-submenu-fittings">
                        <div className="flex items-center text-sm hover:text-gold-primary">
                          <Puzzle className="w-3 h-3 mr-2" />
                          Fittings
                        </div>
                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${mobileSubmenus.fittings ? 'rotate-180' : ''}`} />
                      </div>
                      {mobileSubmenus.fittings && (
                        <div className="ml-5 space-y-1 animate-in slide-in-from-top duration-200">
                          <div className="py-1 text-xs text-gray-600 hover:text-navy-primary cursor-pointer" data-testid="mobile-link-fittings-placeholder">
                            Add fittings items here
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Mobile Flanges Submenu */}
                    <div>
                      <div className="flex items-center justify-between py-2 cursor-pointer" onClick={() => toggleMobileSubmenu('flanges')} data-testid="mobile-submenu-flanges">
                        <div className="flex items-center text-sm hover:text-gold-primary">
                          <Circle className="w-3 h-3 mr-2" />
                          Flanges
                        </div>
                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${mobileSubmenus.flanges ? 'rotate-180' : ''}`} />
                      </div>
                      {mobileSubmenus.flanges && (
                        <div className="ml-5 space-y-1 animate-in slide-in-from-top duration-200">
                          <div className="py-1 text-xs text-gray-600 hover:text-navy-primary cursor-pointer" data-testid="mobile-link-flanges-placeholder">
                            Add flanges items here
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Mobile Valves Submenu */}
                    <div>
                      <div className="flex items-center justify-between py-2 cursor-pointer" onClick={() => toggleMobileSubmenu('valves')} data-testid="mobile-submenu-valves">
                        <div className="flex items-center text-sm hover:text-gold-primary">
                          <Gauge className="w-3 h-3 mr-2" />
                          Valves
                        </div>
                        <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${mobileSubmenus.valves ? 'rotate-180' : ''}`} />
                      </div>
                      {mobileSubmenus.valves && (
                        <div className="ml-5 space-y-1 animate-in slide-in-from-top duration-200">
                          <div className="py-1 text-xs text-gray-600 hover:text-navy-primary cursor-pointer" data-testid="mobile-link-valves-placeholder">
                            Add valves items here
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
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
