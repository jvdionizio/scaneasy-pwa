import { A11y, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/free-mode";

import Heading from "./styles/Heading";

export default function DailyHighLights({data}) {
  console.log(data);

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
        spaceBetween={50}
        slidesPerView={2.5}
        freeMode={true}
        modules={[A11y, FreeMode]}
      >
        <SwiperSlide>
          <div>
            <h1>Slide 1</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export async function getStaticProps() {

  const res = await fetch('http://localhost:3000/api/products')
  const data = await res.json()
  console.log(data);

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  }
}