import './css/App.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect, useState} from 'react';
import Home from './views/Home/Home';
import Contacts from './views/Contact/Contacts';
import ProductSpec from './views/ProductDetails/ProductSpec';
import NotFound from './views/NotFound';
import { ProductContext } from './assets/Context/Context';

import Categories from './views/inaktive/Categories';
import Products from './views/inaktive/Products';
import Search from './views/inaktive/Search';
import Share from './views/inaktive/Share';
import ShoppingCart from './views/inaktive/ShoppingCart';
import Whishlist from './views/inaktive/Whishlist';
function App() {

  //  USESTATE PRODUCTS
  const [products, setProducts] = useState({
    all: [],
    featured: [],
  }) 

  useEffect (() => {
    const fetchAllData = async () => {
      let result = await fetch('https://localhost:7180/api/products')
      console.log("fetchAllData");
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
