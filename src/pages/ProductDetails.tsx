import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { Truck, Package, Anchor, Zap, ShieldCheck, Globe } from "lucide-react";
import TrustSection from "@/components/TrustSection";

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
      name: "Ashwagandha Root Powder",
      category: "natural-products",
      mainImage: "/assets/products/ashwagandha/ashwagandha_main.png",
      gallery: [
        "/assets/products/ashwagandha/ashwagandha_gallery_1.png",
        "/assets/products/ashwagandha/ashwagandha_gallery_2.png",
        "/assets/products/ashwagandha/ashwagandha_gallery_3.png"
      ],
      description: "Premium A-Grade Ashwagandha Root Powder Exporter from India. Standardized 2.5% - 5% withanolide content, sourced from the Nagaur region of Rajasthan. Ideal for high-potency Ayurvedic supplement exports.",
      longDescription: "Thrayana Pvt Ltd is a specialized Ashwagandha Root Powder Exporter from India, sourcing directly from the premium farm clusters of Rajasthan, particularly the Nagaur region, which is renowned for producing the highest quality Withania somnifera. Our Ashwagandha roots are harvested using traditional methods and undergo a natural sun-drying process that preserves the structural integrity of the active alkaloid compounds. We focus on providing our B2B partners with 'A-Grade' root powder, characterized by its distinctively uniform beige color and potent adaptogenic profiles. Each bulk batch is standardized to contain 2.5% to 5% withanolides, ensuring the efficacy required by global nutraceutical and dietary supplement manufacturers. We ensure a deep 100-mesh fine powder through advanced milling, supported by full Certificate of Analysis (COA) compliance for heavy metals and microbial limits.",
      exportDetails: {
        hsnCode: "1211.90.22",
        moq: "500 KG",
        packaging: "25kg High-Density Polyethylene (HDPE) Drums / Vacuum Bags",
        leadTime: "15-20 Days",
        portOfLoading: "Mundra / JNPT, India",
        supplyAbility: "100 Metric Tons per Month"
      },
      details: {
        origin: "Rajasthan, India",
        processing: "Sun-dried and finely ground",
        packaging: "Customized packaging",
        certifications: ["FSSAI", "Organic", "GMP Certified", "Ayurvedic"],
        applications: ["Health supplements", "Functional foods", "Herbal teas", "Ayurvedic treatments", "Smoothies", "Wellness shots"],
        specifications: {
          withanolides: "2.5% - 5%",
          moisture: "< 8%",
          color: "Light brown to beige",
          shelfLife: "24 months",
          particleSize: "80-100 mesh",
          aroma: "Earthy and distinct",
          solubility: "Good in warm water/milk",
          ashContent: "< 7%",
          acidInsolubleAsh: "< 1%",
          heavyMetals: "Within permissible limits",
          microbiological: "Conforms to export standards"
        },
        nutritionalInfo: {
          calories: "277 kcal/100g",
          carbohydrates: "46.9g/100g",
          protein: "3.9g/100g",
          dietaryFiber: "32.3g/100g",
          totalFat: "0.3g/100g",
          iron: "3.3mg/100g",
          calcium: "23mg/100g",
          vitaminC: "1.2mg/100g"
        }
      },
      features: [
        "100% pure organic root powder",
        "High withanolide concentration",
        "Sustainably harvested in Rajasthan",
        "Processed at low temperatures",
        "No artificial additives or fillers",
        "Authentic Ayurvedic herb"
      ],
      benefits: [
        "Potent adaptogen for stress relief",
        "Boosts immune system function",
        "Enhances cognitive health and focus",
        "Promotes restful and restorative sleep",
        "Increases physical stamina and vitality",
        "Supports hormonal balance"
      ],
      howToUse: {
        instructions: "Mix 1/2 to 1 teaspoon of Ashwagandha powder into warm milk, smoothies, or herbal teas. Best consumed twice daily for optimal stress relief and vitality.",
        images: [
          "/assets/usage/ashwagandha/usage-1.png",
          "/assets/usage/ashwagandha/usage-2.png",
          "/assets/usage/ashwagandha/usage-3.png",
          "/assets/usage/ashwagandha/usage-4.png",
          "/assets/usage/ashwagandha/usage-5.png"
        ]
      }
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
      description: "Wholesale Wild Forest Honey Exporter India. 100% raw, unfiltered, and unprocessed multifloral honey sourced from the pristine UNESCO World Heritage forests of the Western Ghats.",
      longDescription: "Thrayana Pvt Ltd is a premier supplier of Wild Forest Honey from the Western Ghats, one of the most biodiverse regions in the world. Our honey is sustainably collected by local forest communities from natural beehives in deep forest clusters. This ensures that the honey is 100% raw and multifloral, carrying the unique medicinal properties of the wild flora. We provide our global wholesale partners in the food, cosmetic, and pharmaceutical industries with raw, unfiltered honey that retains its natural live enzymes, propolis, and high antioxidant concentrations. We maintain strict purity standards with full traceability and lab reports confirming zero contamination from pesticides or artificial sweeteners.",
      exportDetails: {
        hsnCode: "0409.00.00",
        moq: "1000 KG",
        packaging: "30kg Food-grade Carbous / 300kg Industrial Drums",
        leadTime: "15-20 Days",
        portOfLoading: "Chennai / JNPT, India",
        supplyAbility: "50 Metric Tons per Month"
      },
      details: {
        origin: "Western Ghats, India",
        processing: "Raw, cold-unfiltered, and unprocessed",
        packaging: "Industrial export-grade food containers",
        certifications: ["FSSAI", "Organic Certified", "HACCP Certified", "Raw Forest Honey Certified"],
        applications: ["Natural sweeteners", "Ayurvedic formulations", "High-end cosmetic ingredients", "Gourmet food processing", "Traditional wound care", "Health supplements"],
        specifications: {
          moisture: "< 18% (Premium Grade)",
          sugarContent: "80-85% (Natural Fructose/Glucose)",
          color: "Dark Golden to Deep Amber",
          shelfLife: "Indefinite (when sealed)",
          fructose: "38-42%",
          glucose: "32-35%",
          sucrose: "< 5%",
          hydroxymethylfurfural: "< 40 mg/kg",
          diastaseActivity: "> 8 Schade units",
          proline: "> 200 mg/kg",
          ashContent: "< 0.6%",
          pH: "3.5 - 5.5"
        },
        nutritionalInfo: {
          calories: "304 kcal/100g",
          carbohydrates: "82g/100g",
          sugars: "82g/100g",
          antioxidants: "High Poly-phenolic content",
          enzymes: "Active Diastase & Invertase",
          potassium: "52mg/100g",
          calcium: "6mg/100g"
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
      ],
      howToUse: {
        instructions: "Enjoy as a natural sweetener in your favorite tea, drizzle over warm pancakes or toast, or mix with warm water and lemon for a refreshing health tonic.",
        images: [
          "/assets/products/wild-forest-honey/honey_4.png",
          "/assets/products/wild-forest-honey/honey_2.png",
          "/assets/products/wild-forest-honey/honey_3.png",
          "/assets/products/wild-forest-honey/honey_1.png",
          "/assets/products/wild-forest-honey/honey_4.png"
        ]
      }
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
      description: "Bulk Banana Powder Exporter India. 100% natural dehydrated banana powder made from premium Cavendish bananas. Ideal for food processing and infant nutrition.",
      longDescription: "As a premier exporter of banana powder from India, Thrayana Pvt Ltd provides processed fruit solutions for global food manufacturers. Our banana powder is made from carefully selected ripe Cavendish bananas from Kerala, processed using advanced dehydration technology that preserves natural flavor and potassium content. Perfect for bakery, baby food, and nutritional supplement industries.",
      exportDetails: {
        hsnCode: "1106.30.10",
        moq: "1000 KG",
        packaging: "25kg LDPE Lined Kraft Paper Bags",
        leadTime: "12-15 Days",
        portOfLoading: "Cochin / Tuticorin, India",
        supplyAbility: "200 Metric Tons per Month"
      },
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
      ],
      howToUse: {
        instructions: "Add 1-2 tablespoons to baby porridge, smoothies, protein shakes, or use as a nutrition-rich thickener in your baking recipes.",
        images: [
          "/assets/products/banana-powder/Banana-Powder.webp",
          "/assets/products/banana-powder/banana-powder-process.jpg",
          "/assets/products/banana-powder/banana-powder-packaging.jpg",
          "/assets/products/banana-powder/banana-powder-application.jpg",
          "/assets/products/banana-powder/Banana-Powder.webp"
        ]
      }
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
      description: "Primary Moringa Powder Export from India. Premium grade nutrient-rich organic moringa leaf powder, shade-dried to retain maximum nutritional value. Top wholesale supplier for supplement manufacturers globally.",
      longDescription: "Thrayana Pvt Ltd is a premier destination for Moringa Powder Export from India. Our organic Moringa leaf powder is sourced from sustainable farms in Tamil Nadu and processed under strict quality controls. As a leading bulk supplier, we ensure our shade-dried moringa retains its vibrant green color and high protein, vitamin, and mineral density. We cater to international wholesalers, health brands, and food manufacturers looking for high-quality Indian moringa with reliable export logistics and full certification compliance.",
      exportDetails: {
        hsnCode: "1211.90.92",
        moq: "1000 KG",
        packaging: "10kg / 25kg Vacuum Sealed HDPE Bags",
        leadTime: "10-14 Days",
        portOfLoading: "Chennai / Mundra, India",
        supplyAbility: "150 Metric Tons per Month"
      },
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
      ],
      howToUse: {
        instructions: "Blend into green smoothies, juices, or stir into soups and dal. You can also sprinkle it over fresh salads for an extra nutrient boost.",
        images: [
          "/assets/usage/moringa-powder/ways-to-use-new.png",
          "/assets/usage/moringa-powder/usage-2.png",
          "/assets/usage/moringa-powder/moringa-usage-infographic.png"
        ]
      }
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
      longDescription: "Thrayana Pvt Ltd is a premier Turmeric Powder Exporter from India. Our premium turmeric powder is sourced from the finest rhizomes grown in the fertile soils of Karnataka and Tamil Nadu. The turmeric is carefully harvested, sun-dried, and ground to preserve its natural curcumin content and vibrant golden color. This traditional spice has been used in Ayurvedic medicine for centuries. We provide bulk turmeric solutions to global food processors and pharmaceutical brands, ensuring high curcumin levels and microbial safety.",
      exportDetails: {
        hsnCode: "0910.30.30",
        moq: "1000 KG",
        packaging: "25kg / 50kg Multi-layer Kraft Paper Bags",
        leadTime: "12-15 Days",
        portOfLoading: "Chennai / Cochin, India",
        supplyAbility: "150 Metric Tons per Month"
      },
      details: {
        origin: "Karnataka & Tamil Nadu, India",
        processing: "Sun-dried and finely ground",
        packaging: "Customized export-grade packaging",
        certifications: ["ISO 22000:2025", "Organic", "FSSAI", "USDA Organic"],
        applications: ["Cooking", "Traditional medicine", "Cosmetics", "Food coloring", "Supplements", "Skincare"],
        specifications: {
          curcumin: "3% - 5% (Standardized)",
          moisture: "< 10%",
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
          curcumin: "3% - 5%",
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
      ],
      howToUse: {
        instructions: "Incorporate into curries, prepare 'Golden Milk' by mixing with warm milk and a pinch of black pepper, or use in natural DIY skincare masks.",
        images: [
          "/assets/products/turmeric-powder/turmeric-applications.jpg",
          "/assets/products/turmeric-powder/turmeric-rhizomes.jpg",
          "/assets/products/turmeric-powder/turmeric-processing.jpg",
          "/assets/products/turmeric-powder/turmeric-applications.jpg",
          "/assets/products/turmeric-powder/turmeric-rhizomes.jpg"
        ]
      }
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
      longDescription: "Thrayana Pvt Ltd is a specialized Red Chilli Powder Exporter from India. Guntur chillies are renowned worldwide for their exceptional heat and flavor. Grown in the fertile, sun-drenched plains of Andhra Pradesh, these chillies are carefully harvested, sun-dried, and ground to create a powder that captures the authentic sting of South Indian cuisine. Our Guntur Red Chilli powder is sought after by global food manufacturers for its intense capsaicin content and deep red color.",
      exportDetails: {
        hsnCode: "0904.22.11",
        moq: "1000 KG",
        packaging: "25kg PP / Gunny Bags with Inner LDPE",
        leadTime: "10-15 Days",
        portOfLoading: "Vizag / Chennai, India",
        supplyAbility: "200 Metric Tons per Month"
      },
      details: {
        origin: "Guntur, Andhra Pradesh, India",
        processing: "Sun-dried and fine ground",
        packaging: "Customized export-grade packaging",
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
      ],
      howToUse: {
        instructions: "Add to spice up your curries, use in marinades for grilling, or sprinkle a pinch on fresh fruit snacks for an authentic spicy kick.",
        images: [
          "/assets/products/red-chilli-powder/chilli-powder-applications.jpg",
          "/assets/products/red-chilli-powder/guntur-chilli.jpg",
          "/assets/products/red-chilli-powder/chilli-processing.jpg",
          "/assets/products/red-chilli-powder/chilli-powder-applications.jpg",
          "/assets/products/red-chilli-powder/guntur-chilli.jpg"
        ]
      }
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
      longDescription: "Thrayana Pvt Ltd is a premier Cumin Seeds Exporter from India. Our premium cumin seeds (Jeera) are sourced from the arid regions of Rajasthan and Gujarat, which are the global hubs for high-quality cumin. The seeds are carefully harvested, cleaned to 99% purity (Machine Cleaned or Sortex Cleaned), and graded to ensure consistent aroma and volatile oil content. We provide Cumin for bulk food processing and extraction industries globally.",
      exportDetails: {
        hsnCode: "0909.32.00",
        moq: "1000 KG",
        packaging: "25kg / 50kg Jute or PP Bags",
        leadTime: "12-15 Days",
        portOfLoading: "Mundra / JNPT, India",
        supplyAbility: "300 Metric Tons per Month"
      },
      details: {
        origin: "Rajasthan & Gujarat, India",
        processing: "Machine Cleaned / Sortex Cleaned (99% Purity)",
        packaging: "Customized export packaging",
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
      ],
      howToUse: {
        instructions: "Temper in hot oil/ghee to release its earthy aroma, add whole seeds to savory breads, or brew as a digestive cumin tea.",
        images: [
          "/assets/products/cumin-seeds/Cumin-Seed.webp",
          "/assets/products/cumin-seeds/cumin-farm.jpg",
          "/assets/products/cumin-seeds/cumin-processing.jpg",
          "/assets/products/cumin-seeds/cumin-applications.jpg",
          "/assets/products/cumin-seeds/Cumin-Seed.webp"
        ]
      }
    },
    {
      id: 5,
      name: "Bagasse Cutlery",
      category: "eco-friendly",
      mainImage: "/assets/products/bagasse-cutlery/bagasse-main.png",
      gallery: [
        "/assets/products/bagasse-cutlery/bagasse-set.png",
        "/assets/products/bagasse-cutlery/bagasse-compostable.png",
        "/assets/products/bagasse-cutlery/bagasse-close-up.png"
      ],
      description: "Sugarcane byproduct-based cutlery sets including spoons, forks, and knives. A 100% natural, biodegradable, and compostable alternative to traditional plastic cutlery.",
      longDescription: "Thrayana Pvt Ltd is an innovative Bagasse Cutlery Exporter from India. Our eco-friendly cutlery is manufactured from the fibrous residue (bagasse) left after sugarcane processing. This surplus agricultural waste is processed with high-heat molding to create sturdy, 100% natural spoons, forks, and knives. We supply global distributors in the EU and USA who are seeking high-quality, plastic-free alternatives that meet EN 13432 compostability standards.",
      exportDetails: {
        hsnCode: "4823.70.10",
        moq: "50,000 Units",
        packaging: "Bulk Cardboard Cartons / Biodegradable Sleeves",
        leadTime: "20-25 Days",
        portOfLoading: "Chennai / Cochin, India",
        supplyAbility: "1 Million Units per Month"
      },
      details: {
        origin: "South India",
        processing: "High-heat compression molding from sugarcane pulp",
        packaging: "Customized eco-friendly bulk packaging",
        certifications: ["ISO 22000:2025", "FSSAI", "EN 13432 (Compostability)", "FDA Food Grade"],
        applications: ["Sustainable catering", "High-end events", "Takeaway services", "Eco-conscious hospitality", "Quick-service restaurants"],
        specifications: {
          material: "100% Natural Sugarcane Bagasse",
          sturdiness: "Reinforced tensile strength",
          temperatureResistance: "-20°C to 120°C",
          sustainability: "100% biodegradable and compostable (90 days)",
          chemicalFree: "Zero chlorine or bleach bleach",
          foodSafety: "BPA-free and non-toxic"
        },
        environmentalInfo: {
          biodegradability: "100% within 90 days",
          carbonFootprint: "70% lower than plastic",
          waterUsage: "Low (recycled in plant)",
          chemicalFree: "Yes",
          renewableSource: "Sugarcane (annual crop)"
        }
      },
      features: [
        "Sourced from 100% renewable sugarcane fiber",
        "Completely biodegradable and compostable",
        "Microwave-safe and freezer-friendly",
        "Sturdy design—won't break or bend easily",
        "Oil and water resistant without synthetic coatings",
        "No chemical leaching during use"
      ],
      benefits: [
        "Reduces single-use plastic pollution",
        "Provides a premium, natural look for dining",
        "Superior heat and oil resistance",
        "Cost-effective sustainable solution",
        "Safe for all types of food consumption",
        "Supports a circular economy by using agricultural waste"
      ],
      howToUse: {
        instructions: "Ideal for eco-friendly catering, high-end events, takeaways, and a sustainable home dining experience. Microwave and freezer safe.",
        images: [
          "/assets/products/bagasse-cutlery/bagasse-main.png",
          "/assets/products/bagasse-cutlery/bagasse-set.png",
          "/assets/products/bagasse-cutlery/bagasse-compostable.png",
          "/assets/products/bagasse-cutlery/bagasse-close-up.png",
          "/assets/products/bagasse-cutlery/bagasse-main.png"
        ]
      }
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
      ],
      howToUse: {
        instructions: "Perfect for educational storytelling with children, as premium heritage-style home decor, or as a thoughtful gift for special occasions and cultural celebrations.",
        images: [
          "/assets/products/kondapalli-toys/Kondapalli-Toys.webp",
          "/assets/products/kondapalli-toys/kondapalli-toys-1.jpg",
          "/assets/products/kondapalli-toys/kondapalli-toys-2.jpg",
          "/assets/products/kondapalli-toys/kondapalli-toys-3.jpg",
          "/assets/products/kondapalli-toys/Kondapalli-Toys.webp"
        ]
      }
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
      ],
      howToUse: {
        instructions: "Mix 1-2 teaspoons of black tea powder with hot water or milk. Steep for 3-5 minutes. Excellent for traditional hot chai, refreshing iced tea, or as a natural flavoring for cakes and biscuits.",
        images: [
          "/assets/products/black-tea-powder/Black-Tea-Powder.webp",
          "/assets/products/black-tea-powder/tea-gardens.jpg",
          "/assets/products/black-tea-powder/tea-processing.jpg",
          "/assets/products/black-tea-powder/tea-applications.jpg",
          "/assets/products/black-tea-powder/Black-Tea-Powder.webp"
        ]
      }
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

  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": [
      `https://www.thrayana.com${product.mainImage}`,
      ...product.gallery.map(img => `https://www.thrayana.com${img}`)
    ],
    "description": product.description,
    "brand": {
      "@type": "Brand",
      "name": "Thrayana"
    },
    "category": product.category,
    "manufacturer": {
      "@type": "Organization",
      "name": "Thrayana Private Limited"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.thrayana.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Products",
        "item": "https://www.thrayana.com/products"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": `https://www.thrayana.com/products/${product.name.replace(/\s+/g, '-')}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{product.name === "Moringa Powder" ? "Moringa Powder Export from India | Bulk Supplier | Thrayana | Bulk Moringa Powder Supplier from India" : `${product.name} Bulk Exporter from India | Thrayana Pvt Ltd`}</title>
        <meta name="description" content={product.description} />
        <link rel="canonical" href={`https://www.thrayana.com/products/${product.name.replace(/\s+/g, '-')}`} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
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
                    alt={`Premium ${product.name} - Wholesale Export Quality India`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {product.gallery.map((image, index) => (
                    <div key={index} className="aspect-square rounded-lg overflow-hidden shadow-md">
                      <img
                        src={image}
                        alt={`${product.name} Detail View - Quality Standard ${index + 1}`}
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
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                    {product.name} <span className="text-primary/70">Exporter from India</span>
                  </h1>
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

                {/* Export Specifications - CRITICAL FOR BUYERS */}
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border border-blue-100 rounded-xl p-5 sm:p-6 shadow-sm">
                  <h3 className="text-lg sm:text-xl font-bold text-blue-900 mb-4 flex items-center">
                    <Globe className="w-5 h-5 mr-2 text-blue-600" />
                    Export Specifications
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start space-x-3">
                      <Zap className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">HSN Code</div>
                        <div className="text-sm sm:text-base font-bold text-gray-900">{product.exportDetails?.hsnCode || "Contact for details"}</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Anchor className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">MOQ (Bulk)</div>
                        <div className="text-sm sm:text-base font-bold text-gray-900">{product.exportDetails?.moq || "1000 KG"}</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Package className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Standard Packaging</div>
                        <div className="text-sm sm:text-base font-bold text-gray-900">{product.exportDetails?.packaging || "Bulk Packaging"}</div>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Truck className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <div>
                        <div className="text-xs font-semibold text-blue-700 uppercase tracking-wider">Port of Loading</div>
                        <div className="text-sm sm:text-base font-bold text-gray-900">{product.exportDetails?.portOfLoading || "Major Indian Ports"}</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-blue-100 flex items-center text-blue-800 font-medium text-xs sm:text-sm">
                    <ShieldCheck className="w-4 h-4 mr-2" />
                    Certified Export Quality: {product.details.certifications.join(", ")}
                  </div>
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

        {/* How to Use Section */}
        {product.howToUse && (
          <section className="py-8 sm:py-12 lg:py-16 bg-background border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6 text-center">How to Use</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-8 sm:mb-12 max-w-3xl mx-auto text-center">
                {product.howToUse.instructions}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 px-4 sm:px-0">
                {product.howToUse.images.map((img, index) => (
                  <div key={index} className="group relative overflow-hidden rounded-xl aspect-square shadow-md hover:shadow-xl transition-all duration-500 bg-muted">
                    <img
                      src={img}
                      alt={`Using ${product.name} ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Trust & Certifications Section */}
        <TrustSection />

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
