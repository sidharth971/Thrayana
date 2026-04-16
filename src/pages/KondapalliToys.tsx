import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const KondapalliToys = () => {
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  const toyImages = [
    "/assets/products/kondapalli-toys/kondapalli-toys-1.jpg",
    "/assets/products/kondapalli-toys/kondapalli-toys-2.jpg", 
    "/assets/products/kondapalli-toys/kondapalli-toys-3.jpg",
    "/assets/products/kondapalli-toys/kondapalli-toys-4.jpg",
    "/assets/products/kondapalli-toys/kondapalli-toys-5.jpg",
    "/assets/products/kondapalli-toys/kondapalli-toys-6.jpg"
  ];

  const toyCategories = [
    "Animals & Birds",
    "Religious Figures", 
    "Folk Characters",
    "Vehicles & Transport",
    "Household Items",
    "Educational Toys"
  ];

  const features = [
    "Hand-carved from soft wood (Tella Poniki)",
    "Non-toxic, child-safe paints",
    "Traditional craftsmanship techniques",
    "Cultural heritage preservation",
    "Supports local artisan communities",
    "Unique, one-of-a-kind pieces"
  ];

  const benefits = [
    "Promotes traditional Indian culture",
    "Safe for children of all ages",
    "Educational and developmental value",
    "Eco-friendly and sustainable",
    "Supports rural livelihoods",
    "Perfect for gifts and collections"
  ];

  const specifications = {
    material: "Soft wood (Tella Poniki)",
    finish: "Non-toxic paints",
    size: "Various sizes available",
    craftsmanship: "Hand-carved",
    origin: "Kondapalli, Andhra Pradesh",
    certification: "GI Tag, Traditional Craft"
  };

  const toysSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Traditional Kondapalli Toys",
    "image": "https://www.thrayana.com/assets/products/kondapalli-toys/Kondapalli-Toys.webp",
    "description": "Authentic, handcrafted Kondapalli toys made from soft wood and non-toxic paints. Traditional Indian heritage handicrafts.",
    "brand": {
      "@type": "Brand",
      "name": "Kondapalli Artisans"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Thrayana Private Limited"
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Kondapalli Toys | Traditional Indian Handcrafted Wooden Toys | Thrayana</title>
        <meta name="description" content="Discover the magic of Kondapalli Toys. Handcrafted wooden toys with the Geographical Indication (GI) tag, made by traditional artisans from Andhra Pradesh." />
        <link rel="canonical" href="https://www.thrayana.com/kondapalli-toys" />
        <script type="application/ld+json">
          {JSON.stringify(toysSchema)}
        </script>
      </Helmet>
      <Header />
      <main className="pt-16 sm:pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-in fade-in duration-1000">
              <div className="flex justify-center gap-2 mb-4">
                <Badge variant="secondary" className="text-sm sm:text-base">
                  Traditional Handicrafts
                </Badge>
                <Badge variant="default" className="bg-green-500 hover:bg-green-600 text-sm sm:text-base animate-pulse">
                  🌱 Eco-Friendly
                </Badge>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 gradient-text animate-in slide-in-from-bottom duration-1000">
                Kondapalli Toys
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 leading-relaxed animate-in slide-in-from-bottom duration-1000 delay-300">
                Discover the timeless beauty of Kondapalli toys, handcrafted by skilled artisans 
                using age-old techniques passed down through generations. Each piece tells a story 
                of India's rich cultural heritage and environmental sustainability.
              </p>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Our Toy Collection
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our diverse collection of traditional Kondapalli toys, each piece 
                carefully crafted to preserve the authentic artistry of Andhra Pradesh.
              </p>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {toyImages.map((image, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-700 overflow-hidden animate-in zoom-in duration-1000 hover:scale-105"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={image}
                      alt={`Kondapalli Toy ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      <Badge variant="default" className="bg-green-500 text-xs">
                        🌱 Eco-Friendly
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {toyCategories[index] || `Traditional Toy ${index + 1}`}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Handcrafted with traditional techniques and non-toxic materials
                    </p>
                    <div className="mt-3 flex gap-1">
                      <Badge variant="outline" className="text-xs">
                        Handmade
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Non-toxic
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Message */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-6 sm:p-8 lg:p-12">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Want to See More?
              </h3>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                We have an extensive collection of Kondapalli toys including custom designs, 
                bulk orders, and exclusive pieces. Contact us to explore our complete catalog 
                and discuss your specific requirements.
              </p>
              <Button 
                size="xl" 
                className="btn-primary text-base sm:text-lg px-8 py-6 rounded-2xl shadow-xl hover:shadow-2xl"
                onClick={() => navigate('/contact')}
              >
                Contact Us for More Images
              </Button>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-12 sm:py-16 lg:py-20 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Features */}
              <div className="animate-in slide-in-from-left duration-1000">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8">
                  Why Choose Kondapalli Toys?
                </h2>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-3 animate-in slide-in-from-left duration-500"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0 animate-pulse" />
                      <p className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors duration-300">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="animate-in slide-in-from-right duration-1000">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 sm:mb-8">
                  Benefits
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index} 
                      className="flex items-start space-x-3 animate-in slide-in-from-right duration-500"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0 animate-pulse" />
                      <p className="text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors duration-300">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Product Specifications
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                Each Kondapalli toy is crafted with attention to detail and traditional methods
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {Object.entries(specifications).map(([key, value], index) => (
                <Card 
                  key={key} 
                  className="hover:shadow-lg transition-all duration-500 hover:scale-105 animate-in zoom-in duration-700"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="font-semibold text-foreground mb-2 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{value}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Cultural Heritage */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="animate-in slide-in-from-left duration-1000">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                  Cultural Heritage
                </h2>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed animate-in slide-in-from-left duration-1000 delay-200">
                  Kondapalli toys represent more than just playthings - they are a living 
                  tradition that connects generations. The art of making these toys has been 
                  passed down through families for over 400 years, preserving the cultural 
                  identity of Andhra Pradesh.
                </p>
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 leading-relaxed animate-in slide-in-from-left duration-1000 delay-400">
                  Each toy is hand-carved from soft wood and painted with natural, non-toxic 
                  colors. The artisans use traditional tools and techniques that have remained 
                  unchanged for centuries, ensuring authenticity and quality.
                </p>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate('/contact')}
                  className="text-sm sm:text-base animate-in slide-in-from-left duration-1000 delay-600 hover:scale-105 transition-transform duration-300"
                >
                  Learn More About Our Process
                </Button>
              </div>
              <div className="relative animate-in slide-in-from-right duration-1000">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-500">
                  <img
                    src="/assets/products/kondapalli-toys/Kondapalli-Toys.webp"
                    alt="Traditional Kondapalli Toy Making"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How to Use Section */}
        <section className="py-12 sm:py-16 bg-background border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6 text-center">How to Use</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto text-center">
              Our Kondapalli toys are perfect for educational storytelling with children, serving as premium heritage-style home decor, or as a thoughtful gift for special occasions and cultural celebrations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6 px-4 sm:px-0">
              {[
                { src: "/assets/products/kondapalli-toys/Kondapalli-Toys.webp", alt: "Kondapalli Toy Decor" },
                { src: "/assets/products/kondapalli-toys/kondapalli-toys-1.jpg", alt: "Traditional Toy" },
                { src: "/assets/products/kondapalli-toys/kondapalli-toys-2.jpg", alt: "Artisan Work" },
                { src: "/assets/products/kondapalli-toys/kondapalli-toys-3.jpg", alt: "Educational Storytelling" },
                { src: "/assets/products/kondapalli-toys/Kondapalli-Toys.webp", alt: "Heritage Gift" }
              ].map((img, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl aspect-square shadow-md hover:shadow-xl transition-all duration-500 bg-muted">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 sm:py-16 lg:py-20 bg-card/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6">
              Ready to Explore Our Collection?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              Contact us to view our complete catalog, discuss custom designs, or place bulk orders. 
              We're here to help you find the perfect Kondapalli toys for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="btn-primary text-sm sm:text-base"
                onClick={() => navigate('/contact')}
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Us
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-sm sm:text-base"
                onClick={() => navigate('/products')}
              >
                View All Products
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default KondapalliToys; 