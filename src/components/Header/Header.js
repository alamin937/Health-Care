import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import UseAuth from '../../UseHooks/UseAuth';
// import UseHooks from '../../UseHooks/UseHooks';
import './Header.css'

const Header = () => {
  const {user, logOut} = UseAuth();
    return (
        <>
  <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark" >
    <Container>
    <Navbar.Brand href="#home">Medi Care</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="nav ms-auto">
      <NavLink to='/home'>Home</NavLink>
      <NavLink to='/about'>About Us</NavLink>
      <NavLink to='/contact'>Contact Us</NavLink>
      <span style={{color:'white', marginLeft:'10px', fontSize:'17px'}}>{user.displayName}</span>
      {user.email ? <button onClick={logOut} className='border-0 bg-danger px-3 py-1 text-white ms-3 rounded'>Log Out</button>:
      <NavLink to='/login'>Log In</NavLink>}
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
</>
    );
};

export default Header;