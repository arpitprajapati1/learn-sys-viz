import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { useState } from "react";
import { Menu } from "lucide-react";
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

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" themes={["light", "dark", "blue", "red"]}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <div className="flex min-h-screen">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          
          {/* Mobile menu button */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden fixed top-4 left-4 z-30 p-2 rounded-lg bg-[hsl(var(--sidebar-bg))] text-[hsl(var(--sidebar-text))] shadow-lg"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>

          <main className="flex-1 lg:ml-64 w-full">
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
    </ThemeProvider>
  </QueryClientProvider>
  );
};

export default App;
