import React from "react";
import { Zap, TrendingUp, Gift, BarChart3, Shield, Trophy } from "lucide-react";
import { features } from "../data/mockData";

const iconComponents = {
  Zap,
  TrendingUp,
  Gift,
  BarChart3,
  Shield,
  Trophy
};

const colorVariants = {
  emerald: "from-emerald-100 to-emerald-200 text-emerald-600",
  blue: "from-blue-100 to-blue-200 text-blue-600",
  purple: "from-purple-100 to-purple-200 text-purple-600",
  orange: "from-orange-100 to-orange-200 text-orange-600",
  red: "from-red-100 to-red-200 text-red-600",
  yellow: "from-yellow-100 to-yellow-200 text-yellow-600"
};

const Features = () => {
  return (
    <section id="diferenciais" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Diferenciais que fazem <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">a diferença</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recursos inovadores que transformam benefícios tradicionais em oportunidades de crescimento financeiro
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = iconComponents[feature.icon];
            const colorClass = colorVariants[feature.color];
            
            return (
              <div 
                key={feature.id} 
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${colorClass} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover effect */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="h-1 w-full bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Image Section */}
        <div className="mt-20">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1579621970563-ebec7560ff3e"
              alt="Crescimento Financeiro"
              className="w-full h-64 object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 to-teal-900/80 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-3xl font-bold mb-4">
                  Faça seu dinheiro crescer
                </h3>
                <p className="text-xl opacity-90 mb-6">
                  Transforme benefícios em investimentos inteligentes
                </p>
                <button className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-semibold hover:bg-emerald-50 transition-colors duration-200">
                  Ver Simulação
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;