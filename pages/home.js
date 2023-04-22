import SectionSwiper from "@/components/SectionSwiper";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";
import { productsObj } from "@/public/static/products";
import NavBar from "@/components/NavBar";
import DraggableCard from "@/components/DraggableCard";
import AddOverlay from "@/components/AddOverlay";
import ProductOverlay from "@/components/ProductOverlay";
import TutorialOverLay from "@/components/TutorialOverlay";

export default function Home({data}) {
  return(
    <div className='w-screen h-screen flex flex-col pt-20
      overflow-x-hidden overflow-clip
    '>
      <Head>
        <title>Scan Easy - Bem vindo</title>
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
      <TutorialOverLay/>
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