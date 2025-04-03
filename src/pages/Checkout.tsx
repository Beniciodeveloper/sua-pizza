
import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import { ChevronLeft, Send } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const Checkout = () => {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    neighborhood: '',
    city: '',
    complement: '',
    paymentMethod: 'dinheiro',
    change: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      alert('Seu carrinho está vazio!');
      return;
    }
    
    // Formatando a mensagem para o WhatsApp
    const currentDate = new Date().toLocaleDateString('pt-BR');
    const currentTime = new Date().toLocaleTimeString('pt-BR');
    
    let message = `*Pedido - ${currentDate} às ${currentTime}*\n\n`;
    message += `*Cliente:* ${form.name}\n`;
    message += `*Telefone:* ${form.phone}\n`;
    message += `*Endereço:* ${form.address}, ${form.neighborhood}, ${form.city}\n`;
    
    if (form.complement) {
      message += `*Complemento:* ${form.complement}\n`;
    }
    
    message += `\n*Itens do Pedido:*\n`;
    
    cart.forEach((item) => {
      message += `${item.quantity}x ${item.name} - ${formatCurrency(item.price * item.quantity)}\n`;
    });
    
    message += `\n*Total:* ${formatCurrency(total)}\n`;
    message += `*Forma de Pagamento:* ${form.paymentMethod}`;
    
    if (form.paymentMethod === 'dinheiro' && form.change) {
      message += `\n*Troco para:* R$ ${form.change}`;
    }
    
    // Codificando a mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Número de WhatsApp (substitua pelo número correto)
    const phoneNumber = '5511999999999';
    
    // URL para o WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Limpar o carrinho e redirecionar para o WhatsApp
    clearCart();
    window.open(whatsappUrl, '_blank');
    navigate('/');
  };

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
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/" className="flex items-center mb-8 text-pizza-dark hover:text-pizza-primary transition-colors">
          <ChevronLeft className="h-5 w-5 mr-1" />
          Voltar para o menu
        </Link>

        <ScrollReveal>
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-pizza-dark">Finalizar Pedido</h1>
        </ScrollReveal>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6">
            <ScrollReveal>
              <h2 className="text-lg font-semibold mb-4 border-b pb-2">Resumo do Pedido</h2>
            </ScrollReveal>

            <div className="space-y-4">
              {cart.map((item) => (
                <ScrollReveal key={item.id}>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="font-medium">{item.quantity}x </span>
                      {item.name}
                    </div>
                    <span>{formatCurrency(item.price * item.quantity)}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal>
              <div className="mt-4 pt-4 border-t border-dashed">
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total</span>
                  <span className="text-pizza-primary">{formatCurrency(total)}</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6">
            <ScrollReveal>
              <h2 className="text-lg font-semibold mb-4 border-b pb-2">Informações para Entrega</h2>
            </ScrollReveal>

            <div className="space-y-4">
              <ScrollReveal>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pizza-primary focus:border-transparent"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pizza-primary focus:border-transparent"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Endereço *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pizza-primary focus:border-transparent"
                    placeholder="Rua, número"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <label htmlFor="neighborhood" className="block text-sm font-medium text-gray-700 mb-1">
                      Bairro *
                    </label>
                    <input
                      type="text"
                      id="neighborhood"
                      name="neighborhood"
                      value={form.neighborhood}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pizza-primary focus:border-transparent"
                      placeholder="Seu bairro"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                      Cidade *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pizza-primary focus:border-transparent"
                      placeholder="Sua cidade"
                    />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div>
                  <label htmlFor="complement" className="block text-sm font-medium text-gray-700 mb-1">
                    Complemento
                  </label>
                  <input
                    type="text"
                    id="complement"
                    name="complement"
                    value={form.complement}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pizza-primary focus:border-transparent"
                    placeholder="Apartamento, bloco, ponto de referência"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <h3 className="text-lg font-semibold mt-6 mb-4 border-b pb-2">Pagamento</h3>
              </ScrollReveal>

              <ScrollReveal>
                <div>
                  <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">
                    Forma de Pagamento *
                  </label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={form.paymentMethod}
                    onChange={handleChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pizza-primary focus:border-transparent"
                  >
                    <option value="dinheiro">Dinheiro</option>
                    <option value="cartao_credito">Cartão de Crédito</option>
                    <option value="cartao_debito">Cartão de Débito</option>
                    <option value="pix">PIX</option>
                  </select>
                </div>
              </ScrollReveal>

              {form.paymentMethod === 'dinheiro' && (
                <ScrollReveal>
                  <div>
                    <label htmlFor="change" className="block text-sm font-medium text-gray-700 mb-1">
                      Troco para
                    </label>
                    <input
                      type="number"
                      id="change"
                      name="change"
                      value={form.change}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pizza-primary focus:border-transparent"
                      placeholder="0.00"
                      min={total}
                      step="0.01"
                    />
                  </div>
                </ScrollReveal>
              )}
            </div>

            <ScrollReveal>
              <button
                type="submit"
                className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white py-4 rounded-lg font-bold flex items-center justify-center whatsapp-button"
              >
                <Send className="h-5 w-5 mr-2" />
                Enviar Pedido pelo WhatsApp
              </button>
            </ScrollReveal>

            <ScrollReveal>
              <p className="text-xs text-gray-500 mt-4 text-center">
                Ao clicar em "Enviar Pedido", você será redirecionado para o WhatsApp para confirmar seu pedido.
              </p>
            </ScrollReveal>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
