import React from 'react'
import { NavLink } from 'react-router-dom'

const BreadCrumb = ({currentPage}) => {
  return (
    <div className="container breadcrumb">
        <ul className="breadcrumb-list">
            <li><NavLink to="/" end>Home</NavLink></li>
            <li>{currentPage}</li>
        </ul>
    </div>
  )
}

export default BreadCrumb