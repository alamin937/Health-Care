import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import ShowServices from '../ShowServices/ShowServices';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('/medicine.json')
        .then(res => res.json())
        .then(data =>setServices(data))
    },[])
    return (
        <div className='services'>
            <h1>SERVICES</h1>
            <hr />
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        services.map(service=> <ShowServices service={service}></ShowServices>)
                    }
                </Row>
        </div>
    );
};

export default Services;