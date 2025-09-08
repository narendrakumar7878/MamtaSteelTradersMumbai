import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useContactScrollToTop } from "@/hooks/useScrollToTop";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import Solutions from "@/pages/Solutions";
import Certificate from "@/pages/Certificate";
import Contact from "@/pages/Contact";
import TechnicalInfo from "@/pages/TechnicalInfo";
import TechnicalInformation from "@/pages/technicalInformation";
import ChemicalComposition from "@/pages/chemicalComposition";
import SS300And200SeriesChemicalComposition from "@/pages/ss300And200SeriesChemicalComposition";
import StainlessSteelPipeSpecification from "@/pages/stainlessSteelPipeSpecification";
import CarbonAndAlloyPipeSpecifications from "@/pages/carbonAndAlloyPipeSpecifications";
import AmsStandardMaterial from "@/pages/amsStandardMaterial";
import Pipestubes from "@/pages/pipestubes";
import PlatesSheets from "@/pages/platesSheets";
import Bars from "@/pages/bars";
import Flanges from "@/pages/flanges";
import Fittings from "@/pages/fittings";
import Fasteners from "@/pages/fasteners";
import AnglesChannels from "@/pages/AnglesChannels";
import NotFound from "@/pages/not-found";
// Product Pages
import StainlessSteelPipesAndTubes from "@/pages/product/pipes-tubes/stainless-steel-pipes-tubes";
import CarbonSteelPipes from "@/pages/product/pipes-tubes/carbon-steel";
import AlloySteelPipes from "@/pages/product/pipes-tubes/alloy-steel-pipe";
import StainlessSteelPlates from "@/pages/product/plates-sheets/stainless-steel-plates";
import StainlessSteelRoundBars from "@/pages/product/round-bars/stainless-steel-round-bars";
import StainlessSteelFlanges from "@/pages/product/flanges/stainless-steel";
import HighTensileFasteners from "@/pages/product/fasteners/high-tensile";

// Flange Pages
import CarbonSteelFlanges from "@/pages/product/flanges/carbon-steel";
import AlloySteelFlanges from "@/pages/product/flanges/alloy-steel";
import NickelAlloyFlanges from "@/pages/product/flanges/nickel-alloy";
import InconelFlanges from "@/pages/product/flanges/inconel";
import IncoloyFlanges from "@/pages/product/flanges/incoloy";

// Fitting Pages
import ButtweldFittings from "@/pages/product/fittings/buttweld-fittings";
import ForgedFittings from "@/pages/product/fittings/forged-fittings";

// Welding Electrode Pages
import StainlessSteelElectrodes from "@/pages/product/welding-electrodes/stainless-steel-electrode";
import ERCuNiWire from "@/pages/product/welding-electrodes/ercuni-wire-copper-nickel";

// Galvanized Pages
import HotDipGalvanizedAngles from "@/pages/product/galvanized/hot-dip-galvanized-angles";
import HotDipGalvanizedChannels from "@/pages/product/galvanized/hot-dip-galvanized-channels";

// Pin Pages
import PTOPins from "@/pages/product/pins/pto-pins";
import PipeLinchPin from "@/pages/product/pins/pipe-linch-pin";

// Additional Pipe Pages
import NickelAlloyPipes from "@/pages/product/pipes-tubes/nickel-alloy";
import InconelPipes from "@/pages/product/pipes-tubes/inconel";
import MonelPipes from "@/pages/product/pipes-tubes/monel";
import HasteloyPipes from "@/pages/product/pipes-tubes/hastelloy";
import IncoloyPipes from "@/pages/product/pipes-tubes/incoloy";
import TitaniumPipes from "@/pages/product/pipes-tubes/titanium";
import CuproNickelPipes from "@/pages/product/pipes-tubes/cupro-nickel";
import TantalumPipes from "@/pages/product/pipes-tubes/tantalum";
import DuplexSuperDuplexPipes from "@/pages/product/pipes-tubes/duplex-super-duplex-pipes";
import CortenSteelPipes from "@/pages/product/pipes-tubes/corten-steel";
import EFSWPipes from "@/pages/product/pipes-tubes/efsw-saw-hsaw-lsaw-pipes";
import WeldedWearResistantPipes from "@/pages/product/pipes-tubes/welded-wear-resistant-pipe-ar400";
import PlateWeldedPipes from "@/pages/product/pipes-tubes/plate-welded-pipes";
import LargeODSeamlessPipes from "@/pages/product/pipes-tubes/large-od-seamless-pipes";

// Additional Plates & Sheets Pages
import AlloySteelPlates from "@/pages/product/plates-sheets/alloy-steel-plates";
import AluminiumAlloyPlates from "@/pages/product/plates-sheets/aluminium-alloy";
import CarbonSteelPlates from "@/pages/product/plates-sheets/carbon-steel";
import CopperNickelPlates from "@/pages/product/plates-sheets/copper-nickel";
import DuplexSuperDuplexPlates from "@/pages/product/plates-sheets/duplex-super-duplex";

