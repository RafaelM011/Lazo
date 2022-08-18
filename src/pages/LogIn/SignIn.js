import React from 'react';
import "./SignIn.css";

import Header from '../../components/Header/Header';

const SignIn = () => {
    return(
        <>
            <Header/>
            <div className='flexContainer'>
                <div className='signIn'>
                    <form>
                        <h1 id='headerSign'> Sign In </h1>
                        <p id='incorrectSignIn'></p>
                        <label><b> Username </b></label><br/>
                        <input id='userSignInInput' className='signInInput' type='text'></input><br/>
                        <label><b> Password </b></label><br/>
                        <input id='passSignInInput' className='signInInput' type='password'></input><br/>
                        <button id='signInButton' type='button'> Sign In</button><br/>
                        <button id='registerButton' type='button'> Register </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignIn;