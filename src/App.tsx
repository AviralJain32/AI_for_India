
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Assemblies from "./pages/Assemblies";
import AIPro from "./pages/AIPro";
import AIBattles from "./pages/AIBattles";
import AITools from "./pages/AITools";
import AILabs from "./pages/AILabs";
import AIForAll from "./pages/AIForAll";
import News from "./pages/News";
import Layout from "./Layout";
import AIConference from "./pages/AIConference";
import AdvisoryBoard from "./pages/AdvisoryBoard";
import HackathonPage from "./pages/HackathonPage";
import ConferencePage from "./pages/ConferencePage";
import CollaboratorsPage from "./pages/CollaboratorsPage";
import OlympiadsPage from "./pages/OlympiadPage";
import ExpertsPage from "./pages/ExpertsPage";
import CMSpage from "./pages/CMSpage";
import RDProjects from "./pages/RDProjects";
import Team from "./pages/Team";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/assemblies" element={<Assemblies />} />
            <Route path="/ai-pro" element={<AIPro />} />
            <Route path="/ai-battles" element={<AIBattles />} />
            <Route path="/ai-tools" element={<AITools />} />
            <Route path="/ai-labs" element={<AILabs />} />
            <Route path="/ai-for-all" element={<AIForAll />} />
            <Route path="/news" element={<News />} />
            <Route path="/conference" element={<AIConference />} />
            <Route path="/board" element={<AdvisoryBoard />} />
            <Route path="/hackathons/:slug" element={<HackathonPage />} />
            <Route path="/conferences/:slug" element={<ConferencePage />} />
            <Route path="/olympiads/:slug" element={<OlympiadsPage />} />
            <Route path="/collaborators" element={<CollaboratorsPage />} />
            <Route path="/experts" element={<ExpertsPage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/rd-projects" element={<RDProjects />} />
            <Route path="/cms" element={<CMSpage />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
