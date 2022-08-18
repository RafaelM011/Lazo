import React from "react";
import '../../assets/CSS/ProductList.css';

import productsInfo from "../../data/productsInfo";
import Product from "./Product";

const ProductList = () =>{
    const topic = 'new adquisitions'
    const products = productsInfo.map( capsuleInfo => {
        const {id, name, price, colors} = capsuleInfo;
        return <Product key={id} id={id} name={name} price={price} colors={colors}/>
    });
    
    return(
        <>
            <div className="bg-white basis-3/4 h-full px-10">
                <h1 className="mt-10 text-center text-3xl font-bold"> {`Lazo's ${topic}`} </h1>
                <hr/>
                <select>
                    <option value='sort by' default hidden>SORT BY</option>
                    <option value='Price lowest to highest'>Price lowest to highest</option>
                    <option value='Price highest to lowest'>Price highest to lowest</option>
                    <option value='Rating'>Rating</option>
                    <option value='Popular'>Popular</option>
                </select>
                <div className="h-4/5 mt-5 overflow-auto productlist flex flex-wrap gap-x-16 gap-y-10 pt-10 justify-evenly">
                    {products}
                </div>
            </div>
        </>
    )
}

export default ProductList;