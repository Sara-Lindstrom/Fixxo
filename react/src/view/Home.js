import React from 'react'
import ProductCard from '../components/ProductCard';
import Footer from '../sections/Footer';
import Navigationbar from './../sections/Navigationbar'; 
import Showcase from './../sections/Showcase';

const Home = () => {
  return (
    <>
        <Navigationbar />
        <Showcase />
        <ProductCard/>
        <Footer/>
    </>
  )
}

export default Home