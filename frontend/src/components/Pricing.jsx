import React from "react";
import { Check, Star, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { pricingPlans } from "../data/mockData";

const Pricing = () => {
  return (
    <section id="precos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Planos que se adaptam ao seu <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">negócio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Escolha o plano ideal para sua empresa e comece a transformar benefícios hoje mesmo
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div 
              key={plan.id}
              className={`relative rounded-2xl p-8 transition-all duration-300 transform hover:-translate-y-2 ${
                plan.highlighted 
                  ? 'bg-gradient-to-br from-emerald-600 to-teal-600 text-white shadow-2xl scale-105' 
                  : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Most Popular Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex items-center px-4 py-2 bg-yellow-400 text-yellow-900 rounded-full text-sm font-bold">
                    <Star className="w-4 h-4 mr-2" />
                    Mais Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.highlighted ? 'text-emerald-100' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  {plan.price !== "Grátis" && plan.price !== "Personalizado" && (
                    <span className={`text-lg ${plan.highlighted ? 'text-emerald-100' : 'text-gray-600'}`}>
                      /{plan.period}
                    </span>
                  )}
                  {(plan.price === "Grátis" || plan.price === "Personalizado") && (
                    <div className={`text-sm mt-1 ${plan.highlighted ? 'text-emerald-100' : 'text-gray-600'}`}>
                      {plan.period}
                    </div>
                  )}
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                      plan.highlighted ? 'text-emerald-200' : 'text-emerald-600'
                    }`} />
                    <span className={`text-sm ${plan.highlighted ? 'text-emerald-50' : 'text-gray-700'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button 
                className={`w-full py-3 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 ${
                  plan.highlighted
                    ? 'bg-white text-emerald-600 hover:bg-emerald-50'
                    : 'bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white'
                } shadow-lg hover:shadow-xl`}
              >
                {plan.highlighted && <Zap className="w-4 h-4 mr-2" />}
                {plan.buttonText}
              </Button>

              {/* Guarantee */}
              {plan.highlighted && (
                <div className="text-center mt-4">
                  <p className="text-emerald-100 text-sm">
                    ✓ Teste grátis por 30 dias
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Precisa de algo personalizado?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe está pronta para criar uma solução sob medida para sua empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Falar com Especialista
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-lg font-semibold transition-all duration-200"
              >
                Ver Demonstração
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;