import React from 'react'
import RoundButtonImg from './RoundButtonImg';
import cartIcon from '../assets/img/cart-icon.svg';
import compareIcon from '../assets/img/compare-icon.svg';
import wishlistIcon from '../assets/img/wishlist-icon.svg';
import { NavLink } from 'react-router-dom';
import { UseShoppingCart } from './shoppingcart/ShoppingCartContext';
import { currencyFormatter } from '../assets/utilities/currencyFormatter';

const ProductCard = ({item, cardIsFlexed}) => {

    const { incrementQuantity } = UseShoppingCart()
    

  return (
    // card core
    <div className={cardIsFlexed ? "card card-side" : "card"}>
        <div className="card-background">
            <img src={item.imageName} alt={item.name}/> 
            
                            
            {/* options and availability */}
            <div className="card-options">
                <ul>
                    <li><RoundButtonImg  image={wishlistIcon}></RoundButtonImg></li>
                    <li><RoundButtonImg  image={compareIcon}></RoundButtonImg></li>
                    <li><RoundButtonImg onClickEvent={() => incrementQuantity({articleNumber: item.articleNumber, product: item})} image={cartIcon}></RoundButtonImg></li>
                </ul>

                {/* button to relocate to productdetails */}
                <button className="button theme-button"><NavLink className="theme-button-link" to={`/product/id/${item.articleNumber}`}>QUICK&nbsp;VIEW</NavLink></button>
            </div>
        </div>

        {/* product information */}
        <div className="product-info">
            <p className="category">{item.category}</p>
            <h4 className="product-name">{item.name}</h4>
            <div className="star-rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
            </div>
            <p className="original-price">{currencyFormatter(item.price)}</p>
        </div> 
    </div>   
  )
}

export default ProductCard