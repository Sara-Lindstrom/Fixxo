import React from 'react'
import { NavLink } from 'react-router-dom'

const RoundButtonImg = ({link, image}) => {
  return (
    <NavLink to={link}>
      <button className="round-button">
          <img src={image} alt=""/>
      </button>      
    </NavLink>

  )
}

export default RoundButtonImg
