import DailyHighLights from "@/components/DailyHighLights";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";

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

export async function getStaticProps() {

  const res = await fetch('http://localhost:3000/api/products')
  const data = await res.json()
  
  return {
    props: {
      data,
    }, // will be passed to the page component as props
    revalidate: 60,
  }
}