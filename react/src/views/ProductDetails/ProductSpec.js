import React from 'react'
import Footer from '../../components/Footer';
import Navigationbar from '../../components/Navigationbar'; 
import BreadCrumb from '../../components/BreadCrumb';
import ProductDetails from '../ProductDetails/Sections/ProductDetails';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { allContext } from '../../assets/Context/Context';

const ProductSpec = () => {

  const productContext = useContext(allContext)
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