import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <h1>Medi Care Ltd.com</h1>
            Phone: 01xxxxxxxx <br />
            Email: anikalamin1@gmail.com <br />
            Visit <br />
            <div className='logo'>
                <span><i class="fab fa-facebook"></i></span>
                <span><i class="fab fa-whatsapp"></i></span>
                <span><i class="fab fa-instagram"></i></span>
                <span><i class="fab fa-twitter"></i></span>
            </div>
        </div>
    );
};

export default Footer;