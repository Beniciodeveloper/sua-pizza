
import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const FloatingCartButton = () => {
  const { itemCount } = useCart();

  // Don't show the button if the cart is empty
  if (itemCount === 0) return null;

  return (
    <Link
      to="/checkout"
      className="fixed bottom-6 right-6 z-50 bg-pizza-primary text-white rounded-full shadow-lg flex items-center justify-center p-3 hover:bg-pizza-secondary transition-colors"
      aria-label="View cart"
    >
      <ShoppingBag className="h-6 w-6" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
        {itemCount}
      </span>
    </Link>
  );
};

export default FloatingCartButton;
