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

  //  USESTATE PRODUCTS
  const [products, setProducts] = useState({
    all: [],
    featured: [],
  }) 

  useEffect (() => {
    const fetchAllData = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts({...products, all: await result.json()})
    }
    fetchAllData()

    const fetchFeaturedData = async () => {
      let result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setProducts({...products, featured: await result.json()})
    }
    fetchFeaturedData()
     
  }, [])

  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
          <Route path="/product/id/:id" element={<ProductSpec/>}/>
          
          <Route path="/categories" element={<Categories/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/share" element={<Share/>}/>
          <Route path="/shoppingcart" element={<ShoppingCart/>}/>
          <Route path="/whishlist" element={<Whishlist/>}/>

          <Route path="*" element={<NotFound/>}/>
        </Routes>        
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
