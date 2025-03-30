
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Vehicles from "./pages/Vehicles";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import VehicleDetail from "./pages/VehicleDetail";
<<<<<<< HEAD
import Services from "./pages/Services";


=======
>>>>>>> 772e7919616819739c173236c0e5e24b22fb3798

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicules" element={<Vehicles />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/vehicule/:id" element={<VehicleDetail />} />
          <Route path="/vehicule/:id/specs" element={<VehicleDetail />} />
          <Route path="/vehicule/:id/contact" element={<VehicleDetail />} />
<<<<<<< HEAD
          <Route path="/services" element={<Services />} />
=======
>>>>>>> 772e7919616819739c173236c0e5e24b22fb3798
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
