import React from 'react'
import Footer from '../sections/Footer';
import Navigationbar from './../sections/Navigationbar'; 
import BreadCrumb from '../sections/contact/BreadCrumb';
import ProductImgGrid from '../sections/productspecification/ProductImgGrid';

const ProductSpec = () => {

  return (
    <>
      <Navigationbar/>
      <BreadCrumb currentPage="Product Details" comersial="Get 25% OFF at the Fixxo Selection - Shop Now!"/>
      <div className="container">
        <ProductImgGrid/>
      </div>
      <Footer shortSite={true}/>
    </> 
  )
}

export default ProductSpec