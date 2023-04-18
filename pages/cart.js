import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Heading from "@/components/styles/Heading";
import Text from "@/components/styles/Text";
import Head from "next/head";

export default function Cart() {
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
            >
              Produtos
            </Text>
          </div>
        </div>
      </div>
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