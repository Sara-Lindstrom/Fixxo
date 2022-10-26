import React from 'react'
import Footer from '../sections/Footer';
import Navigationbar from './../sections/Navigationbar'; 
import BreadCrumb from '../sections/contact/BreadCrumb';
import ProductImgGrid from '../sections/productspecification/ProductImgGrid';

const ProductSpec = () => {

  return (
    <div className='container'>
      <Navigationbar/>
      <p className="commersial-info"> Get 25% OFF at the Fixxo Selection - Shop Now!</p>
      <BreadCrumb currentPage="Product Details"/>
      <div>
        <ProductImgGrid/>
      </div>
      <Footer shortSite={true}/> 
    </div>
  )
}

export default ProductSpec