
import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../utils/formatCurrency';

const FloatingCartButton = () => {
  const { itemCount, total } = useCart();

  // Don't show the button if the cart is empty
  if (itemCount === 0) return null;

  return (
    <Link
      to="/checkout"
      className="fixed bottom-6 right-6 z-50 bg-pizza-primary text-white rounded-full shadow-lg flex items-center py-2 px-4 hover:bg-pizza-secondary transition-colors"
    >
      <ShoppingBag className="mr-2" />
      <div>
        <span className="font-bold">{itemCount} {itemCount === 1 ? 'item' : 'itens'}</span>
        <p className="text-sm">{formatCurrency(total)}</p>
      </div>
    </Link>
  );
};

export default FloatingCartButton;
