import React from 'react';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../UseHooks/UseAuth';

const Register = () => {
    const {handleEmailChange, handlePasswordChange,registerForm,handleNameChange,error} = UseAuth();
    return (
        <div className='login'>
        <div className='color'>
        <h1>Register</h1>
        <form onSubmit={registerForm}>
            <label htmlFor="name">Name</label><br />
            <input onBlur={handleNameChange} type="name" placeholder='Name' required /><br />
            <label htmlFor="email">Email</label><br />
            <input onBlur={handleEmailChange}  type="Email" placeholder='Email' required /><br />
            <label htmlFor="password">Password</label><br />
            <input onBlur={handlePasswordChange} type="password" placeholder='Password' required /><br />
            <p>{error}</p>
            <button className='border-0 bg-dark mt-2 w-100 py-1 fs-5'>Register</button><br />
        </form>
        <p>Already Register?Please <NavLink to='/login'>Log In</NavLink> </p>
        </div>
    </div>
    );
};

export default Register;