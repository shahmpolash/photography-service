import React from 'react';
import { Link } from 'react-router-dom';
import '../Services/Services.css';

const Service = (props) => {
    const {name, price, description, img} = props.service;
    return (
        <div className='service'>
            <img src={img} alt="" srcset="" />
            <h2>Package: {name}</h2>
            <h3>Price: ৳{price} <small>BDT</small></h3>
            <p>Details: {description} </p>
            <Link to='/checkout'>
            <button className='btn btn-primary'>Book Now</button>
            </Link>
        </div>
    );
};

export default Service;