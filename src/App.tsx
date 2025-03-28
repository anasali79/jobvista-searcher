
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import JobDetail from "./pages/JobDetail";
import NotFound from "./pages/NotFound";
import Employers from "./pages/Employers";
import Resources from "./pages/Resources";
import PostJob from "./pages/PostJob";
import RocketAnimation from "./components/RocketAnimation";
import { ThemeProvider } from "./components/ThemeProvider";

// New page imports
import JobAlerts from "./pages/JobAlerts";
import Profile from "./pages/Profile";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import HelpCenter from "./pages/HelpCenter";

// Create a Next.js-like structure with React Router
const queryClient = new QueryClient();

const App = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    // Disable animation after it has been shown once in the session
    const hasShownAnimation = sessionStorage.getItem('rocketAnimationShown');
    if (hasShownAnimation) {
      setShowAnimation(false);
    } else {
      sessionStorage.setItem('rocketAnimationShown', 'true');
    }
  }, []);

  return (
    <ThemeProvider defaultTheme="light">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {showAnimation && <RocketAnimation />}
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/job/:id" element={<JobDetail />} />
              <Route path="/employers" element={<Employers />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/post-job" element={<PostJob />} />
              
              {/* New routes */}
              <Route path="/job-alerts" element={<JobAlerts />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/help" element={<HelpCenter />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
