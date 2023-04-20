import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Heading from "@/components/styles/Heading";
import Text from "@/components/styles/Text";
import { StoreContext } from "@/context/context";
import Head from "next/head";
import Image from "next/image";
import { Minus, Plus } from "phosphor-react";
import { useContext, useEffect, useState } from "react";

export default function Cart() {
  
  const {
    cart,
    setCart,
    list,
    setList,
  } = useContext(StoreContext)
  
  const [localCart, setLocalCart] = useState([])
  
  useEffect(() => {
    console.log('cart', cart)
    setLocalCart(
      cart && cart.filter((item) => item.quantity > 0)
    )
  }, [cart])

  const addToCart = (index) => {
    cart && setCart(
      cart.map((product, i) => {
        if(i === index){
          return {
            ...product,
            quantity: product.quantity + 1,
          }
        }else{
          return product
        }
      })
    )
    list && setList(
      list.map((product, i) => {
        if(i === index){
          if(product.quantity > 0){
            return {
              ...product,
              quantity: product.quantity - 1,
            }
          }
        }else{
          return product
        }
      })
    )
    setNavBarNotification({
      ...navBarNotification,
      cart: {
        show: true,
      }
    })
  }

  const removeFromCart = (index) => {
    cart && setCart(
      cart.map((product, i) => {
        if(i === index){
          if(product.quantity > 0){
            return {
              ...product,
              quantity: product.quantity - 1,
            }
          }
        }else{
          return product
        }
      })
    )
  }


  return(
    <div className='w-screen h-screen flex flex-col py-4'>
      <Head>
        <title>Scan Easy - Carrinho</title>
      </Head>
      <Header/>
      <div
        className='
          flex
          flex-col
          p-6
        '
      >
        <Heading
          weight="semibold"
        >
          Meu Carrinho
        </Heading>
        <div
          className="
            border-[1px]
            border-blue-smoked
            rounded-3xl
            p-5
            mt-3
            flex
            flex-col
          "
        >
          <Text>
            Carrinho:
          </Text>
          <Text
            uppercase
            decoration="bold"
          >
            CR-01
          </Text>
          <div
            className="
              flex
              flex-col
              mt-3
            "
          >
            <Text
              decoration="bold"
              size="lg"
            >
              Produtos
            </Text>
            {
              localCart && localCart.map((product, index) =>  {
                return(
                  <div
                    className="
                      w-full
                      flex
                      flex-col
                      border-b-[1px]
                      border-blue-smoked
                    "
                    key={index}
                  >
                    <div
                      className="
                        w-full
                        flex
                        justify-between
                      "
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={100}
                        height={100}
                        className="w-1/4 object-scale-down"
                      />
                      <div>
                        <Text>
                          {product.description}
                        </Text>
                        <span>
                          <Text
                            size="sm"
                          >
                              Valor:
                          </Text>
                          <Text
                            size="sm"
                            decoration="risco"
                          >
                            {product.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                          </Text>
                          <Text
                            size="sm"
                            asChild
                          >
                            {
                              (product.price - (product.price * (product.sale/100)))
                                .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                            }
                          </Text>
                        </span>
                      </div>
                    </div>
                    <div
                      className="
                        w-full
                        flex
                        justify-between
                        mt-3
                      "
                    >
                      <Text
                        decoration="bold"
                      >
                        {
                          (product.price - (product.price * (product.sale/100))) * product.quantity
                            .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                        }
                      </Text>
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
                            removeFromCart(index)
                          }}
                        />
                        <Text>
                          {product.quantity}
                        </Text>
                        <Plus
                          className="
                            w-4
                            h-4
                            text-blue-700
                            cursor-pointer
                          "
                          onClick={() => {
                            addToCart(index)
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
      <div
        className='
          fixed
          -bottom-1
          left-0
          flex
          flex-col
          items-center
          z-10
        '
      >
        <NavBar />
      </div>
    </div>
  )
}