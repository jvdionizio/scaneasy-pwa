import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Heading from "@/components/styles/Heading";
import Text from "@/components/styles/Text";
import { StoreContext } from "@/context/context";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, PlusCircle } from "phosphor-react";
import React, {useContext, useEffect, useState} from "react";
import { FaChevronDown, FaChevronUp, FaMinus, FaPlus, FaRegTrashAlt } from "react-icons/fa";

export default function List() {
  const {list} = useContext(StoreContext);

  const [localList, setLocalList] = useState(list);

  const [uniqueCategories, setUniqueCategories] = useState();

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

  console.log(uniqueCategories);

  return(
    <div className='w-screen h-screen flex flex-col py-4'>
      <Head>
        <title>Scan Easy - Bem vindo</title>
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
          uppercase
          weight="semibold"
        >
          Minha lista
        </Heading>
        <div>
          {
            uniqueCategories && uniqueCategories.map((category, index) => {
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
      <div
        className='
          fixed
          bottom-0
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