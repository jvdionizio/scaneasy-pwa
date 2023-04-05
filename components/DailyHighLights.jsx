import { A11y, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";

import Heading from "./styles/Heading";
import ProductCard from './ProductCard';

export default function DailyHighLights({data}) {
  const { products } = data;

  return(
    <div
      className='
        w-full
        h-48
        mt-6
        pl-6
      '
    >
      <Heading
        textColor="blue"
        size="sm"
      >
        DESTAQUES DO DIA
      </Heading>
      <Swiper
        spaceBetween={20}
        slidesPerView={2.5}
        modules={[A11y, FreeMode]}
      >
        {products.map((product, index) => (
          <SwiperSlide
            key={product.name}
          >
            <ProductCard product={product} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}