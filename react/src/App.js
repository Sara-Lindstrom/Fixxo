import './css/App.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './view/Home';
import Contacts from './view/Contacts';
import ProductSpec from './view/ProductSpec';
import NotFound from './view/NotFound';

import Categories from './view/inaktive/Categories';
import Products from './view/inaktive/Products';
import Search from './view/inaktive/Search';
import Share from './view/inaktive/Share';
import ShoppingCart from './view/inaktive/ShoppingCart';
import Whishlist from './view/inaktive/Whishlist';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/product" element={<ProductSpec/>}/>
        
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/share" element={<Share/>}/>
        <Route path="/shoppingcart" element={<ShoppingCart/>}/>
        <Route path="/whishlist" element={<Whishlist/>}/>

        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
