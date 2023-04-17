import { FaHome, FaList, FaShoppingCart, FaTag } from "react-icons/fa";

export default function NavMenu() {
  return(
    <div
      className='
        fixed
        bottom-0
        left-0
        w-screen
        h-24
        bg-gray-200
        rounded-t-3xl
        flex
        justify-between
      '
    >
      <div>
        <div>
          <FaHome />
          <p>
            Home
          </p>
        </div>
        <div>
          <FaList />
          <p>
            Lista
          </p>
        </div>
        <div>
          <FaShoppingCart />
          <p>
            Carrinho
          </p>
        </div>
        <div>
          <FaTag />
          <p>
            Promoções
          </p>
        </div>
      </div>
    </div>
  )
}