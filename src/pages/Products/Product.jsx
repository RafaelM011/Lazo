import React from "react";
import {Link} from "react-router-dom";

import ColorButton from "../../components/UI_Elements/ColorButton";

const Product = (props) => {
    const {id, name, price, colors} = props;
    const colorsArray = colors.map( (color,index) => {
        return <ColorButton key={index} buttonColor={color}/>
    })
    return(
        <>
            <div className="h-['363px'] w-['210px'] hover:scale-110">
                <Link to={`/products/${id}`}>
                    <div className="capsuleImage">

                    </div>
                </Link>
                <div className="capsuleInfo">
                    <span>{name}</span>
                    <span>{price}</span> 
                </div>
                <div>
                    {colorsArray}
                </div>
            </div>
        </>
    )
}

export default Product;