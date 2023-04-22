import Link from "next/link";
import clsx from "clsx";
import { FaHome, FaListAlt, FaShoppingCart, FaTag } from "react-icons/fa";
import IconNavBar from "./styles/IconNavBar";
import TextNavBar from "./styles/TextNavBar";
import { useRouter } from "next/router";
import { useContext } from "react";
import { StoreContext } from "@/context/context";

export default function NavBar({}) {

  const {
    navBarNotification,
    setNavBarNotification,
    cartConnect,
  } = useContext(StoreContext)

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
        className={
          clsx(
            'flex',
            'justify-center',
            'items-center',
            {
              'gap-10': cartConnect,
              'gap-16': !cartConnect
            }
          )
        }
      >
          <div
            className={buttonRootStyle}
            onClick={() => router.push('/home')}
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
          <div
            className={buttonRootStyle}
            onClick={() => {
              setNavBarNotification(
                {
                  ...navBarNotification,
                  list: {
                    show: false
                  }
                }
              )
              router.push('/list')
            }}
          >
            <IconNavBar
              selected={pathname === "/list"}
            >
              <FaListAlt />
            </IconNavBar>
            {
              navBarNotification.list.show === true && (
                <span
                  className="
                    absolute
                    -top-[4px]
                    -right-[6px]
                    w-3
                    h-3
                    flex
                  "
                >
                  <span
                    className="
                      absolute
                      animate-ping
                      inline-flex
                      w-full
                      h-full
                      bg-red-500
                      rounded-full
                      opacity-75
                    "
                  />
                  <span
                    className="
                      relative                    
                      w-3
                      h-3
                      rounded-full
                      bg-red-500
                      inline-flex'
                    "
                  />
                </span>
              )
            }
            <TextNavBar
              selected={pathname === "/list"}
            >
              Lista
            </TextNavBar>
          </div>
        <div
          className={
            clsx(
              {
                hidden: !cartConnect
              }
            )
          }
          onClick={() => router.push('/cart')}
        >
          <div
            className={buttonRootStyle}
            onClick={() => setNavBarNotification(
              {
                ...navBarNotification,
                cart: {
                  show: false
                }
              }
            )}
          >
            <IconNavBar
              selected={pathname === "/cart"}
            >
              <FaShoppingCart />
            </IconNavBar>
            {
              navBarNotification.cart.show === true && (
                <span
                  className="
                    absolute
                    -top-[5px]
                    right-2
                    w-3
                    h-3
                    flex
                  "
                >
                  <span
                    className="
                      absolute
                      animate-ping
                      inline-flex
                      w-full
                      h-full
                      bg-red-500
                      rounded-full
                      opacity-75
                    "
                  />
                  <span
                    className="
                      relative                    
                      w-3
                      h-3
                      rounded-full
                      bg-red-500
                      inline-flex'
                    "
                  />
                </span>
              )
            }
            <TextNavBar
              selected={pathname === "/cart"}
            >
              Carrinho
            </TextNavBar>
          </div>
        </div>
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
      </div>
    </div>
  )
}