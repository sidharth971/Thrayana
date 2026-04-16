import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ProductsSection = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 9,
      name: "Ashwagandha Root Powder",
      image: "/assets/products/ashwagandha/ashwagandha_main.png",
      productId: 9
    },
    {
      id: 10,
      name: "Wild Forest Honey",
      image: "/assets/products/wild-forest-honey/honey_4.png",
      productId: 10
    },
    {
      id: 1,
      name: "Banana Powder",
      image: "/assets/products/banana-powder/Banana-Powder.webp",
      productId: 1
    },
    {
      id: 8,
      name: "Moringa Powder",
      image: "/assets/products/moringa-powder/moringa-leaves-harvest.jpg",
      productId: 8
    },
    {
      id: 2,
      name: "Turmeric Powder",
      image: "/assets/products/turmeric-powder/Turmeric-Powder.webp",
      productId: 2
    },
    {
      id: 3,
      name: "Guntur Red Chilli Powder",
      image: "/assets/products/red-chilli-powder/Red-Chilli-Powder.webp",
      productId: 3
    },
    {
      id: 4,
      name: "Cumin Seeds",
      image: "/assets/products/cumin-seeds/Cumin-Seed.webp",
      productId: 4
    },
    {
      id: 5,
      name: "Bagasse Cutlery",
      image: "/assets/products/bagasse-cutlery/bagasse-main.png",
      productId: 5
    },
    {
      id: 6,
      name: "Kondapalli Toys",
      image: "/assets/products/kondapalli-toys/Kondapalli-Toys.webp",
      productId: 6
    }
  ];

  return (
    <section id="products-section" className="w-full min-h-screen bg-gradient-to-b from-background to-slate-50 overflow-hidden">
      <div className="w-full h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        <div className="text-center mb-12 sm:mb-16 animate-in fade-in duration-1000">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-shadow">
                            <span className="gradient-text">Products</span> We Export
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-medium px-4">
            Premium quality 100% natural Indian food products, spices, and traditional handicrafts for global markets
          </p>
        </div>

        {/* Products Container */}
        <div className="flex-1 flex flex-col justify-center">
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className="group text-center animate-in fade-in duration-1000 card-hover cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => {
                  if (product.name === "Kondapalli Toys") {
                    navigate('/kondapalli-toys');
                  } else {
                    navigate(`/products/${product.name.replace(/\s+/g, '-')}`);
                  }
                }}
              >
                <div className="mb-4 sm:mb-6 overflow-hidden rounded-xl sm:rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 bg-white">
                  <img
                    src={product.image}
                    alt={`Premium ${product.name} - Wholesale Export Quality India`}
                    className="w-full h-48 sm:h-56 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => { e.currentTarget.src = "/assets/products/Gemini_Generated_Image_4b6i9r4b6i9r4b6i.png"; }}
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-primary transition-colors px-2">
                  {product.name}
                </h3>
              </div>
            ))}
          </div>

          {/* View All Products Button removed per request */}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;