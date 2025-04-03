
import { PizzaFlavor } from '../data/pizzaFlavors';
import { pizzaPrices } from '../data/pizzaPrices';
import { PizzaBorder } from '../data/pizzaBorders';

/**
 * Calcula o preço de uma pizza com base no tamanho e sabores selecionados
 */
export const calculatePizzaPrice = (
  sizeId: string,
  flavors: PizzaFlavor[],
  borderOption?: PizzaBorder | null
): number => {
  if (!flavors.length) return 0;

  // Encontra a categoria mais cara entre os sabores selecionados
  const categories = flavors.map((flavor) => flavor.category);
  const highestCategory = categories.includes('premium') 
    ? 'premium' 
    : categories.includes('especial') 
      ? 'especial' 
      : categories.includes('tradicional-doce')
        ? 'tradicional-doce'
        : 'tradicional';

  // Encontra o preço apropriado na tabela de preços
  const priceObj = pizzaPrices.find(
    (price) => price.size === sizeId && price.category === highestCategory
  );

  if (!priceObj) return 0;

  // Para pizzas pequenas, verifica se precisa aplicar o preço de múltiplos sabores
  const basePrice = (sizeId === 'small' && flavors.length > 1) 
    ? (priceObj.multiFlavorPrice || priceObj.price)
    : priceObj.price;

  // Adiciona o preço da borda, se selecionada
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
