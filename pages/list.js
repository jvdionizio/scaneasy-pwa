import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Heading from "@/components/styles/Heading";
import Text from "@/components/styles/Text";
import { StoreContext } from "@/context/context";
import Head from "next/head";
import Image from "next/image";
import React, {useContext, useEffect, useState} from "react";
import { FaChevronDown, FaMinus, FaPlus, FaRegTrashAlt } from "react-icons/fa";

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
                    "
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
                      "
                    />
                  </div>
                  <div>
                    {localList && localList.map((product, index) => {
                      if(product.category === category) {
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
                            />
                            <div>
                              <Text>
                                {product.name}
                              </Text>
                              <Text>
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
                              "
                            >
                              <FaMinus
                                className="
                                  w-6
                                  h-6
                                  text-blue-700
                                "
                              />
                              <Text>
                                {product.quantity}
                              </Text>
                              <FaPlus
                                className="
                                  w-6
                                  h-6
                                  text-blue-700
                                "
                              />
                            </div>
                            <FaRegTrashAlt
                              className="
                                w-6
                                h-6
                                text-blue-700
                              "
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