import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../data/products";
import { CartContext } from "../context/CartContext";

export default function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);

  if (!product) return <p className="p-4">Producto no encontrado</p>;

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-xl mt-4 font-semibold">${product.price.toLocaleString()}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}