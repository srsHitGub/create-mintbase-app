import Head from 'next/head'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Minter from '../components/Minter'

const Home = () => {
  return (
    <>
      <Head>
        <title>Blob NFT Minter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* <Navbar /> */}
      <Hero />
      {/* <Products storeId="wildeverse.mintbase1.near" /> */}
      {/* <Products storeId="hellovirtualworld.mintbase1.near" /> */}
      <Minter />
      <Footer />
    </>
  )
}

export default Home
