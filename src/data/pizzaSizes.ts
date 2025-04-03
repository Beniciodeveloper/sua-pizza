
// Tamanhos de pizza disponíveis
export interface PizzaSize {
  id: string;
  name: string;
  diameter: string;
  slices: number;
  maxFlavors: number;
  image: string;
  basePrice: number;
}

export const pizzaSizes: PizzaSize[] = [
  {
    id: "small",
    name: "Pizza Pequena",
    diameter: "30cm",
    slices: 8,
    maxFlavors: 2,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop&q=80",
    basePrice: 34.90
  },
  {
    id: "medium",
    name: "Pizza Média",
    diameter: "35cm",
    slices: 10,
    maxFlavors: 3,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=500&h=500&fit=crop&q=80",
    basePrice: 39.90
  },
  {
    id: "large",
    name: "Pizza Grande",
    diameter: "40cm",
    slices: 12,
    maxFlavors: 4,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=600&fit=crop&q=80",
    basePrice: 44.90
  }
];
