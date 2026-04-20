import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroImages = [
    "/assets/products/ashwagandha/ashwagandha_main.png",
    "/assets/products/wild-forest-honey/honey_4.png",
    "/assets/products/kondapalli-toys/Kondapalli-Toys.webp",
    "/assets/products/bagasse-cutlery/bagasse-main.png",
    "/assets/products/moringa-powder/moringa-powder-application.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden z-0">
      {/* Background Decorative Elements */}

      <div className="w-full h-full flex items-center justify-center px-3 sm:px-4 md:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12 pb-6 sm:pb-10">
          {/* Left Content */}
          <div className="flex-1 space-y-6 sm:space-y-8 animate-in slide-in-from-left duration-1000 text-center lg:text-left">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold leading-tight text-shadow-lg text-center lg:text-left" style={{ fontFamily: 'Playfair Display, serif' }}>
              Ashwagandha, Honey, Bagasse Cutlery, Indian Spices & 100% Natural Food <span className="gradient-text">Exporter</span> Globally
            </h1>
            
            <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed font-medium max-w-2xl mx-auto lg:mx-0">
              From premium Ashwagandha Root and pure Wild Forest Honey to traditional Indian spices and 
              100% natural food products, we export the finest quality natural products globally. Our Ashwagandha is 
              sustainably harvested and processed to preserve its potent adaptogenic properties, while our Wild Forest Honey is sourced from pristine 
              Western Ghats. Combined with authentic Indian spices and purely natural food products, we connect 
              farmers to global markets, making India a dominant player in natural food exports.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="btn-primary"
                onClick={() => navigate('/contact')}
              >
                Enquire Now
              </Button>
            </div>
          </div>

          {/* Right Image Slideshow */}
          <div className="flex-1 relative animate-in slide-in-from-right duration-1000 delay-300 w-full max-w-sm sm:max-w-md lg:max-w-xl mx-auto z-10 mt-4 sm:mt-6">
            <div className="relative w-full">
              <div className="relative h-56 sm:h-80 md:h-96 lg:h-[600px] overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl z-10">
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentIndex 
                        ? "opacity-100 transform translate-x-0" 
                        : "opacity-0 transform translate-x-full"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${["Ashwagandha Root Powder", "Honey", "Kondapalli Traditional Toys", "Sustainable Bagasse Cutlery", "Moringa Powder Export from India"][index]} - Premium Export Quality`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2 mt-3 sm:mt-6">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                      index === currentIndex 
                        ? "bg-primary shadow-lg" 
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              {/* Previous/Next Buttons */}
              <button
                onClick={() => setCurrentIndex((prev) => 
                  prev === 0 ? heroImages.length - 1 : prev - 1
                )}
                className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110 z-20"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={() => setCurrentIndex((prev) => 
                  (prev + 1) % heroImages.length
                )}
                className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 shadow-lg transition-all duration-300 hover:scale-110 z-20"
              >
                <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;