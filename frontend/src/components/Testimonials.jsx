import React from "react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "../data/mockData";

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            O que nossos <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">clientes dizem</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas e funcionários que já transformaram seus benefícios com a Reaply
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-full">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex items-center mb-4 mt-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-emerald-100"
                />
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} • {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Junte-se a mais de 500 empresas
            </h3>
            <p className="text-gray-600 mb-6">
              Que já transformaram seus benefícios corporativos com a Reaply
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-3 rounded-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Implementar na Empresa
              </button>
              <button className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-3 rounded-lg font-semibold transition-all duration-200">
                Agendar Demonstração
              </button>
            </div>
          </div>
        </div>

        {/* Corporate clients section */}
        <div className="mt-16">
          <p className="text-center text-gray-500 mb-8">Empresas parceiras:</p>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <img
              src="https://images.pexels.com/photos/6170758/pexels-photo-6170758.jpeg"
              alt="Parceiro corporativo"
              className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;