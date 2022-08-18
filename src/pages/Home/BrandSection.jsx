import React, {useState} from "react";
import '../../assets/CSS/BrandSection.css';

import BrandCard from "./BrandCard";
import brandsInfo from "../../data/brandsinfo";

const BrandSection = () =>{
    const brands = brandsInfo.map( capsuleInfo => {
        const {id, name, info} = capsuleInfo;
        return <BrandCard key={id} name={name} info={info}/>
    });
    
    let [offsetLeft, setOffsetLeft] = useState(-30);
    let [startX, setStartX] = useState(0);
    let [pressed, setPressed] = useState(false);

    const SlideOn = e =>{
        setPressed(true)
        if (e.type === 'mousedown') setStartX(e.pageX);
        if (e.type === 'touchstart') setStartX(e.touches[0].pageX);
    }

    const SlideOff = () =>{
        setPressed(false);
        setStartX(0);
    }

    const SlideMove = e =>{
        if (!pressed) return
        
        if(e.type === 'mousemove') {
            let X = e.pageX;
            setOffsetLeft( current => {
                const newOffset = current + (X - startX);
                setStartX(X);
                return newOffset > -10 ? -10 : newOffset < -1080 ? -1080 : newOffset;
            });
        }

        if (e.type === 'touchmove') {
            let X = e.touches[0].pageX;
            setOffsetLeft( current => {
                const newOffset = current + (X - startX);
                setStartX(X);
                return newOffset > -10 ? -10 : newOffset < -1080 ? -1080 : newOffset;
            });
        }
    }
    
    return(
        <div className="brandSection">
            <h1 className="text-center text-3xl font-semibold my-0 pt-2.5 text-dblue"> Brands </h1>
            <div className="brandsSlider" onMouseDown={SlideOn} onMouseUp={SlideOff} onMouseLeave={SlideOff} onMouseMove={SlideMove} onTouchStart={SlideOn} onTouchEnd={SlideOff} onTouchMove={SlideMove}>
                <div className="brandsInnerSlider" style={{left: `${offsetLeft}px`}}>
                    {brands}
                </div>
            </div>
        </div>
    )
}

export default BrandSection;