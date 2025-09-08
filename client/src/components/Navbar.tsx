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
  ChevronRight,
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
  Zap,
  Bolt,
  Hammer,
  Pin,
  Flashlight
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
            
            {/* Products Dropdown with Nested Submenus */}
            <div className="relative group">
              <button className="hover:text-gold-primary transition-colors flex items-center" data-testid="dropdown-products">
                <Settings className="w-4 h-4 mr-2" />
                Products
                <ChevronDown className="w-4 h-4 ml-2 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              <div className="absolute top-full left-0 bg-white text-gray-800 min-w-80 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-2 z-50">
                <div className="py-2">
                  {/* Pipes & Tubes with submenu */}
                  <div className="relative group/sub">
                    <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center justify-between transition-colors duration-200" data-testid="submenu-pipes-tubes">
                      <div className="flex items-center">
                        <Cylinder className="w-4 h-4 mr-3 text-navy-primary" />
                        <span className="font-semibold text-navy-primary">Pipes & Tubes</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-navy-primary" />
                    </div>
                    {/* Pipes & Tubes Submenu */}
                    <div className="absolute left-full top-0 bg-white text-gray-800 min-w-80 rounded-lg shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-60">
                      <div className="py-2">
                        <Link href="/product/pipes-tubes/stainless-steel-pipes-tubes" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-stainless-steel-pipes">
                          Stainless Steel Pipes & Tubes
                        </Link>
                        <Link href="/product/pipes-tubes/carbon-steel" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-carbon-steel-pipes">
                          Carbon Steel
                        </Link>
                        <Link href="/product/pipes-tubes/alloy-steel-pipe" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-alloy-steel-pipes">
                          Alloy Steel Pipe
                        </Link>
                        <Link href="/product/pipes-tubes/nickel-alloy" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-nickel-alloy-pipes">
                          Nickel Alloy
                        </Link>
                        <Link href="/product/pipes-tubes/inconel" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-inconel-pipes">
                          Inconel
                        </Link>
                        <Link href="/product/pipes-tubes/monel" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-monel-pipes">
                          Monel
                        </Link>
                        <Link href="/product/pipes-tubes/hastelloy" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-hastelloy-pipes">
                          Hastelloy
                        </Link>
                        <Link href="/product/pipes-tubes/incoloy" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-incoloy-pipes">
                          Incoloy
                        </Link>
                        <Link href="/product/pipes-tubes/titanium" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-titanium-pipes">
                          Titanium
                        </Link>
                        <Link href="/product/pipes-tubes/cupro-nickel" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-cupro-nickel-pipes">
                          Cupro Nickel
                        </Link>
                        <Link href="/product/pipes-tubes/tantalum" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-tantalum-pipes">
                          Tantalum
                        </Link>
                        <Link href="/product/pipes-tubes/duplex-super-duplex-pipes" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-duplex-pipes">
                          Duplex and Super Duplex Pipes
                        </Link>
                        <Link href="/product/pipes-tubes/corten-steel" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-corten-steel-pipes">
                          Corten Steel
                        </Link>
                        <Link href="/product/pipes-tubes/efsw-saw-hsaw-lsaw-pipes" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-efsw-pipes">
                          EFSW/SAW/HSAW/LSAW Pipes
                        </Link>
                        <Link href="/product/pipes-tubes/welded-wear-resistant-pipe-ar400" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-welded-wear-resistant-pipes">
                          Welded Wear Resistant Pipe/AR400 Pipe
                        </Link>
                        <Link href="/product/pipes-tubes/plate-welded-pipes" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-plate-welded-pipes">
                          Plate Welded Pipes
                        </Link>
                        <Link href="/product/pipes-tubes/large-od-seamless-pipes" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-large-od-pipes">
                          Large OD Seamless Pipes
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Plates & Sheets with submenu */}
                  <div className="relative group/sub">
                    <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center justify-between transition-colors duration-200" data-testid="submenu-plates-sheets">
                      <div className="flex items-center">
                        <RectangleHorizontal className="w-4 h-4 mr-3 text-navy-primary" />
                        <span className="font-semibold text-navy-primary">Plates & Sheets</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-navy-primary" />
                    </div>
                    {/* Plates & Sheets Submenu */}
                    <div className="absolute left-full top-0 bg-white text-gray-800 min-w-80 rounded-lg shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-60">
                      <div className="py-2">
                        <Link href="/product/plates-sheets/stainless-steel-plates" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-stainless-steel-plates">
                          Stainless Steel Plates
                        </Link>
                        <Link href="/product/plates-sheets/alloy-steel-plates" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-alloy-steel-plates">
                          Alloy Steel Plates
                        </Link>
                        <Link href="/product/plates-sheets/aluminium-alloy" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-aluminium-alloy-plates">
                          Aluminium Alloy
                        </Link>
                        <Link href="/product/plates-sheets/carbon-steel" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-carbon-steel-plates">
                          Carbon Steel
                        </Link>
                        <Link href="/product/plates-sheets/copper-nickel" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-copper-nickel-plates">
                          Copper Nickel
                        </Link>
                        <Link href="/product/plates-sheets/duplex-super-duplex" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-duplex-plates">
                          Duplex and Super Duplex
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Round Bars with submenu */}
                  <div className="relative group/sub">
                    <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center justify-between transition-colors duration-200" data-testid="submenu-round-bars">
                      <div className="flex items-center">
                        <BarChart3 className="w-4 h-4 mr-3 text-navy-primary" />
                        <span className="font-semibold text-navy-primary">Round Bars</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-navy-primary" />
                    </div>
                    {/* Round Bars Submenu */}
                    <div className="absolute left-full top-0 bg-white text-gray-800 min-w-80 rounded-lg shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-60">
                      <div className="py-2">
                        <Link href="/product/round-bars/alloy-steel-round" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-alloy-steel-round">
                          Alloy Steel Round
                        </Link>
                        <div className="relative group/sub2">
                          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between text-sm transition-colors duration-200" data-testid="submenu-alloy-steel-f-series">
                            <span>Alloy Steel F Series</span>
                            <ChevronRight className="w-3 h-3 text-navy-primary" />
                          </div>
                          <div className="absolute left-full top-0 bg-white text-gray-800 min-w-60 rounded-lg shadow-xl opacity-0 invisible group-hover/sub2:opacity-100 group-hover/sub2:visible transition-all duration-300 z-70">
                            <div className="py-2">
                              <Link href="/product/round-bars/f11-round-bars" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-xs transition-colors duration-200" data-testid="link-f11-round-bars">
                                F11 Round Bars
                              </Link>
                              <Link href="/product/round-bars/f22-round-bars" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-xs transition-colors duration-200" data-testid="link-f22-round-bars">
                                F22 Round Bars
                              </Link>
                              <Link href="/product/round-bars/f91-round-bars" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-xs transition-colors duration-200" data-testid="link-f91-round-bars">
                                F91 Round Bars
                              </Link>
                            </div>
                          </div>
                        </div>
                        <Link href="/product/round-bars/aluminium-alloy" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-aluminium-alloy-round">
                          Aluminium Alloy
                        </Link>
                        <Link href="/product/round-bars/carbon-steel" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-carbon-steel-round">
                          Carbon Steel
                        </Link>
                        <Link href="/product/round-bars/hot-work-steel" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-hot-work-steel">
                          Hot Work Steel
                        </Link>
                        <Link href="/product/round-bars/copper-nickel" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-copper-nickel-round">
                          Copper Nickel
                        </Link>
                        <Link href="/product/round-bars/en-series" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-en-series">
                          EN Series
                        </Link>
                        <Link href="/product/round-bars/hastelloy" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-hastelloy-round">
                          Hastelloy
                        </Link>
                        <Link href="/product/round-bars/stainless-steel-round-bars" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-stainless-steel-round">
                          Stainless Steel Round Bars
                        </Link>
                        <Link href="/product/round-bars/precipitation-hardening-steel" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-precipitation-hardening">
                          Precipitation Hardening Steel
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Cold Work Tool Steels with submenu */}
                  <div className="relative group/sub">
                    <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center justify-between transition-colors duration-200" data-testid="submenu-cold-work-tool-steels">
                      <div className="flex items-center">
                        <Hammer className="w-4 h-4 mr-3 text-navy-primary" />
                        <span className="font-semibold text-navy-primary">Cold Work Tool Steels</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-navy-primary" />
                    </div>
                    {/* Cold Work Tool Steels Submenu */}
                    <div className="absolute left-full top-0 bg-white text-gray-800 min-w-80 rounded-lg shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-60">
                      <div className="py-2">
                        <Link href="/product/cold-work-tool-steels/aisi-o1-round-bars" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-aisi-o1">
                          AISI O1 Round Bars
                        </Link>
                        <Link href="/product/cold-work-tool-steels/hchcr-d2-round-bars" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-hchcr-d2">
                          HCHCR-D2 Round Bars
                        </Link>
                        <Link href="/product/cold-work-tool-steels/toolox-33-round-bars" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-toolox-33">
                          Toolox 33 Round Bars
                        </Link>
                        <Link href="/product/cold-work-tool-steels/toolox-44-round-bars" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-toolox-44">
                          Toolox 44 Round Bars
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Flanges with submenu */}
                  <div className="relative group/sub">
                    <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center justify-between transition-colors duration-200" data-testid="submenu-flanges">
                      <div className="flex items-center">
                        <Circle className="w-4 h-4 mr-3 text-navy-primary" />
                        <span className="font-semibold text-navy-primary">Flanges</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-navy-primary" />
                    </div>
                    {/* Flanges Submenu */}
                    <div className="absolute left-full top-0 bg-white text-gray-800 min-w-80 rounded-lg shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-60">
                      <div className="py-2">
                        <Link href="/product/flanges/stainless-steel" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-stainless-steel-flanges">
                          Stainless Steel
                        </Link>
                        <Link href="/product/flanges/carbon-steel" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-carbon-steel-flanges">
                          Carbon Steel
                        </Link>
                        <Link href="/product/flanges/alloy-steel" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-alloy-steel-flanges">
                          Alloy Steel
                        </Link>
                        <Link href="/product/flanges/nickel-alloy" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-nickel-alloy-flanges">
                          Nickel Alloy
                        </Link>
                        <Link href="/product/flanges/inconel" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-inconel-flanges">
                          Inconel
                        </Link>
                        <Link href="/product/flanges/incoloy" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-incoloy-flanges">
                          Incoloy
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Fasteners with submenu */}
                  <div className="relative group/sub">
                    <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center justify-between transition-colors duration-200" data-testid="submenu-fasteners">
                      <div className="flex items-center">
                        <Bolt className="w-4 h-4 mr-3 text-navy-primary" />
                        <span className="font-semibold text-navy-primary">Fasteners</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-navy-primary" />
                    </div>
                    {/* Fasteners Submenu */}
                    <div className="absolute left-full top-0 bg-white text-gray-800 min-w-80 rounded-lg shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-60">
                      <div className="py-2">
                        <Link href="/product/fasteners/high-tensile" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-high-tensile">
                          High Tensile
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Fittings with submenu */}
                  <div className="relative group/sub">
                    <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center justify-between transition-colors duration-200" data-testid="submenu-fittings">
                      <div className="flex items-center">
                        <Puzzle className="w-4 h-4 mr-3 text-navy-primary" />
                        <span className="font-semibold text-navy-primary">Fittings</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-navy-primary" />
                    </div>
                    {/* Fittings Submenu */}
                    <div className="absolute left-full top-0 bg-white text-gray-800 min-w-80 rounded-lg shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-60">
                      <div className="py-2">
                        <Link href="/product/fittings/buttweld-fittings" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-buttweld-fittings">
                          Buttweld Fittings
                        </Link>
                        <Link href="/product/fittings/forged-fittings" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-forged-fittings">
                          Forged Fittings
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Welding Electrodes with submenu */}
                  <div className="relative group/sub">
                    <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center justify-between transition-colors duration-200" data-testid="submenu-welding-electrodes">
                      <div className="flex items-center">
                        <Flashlight className="w-4 h-4 mr-3 text-navy-primary" />
                        <span className="font-semibold text-navy-primary">Welding Electrodes</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-navy-primary" />
                    </div>
                    {/* Welding Electrodes Submenu */}
                    <div className="absolute left-full top-0 bg-white text-gray-800 min-w-80 rounded-lg shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-60">
                      <div className="py-2">
                        <Link href="/product/welding-electrodes/stainless-steel-electrode" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-stainless-electrode">
                          Stainless Steel Electrode
                        </Link>
                        <div className="relative group/sub2">
                          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center justify-between text-sm transition-colors duration-200" data-testid="submenu-copper-wires">
                            <span>Copper Wires</span>
                            <ChevronRight className="w-3 h-3 text-navy-primary" />
                          </div>
                          <div className="absolute left-full top-0 bg-white text-gray-800 min-w-60 rounded-lg shadow-xl opacity-0 invisible group-hover/sub2:opacity-100 group-hover/sub2:visible transition-all duration-300 z-70">
                            <div className="py-2">
                              <Link href="/product/welding-electrodes/ercuni-wire-copper-nickel" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-xs transition-colors duration-200" data-testid="link-ercuni-wire">
                                ERCuNi Wire
                              </Link>
                            </div>
                          </div>
                        </div>
                        <Link href="/product/welding-electrodes/cobalt-base-electrode" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-cobalt-base-electrode">
                          Cobalt Base Electrode
                        </Link>
                        <Link href="/product/welding-electrodes/aluminium-wires" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-aluminium-wires">
                          Aluminium Wires
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Galvanized with submenu */}
                  <div className="relative group/sub">
                    <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b flex items-center justify-between transition-colors duration-200" data-testid="submenu-galvanized">
                      <div className="flex items-center">
                        <Gauge className="w-4 h-4 mr-3 text-navy-primary" />
                        <span className="font-semibold text-navy-primary">Galvanized</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-navy-primary" />
                    </div>
                    {/* Galvanized Submenu */}
                    <div className="absolute left-full top-0 bg-white text-gray-800 min-w-80 rounded-lg shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-60">
                      <div className="py-2">
                        <Link href="/product/galvanized/hot-dip-galvanized-angles" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-galvanized-angles">
                          Hot Dip Galvanized Angles
                        </Link>
                        <Link href="/product/galvanized/hot-dip-galvanized-channels" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-galvanized-channels">
                          Hot Dip Galvanized Channels
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Pins with submenu */}
                  <div className="relative group/sub">
                    <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer flex items-center justify-between transition-colors duration-200" data-testid="submenu-pins">
                      <div className="flex items-center">
                        <Pin className="w-4 h-4 mr-3 text-navy-primary" />
                        <span className="font-semibold text-navy-primary">Pins</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-navy-primary" />
                    </div>
                    {/* Pins Submenu */}
                    <div className="absolute left-full top-0 bg-white text-gray-800 min-w-80 rounded-lg shadow-xl opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 z-60">
                      <div className="py-2">
                        <Link href="/product/pins/pto-pins" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-pto-pins">
                          PTO Pins
                        </Link>
                        <Link href="/product/pins/pipe-linch-pin" className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center text-sm transition-colors duration-200" data-testid="link-pipe-linch-pin">
                          Pipe Linch Pin
                        </Link>
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
