
import React, { useState } from 'react';
import { ShoppingBag, X, ArrowRight } from 'lucide-react';
import CartItem from './CartItem';
import { useCart } from '../contexts/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import { Link } from 'react-router-dom';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity, total, itemCount } = useCart();

  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 w-full md:w-96 bg-white shadow-xl transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold flex items-center">
            <ShoppingBag className="mr-2 h-5 w-5 text-pizza-primary" />
            Seu Carrinho
            {itemCount > 0 && (
              <span className="ml-2 bg-pizza-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Fechar carrinho"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <ShoppingBag className="h-16 w-16 text-gray-300 mb-4" />
              <p className="text-gray-500">Seu carrinho está vazio</p>
              <button
                onClick={onClose}
                className="mt-4 text-pizza-primary font-medium underline"
              >
                Continue comprando
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  onRemove={removeFromCart}
                  onIncrease={increaseQuantity}
                  onDecrease={decreaseQuantity}
                />
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-4 border-t">
            <div className="flex justify-between mb-2">
              <span className="font-medium">Subtotal</span>
              <span>{formatCurrency(total)}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="font-medium">Entrega</span>
              <span>Grátis</span>
            </div>
            <div className="flex justify-between mb-6">
              <span className="font-bold text-lg">Total</span>
              <span className="font-bold text-lg text-pizza-primary">{formatCurrency(total)}</span>
            </div>
            <Link
              to="/checkout"
              onClick={onClose}
              className="w-full bg-pizza-primary hover:bg-pizza-secondary text-white py-3 rounded-lg flex items-center justify-center transition-colors"
            >
              Finalizar Pedido
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
