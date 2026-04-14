import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import toast from "react-hot-toast";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  const products = [
    {
      id: 9,
      name: "A2 Gir Cow Ghee",
      category: "dairy-products",
      image: "/assets/products/a2-gir-cow-ghee/Cow Ghee_3.png",
      newImage: "/assets/products/a2-gir-cow-ghee/Cow Ghee_3.png",
      description: "Premium A2 Gir Cow Ghee made from the milk of indigenous Gir cows, known for its rich flavor, golden color, and traditional Ayurvedic benefits.",
      details: {
        origin: "Gujarat, India",
        processing: "Traditional bilona method",
        packaging: "Glass jars, 500g, 1kg, 5kg containers",
        certifications: ["FSSAI", "Organic", "A2 Milk Certified"],
        applications: ["Cooking", "Traditional medicine", "Ayurvedic treatments", "Religious ceremonies"],
        specifications: {
          fatContent: "99.5-99.9%",
          moisture: "< 0.5%",
          color: "Golden yellow",
          shelfLife: "12 months",
          smokePoint: "250°C",
          meltingPoint: "32-35°C",
          acidity: "< 0.5%",
          peroxideValue: "< 1.0 meq/kg"
        }
      },
      features: [
        "Made from A2 milk of Gir cows",
        "Traditional bilona churning method",
        "Rich in healthy fats and vitamins",
        "High smoke point for cooking"
      ]
    },
    {
      id: 10,
      name: "Wild Forest Honey",
      category: "natural-products",
      image: "/assets/products/wild-forest-honey/honey_4.png",
      newImage: "/assets/products/wild-forest-honey/honey_4.png",
      description: "Pure wild forest honey collected from natural beehives in pristine forest areas, known for its rich flavor, natural sweetness, and numerous health benefits.",
      details: {
        origin: "Western Ghats, India",
        processing: "Raw, unfiltered, unprocessed",
        packaging: "Glass jars, 250g, 500g, 1kg containers",
        certifications: ["FSSAI", "Organic", "Raw Honey Certified"],
        applications: ["Natural sweetener", "Traditional medicine", "Skincare", "Culinary uses", "Health supplements"],
        specifications: {
          moisture: "< 18%",
          sugarContent: "80-85%",
          color: "Golden amber",
          shelfLife: "Indefinite",
          viscosity: "Medium to thick",
          crystallization: "Natural process"
        }
      },
      features: [
        "100% pure and natural",
        "No artificial additives",
        "Rich in antioxidants",
        "Natural antibacterial properties"
      ]
    },
    {
      id: 1,
      name: "Banana Powder",
      category: "natural-foods",
      image: "/assets/products/banana-powder/Banana-Powder.webp",
      newImage: "/assets/products/banana-powder/banana-powder-packaging.jpg",
      description: "Premium 100% natural dehydrated banana powder made from carefully selected ripe bananas, perfect for natural food applications and nutritional supplements.",
      details: {
        origin: "Kerala, India",
        processing: "Dehydrated and finely ground",
        packaging: "25kg bags, 1kg retail packs",
        certifications: ["ISO 22000:2025", "HACCP", "FSSAI"],
        applications: ["Bakery products", "Smoothies", "Nutritional supplements", "Baby food"],
        specifications: {
          moisture: "< 5%",
          protein: "3.5-4.5%",
          fiber: "8-12%",
          shelfLife: "24 months"
        }
      },
      features: [
        "Rich in potassium and natural sugars",
        "No artificial preservatives",
        "Consistent quality and taste",
        "Suitable for gluten-free products"
      ]
    },
    {
      id: 8,
      name: "Moringa Powder",
      category: "natural-foods",
      image: "/assets/products/moringa-powder/moringa-leaves-harvest.jpg",
      newImage: "/assets/products/moringa-powder/moringa-powder-packaging.jpg",
      description: "Nutrient-rich 100% natural moringa powder made from shade-dried moringa leaves, perfect for health supplements and natural food fortification.",
      details: {
        origin: "Tamil Nadu, India",
        processing: "Shade-dried and finely ground",
        packaging: "10kg, 25kg bags, 500g retail packs",
        certifications: ["ISO 22000:2025", "Organic", "FSSAI"],
        applications: ["Smoothies", "Supplements", "Baking", "Soups"],
        specifications: {
          moisture: "< 7%",
          protein: "20-28%",
          fiber: "18-22%",
          shelfLife: "18 months"
        }
      },
      features: [
        "High in vitamins and minerals",
        "Rich in antioxidants",
        "Supports immune health",
        "Natural energy booster"
      ]
    },
    {
      id: 2,
      name: "Turmeric Powder",
      category: "spices",
      image: "/assets/products/turmeric-powder/Turmeric-Powder.webp",
      newImage: "/assets/products/turmeric-powder/turmeric-applications.jpg",
      description: "Premium organic turmeric powder with high curcumin content, sourced from the finest rhizomes of Karnataka and Tamil Nadu.",
      details: {
        origin: "Karnataka & Tamil Nadu, India",
        processing: "Sun-dried and ground",
        packaging: "50kg bags, 5kg bulk packs",
        certifications: ["ISO 22000:2025", "Organic", "FSSAI"],
        applications: ["Cooking", "Traditional medicine", "Cosmetics", "Food coloring"],
        specifications: {
          curcumin: "3-5%",
          moisture: "< 12%",
          ash: "< 7%",
          shelfLife: "36 months"
        }
      },
      features: [
        "High curcumin content",
        "Natural anti-inflammatory properties",
        "Vibrant golden color",
        "Traditional Ayurvedic benefits"
      ]
    },
    {
      id: 3,
      name: "Guntur Red Chilli Powder",
      category: "spices",
      image: "/assets/products/red-chilli-powder/Red-Chilli-Powder.webp",
      newImage: "/assets/products/red-chilli-powder/chilli-powder-applications.jpg",
      description: "Fiery red chilli powder from the famous Guntur region, known for its intense heat and rich flavor profile.",
      details: {
        origin: "Guntur, Andhra Pradesh, India",
        processing: "Sun-dried and ground",
        packaging: "25kg bags, 1kg retail packs",
        certifications: ["ISO 22000:2025", "FSSAI", "Spice Board"],
        applications: ["Cooking", "Pickles", "Sauces", "Seasoning"],
        specifications: {
          heatLevel: "High (50,000-100,000 SHU)",
          moisture: "< 10%",
          color: "Deep red",
          shelfLife: "24 months"
        }
      },
      features: [
        "Intense heat and flavor",
        "Rich in capsaicin",
        "Natural preservative properties",
        "Authentic South Indian taste"
      ]
    },
    {
      id: 4,
      name: "Cumin Seeds",
      category: "spices",
      image: "/assets/products/cumin-seeds/Cumin-Seed.webp",
      newImage: "/assets/products/cumin-seeds/cumin-applications.jpg",
      description: "Premium quality cumin seeds with intense aroma and flavor, perfect for both whole and ground applications.",
      details: {
        origin: "Rajasthan & Gujarat, India",
        processing: "Cleaned and graded",
        packaging: "50kg bags, 5kg bulk packs",
        certifications: ["ISO 22000:2025", "FSSAI", "Spice Board"],
        applications: ["Cooking", "Pickles", "Bread", "Seasoning"],
        specifications: {
          moisture: "< 8%",
          foreignMatter: "< 1%",
          oilContent: "2-4%",
          shelfLife: "36 months"
        }
      },
      features: [
        "Intense aromatic flavor",
        "High essential oil content",
        "Traditional digestive benefits",
        "Versatile culinary applications"
      ]
    },
    {
      id: 5,
      name: "Banana Fiber",
      category: "textiles",
      image: "/assets/products/banana-fiber/Banana-Fiber.webp",
      newImage: "/assets/products/banana-fiber/banana-fiber-products.jpg",
      description: "Sustainable banana fiber extracted from banana plant stems, perfect for eco-friendly textiles and handicrafts.",
      details: {
        origin: "Kerala & Karnataka, India",
        processing: "Extracted and processed",
        packaging: "Bales of 100kg",
        certifications: ["Organic", "Fair Trade", "Eco-friendly"],
        applications: ["Textiles", "Handicrafts", "Paper", "Ropes"],
        specifications: {
          fiberLength: "2-4 meters",
          tensileStrength: "High",
          color: "Natural cream to brown",
          sustainability: "100% biodegradable"
        }
      },
      features: [
        "100% biodegradable",
        "Sustainable alternative to synthetic fibers",
        "Strong and durable",
        "Supports rural artisans"
      ]
    },
    {
      id: 6,
      name: "Kondapalli Toys",
      category: "handicrafts",
      image: "/assets/products/kondapalli-toys/Kondapalli-Toys.webp",
      newImage: "/assets/products/kondapalli-toys/kondapalli-toys-1.jpg",
      description: "Traditional wooden toys from Kondapalli village, handcrafted by skilled artisans using age-old techniques. 🌱 Eco-friendly and sustainable.",
      isEcoFriendly: true,
      details: {
        origin: "Kondapalli, Andhra Pradesh, India",
        processing: "Hand-carved and painted",
        packaging: "Gift boxes, bulk packaging",
        certifications: ["GI Tag", "Handmade", "Traditional"],
        applications: ["Children's toys", "Collectibles", "Gifts", "Decor"],
        specifications: {
          material: "Soft wood (Tella Poniki)",
          finish: "Non-toxic paints",
          size: "Various sizes available",
          craftsmanship: "Hand-carved"
        }
      },
      features: [
        "Traditional craftsmanship",
        "Non-toxic and child-safe",
        "Cultural heritage preservation",
        "Supports local artisans"
      ]
    },
    {
      id: 7,
      name: "Black Tea Powder",
      category: "beverages",
      image: "/assets/products/black-tea-powder/Black-Tea-Powder.webp",
      newImage: "/assets/products/black-tea-powder/tea-applications.jpg",
      description: "Premium black tea powder from Assam and Darjeeling regions, perfect for instant tea preparations and food applications.",
      details: {
        origin: "Assam & Darjeeling, India",
        processing: "Fermented and ground",
        packaging: "25kg bags, 1kg retail packs",
        certifications: ["ISO 22000:2025", "FSSAI", "Tea Board"],
        applications: ["Instant tea", "Food coloring", "Bakery", "Beverages"],
        specifications: {
          caffeine: "2-4%",
          theaflavins: "1-2%",
          moisture: "< 5%",
          shelfLife: "24 months"
        }
      },
      features: [
        "Rich in antioxidants",
        "Consistent quality",
        "Versatile applications",
        "Traditional Indian tea taste"
      ]
    }
  ];

  const categories = [
    { id: "all", name: "All Products" },
    { id: "dairy-products", name: "Dairy Products" },
    { id: "natural-products", name: "Natural Products" },
    { id: "spices", name: "Spices" },
    { id: "natural-foods", name: "Natural Foods" },
    { id: "textiles", name: "Textiles" },
    { id: "handicrafts", name: "Handicrafts" },
    { id: "beverages", name: "Beverages" }
  ];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 sm:pt-20 lg:pt-24">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center animate-in fade-in duration-1000">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 gradient-text">
                Our Products
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
                Discover our premium collection of 100% natural Indian food products, spices, and traditional handicrafts 
                that bring the authentic taste and culture of India to the world.
              </p>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 sm:py-12 bg-card/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {categories.map((category, index) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className="category-filter animate-in fade-in duration-500 text-xs sm:text-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-8 sm:py-12 lg:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product, index) => (
                <div
                  key={product.id}
                  className="group bg-card rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden animate-in fade-in duration-1000 product-card"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden h-48 sm:h-56 lg:h-64">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover image-hover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Product Content */}
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex gap-2">
                        <Badge variant="secondary" className="capitalize badge-animate text-xs">
                          {product.category.replace('-', ' ')}
                        </Badge>
                        {product.isEcoFriendly && (
                          <Badge variant="default" className="bg-green-600 hover:bg-green-700 badge-animate text-xs sm:text-sm font-semibold animate-pulse text-white shadow-sm whitespace-nowrap">
                            🌱 Eco-Friendly
                          </Badge>
                        )}
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-muted-foreground mb-4 line-clamp-3">
                      {product.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Key Features:</h4>
                      <ul className="space-y-1">
                        {product.features.slice(0, 2).map((feature, idx) => (
                          <li key={idx} className="text-xs sm:text-sm text-muted-foreground flex items-center">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Specifications */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Specifications:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                        {Object.entries(product.details.specifications).slice(0, 4).map(([key, value]) => (
                          <div key={key} className="flex justify-between">
                            <span className="text-muted-foreground capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}:
                            </span>
                            <span className="font-medium">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Certifications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.details.certifications.slice(0, 3).map((cert, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs badge-animate">
                            {cert}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Applications */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-2 text-sm sm:text-base">Applications:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.details.applications.slice(0, 3).map((app, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs badge-animate">
                            {app}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      className="w-full group-hover:bg-primary/90 transition-colors text-sm sm:text-base"
                      onClick={() => {
                        if (product.name === "Kondapalli Toys") {
                          navigate('/kondapalli-toys');
                        } else {
                          navigate(`/products/${product.name.replace(/\s+/g, '-')}`);
                        }
                      }}
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="animate-in fade-in duration-1000">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 gradient-text">
                Ready to Export?
              </h2>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Get in touch with us to discuss your requirements and receive detailed quotations 
                for any of our premium products.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button size="lg" className="btn-primary w-full sm:w-auto" onClick={() => navigate('/contact')}>
                  Request Quotation
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto"
                  onClick={handleBrochureClick}
                >
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products; 