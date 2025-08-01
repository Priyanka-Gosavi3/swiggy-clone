import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white shadow-xl rounded-xl">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">🛒 Cart Summary</h1>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">
          {cartItems.length === 0
            ? "Your cart is empty 😔"
            : "Your order is here! 🍽️"}
        </h2>
        <button
          onClick={handleClear}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold shadow"
        >
          Clear Cart
        </button>
      </div>

      <ItemList items={cartItems} />
    </div>
  );
};

export default CartPage;