// Additional Round Bars Pages
import AlloySteelRound from "@/pages/product/round-bars/alloy-steel-round";
import AluminiumAlloyRound from "@/pages/product/round-bars/aluminium-alloy";
import CarbonSteelRound from "@/pages/product/round-bars/carbon-steel";
import HotWorkSteel from "@/pages/product/round-bars/hot-work-steel";
import CopperNickelRound from "@/pages/product/round-bars/copper-nickel";
import ENSeries from "@/pages/product/round-bars/en-series";
import HasteloyRound from "@/pages/product/round-bars/hastelloy";
import PrecipitationHardeningSteel from "@/pages/product/round-bars/precipitation-hardening-steel";

// F Series Round Bars
import F11RoundBars from "@/pages/product/round-bars/alloy-steel-f-series/f11-round-bars";
import F22RoundBars from "@/pages/product/round-bars/alloy-steel-f-series/f22-round-bars";
import F91RoundBars from "@/pages/product/round-bars/alloy-steel-f-series/f91-round-bars";

// Cold Work Tool Steels
import AISIO1RoundBars from "@/pages/product/cold-work-tool-steels/o1-tool-steel";
import HCHCRD2RoundBars from "@/pages/product/cold-work-tool-steels/d2-tool-steel";
import A2ToolSteel from "@/pages/product/cold-work-tool-steels/a2-tool-steel";
import D3ToolSteel from "@/pages/product/cold-work-tool-steels/d3-tool-steel";

