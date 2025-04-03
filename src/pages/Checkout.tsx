
import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import MultiStepCheckout from '../components/MultiStepCheckout';

const Checkout = () => {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-pizza-dark">Seu carrinho está vazio</h2>
          <p className="mb-6 text-gray-600">Adicione alguns produtos antes de finalizar o pedido.</p>
          <Link to="/" className="bg-pizza-primary text-white px-6 py-3 rounded-lg inline-block">
            Voltar para o menu
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16">
      <div className="container mx-auto px-4">
        <Link to="/" className="flex items-center mb-8 text-pizza-dark hover:text-pizza-primary transition-colors">
          <ChevronLeft className="h-5 w-5 mr-1" />
          Voltar para o menu
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center text-pizza-dark">Finalizar Pedido</h1>
        
        <MultiStepCheckout />
      </div>
    </div>
  );
};

export default Checkout;
