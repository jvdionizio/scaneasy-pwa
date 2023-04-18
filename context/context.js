import { createContext, useEffect, useState } from "react";
import { productsObj } from "@/public/static/products";

export const StoreContext = createContext(null);

function StoreProvider({ children }) {
  const [list, setList] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        data.products.map((product) => {
          product.quantity = 0;
        });
        setList(data.products);
      })
      .catch(() => {
        productsObj.products.map((product) => {
          product.quantity = 0;
        });
        setList(productsObj.products);
      });
  }, []);

  return (
    <StoreContext.Provider
      value={{
        list,
        setList
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;