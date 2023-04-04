import DailyHighLights from "@/components/DailyHighLights";
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
      <DailyHighLights data={data} />
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