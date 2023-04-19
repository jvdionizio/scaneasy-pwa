import SectionSwiper from "@/components/SectionSwiper";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";
import { productsObj } from "@/public/static/products";
import NavBar from "@/components/NavBar";
import DraggableCard from "@/components/DraggableCard";
import AddOverlay from "@/components/AddOverlay";
import { useContext, useEffect, useState} from "react";
import { StoreContext } from "@/context/context";

export default function Home({data}) {
  const {list} = useContext(StoreContext);

  const [notification, setNotification] = useState(false);

  const [localList, setLocalList] = useState(list);

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
    localList && localList.length > 0 ? setNotification(true) : setNotification(false);
  }, [localList]);

  return(
    <div className='w-screen h-screen flex flex-col py-4
      overflow-x-hidden overflow-clip
    '>
      <Head>
        <title>Scan Easy - Bem vindo</title>
      </Head>
      <Header/>
      <Hero />
      <div>
        <SectionSwiper data={data} type={"highlights"} />
      </div>
      <div
        className='mt-14'
      >
        <SectionSwiper data={data} type={"categories"} />
      </div>
      <AddOverlay />
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
        <DraggableCard/>
        <NavBar notification={notification} setNotification={setNotification}/>
      </div>
    </div>
  )
}

export function getStaticProps() {

  return fetch('http://localhost:3000/api/products')
  .then((res) => res.json()).then((data) => {
    return {
      props: {
        data
      }
    }
  })
  .catch(() => {
    return {
      props: {
        data: productsObj
      }
    }
  })
}