import React, { useState } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "T-shirt",
      price: 20,
      quantity: 1,
    },
    {
      id: 2,
      name: "Sneakers",
      price: 50,
      quantity: 2,
    },
  ]);

  const increment = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between border-b pb-4"
              >
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-500">${item.price} each</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => decrement(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => increment(item.id)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 ml-4"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex justify-between items-center">
            <span className="text-xl font-bold">Total: ${total}</span>
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
