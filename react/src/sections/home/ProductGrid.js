import React, { useContext } from 'react'
import ProductCard from '../../components/ProductCard'
import { ProductContext } from '../../assets/Context/Context'

const ProductGrid = ({title, col, cardIsFlexed}) => {

  const products = useContext(ProductContext)

  return (
    <div className="container">
        <h4 className="headline">{title}</h4>
        <div className={`d-grid-${col}`}>

          {products.map(product => <ProductCard cardIsFlexed={cardIsFlexed} key={product.articleNumber} item={product}/>)}

        </div>
    </div>
  )
}

export default ProductGrid