import React from "react";

import ColorButton from "../../components/UI_Elements/ColorButton";

const ProductInfo = (props) => {
    const {productInfo} = props;
    const {name, info, price, colors} = productInfo;
    const colorsArray = colors.map( (color,index) => {
        return <ColorButton key={index} buttonColor={color}/>
    })

    return(
        <div className="flex justify-between mx-40 my-12">
            <div className="w-[1000px] h-[700px] flex">
                <div className=" w-60 h-[650px] m-4 flex flex-col justify-around">
                     <img src="https://cdn.forcast.com.au/media/catalog/product/cache/07426fd1f727adbbafc671d5c3762bb2/d/r/dr1111emd_first_cm_1.jpg" alt="p1" className=" w-[200px] h-[150px]"/>
                     <img src="https://cdn.forcast.com.au/media/catalog/product/cache/07426fd1f727adbbafc671d5c3762bb2/d/r/dr1111emd_first_cm_1.jpg" alt="p1" className=" w-[200px] h-[150px]"/>
                     <img src="https://cdn.forcast.com.au/media/catalog/product/cache/07426fd1f727adbbafc671d5c3762bb2/d/r/dr1111emd_first_cm_1.jpg" alt="p1" className=" w-[200px] h-[150px]"/>
                </div>
                <div className="w-[700px] h-[650px] m-4 flex justify-center">
                    <img src="https://cdn.forcast.com.au/media/catalog/product/cache/07426fd1f727adbbafc671d5c3762bb2/d/r/dr1111emd_first_cm_1.jpg" alt="product main" className="h-[650px]"/>
                </div>
            </div>
            <div className=" w-[450px] h-[500px]">
                <h1 className="text-2xl font-medium m-4"> {name} </h1>
                <p className="m-4"> {info} </p>
                <p className="m-4"> {price} </p> 
                <p className="mx-4 my-2"> Colors: </p>
                <p className="mx-2 my-2"> {colorsArray} </p>
                <select name="size" id="size" className="mx-4 my-2 border-solid border-[1px] border-black w-60">
                    <option value="Choose Size">CHOOSE SIZE</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <br/>
                <button type="button" className="m-4 font-medium border-2 border-black w-60">ADD TO CART</button>
            </div>
        </div>
    )
}

export default ProductInfo;