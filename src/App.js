import React from 'react';
import { Routes, Route} from "react-router-dom";

import Home from './pages/Home/Home';
import SignIn from './pages/LogIn/SignIn';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Products from './pages/Products/Products';

function App() {  
  console.log('hello');
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:productId" element={<ProductDetail/>}/>
        <Route path="/signIn" element={<SignIn/>}/>
        {/* <Route path="/Register" element={<Register/>}/> */}
      </Routes>
    </>
  );
}

export default App;
