import React from 'react'
import Navigationbar from './../sections/Navigationbar'; 
import Footer from '../sections/Footer';

const NotFound = () => {
  return (
    <>
      <Navigationbar/>
      <div className="not-found">
        <h4>404<br/>Page Not Found</h4>           
      </div>
      <Footer shortSite={true}/> 
    </>

  )
}

export default NotFound