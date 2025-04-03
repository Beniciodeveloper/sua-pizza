
import React, { useState } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../data/products";
import ScrollReveal from "../components/ScrollReveal";
import { useCart } from "../contexts/CartContext";
import { ShoppingBag } from "lucide-react";
import PizzaBuilder from "../components/PizzaBuilder";
import FloatingCartButton from "../components/FloatingCartButton";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0].id);
  const { itemCount, addToCart } = useCart();

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header cartItemCount={itemCount} />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-pizza-dark to-pizza-secondary text-white">
        <div className="container mx-auto">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Monte sua pizza do jeito que desejar!
              </h1>
              <p className="text-lg opacity-90 mb-8">
                Experimente nossas deliciosas pizzas customizadas com ingredientes frescos e de alta qualidade.
              </p>
              <button 
                onClick={() => window.scrollTo({ top: 500, behavior: "smooth" })}
                className="bg-white text-pizza-secondary px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all transform hover:scale-105"
              >
                Montar Pizza
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Categories Navigation */}
      <div className="sticky top-16 bg-white z-10 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <ScrollReveal>
            <div className="flex space-x-2 md:space-x-4 overflow-x-auto pb-2 md:justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap flex items-center transition-all ${
                    activeCategory === category.id
                      ? "bg-pizza-secondary text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Products Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          {activeCategory === "montar" ? (
            <PizzaBuilder />
          ) : (
            <>
              <ScrollReveal>
                <h2 className="text-2xl font-bold mb-8 text-center text-pizza-dark">
                  {categories.find(c => c.id === activeCategory)?.name || "Produtos"}
                </h2>
              </ScrollReveal>

              {filteredProducts.length > 0 && (
                <div className="relative px-4 md:px-8 lg:px-12">
                  <Carousel
                    opts={{
                      align: "start",
                      loop: filteredProducts.length > 3,
                    }}
                    className="w-full"
                  >
                    <CarouselContent className="-ml-2 md:-ml-4">
                      {filteredProducts.map((product, index) => (
                        <CarouselItem key={product.id} className="pl-2 md:pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                          <ProductCard
                            product={product}
                            index={index}
                            onAddToCart={addToCart}
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="hidden md:block">
                      <CarouselPrevious className="-left-12" />
                      <CarouselNext className="-right-12" />
                    </div>
                  </Carousel>
                </div>
              )}
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">Nenhum produto disponível nesta categoria.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-pizza-dark text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">
              <span className="text-2xl mr-2">🍕</span>
              <span className="text-pizza-secondary">Pizza</span>Express
            </h3>
            <p className="opacity-80 mb-4">Pizzas artesanais com ingredientes premium</p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                Instagram
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                Facebook
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                WhatsApp
              </a>
            </div>
            <p className="mt-8 text-sm opacity-60">
              © {new Date().getFullYear()} PizzaExpress. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Floating Cart Button */}
      <FloatingCartButton />
    </div>
  );
};

export default Index;
