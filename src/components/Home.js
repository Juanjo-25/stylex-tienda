import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Style<span className="text-blue-400">X</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl mx-auto">
            Descubre la nueva era de la moda urbana. Estilo auténtico, calidad premium.
          </p>
          <div className="space-x-4">
            <Link 
              to="/products"
              className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-200 transition-all duration-300 inline-block"
            >
              Explorar Productos
            </Link>
            <Link 
              to="/products"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300 inline-block"
            >
              Ver Colección
            </Link>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500 rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-pink-400 rounded-full opacity-15 animate-ping"></div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            ¿Por qué elegir StyleX?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-700 transition-all duration-300">
              <div className="text-5xl mb-4">🔥</div>
              <h3 className="text-xl font-semibold text-white mb-4">Estilo Único</h3>
              <p className="text-gray-400">
                Diseños exclusivos que reflejan tu personalidad y te hacen destacar en cualquier lugar.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-700 transition-all duration-300">
              <div className="text-5xl mb-4">✨</div>
              <h3 className="text-xl font-semibold text-white mb-4">Calidad Premium</h3>
              <p className="text-gray-400">
                Materiales de la más alta calidad que garantizan durabilidad y comodidad excepcional.
              </p>
            </div>
            <div className="bg-gray-800 p-8 rounded-xl text-center hover:bg-gray-700 transition-all duration-300">
              <div className="text-5xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold text-white mb-4">Envío Rápido</h3>
              <p className="text-gray-400">
                Entrega express en toda Colombia. Tu estilo no puede esperar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Productos Destacados
          </h2>
          <p className="text-gray-400 text-center mb-12 text-lg">
            Descubre nuestras piezas más populares
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group cursor-pointer">
              <div className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                <img 
                  src="/img/camiseta-oversize.jpg" 
                  alt="Camiseta Oversize" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">Camiseta Oversize</h3>
                  <p className="text-gray-400 mb-3">Comodidad y estilo en una pieza</p>
                  <p className="text-white font-bold text-xl">$75.000</p>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                <img 
                  src="/img/sudadera-hoodie.jpg" 
                  alt="Sudadera Hoodie" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">Sudadera Hoodie</h3>
                  <p className="text-gray-400 mb-3">Perfecta para cualquier ocasión</p>
                  <p className="text-white font-bold text-xl">$95.000</p>
                </div>
              </div>
            </div>
            
            <div className="group cursor-pointer">
              <div className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300">
                <img 
                  src="/img/jeans-slim-fit.jpg" 
                  alt="Jeans Slim Fit" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">Jeans Slim Fit</h3>
                  <p className="text-gray-400 mb-3">El corte perfecto para ti</p>
                  <p className="text-white font-bold text-xl">$120.000</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link 
              to="/products"
              className="bg-blue-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-blue-700 transition-all duration-300 inline-block"
            >
              Ver Todos los Productos
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Únete a la Revolución del Estilo
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Sé parte de una comunidad que valora la autenticidad y la expresión personal a través de la moda.
          </p>
          <Link 
            to="/products"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-12 py-4 rounded-full font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 inline-block"
          >
            Comenzar a Comprar
          </Link>
        </div>
      </section>
    </div>
  );
}