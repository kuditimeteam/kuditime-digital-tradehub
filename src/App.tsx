
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import CryptoPage from "./pages/CryptoPage";
import BillsPage from "./pages/BillsPage";
import GiftCardsPage from "./pages/GiftCardsPage";
import CalculatorPage from "./pages/CalculatorPage";
import AboutPage from "./pages/AboutPage";
import SupportPage from "./pages/SupportPage";
import FAQPage from "./pages/FAQPage";
import BlogPage from "./pages/BlogPage";
import CareersPage from "./pages/CareersPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import CookiesPage from "./pages/CookiesPage";
import DownloadPage from "./pages/DownloadPage";
import AssetsPage from "./pages/AssetsPage";
import BitcoinPage from "./pages/BitcoinPage";
import EthereumPage from "./pages/EthereumPage";
import UsdtPage from "./pages/UsdtPage";
import LitecoinPage from "./pages/LitecoinPage";
import TronPage from "./pages/TronPage";
import UsdcPage from "./pages/UsdcPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/crypto" element={<CryptoPage />} />
              <Route path="/bills" element={<BillsPage />} />
              <Route path="/giftcards" element={<GiftCardsPage />} />
              <Route path="/calculator" element={<CalculatorPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/support" element={<SupportPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/cookies" element={<CookiesPage />} />
              <Route path="/download" element={<DownloadPage />} />
              <Route path="/assets" element={<AssetsPage />} />
              <Route path="/assets/bitcoin" element={<BitcoinPage />} />
               <Route path="/assets/ethereum" element={<EthereumPage />} />
              <Route path="/assets/usdt" element={<UsdtPage />} />
              <Route path="/assets/tron" element={<TronPage />} />
              <Route path="/assets/usdc" element={<UsdcPage />} />
               <Route path="/assets/litecoin" element={<LitecoinPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
