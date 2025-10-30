import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Index from "./pages/Index";
import Refactoring from "./pages/Refactoring";
import DesignPatterns from "./pages/DesignPatterns";
import CreationalPatterns from "./pages/CreationalPatterns";
import StructuralPatterns from "./pages/StructuralPatterns";
import Learn from "./pages/Learn";
import Quiz from "./pages/Quiz";
import Chat from "./pages/Chat";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 ml-64">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/refactoring" element={<Refactoring />} />
            <Route path="/design-patterns" element={<DesignPatterns />} />
            <Route path="/creational-patterns" element={<CreationalPatterns />} />
            <Route path="/structural-patterns" element={<StructuralPatterns />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
