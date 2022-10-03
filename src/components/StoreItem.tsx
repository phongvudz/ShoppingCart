import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};

export function StoreItem({ id, name, price, imgUrl }: StoreItemProps) {
  const {
    getItemQuantity,
    removeItemQuantity,
    decreaseCartQuantity,
    increaseCartQuantity,
  } = useShoppingCart();
  const quality = getItemQuantity(id);

  return (
    <div className=" bg-gray-200 mb-6 w-full rounded-lg">
      <img src={imgUrl} className="h-[200px] w-full object-cover  " />
      <div className="flex justify-between p-3">
        <h1 className="font-semibold text-xl">{name}</h1>
        <h1>{formatCurrency(price)}</h1>
      </div>
      <div className="p-3">
        {quality === 0 ? (
          <button
            className="p-2 flex justify-center items-center gap-2 w-full bg-cyan-500 text-white rounded-lg"
            onClick={() => increaseCartQuantity(id)}
          >
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
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add To Cart
          </button>
        ) : (
          <div className="flex flex-col items-center ">
            <div className="w-full flex justify-center items-center gap-4">
              <button
                className="bg-cyan-600 px-2 py-1 rounded-md "
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </button>
              <span className="text-xl">
                <span className="text-4xl">{quality}</span> in cart
              </span>
              <button
                className="bg-cyan-600 px-2 py-1 rounded-md "
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </button>
            </div>
            <button
              onClick={() => removeItemQuantity(id)}
              className="bg-red-600 p-1 w-20 mt-2 rounded-lg"
            >
              Remove
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
