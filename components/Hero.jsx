import { Autoplay, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../public/banner1.png';
import banner2 from '../public/banner2.png';

import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { useContext } from 'react';
import { StoreContext } from '@/context/context';

export default function Hero(){
  const {
    popUpRandomProduct,
    cartConnect,
  } = useContext(StoreContext);

  return (
    <div
      className='
        w-full
        h-48
      '
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        draggable={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Autoplay, Pagination, A11y]}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }} 
      >
        <SwiperSlide>
          <div
            className='
              w-full
              h-full
              p-8
            '
            onClick={() => {
              cartConnect && popUpRandomProduct();
            }}
          >
            <Image src={banner1} alt='banner budweiser' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className='
              w-full
              h-full
              p-8
            '
            onClick={() => {
              cartConnect && popUpRandomProduct();
            }}
          >
            <Image src={banner2} alt='banner elmachips' />
          </div>
        </SwiperSlide>
        <SwiperSlide>
                    <div
            className='
              w-full
              h-full
              p-8
            '
            onClick={() => {
              cartConnect && popUpRandomProduct();
            }}
          >
            <Image src={banner2} alt='banner elmachips' />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}