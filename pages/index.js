import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head';

import IconLogo from '../public/IconLogo.svg'
import loginImage from '../public/loginImage.png'
import Button from '@/components/styles/Button'
import NavBar from '@/components/NavBar';

export default function Welcome() {
  return(
    <div className='w-screen h-screen flex flex-col items-center justify-center gap-9 py-4'>
      <Head>
        <title>Scan Easy - Bem vindo</title>
      </Head>
      <div
        className='w-full flex flex-col items-center justify-center gap-16'
      >
        <Image
          className='w-1/5'
          src={IconLogo}
          alt="Logo"
        />
        <Image
          className='self-end'
          src={loginImage}
          alt="foto de um carrinho com várias compras dentro"
        />
      </div>
      <div
        className='w-3/4 flex flex-col items-center justify-center gap-3'
      >
        <Button
          textSize='lg'
        >
          <div>
            <Link href='/signup'>
              Criar uma conta
            </Link>
          </div>
        </Button>
        <div
          className='w-full flex items-center justify-center px-8'
        >  
          <Button
            bgColor='green'
            textSize='sm'
          >
            <div>
              <Link href='/login'>
                Já tenho uma conta
              </Link>
            </div>
          </Button>
        </div>
      </div>
    </div>
  )
}