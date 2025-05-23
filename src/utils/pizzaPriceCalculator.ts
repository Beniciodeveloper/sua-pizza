
import type { PizzaFlavor } from '../data/pizzaOptions';
import { pizzaPrices } from '../data/pizzaOptions';
import type { PizzaBorder } from '../data/pizzaOptions';

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

  // Para pizzas pequenas com sabores diferentes, aplica o preço de múltiplos sabores
  // apenas se os sabores forem de categorias diferentes
  let basePrice = priceObj.price;
  
  // Verifica se é pizza pequena e tem múltiplos sabores
  if (sizeId === 'small' && flavors.length > 1) {
    // Verifica se os sabores são de categorias diferentes
    const uniqueCategories = new Set(categories);
    if (uniqueCategories.size > 1) {
      // Se tiver categorias diferentes, usa o preço para múltiplos sabores
      basePrice = priceObj.multiFlavorPrice || priceObj.price;
    }
    // Se todos os sabores forem da mesma categoria, mantém o preço padrão (já definido acima)
  }

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
