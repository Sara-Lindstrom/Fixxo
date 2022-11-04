import './css/App.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './views/Home/Home';
import Contacts from './views/Contact/Contacts';
import ProductSpec from './views/ProductDetails/ProductSpec';
import NotFound from './views/NotFound';

import Categories from './views/inaktive/Categories';
import Products from './views/inaktive/Products';
import Search from './views/inaktive/Search';
import Share from './views/inaktive/Share';
import ShoppingCart from './views/inaktive/ShoppingCart';
import Whishlist from './views/inaktive/Whishlist';
function App() {

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
