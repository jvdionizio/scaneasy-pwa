import { A11y, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";

import Heading from "./styles/Heading";
import ProductCard from './ProductCard';

export default function DailyHighLights({data}) {
  const { produtos } = data;
  console.log(produtos);

  return(
    <div
      className='
        w-full
        h-48
      '
    >
      <Heading
        textColor="blue"
        size="sm"
      >
        DESTAQUES DO DIA
      </Heading>
      <Swiper
        spaceBetween={48}
        slidesPerView={2.5}
        freeMode={true}
        modules={[A11y, FreeMode]}
      >
        {produtos.map((produto) => (
          <SwiperSlide
            key={produto.nome}
          >
            <ProductCard product={produto} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}