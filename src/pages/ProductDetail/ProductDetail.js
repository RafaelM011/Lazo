import React from "react";
import { useParams} from "react-router-dom";

import Header from "../../components/Header/Header";
import ProductInfo from "./ProductInfo";

import productsInfo from "../../data/productsInfo";

const ProductDetail = () => {
    const {productId} = useParams();
    const [product] = productsInfo.filter( current => {
        return current.id === productId;
    }, [])    

    return(
        <>
            <Header/>
            <ProductInfo productInfo={product}/>
            <h1 className="font-bold text-2xl text-center"> You May Also Like </h1>
            <div className="flex justify-evenly my-10">
                <img src="https://cdn.forcast.com.au/media/catalog/product/cache/07426fd1f727adbbafc671d5c3762bb2/d/r/dr1111emd_first_cm_1.jpg" alt="p1" className="h-[350px]"/>
                <img src="https://cdn.forcast.com.au/media/catalog/product/cache/07426fd1f727adbbafc671d5c3762bb2/d/r/dr1111emd_first_cm_1.jpg" alt="p1" className="h-[350px]"/>
                <img src="https://cdn.forcast.com.au/media/catalog/product/cache/07426fd1f727adbbafc671d5c3762bb2/d/r/dr1111emd_first_cm_1.jpg" alt="p1" className="h-[350px]"/>
            </div>
        </>
    )
}

export default ProductDetail;