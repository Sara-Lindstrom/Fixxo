import React, { useContext } from 'react'
import Footer from '../../components/Footer';
import Navigationbar from './../../components/Navigationbar'; 
import BreadCrumb from '../../components/BreadCrumb';
import ProductGrid from '../../components/ProductGrid';
import { ProductContext } from '../../assets/Context/Context';

const ProductBrowse = () => {
    
  const productContext = useContext(ProductContext)

    return (
        <>
            <div className='footer-wrapper'>
            <div className='wrapper'>
                <Navigationbar/>
                <BreadCrumb currentPage="Products"/>
                <ProductGrid title="Products" col={"4"} items={productContext.all}/>  
            </div>
                <Footer/>
            </div>
        </>
        )
}

export default ProductBrowse