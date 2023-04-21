import SectionSwiper from "@/components/SectionSwiper";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";
import { productsObj } from "@/public/static/products";
import NavBar from "@/components/NavBar";
import DraggableCard from "@/components/DraggableCard";
import AddOverlay from "@/components/AddOverlay";
import ProductOverlay from "@/components/ProductOverlay";

export default function Home({data}) {

  return(
    <div className='w-screen h-screen flex flex-col pt-20
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
        <NavBar />
      </div>
      <ProductOverlay />
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