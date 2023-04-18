import { StoreContext } from "@/context/context";
import { useContext } from "react";
import { FaList } from "react-icons/fa";
import Heading from "./styles/Heading";
import clsx from "clsx";
import Link from "next/link";

export default function AddOverlay() {
  const { showAddOverlay } = useContext(StoreContext)

  return(
    <Link
        href="/list"
    >
      <div 
        className={clsx(
          'absolute',
          'transition-all',
          'duration-200',
          {
           'bg-green-500' : showAddOverlay.type === 'add',
            'bg-red-500' : showAddOverlay.type === 'remove', 
          },
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
            'top-8' : !showAddOverlay.show,
            'top-24' : showAddOverlay.show,
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
            {
              ` ${showAddOverlay.product} ${showAddOverlay.type === 'add' ? 'adicionado a lista' : 'removido da lista'}`
            }
          </h3>
        </Heading>
      </div>
    </Link>
  )

}