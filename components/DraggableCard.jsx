import { useContext, useState } from "react";
import Button from "./styles/Button";
import Heading from "./styles/Heading";
import clsx from "clsx";
import { StoreContext } from "@/context/context";
import Text from "./styles/Text";

export default function DraggableCard() {
  const [dragging, setDragging] = useState(false);

  const {cartConnect, setCartConnect} = useContext(StoreContext);

  return(
    <div
      className=
      {clsx(
        'flex',
        'flex-col',
        'text-center',
        {
          'bg-blue-700': cartConnect === false,
          'bg-green-500': cartConnect === true,
        },
        'w-10/12',
        'h-96',
        'rounded-t-3xl',
        'p-5',
        'pt-3',
        'absolute',
        '-z-10',
        'transition-all',
        'duration-500',
        {
          '-bottom-60': !dragging,
          'bottom-20': dragging,
        }
      )}
      onClick={() => setDragging(!dragging)}
    >
      <Heading
        size="md"
        uppercase
        textColor="white"
      >
        {
          cartConnect ? 'Carrinho conectado' : 'Conectar ao carrinho'
        }
      </Heading>
      <div
        className={
          clsx(
            'flex',
            'flex-col',
            'justify-center',
            'items-center',
            'text-center',
            {
              'gap-5': cartConnect,
              'gap-10': !cartConnect,
            },
            'mt-28',
          )
        }
      >
        <Text
          textColor='white'
          asChild
          size="xl"
        >
          <p
            className={
              clsx(
                {
                  'hidden': !cartConnect,
                },
              )
            }
          >
            Carrinho Conectado:
          </p>
        </Text>
        <Heading
          textColor='white'
          size='lg'
        >
          {
            cartConnect ? 'CR-01' : 'Deseja se conectar a um carrinho?'
          }
        </Heading>
        <Button
          bgColor='white'
          textSize='lg'
          textColor='blue'
          width='half'
        >
          <div
            className={
              clsx(
                {
                  'hidden': cartConnect,
                },
              )
            }
            onClick={() => setCartConnect(true)}
          >
            Conectar
          </div>
        </Button>
      </div>
    </div>
  )
}