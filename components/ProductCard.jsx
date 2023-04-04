import Image from "next/image";
import Text from "./styles/Text";

export default function ProductCard({product}) {
  return (
    <div
      className=""
    >
      <Image
        src={product.image}
        alt={product.nome}
        width={200}
        height={200}
        className="
          w-32
        "
      />
      <Text>
        {product.descrição}
      </Text>
    </div>
  );
}