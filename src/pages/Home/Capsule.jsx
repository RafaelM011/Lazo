import React from "react";
import '../../assets/CSS/Capsule.css';

import ColorButton from "../../components/UI_Elements/ColorButton";

const Capsule = (props) => {
    const {name, price, colors} = props;
    const colorsArray = colors.map( (color,index) => {
        return <ColorButton key={index} buttonColor={color}/>
    })
    return(
        <div className='capsule'>
            <div className="capsuleImage">

            </div>
            <div className="capsuleInfo">
                <span>{name}</span>
                <span>{price}</span> 
            </div>
            <div>
                {colorsArray}
            </div>
        </div>
    )
}

export default Capsule;