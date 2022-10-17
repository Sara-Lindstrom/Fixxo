import './css/App.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './view/Home';
import Contacts from './view/Contacts';
import ProductSpec from './view/ProductSpec';
import NotFound from './view/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/product" element={<ProductSpec/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
