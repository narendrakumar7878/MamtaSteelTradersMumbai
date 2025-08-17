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
    flanges: false
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
        flanges: false
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
      flanges: false
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
                  {/* Pipes & Tubes */}
                  <Link href="/pipes-tubes" className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center transition-colors duration-200" data-testid="link-pipes-tubes">
                    <Cylinder className="w-4 h-4 mr-3 text-navy-primary" />
                    <span className="font-semibold text-navy-primary">Pipes & Tubes</span>
                  </Link>
                  
                  {/* Plates & Sheets */}
                  <Link href="/plates-sheets" className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center transition-colors duration-200" data-testid="link-plates-sheets">
                    <RectangleHorizontal className="w-4 h-4 mr-3 text-navy-primary" />
                    <span className="font-semibold text-navy-primary">Plates & Sheets</span>
                  </Link>
                  
                  {/* Bars */}
                  <Link href="/bars" className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center transition-colors duration-200" data-testid="link-bars">
                    <BarChart3 className="w-4 h-4 mr-3 text-navy-primary" />
                    <span className="font-semibold text-navy-primary">Bars</span>
                  </Link>
                  
                  {/* Fittings */}
                  <Link href="/fittings" className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center transition-colors duration-200" data-testid="link-fittings">
                    <Puzzle className="w-4 h-4 mr-3 text-navy-primary" />
                    <span className="font-semibold text-navy-primary">Fittings</span>
                  </Link>
                  
                  {/* Flanges */}
                  <Link href="/flanges" className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center transition-colors duration-200" data-testid="link-flanges">
                    <Circle className="w-4 h-4 mr-3 text-navy-primary" />
                    <span className="font-semibold text-navy-primary">Flanges</span>
                  </Link>
                  
                  {/* Fasteners */}
                  <Link href="/fasteners" className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center transition-colors duration-200" data-testid="link-fasteners">
                    <Wrench className="w-4 h-4 mr-3 text-navy-primary" />
                    <span className="font-semibold text-navy-primary">Fasteners</span>
                  </Link>
                  
                  {/* Angles & Channels */}
                  <Link href="/angleschannels" className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center transition-colors duration-200" data-testid="link-angles-channels">
                    <TrendingUp className="w-4 h-4 mr-3 text-navy-primary" />
                    <span className="font-semibold text-navy-primary">Angles & Channels</span>
                  </Link>
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
                  <Link href="/technicalInformation" className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center transition-colors duration-200" data-testid="link-technical-information">
                    <BookOpen className="w-4 h-4 mr-3 text-navy-primary" />
                    <span className="font-semibold text-navy-primary">Technical Information</span>
                  </Link>
                  
                  <Link href="/chemicalComposition" className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center transition-colors duration-200" data-testid="link-chemical-composition">
                    <TestTube className="w-4 h-4 mr-3 text-navy-primary" />
                    <span className="font-semibold text-navy-primary">Chemical Composition</span>
                  </Link>
                  
                  <Link href="/ss300And200SeriesChemicalComposition" className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center transition-colors duration-200" data-testid="link-ss300-200-series">
                    <Layers className="w-4 h-4 mr-3 text-navy-primary" />
                    <span className="font-semibold text-navy-primary">SS 300 & 200 Series Chemical Composition</span>
                  </Link>
                  
                  <Link href="/stainlessSteelPipeSpecification" className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center transition-colors duration-200" data-testid="link-stainless-pipe-spec">
                    <Cylinder className="w-4 h-4 mr-3 text-navy-primary" />
                    <span className="font-semibold text-navy-primary">Stainless Steel Pipe Specification</span>
                  </Link>
                  
                  <Link href="/carbonAndAlloyPipeSpecifications" className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center transition-colors duration-200" data-testid="link-carbon-alloy-pipe-spec">
                    <TrendingUp className="w-4 h-4 mr-3 text-navy-primary" />
                    <span className="font-semibold text-navy-primary">Carbon & Alloy Pipe Specifications</span>
                  </Link>
                  
                  <Link href="/ams-standard-material" className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center transition-colors duration-200" data-testid="link-ams-standard-material">
                    <Award className="w-4 h-4 mr-3 text-navy-primary" />
                    <span className="font-semibold text-navy-primary">AMS Standard Material</span>
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
                    {/* Mobile Pipes & Tubes */}
                    <Link href="/pipes-tubes" className="flex items-center py-2 text-sm hover:text-gold-primary" onClick={toggleMobileMenu} data-testid="mobile-link-pipes-tubes">
                      <Cylinder className="w-3 h-3 mr-2" />
                      Pipes & Tubes
                    </Link>
                    
                    {/* Mobile Plates & Sheets */}
                    <Link href="/plates-sheets" className="flex items-center py-2 text-sm hover:text-gold-primary" onClick={toggleMobileMenu} data-testid="mobile-link-plates-sheets">
                      <RectangleHorizontal className="w-3 h-3 mr-2" />
                      Plates & Sheets
                    </Link>
                    
                    {/* Mobile Bars */}
                    <Link href="/bars" className="flex items-center py-2 text-sm hover:text-gold-primary" onClick={toggleMobileMenu} data-testid="mobile-link-bars">
                      <BarChart3 className="w-3 h-3 mr-2" />
                      Bars
                    </Link>
                    
                    {/* Mobile Fittings */}
                    <Link href="/fittings" className="flex items-center py-2 text-sm hover:text-gold-primary" onClick={toggleMobileMenu} data-testid="mobile-link-fittings">
                      <Puzzle className="w-3 h-3 mr-2" />
                      Fittings
                    </Link>
                    
                    {/* Mobile Flanges */}
                    <Link href="/flanges" className="flex items-center py-2 text-sm hover:text-gold-primary" onClick={toggleMobileMenu} data-testid="mobile-link-flanges">
                      <Circle className="w-3 h-3 mr-2" />
                      Flanges
                    </Link>
                    
                    {/* Mobile Fasteners */}
                    <Link href="/fasteners" className="flex items-center py-2 text-sm hover:text-gold-primary" onClick={toggleMobileMenu} data-testid="mobile-link-fasteners">
                      <Wrench className="w-3 h-3 mr-2" />
                      Fasteners
                    </Link>
                    
                    {/* Mobile Angles & Channels */}
                    <Link href="/angleschannels" className="flex items-center py-2 text-sm hover:text-gold-primary" onClick={toggleMobileMenu} data-testid="mobile-link-angles-channels">
                      <TrendingUp className="w-3 h-3 mr-2" />
                      Angles & Channels
                    </Link>
                  </div>
                )}
              </div>
              
              {/* Mobile Technical Info Menu */}
              <div className="py-2 px-4">
                <div className="flex items-center justify-between cursor-pointer" onClick={toggleMobileTechnicalInfo} data-testid="mobile-dropdown-technical-info">
                  <div className="flex items-center">
                    <FileText className="w-4 h-4 mr-3" />
                    <span className="font-semibold">Technical Info</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileTechnicalInfoOpen ? 'rotate-180' : ''}`} />
                </div>
                {mobileTechnicalInfoOpen && (
                  <div className="ml-7 mt-2 space-y-1 animate-in slide-in-from-top duration-200">
                    <Link href="/technicalInformation" className="flex items-center py-2 text-sm hover:text-gold-primary" onClick={toggleMobileMenu} data-testid="mobile-link-technical-information">
                      <BookOpen className="w-3 h-3 mr-2" />
                      Technical Information
                    </Link>
                    <Link href="/chemicalComposition" className="flex items-center py-2 text-sm hover:text-gold-primary" onClick={toggleMobileMenu} data-testid="mobile-link-chemical-composition">
                      <TestTube className="w-3 h-3 mr-2" />
                      Chemical Composition
                    </Link>
                    <Link href="/ss300And200SeriesChemicalComposition" className="flex items-center py-2 text-sm hover:text-gold-primary" onClick={toggleMobileMenu} data-testid="mobile-link-ss300-200-series">
                      <Layers className="w-3 h-3 mr-2" />
                      SS 300 & 200 Series
                    </Link>
                    <Link href="/stainlessSteelPipeSpecification" className="flex items-center py-2 text-sm hover:text-gold-primary" onClick={toggleMobileMenu} data-testid="mobile-link-stainless-pipe-spec">
                      <Cylinder className="w-3 h-3 mr-2" />
                      Stainless Steel Pipes
                    </Link>
                    <Link href="/carbonAndAlloyPipeSpecifications" className="flex items-center py-2 text-sm hover:text-gold-primary" onClick={toggleMobileMenu} data-testid="mobile-link-carbon-alloy-pipe-spec">
                      <TrendingUp className="w-3 h-3 mr-2" />
                      Carbon & Alloy Pipes
                    </Link>
                    <Link href="/ams-standard-material" className="flex items-center py-2 text-sm hover:text-gold-primary" onClick={toggleMobileMenu} data-testid="mobile-link-ams-standard-material">
                      <Award className="w-3 h-3 mr-2" />
                      AMS Standard Material
                    </Link>
                  </div>
                )}
              </div>
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
