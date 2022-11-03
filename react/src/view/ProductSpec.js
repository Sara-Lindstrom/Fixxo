import React from 'react'
import Footer from '../sections/Footer';
import Navigationbar from './../sections/Navigationbar'; 
import BreadCrumb from '../sections/BreadCrumb';
import ProductDetails from '../sections/productspecification/ProductDetails';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../assets/Context/Context';

const ProductSpec = () => {

  const productContext = useContext(ProductContext)
  const  params  = useParams()

  const aktiveProduct = productContext.all.find (async obj => {
    return await obj.articleNumber === params.id
    
  })
console.log(aktiveProduct)

  return (
    <>
      <Navigationbar/>
      <BreadCrumb currentPage="Product Details" comersial="Get 25% OFF at the Fixxo Selection - Shop Now!"/>
      <ProductDetails item={aktiveProduct}/>
      <Footer/>
    </> 
  )
}

export default ProductSpec