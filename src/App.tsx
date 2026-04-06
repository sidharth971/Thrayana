import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Certificates from "./pages/Certificates";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import KondapalliToys from "./pages/KondapalliToys";
import ScrollToTop from "./components/ScrollToTop";
import Blog from "./pages/Blog";
import CreateBlog from "./pages/CreateBlog";
import BlogDetails from "./pages/BlogDetails";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productName" element={<ProductDetails />} />
          <Route path="/kondapalli-toys" element={<KondapalliToys />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/create" element={<CreateBlog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
