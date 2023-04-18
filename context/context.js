import { createContext, useEffect, useState } from "react";
import nookies from "nookies";
import { productsObj } from "@/public/static/products";

export const StoreContext = createContext(null);

function StoreProvider({ children }) {
  const [list, setList] = useState();

  const [showAddOverlay, setShowAddOverlay] = useState({
    show: false,
    product: null,
    type: null,
  });

  const [cartConnect, setCartConnect] = useState(false);

  const [cart, setCart] = useState([]);

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
    showAddOverlay.show && setTimeout(() => setShowAddOverlay({
      ...showAddOverlay,
      show: false,
    }), 1300);
  }, [showAddOverlay]);

  return (
    <StoreContext.Provider
      value={{
        list,
        showAddOverlay,
        cartConnect,
        cart,
        setCart,
        setCartConnect,
        setShowAddOverlay,
        setList
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export default StoreProvider;