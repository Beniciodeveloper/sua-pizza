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
  category: 'tradicional' | 'tradicional-doce' | 'especial' | 'premium';
  image: string;
}

export interface PizzaBorder {
  id: string;
  name: string;
  prices: {
    small: number;
    medium: number;
    large: number;
  };
}

export interface PizzaCombo {
  id: number;
  name: string;
  description: string;
  price: number;
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
    image: "/pizza-small.jpg"
  },
  {
    id: "medium",
    name: "Pizza Média",
    diameter: "35cm",
    slices: 10,
    maxFlavors: 3,
    image: "/pizza-medium.jpg"
  },
  {
    id: "large",
    name: "Pizza Grande",
    diameter: "40cm",
    slices: 12,
    maxFlavors: 4,
    image: "/pizza-large.jpg"
  }
];

export const flavorCategories: PizzaCategory[] = [
  {
    id: "tradicional",
    name: "TRADICIONAIS"
  },
  {
    id: "especial",
    name: "ESPECIAIS"
  },
  {
    id: "premium",
    name: "PREMIUM"
  },
  {
    id: "doce",
    name: "DOCES"
  }
];

export const pizzaBorders: PizzaBorder[] = [
  {
    id: "cheddar",
    name: "Cheddar",
    prices: {
      small: 7,
      medium: 10,
      large: 12
    }
  },
  {
    id: "catupiry",
    name: "Catupiry Original",
    prices: {
      small: 15,
      medium: 18,
      large: 20
    }
  },
  {
    id: "mussarela-gorgonzola",
    name: "Mussarela e Gorgonzola",
    prices: {
      small: 15,
      medium: 18,
      large: 20
    }
  },
  {
    id: "mussarela-presunto",
    name: "Mussarela e Presunto",
    prices: {
      small: 15,
      medium: 18,
      large: 20
    }
  }
];

export const pizzaCombos: PizzaCombo[] = [
  {
    id: 1,
    name: "Combo Família",
    description: "Pizza família + Pizza média doce + Refrigerante",
    price: 74.90,
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Combo Big",
    description: "2 Pizzas grandes + Pizza média",
    price: 102.90,
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Rodízio em Casa",
    description: "Escolha 7 sabores e faça seu rodízio",
    price: 194.90,
    image: "/placeholder.svg"
  }
];

