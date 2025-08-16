import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Carrito de compras</h1>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b py-2">
              <span>{item.name}</span>
              <span>${item.price.toLocaleString()}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Eliminar
              </button>
            </div>
          ))}
          <p className="mt-4 font-semibold">Total: ${total.toLocaleString()}</p>
          <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Finalizar compra
          </button>
        </div>
      )}
    </div>
  );
}