import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import IconLogo from '../public/IconLogo.svg'
import { FaTimes } from 'react-icons/fa'
import Button from './styles/Button'
import Heading from './styles/Heading'

export default function Menu({Open, setOpen}) {

  const links = [
    {
      name: 'Perfil',
      url: '/perfil'
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
        p-6
        w-screen
        h-screen
        ${ Open ? 'absolute' : 'hidden'}
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
          onClick={() => setOpen(false)}
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
          w-fit
          h-6/12
          mt-40
        '
      >
        <nav>
          <ul
            className='
              h-full
              flex
              flex-col
              gap-6
            '
          >
            {links.map((link, index) => (
              <Link
                href={link.url}
                key={index}
              >
                <li
                  className='
                    flex 
                    flex-col
                    px-1
                    border-b-4
                    border-b-green-500
                    w-fit
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
          items-center
          text-center
          gap-10
          mt-28
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
          textSize='lg'
          textColor='blue'
          width='half'
        >
          <div>
            Conectar
          </div>
        </Button>
      </div>
    </div>
  )
}