
import React from 'react';
import { Product } from '../data/products';
import { PlusCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { formatCurrency } from '../utils/formatCurrency';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, index }) => {
  return (
    <ScrollReveal delay={index * 100}>
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg pizza-card">
        <div className="h-48 overflow-hidden relative">
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
            <button 
              onClick={() => onAddToCart(product)}
              className="bg-pizza-primary text-white px-4 py-2 rounded-full flex items-center transform hover:scale-105 transition-transform"
            >
              <PlusCircle className="mr-2 h-5 w-5" />
              Adicionar ao Carrinho
            </button>
          </div>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = 'https://via.placeholder.com/300x200?text=Pizza+Express';
            }}
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-lg text-pizza-dark truncate">{product.name}</h3>
            <span className="font-bold text-pizza-primary">
              {formatCurrency(product.price)}
            </span>
          </div>
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">{product.description}</p>
          <button 
            onClick={() => onAddToCart(product)}
            className="mt-4 w-full bg-pizza-primary text-white py-2 rounded-lg hover:bg-pizza-secondary transition-colors flex items-center justify-center"
          >
            <PlusCircle className="mr-2 h-5 w-5" />
            Adicionar
          </button>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default ProductCard;
