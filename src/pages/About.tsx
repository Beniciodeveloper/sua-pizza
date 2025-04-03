
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-8 pb-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <Link to="/" className="flex items-center mb-8 text-pizza-dark hover:text-pizza-primary transition-colors">
          <ChevronLeft className="h-5 w-5 mr-1" />
          Voltar para o menu
        </Link>

        <ScrollReveal>
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-pizza-dark">Sobre a PizzaExpress</h1>
        </ScrollReveal>

        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <ScrollReveal>
            <img 
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591" 
              alt="Pizza sendo preparada" 
              className="w-full h-64 object-cover object-center"
            />
          </ScrollReveal>

          <div className="p-6">
            <ScrollReveal>
              <h2 className="text-xl font-semibold mb-4 text-pizza-dark">Nossa História</h2>
              <p className="text-gray-700 mb-6">
                Fundada em 2010, a PizzaExpress nasceu da paixão por criar pizzas artesanais de alta qualidade. 
                Começamos como uma pequena pizzaria familiar e crescemos mantendo a dedicação à autenticidade 
                e aos ingredientes frescos.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="text-xl font-semibold mb-4 text-pizza-dark">Nossa Missão</h2>
              <p className="text-gray-700 mb-6">
                Proporcionar aos nossos clientes a melhor experiência gastronômica, com pizzas preparadas 
                com ingredientes selecionados, massas feitas diariamente e um atendimento de excelência.
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="text-xl font-semibold mb-4 text-pizza-dark">Nossos Valores</h2>
              <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2">
                <li>Qualidade sem compromissos</li>
                <li>Ingredientes frescos e selecionados</li>
                <li>Compromisso com a satisfação do cliente</li>
                <li>Inovação constante</li>
                <li>Respeito à tradição italiana</li>
              </ul>
            </ScrollReveal>

            <ScrollReveal>
              <h2 className="text-xl font-semibold mb-4 text-pizza-dark">Horário de Funcionamento</h2>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div>
                  <p className="font-medium">Segunda a Quinta:</p>
                  <p>18:00 - 23:00</p>
                </div>
                <div>
                  <p className="font-medium">Sexta a Domingo:</p>
                  <p>18:00 - 00:00</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 text-pizza-dark">Entre em Contato</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  <span className="font-medium">Endereço:</span> Rua das Pizzas, 123 - Centro
                </p>
                <p>
                  <span className="font-medium">Telefone:</span> (11) 99999-9999
                </p>
                <p>
                  <span className="font-medium">Email:</span> contato@pizzaexpress.com
                </p>
              </div>
              <div className="mt-6">
                <Link to="/" className="bg-pizza-primary hover:bg-pizza-secondary text-white py-3 px-6 rounded-lg inline-block transition-colors">
                  Ver Cardápio
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default About;
