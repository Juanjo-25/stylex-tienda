import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
      setShowSearch(false);
    }
  };

  return (
    <header className="bg-black text-white p-4 flex justify-between items-center fixed w-full top-0 z-50 backdrop-blur-sm bg-opacity-90">
      <Link to="/" className="text-2xl font-bold">
        Style<span className="text-blue-400">X</span>
      </Link>
      
      <div className="flex items-center space-x-6">
        <nav className="hidden md:flex space-x-8">
          <Link to="/products" className="hover:text-blue-400 transition-colors">
            Productos
          </Link>
        </nav>

        {/* Búsqueda rápida en header */}
        <div className="relative">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="hover:text-blue-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          {showSearch && (
            <form onSubmit={handleSearch} className="absolute right-0 top-8 w-64">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar productos..."
                className="w-full px-4 py-2 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
            </form>
          )}
        </div>
        
        <Link to="/cart" className="flex items-center space-x-2 hover:text-blue-400 transition-colors">
          <span className="text-xl">🛒</span>
          <span className="bg-blue-500 text-white rounded-full px-2 py-1 text-sm">
            {cart.length}
          </span>
        </Link>
      </div>
    </header>
  );
}