import React from "react";
import { Link } from "react-router-dom";

import BrandLogo from '../../assets/Images/Brand.png';
import loginIcon from '../../assets/Icons/loginicon.png';
import wishListIcon from '../../assets/Icons/wishlisticon.png';
import cartIcon from '../../assets/Icons/carticon.png';

const Header = () => {
    return(
        <>
            <div className="flex place-content-around w-full h-max bg-brand">
                <div>
                    <Link to="/">
                        <img className='h-20 pl-6' src={BrandLogo} alt='brand logo'/>
                    </Link>
                </div>
                <div className="flex place-content-around items-center space-x-3 pr-6">
                    <img className='h-8' src={wishListIcon} alt="login button"/>
                    <img className="h-8 after:content-['x']" src={cartIcon} alt="login button"/>
                    <Link to="/signIn">
                        <img className='h-16' src={loginIcon} alt="login button"/>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header;