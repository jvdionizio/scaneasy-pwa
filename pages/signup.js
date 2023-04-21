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
import { useState } from 'react';
import PrivacyOverlay from '@/components/PrivacyOverlay';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const validateEmail = () => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  const validatePassword = () => password.length >= 8 ? true : false;

  const validateConfirmPassword = () => password === confirmPassword ? true : false;

  const validateLogin = () => {
    console.log(validateEmail(), validatePassword(), validateConfirmPassword());
    if (validateEmail() && validatePassword() && validateConfirmPassword()) {
      setShowPrivacy(true);
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
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </TextInputRoot>
              <TextInputRoot
                error={error}
              >
                <TextInputInput
                  placeholder='Senha'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Text
                  textColor='400'
                  size='sm'
                >
                  (Min. 8 Caracteres)
                </Text>
              </TextInputRoot>
              <TextInputRoot
                error={error}
              >
                <TextInputInput
                  placeholder='Confirmar Senha'
                  type='password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </TextInputRoot>
              <Text
                textColor='red'
                size='sm'
              >
                {error && 'Email ou senha inválidos'}
              </Text>
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
      <PrivacyOverlay show={showPrivacy} setShow={setShowPrivacy}/>
    </div>
  )
};