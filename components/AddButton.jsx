import { StoreContext } from "@/context/context";
import { useContext, useEffect, useState } from "react";
import { FaCheckCircle, FaPlus } from "react-icons/fa";

export default function AddButton({index}) {
  const [clicked, setClicked] = useState(false);

  const {
    list,
    setShowAddOverlay,
    navBarNotification,
    setNavBarNotification
  } = useContext(StoreContext)

  const handleAdd = () => {
    const newList = [...list]
    clicked ? newList[index].quantity-- : newList[index].quantity++
  }

  useEffect(() => {
    list && list[index].quantity > 0 && setClicked(true)
  }, [list])

  return(
    <div
      className="
        p-[1px]
        flex
        justify-center
        self-start
        ring-2
        h-fit
        rounded-full
        ring-blue-700
        text-blue-700
      "
      onClick={() => {
        handleAdd()
        setClicked(!clicked)
        setShowAddOverlay({
          show: true,
          product: list[index].name,
          type: clicked ? 'remove' : 'add',
        })
        setNavBarNotification({
          ...navBarNotification,
          list: {
            show: true,
          }
        })
      }}
    >
      {
        clicked ? (
          <FaCheckCircle
            className="
              text-green-500
              w-5
              h-5
            "
          />
        ) : (
          <FaPlus
            className="
              w-5
              h-5
            "
          />
        )
      }
    </div>
  )
}