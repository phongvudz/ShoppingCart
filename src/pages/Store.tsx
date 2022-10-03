import React from "react";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";

const Store = () => {
  return (
    <>
      <h1 className="text-3xl font-semibold mb-2">Store</h1>
      <div>
        {storeItems.map((item) => (
          <div>
            <StoreItem {...item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Store;
