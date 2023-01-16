import Link from "next/link";
// import { useContext } from "react";
// import { CartStateContext } from "./CartContext";
import { useCartState } from "./CartContext";

export const CartNavbar = () => {
  //dodanie stanu - to bedzie tablica elementow CartITem, jesi uzyje useState() to musze go przekazywac od _app.tsx to all componentow ponizej co nie ma sensu, wiec uzyjemy cntex api poprzez providera bd wszedzie dostepny
  // const [cart, setCart] = useState<CartItem[]>([
  //   {
  //     price: 20,
  //     title: "koszula",
  //   },
  // ]);
  // const cartState = useContext(CartStateContext);
  const cartState = useCartState();
  console.log(cartState, "caart context");

  return (
    <Link href="/cart">
      {/* cartState nie moze byc nullem a tak pokazuje TS wiec lepiej nie uzywac useContext bezporednio w komponencie tylko lepiej stworzyc wlasnego hooka w CartContext -> useCartState i nie bedziemy musimy obslugiwac tego nulla: <span className="mr-2 text-white">{cartState?.items.length}</span>*/}
      <span className="mr-2 text-white">{cartState.items.length}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
        />
      </svg>
    </Link>
  );
};
