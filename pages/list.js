import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import ProductOverlay from "@/components/ProductOverlay";
import Heading from "@/components/styles/Heading";
import Text from "@/components/styles/Text";
import { StoreContext } from "@/context/context";
import clsx from "clsx";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, PlusCircle } from "phosphor-react";
import React, {useContext, useEffect, useState} from "react";
import { FaChevronDown, FaRegTrashAlt } from "react-icons/fa";

export default function List() {
  const {list} = useContext(StoreContext);

  const [localList, setLocalList] = useState(list);

  const [uniqueCategories, setUniqueCategories] = useState();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setLocalList(
      list && list.filter((product) => {
        if(product.quantity > 0) {
          return product;
        }
      })
    );
  }, [list]);

  useEffect(() => {
    setUniqueCategories(
      localList && localList.map((product) => {
        return product.category;
      }).filter((category, index, self) => {
        return self.indexOf(category) === index;
      })
    )
  }, [localList]);

  useEffect(() => {
    setTotal(
      localList && localList.reduce((acc, product) => {
        return acc + (product.price * product.quantity);
      }, 0)
    )
  }, [localList]);

  return(
    <div className='w-screen h-screen flex flex-col py-4'>
      <Head>
        <title>Scan Easy - Lista</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="A revolução do varejo"/>
        <link rel="icon/png" href="/favicon.png"/>
        <link rel="shortcut icon" type="image/png" href="/favicon.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="theme-color" content="#1E2358"/>
        <link rel="apple-touch-icon" href="/favicon.png"></link>
        <meta name="apple-mobile-web-app-status-bar-style" content="#1E2358"/>
        <meta name="msapplication-navbutton-color" content="#1E2358"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-title" content="Scan Easy"/>
        <meta name="application-name" content="Scan Easy"/>
        <meta name="msapplication-TileColor" content="#1E2358"/>
        <meta name="msapplication-TileImage" content="/favicon.png"/>
        <meta name="msapplication-config" content="/browserconfig.xml"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Scan Easy - Bem vindo"/>
        <meta property="og:description" content="A Revolução do Varejo"/>

        <meta property="og:image" content="/ogImage.png"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:image:alt" content="Scan Easy Logo"/>

        <meta property="og:image" content="/waImage.png"/>
        <meta property="og:image:width" content="412"/>
        <meta property="og:image:height" content="412"/>
        <meta property="og:image:alt" content="Scan Easy Logo"/>

        <meta property="og:url" content="https://scaneasy-pwa.vercel.app/"/>
        <meta property="og:site_name" content="Scan Easy"/>
        <meta property="og:locale" content="pt_BR"/>
      </Head>
      <Header/>
      <div
        className='
          flex
          flex-col
          pt-20
          p-6
        '
      >
        <div
          className="
            flex
            justify-between
            items-center
            transition-all
            duration-300
            w-full
          "
        >
          <Heading
            weight="semibold"
          >
            Minha Lista
          </Heading>
          <Heading
            weight="medium"
            size="sm"
            textColor="800"
            asChild
          >
            <h3
              className={
                clsx(
                  {
                    'hidden': total === 0,
                  }
                )
              }
            >
              {total && total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
            </h3>
          </Heading>
        </div>
        <div>
          {
            uniqueCategories?.length > 0 ? uniqueCategories.map((category, index) => {
              return(
                <div
                  key={index}
                >
                  <div
                    className="
                      flex
                      justify-between
                      items-center
                      transition-all
                      duration-500
                      mt-6
                    "
                    onClick={() => {
                      const element = document.getElementById(`category-${index}`);
                      const arrows = document.getElementById(`arrows-${index}`);
                      element.classList.toggle('hidden');
                      arrows.classList.toggle('rotate-180');
                    }}
                  >                  
                    <Heading
                      asChild
                      size="sm"
                    >
                      <h3
                        className="first-letter:uppercase"
                      >
                        {category}
                      </h3>
                    </Heading>
                    <FaChevronDown
                      className="
                        w-6
                        h-6
                        text-blue-700
                        transition-all
                        duration-500
                      "
                      id={`arrows-${index}`}
                    />
                  </div>
                  <div
                    className="
                      flex
                      flex-col
                      gap-4
                      my-4
                      transition-all
                      duration-500
                    "
                    id={`category-${index}`}
                  >
                    {localList && localList.map((product, index) => {
                      if(product.category === category) {
                        product.quantity === 0 && setLocalList([
                          ...localList.slice(0, index),
                          ...localList.slice(index + 1)
                        ])
                        return(
                          <div
                            key={index}
                            className="
                              flex
                              justify-between
                              items-center
                              p-5
                              border-[1px]
                              border-blue-700
                              rounded-3xl
                            "
                          >
                            <Image
                              className='
                                w-1/5
                              '
                              src={product.image}
                              alt={product.name}
                              width={100}
                              height={100}
                            />
                            <div
                              className="
                                flex
                                flex-col
                                w-2/5
                              "
                            >
                              <Text
                                size="xl"
                              >
                                {product.name}
                              </Text>
                              <Text
                                size="sm"
                              >
                                {product.measurement}
                              </Text>
                            </div>
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
                                  if(product.quantity > 0) {
                                    product.quantity -= 1;
                                    setLocalList([...localList]);
                                  }
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
                                  product.quantity += 1;
                                  setLocalList([...localList]);
                                }}
                              />
                            </div>
                            <FaRegTrashAlt
                              className="
                                w-6
                                h-6
                                text-blue-700
                                cursor-pointer
                              "
                              onClick={() => {
                                product.quantity = 0;
                                setLocalList([...localList]);
                              }}
                            />
                          </div>
                        )
                      }
                    })}    
                  </div>
                </div>
              )
            }
          ) : (
            <div
              className="
                text-center
                flex
                flex-col
                justify-center
                items-center
                gap-12
                mt-24
                mb-12
              "
            >
              <Heading
                size="md"
                weight="semibold"
                textColor="green"
              >
                Você ainda não adicionou nenhum produto
              </Heading>
              <Heading>
                Adicione produtos clicando no botão abaixo
              </Heading>
            </div>
          )}
          <div
            className="
              mb-24
              w-full
              flex
              justify-center
              items-center
            "
          >
            <Link
              href="/home"
            >
              <PlusCircle
                className="
                  w-16
                  h-16
                  text-blue-700
                "
              />
            </Link>
          </div>
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