import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Vidas Bacevičius</title>
        <meta name="Cool stuff Vidas made" />
        <link rel="canonical" href="https://bacevidas.com/" />
      </Head>
      <Navbar/>
    </div>
  )
}
