import React from 'react'
import { NavLink } from 'react-router-dom'

const RoundButtonImg = ({link, image, notificationNumber}) => {
  return (
    <NavLink to={link}>
      <button className="round-button">
        <span className="notification-pill badge rounded-pill">{notificationNumber}</span>
        <img src={image} alt=""/>
      </button>      
    </NavLink>

  )
}

export default RoundButtonImg
