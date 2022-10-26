import React from 'react'
import ProductShowBig from '../../assets/img/product-placeholder-big.svg';
import ProductShowSmall from '../../assets/img/product-placeholder-small.svg';

const ProductImgGrid = () => {
  return (
    <div className="productspec-grid">
        <img className="big-img" src={ProductShowBig} alt="product name"/>
        <img className="small-img" src={ProductShowSmall} alt="product name"/>
        <img className="small-img" src={ProductShowSmall} alt="product name"/>
        <img className="small-img" src={ProductShowSmall} alt="product name"/>
    </div>
  )
}

export default ProductImgGrid