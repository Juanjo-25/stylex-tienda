import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { productsData } from "../data/products";
import SearchBar from "./SearchBar";

export default function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filtrar productos basado en el término de búsqueda
  const filteredProducts = useMemo(() => {
    if (!searchTerm) {
      return productsData;
    }
    
    return productsData.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título de la página */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Productos
          </h1>
          <p className="text-lg text-gray-600">
            Descubre nuestra colección completa de moda urbana
          </p>
        </div>

        {/* Buscador */}
        <SearchBar 
          onSearch={handleSearch}
          placeholder="Buscar camisetas, jeans, sudaderas..."
        />

        {/* Resultados de búsqueda */}
        {searchTerm && (
          <div className="mb-6 text-center">
            <p className="text-gray-600">
              {filteredProducts.length > 0 
                ? `Se encontraron ${filteredProducts.length} producto(s)`
                : 'No se encontraron productos'
              }
            </p>
          </div>
        )}

        {/* Grid de productos */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-sm font-semibold">
                    ${product.price.toLocaleString()}
                  </div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">
                      ${product.price.toLocaleString()}
                    </span>
                    <Link 
                      to={`/product/${product.id}`} 
                      className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                    >
                      Ver Producto
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          // Mensaje cuando no hay resultados
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              No se encontraron productos
            </h3>
            <p className="text-gray-600 mb-6">
              Intenta con otros términos de búsqueda o explora todos nuestros productos
            </p>
            <button
              onClick={() => setSearchTerm("")}
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              Ver Todos los Productos
            </button>
          </div>
        )}

        {/* Sugerencias de búsqueda */}
        {!searchTerm && (
          <div className="mt-12 text-center">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Búsquedas populares
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Camiseta', 'Jeans', 'Sudadera', 'Oversize', 'Negro'].map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchTerm(tag)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-full text-sm hover:bg-gray-300 transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}