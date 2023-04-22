import { Autoplay, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from '../public/banner1.png';
import banner2 from '../public/banner2.png';
import banner3 from '../public/banner3.png';
import banner4 from '../public/banner4.png';
import banner5 from '../public/banner5.png';
import banner6 from '../public/banner6.png';

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
            <Image src={banner3} alt='banner downy' />
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
            <Image src={banner4} alt='banner Coca-Cola' />
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
            <Image src={banner5} alt='banner Nespresso' />
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
            <Image src={banner6} alt='banner RedBull' />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}