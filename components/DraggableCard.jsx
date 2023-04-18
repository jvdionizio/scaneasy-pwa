import { useState } from "react";
import Button from "./styles/Button";
import Heading from "./styles/Heading";
import clsx from "clsx";

export default function DraggableCard() {
  const [dragging, setDragging] = useState(false);

  return(
    <div
      className=
      {clsx(
        'flex',
        'flex-col',
        'text-center',
        'bg-blue-700',
        'w-10/12',
        'h-96',
        'rounded-t-3xl',
        'p-5',
        'absolute',
        '-z-10',
        'transition-all',
        'duration-500',
        {
          '-bottom-56': !dragging,
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
        Conectar ao carrinho
      </Heading>
      <div
        className='
          flex
          flex-col
          justify-center
          items-center
          text-center
          gap-10
          mt-28
        '
      >
        <Heading
          textColor='white'
          size='lg'
        >
          Deseja se conectar a um carrinho?
        </Heading>
        <Button
          bgColor='white'
          textSize='lg'
          textColor='blue'
          width='half'
        >
          <div>
            Conectar
          </div>
        </Button>
      </div>
    </div>
  )
}