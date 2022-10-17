import React from 'react'
import Footer from '../sections/Footer';
import Navigationbar from './../sections/Navigationbar'; 
import Showcase from './../sections/Showcase';

const Home = () => {
  return (
    <>
        <Navigationbar />
        <Showcase />
        <Footer/>
    </>
  )
}

export default Home