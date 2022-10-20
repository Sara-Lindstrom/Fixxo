import React from 'react'
import { NavLink } from 'react-router-dom';
import placeholderImg from './../assets/img/speciality-pic.svg'

const ShoppingInfo = () => {
  return (


    <div className="container our-speciality">
        <h3 className="headline">Our Speciality</h3>
        
        <div className="flexed-box">
            <div className="info-box">
                <div className="info">
                    <p>Track Your Order</p>
                    <NavLink>Get Started {'>'}</NavLink>                
                </div>
                <img src={placeholderImg} alt="track your order"/>
            </div>
        
            <div className="info-box">
                <div className="info">
                    <p>Make a Return</p>
                    <NavLink>Get Started {'>'}</NavLink>                
                </div>
                <img src={placeholderImg} alt="make a return"/>
            </div>            
            
            <div className="info-box">
                <div className="info">
                    <p>Request a Price Adjustment</p>
                    <NavLink>Get Started {'>'}</NavLink>                
                </div>
                <img src={placeholderImg} alt="request a price adjustment"/>
            </div>    
        </div>
    </div>
  )
}

export default ShoppingInfo