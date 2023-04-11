import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import IconLogo from '../public/IconLogo.svg'
import { FaTimes } from 'react-icons/fa'
import Button from './styles/Button'
import Heading from './styles/Heading'

export default function Menu({Open}) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(Open)
  }, [Open])

  const links = [
    {
      name: 'Home',
      url: '/home'
    },
    {
      name: 'Histórico',
      url: '/history'
    },
    {
      name: 'Política e Privacidade',
      url: '/privacy'
    },
    {
      name: 'Sair',
      url: '/logout'
    },
  ]
  return(
    <div
      className={`      
        flex
        flex-col
        justify-center
        w-screen
        h-screen
        ${ isOpen ? 'absolute' : 'hidden'}
        top-0
        left-0
        bg-blue-700
        z-50
      `}
    >
      <div
        className='
          flex
          items-center
          justify-between
          gap-6
          w-full
          h-2/12
        '
      >
        <Image src={IconLogo} alt="Logo" className='h-9 w-fit'/>
        <div
          onClick={() => setIsOpen(false)}
        >
          <FaTimes
            className='
              text-green-500
              w-9
              h-9
            '
          />
        </div>
      </div>
      <div
        className='
          flex
          flex-col
          justify-center
          gap-6
          w-content
          h-6/12
        '
      >
        <nav>
          <ul>
            {links.map((link, index) => (
              <Link
                href={link.url}
                key={index}
              >
                <li
                  className='
                    flex 
                    flex-col
                    items-center
                    px-4
                    py-2
                    border-b-4
                    border-b-green-500
                  '
                >
                    <Heading
                      weight="semibold"
                      size="xl"
                      textColor='white'
                    >
                      {link.name}
                    </Heading>
                </li>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
      <div
        className='
          flex
          flex-col
          justify-center
          gap-6
        '
      >
        <Heading
          textColor='white'
          size='lg'
        >
          Deseja se conectar a um carrinho?
        </Heading>
        <Button
          bgColor='white'
          textSize='md'
          textColor='blue'
        >
          <div>
            Conectar
          </div>
        </Button>
      </div>
    </div>
  )
}