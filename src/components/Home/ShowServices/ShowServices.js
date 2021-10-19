import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './ShowServices.css'

const ShowServices = (props) => {
    const {id,img,price,description,name} = props.service
    return (
        <div className='show'>
             <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <h3>Price: ${price}</h3>
            <p style={{textAlign:'justify'}}>{description.slice(1,150)}</p>
          </Card.Text>
        </Card.Body>
        <NavLink to={`/details/${id}`}><button className='border-0 bg-danger px-5 py-1 fs-5 text-white mb-3 rounded'>Details</button></NavLink>
      </Card>
    </Col>
    <br />
    <br />
        </div>
    );
};

export default ShowServices;