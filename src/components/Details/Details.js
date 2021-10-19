import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './Details.css'

const Details = () => {
    const {mediId} = useParams();
    const [details, setDetails] = useState({})
    const history = useHistory();

    const handleButton = () =>{
        history.push('/home')
    }
    useEffect(()=>{
        fetch('/medicine.json')
        .then(res => res.json())
        .then(data => {
            setDetails(data.find(d =>d.id === Number(mediId)) || {})
        })
    },[mediId])
    return (
        <div className='details'>
            <h1>Number Of Medicine: {mediId}</h1>
            <hr />
            <div>
                <img src={details.img} alt="" />
                <h2>{details.name}</h2>
                <h3>Price:${details.price}</h3>
                <h5 style={{width:'40%', margin:'0 auto', textAlign:'justify'}}><span className='fs-5'>Uses</span>: {details.description}</h5>
                <div>
                  <button onClick={handleButton} className='border-0 bg-primary px-5 py-1 mt-3 text-white me-4 rounded'>Back To Home</button>
                  <button className='border-0 bg-primary px-5 py-1 mt-3 text-white rounded' >Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default Details;