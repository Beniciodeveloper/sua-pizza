
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'bebida' | 'sobremesa' | 'montar' | 'combo';
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export const categories: Category[] = [
  {
    id: "montar",
    name: "Montar Pizza",
    icon: "🍕",
  },
  {
    id: "combo",
    name: "Combos",
    icon: "🔥",
  },
  {
    id: "bebida",
    name: "Bebidas",
    icon: "🥤",
  },
  {
    id: "sobremesa",
    name: "Sobremesas",
    icon: "🍰",
  }
];

export const products: Product[] = [
  // Combos
  {
    id: 100,
    name: "Combo Família",
    description: "Pizza família + Pizza média doce + Refrigerante",
    price: 74.90,
    image: "/combo.jpg",
    category: "combo",
  },
  {
    id: 101,
    name: "Combo Big",
    description: "2 Pizzas grandes + Pizza média",
    price: 102.90,
    image: "/combo.jpg",
    category: "combo",
  },
  {
    id: 102,
    name: "Rodízio em Casa",
    description: "Escolha 7 sabores e faça seu rodízio",
    price: 194.90,
    image: "/combo.jpg",
    category: "combo",
  },
  
  // Bebidas
  {
    id: 7,
    name: "Coca-Cola 2L",
    description: "Refrigerante Coca-Cola garrafa 2 litros",
    price: 12.90,
    image: "/cocacola.webp",
    category: "bebida",
  },
  {
    id: 8,
    name: "Guaraná Antarctica 2L",
    description: "Refrigerante Guaraná Antarctica garrafa 2 litros",
    price: 10.90,
    image: "/atartica2l.webp",
    category: "bebida",
  },
  {
    id: 9,
    name: "Suco de Laranja 1L",
    description: "Suco de laranja natural 1 litro",
    price: 14.90,
    image: "/laranja1l.webp",
    category: "bebida",
  },
  {
    id: 10,
    name: "Água Mineral 500ml",
    description: "Água mineral sem gás 500ml",
    price: 4.90,
    image: "/aguamineral500.webp",
    category: "bebida",
  },
  
  // Sobremesas
  {
    id: 11,
    name: "Petit Gateau",
    description: "Bolinho de chocolate com interior cremoso, servido com sorvete de creme",
    price: 18.90,
    image: "/petit.jpg",
    category: "sobremesa",
  },
  {
    id: 12,
    name: "Cheesecake",
    description: "Torta de cream cheese com calda de frutas vermelhas",
    price: 16.90,
    image: "/chesskake.avif",
    category: "sobremesa",
  },
  {
    id: 13,
    name: "Mousse de Chocolate",
    description: "Mousse de chocolate meio amargo com raspas de chocolate",
    price: 14.90,
    image: "/mussechocolate.jpg",
    category: "sobremesa",
  }
];
