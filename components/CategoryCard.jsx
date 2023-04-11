import Image from "next/image";
import Text from "./styles/Text";

export default function CategoryCard({category, index}) {

  return (
    <div
      className='
        flex
        flex-col
        flex-1
        justify-center
        items-center
        w-32
        h-32
      '
    >
      <Image
        src={category.url}
        alt={category.name}
        width={200}
        height={200}
        className='
          h-3/4
          object-contain
        '
      />
      <Text
        decoration="medium"
        size="lg"
        uppercase
      >
        {category.name}
      </Text>
    </div>
  )
}