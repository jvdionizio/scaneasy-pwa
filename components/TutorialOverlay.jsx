import clsx from "clsx";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, EffectCards } from 'swiper';
import "swiper/css";
import "swiper/css/effect-cards";
import { FaArrowRight, FaBluetooth, FaBluetoothB, FaListAlt, FaShoppingCart, FaTable, FaTablet, FaTabletAlt, FaTimes } from "react-icons/fa";
import Heading from "./styles/Heading";
import { ArrowRight } from "phosphor-react";
import Image from "next/image";

export default function TutorialOverLay() {
  const [show, setShow] = useState(true);
  
  return(
    <div
      className={
        clsx(
          'w-screen',
          'h-screen',
          'absolute',
          'top-0',
          'left-0',
          'flex',
          'flex-col',
          'items-center',
          'justify-center',
          'bg-blue-700',
          'bg-opacity-95',
          'py-10',
          'px-6',
          'z-50',
          {
            'hidden': !show
          }
        )
      }
      id="tutorial-overlay"
    >
      <div
        className='w-full h-full rounded-xl flex justify-center items-center'
      >
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, A11y]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-10
                w-full
                h-full
                text-center
                p-4
                bg-white
                rounded-3xl
              "
            >
              <FaListAlt
                size={90}
                className="text-green-500"
              />
              <div>
                <Heading
                  size="md"
                  textColor="blue"
                >
                  Essa é a sua lista.
                </Heading>
                <Heading
                  size="md"
                  weight="regular"
                  textColor="blue"
                >
                  Você pode monta-lá antes de ir ao mercado
                </Heading>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-12
                w-full
                h-full
                text-center
                p-4
                bg-white
                rounded-3xl
              "
            >
              <div
                className="
                  flex
                  items-center
                "
              >
                <FaTabletAlt
                  className="
                    text-green-500
                  "
                  size={80}
                />
                <FaBluetoothB
                  className="
                    text-blue-700
                  "
                  size={70}
                />
                <FaShoppingCart
                  className="
                  text-green-500
                  "
                  size={80}
                />
              </div>
              <div>
                <Heading
                  weight="regular"
                  textColor="blue"
                  size="md"
                >
                  Ao chegar ao mercado
                </Heading>
                <Heading
                  size="md"
                  textColor="blue"
                >
                  se conecte ao carrinho, pelo bluetooth.
                </Heading>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                gap-12
                w-full
                h-full
                text-center
                p-4
                bg-white
                rounded-3xl
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-[2px]
                "
              >
                <FaListAlt
                  className="
                    text-green-500
                  "
                  size={80}
                />
                <Image alt="arrow" src="/arrow.svg" width={60} height={60} className="ml-3"/>
                <FaShoppingCart
                  className="
                  text-green-500
                  "
                  size={80}
                />
              </div>
              <div>
                <Heading
                  weight="regular"
                  textColor="blue"
                  size="md"
                  asChild
                >
                  <span>
                    Assim, conforme você compra,
                  </span>
                </Heading>
                {' '}
                <Heading
                  textColor="blue"
                  size="md"
                  asChild
                >
                  <span>
                    a sua lista vai para o seu carrinho.
                  </span>
                </Heading>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <FaTimes
        size={32}
        className="absolute top-5 right-7 text-white cursor-pointer"
        onClick={() => setShow(false)}
      />
    </div>
  )
}