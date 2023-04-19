import Link from "next/link";
import clsx from "clsx";
import { FaHome, FaListAlt, FaShoppingCart, FaTag } from "react-icons/fa";
import IconNavBar from "./styles/IconNavBar";
import TextNavBar from "./styles/TextNavBar";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "@/context/context";

export default function NavBar({
  notification,
  setNotification
}) {

  const buttonRootStyle = "flex flex-col justify-center items-center relative";

  const router = useRouter()

  const { pathname } = router

  return(
    <div
      className='
        w-screen
        h-24
        bg-gray-100
        rounded-t-3xl
        p-5
      '
    >
      <div
        className="
          flex
          justify-center
          items-center
          gap-10
        "
      >
        <Link
          href="/home"
        >
          <div
            className={buttonRootStyle}
          >
            <IconNavBar
              selected={pathname === "/home"}
            >
              <FaHome />
            </IconNavBar>
            <TextNavBar
              selected={pathname === "/home"}
            >
              Home
            </TextNavBar>
          </div>
        </Link>
        <Link
          href="/list"
        >
          <div
            className={buttonRootStyle}
            onClick={() => setNotification(false)}
          >
            <IconNavBar
              selected={pathname === "/list"}
            >
              <FaListAlt />
            </IconNavBar>
            {
              notification && (
                <div
                  className={
                    clsx( 
                      'absolute',
                      '-top-[5px]',
                      '-right-[5px]',
                      'w-3',
                      'h-3',
                      'rounded-full',
                      'bg-red-500',
                    )
                  }
                />
              )
            }
            <TextNavBar
              selected={pathname === "/list"}
            >
              Lista
            </TextNavBar>
          </div>
        </Link>
        <Link
          href="/cart"
        >
          <div
            className={buttonRootStyle}
          >
            <IconNavBar
              selected={pathname === "/cart"}
            >
              <FaShoppingCart />
            </IconNavBar>
            <TextNavBar
              selected={pathname === "/cart"}
            >
              Carrinho
            </TextNavBar>
          </div>
        </Link>
        <Link
          href="/sale"
        >
          <div
            className={buttonRootStyle}
          >
            <IconNavBar
              selected={pathname === "/sale"}
            >
              <FaTag />
            </IconNavBar>
            <TextNavBar
              selected={pathname === "/sale"}
            >
              descontos
            </TextNavBar>
          </div>
        </Link>
      </div>
    </div>
  )
}