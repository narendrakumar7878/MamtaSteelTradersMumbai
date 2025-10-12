import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

// Import all product images
import img1 from "@/assets/produtphoto/IMG-20251011-WA0015.jpg";
import img2 from "@/assets/produtphoto/IMG-20251011-WA0022.jpg";
import img3 from "@/assets/produtphoto/IMG-20251011-WA0023.jpg";
import img4 from "@/assets/produtphoto/IMG-20251011-WA0024.jpg";
import img5 from "@/assets/produtphoto/IMG-20251011-WA0025.jpg";
import img6 from "@/assets/produtphoto/IMG-20251011-WA0026.jpg";
import img7 from "@/assets/produtphoto/IMG-20251011-WA0027.jpg";
import img8 from "@/assets/produtphoto/IMG-20251011-WA0028.jpg";
import img9 from "@/assets/produtphoto/IMG-20251011-WA0029.jpg";
import img10 from "@/assets/produtphoto/IMG-20251011-WA0030.jpg";
import img11 from "@/assets/produtphoto/IMG-20251011-WA0031.jpg";
import img12 from "@/assets/produtphoto/IMG-20251011-WA0032.jpg";
import img13 from "@/assets/produtphoto/IMG-20251011-WA0033.jpg";
import img14 from "@/assets/produtphoto/IMG-20251011-WA0034.jpg";
import img15 from "@/assets/produtphoto/IMG-20251011-WA0035.jpg";
import img16 from "@/assets/produtphoto/IMG-20251011-WA0036.jpg";
import img17 from "@/assets/produtphoto/IMG-20251011-WA0037.jpg";
import img18 from "@/assets/produtphoto/IMG-20251011-WA0038.jpg";
import img19 from "@/assets/produtphoto/IMG-20251011-WA0039.jpg";
import img20 from "@/assets/produtphoto/IMG-20251011-WA0040.jpg";
import img21 from "@/assets/produtphoto/IMG-20251011-WA0041.jpg";
import img22 from "@/assets/produtphoto/IMG-20251011-WA0042.jpg";
import img23 from "@/assets/produtphoto/IMG-20251011-WA0043.jpg";
import img24 from "@/assets/produtphoto/IMG-20251011-WA0044.jpg";
import img25 from "@/assets/produtphoto/IMG-20251011-WA0045.jpg";
import img26 from "@/assets/produtphoto/IMG-20251011-WA0046.jpg";
import img27 from "@/assets/produtphoto/IMG-20251011-WA0047.jpg";
import img28 from "@/assets/produtphoto/IMG-20251011-WA0048.jpg";
import img29 from "@/assets/produtphoto/IMG-20251011-WA0049.jpg";
import img30 from "@/assets/produtphoto/IMG-20251011-WA0050.jpg";
import img31 from "@/assets/produtphoto/IMG-20251011-WA0051.jpg";
import img32 from "@/assets/produtphoto/IMG-20251011-WA0052.jpg";
import img33 from "@/assets/produtphoto/IMG-20251011-WA0053.jpg";
import img34 from "@/assets/produtphoto/IMG-20251011-WA0054.jpg";
import img35 from "@/assets/produtphoto/IMG-20251011-WA0055.jpg";
import img36 from "@/assets/produtphoto/IMG-20251011-WA0056.jpg";
import img37 from "@/assets/produtphoto/IMG-20251011-WA0057.jpg";
import img38 from "@/assets/produtphoto/IMG-20251011-WA0058.jpg";
import img39 from "@/assets/produtphoto/IMG-20251011-WA0059.jpg";
import img40 from "@/assets/produtphoto/IMG-20251011-WA0060.jpg";
import img41 from "@/assets/produtphoto/IMG-20251011-WA0061.jpg";
import img42 from "@/assets/produtphoto/IMG-20251011-WA0062.jpg";
import img43 from "@/assets/produtphoto/IMG-20251011-WA0063.jpg";
import img44 from "@/assets/produtphoto/IMG-20251011-WA0064.jpg";
import img45 from "@/assets/produtphoto/IMG-20251011-WA0065.jpg";
import img46 from "@/assets/produtphoto/IMG-20251011-WA0066.jpg";
import img47 from "@/assets/produtphoto/IMG-20251011-WA0067.jpg";
import img48 from "@/assets/produtphoto/IMG-20251011-WA0068.jpg";
import img49 from "@/assets/produtphoto/IMG-20251011-WA0069.jpg";
import img50 from "@/assets/produtphoto/IMG-20251011-WA0070.jpg";
import img51 from "@/assets/produtphoto/IMG-20251011-WA0071.jpg";
import img52 from "@/assets/produtphoto/IMG-20251011-WA0072.jpg";
import img53 from "@/assets/produtphoto/IMG-20251011-WA0073.jpg";
import img54 from "@/assets/produtphoto/IMG-20251011-WA0074.jpg";
import img55 from "@/assets/produtphoto/IMG-20251011-WA0075.jpg";
import img56 from "@/assets/produtphoto/IMG-20251011-WA0076.jpg";
import img57 from "@/assets/produtphoto/IMG-20251011-WA0077.jpg";
import img58 from "@/assets/produtphoto/IMG-20251011-WA0078.jpg";
import img59 from "@/assets/produtphoto/IMG-20251011-WA0079.jpg";
import img60 from "@/assets/produtphoto/IMG-20251011-WA0080.jpg";
import img61 from "@/assets/produtphoto/IMG-20251011-WA0081.jpg";
import img62 from "@/assets/produtphoto/IMG-20251011-WA0082.jpg";
import img63 from "@/assets/produtphoto/IMG-20251011-WA0083.jpg";
import img64 from "@/assets/produtphoto/IMG-20251011-WA0084.jpg";
import img65 from "@/assets/produtphoto/IMG-20251011-WA0085.jpg";
import img66 from "@/assets/produtphoto/IMG-20251011-WA0086.jpg";
import img67 from "@/assets/produtphoto/IMG-20251011-WA0087.jpg";

