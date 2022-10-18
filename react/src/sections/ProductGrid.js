import React from 'react'
import { useState } from 'react';
import ProductCard from '../components/ProductCard'

const ProductGrid = ({title, col}) => {


  const [products, setProducts] = useState(
    [
        {id: 1, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
        {id: 1, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
        {id: 1, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
        {id: 1, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
        {id: 1, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
        {id: 1, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
        {id: 1, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
        {id: 1, productName:"Modern Black Blouse", category: "Fashion", price:"$35.00", salePrice:"", rating:5, image:""},
    ]
  )


  return (
    <div className='contianer'>
        <h4 className="headline">{title}</h4>
            <div className={`d-grid-${col}`}>

                {products.map(i => <ProductCard item={i}/>)}

            </div>

    </div>
  )
}

export default ProductGrid