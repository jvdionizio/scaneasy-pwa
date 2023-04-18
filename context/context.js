import { createContext, useEffect, useState } from "react";
import { productsObj } from "@/public/static/products";

export const StoreContext = createContext(null);

function StoreProvider({ children }) {
  const [list, setList] = useState();

  const [showAddOverlay, setShowAddOverlay] = useState(false);

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

  useEffect(() => {
    showAddOverlay && setTimeout(() => setShowAddOverlay(false), 2000);
  }, [showAddOverlay]);

  return (
    <StoreContext.Provider
      value={{
        list,
        showAddOverlay,
        setShowAddOverlay,
        setList
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;