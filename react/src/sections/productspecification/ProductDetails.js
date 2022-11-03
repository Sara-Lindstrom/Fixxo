import React from 'react'

const ProductDetails = ({item}) => {
  return (
    <>
      <div className='container flex'>
        <div className='img-grid'>
          <div className='big-image-box'>
            <img className='product-detail-img' src={item.imageName} alt={item.name}/>  
          </div>
          <div className='small-image-box'>
            <img className='product-detail-img' src={item.imageName} alt={item.name}/>            
          </div>
          <div className='small-image-box'>
            <img src={item.imageName} alt={item.name}/>          
          </div>
          <div className='small-image-box'>
            <img className='product-detail-img'src={item.imageName} alt={item.name}/>            
          </div>
        </div>
        
      </div>
    </>
  )
}

export default ProductDetails