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

export default function SignUp() {
  return(
    <div className='w-screen h-screen flex flex-col items-center px-8 gap-32 py-6'>
      <Head>
        <title>Scan Easy - Login</title>
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
              <TextInputRoot>
                <TextInputInput
                  placeholder='Email'
                />
              </TextInputRoot>
              <TextInputRoot>
                <TextInputInput
                  placeholder='Senha'
                  type='password'
                />
                <Text
                  textColor='400'
                  size='sm'
                >
                  (Min. 8 Caracteres)
                </Text>
              </TextInputRoot>
              <TextInputRoot>
                <TextInputInput
                  placeholder='Confirmar Senha'
                  type='password'
                />
              </TextInputRoot>
            </div>
            <Button
              bgColor='black'
              textSize='xs'
            >
              <button>
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