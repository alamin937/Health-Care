import React from 'react';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../UseHooks/UseAuth';
import './Login.css'

const Login = () => {
    const {googleSignIn,handleEmailChange,handlePasswordChange,loginForm,error,resetPassword} = UseAuth();
    return (
        <div className='login'>
            <div className='color'>
            <h1>Log In</h1>
            <form onSubmit={loginForm}>
                <label htmlFor="email">Email</label><br />
                <input onBlur={handleEmailChange} type="Email" placeholder='Email' required /><br />
                <label htmlFor="password">Password</label><br />
                <input onBlur={handlePasswordChange} type="password" placeholder='Password' required /><br />
                <p>{error}</p>
                 <button className='border-0 bg-dark mt-2 w-100 py-1 fs-5'>Log In</button>
                 <button onClick={resetPassword} className='border-0 bg-dark mt-2 w-100 py-1 fs-5'>Reset Password</button><br />
            </form>
            <p>Not Register?Please <NavLink to='/register'>Register</NavLink> </p>
            <button onClick={googleSignIn}><i class="fab fa-google"></i></button>
            </div>
        </div>
    );
};

export default Login;