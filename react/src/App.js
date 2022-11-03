import './css/App.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect, useState} from 'react';
import Home from './view/Home';
import Contacts from './view/Contacts';
import ProductSpec from './view/ProductSpec';
import NotFound from './view/NotFound';
import { ProductContext } from './assets/Context/Context';

import Categories from './view/inaktive/Categories';
import Products from './view/inaktive/Products';
import Search from './view/inaktive/Search';
import Share from './view/inaktive/Share';
import ShoppingCart from './view/inaktive/ShoppingCart';
import Whishlist from './view/inaktive/Whishlist';

function App() {

  // //  USESTATE PRODUCTS
  // const [products, setProducts] = useState({
  //   all: [],
  //   featuredProducts: [],
  //   showcaseProducts: [],
  //   productSpec: []
  // }) 


  
  // useEffect (() => {
  //   fetchAllData();
  //   fetchFeaturedData();
  //   fetchShowcaseData();
  // }, [])

  // // useEffect (() => {
  // //   fetchProductSpec ()
  // // })

  // const fetchAllData = async () => {
  //   let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
  //   setProducts({...products, all: await result.json()})
  //   console.log('fetchalldata')

  //   return await result;
  // }
  
  // const fetchFeaturedData = async () => {
  //   let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
  //   // setProducts({...products, featuredProducts: await result.json()})
  //   console.log('featured')

  //   return await result.json();
  // }

  // const fetchShowcaseData = async () => {
  //   let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
  //   let json = await result.json()
  //   setProducts({...products, showcaseProducts: json})
  //   console.log('showcase')
  // }

  
  // const fetchProductSpec = async (id) => {
  //   const {artnr} = id
  //   let result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${artnr}`)
  //   setProducts({...products, featuredProducts: await result.json()})
  //   console.log(result.json())
  // }



  return (
    <BrowserRouter>
      {/* <ProductContext.Provider value={products}> */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/product/id/:artnr" element={<ProductSpec/>}/>
          
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/share" element={<Share/>}/>
          <Route path="/shoppingcart" element={<ShoppingCart/>}/>
          <Route path="/whishlist" element={<Whishlist/>}/>

          <Route path="*" element={<NotFound/>}/>
        </Routes>        
      {/* </ProductContext.Provider> */}
    </BrowserRouter>
  );
}

export default App;
