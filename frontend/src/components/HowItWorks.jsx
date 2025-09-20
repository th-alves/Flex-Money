import React from "react";
import { Building, Users, CreditCard, TrendingUp } from "lucide-react";
import { howItWorksSteps } from "../data/mockData";

const iconComponents = {
  Building,
  Users,
  CreditCard,
  TrendingUp
};

const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Como a <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Reaply</span> funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Em apenas 4 passos simples, transformamos a gestão de benefícios da sua empresa
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-0 w-full h-0.5 bg-gradient-to-r from-emerald-200 via-teal-200 to-emerald-200"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => {
              const IconComponent = iconComponents[step.icon];
              return (
                <div key={step.id} className="relative">
                  {/* Step card */}
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    {/* Step number */}
                    <div className="absolute -top-4 left-8">
                      <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-600 text-white rounded-full font-bold text-sm">
                        {step.id}
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl mb-6 mx-auto">
                      <IconComponent className="w-8 h-8 text-emerald-600" />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for desktop */}
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-24 -right-4 w-8 h-8">
                      <div className="w-6 h-6 bg-emerald-600 rotate-45 transform translate-x-1 translate-y-1"></div>
                      <div className="absolute top-0 left-0 w-6 h-6 bg-white rotate-45 transform"></div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para começar?
            </h3>
            <p className="text-gray-600 mb-6">
              Configure sua empresa em menos de 10 minutos
            </p>
            <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Começar Setup Gratuito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;