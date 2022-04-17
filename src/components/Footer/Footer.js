import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='text-center mt-5'>
            <h3>© Copyright by Shah Photography</h3>
            <p>{year}</p>
            
        </div>
    );
};

export default Footer;