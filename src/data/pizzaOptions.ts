
export interface PizzaSize {
  id: string;
  name: string;
  diameter: string;
  slices: number;
  maxFlavors: number;
  image: string;
}

export interface PizzaCategory {
  id: string;
  name: string;
  description: string;
}

export interface PizzaFlavor {
  id: number;
  name: string;
  description: string;
  category: 'tradicional' | 'especial' | 'premium';
  image: string;
}

export interface PizzaPrice {
  size: string;
  category: string;
  price: number;
  multiFlavorPrice?: number;
}

export const pizzaSizes: PizzaSize[] = [
  {
    id: "small",
    name: "Pizza Pequena",
    diameter: "30cm",
    slices: 8,
    maxFlavors: 2,
    image: "/pizza-small.jpg" // placeholder image
  },
  {
    id: "medium",
    name: "Pizza Média",
    diameter: "35cm",
    slices: 10,
    maxFlavors: 3,
    image: "/pizza-medium.jpg" // placeholder image
  },
  {
    id: "large",
    name: "Pizza Grande",
    diameter: "40cm",
    slices: 12,
    maxFlavors: 4,
    image: "/pizza-large.jpg" // placeholder image
  }
];

export const flavorCategories: PizzaCategory[] = [
  {
    id: "tradicional",
    name: "Tradicionais",
    description: "Sabores clássicos que todo mundo adora"
  },
  {
    id: "especial",
    name: "Especiais",
    description: "Combinações especiais para paladares exigentes"
  },
  {
    id: "premium",
    name: "Premium",
    description: "O melhor da casa, com ingredientes selecionados"
  }
];

export const pizzaFlavors: PizzaFlavor[] = [
  {
    id: 1,
    name: "Calabresa",
    description: "Molho de tomate, muçarela, calabresa fatiada e cebola",
    category: "tradicional",
    image: "/pizza-calabresa.jpg"
  },
  {
    id: 2,
    name: "Margherita",
    description: "Molho de tomate, muçarela, manjericão fresco e azeite de oliva",
    category: "tradicional",
    image: "/pizza-margherita.jpg"
  },
  {
    id: 3,
    name: "Portuguesa",
    description: "Molho de tomate, muçarela, presunto, ovo, cebola e azeitonas",
    category: "tradicional",
    image: "/pizza-portuguesa.jpg"
  },
  {
    id: 4,
    name: "Quatro Queijos",
    description: "Molho de tomate, muçarela, provolone, gorgonzola e parmesão",
    category: "especial",
    image: "/pizza-quatro-queijos.jpg"
  },
  {
    id: 5,
    name: "Pepperoni",
    description: "Molho de tomate, muçarela e pepperoni fatiado",
    category: "especial",
    image: "/pizza-pepperoni.jpg"
  },
  {
    id: 6,
    name: "Vegetariana",
    description: "Molho de tomate, muçarela, brócolis, tomates, pimentão, cebola e cogumelos",
    category: "especial",
    image: "/pizza-vegetariana.jpg"
  },
  {
    id: 7,
    name: "Sertaneja",
    description: "Molho de tomate, muçarela, carne seca, cream cheese, cebola e pimenta",
    category: "premium",
    image: "/placeholder.svg"
  },
  {
    id: 8,
    name: "Frutos do Mar",
    description: "Molho de tomate, muçarela, camarão, lula, polvo, alho e salsa",
    category: "premium",
    image: "/placeholder.svg"
  },
  {
    id: 9,
    name: "Trufada",
    description: "Molho branco, muçarela, cogumelos frescos, azeite trufado e parmesão",
    category: "premium",
    image: "/placeholder.svg"
  }
];

export const pizzaPrices: PizzaPrice[] = [
  // Tamanho pequeno (30cm)
  { size: "small", category: "tradicional", price: 34.90, multiFlavorPrice: 59.90 },
  { size: "small", category: "especial", price: 39.90, multiFlavorPrice: 69.90 },
  { size: "small", category: "premium", price: 44.90, multiFlavorPrice: 79.90 },
  
  // Tamanho médio (35cm)
  { size: "medium", category: "tradicional", price: 39.90 },
  { size: "medium", category: "especial", price: 44.90 },
  { size: "medium", category: "premium", price: 49.90 },
  
  // Tamanho grande (40cm)
  { size: "large", category: "tradicional", price: 44.90 },
  { size: "large", category: "especial", price: 49.90 },
  { size: "large", category: "premium", price: 54.90 }
];

// Helper function to calculate pizza price
export const calculatePizzaPrice = (
  sizeId: string,
  flavors: PizzaFlavor[]
): number => {
  if (!flavors.length) return 0;

  // Find the highest category among selected flavors
  const categories = flavors.map((flavor) => flavor.category);
  const highestCategory = categories.includes('premium') 
    ? 'premium' 
    : categories.includes('especial') 
      ? 'especial' 
      : 'tradicional';

  // Find the appropriate price
  const priceObj = pizzaPrices.find(
    (price) => price.size === sizeId && price.category === highestCategory
  );

  if (!priceObj) return 0;

  // For small pizzas, check if we need to apply the multi-flavor price
  if (sizeId === 'small' && flavors.length > 1) {
    return priceObj.multiFlavorPrice || priceObj.price;
  }

  return priceObj.price;
};

