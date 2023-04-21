import { createContext, useEffect, useState } from "react";
import { productsObj } from "@/public/static/products";

export const StoreContext = createContext(null);

function StoreProvider({ children }) {
  const [list, setList] = useState();

  const [navBarNotification, setNavBarNotification] = useState({
    list:{
      show: false,
    },
    cart:{
      show: false,
    },
  });

  const [showAddOverlay, setShowAddOverlay] = useState({
    show: false,
    product: null,
    type: null,
  });

  const [showProductOverlay, setShowProductOverlay] = useState({
    show: false,
    product: null,
    productIndex: null,
  });

  const [cartConnect, setCartConnect] = useState(false);

  const [cart, setCart] = useState([]);

  const popUpRandomProduct = () => {
    const randomProduct = Math.floor(Math.random() * list.length);
    setShowProductOverlay({
      show: true,
      product: list[randomProduct],
      productIndex: randomProduct,
    });
  };

  const removeFromList = (index) => {
    list && setList(
      list.map((product, i) => {
        if(i === index){
          if(product.quantity > 0){
            return {
              ...product,
              quantity: product.quantity - 1,
            }
          } else {
            return {
              ...product,
              quantity: 0,
            }
          }
        }else{
          return product
        }
      })
    )
  }

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        data.products.map((product) => {
          product.quantity = 0;
        });
        setList(data.products);
        setCart(data.products)
      })
      .catch(() => {
        productsObj.products.map((product) => {
          product.quantity = 0;
        });
        setList(productsObj.products);
        setCart(productsObj.products)
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
        navBarNotification,
        showProductOverlay,
        removeFromList,
        setShowProductOverlay,
        popUpRandomProduct,
        setNavBarNotification,
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