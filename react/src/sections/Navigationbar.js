import React from 'react';
import fixxoLogo from '../assets/img/Fixxo.svg';
import searchIcon from '../assets/img/search-icon.svg';
import shareIcon from '../assets/img/share-icon.svg';
import wishlistIcon from '../assets/img/wishlist-icon.svg';
import cartIcon from '../assets/img/cart-icon.svg';
import RoundButtonImg from '../components/RoundButtonImg';
import RoundButtonIcon from '../components/RoundButtonIcon';
import { NavLink } from 'react-router-dom';

const Navigationbar = () => {
  return (
    <header className="container header">
      {/* LOGO */}
        <a href="#0"><img src={fixxoLogo} alt="Fixxo."/></a>

        {/* navigation menu md and bigger */}
        <ul className="navigation-menu">
            <li className="navigation-menu-item"><NavLink to="/">Home</NavLink></li>
            <li className="navigation-menu-item"><NavLink to="/categories">Categories</NavLink></li>
            <li className="navigation-menu-item"><NavLink to="/products">Products</NavLink></li>
            <li className="navigation-menu-item"><NavLink to="/contacts">Contacts</NavLink></li>
        </ul>             


        <nav className="group">
            {/* search bar */}
            <div className="search">
                <RoundButtonImg link="/search" image={searchIcon} className="navigationbutton"></RoundButtonImg>
                <i className="fa-light fa-xmark" alt="close button"></i>
                <input className="search-input" type="text"/>
            </div>

            {/* account menu */}
            
            <RoundButtonImg link="/share" image={shareIcon} className="navigationbutton"></RoundButtonImg> 
            <RoundButtonImg link="/whishlist" image={wishlistIcon} className="navigationbutton"></RoundButtonImg>
            <RoundButtonImg link="/shoppingcart" image={cartIcon} className="navigationbutton"></RoundButtonImg>

            {/* mobile navigation menu */}
            <nav className="dropdown-navigation-menu">
                <RoundButtonIcon icon="fa-regular fa-bars me-md-3" dataBsToggle="dropdown" ae="false"></RoundButtonIcon>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#0" >home</a></li>
                    <li><a className="dropdown-item" href="#0">Categories</a></li>
                    <li><a className="dropdown-item" href="#0">Products</a></li>
                    <li><a className="dropdown-item" href="#0" >Contacts</a></li>
                </ul>                
            </nav>
        </nav>
    </header>
  )
}

export default Navigationbar