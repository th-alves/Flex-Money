import React from "react";
import { Button } from "./ui/button";
import { ArrowRight, Play, TrendingUp, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-left">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold mb-8 animate-pulse">
              <Zap className="w-4 h-4 mr-2" />
              Revolucione seus benefícios corporativos
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Faça seu saldo
              </span>
              <br />
              trabalhar por você
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Transforme benefícios não utilizados em investimentos inteligentes. 
              Ganhe cashback, faça seu dinheiro render e tenha total controle 
              sobre seus recursos corporativos.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-10">
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 bg-emerald-100 rounded-full">
                  <TrendingUp className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">12%</div>
                  <div className="text-sm text-gray-600">Rendimento médio</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center justify-center w-8 h-8 bg-teal-100 rounded-full">
                  <Shield className="w-4 h-4 text-teal-600" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Seguro e confiável</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Começar Gratuitamente
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Demonstração
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Empresas que confiam na Reaply:</p>
              <div className="flex items-center space-x-8 opacity-60">
                <div className="bg-gray-200 h-8 w-24 rounded"></div>
                <div className="bg-gray-200 h-8 w-24 rounded"></div>
                <div className="bg-gray-200 h-8 w-24 rounded"></div>
                <div className="bg-gray-200 h-8 w-24 rounded"></div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1748439435495-722cc1728b7e"
                alt="Dashboard Reaply"
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg animate-bounce">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-semibold">+R$ 347,82</span>
                </div>
                <p className="text-xs text-gray-600">Rendimento mensal</p>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg animate-pulse">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-semibold">4.8%</span>
                </div>
                <p className="text-xs text-gray-600">Cashback este mês</p>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl transform rotate-3 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;