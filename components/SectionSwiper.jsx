import { A11y, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";

import Heading from "./styles/Heading";
import ProductCard from './ProductCard';
import CategoryCard from './CategoryCard';

export default function SectionSwiper({data, type}) {
  const { products } = data;
  const categories = [
    {
      name: 'Limpeza',
      url: '/categories/limpeza.png'
    },
    {
      name: 'Açougue',
      url: '/categories/acougue.png'
    },
    {
      name: 'Bebidas',
      url: '/categories/bebidas.png'
    },
    {
      name: 'Hortifruti',
      url: '/categories/hortifruti.png'
    },
    {
      name: 'Padaria',
      url: '/categories/padaria.png'
    },
    {
      name: 'Derivados',
      url: '/categories/derivados.png'
    },
    {
      name: 'Doces',
      url: '/categories/doces.png'
    },
  ]

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
        {type == 'categories' ? 'CATEGORIAS' : 'DESTAQUES DO DIA'}
      </Heading>
      <Swiper
        spaceBetween={  
          type == 'highlights' ? 20 : 50
        }
        slidesPerView={
          type == 'highlights' ? 2.5 : 3.5
        }
        freeMode={true}
        modules={[A11y, FreeMode]}
      >
        {
          type == 'highlights' ? products.map((product, index) => (
          <SwiperSlide
            key={index}
          >
            <ProductCard product={product} index={index} />
          </SwiperSlide>
        )) : (
          categories.map((category, index) => (
            <SwiperSlide
              key={index}
            >
              <CategoryCard category={category} index={index} />
            </SwiperSlide>
          ))
        )
      }
      </Swiper>
    </div>
  )
}