import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const ProductDetails = () => {
  const { productName } = useParams();
  const navigate = useNavigate();

  // Force scroll to top immediately and after a delay
  useEffect(() => {
    // Immediate scroll using multiple methods
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Force scroll after component renders
    const timer1 = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
    }, 50);
    
    // Another scroll after DOM updates
    const timer2 = setTimeout(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
    }, 200);
    
    // Final scroll to ensure it works
    const timer3 = setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant'
      });
      document.documentElement.scrollTop = 0;
    }, 500);
    
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [productName]);

  const products = [
    {
      id: 9,
      name: "A2 Gir Cow Ghee",
      category: "dairy-products",
      mainImage: "/assets/products/a2-gir-cow-ghee/Cow Ghee_4.png",
      gallery: [
        "/assets/products/a2-gir-cow-ghee/Cow Ghee_2.png",
        "/assets/products/a2-gir-cow-ghee/Cow Ghee_3.png",
        "/assets/products/a2-gir-cow-ghee/Cow Ghee_1.png"
      ],
      description: "Premium A2 Gir Cow Ghee made from the milk of indigenous Gir cows, known for its rich flavor, golden color, and traditional Ayurvedic benefits. Our ghee is produced using the traditional bilona method that preserves all natural nutrients.",
      longDescription: "Our premium A2 Gir Cow Ghee is sourced from the finest Gir cows in Gujarat, India. The Gir breed is known for producing A2 milk, which contains the A2 beta-casein protein that is easier to digest and has numerous health benefits. The traditional bilona method involves churning curd to extract butter, which is then heated to produce pure ghee. This process preserves the natural nutrients and gives our ghee its distinctive golden color and rich aroma.",
      details: {
        origin: "Gujarat, India",
        processing: "Traditional bilona method",
        packaging: "Customized packaging",
        certifications: ["FSSAI", "Organic", "A2 Milk Certified", "Ayurvedic"],
        applications: ["Cooking", "Traditional medicine", "Ayurvedic treatments", "Religious ceremonies", "Skincare", "Hair care"],
        specifications: {
          fatContent: "99.5-99.9%",
          moisture: "< 0.5%",
          color: "Golden yellow",
          shelfLife: "12 months",
          smokePoint: "250°C",
          aroma: "Rich and nutty",
          texture: "Smooth and creamy",
          meltingPoint: "32-35°C",
          density: "0.91-0.93 g/cm³",
          acidity: "< 0.5%",
          peroxideValue: "< 1.0 meq/kg",
          freeFattyAcids: "< 0.3%",
          unsaponifiableMatter: "0.5-1.5%",
          iodineValue: "26-38",
          saponificationValue: "190-200"
        },
        nutritionalInfo: {
          calories: "900 kcal/100g",
          totalFat: "99.9g/100g",
          saturatedFat: "61.9g/100g",
          monounsaturatedFat: "28.7g/100g",
          polyunsaturatedFat: "3.7g/100g",
          cholesterol: "256mg/100g",
          vitaminA: "3069 IU/100g",
          vitaminE: "2.8mg/100g"
        }
      },
      features: [
        "Made from A2 milk of Gir cows",
        "Traditional bilona churning method",
        "Rich in healthy fats and vitamins",
        "High smoke point for cooking",
        "No artificial preservatives",
        "Ayurvedic properties"
      ],
      benefits: [
        "Supports digestive health",
        "Boosts immunity",
        "Rich in fat-soluble vitamins",
        "Anti-inflammatory properties",
        "Traditional healing benefits",
        "High heat stability for cooking"
      ]
    },
    {
      id: 10,
      name: "Wild Forest Honey",
      category: "natural-products",
      mainImage: "/assets/products/wild-forest-honey/honey_4.png",
      gallery: [
        "/assets/products/wild-forest-honey/honey_2.png",
        "/assets/products/wild-forest-honey/honey_3.png",
        "/assets/products/wild-forest-honey/honey_1.png"
      ],
      description: "Pure wild forest honey collected from natural beehives in pristine forest areas, known for its rich flavor, natural sweetness, and numerous health benefits. Our honey is raw, unfiltered, and unprocessed to preserve all natural nutrients and medicinal properties.",
      longDescription: "Our premium Wild Forest Honey is sourced from the pristine forests of the Western Ghats in India, where bees collect nectar from a diverse range of wildflowers, medicinal plants, and forest flora including neem, tulsi, jamun, and other indigenous species. This natural diversity gives our honey its unique flavor profile, rich nutritional content, and exceptional medicinal properties. The honey is collected using traditional methods that ensure minimal processing, preserving all natural enzymes, antioxidants, beneficial compounds, and pollen grains. Our forest honey undergoes natural fermentation and contains live enzymes that provide numerous health benefits. The Western Ghats region is a UNESCO World Heritage Site known for its biodiversity, making our honey a truly premium natural product.",
      details: {
        origin: "Western Ghats, India",
        processing: "Raw, unfiltered, unprocessed",
        packaging: "Customized packaging",
        certifications: ["FSSAI", "Organic", "Raw Honey Certified", "Forest Honey"],
        applications: ["Natural sweetener", "Traditional medicine", "Skincare", "Culinary uses", "Health supplements", "Wound healing"],
        specifications: {
          moisture: "< 18%",
          sugarContent: "80-85%",
          color: "Golden amber to dark amber",
          shelfLife: "Indefinite",
          viscosity: "Medium to thick",
          crystallization: "Natural process",
          pH: "3.4-6.1",
          density: "1.36-1.45 g/cm³",
          fructose: "38-40%",
          glucose: "31-35%",
          sucrose: "< 5%",
          maltose: "7-10%",
          waterActivity: "< 0.6",
          hydroxymethylfurfural: "< 40 mg/kg",
          diastaseActivity: "> 8 Schade units",
          proline: "> 180 mg/kg",
          electricalConductivity: "0.8-1.5 mS/cm",
          ashContent: "< 0.6%",
          insolubleMatter: "< 0.1%"
        },
        nutritionalInfo: {
          calories: "304 kcal/100g",
          carbohydrates: "82.4g/100g",
          sugars: "82.1g/100g",
          protein: "0.3g/100g",
          fiber: "0.2g/100g",
          sodium: "4mg/100g",
          potassium: "52mg/100g",
          calcium: "6mg/100g",
          iron: "0.4mg/100g",
          vitaminC: "0.5mg/100g",
          magnesium: "2mg/100g",
          phosphorus: "4mg/100g",
          zinc: "0.2mg/100g",
          copper: "0.04mg/100g",
          manganese: "0.08mg/100g",
          selenium: "0.8μg/100g",
          riboflavin: "0.04mg/100g",
          niacin: "0.12mg/100g",
          pantothenicAcid: "0.07mg/100g",
          vitaminB6: "0.02mg/100g",
          folate: "2μg/100g"
        }
      },
      features: [
        "100% pure and natural wild forest honey",
        "No artificial additives or preservatives",
        "Rich in antioxidants and flavonoids",
        "Natural antibacterial and antimicrobial properties",
        "Raw and unfiltered to preserve enzymes",
        "Wild forest sourced from UNESCO World Heritage Site",
        "Contains live enzymes and beneficial bacteria",
        "Natural crystallization process",
        "Traditional collection methods",
        "Medicinal plant nectar sources"
      ],
      benefits: [
        "Natural energy boost with slow-release sugars",
        "Powerful antioxidant properties",
        "Soothes sore throat and cough relief",
        "Wound healing and skin regeneration",
        "Digestive health and gut microbiome support",
        "Immune system enhancement",
        "Anti-inflammatory properties",
        "Natural sleep aid and relaxation",
        "Blood sugar regulation support",
        "Cardiovascular health benefits",
        "Traditional Ayurvedic medicinal properties",
        "Natural prebiotic effects"
      ]
    },
    {
      id: 1,
      name: "Banana Powder",
      category: "natural-foods",
      mainImage: "/assets/products/banana-powder/Banana-Powder.webp",
      gallery: [
        "/assets/products/banana-powder/banana-powder-process.jpg",
        "/assets/products/banana-powder/banana-powder-packaging.jpg",
        "/assets/products/banana-powder/banana-powder-application.jpg"
      ],
      description: "Premium dehydrated banana powder made from carefully selected ripe bananas, perfect for food processing and nutritional supplements. Our banana powder is produced using state-of-the-art dehydration technology that preserves the natural nutrients and flavor of fresh bananas.",
      longDescription: "Our premium banana powder is sourced from the finest Cavendish bananas grown in the fertile regions of Kerala. The bananas are carefully selected at peak ripeness to ensure maximum nutritional value and natural sweetness. The dehydration process removes moisture while preserving essential nutrients, making it an ideal ingredient for various food applications.",
      details: {
        origin: "Kerala, India",
        processing: "Dehydrated and finely ground",
        packaging: "Customized packaging",
        certifications: ["ISO 22000:2025", "HACCP", "FSSAI", "Organic"],
        applications: ["Bakery products", "Smoothies", "Nutritional supplements", "Baby food", "Protein shakes", "Ice cream"],
        specifications: {
          moisture: "< 5%",
          protein: "3.5-4.5%",
          fiber: "8-12%",
          shelfLife: "24 months",
          color: "Light cream to golden yellow",
          taste: "Natural banana flavor",
          solubility: "Excellent in water and milk"
        },
        nutritionalInfo: {
          calories: "350 kcal/100g",
          carbohydrates: "85g/100g",
          protein: "3.5g/100g",
          fiber: "8g/100g",
          potassium: "1200mg/100g",
          vitaminC: "15mg/100g"
        }
      },
      features: [
        "Rich in potassium and natural sugars",
        "No artificial preservatives",
        "Consistent quality and taste",
        "Suitable for gluten-free products",
        "High solubility for easy mixing",
        "Natural source of energy"
      ],
      benefits: [
        "Natural energy boost",
        "Supports digestive health",
        "Rich in essential minerals",
        "Ideal for sports nutrition",
        "Safe for children and elderly"
      ]
    },
    {
      id: 8,
      name: "Moringa Powder",
      category: "natural-foods",
      mainImage: "/assets/products/moringa-powder/moringa-leaves-harvest.jpg",
      gallery: [
        "/assets/products/moringa-powder/moringa-leaves-harvest.jpg",
        "/assets/products/moringa-powder/moringa-powder-packaging.jpg",
        "/assets/products/moringa-powder/moringa-powder-application.jpg"
      ],
      description: "Nutrient-rich moringa powder made from shade-dried moringa leaves, perfect for health supplements and food fortification.",
      longDescription: "Our moringa powder is made from carefully selected moringa leaves, shade-dried to preserve nutrients and finely ground to a vibrant green powder. Moringa is known as the 'miracle tree' for its exceptional nutritional profile, including high levels of protein, vitamins, minerals, and antioxidants. It is ideal for boosting immunity, supporting energy, and fortifying foods and beverages.",
      details: {
        origin: "Tamil Nadu, India",
        processing: "Shade-dried and finely ground",
        packaging: "Customized packaging",
        certifications: ["ISO 22000:2025", "Organic", "FSSAI"],
        applications: ["Smoothies", "Supplements", "Baking", "Soups", "Juices", "Energy bars"],
        specifications: {
          moisture: "< 7%",
          protein: "20-28%",
          fiber: "18-22%",
          shelfLife: "18 months",
          color: "Vibrant green",
          taste: "Earthy, slightly bitter",
          solubility: "Good in water and juices"
        },
        nutritionalInfo: {
          calories: "320 kcal/100g",
          protein: "25g/100g",
          fiber: "20g/100g",
          vitaminA: "6780 IU/100g",
          vitaminC: "17mg/100g",
          calcium: "185mg/100g",
          iron: "4mg/100g"
        }
      },
      features: [
        "High in vitamins and minerals",
        "Rich in antioxidants",
        "Supports immune health",
        "Natural energy booster",
        "Vibrant green color",
        "No additives or preservatives"
      ],
      benefits: [
        "Boosts immunity",
        "Supports energy and vitality",
        "Promotes healthy skin",
        "Aids digestion",
        "Rich in plant protein"
      ]
    },
    {
      id: 2,
      name: "Turmeric Powder",
      category: "spices",
      mainImage: "/assets/products/turmeric-powder/turmeric-applications.jpg",
      gallery: [
        "/assets/products/turmeric-powder/turmeric-rhizomes.jpg",
        "/assets/products/turmeric-powder/turmeric-processing.jpg",
        "/assets/products/turmeric-powder/turmeric-applications.jpg"
      ],
      description: "Premium organic turmeric powder with high curcumin content, sourced from the finest rhizomes of Karnataka and Tamil Nadu. Our turmeric is known for its vibrant color and potent medicinal properties.",
      longDescription: "Our premium turmeric powder is sourced from the finest rhizomes grown in the fertile soils of Karnataka and Tamil Nadu. The turmeric is carefully harvested, sun-dried, and ground to preserve its natural curcumin content and vibrant golden color. This traditional spice has been used in Ayurvedic medicine for centuries.",
      details: {
        origin: "Karnataka & Tamil Nadu, India",
        processing: "Sun-dried and ground",
        packaging: "Customized packaging",
        certifications: ["ISO 22000:2025", "Organic", "FSSAI", "USDA Organic"],
        applications: ["Cooking", "Traditional medicine", "Cosmetics", "Food coloring", "Supplements", "Skincare"],
        specifications: {
          curcumin: "3-5%",
          moisture: "< 12%",
          ash: "< 7%",
          shelfLife: "36 months",
          color: "Vibrant golden yellow",
          aroma: "Warm and earthy",
          particleSize: "Fine powder (80-100 mesh)"
        },
        nutritionalInfo: {
          calories: "354 kcal/100g",
          protein: "8g/100g",
          carbohydrates: "65g/100g",
          fiber: "21g/100g",
          curcumin: "3-5%",
          essentialOils: "3-5%"
        }
      },
      features: [
        "High curcumin content",
        "Natural anti-inflammatory properties",
        "Vibrant golden color",
        "Traditional Ayurvedic benefits",
        "Organic and pure",
        "No artificial additives"
      ],
      benefits: [
        "Anti-inflammatory properties",
        "Natural antioxidant",
        "Supports joint health",
        "Promotes healthy skin",
        "Traditional healing properties"
      ]
    },
    {
      id: 3,
      name: "Guntur Red Chilli Powder",
      category: "spices",
      mainImage: "/assets/products/red-chilli-powder/chilli-powder-applications.jpg",
      gallery: [
        "/assets/products/red-chilli-powder/guntur-chilli.jpg",
        "/assets/products/red-chilli-powder/chilli-processing.jpg",
        "/assets/products/red-chilli-powder/chilli-powder-applications.jpg"
      ],
      description: "Fiery red chilli powder from the famous Guntur region, known for its intense heat and rich flavor profile. These chillies are carefully selected and processed to maintain their authentic South Indian taste.",
      longDescription: "Guntur chillies are renowned worldwide for their exceptional heat and flavor. Grown in the fertile soils of Andhra Pradesh, these chillies are sun-dried and ground to create a powder that captures the authentic taste of South Indian cuisine. The intense heat and rich color make it perfect for traditional and modern cooking.",
      details: {
        origin: "Guntur, Andhra Pradesh, India",
        processing: "Sun-dried and ground",
        packaging: "Customized packaging",
        certifications: ["ISO 22000:2025", "FSSAI", "Spice Board", "GI Tag"],
        applications: ["Cooking", "Pickles", "Sauces", "Seasoning", "Marinades", "Traditional dishes"],
        specifications: {
          heatLevel: "High (50,000-100,000 SHU)",
          moisture: "< 10%",
          color: "Deep red",
          shelfLife: "24 months",
          aroma: "Intense and pungent",
          particleSize: "Fine powder (60-80 mesh)"
        },
        nutritionalInfo: {
          calories: "282 kcal/100g",
          protein: "12g/100g",
          carbohydrates: "49g/100g",
          fiber: "27g/100g",
          capsaicin: "0.1-1%",
          vitaminC: "144mg/100g"
        }
      },
      features: [
        "Intense heat and flavor",
        "Rich in capsaicin",
        "Natural preservative properties",
        "Authentic South Indian taste",
        "Consistent quality",
        "Traditional processing methods"
      ],
      benefits: [
        "Metabolism booster",
        "Rich in antioxidants",
        "Natural pain relief",
        "Supports weight management",
        "Traditional medicinal properties"
      ]
    },
    {
      id: 4,
      name: "Cumin Seeds",
      category: "spices",
      mainImage: "/assets/products/cumin-seeds/Cumin-Seed.webp",
      gallery: [
        "/assets/products/cumin-seeds/cumin-farm.jpg",
        "/assets/products/cumin-seeds/cumin-processing.jpg",
        "/assets/products/cumin-seeds/cumin-applications.jpg"
      ],
      description: "Premium quality cumin seeds with intense aroma and flavor, perfect for both whole and ground applications. Our cumin seeds are carefully selected and cleaned to ensure the highest quality.",
      longDescription: "Our premium cumin seeds are sourced from the arid regions of Rajasthan and Gujarat, where the climate and soil conditions create the perfect environment for growing high-quality cumin. The seeds are carefully harvested, cleaned, and graded to ensure consistent quality and flavor.",
      details: {
        origin: "Rajasthan & Gujarat, India",
        processing: "Cleaned and graded",
        packaging: "Customized packaging",
        certifications: ["ISO 22000:2025", "FSSAI", "Spice Board", "Organic"],
        applications: ["Cooking", "Pickles", "Bread", "Seasoning", "Traditional medicine", "Essential oils"],
        specifications: {
          moisture: "< 8%",
          foreignMatter: "< 1%",
          oilContent: "2-4%",
          shelfLife: "36 months",
          color: "Light brown to dark brown",
          aroma: "Warm and earthy",
          size: "Uniform size and shape"
        },
        nutritionalInfo: {
          calories: "375 kcal/100g",
          protein: "18g/100g",
          carbohydrates: "44g/100g",
          fiber: "11g/100g",
          essentialOils: "2-4%",
          iron: "66mg/100g"
        }
      },
      features: [
        "Intense aromatic flavor",
        "High essential oil content",
        "Traditional digestive benefits",
        "Versatile culinary applications",
        "Consistent quality",
        "Natural and pure"
      ],
      benefits: [
        "Digestive health support",
        "Rich in iron",
        "Antioxidant properties",
        "Traditional medicinal benefits",
        "Culinary versatility"
      ]
    },
    {
      id: 5,
      name: "Banana Fiber",
      category: "textiles",
      mainImage: "/assets/products/banana-fiber/Banana-Fiber.webp",
      gallery: [
        "/assets/products/banana-fiber/banana-fiber-extraction.jpg",
        "/assets/products/banana-fiber/banana-fiber-products.jpg",
        "/assets/products/banana-fiber/banana-fiber-sustainable.jpg"
      ],
      description: "Sustainable banana fiber extracted from banana plant stems, perfect for eco-friendly textiles and handicrafts. Our banana fiber is processed using traditional methods that support rural artisans.",
      longDescription: "Banana fiber is extracted from the stems of banana plants, a byproduct of banana cultivation. This sustainable fiber is processed using traditional methods that have been passed down through generations. The fiber is strong, durable, and completely biodegradable, making it an excellent eco-friendly alternative to synthetic fibers.",
      details: {
        origin: "Kerala & Karnataka, India",
        processing: "Extracted and processed",
        packaging: "Customized packaging",
        certifications: ["Organic", "Fair Trade", "Eco-friendly", "Handmade"],
        applications: ["Textiles", "Handicrafts", "Paper", "Ropes", "Bags", "Home decor"],
        specifications: {
          fiberLength: "2-4 meters",
          tensileStrength: "High",
          color: "Natural cream to brown",
          sustainability: "100% biodegradable",
          texture: "Smooth and soft",
          durability: "Long-lasting"
        },
        environmentalInfo: {
          biodegradability: "100%",
          carbonFootprint: "Minimal",
          waterUsage: "Low",
          pesticideFree: "Yes",
          renewable: "Yes"
        }
      },
      features: [
        "100% biodegradable",
        "Sustainable alternative to synthetic fibers",
        "Strong and durable",
        "Supports rural artisans",
        "Natural and eco-friendly",
        "Traditional processing methods"
      ],
      benefits: [
        "Environmental sustainability",
        "Supports local communities",
        "Reduces plastic waste",
        "Natural and hypoallergenic",
        "Promotes traditional crafts"
      ]
    },
    {
      id: 6,
      name: "Kondapalli Toys",
      category: "handicrafts",
      mainImage: "/assets/products/kondapalli-toys/Kondapalli-Toys.webp",
      gallery: [
        "/assets/products/kondapalli-toys/kondapalli-toys-1.jpg",
        "/assets/products/kondapalli-toys/kondapalli-toys-2.jpg",
        "/assets/products/kondapalli-toys/kondapalli-toys-3.jpg"
      ],
      description: "Traditional wooden toys from Kondapalli village, handcrafted by skilled artisans using age-old techniques. 🌱 Eco-friendly and sustainable.",
      longDescription: "Our Kondapalli toys are crafted by skilled artisans from the Kondapalli village in Andhra Pradesh, using traditional techniques passed down through generations. These toys are made from soft wood and painted with non-toxic colors, making them safe for children and environmentally friendly. Each piece is 100% biodegradable and supports sustainable practices.",
      isEcoFriendly: true,
      details: {
        origin: "Kondapalli, Andhra Pradesh, India",
        processing: "Hand-carved and painted",
        packaging: "Gift boxes, bulk packaging",
        certifications: ["GI Tag", "Handmade", "Traditional", "Eco-friendly"],
        applications: ["Children's toys", "Collectibles", "Gifts", "Decor", "Educational"],
        specifications: {
          material: "Soft wood (Tella Poniki)",
          finish: "Non-toxic paints",
          size: "Various sizes available",
          craftsmanship: "Hand-carved",
          sustainability: "100% biodegradable",
          safety: "Child-safe materials"
        },
        environmentalInfo: {
          biodegradability: "100%",
          carbonFootprint: "Minimal",
          waterUsage: "Low",
          pesticideFree: "Yes",
          renewable: "Yes"
        }
      },
      features: [
        "Traditional craftsmanship",
        "Non-toxic and child-safe",
        "Cultural heritage preservation",
        "Supports local artisans",
        "100% biodegradable",
        "Eco-friendly materials"
      ],
      benefits: [
        "Promotes traditional Indian culture",
        "Safe for children of all ages",
        "Educational and developmental value",
        "Eco-friendly and sustainable",
        "Supports rural livelihoods",
        "Perfect for gifts and collections"
      ]
    },
    {
      id: 7,
      name: "Black Tea Powder",
      category: "beverages",
      mainImage: "/assets/products/black-tea-powder/Black-Tea-Powder.webp",
      gallery: [
        "/assets/products/black-tea-powder/tea-gardens.jpg",
        "/assets/products/black-tea-powder/tea-processing.jpg",
        "/assets/products/black-tea-powder/tea-applications.jpg"
      ],
      description: "Premium black tea powder from Assam and Darjeeling regions, perfect for instant tea preparations and food applications. Our tea powder maintains the authentic taste of traditional Indian tea.",
      longDescription: "Our premium black tea powder is sourced from the finest tea gardens of Assam and Darjeeling, where the unique climate and soil conditions create exceptional tea leaves. The tea is carefully processed and ground to create a powder that captures the rich flavor and aroma of traditional Indian tea.",
      details: {
        origin: "Assam & Darjeeling, India",
        processing: "Fermented and ground",
        packaging: "25kg bags, 1kg retail packs",
        certifications: ["ISO 22000:2025", "FSSAI", "Tea Board", "Organic"],
        applications: ["Instant tea", "Food coloring", "Bakery", "Beverages", "Cosmetics", "Supplements"],
        specifications: {
          caffeine: "2-4%",
          theaflavins: "1-2%",
          moisture: "< 5%",
          shelfLife: "24 months",
          color: "Deep brown to black",
          aroma: "Rich and malty",
          solubility: "Excellent in hot water"
        },
        nutritionalInfo: {
          calories: "1 kcal/cup",
          caffeine: "40-60mg/cup",
          antioxidants: "High",
          theaflavins: "1-2%",
          polyphenols: "Rich source"
        }
      },
      features: [
        "Rich in antioxidants",
        "Consistent quality",
        "Versatile applications",
        "Traditional Indian tea taste",
        "High solubility",
        "Natural and pure"
      ],
      benefits: [
        "Antioxidant properties",
        "Natural energy boost",
        "Supports heart health",
        "Promotes mental alertness",
        "Traditional health benefits"
      ]
    }
  ];

  const decodedName = decodeURIComponent(productName || "");
  const product = products.find(p => p.name.replace(/\s+/g, '-') === decodedName);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-16 sm:pt-20 lg:pt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 text-center">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">The product you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/products')}>
              Back to Products
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16 sm:pt-20 lg:pt-24">
        {/* Breadcrumb */}
        <section className="py-4 bg-card/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-xs sm:text-sm">
              <Button variant="link" className="p-0 h-auto" onClick={() => navigate('/products')}>
                Products
              </Button>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">{product.name}</span>
            </nav>
          </div>
        </section>

        {/* Product Hero */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                <div className="aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={product.mainImage}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {product.gallery.map((image, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-md">
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <Badge variant="secondary" className="capitalize text-xs sm:text-sm">
                      {product.category.replace('-', ' ')}
                    </Badge>
                    {product.isEcoFriendly && (
                      <Badge variant="default" className="bg-green-600 hover:bg-green-700 text-xs sm:text-sm font-semibold animate-pulse text-white shadow-sm whitespace-nowrap">
                        🌱 Eco-Friendly
                      </Badge>
                    )}
                  </div>
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">{product.name}</h1>
                  <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">{product.description}</p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-xs sm:text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Specs */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3">Quick Specifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {Object.entries(product.details.specifications).slice(0, 4).map(([key, value]) => (
                      <div key={key} className="bg-card p-3 rounded-lg">
                        <div className="text-xs sm:text-sm text-muted-foreground capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                        <div className="font-semibold text-foreground text-sm sm:text-base">{value}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button size="lg" className="btn-primary w-full sm:w-auto" onClick={() => navigate('/contact')}>
                    Request Quotation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Information */}
        <section className="py-8 sm:py-12 lg:py-16 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {/* Detailed Description */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Product Details</h2>
                <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">{product.longDescription}</p>
                  
                  {/* Specifications Table */}
                  <div className="bg-card rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Technical Specifications</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {Object.entries(product.details.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-border">
                          <span className="text-xs sm:text-sm text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className="font-medium text-xs sm:text-sm">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div className="bg-card rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Applications</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.details.applications.map((app, index) => (
                        <Badge key={index} variant="secondary" className="badge-animate text-xs">
                          {app}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="bg-card rounded-lg p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Certifications</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.details.certifications.map((cert, index) => (
                        <Badge key={index} variant="outline" className="badge-animate text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-4 sm:space-y-6">
                {/* Product Benefits */}
                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Benefits</h3>
                    <ul className="space-y-2">
                      {product.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-xs sm:text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Nutritional Information */}
                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Nutritional Information</h3>
                    <div className="space-y-2">
                      {Object.entries(product.details.nutritionalInfo || {}).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-1">
                          <span className="text-xs sm:text-sm text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className="font-medium text-xs sm:text-sm">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Product Details */}
                <Card>
                  <CardContent className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-3 sm:mb-4">Product Details</h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-xs sm:text-sm text-muted-foreground">Processing:</span>
                        <div className="font-medium text-xs sm:text-sm">{product.details.processing}</div>
                      </div>
                      <div>
                        <span className="text-xs sm:text-sm text-muted-foreground">Packaging:</span>
                        <div className="font-medium text-xs sm:text-sm">{product.details.packaging}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 gradient-text">Ready to Order?</h2>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Get in touch with us to discuss your requirements and receive a detailed quotation for {product.name}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button size="lg" className="btn-primary w-full sm:w-auto" onClick={() => navigate('/contact')}>
                Request Quotation
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/contact')} className="w-full sm:w-auto">
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetails;
