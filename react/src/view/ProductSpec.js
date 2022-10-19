import React from 'react'
import { useParams } from 'react-router-dom';
import Footer from '../sections/Footer';
import Navigationbar from './../sections/Navigationbar'; 

const ProductSpec = () => {

  const params = useParams()

  return (
    <>
      <Navigationbar/>
        <div className="container mt-5">
          <h1>{params.id}</h1>
        </div>
      <Footer/>
    </>
  )
}

export default ProductSpec