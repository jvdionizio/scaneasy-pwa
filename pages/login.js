import Image from 'next/image'
import Head from 'next/head';
import { FaArrowLeft } from 'react-icons/fa'

import IconLogo from '../public/IconLogo.svg'
import Button from '@/components/styles/Button'
import Icon from '@/components/styles/Icon'
import Text from '@/components/styles/Text'
import TextInputRoot from '@/components/styles/TextInputRoot'
import TextInputInput from '@/components/styles/TextInputInput'
import FastLoginBtn from '@/components/FastLoginBtn'
import Link from 'next/link'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);


  const validateEmail = () => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const validatePassword = () => password.length >= 8 ? true : false;



  const validateLogin = () => {
    console.log(password.length);
    console.log(validateEmail(), validatePassword());
    if (validateEmail() && validatePassword()) {
      router.push('/home');
    } else {
      setError(true);
    }
  }
    

  return(
    <div className='w-screen h-screen flex flex-col items-center px-8 gap-32 py-6'>
      <Head>
        <title>Scan Easy - Login</title>
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
      <Link href='/'
        className="self-start"
      >
        <Icon>
          <FaArrowLeft />
        </Icon>
      </Link>
      <div
        className='w-full flex flex-col items-center justify-center mt-9 gap-16'
      >
          <Image
            className='w-1/4'
            src={IconLogo}
            alt="Logo"
          />
        <div
          className='w-full flex flex-col items-center justify-center gap-9'
        >
          <div
            className='w-full flex flex-col items-center justify-center gap-8'
          >
            <div
              className='w-full flex flex-col items-center justify-center gap-6'
            >
              <TextInputRoot
                error={error}
              >
                <TextInputInput
                  placeholder='Email'
                  type='text'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </TextInputRoot>
              <div
                className='w-full flex flex-col items-start justify-center gap-2'
              >
                <TextInputRoot
                  error={error}
                >
                  <TextInputInput
                    placeholder='Senha'
                    type='password'
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                </TextInputRoot>
                <Text
                  textColor='red'
                  size='sm'
                >
                  {error ? 'Email ou senha inválidos' : ''}
                </Text>
                <Text
                  textColor='400'
                  size='md'
                  decoration='underline'
                >
                  Esqueceu sua senha?
                </Text>
              </div>
            </div>
              <Button
                bgColor='black'
                textSize='xs'
              >
                <button
                  onClick={validateLogin}
                >
                  Continuar
                </button>
              </Button>
          </div>
          <div
            className='w-full flex flex-col items-center justify-center px-9 gap-3'
          >
            <FastLoginBtn type='google'/>
            <FastLoginBtn type='facebook'/>
          </div>
        </div>
      </div>

    </div>
  )
};