import React from 'react'
import Footer from '../../components/Footer';
import Navigationbar from '../../components/Navigationbar'; 
import BreadCrumb from '../../components/BreadCrumb';
import ProductDetails from '../ProductDetails/Sections/ProductDetails';
import UseGetProduct from '../../Hooks/UseGetPrudoctDetails';
import { useParams } from 'react-router-dom';
import ProductInformation from './Sections/ProductInformation';

const ProductSpec = () => {
  const {id} = useParams()
  const Product = UseGetProduct(id)

  return (
    <>
      <Navigationbar/>
      <BreadCrumb currentPage="Product Details" comersial="Get 25% OFF at the Fixxo Selection - Shop Now!"/>
      <ProductDetails item={Product}/>
      <ProductInformation/>
      <Footer/>
    </> 
  )
}

export default ProductSpec