import '@/styles/globals.css'
import StoreProvider from "../context/context"
import { Poppins } from "next/font/google"
import { useRouter } from 'next/router';
import { useRef } from 'react';

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ['latin'],
  variable: '--font-poppins',
})

export default function App({ Component, pageProps }) {
  return (
    <main className={`${poppins.variable} font-sans`}>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </main>
  ) 
}
