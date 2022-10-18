import React from 'react'
import Footer from '../sections/Footer';
import ProductGrid from '../sections/ProductGrid';
import Navigationbar from './../sections/Navigationbar'; 
import Showcase from './../sections/Showcase';

const Home = () => {
  return (
    <>
        <Navigationbar />
        <Showcase />
        <ProductGrid title={"Featured Products"} col={"4"}/>
        <Footer/>
    </>
  )
}

export default Home