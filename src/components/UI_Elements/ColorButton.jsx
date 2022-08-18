import React from "react";

const ColorButton = (props) =>{
    const {buttonColor} = props;
    return(
        <button className={`hover:scale-125 w-[25px] h-[25px] mt-[10px] mx-[5px] rounded-full`} style={{backgroundColor: buttonColor}}></button>
    )
}

export default ColorButton;