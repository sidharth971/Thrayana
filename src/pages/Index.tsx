import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RecruitmentSection from "@/components/RecruitmentSection";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="w-full space-y-0">
      <Header />
      <HeroSection />
      <RecruitmentSection />
      <ProductsSection />
      <Footer />
    </div>
  );
};

export default Index;
