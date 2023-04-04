import Image from 'next/image'
import IconLogo from '../public/IconLogo.svg'
import { FaSearch, FaBars } from 'react-icons/fa'

export default function Header(){
  return (
    <header className="bg-white">
      <div>

      </div>
      <div
        className='
          flex
          items-center
          justify-center
          gap-6
          w-full
          pb-4
          border-b-[2px]
          border-gray-200
        '
      >
        <Image src={IconLogo} alt="Logo" className='h-9 w-fit'/>
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
        <FaBars
          className='
            text-blue-700
            w-9
            h-9
          '
        />
      </div>
    </header>
  )
}