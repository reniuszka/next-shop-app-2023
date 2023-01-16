import React from "react";
import { useCartState } from "../components/Cart/CartContext";

export const CartContent = () => {
  //w kazdym miejscu przekazujemy kontekst
  const cartState = useCartState();
  return (
    <div className="col-span-2">
      <ul className="divide-y divide-blue-200">
        {cartState.items.map((item, index) => {
          return (
            <li key={`${item.id}`} className="py-4 flex justify-between">
              <div>
                Count: {item.count} x {item.title}
              </div>
              <div className="flex">
                <h3 className="font-bold">{item.price}</h3>
                <button
                  onClick={() => cartState.removeItemFromCart(item.id)}
                  className="ml-4 font-bold text-red-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    aria-label="Usuń element"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const CartSummary = () => {
  const cartState = useCartState();
  return (
    <div className="bg-purple-100">
      <h3>Podsumowanie Koszyka</h3>
      <h2 className="font-bold">Liczba elementów: {cartState.items.length}</h2>
    </div>
  );
};
const CartPage = () => {
  const cartState = useCartState();
  return (
    <div className="max-w-5xl w-full mx-auto bg-slate-200 py-6 px-2 grid grid-cols-3 gap-8">
      <CartContent />
      <CartSummary />
    </div>
  );
};

export default CartPage;
