// Sabores de pizza disponíveis
export interface PizzaFlavor {
  id: number;
  name: string;
  description: string;
  category: 'tradicional' | 'tradicional-doce' | 'especial' | 'premium';
  image: string;
  priceMultiplier: number;
}

export const pizzaFlavors: PizzaFlavor[] = [
  // Sabores Tradicionais
  {
    id: 1,
    name: "Mussarela",
    description: "Molho de tomate, mussarela e orégano",
    category: "tradicional",
    image: "/pizza-calabresa.jpg",
    priceMultiplier: 1.0
  },
  {
    id: 2,
    name: "Mista",
    description: "Molho de tomate, mussarela, presunto e orégano",
    category: "tradicional",
    image: "/placeholder.svg",
    priceMultiplier: 1.0
  },
  {
    id: 3,
    name: "Calabresa",
    description: "Molho de tomate, mussarela, calabresa e cebola",
    category: "tradicional",
    image: "/pizza-calabresa.jpg",
    priceMultiplier: 1.0
  },
  {
    id: 4,
    name: "Baiana",
    description: "Molho de tomate, calabresa moída, ovos e pimenta",
    category: "tradicional",
    image: "/placeholder.svg",
    priceMultiplier: 1.0
  },
  {
    id: 5,
    name: "Portuguesa",
    description: "Molho de tomate, mussarela, presunto, ovos, ervilha, cebola e orégano",
    category: "tradicional",
    image: "/pizza-portuguesa.jpg",
    priceMultiplier: 1.0
  },
  {
    id: 6,
    name: "Marguerita",
    description: "Molho de tomate, mussarela, tomate e manjericão",
    category: "tradicional",
    image: "/pizza-margherita.jpg",
    priceMultiplier: 1.0
  },
  {
    id: 7,
    name: "Dois Queijos",
    description: "Molho de tomate, mussarela e catupiry",
    category: "tradicional",
    image: "/placeholder.svg",
    priceMultiplier: 1.0
  },
  {
    id: 8,
    name: "Alho",
    description: "Molho de tomate, mussarela e alho frito",
    category: "tradicional",
    image: "/placeholder.svg",
    priceMultiplier: 1.0
  },
  
  // Sabores Tradicionais Doces
  {
    id: 9,
    name: "Romeu e Julieta",
    description: "Mussarela e goiabada",
    category: "tradicional-doce",
    image: "/placeholder.svg",
    priceMultiplier: 1.0
  },
  {
    id: 10,
    name: "Brigadeiro",
    description: "Chocolate, granulado e leite condensado",
    category: "tradicional-doce",
    image: "/placeholder.svg",
    priceMultiplier: 1.0
  },
  {
    id: 11,
    name: "Abacaxi",
    description: "Mussarela, abacaxi e leite condensado",
    category: "tradicional-doce",
    image: "/placeholder.svg",
    priceMultiplier: 1.0
  },
  {
    id: 12,
    name: "Churros",
    description: "Chocolate, doce de leite e canela",
    category: "tradicional-doce",
    image: "/placeholder.svg",
    priceMultiplier: 1.0
  },
  {
    id: 13,
    name: "Prestígio",
    description: "Chocolate, coco ralado e leite condensado",
    category: "tradicional-doce",
    image: "/placeholder.svg",
    priceMultiplier: 1.0
  },
  {
    id: 14,
    name: "Beijinho",
    description: "Coco, leite condensado e granulado branco",
    category: "tradicional-doce",
    image: "/placeholder.svg",
    priceMultiplier: 1.0
  },
  {
    id: 15,
    name: "Banana com Canela",
    description: "Banana, leite condensado e canela",
    category: "tradicional-doce",
    image: "/placeholder.svg",
    priceMultiplier: 1.0
  },
  {
    id: 16,
    name: "Negresco",
    description: "Chocolate branco, biscoito Negresco e leite condensado",
    category: "tradicional-doce",
    image: "/placeholder.svg",
    priceMultiplier: 1.0
  },

  // Sabores Especiais
  {
    id: 17,
    name: "Batata Palha com Cheddar",
    description: "Molho de tomate, mussarela, frango desfiado, cheddar e batata palha",
    category: "especial",
    image: "/placeholder.svg",
    priceMultiplier: 1.15
  },
  {
    id: 18,
    name: "Bacon com Catupiry",
    description: "Molho de tomate, mussarela, bacon e catupiry",
    category: "especial",
    image: "/placeholder.svg",
    priceMultiplier: 1.15
  },
  {
    id: 19,
    name: "Bacon com Cheddar",
    description: "Molho de tomate, mussarela, bacon e cheddar",
    category: "especial",
    image: "/placeholder.svg",
    priceMultiplier: 1.15
  },
  {
    id: 20,
    name: "Atum",
    description: "Molho de tomate, mussarela e atum",
    category: "especial",
    image: "/placeholder.svg",
    priceMultiplier: 1.15
  },
  {
    id: 21,
    name: "Atum com Catupiry",
    description: "Molho de tomate, mussarela, atum e catupiry",
    category: "especial",
    image: "/placeholder.svg",
    priceMultiplier: 1.15
  },
  {
    id: 22,
    name: "Atum com Cheddar",
    description: "Molho de tomate, mussarela, atum e cheddar",
    category: "especial",
    image: "/placeholder.svg",
    priceMultiplier: 1.15
  },
  {
    id: 23,
    name: "Caipira",
    description: "Molho de tomate, frango desfiado, milho e catupiry",
    category: "especial",
    image: "/placeholder.svg",
    priceMultiplier: 1.15
  },
  {
    id: 24,
    name: "Quatro Queijos",
    description: "Molho de tomate, mussarela, catupiry, gorgonzola e parmesão",
    category: "especial",
    image: "/pizza-quatro-queijos.jpg",
    priceMultiplier: 1.15
  },
  {
    id: 25,
    name: "Palmito",
    description: "Molho de tomate, mussarela e palmito",
    category: "especial",
    image: "/placeholder.svg",
    priceMultiplier: 1.15
  },
  {
    id: 26,
    name: "Havaiana",
    description: "Molho de tomate, mussarela, presunto e abacaxi",
    category: "especial",
    image: "/placeholder.svg",
    priceMultiplier: 1.15
  },
  {
    id: 27,
    name: "Moda da Casa",
    description: "Molho de tomate, mussarela, bacon, cebola e orégano",
    category: "especial",
    image: "/placeholder.svg",
    priceMultiplier: 1.15
  },
  {
    id: 28,
    name: "Lombinho",
    description: "Molho de tomate, mussarela, lombo canadense e catupiry",
    category: "especial",
    image: "/placeholder.svg",
    priceMultiplier: 1.15
  },
  {
    id: 29,
    name: "Brócolis com Alho",
    description: "Molho de tomate, mussarela, brócolis e alho frito",
    category: "especial",
    image: "/placeholder.svg",
    priceMultiplier: 1.15
  },
  {
    id: 30,
    name: "Vegetariana",
    description: "Molho de tomate, mussarela, palmito, champignon e ervilha",
    category: "especial",
    image: "/pizza-vegetariana.jpg",
    priceMultiplier: 1.15
  },
  {
    id: 31,
    name: "Frango",
    description: "Molho de tomate, mussarela e frango desfiado",
    category: "especial",
    image: "/placeholder.svg",
    priceMultiplier: 1.15
  },
  {
    id: 32,
    name: "Frango com Alho",
    description: "Molho de tomate, mussarela, frango desfiado e alho frito",
    category: "especial",
    image: "/placeholder.svg",
    priceMultiplier: 1.15
  },
  {
    id: 33,
    name: "Frango com Catupiry",
    description: "Molho de tomate, mussarela, frango desfiado e catupiry",
    category: "especial",
    image: "/placeholder.svg",
    priceMultiplier: 1.15
  },
  {
    id: 34,
    name: "Frango com Cheddar",
    description: "Molho de tomate, mussarela, frango desfiado e cheddar",
    category: "especial",
    image: "/placeholder.svg",
    priceMultiplier: 1.15
  },
  {
    id: 35,
    name: "Frango com Milho",
    description: "Molho de tomate, mussarela, frango desfiado e milho",
    category: "especial",
    image: "/placeholder.svg",
    priceMultiplier: 1.15
  },

  // Sabores Premium
  {
    id: 36,
    name: "Sertaneja",
    description: "Molho de tomate, carne de sol desfiada, mussarela, cebola roxa e coentro",
    category: "premium",
    image: "/placeholder.svg",
    priceMultiplier: 1.30
  },
  {
    id: 37,
    name: "Nordestina",
    description: "Molho de tomate, carne seca desfiada, mussarela, queijo coalho e pimenta biquinho",
    category: "premium",
    image: "/placeholder.svg",
    priceMultiplier: 1.30
  },
  {
    id: 38,
    name: "Peito de Peru",
    description: "Molho de tomate, peito de peru, mussarela, tomate seco e rúcula",
    category: "premium",
    image: "/placeholder.svg",
    priceMultiplier: 1.30
  },
  {
    id: 39,
    name: "5 Queijos",
    description: "Molho de tomate, mussarela, catupiry, gorgonzola, parmesão e provolone",
    category: "premium",
    image: "/placeholder.svg",
    priceMultiplier: 1.30
  },
  {
    id: 40,
    name: "4 Queijos Especial",
    description: "Molho de tomate, mussarela, requeijão, gorgonzola e parmesão",
    category: "premium",
    image: "/placeholder.svg",
    priceMultiplier: 1.30
  },
  {
    id: 41,
    name: "Marguerita Premium",
    description: "Molho de tomate, mussarela de búfala, tomate cereja e manjericão fresco",
    category: "premium",
    image: "/placeholder.svg",
    priceMultiplier: 1.30
  },
  {
    id: 42,
    name: "Frango Especial",
    description: "Molho de tomate, mussarela, frango desfiado, catupiry e milho verde",
    category: "premium",
    image: "/placeholder.svg",
    priceMultiplier: 1.30
  },
  {
    id: 43,
    name: "Brócolis com Catupiry",
    description: "Molho de tomate, brócolis, catupiry, mussarela e alho frito",
    category: "premium",
    image: "/placeholder.svg",
    priceMultiplier: 1.30
  },
  {
    id: 44,
    name: "Corn Bacon",
    description: "Molho de tomate, mussarela, bacon e milho verde",
    category: "premium",
    image: "/placeholder.svg",
    priceMultiplier: 1.30
  },
  {
    id: 45,
    name: "Bacon com Ovos",
    description: "Molho de tomate, mussarela, bacon e ovos de codorna",
    category: "premium",
    image: "/placeholder.svg",
    priceMultiplier: 1.30
  },
  {
    id: 46,
    name: "Bacon com Champignon",
    description: "Molho de tomate, mussarela, bacon e champignon",
    category: "premium",
    image: "/placeholder.svg",
    priceMultiplier: 1.30
  },
  {
    id: 47,
    name: "Bacon Especial",
    description: "Molho de tomate, mussarela, bacon, cheddar e catupiry",
    category: "premium",
    image: "/placeholder.svg",
    priceMultiplier: 1.30
  },
  {
    id: 48,
    name: "Carbonara",
    description: "Molho branco, parmesão, bacon e ovos",
    category: "premium",
    image: "/placeholder.svg",
    priceMultiplier: 1.30
  },
  {
    id: 49,
    name: "Vegetariana Especial",
    description: "Molho de tomate, palmito, cogumelos, pimentão e azeitonas",
    category: "premium",
    image: "/placeholder.svg",
    priceMultiplier: 1.30
  },
  {
    id: 50,
    name: "Havaiana Especial",
    description: "Molho de tomate, mussarela, presunto, abacaxi e leite condensado",
    category: "premium",
    image: "/placeholder.svg",
    priceMultiplier: 1.30
  }
];
