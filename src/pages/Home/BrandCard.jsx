import React from "react";
import '../../assets/CSS/BrandCard.css';

const BrandCard = (props) =>{
    const {name, info} = props;
    
    return(
        <div className="brandCard">
            <div className="brandImage">

            </div>
            <div className="brandInfo">
                <h3>{name}</h3>
                <p>{info}</p>
            </div>
        </div>   
    )
}

export default BrandCard;