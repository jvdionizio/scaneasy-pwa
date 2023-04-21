import Image from 'next/image'
import IconLogo from '../public/IconLogo.svg'
import { FaSearch, FaBars } from 'react-icons/fa'
import Menu from './Menu'
import { useContext, useState } from 'react'
import { StoreContext } from '@/context/context'

export default function Header(){
  const {
    setCartConnect,
  } = useContext(StoreContext)
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="bg-white z-20 fixed left-0 top-0 right-0 mx-auto">
      <div
        className='
          flex
          items-center
          justify-center
          gap-6
          w-full
          py-4
          border-b-[2px]
          border-gray-200
        '
      >
        <Image
          src={IconLogo}
          alt="Logo"
          className='h-9 w-fit'
          onClick={() => setCartConnect(true)}
        />
        <div
          className='
            flex
            border-[2px]
            items-center
            px-3
            border-blue-700
            rounded-full
            gap-2
            focus-within:border-blue-400
            drop-shadow-md
          '
        >
          <FaSearch
            className='
              text-blue-700
              w-5
              h-5
            '
          />
          <input
            type="text"
            className='
              bg-transparent
              flex-1
              text-gray-900
              text-sm
              focus:outline-none
              h-10
            '
          />
        </div>
        <div
          onClick={() => setIsOpen(true)}
        >
          <FaBars
            className='
              text-blue-700
              w-9
              h-9
            '
          />
        </div>
        <Menu Open={isOpen} setOpen={setIsOpen} />
      </div>
    </header>
  )
}