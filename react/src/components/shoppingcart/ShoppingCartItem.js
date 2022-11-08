import React from 'react'
import { UseShoppingCart } from '../shoppingcart/ShoppingCartContext'

const ShoppingCartItem = ({item}) => {

    const {incrementQuantity , decrementQuantity , removeItem} = UseShoppingCart()

  return (
    <div className='shoppin-cart-item'>
        <div className='item-image'>
            <img src={item.product.imageName} alt={item.product.name}/>
        </div>
        <div className='item-title'>
            {item.name}
        </div>
        <div className='item-quantity'>
            <button onClick={() => decrementQuantity(item)} className='round-button'>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => incrementQuantity(item)} className='round-button'>+</button>
        </div>
        <div className='item-price'>
            <div>{item.product.price * item.quantity}</div>
            <button onClick={() => removeItem(item.articleNumber)}><i className="fa-regular fa-trash"></i></button>
        </div>

    </div>
  )
}

export default ShoppingCartItem