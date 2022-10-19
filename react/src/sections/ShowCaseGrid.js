import React from 'react'
import ProductGrid from '../sections/ProductGrid';

const ShowCaseGrid = ({leftImg, leftAlt, col, products, rightImg, rightAlt}) => {

  return (
    <div className="container flex">
        <img src={leftImg} alt={leftAlt}/>

        <ProductGrid title={""} products={products} col={col}/>

        <img src={rightImg} alt={rightAlt}/>

    </div>
  )
}

export default ShowCaseGrid