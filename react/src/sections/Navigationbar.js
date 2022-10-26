import React from 'react';
// import { ReactDOM } from 'react';
import { useState } from 'react';
import fixxoLogo from '../assets/img/Fixxo.svg';
import searchIcon from '../assets/img/search-icon.svg';
import compareIcon from '../assets/img/compare-icon.svg';
import wishlistIcon from '../assets/img/wishlist-icon.svg';
import cartIcon from '../assets/img/cart-icon.svg';
import RoundButtonImg from '../components/RoundButtonImg';
import { NavLink } from 'react-router-dom';

const Navigationbar = () => {

  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  // ReactDOM.createPortal(<div></div>, document.getElementById()) (
    return(
    <header className="container header">
      {/* LOGO */}
        <NavLink className="logo" to="/"><img src={fixxoLogo} alt="Fixxo."/></NavLink>

        {/* navigation menu*/}
        <div className={`dropdown-navigation-menu ${ showMenu ? "d-grid" : ""}`}>        
          <nav className="navigation-menu">
              <NavLink className="navigation-menu-item" to="/" end>Home</NavLink>
              <NavLink className="navigation-menu-item" to="/categories" end>Categories</NavLink>
              <NavLink className="navigation-menu-item" to="/products">Products</NavLink>
              <NavLink className="navigation-menu-item" to="/contacts" end>Contacts</NavLink>           
          </nav>             
        </div>

        <nav className="group">
            {/* search bar */}
            <div className="search">
                <RoundButtonImg link="/search" image={searchIcon}></RoundButtonImg>
                <i className="fa-light fa-xmark" alt="close button"></i>
                <input className="search-input" type="text"/>
            </div>

            {/* account menu */}
            <RoundButtonImg link="/share" image={compareIcon}></RoundButtonImg> 
            <RoundButtonImg link="/whishlist" image={wishlistIcon} notificationNumber={3}></RoundButtonImg>
            <RoundButtonImg link="/shoppingcart" image={cartIcon} notificationNumber={12}></RoundButtonImg>

            <button onClick={toggleMenu} className="round-button dropdown-navigation-button"><i className="fa-regular fa-bars"></i></button>
        </nav>
    </header>
  )
}

export default Navigationbar