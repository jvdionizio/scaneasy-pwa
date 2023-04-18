import { StoreContext } from "@/context/context";
import { useContext } from "react";
import { FaList } from "react-icons/fa";
import Heading from "./styles/Heading";
import clsx from "clsx";

export default function AddOverlay({index}) {
  const { showAddOverlay } = useContext(StoreContext)

  return(
    <div>
      <div 
        className={clsx(
          'absolute',
          'transition-all',
          'duration-200',
          'bg-green-500',
          'flex',
          'gap-4',
          'px-4',
          'py-2',
          'z-10',
          'rounded-md',
          'right-0',
          'left-0',
          'mx-auto',
          'w-fit',
          {
            'top-8' : !showAddOverlay,
            'top-24' : showAddOverlay,
          },
        )}
      >
        <FaList
          className="
            w-6
            h-6
            text-white
          "
        />
        <Heading
          size="sm"
          textColor="white"
          weight="semibold"
          asChild
        >
          <h3
            className="
              whitespace-nowrap
            "
          >
            Produto adicionado a lista
          </h3>
        </Heading>
      </div>
    </div>
  )

}