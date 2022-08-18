import React from "react";
import '../../assets/CSS/FaddingImages.css';
import brandLogo from '../../assets/Images/Brand.png';

import { Link } from 'react-router-dom';

function FaddingImages() {
    return(
        <>
            <div className="fadding-background">
                <img
                    id="brandLogo"
                    src={brandLogo}
                    alt="Brand Logo - Lazo"
                />
                <br/>
                <div className="buttons">
                    <button>Brands</button>
                    <Link to='/products'><button>Products</button></Link>
                </div>
            </div>
        </>
    )
}

export default FaddingImages;