import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import toast from "react-hot-toast";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActiveLink = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname === path;
  };

  const getLinkClasses = (path: string) => {
    const baseClasses = "transition-colors font-medium cursor-pointer";
    const isActive = isActiveLink(path);
    
    if (isActive) {
      return `${baseClasses} text-yellow-400 font-semibold`;
    }
    return `${baseClasses} text-white hover:text-yellow-400`;
  };

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleBrochureClick = () => {
    navigate('/contact');
    // Show notification after a short delay to ensure page navigation
    setTimeout(() => {
      toast.success('📋 To get our comprehensive product brochure, please contact us through the form below. We will send you the detailed product catalog with specifications, pricing, and certifications via email within 24 hours.', {
        duration: 8000,
        position: 'top-center',
        style: {
          background: '#10B981',
          color: '#fff',
          fontSize: '16px',
          maxWidth: '600px',
          textAlign: 'center',
          padding: '20px 24px',
          borderRadius: '12px',
          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.2)',
          fontWeight: '500',
          lineHeight: '1.5'
        }
      });
    }, 500);
  };

  const navigateToContact = () => {
    navigate('/contact');
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="w-full border-b bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80 fixed top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Brand */}
          <button
            className="group flex items-center gap-2 sm:gap-3 focus:outline-none mr-2 sm:mr-4 lg:mr-6 xl:mr-8 min-w-0"
            onClick={() => navigate('/')}
            aria-label="Go to home"
          >
            <div className="h-12 sm:h-14 lg:h-16 xl:h-20 flex items-center">
              <img
                src="/assets/brand/Thrayana.jpg"
                alt="Thrayana Logo"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="inline-block max-w-[50vw] min-w-0 truncate">
              <h1
                className="whitespace-nowrap text-sm sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-extrabold tracking-tight text-yellow-400"
                style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}
              >
                THRAYANA PRIVATE LIMITED
              </h1>
            </div>
          </button>

          {/* Removed ISO certification badge and text */}

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a 
              onClick={() => navigate('/')}
              className={`${getLinkClasses('/')} text-base xl:text-lg`}
            >
              Home
            </a>
            <a 
              onClick={() => navigate('/about')}
              className={`${getLinkClasses('/about')} text-base xl:text-lg`}
            >
              About
            </a>
            <a 
              onClick={() => navigate('/products')}
              className={`${getLinkClasses('/products')} text-base xl:text-lg`}
            >
              Products
            </a>
            <a 
              onClick={() => navigate('/certificates')}
              className={`${getLinkClasses('/certificates')} text-base xl:text-lg`}
            >
              Certificates
            </a>
            <a 
              onClick={() => navigate('/blog')}
              className={`${getLinkClasses('/blog')} text-base xl:text-lg`}
            >
              Blog
            </a>
            <a 
              onClick={navigateToContact}
              className={`${getLinkClasses('/contact')} text-base xl:text-lg`}
            >
              Contact
            </a>
          </nav>

          {/* Desktop Contact Info & CTA */}
          <div className="hidden xl:flex items-center gap-6">
            <Button 
              onClick={handleBrochureClick}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-semibold text-lg px-6 py-3 rounded-2xl shadow-md"
            >
              Get The Brochure
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2 shrink-0">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isMobileMenuOpen ? 'bg-[#F5A812] text-black' : 'bg-transparent text-white hover:text-[#F5A812] hover:bg-[#F5A812]/20'} p-2 rounded-xl focus:ring-0 focus:outline-none`}
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-black" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t bg-black/95 backdrop-blur">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation */}
              <nav className="space-y-4">
                <a 
                  onClick={() => handleNavigation('/')}
                  className={`${getLinkClasses('/')} block text-xl py-2`}
                >
                  Home
                </a>
                <a 
                  onClick={() => handleNavigation('/about')}
                  className={`${getLinkClasses('/about')} block text-xl py-2`}
                >
                  About
                </a>
                <a 
                  onClick={() => handleNavigation('/products')}
                  className={`${getLinkClasses('/products')} block text-xl py-2`}
                >
                  Products
                </a>
                <a 
                  onClick={() => handleNavigation('/certificates')}
                  className={`${getLinkClasses('/certificates')} block text-xl py-2`}
                >
                  Certificates
                </a>
                <a 
                  onClick={() => handleNavigation('/blog')}
                  className={`${getLinkClasses('/blog')} block text-xl py-2`}
                >
                  Blog
                </a>
                <a 
                  onClick={() => handleNavigation('/contact')}
                  className={`${getLinkClasses('/contact')} block text-xl py-2`}
                >
                  Contact
                </a>
              </nav>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t">
                <Button 
                  onClick={handleBrochureClick}
                  className="btn-primary w-full mt-4"
                >
                  Get The Brochure
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;