export const pizzaFlavors: PizzaFlavor[] = [
  // Sabores Tradicionais
  {
    id: 1,
    name: "Mussarela",
    description: "Molho de tomate, mussarela e orégano",
    category: "tradicional",
    image: "/pizza-calabresa.jpg"
  },
  {
    id: 2,
    name: "Mista",
    description: "Molho de tomate, mussarela, presunto e orégano",
    category: "tradicional",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Calabresa",
    description: "Molho de tomate, mussarela, calabresa e cebola",
    category: "tradicional",
    image: "/pizza-calabresa.jpg"
  },
  {
    id: 4,
    name: "Baiana",
    description: "Molho de tomate, calabresa moída, ovos e pimenta",
    category: "tradicional",
    image: "/placeholder.svg"
  },
  {
    id: 5,
    name: "Portuguesa",
    description: "Molho de tomate, mussarela, presunto, ovos, ervilha, cebola e orégano",
    category: "tradicional",
    image: "/pizza-portuguesa.jpg"
  },
  {
    id: 6,
    name: "Marguerita",
    description: "Molho de tomate, mussarela, tomate e manjericão",
    category: "tradicional",
    image: "/pizza-margherita.jpg"
  },
  {
    id: 7,
    name: "Dois Queijos",
    description: "Molho de tomate, mussarela e catupiry",
    category: "tradicional",
    image: "/placeholder.svg"
  },
  {
    id: 8,
    name: "Alho",
    description: "Molho de tomate, mussarela e alho frito",
    category: "tradicional",
    image: "/placeholder.svg"
  },
  
  // Sabores Tradicionais Doces
  {
    id: 9,
    name: "Romeu e Julieta",
    description: "Mussarela e goiabada",
    category: "tradicional-doce",
    image: "/placeholder.svg"
  },
  {
    id: 10,
    name: "Brigadeiro",
    description: "Chocolate, granulado e leite condensado",
    category: "tradicional-doce",
    image: "/placeholder.svg"
  },
  {
    id: 11,
    name: "Abacaxi",
    description: "Mussarela, abacaxi e leite condensado",
    category: "tradicional-doce",
    image: "/placeholder.svg"
  },
  {
    id: 12,
    name: "Churros",
    description: "Chocolate, doce de leite e canela",
    category: "tradicional-doce",
    image: "/placeholder.svg"
  },
  {
    id: 13,
    name: "Prestígio",
    description: "Chocolate, coco ralado e leite condensado",
    category: "tradicional-doce",
    image: "/placeholder.svg"
  },
  {
    id: 14,
    name: "Beijinho",
    description: "Coco, leite condensado e granulado branco",
    category: "tradicional-doce",
    image: "/placeholder.svg"
  },
  {
    id: 15,
    name: "Banana com Canela",
    description: "Banana, leite condensado e canela",
    category: "tradicional-doce",
    image: "/placeholder.svg"
  },
  {
    id: 16,
    name: "Negresco",
    description: "Chocolate branco, biscoito Negresco e leite condensado",
    category: "tradicional-doce",
    image: "/placeholder.svg"
  },

  // Sabores Especiais
  {
    id: 17,
    name: "Batata Palha com Cheddar",
    description: "Molho de tomate, mussarela, frango desfiado, cheddar e batata palha",
    category: "especial",
    image: "/placeholder.svg"
  },
  {
    id: 18,
    name: "Bacon com Catupiry",
    description: "Molho de tomate, mussarela, bacon e catupiry",
    category: "especial",
    image: "/placeholder.svg"
  },
  {
    id: 19,
    name: "Bacon com Cheddar",
    description: "Molho de tomate, mussarela, bacon e cheddar",
    category: "especial",
    image: "/placeholder.svg"
  },
  {
    id: 20,
    name: "Atum",
    description: "Molho de tomate, mussarela e atum",
    category: "especial",
    image: "/placeholder.svg"
  },
  {
    id: 21,
    name: "Atum com Catupiry",
    description: "Molho de tomate, mussarela, atum e catupiry",
    category: "especial",
    image: "/placeholder.svg"
  },
  {
    id: 22,
    name: "Atum com Cheddar",
    description: "Molho de tomate, mussarela, atum e cheddar",
    category: "especial",
    image: "/placeholder.svg"
  },
  {
    id: 23,
    name: "Caipira",
    description: "Molho de tomate, frango desfiado, milho e catupiry",
    category: "especial",
    image: "/placeholder.svg"
  },
  {
    id: 24,
    name: "Quatro Queijos",
    description: "Molho de tomate, mussarela, catupiry, gorgonzola e parmesão",
    category: "especial",
    image: "/pizza-quatro-queijos.jpg"
  },
  {
    id: 25,
    name: "Palmito",
    description: "Molho de tomate, mussarela e palmito",
    category: "especial",
    image: "/placeholder.svg"
  },
  {
    id: 26,
    name: "Havaiana",
    description: "Molho de tomate, mussarela, presunto e abacaxi",
    category: "especial",
    image: "/placeholder.svg"
  },
  {
    id: 27,
    name: "Moda da Casa",
    description: "Molho de tomate, mussarela, bacon, cebola e orégano",
    category: "especial",
    image: "/placeholder.svg"
  },
  {
    id: 28,
    name: "Lombinho",
    description: "Molho de tomate, mussarela, lombo canadense e catupiry",
    category: "especial",
    image: "/placeholder.svg"
  },
  {
    id: 29,
    name: "Brócolis com Alho",
    description: "Molho de tomate, mussarela, brócolis e alho frito",
    category: "especial",
    image: "/placeholder.svg"
  },
  {
    id: 30,
    name: "Vegetariana",
    description: "Molho de tomate, mussarela, palmito, champignon e ervilha",
    category: "especial",
    image: "/pizza-vegetariana.jpg"
  },
  {
    id: 31,
    name: "Frango",
    description: "Molho de tomate, mussarela e frango desfiado",
    category: "especial",
    image: "/placeholder.svg"
  },
  {
    id: 32,
    name: "Frango com Alho",
    description: "Molho de tomate, mussarela, frango desfiado e alho frito",
    category: "especial",
    image: "/placeholder.svg"
  },
  {
    id: 33,
    name: "Frango com Catupiry",
    description: "Molho de tomate, mussarela, frango desfiado e catupiry",
    category: "especial",
    image: "/placeholder.svg"
  },
  {
    id: 34,
    name: "Frango com Cheddar",
    description: "Molho de tomate, mussarela, frango desfiado e cheddar",
    category: "especial",
    image: "/placeholder.svg"
  },
  {
    id: 35,
    name: "Frango com Milho",
    description: "Molho de tomate, mussarela, frango desfiado e milho",
    category: "especial",
    image: "/placeholder.svg"
  },

  // Sabores Premium
  {
    id: 36,
    name: "Sertaneja",
    description: "Molho de tomate, carne de sol desfiada, mussarela, cebola roxa e coentro",
    category: "premium",
    image: "/placeholder.svg"
  },
  {
    id: 37,
    name: "Nordestina",
    description: "Molho de tomate, carne seca desfiada, mussarela, queijo coalho e pimenta biquinho",
    category: "premium",
    image: "/placeholder.svg"
  },
  {
    id: 38,
    name: "Peito de Peru",
    description: "Molho de tomate, peito de peru, mussarela, tomate seco e rúcula",
    category: "premium",
    image: "/placeholder.svg"
  },
  {
    id: 39,
    name: "5 Queijos",
    description: "Molho de tomate, mussarela, catupiry, gorgonzola, parmesão e provolone",
    category: "premium",
    image: "/placeholder.svg"
  },
  {
    id: 40,
    name: "4 Queijos Especial",
    description: "Molho de tomate, mussarela, requeijão, gorgonzola e parmesão",
    category: "premium",
    image: "/placeholder.svg"
  },
  {
    id: 41,
    name: "Marguerita Premium",
    description: "Molho de tomate, mussarela de búfala, tomate cereja e manjericão fresco",
    category: "premium",
    image: "/placeholder.svg"
  },
  {
    id: 42,
    name: "Frango Especial",
    description: "Molho de tomate, mussarela, frango desfiado, catupiry e milho verde",
    category: "premium",
    image: "/placeholder.svg"
  },
  {
    id: 43,
    name: "Brócolis com Catupiry",
    description: "Molho de tomate, brócolis, catupiry, mussarela e alho frito",
    category: "premium",
    image: "/placeholder.svg"
  },
  {
    id: 44,
    name: "Corn Bacon",
    description: "Molho de tomate, mussarela, bacon e milho verde",
    category: "premium",
    image: "/placeholder.svg"
  },
  {
    id: 45,
    name: "Bacon com Ovos",
    description: "Molho de tomate, mussarela, bacon e ovos de codorna",
    category: "premium",
    image: "/placeholder.svg"
  },
  {
    id: 46,
    name: "Bacon com Champignon",
    description: "Molho de tomate, mussarela, bacon e champignon",
    category: "premium",
    image: "/placeholder.svg"
  },
  {
    id: 47,
    name: "Bacon Especial",
    description: "Molho de tomate, mussarela, bacon, cheddar e catupiry",
    category: "premium",
    image: "/placeholder.svg"
  },
  {
    id: 48,
    name: "Carbonara",
    description: "Molho branco, parmesão, bacon e ovos",
    category: "premium",
    image: "/placeholder.svg"
  },
  {
    id: 49,
    name: "Vegetariana Especial",
    description: "Molho de tomate, palmito, cogumelos, pimentão e azeitonas",
    category: "premium",
    image: "/placeholder.svg"
  },
  {
    id: 50,
    name: "Havaiana Especial",
    description: "Molho de tomate, mussarela, presunto, abacaxi e leite condensado",
    category: "premium",
    image: "/placeholder.svg"
  }
];

