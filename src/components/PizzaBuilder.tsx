
import React, { useState, useEffect } from 'react';
import { pizzaSizes, pizzaFlavors, flavorCategories } from '../data/pizzaOptions';
import type { PizzaSize, PizzaFlavor } from '../data/pizzaOptions';
import { useCart } from '../contexts/CartContext';
import { toast } from 'sonner';
import { Check, Info, PlusCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { formatCurrency } from '../utils/formatCurrency';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { calculatePizzaPrice } from '../utils/pizzaPriceCalculator';

const PizzaBuilder = () => {
  const [customPizza, setCustomPizza] = useState({
    size: null,
    flavors: [],
    price: 0,
  });

  const { addToCart } = useCart();

  const handleSelectSize = (size) => {
    setCustomPizza({
      size: size,
      flavors: [],
      price: 0,
    });
  };

  useEffect(() => {
    // Atualiza o preço quando houver mudança nos sabores ou tamanho
    if (customPizza.size && customPizza.flavors.length > 0) {
      const newPrice = calculatePizzaPrice(
        customPizza.size.id, 
        customPizza.flavors
      );
      
      setCustomPizza(prev => ({
        ...prev,
        price: newPrice
      }));
    }
  }, [customPizza.size, customPizza.flavors]);

  const handleAddFlavor = (flavor) => {
    if (!customPizza.size) {
      toast.error("Por favor, escolha um tamanho primeiro");
      return;
    }

    if (customPizza.flavors.length >= customPizza.size.maxFlavors) {
      toast.error(`Máximo de ${customPizza.size.maxFlavors} sabores para este tamanho`);
      return;
    }

    if (customPizza.flavors.some(f => f.id === flavor.id)) {
      toast.error("Este sabor já foi adicionado");
      return;
    }

    const updatedFlavors = [...customPizza.flavors, flavor];
    
    setCustomPizza({
      ...customPizza,
      flavors: updatedFlavors,
    });
  };

  const handleRemoveFlavor = (flavorId) => {
    const updatedFlavors = customPizza.flavors.filter(
      (flavor) => flavor.id !== flavorId
    );
    
    setCustomPizza({
      ...customPizza,
      flavors: updatedFlavors,
    });
  };

  const handleAddToCart = () => {
    if (!customPizza.size || customPizza.flavors.length === 0) {
      toast.error("Escolha um tamanho e pelo menos um sabor");
      return;
    }

    const flavorNames = customPizza.flavors.map(f => f.name).join(", ");
    const customPizzaProduct = {
      id: Date.now(), // Generate a unique ID
      name: `Pizza ${customPizza.size.diameter} - ${flavorNames}`,
      description: `${customPizza.flavors.length} sabor(es): ${flavorNames}. ${customPizza.size.slices} fatias.`,
      price: customPizza.price,
      image: `/pizza-${customPizza.size.id}.jpg`, // Use the pizza size image
      category: 'montar' as const,
    };

    addToCart(customPizzaProduct, customPizza.size.id);
    toast.success("Pizza adicionada ao carrinho");
    
    // Reset pizza builder
    setCustomPizza({
      size: null,
      flavors: [],
      price: 0,
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <ScrollReveal>
        <h2 className="text-2xl font-bold text-pizza-dark mb-6">Monte sua Pizza</h2>

        {/* Step 1: Choose Size */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4 text-pizza-dark">
            1. Escolha o Tamanho
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {pizzaSizes.map((size) => (
              <button
                key={size.id}
                onClick={() => handleSelectSize(size)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  customPizza.size?.id === size.id
                    ? "border-pizza-primary bg-pizza-primary/10"
                    : "border-gray-200 hover:border-pizza-primary/50"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold">{size.name}</h4>
                  {customPizza.size?.id === size.id && (
                    <Check className="h-5 w-5 text-pizza-primary" />
                  )}
                </div>
                <p className="text-gray-600 text-sm">{size.diameter} - {size.slices} fatias</p>
                <p className="text-gray-600 text-sm">Até {size.maxFlavors} sabores</p>
                <p className="text-gray-600 text-sm mt-1">A partir de {formatCurrency(size.basePrice)}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Choose Flavors */}
        {customPizza.size && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-pizza-dark">
              2. Escolha os Sabores ({customPizza.flavors.length}/{customPizza.size.maxFlavors})
            </h3>

            <Tabs defaultValue="tradicional" className="w-full">
              <TabsList className="w-full mb-4 bg-gray-100 flex overflow-x-auto">
                {flavorCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex-shrink-0"
                  >
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>

              {flavorCategories.map((category) => (
                <TabsContent key={category.id} value={category.id} className="mt-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {pizzaFlavors
                      .filter((flavor) => flavor.category === category.id)
                      .map((flavor) => {
                        const isSelected = customPizza.flavors.some(
                          (f) => f.id === flavor.id
                        );
                        return (
                          <div
                            key={flavor.id}
                            className={`relative rounded-lg overflow-hidden border p-3 transition-all ${
                              isSelected
                                ? "border-pizza-primary"
                                : "border-gray-200 hover:border-pizza-primary/50"
                            }`}
                          >
                            <div>
                              <h4 className="font-bold">{flavor.name}</h4>
                              <p className="text-gray-600 text-sm line-clamp-2">
                                {flavor.description}
                              </p>
                              {isSelected ? (
                                <button
                                  onClick={() => handleRemoveFlavor(flavor.id)}
                                  className="mt-2 text-sm text-red-600 font-semibold"
                                >
                                  Remover
                                </button>
                              ) : (
                                <button
                                  onClick={() => handleAddFlavor(flavor)}
                                  className="mt-2 text-sm text-pizza-primary font-semibold flex items-center"
                                  disabled={
                                    customPizza.flavors.length >= customPizza.size!.maxFlavors
                                  }
                                >
                                  <PlusCircle className="h-4 w-4 mr-1" />
                                  Adicionar
                                </button>
                              )}
                            </div>
                            {isSelected && (
                              <div className="absolute top-2 right-2 bg-pizza-primary text-white w-6 h-6 rounded-full flex items-center justify-center">
                                <Check className="h-4 w-4" />
                              </div>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            {/* Selected Flavors */}
            {customPizza.flavors.length > 0 && (
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Sabores Selecionados</h4>
                <div className="flex flex-wrap gap-2">
                  {customPizza.flavors.map((flavor) => (
                    <div
                      key={flavor.id}
                      className="bg-white px-3 py-1 rounded-full text-sm flex items-center border"
                    >
                      {flavor.name}
                      <button
                        onClick={() => handleRemoveFlavor(flavor.id)}
                        className="ml-2 text-red-500"
                      >
                        &times;
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Price & Add to Cart */}
        {customPizza.size && (
          <div className="mt-6 flex flex-col items-center">
            {customPizza.price > 0 && (
              <div className="mb-4">
                <p className="text-lg">
                  Preço da Pizza:{" "}
                  <span className="font-bold text-pizza-primary">
                    {formatCurrency(customPizza.price)}
                  </span>
                </p>
                <div className="text-xs flex items-center text-gray-500 mt-1">
                  <Info className="h-3 w-3 mr-1" />
                  {customPizza.flavors.length > 1 
                    ? "Para pizzas com múltiplos sabores, usamos a tabela de preços especial" 
                    : "O preço é baseado no sabor selecionado"}
                </div>
              </div>
            )}

            <button
              onClick={handleAddToCart}
              disabled={!customPizza.size || customPizza.flavors.length === 0}
              className={`w-full md:w-auto px-8 py-3 rounded-lg font-semibold ${
                !customPizza.size || customPizza.flavors.length === 0
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-pizza-primary text-white hover:bg-pizza-dark transition-colors"
              }`}
            >
              Adicionar ao Carrinho
            </button>
          </div>
        )}
      </ScrollReveal>
    </div>
  );
};

export default PizzaBuilder;
