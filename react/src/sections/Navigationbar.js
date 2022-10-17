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
        <NavLink to="/"><img src={fixxoLogo} alt="Fixxo."/></NavLink>

        {/* navigation menu md and bigger */}
        <ul className="navigation-menu">
            <li className="navigation-menu-item"><NavLink to="/" end>Home</NavLink></li>
            <li className="navigation-menu-item"><NavLink to="/categories" end>Categories</NavLink></li>
            <li className="navigation-menu-item"><NavLink to="/products" end>Products</NavLink></li>
            <li className="navigation-menu-item"><NavLink to="/contacts" end>Contacts</NavLink></li>
        </ul>             


        <nav className="group">
            {/* search bar */}
            <div className="search">
                <RoundButtonImg link="/search" image={searchIcon}></RoundButtonImg>
                <i className="fa-light fa-xmark" alt="close button"></i>
                <input className="search-input" type="text"/>
            </div>

            {/* account menu */}
            
            <RoundButtonImg link="/share" image={shareIcon}></RoundButtonImg> 
            <RoundButtonImg link="/whishlist" image={wishlistIcon} notificationNumber={3}></RoundButtonImg>
            <RoundButtonImg link="/shoppingcart" image={cartIcon} notificationNumber={12}></RoundButtonImg>

            {/* mobile navigation menu */}
            <nav className="dropdown-navigation-menu">
                <RoundButtonIcon icon="fa-regular fa-bars me-md-3" dataBsToggle="dropdown" ae="false"></RoundButtonIcon>
                <ul className="dropdown-menu">
                    <li><NavLink className="dropdown-item" to="/" end>home</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/categories" end>Categories</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/products" end>Products</NavLink></li>
                    <li><NavLink className="dropdown-item" to="/contacts" end>Contacts</NavLink></li>
                </ul>                
            </nav>
        </nav>
    </header>
  )
}

export default Navigationbar