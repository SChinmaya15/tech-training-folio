import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Dashboard from "./pages/Dashboard";
import RAGChatbot from "./pages/RAGChatbot";
import CrewRostering from "./pages/CrewRostering";
import NorthwindAnalysis from "./pages/NorthwindAnalysis";
import EmailAutomation from "./pages/EmailAutomation";
import NotFound from "./pages/NotFound";
import IframePage from "./IframePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/crew-rostering" element={<IframePage url="https://crew-rostering-f.up.railway.app/" />} />    
            <Route path="/email-automation" element={<IframePage url="http://65.2.31.178" />} />
            <Route path="/northwind-analysis" element={<IframePage url="http://65.2.168.102:3000" />} />
            <Route path="/rag-chatbot" element={<RAGChatbot />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