export const pizzaPrices: PizzaPrice[] = [
  // Tamanho pequeno (30cm)
  { size: "small", category: "tradicional", price: 34.90, multiFlavorPrice: 59.90 },
  { size: "small", category: "tradicional-doce", price: 34.90, multiFlavorPrice: 59.90 },
  { size: "small", category: "especial", price: 39.90, multiFlavorPrice: 69.90 },
  { size: "small", category: "premium", price: 44.90, multiFlavorPrice: 79.90 },
  
  // Tamanho médio (35cm)
  { size: "medium", category: "tradicional", price: 39.90 },
  { size: "medium", category: "tradicional-doce", price: 39.90 },
  { size: "medium", category: "especial", price: 44.90 },
  { size: "medium", category: "premium", price: 49.90 },
  
  // Tamanho grande (40cm)
  { size: "large", category: "tradicional", price: 44.90 },
  { size: "large", category: "tradicional-doce", price: 44.90 },
  { size: "large", category: "especial", price: 49.90 },
  { size: "large", category: "premium", price: 54.90 }
];

// Helper function to calculate pizza price
export const calculatePizzaPrice = (
  sizeId: string,
  flavors: PizzaFlavor[],
  borderOption?: PizzaBorder | null
): number => {
  if (!flavors.length) return 0;

  // Find the highest category among selected flavors
  const categories = flavors.map((flavor) => flavor.category);
  const highestCategory = categories.includes('premium') 
    ? 'premium' 
    : categories.includes('especial') 
      ? 'especial' 
      : categories.includes('tradicional-doce')
        ? 'tradicional-doce'
        : 'tradicional';

  // Find the appropriate price
  const priceObj = pizzaPrices.find(
    (price) => price.size === sizeId && price.category === highestCategory
  );

  if (!priceObj) return 0;

  // For small pizzas, check if we need to apply the multi-flavor price
  const basePrice = (sizeId === 'small' && flavors.length > 1) 
    ? (priceObj.multiFlavorPrice || priceObj.price)
    : priceObj.price;

  // Add border price if selected
  if (borderOption) {
    const borderPrice = sizeId === 'small' 
      ? borderOption.prices.small 
      : sizeId === 'medium' 
        ? borderOption.prices.medium 
        : borderOption.prices.large;
    return basePrice + borderPrice;
  }

  return basePrice;
};
