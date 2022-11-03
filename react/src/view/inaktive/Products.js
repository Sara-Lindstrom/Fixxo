import React from 'react'
import { useContext } from 'react';
import Footer from '../../sections/Footer';
import Navigationbar from './../../sections/Navigationbar'; 
import BreadCrumb from '../../sections/BreadCrumb';
import ProductGrid from '../../sections/home/ProductGrid';
import { ProductContext } from '../../assets/Context/Context'

const ProductBrowse = () => {

    // const productContext = useContext(ProductContext)

    return (
        <>
            <div className='footer-wrapper'>
            <div className='wrapper'>
                <Navigationbar/>
                <BreadCrumb currentPage="Products"/>
                <ProductGrid title="Products" col={"4"} items={[]}/>  
            </div>
                <Footer/>
            </div>
        </>
        )
}

export default ProductBrowse