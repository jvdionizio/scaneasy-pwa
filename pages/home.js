import SectionSwiper from "@/components/SectionSwiper";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";
import { productsObj } from "@/public/static/products";

export default function Home({data}) {
  return(
    <div className='w-screen h-screen flex flex-col py-4'>
      <Head>
        <title>Scan Easy - Bem vindo</title>
      </Head>
      <Header/>
      <Hero />
      <div>
        <SectionSwiper data={data} type={"highlights"} />
      </div>
      <div
        className='mt-8'
      >
        <SectionSwiper data={data} type={"categories"} />
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