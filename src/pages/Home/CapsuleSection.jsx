import React, { useState } from "react";
import '../../assets/CSS/CapsuleSection.css';

import Capsule from "./Capsule";
import capsulesInfo from '../../data/capsulesInfo';

const CapsuleSection = () => {
    const capsules = capsulesInfo.map( capsuleInfo => {
        const {id, name, price, colors} = capsuleInfo;
        return <Capsule key={id} name={name} price={price} colors={colors}/>
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
                return newOffset > -30 ? -30 : newOffset < -275 ? -275 : newOffset;
            });
        }

        if (e.type === 'touchmove') {
            let X = e.touches[0].pageX;
            setOffsetLeft( current => {
                const newOffset = current + (X - startX);
                setStartX(X);
                return newOffset > -30 ? -30 : newOffset < -275 ? -275 : newOffset;
            });
        }
    }

    return(
        <div className="capsuleSection">
            <h1 className="text-center text-3xl font-semibold m-0 text-dblue"> Capsules </h1>
            <div className="capsulesSlider" onMouseDown={SlideOn} onMouseUp={SlideOff} onMouseLeave={SlideOff} onMouseMove={SlideMove} onTouchStart={SlideOn} onTouchEnd={SlideOff} onTouchMove={SlideMove}>
                <div className="capsulesInnerSlider" style={{left: `${offsetLeft}px`}}>
                    {capsules}
                </div>
            </div>
        </div>
    )
}

export default CapsuleSection;