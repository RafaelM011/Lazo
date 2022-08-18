import React from 'react';
// import { Link } from 'react-router-dom';

import Header from '../../components/Header/Header';
import ProductFilter from './ProductFilter.jsx';
import ProductList from './ProductList';

function Products() {
    return (
      <>
        <Header/>
        <div className="product-section flex h-[calc(100vh-80px)]">
          <ProductFilter/>
          <ProductList/>          
        </div>
      </>
    );
  }
  
  export default Products;