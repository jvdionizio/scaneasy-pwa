import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import AddButton from "./AddButton";
import Text from "./styles/Text";

export default function ProductCard({product, index}) {
  return (
    <div
      className={
        `
          flex
          flex-col
          justify-center
          w-full
          m-4
        `
      }

    >
      <div
        className="
          flex
          justify-center
          w-full
          p-4
          rounded-3xl
          ring-2
          ring-blue-700
        "
      >
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={200}
          className="
            w-28
            h-28
            object-cover
          "
        />
      </div>
      <div
        className="
          flex
          justify-center
          items-center
        "
      >
        <div
          className="
            flex
            flex-col
            justify-center
            w-3/4
          "
        >
          <Text
            size="xl"
          >
            {`R$ ${product.price}`}
          </Text>
          <Text
            textColor="blue"
          >
            {product.name}
          </Text>
        </div>
        <div
          className="
            my-5
          "
        >
          <AddButton
            index={index}
          />
        </div>
      </div>
    </div>
  );
}