// Product gallery with SEO-optimized metadata
const productGallery = [
  {
    id: 1,
    image: img1,
    title: "Stainless Steel Pipes & Tubes",
    alt: "Premium Quality Stainless Steel Pipes 304 316 316L Seamless Welded ASTM ASME Standard Mamta Steel Traders Mumbai India Supplier Stockist Manufacturer",
    description: "High-grade stainless steel pipes for industrial applications"
  },
  {
    id: 2,
    image: img2,
    title: "Carbon Steel Plates & Sheets",
    alt: "Carbon Steel Plates Sheets IS 2062 E250 E350 Hot Rolled Cold Rolled Chequered Mamta Steel Traders Mumbai India Best Price Supplier",
    description: "Durable carbon steel plates and sheets in various grades"
  },
  {
    id: 3,
    image: img3,
    title: "Alloy Steel Round Bars",
    alt: "Alloy Steel Round Bars EN8 EN9 EN19 EN24 Bright Peeled Black Round Bars Mamta Steel Traders Mumbai India ISO Certified Stockist",
    description: "Precision alloy steel round bars for machining"
  },
  {
    id: 4,
    image: img4,
    title: "Stainless Steel Flanges",
    alt: "Stainless Steel Flanges 304 316 316L Slip On Weld Neck Blind Threaded ANSI ASME DIN Standard Mamta Steel Traders Mumbai Supplier",
    description: "Industrial grade stainless steel flanges in all sizes"
  },
  {
    id: 5,
    image: img5,
    title: "Steel Pipe Fittings",
    alt: "Steel Pipe Fittings Elbows Tees Reducers Couplings SS CS AS Buttweld Socket Weld Threaded Mamta Steel Traders Mumbai India",
    description: "Complete range of steel pipe fittings and connectors"
  },
  {
    id: 6,
    image: img6,
    title: "Stainless Steel Coils",
    alt: "Stainless Steel Coils 304 316 316L 310 321 904L Hot Rolled Cold Rolled BA 2B Finish Mamta Steel Traders Mumbai India Stockist",
    description: "Quality stainless steel coils with various finishes"
  },
  {
    id: 7,
    image: img7,
    title: "Mild Steel Channels & Angles",
    alt: "Mild Steel Channels Angles ISMC ISMB ISEA ISJB IS 2062 Structural Steel Mamta Steel Traders Mumbai India Supplier Best Price",
    description: "Structural mild steel channels and angles"
  },
  {
    id: 8,
    image: img8,
    title: "Stainless Steel Fasteners",
    alt: "Stainless Steel Fasteners Bolts Nuts Washers Studs 304 316 A2 A4 Grade Mamta Steel Traders Mumbai India Manufacturer Supplier",
    description: "Corrosion-resistant stainless steel fasteners"
  },
  {
    id: 9,
    image: img9,
    title: "Carbon Steel Pipes",
    alt: "Carbon Steel Pipes Seamless ERW LSAW API 5L ASTM A106 A53 Black Galvanized Mamta Steel Traders Mumbai India Stockist Supplier",
    description: "Heavy-duty carbon steel pipes for various industries"
  },
  {
    id: 10,
    image: img10,
    title: "Alloy Steel Plates",
    alt: "Alloy Steel Plates SA387 Gr5 Gr9 Gr11 Gr22 Gr91 16Mo3 Pressure Vessel Steel Plates Mamta Steel Traders Mumbai India Supplier",
    description: "High-strength alloy steel plates for pressure vessels"
  },
  {
    id: 11,
    image: img11,
    title: "Stainless Steel Sheets",
    alt: "Stainless Steel Sheets 304 316L 310 321 BA 2B No4 Hairline Mirror Finish Mamta Steel Traders Mumbai India Best Quality Supplier",
    description: "Premium finish stainless steel sheets"
  },
  {
    id: 12,
    image: img12,
    title: "Steel Bars & Rods",
    alt: "Steel Bars Rods Round Square Flat Hex Bright Black Peeled SS CS AS MS Mamta Steel Traders Mumbai India ISO Certified Stockist",
    description: "Versatile steel bars and rods in multiple shapes"
  },
  {
    id: 13,
    image: img13,
    title: "Duplex Steel Products",
    alt: "Duplex Steel 2205 2507 Pipes Tubes Plates Sheets Flanges Fittings Bars Mamta Steel Traders Mumbai India Authorized Supplier",
    description: "Corrosion-resistant duplex stainless steel products"
  },
  {
    id: 14,
    image: img14,
    title: "Nickel Alloy Products",
    alt: "Nickel Alloy Inconel Monel Hastelloy Pipes Plates Sheets Flanges Fittings Mamta Steel Traders Mumbai India Premium Supplier",
    description: "High-performance nickel alloy materials"
  },
  {
    id: 15,
    image: img15,
    title: "Titanium Steel Products",
    alt: "Titanium Grade 2 Grade 5 Pipes Tubes Plates Sheets Bars Flanges Fittings Mamta Steel Traders Mumbai India Supplier Stockist",
    description: "Lightweight titanium steel for aerospace applications"
  },
  {
    id: 16,
    image: img16,
    title: "Copper & Brass Products",
    alt: "Copper Brass Pipes Tubes Plates Sheets Rods Fittings C10100 C11000 C12200 Mamta Steel Traders Mumbai India Quality Supplier",
    description: "Conductive copper and brass materials"
  },
  {
    id: 17,
    image: img17,
    title: "Aluminum Products",
    alt: "Aluminum 1100 3003 5052 6061 Pipes Tubes Plates Sheets Bars Coils Mamta Steel Traders Mumbai India Authorized Stockist",
    description: "Lightweight aluminum products in various grades"
  },
  {
    id: 18,
    image: img18,
    title: "Tool Steel Products",
    alt: "Tool Steel D2 D3 H11 H13 M2 M35 M42 Plates Flats Rounds Mamta Steel Traders Mumbai India Premium Quality Supplier",
    description: "High-hardness tool steel for manufacturing"
  },
  {
    id: 19,
    image: img19,
    title: "Spring Steel Products",
    alt: "Spring Steel EN45 EN47 SUP9 SUP10 Plates Strips Wires Mamta Steel Traders Mumbai India ISO Certified Supplier",
    description: "Elastic spring steel for automotive applications"
  },
  {
    id: 20,
    image: img20,
    title: "Bearing Steel Products",
    alt: "Bearing Steel EN31 52100 SUJ2 Bars Tubes Pipes Mamta Steel Traders Mumbai India High Precision Supplier Stockist",
    description: "Precision bearing steel for machinery"
  },
  {
    id: 21,
    image: img21,
    title: "Stainless Steel Welded Pipes",
    alt: "Stainless Steel Welded Pipes ERW EFW 304 316 316L Polished Pickled Mamta Steel Traders Mumbai India Manufacturer",
    description: "Seamless welded stainless steel pipes"
  },
  {
    id: 22,
    image: img22,
    title: "Carbon Steel Seamless Pipes",
    alt: "Carbon Steel Seamless Pipes API 5L X42 X52 X60 X65 X70 ASTM A106 Gr B Mamta Steel Traders Mumbai India Supplier",
    description: "High-pressure carbon steel seamless pipes"
  },
  {
    id: 23,
    image: img23,
    title: "Alloy Steel Seamless Pipes",
    alt: "Alloy Steel Seamless Pipes ASTM A335 P5 P9 P11 P22 P91 High Temperature Mamta Steel Traders Mumbai India Stockist",
    description: "Heat-resistant alloy steel seamless pipes"
  },
  {
    id: 24,
    image: img24,
    title: "Stainless Steel Square Bars",
    alt: "Stainless Steel Square Bars 304 316 316L Cold Drawn Hot Rolled Mamta Steel Traders Mumbai India Best Price Supplier",
    description: "Precision stainless steel square bars"
  },
  {
    id: 25,
    image: img25,
    title: "Carbon Steel Flat Bars",
    alt: "Carbon Steel Flat Bars IS 2062 EN8 EN9 Hot Rolled Cold Drawn Mamta Steel Traders Mumbai India Quality Stockist",
    description: "Versatile carbon steel flat bars"
  },
  {
    id: 26,
    image: img26,
    title: "Alloy Steel Hex Bars",
    alt: "Alloy Steel Hex Bars EN19 EN24 EN36 Bright Black Hexagon Bars Mamta Steel Traders Mumbai India ISO Supplier",
    description: "Machining-grade alloy steel hex bars"
  },
  {
    id: 27,
    image: img27,
    title: "Stainless Steel Hollow Bars",
    alt: "Stainless Steel Hollow Bars 304 316 316L Seamless Polished Mamta Steel Traders Mumbai India Premium Supplier",
    description: "Lightweight stainless steel hollow bars"
  },
  {
    id: 28,
    image: img28,
    title: "Stainless Steel Wire Rods",
    alt: "Stainless Steel Wire Rods 304 316 Bright Annealed Spring Hard Mamta Steel Traders Mumbai India Manufacturer",
    description: "Flexible stainless steel wire rods"
  },
  {
    id: 29,
    image: img29,
    title: "Galvanized Steel Products",
    alt: "Galvanized Steel Pipes Tubes Sheets Coils Hot Dip Galvanized GI Mamta Steel Traders Mumbai India Quality Supplier",
    description: "Corrosion-protected galvanized steel products"
  },
  {
    id: 30,
    image: img30,
    title: "Chequered Steel Plates",
    alt: "Chequered Steel Plates MS SS Anti Skid Floor Plates Diamond Pattern Mamta Steel Traders Mumbai India Stockist",
    description: "Anti-slip chequered steel floor plates"
  },
  {
    id: 31,
    image: img31,
    title: "Perforated Steel Sheets",
    alt: "Perforated Steel Sheets SS MS Round Square Slot Holes Mamta Steel Traders Mumbai India Custom Perforation Supplier",
    description: "Custom perforated steel sheets"
  },
  {
    id: 32,
    image: img32,
    title: "Expanded Metal Mesh",
    alt: "Expanded Metal Mesh SS MS Diamond Flattened Raised Mamta Steel Traders Mumbai India Industrial Mesh Supplier",
    description: "Industrial expanded metal mesh products"
  },
  {
    id: 33,
    image: img33,
    title: "Stainless Steel Wires",
    alt: "Stainless Steel Wires 304 316 Bright Annealed Spring Hard Soft Wire Mamta Steel Traders Mumbai India Supplier",
    description: "High-quality stainless steel wires"
  },
  {
    id: 34,
    image: img34,
    title: "Steel Gratings",
    alt: "Steel Gratings MS SS Serrated Plain Bar Grating Platform Walkway Mamta Steel Traders Mumbai India Manufacturer",
    description: "Industrial steel gratings for platforms"
  },
  {
    id: 35,
    image: img35,
    title: "Stainless Steel Buttweld Fittings",
    alt: "Stainless Steel Buttweld Fittings 304 316 Elbows Tees Reducers Caps ASME B16.9 Mamta Steel Traders Mumbai Supplier",
    description: "Precision buttweld pipe fittings"
  },
  {
    id: 36,
    image: img36,
    title: "Socket Weld Fittings",
    alt: "Socket Weld Fittings SS CS AS Elbows Tees Couplings ASME B16.11 Class 3000 6000 Mamta Steel Traders Mumbai India",
    description: "High-pressure socket weld fittings"
  },
  {
    id: 37,
    image: img37,
    title: "Threaded Pipe Fittings",
    alt: "Threaded Pipe Fittings SS CS Elbows Tees Nipples Bushings BSP NPT Mamta Steel Traders Mumbai India Supplier",
    description: "Screwed threaded pipe fittings"
  },
  {
    id: 38,
    image: img38,
    title: "Compression Tube Fittings",
    alt: "Compression Tube Fittings SS 304 316 Ferrule Fittings Instrumentation Fittings Mamta Steel Traders Mumbai India",
    description: "Leak-proof compression tube fittings"
  },
  {
    id: 39,
    image: img39,
    title: "Weld Neck Flanges",
    alt: "Weld Neck Flanges SS CS AS 150# 300# 600# ANSI B16.5 RF FF RTJ Mamta Steel Traders Mumbai India Supplier",
    description: "High-strength weld neck flanges"
  },
  {
    id: 40,
    image: img40,
    title: "Slip On Flanges",
    alt: "Slip On Flanges Stainless Steel Carbon Steel 150# 300# ASME B16.5 Mamta Steel Traders Mumbai India Stockist",
    description: "Easy-install slip on flanges"
  },
  {
    id: 41,
    image: img41,
    title: "Blind Flanges",
    alt: "Blind Flanges SS CS AS All Pressure Classes ANSI ASME DIN Standard Mamta Steel Traders Mumbai India Supplier",
    description: "Pipeline isolation blind flanges"
  },
  {
    id: 42,
    image: img42,
    title: "Threaded Flanges",
    alt: "Threaded Flanges Screwed Flanges SS CS 150# 300# BSP NPT Mamta Steel Traders Mumbai India Quality Supplier",
    description: "Screw connection threaded flanges"
  },
  {
    id: 43,
    image: img43,
    title: "Lap Joint Flanges",
    alt: "Lap Joint Flanges Stub End Flanges SS CS ASME B16.5 Type A B C Mamta Steel Traders Mumbai India Stockist",
    description: "Versatile lap joint flange systems"
  },
  {
    id: 44,
    image: img44,
    title: "Orifice Flanges",
    alt: "Orifice Flanges Paddle Spacer Paddle Blank Spectacle Blind SS CS Mamta Steel Traders Mumbai India Supplier",
    description: "Flow measurement orifice flanges"
  },
  {
    id: 45,
    image: img45,
    title: "Long Weld Neck Flanges",
    alt: "Long Weld Neck Flanges LWN Flanges SS CS High Pressure ASME Mamta Steel Traders Mumbai India Premium Supplier",
    description: "Extended weld neck flanges"
  },
  {
    id: 46,
    image: img46,
    title: "Stainless Steel Bolts",
    alt: "Stainless Steel Bolts Hex Head Bolts 304 316 A2 A4 Grade Full Threaded Mamta Steel Traders Mumbai India Supplier",
    description: "Corrosion-resistant stainless steel bolts"
  },
  {
    id: 47,
    image: img47,
    title: "Stainless Steel Nuts",
    alt: "Stainless Steel Nuts Hex Nuts 304 316 316L A2 A4 Lock Nuts Mamta Steel Traders Mumbai India Quality Supplier",
    description: "Precision stainless steel nuts"
  },
  {
    id: 48,
    image: img48,
    title: "Stainless Steel Washers",
    alt: "Stainless Steel Washers Flat Washers Spring Washers 304 316 DIN ISO Standard Mamta Steel Traders Mumbai India",
    description: "Load-distributing stainless steel washers"
  },
  {
    id: 49,
    image: img49,
    title: "Stainless Steel Studs",
    alt: "Stainless Steel Studs Threaded Rods 304 316 316L Full Thread Double End Mamta Steel Traders Mumbai India Supplier",
    description: "High-strength stainless steel studs"
  },
  {
    id: 50,
    image: img50,
    title: "U Bolts & J Bolts",
    alt: "U Bolts J Bolts Anchor Bolts SS CS Galvanized Foundation Bolts Mamta Steel Traders Mumbai India Manufacturer",
    description: "Structural U bolts and J bolts"
  },
  {
    id: 51,
    image: img51,
    title: "Stainless Steel Screws",
    alt: "Stainless Steel Screws Machine Screws Self Tapping 304 316 Mamta Steel Traders Mumbai India Quality Supplier",
    description: "Versatile stainless steel screws"
  },
  {
    id: 52,
    image: img52,
    title: "Eye Bolts & Eye Nuts",
    alt: "Eye Bolts Eye Nuts Lifting Eyes SS CS Galvanized Mamta Steel Traders Mumbai India Industrial Fasteners Supplier",
    description: "Heavy-duty eye bolts for lifting"
  },
  {
    id: 53,
    image: img53,
    title: "Stud Bolts & Nuts",
    alt: "Stud Bolts Nuts Full Thread Tap End SS CS ASTM A193 B7 B8 B8M Mamta Steel Traders Mumbai India Supplier",
    description: "Precision stud bolts with nuts"
  },
  {
    id: 54,
    image: img54,
    title: "Socket Head Cap Screws",
    alt: "Socket Head Cap Screws Allen Bolts SS 304 316 DIN 912 ISO 4762 Mamta Steel Traders Mumbai India Supplier",
    description: "High-torque socket head screws"
  },
  {
    id: 55,
    image: img55,
    title: "Set Screws & Grub Screws",
    alt: "Set Screws Grub Screws SS CS Hex Socket Flat Point Cup Point Mamta Steel Traders Mumbai India Quality Supplier",
    description: "Locking set screws and grub screws"
  },
  {
    id: 56,
    image: img56,
    title: "Stainless Steel Angles",
    alt: "Stainless Steel Angles Equal Unequal L Section 304 316 Mamta Steel Traders Mumbai India Structural Steel Supplier",
    description: "Structural stainless steel angles"
  },
  {
    id: 57,
    image: img57,
    title: "Stainless Steel Channels",
    alt: "Stainless Steel Channels C Section U Channel 304 316 316L Mamta Steel Traders Mumbai India Premium Supplier",
    description: "Load-bearing stainless steel channels"
  },
  {
    id: 58,
    image: img58,
    title: "Stainless Steel I Beams",
    alt: "Stainless Steel I Beams H Beams Wide Flange 304 316 Structural Steel Mamta Steel Traders Mumbai India Supplier",
    description: "Heavy-duty stainless steel I beams"
  },
  {
    id: 59,
    image: img59,
    title: "Stainless Steel T Bars",
    alt: "Stainless Steel T Bars Tee Bars 304 316 316L Hot Rolled Mamta Steel Traders Mumbai India Quality Stockist",
    description: "Versatile stainless steel T bars"
  },
  {
    id: 60,
    image: img60,
    title: "Seamless Steel Tubes",
    alt: "Seamless Steel Tubes Precision Tubes Cold Drawn SS CS AS Mamta Steel Traders Mumbai India ISO Certified Supplier",
    description: "High-precision seamless steel tubes"
  },
  {
    id: 61,
    image: img61,
    title: "Heat Exchanger Tubes",
    alt: "Heat Exchanger Tubes U Tubes Boiler Tubes SS 304 316 321 Mamta Steel Traders Mumbai India Authorized Supplier",
    description: "Efficient heat exchanger tubes"
  },
  {
    id: 62,
    image: img62,
    title: "Hydraulic Tubes",
    alt: "Hydraulic Tubes Precision Seamless Tubes Cold Drawn Honed Mamta Steel Traders Mumbai India Quality Supplier",
    description: "High-pressure hydraulic tubes"
  },
  {
    id: 63,
    image: img63,
    title: "Instrumentation Tubes",
    alt: "Instrumentation Tubes Capillary Tubes SS 304 316 316L Small Diameter Mamta Steel Traders Mumbai India Supplier",
    description: "Precision instrumentation tubes"
  },
  {
    id: 64,
    image: img64,
    title: "Coil Tubes",
    alt: "Coil Tubes Seamless Coiled Tubing SS 304 316 316L Mamta Steel Traders Mumbai India Premium Quality Supplier",
    description: "Flexible coil tube solutions"
  },
  {
    id: 65,
    image: img65,
    title: "Condenser Tubes",
    alt: "Condenser Tubes Brass Copper SS Titanium Heat Exchanger Tubes Mamta Steel Traders Mumbai India Supplier",
    description: "Thermal condenser tubes"
  },
  {
    id: 66,
    image: img66,
    title: "Boiler Tubes",
    alt: "Boiler Tubes Superheater Tubes ASTM A213 T11 T22 T91 Mamta Steel Traders Mumbai India Quality Supplier",
    description: "High-temperature boiler tubes"
  },
  {
    id: 67,
    image: img67,
    title: "Steel Products Range",
    alt: "Complete Steel Products Range SS CS AS MS Pipes Tubes Plates Sheets Bars Flanges Fittings Mamta Steel Traders Mumbai India",
    description: "Complete range of steel products and materials"
  }
];

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function ProductShowcase() {
  const [visibleCount, setVisibleCount] = useState(6);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, productGallery.length));
  };

  const showLess = () => {
    setVisibleCount(6);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section 
      className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
      aria-labelledby="products-heading"
      itemScope
      itemType="https://schema.org/ProductCollection"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* SEO-Optimized Section Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <h2 
            id="products-heading"
            className="text-2xl sm:text-2xl lg:text-heading xl:text-heading font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight"
            itemProp="name"
          >
            Premium Quality{" "}
            <span className="text-[#f39c12]">Steel Products</span>{" "}
            & Materials
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-gray-300 max-w-5xl mx-auto leading-relaxed mb-3 sm:mb-4" itemProp="description">
            Comprehensive Range of Stainless Steel, Carbon Steel, Alloy Steel & Mild Steel Products - 
            Pipes, Tubes, Sheets, Plates, Bars, Flanges, Fittings & More
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto">
            Manufacturing & Supply Excellence Since Years | ISO Certified | Premium Quality Assurance | Mumbai India Stockist
          </p>
        </motion.div>

        {/* Product Gallery Grid - 3 columns */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {productGallery.slice(0, visibleCount).map((product) => (
            <motion.article
              key={product.id}
              className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              variants={cardVariants}
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                transition: { duration: 0.3 }
              }}
              data-testid={`product-image-${product.id}`}
              itemScope
              itemType="https://schema.org/Product"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img 
                  src={product.image} 
                  alt={product.alt}
                  title={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading={product.id <= 6 ? "eager" : "lazy"}
                  itemProp="image"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-4 sm:p-6">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-2" itemProp="name">
                      {product.title}
                    </h3>
                    <p className="text-xs sm:text-sm leading-relaxed" itemProp="description">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Premium Badge */}
                <div className="absolute top-3 right-3 transform translate-x-full group-hover:translate-x-0 transition-transform duration-300">
                  <span className="bg-[#f39c12] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    Premium Quality
                  </span>
                </div>
              </div>
              
              {/* Product Info Footer */}
              <div className="p-4 sm:p-5">
                <h4 className="text-sm sm:text-base font-semibold text-[#0d2b4e] dark:text-blue-400 mb-2 group-hover:text-[#f39c12] transition-colors duration-300">
                  {product.title}
                </h4>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-2">
                  <span className="text-xs bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full">
                    ISO Certified
                  </span>
                  <span className="text-xs bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 px-2 py-0.5 rounded-full">
                    Best Price
                  </span>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Mumbai Stockist | Quality Assured
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Load More / Show Less Buttons */}
        <motion.div 
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {visibleCount < productGallery.length && (
            <Button
              onClick={loadMore}
              className="bg-[#f39c12] hover:bg-[#e67e22] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              data-testid="button-load-more"
            >
              Load More Products
              <ChevronDown className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          )}
          
          {visibleCount > 6 && (
            <Button
              onClick={showLess}
              variant="outline"
              className="border-2 border-[#0d2b4e] text-[#0d2b4e] hover:bg-[#0d2b4e] hover:text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg transition-all duration-300 transform hover:scale-105"
              data-testid="button-show-less"
            >
              Show Less
            </Button>
          )}
        </motion.div>

        {/* Hidden SEO Content for Google Indexing */}
        <div className="sr-only" itemScope itemType="https://schema.org/Organization">
          <h3 itemProp="name">Mamta Steel Traders - Complete Steel Products Range Mumbai India</h3>
          <p itemProp="description">
            Best Quality Stainless Steel, Carbon Steel, Alloy Steel, Mild Steel Products Supplier Mumbai. 
            ISO Certified Steel Stockist India. Steel Pipes, Tubes, Sheets, Plates, Bars, Flanges, Fittings Manufacturer Mumbai.
            Premium quality steel products with ASTM, ASME, IS, DIN, EN standards compliance.
          </p>
          
          <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <span itemProp="addressLocality">Mumbai</span>, 
            <span itemProp="addressRegion">Maharashtra</span>, 
            <span itemProp="addressCountry">India</span>
          </div>

          <h4>Stainless Steel Grades Available:</h4>
          <p>SS 202, 303, 304, 304L, 304H, 316, 316L, 316H, 316Ti, 310, 310S, 321, 321H, 317L, 347, 347H, 904L, Duplex 2205, Super Duplex 2507</p>
          
          <h4>Carbon Steel Grades Available:</h4>
          <p>IS 2062 E250, E350, E450, EN1A, EN8, EN9, EN15, EN16, EN18, EN19, EN24, EN25, EN26, EN27, EN28, EN31, EN32, A36, St37, St52</p>
          
          <h4>Alloy Steel Grades Available:</h4>
          <p>SA387 Gr.5, Gr.9, Gr.11, Gr.12, Gr.22, Gr.91, 16Mo3, C45, EN19, EN24, Abrex 400, Hardox 400, Hardox 500</p>
          
          <h4>Mild Steel Grades Available:</h4>
          <p>IS2062 E250A, E250BR, E250BO, E250C, E350A, E350BR, E350BO, E350C, E410A, E410BR, E450BR, E450C, E550BR</p>

          <h4>Product Categories:</h4>
          <ul>
            <li>Stainless Steel Seamless Pipes - 304, 316, 316L, 321, 310 grades ASTM A312, ASME B36.19M standard</li>
            <li>Stainless Steel Welded Pipes - ERW, EFW pipes polished, pickled finish</li>
            <li>Carbon Steel Seamless Pipes - API 5L X42, X52, X60, X65, X70 grade high pressure pipes</li>
            <li>Alloy Steel Seamless Pipes - ASTM A335 P5, P9, P11, P22, P91 high temperature pipes</li>
            <li>Stainless Steel Sheets & Plates - BA, 2B, No.1, No.4, Hairline, Mirror finish sheets</li>
            <li>Carbon Steel Plates - Hot rolled, cold rolled, chequered plates</li>
            <li>Stainless Steel Round Bars - Bright, black, peeled round bars</li>
            <li>Stainless Steel Flanges - Weld neck, slip on, blind, threaded flanges ANSI B16.5</li>
            <li>Stainless Steel Pipe Fittings - Buttweld, socket weld, threaded fittings ASME B16.9, B16.11</li>
            <li>Stainless Steel Fasteners - Bolts, nuts, washers, studs A2, A4 grade</li>
            <li>Galvanized Steel Products - Hot dip galvanized pipes, sheets, coils</li>
            <li>Nickel Alloy Products - Inconel, Monel, Hastelloy pipes, plates, fittings</li>
            <li>Titanium Products - Grade 2, Grade 5 titanium pipes, plates, bars</li>
            <li>Copper & Brass Products - Copper tubes, brass fittings, copper sheets</li>
            <li>Aluminum Products - Aluminum pipes, plates, sheets, bars, coils</li>
          </ul>

          <h4>Industries Served:</h4>
          <p>Oil & Gas, Petrochemical, Chemical Processing, Power Generation, Pharmaceutical, Food Processing, Construction, Automotive, Aerospace, Marine, Sugar, Paper, Cement, Fertilizer, Mining</p>

          <h4>Quality Certifications:</h4>
          <p>ISO 9001:2015, MSME Certified, ASTM Approved, ASME Compliant, EN Standards, DIN Standards, Material Test Certificates (MTC) as per EN 10204 3.1/3.2</p>

          <h4>Services Offered:</h4>
          <p>Steel Supply, Steel Stockist, Steel Import, Steel Export, Steel Distribution, Custom Cutting, Custom Fabrication, Material Testing, Technical Support, Fast Delivery, Competitive Pricing</p>

          <p itemProp="keywords">
            Steel Supplier Mumbai, Steel Stockist India, Stainless Steel 304 316 316L Mumbai, Carbon Steel Pipes Mumbai, 
            Steel Sheets Plates Mumbai, Steel Bars Mumbai, Steel Flanges Mumbai, Steel Fittings Mumbai, 
            Best Steel Price Mumbai, ISO Certified Steel Supplier, ASTM Steel Products, ASME Steel Products,
            Seamless Pipes Mumbai, Welded Pipes Mumbai, Steel Tubes Mumbai, Round Bars Mumbai, Flat Bars Mumbai,
            Square Bars Mumbai, Hex Bars Mumbai, Steel Coils Mumbai, Steel Sheets Mumbai, Steel Plates Mumbai,
            Buttweld Fittings Mumbai, Socket Weld Fittings Mumbai, Threaded Fittings Mumbai, Weld Neck Flanges Mumbai,
            Slip On Flanges Mumbai, Blind Flanges Mumbai, Threaded Flanges Mumbai, Steel Bolts Mumbai, Steel Nuts Mumbai,
            Steel Washers Mumbai, Steel Studs Mumbai, Galvanized Steel Mumbai, Chequered Plates Mumbai, Perforated Sheets Mumbai,
            Expanded Metal Mumbai, Steel Wire Mumbai, Steel Gratings Mumbai, Heat Exchanger Tubes Mumbai, Boiler Tubes Mumbai,
            Condenser Tubes Mumbai, Hydraulic Tubes Mumbai, Instrumentation Tubes Mumbai, Tool Steel Mumbai, Spring Steel Mumbai,
            Bearing Steel Mumbai, Nickel Alloy Mumbai, Titanium Mumbai, Copper Brass Mumbai, Aluminum Mumbai,
            Steel Manufacturer Mumbai, Steel Exporter India, Steel Importer Mumbai, Quality Steel Supplier India
          </p>
        </div>
      </div>
    </section>
  );
}
