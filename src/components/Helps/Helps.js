import React from 'react';
import './Helps.css'

const Helps = () => {
    return (
        
        <div className='head'>
            <h1>Health Plan</h1>
            <div className='main'>
            <div className='all-grid'>
                    <span><i class="fas fa-hand-point-up"></i></span>
                    <h4>Get Started</h4>
                    <p>Learn About Medicare</p>
            </div>
            <div className='all-grid'>
                    <span><i class="fas fa-address-book"></i></span>
                    <h4>Find Care Providers</h4>
                    <p>Compare Hospitals</p>
            </div>
            <div className='all-grid'>
                    <span><i class="fas fa-shopping-bag"></i></span>
                    <h4>Need 2021 Plan</h4>
                    <p>find 2021 Health plan</p>
            </div>
            <div className='all-grid'>
                    <span><i class="fas fa-phone"></i></span>
                    <h4>Talk To Someone</h4>
                    <p>Get Answare and help</p>
            </div>
        </div>
        </div>

    );
};

export default Helps;
             