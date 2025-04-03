
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl mr-2">🍕</span>
          <h1 className="text-xl font-bold text-pizza-dark">
            <span className="text-pizza-primary">Pizza</span>Express
          </h1>
        </Link>

        {/* Menu para desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="font-medium hover:text-pizza-primary transition-colors">
            Cardápio
          </Link>
          <Link to="/about" className="font-medium hover:text-pizza-primary transition-colors">
            Sobre
          </Link>
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-pizza-dark hover:text-pizza-primary transition-colors" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pizza-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse-soft">
                {cartItemCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Menu para mobile */}
        <div className="flex items-center md:hidden">
          <Link to="/cart" className="relative mr-4">
            <ShoppingCart className="h-6 w-6 text-pizza-dark" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-pizza-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse-soft">
                {cartItemCount}
              </span>
            )}
          </Link>
          <button 
            className="text-pizza-dark focus:outline-none" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in-up">
          <div className="container mx-auto px-4 py-3">
            <Link 
              to="/" 
              className="block py-2 font-medium hover:text-pizza-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Cardápio
            </Link>
            <Link 
              to="/about" 
              className="block py-2 font-medium hover:text-pizza-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
