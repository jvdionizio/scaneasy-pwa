import Link from "next/link";
import { FaHome, FaList, FaShoppingCart, FaTag } from "react-icons/fa";
import IconNavBar from "./styles/IconNavBar";
import TextNavBar from "./styles/TextNavBar";

export default function NavBar() {
  const buttonRootStyle = "flex flex-col justify-center items-center"


  return(
    <div
      className='
        fixed
        bottom-0
        left-0
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
          justify-between
        "
      >
        <Link
          href="/home"
        >
          <div
            className={buttonRootStyle}
          >
            <IconNavBar>
              <FaHome />
            </IconNavBar>
            <TextNavBar>
              Home
            </TextNavBar>
          </div>
        </Link>
        <Link
          href="/list"
        >
          <div
            className={buttonRootStyle}
          >
            <IconNavBar>
              <FaList />
            </IconNavBar>
            <TextNavBar>
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
            <IconNavBar>
              <FaShoppingCart />
            </IconNavBar>
            <TextNavBar>
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
            <IconNavBar>
              <FaTag />
            </IconNavBar>
            <TextNavBar>
              Promoções
            </TextNavBar>
          </div>
        </Link>
      </div>
    </div>
  )
}