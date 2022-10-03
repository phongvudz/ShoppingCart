import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import storeItems from "../data/items.json";
export function ShoppingCart() {
  const { cartItems, closeCart } = useShoppingCart();
  return (
    <>
      <div className="w-[400px] h-screen fixed right-0 top-0  bg-gradient-to-br from-slate-500 opacity-90 to-emerald-500  z-10 p-4">
        <div className="flex w-full justify-between">
          <h1 className="text-xl font-semibold">Cart</h1>
          <button onClick={closeCart}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div>
          {cartItems.map((item) => (
            <CartItem {...item} key={item.id} />
          ))}
        </div>
        <div className="flex justify-end mt-5 text-xl font-bold">
          Total :{" "}
          {formatCurrency(
            cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id);
              return total + (item?.price || 0) * cartItem.quantity;
            }, 0)
          )}
        </div>
      </div>
    </>
  );
}
