import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head';

import IconLogo from '../public/IconLogo.svg'
import loginImage from '../public/loginImage.png'
import Button from '@/components/styles/Button'

export default function Welcome() {
  return(
    <div className='w-screen h-screen flex flex-col items-center justify-center gap-9 py-4 overflow-hidden'>
      <Head>
        <title>Scan Easy - Bem vindo</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="A revolução do varejo"/>
        <link rel="icon/png" href="/favicon.png"/>
        <link rel="shortcut icon" type="image/png" href="/favicon.png"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="theme-color" content="#1E2358"/>
        <link rel="apple-touch-icon" href="/favicon.png"></link>
        <meta name="apple-mobile-web-app-status-bar-style" content="#1E2358"/>
        <meta name="msapplication-navbutton-color" content="#1E2358"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-title" content="Scan Easy"/>
        <meta name="application-name" content="Scan Easy"/>
        <meta name="msapplication-TileColor" content="#1E2358"/>
        <meta name="msapplication-TileImage" content="/favicon.png"/>
        <meta name="msapplication-config" content="/browserconfig.xml"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Scan Easy - Bem vindo"/>
        <meta property="og:description" content="A Revolução do Varejo"/>

        <meta property="og:image" content="/ogImage.png"/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/>
        <meta property="og:image:alt" content="Scan Easy Logo"/>

        <meta property="og:image" content="/waImage.png"/>
        <meta property="og:image:width" content="412"/>
        <meta property="og:image:height" content="412"/>
        <meta property="og:image:alt" content="Scan Easy Logo"/>

        <meta property="og:url" content="https://scaneasy-pwa.vercel.app/"/>
        <meta property="og:site_name" content="Scan Easy"/>
        <meta property="og:locale" content="pt_BR"/>
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