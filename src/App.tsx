import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import SiglaAviacao from "./pages/SiglaAviacao";
import SiglaCarga from "./pages/SiglaCarga";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import ProdutosAereo from "./pages/ProdutosAereo";
import ProdutosCarga from "./pages/ProdutosCarga";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sigla-aviacao" element={<SiglaAviacao />} />
          <Route path="/sigla-carga" element={<SiglaCarga />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/produtos/aereo" element={<ProdutosAereo />} />
          <Route path="/produtos/carga" element={<ProdutosCarga />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
