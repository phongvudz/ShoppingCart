import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { ShoppingCart } from "./ShoppingCart";

const Navbar = () => {
  const { openCart, closeCart, cartQuantity, isOpen } = useShoppingCart();
  return (
    <div className="sticky top-0 h-12 p-8 flex justify-between items-center bg-gradient-to-br from-green-300 to-cyan-400  shadow-md mb-3">
      <ul className="flex space-x-4 font-semibold text-cyan-900">
        <Link to="/">Home</Link>
        <Link to="/store">Store</Link>
        <Link to="/about">About</Link>
      </ul>
      <div>
        {isOpen ? (
          <ShoppingCart />
        ) : (
          <button
            onClick={openCart}
            className="relative border-2 border-cyan-700 rounded-full p-2 hover:scale-110 duration-200 hover:bg-cyan-700 hover:text-white ease-in-out"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <div className=" h-5 w-5 font-semibold bottom-0 bg-red-600 absolute -right-2 rounded-full">
              {cartQuantity}
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
