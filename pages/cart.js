import CartCard from "@/components/CartCard";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import ProductOverlay from "@/components/ProductOverlay";
import Button from "@/components/styles/Button";
import Heading from "@/components/styles/Heading";
import Text from "@/components/styles/Text";
import { StoreContext } from "@/context/context";
import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { Trash } from "phosphor-react";
import { useContext, useEffect, useState } from "react";

export default function Cart() {
  const router = useRouter();

  const {
    cart,
    list,
    setList,
    setCartConnect,
  } = useContext(StoreContext)
  
  const [localCart, setLocalCart] = useState([])

  const [overlay, setOverlay] = useState({
    show: false,
    type: null,
  })


  useEffect(() => {
    setLocalCart(
      cart && cart.filter((item) => {
        if(item.quantity > 0) {
          return item;
        }
      })
    )
  }, [cart])

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
          py-20
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
            mb-20
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
              localCart && localCart.length ? localCart.map((product) =>  {
                product.quantity === 0 && setLocalCart([
                  ...localCart.slice(0, index),
                  ...localCart.slice(index + 1)
                ])
                const productSale = product.price - (product.price * (product.sale/100))
                const getCartIndex = () => {
                  let index = 0;
                  cart && cart.map((item, i) => {
                    if(item.name === product.name){
                      index = i;
                    }
                  })
                  return index;
                }
                return(
                  <CartCard
                    key={getCartIndex()}
                    index={getCartIndex()}
                    product={product}
                    productSale={productSale}
                    add={
                      () =>{
                        product.quantity += 1;
                        setLocalCart([...localCart]);
                      }
                    }
                    remove={
                      () =>{
                        if(product.quantity > 0){
                          product.quantity -= 1;
                          setLocalCart([...localCart]);
                        }
                      }
                    }
                  />
                )
              }) : (
                <Heading
                  size="md"
                  asChild
                >
                  <h3
                    className="text-center py-8"
                  >
                    Seu carrinho ainda está vazio
                  </h3>
                </Heading>
              )
            }
            {
              localCart && localCart.length > 0 && (
                <div>
                  <div
                    className='
                      flex
                      justify-end
                      gap-2
                      items-center
                      py-4
                      border-b-[2px]
                      border-blue-smoked
                      cursor-pointer
                    '
                    onClick={
                      () => {
                        setLocalCart([])
                        setList(
                          list.map((product) => {
                            return {
                              ...product,
                              quantity: 0,
                            }
                          })
                        )
                      }
                    }
                  >
                    <Text
                      decoration="medium"
                    >
                      Esvaziar Carrinho
                    </Text>
                    <Trash
                      className="
                        w-6
                        h-6
                      "
                    />
                  </div>
                  <div
                    className="
                      py-4
                      flex
                      flex-col
                      gap-2
                      border-b-[2px]
                      border-blue-smoked
                    "
                  >
                    <Text
                      decoration="bold"
                    >
                      Resumo da Compra
                    </Text>
                    <div
                      className="
                        flex
                        justify-between
                        px-3
                      "
                    >
                      <Text
                        textColor="800"
                      >
                        Subtotal
                      </Text>
                      <Text
                        textColor="800"
                      >
                        {
                          localCart && localCart.reduce((acc, product) => {
                            return acc + (product.price * product.quantity)
                          }, 0).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                        }
                      </Text>
                    </div>
                    <div
                      className="
                        flex
                        justify-between
                        px-3
                      "
                    >
                      <Text
                        textColor="800"
                      >
                        Descontos
                      </Text>
                      <Text
                        textColor="red"
                      >
                        -{
                          localCart && localCart.reduce((acc, product) => {
                            return acc + ((product.price * product.sale/100) * product.quantity)
                          }, 0).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                        }
                      </Text>
                    </div>
                    <Text
                      textColor="400"
                      decoration="underline"
                    >
                      Possui cupom de desconto?
                    </Text>
                  </div>
                  <div
                    className="
                      py-4
                      flex
                      justify-between
                      items-center
                    "
                  >
                    <Text
                      decoration="bold"
                      size="lg"
                    >
                      Total a pagar
                    </Text>
                    <Text
                      decoration="bold"
                      size="lg"
                    >
                      {
                        localCart && localCart.reduce((acc, product) => {
                          return acc + ((product.price - (product.price * (product.sale/100))) * product.quantity)
                        }, 0).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                      }
                    </Text>
                  </div>
                  <Button>
                    <div
                      onClick={
                        () => {
                          setLocalCart([])
                          setList(
                            list.map((product) => {
                              return {
                                ...product,
                                quantity: 0,
                              }
                            })
                          )
                          setOverlay({
                            show: true,
                            type: 'success',
                          })
                          setCartConnect(false)
                          setTimeout(() => {
                            router.push('/home')
                          }, 2000);
                        }
                      }
                    >
                      Continuar para o Pagamento
                    </div>
                  </Button>
                </div>
              )
            }
          </div>
        </div>
      </div>
      <div
        className={
          clsx(
            'fixed',
            'right-0',
            'left-0',
            'z-10',
            'flex',
            'flex-col',
            'items-center',
            'justify-center',
            'w-screen',
            'h-screen',
            'bg-white',
            'transition-all',
            'duration-500',
            'ease-in-out',
            {
              'hidden': !overlay.show,
            }
          )
        }
      >
        <div
          className="
            flex
            flex-col
            gap-2
            items-center 
          "
        >
          <Image
            src="/IconLogo.svg"
            alt="Logo"
            width={80}
            height={80}
          />
          <Heading
            weight="semibold"
            size="xl"
            asChild
          >
            <h2
              className="text-center w-3/5"
            >
              {
                overlay.type === 'success' ? 'Pagamento realizado com sucesso!' : 'Seu Carrinho ainda está vazio!'
              }
            </h2>
          </Heading>
        </div>
      </div>
      <ProductOverlay />
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