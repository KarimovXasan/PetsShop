import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import ProductPets from './components/ProductPets';
import OurProduct from './components/OurProduct';
import Sellers from './components/Sellers';
import Pet from './components/Pet';

// bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProductPets />
        <OurProduct />
        <Sellers />
        <Pet />
      </main>
      <Footer />
    </>
  )
}

export default App