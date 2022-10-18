import React from 'react'
import RoundButtonImg from './RoundButtonImg'
import searchIcon from '../assets/img/search-icon.svg';
import shareIcon from '../assets/img/share-icon.svg';
import wishlistIcon from '../assets/img/wishlist-icon.svg';
import cardBackgroundImg from '../assets/img/card-img.svg';
import { NavLink } from 'react-router-dom';

const ProductCard = ({item}) => {
  return (
    <div className="card">
        <div className="card-background">
            <img src={cardBackgroundImg} alt={item.productName}/> 
            
                            
            {/* <!-- options and availability --> */}
            <div className="card-options">
                <ul>
                    <li><RoundButtonImg image={wishlistIcon}></RoundButtonImg></li>
                    <li><RoundButtonImg image={searchIcon}></RoundButtonImg></li>
                    <li><RoundButtonImg image={shareIcon}></RoundButtonImg></li>
                </ul>

                <button className="button theme-button"><NavLink className="theme-button-link" to="/product/id">QUICK&nbsp;VIEW</NavLink></button>
            </div>
        </div>

        <div className="product-info">
            <p className="category">{item.category}</p>
            <h4 className="product-name">{item.productName}</h4>
            <div className="star-rating">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
            </div>
            <p className="disscount-price">{item.salePrice}</p>
            <p className="original-price">{item.price}</p>
        </div> 
    </div>   
  )
}

export default ProductCard