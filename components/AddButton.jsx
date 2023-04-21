import { StoreContext } from "@/context/context";
import { useContext, useEffect, useState } from "react";
import { FaCheckCircle, FaPlus } from "react-icons/fa";

export default function AddButton({index}) {
  const [clicked, setClicked] = useState(false);

  const {
    list,
    setList,
    setShowAddOverlay,
    navBarNotification,
    setNavBarNotification
  } = useContext(StoreContext)

  const addToList = (index) => {
    list && setList(
      list.map((product, i) => {
        if(i === index){
          return {
            ...product,
            quantity: product.quantity + 1,
          }
        }else{
          return product
        }
      })
    )
  }

  const removeFromList = (index) => {
    list && setList(
      list.map((product, i) => {
        if(i === index){
          if(product.quantity > 0){
            return {
              ...product,
              quantity: product.quantity - 1,
            }
          }
        }else{
          return product
        }
      })
    )
  }

  const handleClick= (index) => {
    list && list[index].quantity > 0 ? removeFromList(index) : addToList(index)
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
        handleClick(index)
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