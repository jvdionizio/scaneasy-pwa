import { StoreContext } from "@/context/context";
import clsx from "clsx";
import Image from "next/image";
import { Minus, Plus } from "phosphor-react";
import { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import Text from "./styles/Text";

export default function ProductOverlay(){
  const {
    showProductOverlay,
    setShowProductOverlay,
    setNavBarNotification,
    navBarNotification,
    cart,
    setCart,
  } = useContext(StoreContext);

  const addToCart = (index) => {
    cart && setCart({
      ...cart,
      [index]: {
        ...cart[index],
        quantity: cart[index].quantity + 1,
      }
    })
    setNavBarNotification({
      ...navBarNotification,
      cart: {
        show: true,
      }
    })
  }

  const removeFromCart = (index) => {
    cart && setCart({
      ...cart,
      [index]: {
        ...cart[index],
        quantity: cart[index].quantity > 0 ? cart[index].quantity - 1 : 0,
      }
    })
  }

  return(
    <div
      className={
        clsx(
          'w-screen',
          'h-screen',
          'absolute',
          'top-0',
          'left-0',
          'bg-blue-700',
          'bg-opacity-90',
          'z-50',
          {
            'hidden': !showProductOverlay.show,
            'flex': showProductOverlay.show,
          },
          'justify-center',
          'items-center',
        )
      }
    >
      {
        showProductOverlay.show && (
          <div
            className="
              relative
              h-fit
              bg-white
              w-3/5
              flex
              flex-col
              gap-3
              p-3
              rounded-lg
              items-center
            "
          >
            <Image
              src={showProductOverlay.product.image}
              alt={showProductOverlay.product.name}
              width={300}
              height={300}
              className="
                rounded-lg
                w-56
                h-48
                object-scale-down
              "
            />
            <div
              className="
                flex
                justify-between
                w-full
                mb-3
              "
            >
              <Text
                size="lg"
                decoration="medium"
              >
                {showProductOverlay.product.name}
              </Text>
              <Text
                size="lg"
                decoration="semibold"
              >
                {showProductOverlay.product.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
              </Text>
            </div>
            <Text>
              Quanto deseja adicionar ou remover do seu carrinho?
            </Text>
            <div>
              <div
                className="
                  flex
                  items-center
                  gap-3
                  border-2
                  border-blue-700
                  rounded-full
                  p-1
                "
              >
                <Minus
                  className="
                    w-4
                    h-4
                    text-blue-700
                  "
                  onClick={() => {
                    removeFromCart(showProductOverlay.productIndex)
                  }}
                />
                <Text>
                  {cart[showProductOverlay.productIndex].quantity}
                </Text>
                <Plus
                  className="
                    w-4
                    h-4
                    text-blue-700
                    cursor-pointer
                  "
                  onClick={() => {
                    addToCart(showProductOverlay.productIndex)
                  }}
                />
              </div>
              <FaTimes
                className="
                  absolute
                  top-2
                  right-2
                  w-5
                  h-5
                  text-blue-700
                "
                onClick={
                  () => {
                    setShowProductOverlay({
                      ... showProductOverlay,
                      show: false,
                    })
                  }
                }
              />
            </div>
          </div>
        )
      }
    </div>
  )
}