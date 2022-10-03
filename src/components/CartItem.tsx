import storeItems from "../data/items.json";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeItemQuantity } = useShoppingCart();

  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <div className="mt-8 flex justify-between items-center">
      <div className="w-full flex items-center gap-3">
        <img
          src={item.imgUrl}
          className="w-[125px] h-[75px] rounded-lg object-cover"
        />
        <div>
          <h1 className="text-xl font-semibold">
            {item.name}
            <span className="text-lg"> x{quantity}</span>
          </h1>
          <h1>{formatCurrency(item.price)}</h1>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <h1>{formatCurrency(item.price * quantity)}</h1>
        <button
          onClick={() => removeItemQuantity(item.id)}
          className=" bg-red-600 rounded-lg p-1  hover:bg-transparent transition duration-200 ease-in-out "
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
