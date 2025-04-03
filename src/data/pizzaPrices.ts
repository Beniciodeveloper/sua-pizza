
// Tabela de preços das pizzas
export interface PizzaPrice {
  size: string;
  category: string;
  price: number;
  multiFlavorPrice?: number;
}

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
