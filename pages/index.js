import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Home from '@/components/home/Home'


const inter = Inter({ subsets: ['latin'] })

export default function index() {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
<Home/>
        

       
      </main>
    </>
  )
}
