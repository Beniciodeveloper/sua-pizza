
import React, { useState } from 'react';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useCart } from '../contexts/CartContext';
import { formatCurrency } from '../utils/formatCurrency';
import { ArrowLeft, ArrowRight, Check, MapPin, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';
import ScrollReveal from './ScrollReveal';

interface Address {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  numero: string;
  complemento: string;
}

const MultiStepCheckout: React.FC = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart, total, clearCart } = useCart();
  const [activeStep, setActiveStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  
  const [address, setAddress] = useState<Address>({
    cep: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: '',
    numero: '',
    complemento: ''
  });

  const [customer, setCustomer] = useState({
    name: '',
    phone: '',
    paymentMethod: 'dinheiro',
    change: ''
  });

  const handleCepBlur = async () => {
    if (address.cep.length < 8) return;

    try {
      setIsLoading(true);
      const response = await fetch(`https://viacep.com.br/ws/${address.cep}/json/`);
      const data = await response.json();
      
      if (data.erro) {
        toast.error('CEP não encontrado');
        return;
      }

      setAddress(prev => ({
        ...prev,
        logradouro: data.logradouro,
        bairro: data.bairro,
        localidade: data.localidade,
        uf: data.uf
      }));
    } catch (error) {
      toast.error('Erro ao buscar o CEP');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      if (parent === 'address') {
        setAddress(prev => ({ ...prev, [child]: value }));
      } else if (parent === 'customer') {
        setCustomer(prev => ({ ...prev, [child]: value }));
      }
    } else {
      if (Object.keys(address).includes(name)) {
        setAddress(prev => ({ ...prev, [name]: value }));
      } else {
        setCustomer(prev => ({ ...prev, [name]: value }));
      }
    }
  };

  const isStepValid = () => {
    if (activeStep === 0) {
      return cart.length > 0;
    } else if (activeStep === 1) {
      return address.cep.length === 8 && 
             address.logradouro.trim() !== '' && 
             address.bairro.trim() !== '' && 
             address.localidade.trim() !== '' && 
             address.uf.trim() !== '' && 
             address.numero.trim() !== '';
    } else if (activeStep === 2) {
      return customer.name.trim() !== '' && 
             customer.phone.trim() !== '' &&
             (customer.paymentMethod !== 'dinheiro' || customer.change.trim() !== '');
    }
    return false;
  };

  const handleNext = () => {
    if (!isStepValid()) {
      toast.error('Por favor, preencha todos os campos obrigatórios');
      return;
    }
    setActiveStep(prev => prev + 1);
  };

  const handleBack = () => {
    setActiveStep(prev => prev - 1);
  };

  const handleSubmitOrder = () => {
    if (!isStepValid()) {
      toast.error('Por favor, preencha todos os campos obrigatórios');
      return;
    }

    // Formatando a mensagem para o WhatsApp
    const currentDate = new Date().toLocaleDateString('pt-BR');
    const currentTime = new Date().toLocaleTimeString('pt-BR');
    
    let message = `*Pedido - ${currentDate} às ${currentTime}*\n\n`;
    message += `*Cliente:* ${customer.name}\n`;
    message += `*Telefone:* ${customer.phone}\n`;
    message += `*Endereço:* ${address.logradouro}, ${address.numero}, ${address.bairro}, ${address.localidade}-${address.uf}\n`;
    
    if (address.complemento) {
      message += `*Complemento:* ${address.complemento}\n`;
    }
    
    message += `\n*Itens do Pedido:*\n`;
    
    cart.forEach((item) => {
      message += `${item.quantity}x ${item.name} - ${formatCurrency(item.price * item.quantity)}\n`;
    });
    
    message += `\n*Total:* ${formatCurrency(total)}\n`;
    message += `*Forma de Pagamento:* ${customer.paymentMethod === 'dinheiro' ? 'Dinheiro' : 
                 customer.paymentMethod === 'cartao_credito' ? 'Cartão de Crédito' : 
                 customer.paymentMethod === 'cartao_debito' ? 'Cartão de Débito' : 'PIX'}`;
    
    if (customer.paymentMethod === 'dinheiro' && customer.change) {
      message += `\n*Troco para:* R$ ${customer.change}`;
    }
    
    // Codificando a mensagem para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Número de WhatsApp atualizado
    const phoneNumber = '5571991017313';
    
    // URL para o WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Limpar o carrinho e redirecionar para o WhatsApp
    clearCart();
    window.open(whatsappUrl, '_blank');
  };

  const steps = [
    {
      title: 'Carrinho',
      icon: <ShoppingBag className="h-5 w-5" />
    },
    {
      title: 'Endereço',
      icon: <MapPin className="h-5 w-5" />
    },
    {
      title: 'Finalizar',
      icon: <Check className="h-5 w-5" />
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-3xl mx-auto">
      {/* Stepper */}
      <div className="mb-8">
        <div className="flex items-center justify-center">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    index <= activeStep ? "bg-pizza-primary text-white" : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step.icon}
                </div>
                <span className={`text-xs mt-2 ${
                  index <= activeStep ? "text-pizza-primary font-medium" : "text-gray-500"
                }`}>
                  {step.title}
                </span>
              </div>

              {/* Connector */}
              {index < steps.length - 1 && (
                <div
                  className={`w-16 h-1 mx-2 ${
                    index < activeStep ? "bg-pizza-primary" : "bg-gray-200"
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <Tabs value={activeStep.toString()} className="w-full">
        {/* Step 1: Cart Items */}
        <TabsContent value="0">
          <ScrollReveal>
            <h2 className="text-xl font-bold mb-4 border-b pb-2">Itens do Pedido</h2>
          </ScrollReveal>

          {cart.length === 0 ? (
            <div className="text-center py-8">
              <ShoppingBag className="h-12 w-12 mx-auto text-gray-300 mb-3" />
              <p className="text-gray-500">Seu carrinho está vazio</p>
            </div>
          ) : (
            <div>
              <div className="space-y-4 max-h-[400px] overflow-y-auto p-1">
                {cart.map((item) => (
                  <ScrollReveal key={item.id}>
                    <div className="flex items-center border-b pb-4">
                      <div className="h-16 w-16 rounded-md overflow-hidden mr-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "/pizzatamanhos.jpg";
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-600">{formatCurrency(item.price)}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
                        >
                          -
                        </button>
                        <span className="w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-2 text-red-500"
                        >
                          &times;
                        </button>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span className="text-pizza-primary">{formatCurrency(total)}</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          )}

          <ScrollReveal>
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleNext}
                disabled={cart.length === 0}
                className={`px-6 py-2 rounded-lg flex items-center ${
                  cart.length === 0
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-pizza-primary text-white hover:bg-pizza-secondary"
                }`}
              >
                Próximo
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </ScrollReveal>
        </TabsContent>

        {/* Step 2: Address */}
        <TabsContent value="1">
          <ScrollReveal>
            <h2 className="text-xl font-bold mb-4 border-b pb-2">Endereço de Entrega</h2>
          </ScrollReveal>

          <div className="grid gap-4 md:grid-cols-2">
            <ScrollReveal>
              <div className="mb-4">
                <label htmlFor="cep" className="block text-sm font-medium text-gray-700 mb-1">
                  CEP *
                </label>
                <input
                  type="text"
                  id="cep"
                  name="cep"
                  value={address.cep}
                  onChange={(e) => {
                    // Remove non-numeric characters
                    const value = e.target.value.replace(/\D/g, '');
                    if (value.length <= 8) {
                      setAddress({ ...address, cep: value });
                    }
                  }}
                  onBlur={handleCepBlur}
                  maxLength={8}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="00000000"
                  required
                />
              </div>
            </ScrollReveal>

            {isLoading && (
              <div className="col-span-2 text-center py-4">
                <p>Buscando endereço...</p>
              </div>
            )}

            <ScrollReveal>
              <div className="mb-4">
                <label htmlFor="logradouro" className="block text-sm font-medium text-gray-700 mb-1">
                  Rua *
                </label>
                <input
                  type="text"
                  id="logradouro"
                  name="logradouro"
                  value={address.logradouro}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mb-4">
                <label htmlFor="numero" className="block text-sm font-medium text-gray-700 mb-1">
                  Número *
                </label>
                <input
                  type="text"
                  id="numero"
                  name="numero"
                  value={address.numero}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mb-4">
                <label htmlFor="complemento" className="block text-sm font-medium text-gray-700 mb-1">
                  Complemento
                </label>
                <input
                  type="text"
                  id="complemento"
                  name="complemento"
                  value={address.complemento}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Apto, bloco, referência..."
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mb-4">
                <label htmlFor="bairro" className="block text-sm font-medium text-gray-700 mb-1">
                  Bairro *
                </label>
                <input
                  type="text"
                  id="bairro"
                  name="bairro"
                  value={address.bairro}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mb-4">
                <label htmlFor="localidade" className="block text-sm font-medium text-gray-700 mb-1">
                  Cidade *
                </label>
                <input
                  type="text"
                  id="localidade"
                  name="localidade"
                  value={address.localidade}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </ScrollReveal>

            <ScrollReveal>
              <div className="mb-4">
                <label htmlFor="uf" className="block text-sm font-medium text-gray-700 mb-1">
                  Estado *
                </label>
                <input
                  type="text"
                  id="uf"
                  name="uf"
                  value={address.uf}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                  maxLength={2}
                />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="mt-6 flex justify-between">
              <button
                onClick={handleBack}
                className="px-6 py-2 rounded-lg flex items-center border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </button>
              <button
                onClick={handleNext}
                disabled={!isStepValid()}
                className={`px-6 py-2 rounded-lg flex items-center ${
                  !isStepValid()
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-pizza-primary text-white hover:bg-pizza-secondary"
                }`}
              >
                Próximo
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </ScrollReveal>
        </TabsContent>

        {/* Step 3: Finish Order */}
        <TabsContent value="2">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <ScrollReveal>
                <h2 className="text-xl font-bold mb-4 border-b pb-2">Dados Pessoais</h2>
              </ScrollReveal>
              
              <ScrollReveal>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={customer.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={customer.phone}
                    onChange={(e) => {
                      // Format phone number: (XX) XXXXX-XXXX
                      const value = e.target.value.replace(/\D/g, '');
                      if (value.length <= 11) {
                        let formatted = value;
                        if (value.length > 2) {
                          formatted = `(${value.slice(0, 2)}) ${value.slice(2)}`;
                        }
                        if (value.length > 7) {
                          formatted = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
                        }
                        setCustomer({ ...customer, phone: formatted });
                      }
                    }}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="(00) 00000-0000"
                    required
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="mb-4">
                  <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">
                    Forma de Pagamento *
                  </label>
                  <select
                    id="paymentMethod"
                    name="paymentMethod"
                    value={customer.paymentMethod}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  >
                    <option value="dinheiro">Dinheiro</option>
                    <option value="cartao_credito">Cartão de Crédito</option>
                    <option value="cartao_debito">Cartão de Débito</option>
                    <option value="pix">PIX</option>
                  </select>
                </div>
              </ScrollReveal>

              {customer.paymentMethod === 'dinheiro' && (
                <ScrollReveal>
                  <div className="mb-4">
                    <label htmlFor="change" className="block text-sm font-medium text-gray-700 mb-1">
                      Troco para *
                    </label>
                    <input
                      type="text"
                      id="change"
                      name="change"
                      value={customer.change}
                      onChange={(e) => {
                        // Format as currency and allow only numbers and one decimal point
                        const value = e.target.value.replace(/[^\d.,]/g, '');
                        setCustomer({ ...customer, change: value });
                      }}
                      className="w-full p-2 border border-gray-300 rounded-md"
                      placeholder="0,00"
                      required
                    />
                  </div>
                </ScrollReveal>
              )}
            </div>

            <div>
              <ScrollReveal>
                <h2 className="text-xl font-bold mb-4 border-b pb-2">Resumo do Pedido</h2>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold mb-2">Itens:</h3>
                  <ul className="space-y-2">
                    {cart.map((item) => (
                      <li key={item.id} className="flex justify-between text-sm">
                        <span>{item.quantity}x {item.name}</span>
                        <span>{formatCurrency(item.price * item.quantity)}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-3 pt-3 border-t border-gray-200 flex justify-between font-bold">
                    <span>Total</span>
                    <span className="text-pizza-primary">{formatCurrency(total)}</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Endereço de Entrega:</h3>
                  <p className="text-sm">
                    {address.logradouro}, {address.numero}
                    {address.complemento && `, ${address.complemento}`}
                    <br />
                    {address.bairro}, {address.localidade}-{address.uf}
                    <br />
                    CEP: {address.cep}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal>
            <div className="mt-6 flex justify-between">
              <button
                onClick={handleBack}
                className="px-6 py-2 rounded-lg flex items-center border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </button>
              <button
                onClick={handleSubmitOrder}
                disabled={!isStepValid()}
                className={`px-8 py-3 rounded-lg font-semibold ${
                  !isStepValid()
                    ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                    : "bg-green-600 text-white hover:bg-green-700 whatsapp-button"
                }`}
              >
                Finalizar Pedido
              </button>
            </div>
          </ScrollReveal>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default MultiStepCheckout;
