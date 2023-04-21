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