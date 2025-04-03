
// Arquivo central para exportar todos os módulos relacionados a pizza
import { pizzaSizes } from './pizzaSizes';
import { flavorCategories } from './pizzaCategories'; 
import { pizzaFlavors } from './pizzaFlavors';
import { pizzaBorders } from './pizzaBorders';
import { pizzaPrices } from './pizzaPrices';

// Re-exporta todos os dados
export { 
  pizzaSizes,
  flavorCategories,
  pizzaFlavors,
  pizzaBorders,
  pizzaPrices,
};

// Re-exporta todos os tipos (usando export type para isolatedModules)
export type { PizzaSize } from './pizzaSizes';
export type { PizzaCategory } from './pizzaCategories';
export type { PizzaFlavor } from './pizzaFlavors';
export type { PizzaBorder } from './pizzaBorders';
export type { PizzaPrice } from './pizzaPrices';

// Também exporta interfaces adicionais que eram usadas no arquivo original
export interface PizzaCombo {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

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

// Importa e re-exporta a função calculatePizzaPrice de utils
import { calculatePizzaPrice } from '../utils/pizzaPriceCalculator';
export { calculatePizzaPrice };
