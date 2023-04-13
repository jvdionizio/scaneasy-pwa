/*import Header from "@/components/Header";
import Icon from "@/components/styles/Icon";
import Head from "next/head";
import { FaArrowLeft } from 'react-icons/fa'
import Image from "next/image";
import Heading from "@/components/styles/Heading";
import Text from "@/components/styles/Text";
import Button from "@/components/styles/Button";




export default function ProductPage({data}) {
  const { products } = data;
  const product = products[0];
  const salePrice = (sale, price) => {
    return (price - (price * (sale / 100))).toFixed(2);
  }

  return (
    <div className='w-screen h-screen flex flex-col py-4'>
      { <Head>
            <title></title>
        </Head>

        <Header />

        <Icon>
            <FaArrowLeft />
        </Icon>

        <div>
            <div>
                <Image src={product.image} alt={ product.name} width={200} height={200}/>
            </div>

            <Heading size="xl" weight="medium">
                {product.name}
            </Heading>
            
            <Heading size="lg" weight="medium">
                {`R$ ${salePrice(product.sale, product.price)}`}
            </Heading>

            <Text size="sm" decoration="risco">
                {product.price}
            </Text>

            <Text>
                {`-${product.sale}%`}
            </Text>

            <div className="w-3/4">
                <Button>
                    <div>
                    Adicionar à lista
                    </div>
                </Button>
            </div>

            {
              product.nutritionalTable &&(
                <div>
                  <Heading size="md" weight="medium">
                    Informações nutricionais
                  </Heading>
                  <Text>
                    {product.nutritionalTable.energyValue}
                  </Text>
                </ div>
              )
            }
          </div>
      }
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
}*/