
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
    image: "pizzatamanhos.jpg",
    basePrice: 34.90
  },
  {
    id: "medium",
    name: "Pizza Média",
    diameter: "35cm",
    slices: 10,
    maxFlavors: 3,
    image: "/pizzatamanhos.jpg",
    basePrice: 39.90
  },
  {
    id: "large",
    name: "Pizza Grande",
    diameter: "40cm",
    slices: 12,
    maxFlavors: 4,
    image: "pizzatamanhos.jpg",
    basePrice: 44.90
  }
];
