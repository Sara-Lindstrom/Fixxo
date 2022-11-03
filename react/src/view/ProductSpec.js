import React from 'react'
import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../sections/Footer';
import Navigationbar from './../sections/Navigationbar'; 
import BreadCrumb from '../sections/BreadCrumb';
import ProductSpecifics from '../sections/productspecification/ProductSpecifics';
import { ProductContext } from '../assets/Context/Context'

export const ProductSpec = () => {

  const {artnr} = useParams ();
  // const productContext = useContext(ProductContext)

  return (
    <>
      <Navigationbar/>
      <BreadCrumb currentPage="Product Details" comersial="Get 25% OFF at the Fixxo Selection - Shop Now!"/>
      <ProductSpecifics />
      <Footer shortSite={true}/>
    </> 
  )
}

export default ProductSpec