import React from 'react';
import fixxoLogo from '../assets/img/Fixxo.svg';
import searchIcon from '../assets/img/search-icon.svg';
import shareIcon from '../assets/img/share-icon.svg';
import wishlistIcon from '../assets/img/wishlist-icon.svg';
import cartIcon from '../assets/img/cart-icon.svg';

const Navigationbar = () => {
  return (
    <header class="container header">
      {/* LOGO */}
        <a href="#"><img src={fixxoLogo} alt="Fixxo."/></a>

        {/* navigation menu md and bigger */}
            <ul class="navigation-menu">
                <li class="navigation-menu-item"><a href="../hmtl/start.html" class="aktive-navigation-text">Home</a></li>
                <li class="navigation-menu-item"><a href="#">Categories</a></li>
                <li class="navigation-menu-item"><a href="../hmtl/product.html">Products</a></li>
                <li class="navigation-menu-item"><a href="../hmtl/contact.html">Contacts</a></li>
            </ul>             


        <nav class="group">
            {/* search bar */}
            <div class="search">
                <button class="b-circle"><img src={searchIcon} alt="search button"/></button>
                <i class="fa-light fa-xmark" alt="close button"></i>
                <input class="search-input" type="text"/>
            </div>

            {/* account menu */}
            <button class="b-circle"><img src={shareIcon} alt="share button"/></button>
            <button class="b-circle"><img src={wishlistIcon} alt="whishlist button"/></button>
            <button class="b-circle"><img src={cartIcon} alt="shopping-cart button"/></button>

            {/* mobile navigation menu */}
            <nav class="dropdown-navigation-menu">
                <button class="b-circle" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-regular fa-bars me-md-3"></i>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#" >home</a></li>
                    <li><a class="dropdown-item" href="#">Categories</a></li>
                    <li><a class="dropdown-item" href="#">Products</a></li>
                    <li><a class="dropdown-item" href="#" >Contacts</a></li>
                </ul>                
            </nav>
        </nav>
    </header>
  )
}

export default Navigationbar