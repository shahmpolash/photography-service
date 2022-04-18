import React from 'react';
import { Link } from 'react-router-dom';
import '../Services/Services.css';

const Service = (props) => {
    const {name, price, details1, details2, details3, details4, details5, img} = props.service;
    return (
        <div className='service'>
            <img src={img} alt="" srcset="" />
            <h2>Package: {name}</h2>
            <h3>Price: ৳{price} <small>BDT</small></h3>
            <h3>Details:</h3>
            <p><li>{details1}</li></p>
            <p><li><b>{details2}</b></li></p>
            <p><li>{details3}</li></p>
            <p><li>{details4}</li></p>
            <p><li>{details5}</li></p>
            <Link to='/checkout'>
            <button className='btn btn-primary'>Book Now</button>
            </Link>
        </div>
    );
};

export default Service;