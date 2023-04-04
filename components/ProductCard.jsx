import Image from "next/image";
import Text from "./styles/Text";

export default function ProductCard({product}) {
  return (
    <div
      className="
        flex
        flex-col
        items-center
        justify-center
        w-full
        h-max-
      "
    >
      <Image
        src={product.image}
        alt={product.nome}
        width={200}
        height={200}
        className="
          max-w-32
        "
      />
      <Text>
        {product.descrição}
      </Text>
    </div>
  );
}