import React from 'react'
import ProductCard from '../components/ProductCard'

const ProductGrid = ({title, products, col}) => {

  return (
    <div className='container'>
        <h4 className="headline">{title}</h4>
            <div className={`d-grid-${col}`}>

                {products.map(product => <ProductCard key={product.id} item={product}/>)}

            </div>

    </div>
  )
}

export default ProductGrid