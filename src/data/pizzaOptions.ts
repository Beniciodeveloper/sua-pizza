
// Arquivo central para exportar todos os módulos relacionados a pizza
import { PizzaSize, pizzaSizes } from './pizzaSizes';
import { PizzaCategory, flavorCategories } from './pizzaCategories';
import { PizzaFlavor, pizzaFlavors } from './pizzaFlavors';
import { PizzaBorder, pizzaBorders } from './pizzaBorders';
import { PizzaPrice, pizzaPrices } from './pizzaPrices';

// Re-exporta todos os tipos e dados
export {
  PizzaSize, pizzaSizes,
  PizzaCategory, flavorCategories,
  PizzaFlavor, pizzaFlavors,
  PizzaBorder, pizzaBorders,
  PizzaPrice, pizzaPrices,
};

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
