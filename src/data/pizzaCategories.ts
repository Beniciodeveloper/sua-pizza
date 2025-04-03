
// Categorias de sabores de pizza
export interface PizzaCategory {
  id: string;
  name: string;
  description?: string;
}

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
