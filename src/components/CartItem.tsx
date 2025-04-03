
import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { CartProduct } from '../contexts/CartContext';
import { formatCurrency } from '../utils/formatCurrency';

interface CartItemProps {
  item: CartProduct;
  onRemove: (id: number) => void;
  onIncrease: (id: number) => void;
  onDecrease: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, onRemove, onIncrease, onDecrease }) => {
  // Determine which image to show
  const imageSrc = item.customPizzaSize ? `/pizza-${item.customPizzaSize}.jpg` : item.image;

  return (
    <div className="flex items-center py-4 border-b border-gray-200 animate-fade-in">
      <div className="h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
        <img
          src={imageSrc}
          alt={item.name}
          className="h-full w-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/100?text=Pizza';
          }}
        />
      </div>
      <div className="ml-4 flex-1">
        <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
        <p className="text-xs text-gray-500 mt-1 line-clamp-1">{item.description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm font-bold text-pizza-primary">
            {formatCurrency(item.price)}
          </span>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onDecrease(item.id)}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              disabled={item.quantity <= 1}
            >
              <Minus className="h-4 w-4 text-gray-500" />
            </button>
            <span className="text-gray-700 text-sm font-medium">{item.quantity}</span>
            <button
              onClick={() => onIncrease(item.id)}
              className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <Plus className="h-4 w-4 text-gray-500" />
            </button>
            <button
              onClick={() => onRemove(item.id)}
              className="p-1 rounded-full hover:bg-red-100 hover:text-red-500 transition-colors ml-2"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