// Additional Flange Pages
import BlindFlanges from "@/pages/product/flanges/blind-flanges";
import LapJointFlanges from "@/pages/product/flanges/lap-joint-flanges";
import SlipOnFlanges from "@/pages/product/flanges/slip-on-flanges";
import SocketWeldFlanges from "@/pages/product/flanges/socket-weld-flanges";
import ThreadedFlanges from "@/pages/product/flanges/threaded-flanges";
import WeldNeckFlanges from "@/pages/product/flanges/weld-neck-flanges";
import TopBar from "@/components/TopBar";
import MainHeader from "@/components/MainHeader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Router() {
  // Enable scroll-to-top behavior for Contact page
  useContactScrollToTop();
  
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/products" component={Products} />
      <Route path="/technical-info" component={TechnicalInfo} />
      <Route path="/technicalInformation" component={TechnicalInformation} />
      <Route path="/chemicalComposition" component={ChemicalComposition} />
      <Route path="/ss300And200SeriesChemicalComposition" component={SS300And200SeriesChemicalComposition} />
      <Route path="/stainlessSteelPipeSpecification" component={StainlessSteelPipeSpecification} />
      <Route path="/carbonAndAlloyPipeSpecifications" component={CarbonAndAlloyPipeSpecifications} />
      <Route path="/ams-standard-material" component={AmsStandardMaterial} />
      <Route path="/pipes-tubes" component={Pipestubes} />
      <Route path="/plates-sheets" component={PlatesSheets} />
      <Route path="/bars" component={Bars} />
      <Route path="/flanges" component={Flanges} />
      <Route path="/fittings" component={Fittings} />
      <Route path="/fasteners" component={Fasteners} />
      <Route path="/angleschannels" component={AnglesChannels} />
      
      {/* Product Category Routes */}
      <Route path="/product/pipes-tubes/stainless-steel-pipes-tubes" component={StainlessSteelPipesAndTubes} />
      <Route path="/product/pipes-tubes/carbon-steel" component={CarbonSteelPipes} />
      <Route path="/product/pipes-tubes/alloy-steel-pipe" component={AlloySteelPipes} />
      <Route path="/product/plates-sheets/stainless-steel-plates" component={StainlessSteelPlates} />
      <Route path="/product/round-bars/stainless-steel-round-bars" component={StainlessSteelRoundBars} />
      
      {/* Flange Routes */}
      <Route path="/product/flanges/stainless-steel" component={StainlessSteelFlanges} />
      <Route path="/product/flanges/carbon-steel" component={CarbonSteelFlanges} />
      <Route path="/product/flanges/alloy-steel" component={AlloySteelFlanges} />
      <Route path="/product/flanges/nickel-alloy" component={NickelAlloyFlanges} />
      <Route path="/product/flanges/inconel" component={InconelFlanges} />
      <Route path="/product/flanges/incoloy" component={IncoloyFlanges} />
      
      {/* Fitting Routes */}
      <Route path="/product/fittings/buttweld-fittings" component={ButtweldFittings} />
      <Route path="/product/fittings/forged-fittings" component={ForgedFittings} />
      
      {/* Welding Electrode Routes */}
      <Route path="/product/welding-electrodes/stainless-steel-electrode" component={StainlessSteelElectrodes} />
      <Route path="/product/welding-electrodes/ercuni-wire-copper-nickel" component={ERCuNiWire} />
      
      {/* Galvanized Routes */}
      <Route path="/product/galvanized/hot-dip-galvanized-angles" component={HotDipGalvanizedAngles} />
      <Route path="/product/galvanized/hot-dip-galvanized-channels" component={HotDipGalvanizedChannels} />
      
      {/* Pin Routes */}
      <Route path="/product/pins/pto-pins" component={PTOPins} />
      <Route path="/product/pins/pipe-linch-pin" component={PipeLinchPin} />
      
      <Route path="/product/fasteners/high-tensile" component={HighTensileFasteners} />
      
      {/* Additional Pipe & Tubes Routes */}
      <Route path="/product/pipes-tubes/nickel-alloy" component={NickelAlloyPipes} />
      <Route path="/product/pipes-tubes/inconel" component={InconelPipes} />
      <Route path="/product/pipes-tubes/monel" component={MonelPipes} />
      <Route path="/product/pipes-tubes/hastelloy" component={HasteloyPipes} />
      <Route path="/product/pipes-tubes/incoloy" component={IncoloyPipes} />
      <Route path="/product/pipes-tubes/titanium" component={TitaniumPipes} />
      <Route path="/product/pipes-tubes/cupro-nickel" component={CuproNickelPipes} />
      <Route path="/product/pipes-tubes/tantalum" component={TantalumPipes} />
      <Route path="/product/pipes-tubes/duplex-super-duplex-pipes" component={DuplexSuperDuplexPipes} />
      <Route path="/product/pipes-tubes/corten-steel" component={CortenSteelPipes} />
      <Route path="/product/pipes-tubes/efsw-saw-hsaw-lsaw-pipes" component={EFSWPipes} />
      <Route path="/product/pipes-tubes/welded-wear-resistant-pipe-ar400" component={WeldedWearResistantPipes} />
      <Route path="/product/pipes-tubes/plate-welded-pipes" component={PlateWeldedPipes} />
      <Route path="/product/pipes-tubes/large-od-seamless-pipes" component={LargeODSeamlessPipes} />
      
      {/* Additional Plates & Sheets Routes */}
      <Route path="/product/plates-sheets/alloy-steel-plates" component={AlloySteelPlates} />
      <Route path="/product/plates-sheets/aluminium-alloy" component={AluminiumAlloyPlates} />
      <Route path="/product/plates-sheets/carbon-steel" component={CarbonSteelPlates} />
      <Route path="/product/plates-sheets/copper-nickel" component={CopperNickelPlates} />
      <Route path="/product/plates-sheets/duplex-super-duplex" component={DuplexSuperDuplexPlates} />
      
      {/* Additional Round Bars Routes */}
      <Route path="/product/round-bars/alloy-steel-round" component={AlloySteelRound} />
      <Route path="/product/round-bars/aluminium-alloy" component={AluminiumAlloyRound} />
      <Route path="/product/round-bars/carbon-steel" component={CarbonSteelRound} />
      <Route path="/product/round-bars/hot-work-steel" component={HotWorkSteel} />
      <Route path="/product/round-bars/copper-nickel" component={CopperNickelRound} />
      <Route path="/product/round-bars/en-series" component={ENSeries} />
      <Route path="/product/round-bars/hastelloy" component={HasteloyRound} />
      <Route path="/product/round-bars/precipitation-hardening-steel" component={PrecipitationHardeningSteel} />
      
      {/* F Series Round Bars Routes */}
      <Route path="/product/round-bars/f11-round-bars" component={F11RoundBars} />
      <Route path="/product/round-bars/f22-round-bars" component={F22RoundBars} />
      <Route path="/product/round-bars/f91-round-bars" component={F91RoundBars} />
      
      {/* Cold Work Tool Steels Routes */}
      <Route path="/product/cold-work-tool-steels/aisi-o1-round-bars" component={AISIO1RoundBars} />
      <Route path="/product/cold-work-tool-steels/hchcr-d2-round-bars" component={HCHCRD2RoundBars} />
      <Route path="/product/cold-work-tool-steels/a2-tool-steel" component={A2ToolSteel} />
      <Route path="/product/cold-work-tool-steels/d3-tool-steel" component={D3ToolSteel} />
      
      {/* Additional Flange Routes */}
      <Route path="/product/flanges/blind-flanges" component={BlindFlanges} />
      <Route path="/product/flanges/lap-joint-flanges" component={LapJointFlanges} />
      <Route path="/product/flanges/slip-on-flanges" component={SlipOnFlanges} />
      <Route path="/product/flanges/socket-weld-flanges" component={SocketWeldFlanges} />
      <Route path="/product/flanges/threaded-flanges" component={ThreadedFlanges} />
      <Route path="/product/flanges/weld-neck-flanges" component={WeldNeckFlanges} />
      
      <Route path="/solutions" component={Solutions} />
      <Route path="/certificate" component={Certificate} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col">
            <TopBar />
            <MainHeader />
            <div className="h-[2px] bg-[#f39c12] w-full" />
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
