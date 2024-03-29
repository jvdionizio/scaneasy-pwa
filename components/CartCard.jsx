import { Minus, Plus } from "phosphor-react";
import Text from "./styles/Text";
import Image from "next/image";
import { useContext } from "react";
import { StoreContext } from "@/context/context";

export default function CartCard({index, product, productSale, remove, add}) {
  const { removeFromList } = useContext(StoreContext)
  
  return(
    <div
    className="
      w-full
      flex
      flex-col
      border-b-[2px]
      border-blue-smoked
      py-5
    "
  >
    <div
      className="
        w-full
        flex
        justify-between
      "
    >
      <Image
        src={product.image}
        alt={product.name}
        width={100}
        height={100}
        className="w-1/4 object-scale-down ml-4"
      />
      <div
        className="w-3/5"
      >
        <Text>
          {product.description}
        </Text>
        <div
          className="
            flex
            gap-4
          "
        >
          <Text
            size="md"
          >
              Valor:
          </Text>
          <Text
            size="md"
            decoration="risco"
          >
            {product.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
          </Text>
          <Text
            size="md"
            decoration="bold"
            asChild
          >
            <p>
              {
                productSale
                  .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
              }
            </p>
          </Text>
        </div>
      </div>
    </div>
    <div
      className="
        w-full
        flex
        justify-between
        mt-3
        items-center
        px-4
      "
    >
      <Text
        decoration="bold"
      >
        {
          (productSale * product.quantity)
            .toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        }
      </Text>
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
          onClick={remove}
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
            add()
            removeFromList(index)
          }}
        />
      </div>
    </div>
  </div>
  )
}