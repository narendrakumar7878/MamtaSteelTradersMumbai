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
      <Route path="/product/flanges/stainless-steel" component={StainlessSteelFlanges} />
      <Route path="/product/fasteners/high-tensile" component={HighTensileFasteners} />
      
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
