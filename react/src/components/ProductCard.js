import React from 'react'
import RoundButtonImg from './RoundButtonImg'
import searchIcon from '../assets/img/search-icon.svg';
import shareIcon from '../assets/img/share-icon.svg';
import wishlistIcon from '../assets/img/wishlist-icon.svg';
import cardBackgroundImg from '../assets/img/card-img.svg';

const ProductCard = () => {
  return (
    <div class="card">
        <div class="card-background">
            <img src={cardBackgroundImg} alt="Black Blouse"/> 
            
                            
            {/* <!-- options and availability --> */}
            <div class="card-options">
                <ul>
                    <li><RoundButtonImg link="/whishlist" image={wishlistIcon}></RoundButtonImg></li>
                    <li><RoundButtonImg link="/share" image={searchIcon}></RoundButtonImg></li>
                    <li><RoundButtonImg link="/shoppingcart" image={shareIcon}></RoundButtonImg></li>
                </ul>

                <button class="button theme-button">QUICK&nbsp;VIEW</button>
            </div>
        </div>

        <div class="product-info">
            <p class="category">category</p>
            <h4 class="product-name">Modern Black Blouse</h4>
            <div class="star-rating">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
            </div>
            <p class ="disscount-price">£30.00</p>
            <p class="original-price">£35.00</p>
        </div> 
    </div>   
  )
}

export default ProductCard