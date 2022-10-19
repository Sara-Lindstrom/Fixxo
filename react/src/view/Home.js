import React from 'react'
import { useState } from 'react';
import Footer from '../sections/Footer';
import ProductGrid from '../sections/ProductGrid';
import Navigationbar from './../sections/Navigationbar'; 
import Showcase from './../sections/Showcase';
import FeaturedShowcase from './../sections/FeaturedShowcase';
import ShoppingInfo from '../sections/ShoppingInfo';
import ShowCaseGrid from '../sections/ShowCaseGrid';
import ShowCaseGridPlaceholder from './../assets/img/flash-sale-show-case.svg'

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

  const [upperProducts, setUpperProducts] = useState([
    {id: 9, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
    {id: 10, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
    {id: 11, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
    {id: 12, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
])

  return (
    <>
        <Navigationbar />
        <Showcase />
        <ProductGrid title={"Featured Products"} products={featuredProducts} col={"4"}/>
        <FeaturedShowcase/>
        <ShoppingInfo/>
        <ShowCaseGrid leftImg={ShowCaseGridPlaceholder} leftAlt={"place holder"} products={upperProducts} col={2} rightImg={""} rightAlt={""} />
        <ShowCaseGrid leftImg={""} leftAlt={""} products={upperProducts} col={2} rightImg={ShowCaseGridPlaceholder} rightAlt={"place holder"} />
        <Footer/>
    </>
  )
}

export default Home