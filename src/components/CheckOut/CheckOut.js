import React from 'react';
import { Link } from 'react-router-dom';
import './CheckOut.css';

const CheckOut = () => {
    return (
        <div className='checkout container'>
            <h2>CheckOut</h2>
            <div className=' container w-50'>
            <form  className='input' action="">
                <input type="text" name="name" id="" placeholder="Your Name" />
                <br />
                <input type="text" name="address" id="" placeholder="Your Address 1"  />
                <br />
                <input type="text" name="address2" id="" placeholder="Your Address 2"  />
                <br />
                <input type="email" name="email" id="" placeholder="Your Email"  />
                <br />
                <input type="text" name="phone" id="" placeholder="Your Phone Number" />
                <br />
                <Link to='/thankyou'>
            <button className='btn btn-primary'>Processed to Checkout</button>
            </Link>
            </form>
            </div>

        </div>
    );
};

export default CheckOut;