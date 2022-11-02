import React from 'react'
import Footer from '../../sections/Footer';
import Navigationbar from './../../sections/Navigationbar'; 
import BreadCrumb from '../../sections/BreadCrumb';
import ProductGrid from '../../sections/home/ProductGrid';

const ProductBrowse = () => {
    return (
        <>
            <div className='footer-wrapper'>
            <div className='wrapper'>
                <Navigationbar/>
                <BreadCrumb currentPage="Products"/>
                <ProductGrid title="Products" col={"4"}/>  
            </div>
                <Footer/>
            </div>
        </>
        )
}

export default ProductBrowse