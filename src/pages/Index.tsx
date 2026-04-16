import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RecruitmentSection from "@/components/RecruitmentSection";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="w-full space-y-0">
      <Helmet>
        <title>Thrayana | Premium Organic Ashwagandha, Honey & Spices Exporter</title>
        <meta name="description" content="Thrayana is a leading exporter of premium organic Indian products, including Ashwagandha, Wild Forest Honey, and eco-friendly Bagasse Cutlery. Quality and authenticity in every batch." />
        <link rel="canonical" href="https://www.thrayana.com/" />
      </Helmet>
      <Header />
      <HeroSection />
      <RecruitmentSection />
      <ProductsSection />
      <Footer />
    </div>
  );
};

export default Index;
