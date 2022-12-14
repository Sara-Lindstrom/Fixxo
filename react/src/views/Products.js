import React from 'react'
import Footer from '../components/Footer';
import Navigationbar from '../components/Navigationbar'; 
import BreadCrumb from '../components/BreadCrumb';
import ProductGrid from '../components/ProductGrid';
import {UseGetAllProducts} from '../Hooks/UseGetAllProducts'

const ProductBrowse = () => {
    
const allProducts = UseGetAllProducts()

    return (
        <>
            <div className='footer-wrapper'>
            <div className='wrapper'>
                <Navigationbar/>
                <BreadCrumb currentPage="Products"/>
                <ProductGrid title="Products" col={"4"} items={allProducts}/>  
            </div>
                <Footer/>
            </div>
        </>
        )
}

export default ProductBrowse