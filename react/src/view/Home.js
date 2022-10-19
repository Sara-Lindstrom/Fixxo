import React from 'react'
import { useState } from 'react';
import Footer from '../sections/Footer';
import ProductGrid from '../sections/ProductGrid';
import Navigationbar from './../sections/Navigationbar'; 
import Showcase from './../sections/Showcase';

const Home = () => {

  const [featuredProducts, setFeaturedProducts] = useState([
      {id: 1, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
      {id: 2, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
      {id: 3, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
      {id: 4, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
      {id: 5, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
      {id: 6, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
      {id: 7, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
      {id: 8, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
  ])

  return (
    <>
        <Navigationbar />
        <Showcase />
        <ProductGrid title={"Featured Products"} products={featuredProducts} col={"4"}/>
        <Footer/>
    </>
  )
}

export default Home