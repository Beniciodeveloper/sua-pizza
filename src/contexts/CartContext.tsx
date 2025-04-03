
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../data/products';
import { toast } from 'sonner';

export interface CartProduct extends Product {
  quantity: number;
  customPizzaSize?: 'small' | 'medium' | 'large'; // Added to track custom pizza sizes
}

interface CartContextType {
  cart: CartProduct[];
  addToCart: (product: Product, customPizzaSize?: 'small' | 'medium' | 'large') => void;
  removeFromCart: (id: number) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartProduct[]>([]);

  const addToCart = (product: Product, customPizzaSize?: 'small' | 'medium' | 'large') => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.customPizzaSize === customPizzaSize
      );
      
      if (existingProductIndex !== -1) {
        // If the product already exists, increase the quantity
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex] = {
          ...updatedCart[existingProductIndex],
          quantity: updatedCart[existingProductIndex].quantity + 1
        };
        toast.success(`Quantidade de ${product.name} aumentada`);
        return updatedCart;
      } else {
        // Add new product to the cart
        toast.success(`${product.name} adicionado ao carrinho`);
        return [...prevCart, { ...product, quantity: 1, customPizzaSize }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => {
      const product = prevCart.find((item) => item.id === id);
      if (product) {
        toast.info(`${product.name} removido do carrinho`);
      }
      return prevCart.filter((item) => item.id !== id);
    });
  };

  const increaseQuantity = (id: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((prevCart) => {
      const item = prevCart.find((item) => item.id === id);
      
      if (item && item.quantity === 1) {
        toast.info(`${item.name} removido do carrinho`);
        return prevCart.filter((item) => item.id !== id);
      }
      
      return prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    });
  };

  const clearCart = () => {
    setCart([]);
    toast.info('Carrinho limpo');
  };

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
