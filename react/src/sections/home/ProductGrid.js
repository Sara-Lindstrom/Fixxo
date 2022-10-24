import React from 'react'
import ProductCard from '../../components/ProductCard'

const ProductGrid = ({title, products, col, cardIsFlexed}) => {

  return (
    <div className="container">
        <h4 className="headline">{title}</h4>
        <div className={`d-grid-${col}`}>

            {products.map(product => <ProductCard cardIsFlexed={cardIsFlexed} key={product.id} item={product}/>)}

        </div>
    </div>
  )
}

export default ProductGrid