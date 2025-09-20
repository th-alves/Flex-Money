import React, { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Zap } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-emerald-100 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Reaply
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("como-funciona")}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium"
            >
              Como Funciona
            </button>
            <button
              onClick={() => scrollToSection("diferenciais")}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium"
            >
              Diferenciais
            </button>
            <button
              onClick={() => scrollToSection("depoimentos")}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium"
            >
              Depoimentos
            </button>
            <button
              onClick={() => scrollToSection("precos")}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium"
            >
              Preços
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium"
            >
              Contato
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-2 rounded-lg font-semibold transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Começar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-emerald-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-lg border-b border-emerald-100 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection("como-funciona")}
                className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium py-2"
              >
                Como Funciona
              </button>
              <button
                onClick={() => scrollToSection("diferenciais")}
                className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium py-2"
              >
                Diferenciais
              </button>
              <button
                onClick={() => scrollToSection("depoimentos")}
                className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium py-2"
              >
                Depoimentos
              </button>
              <button
                onClick={() => scrollToSection("precos")}
                className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium py-2"
              >
                Preços
              </button>
              <button
                onClick={() => scrollToSection("contato")}
                className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium py-2"
              >
                Contato
              </button>
              <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-2 rounded-lg font-semibold mt-4">
                Começar Agora
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;