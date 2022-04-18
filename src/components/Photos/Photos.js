import React from 'react';
import photo1 from '../images/photos/photo-1.jpg';
import photo2 from '../images/photos/photo-2.jpg';
import photo3 from '../images/photos/photo-3.jpg';
import photo4 from '../images/photos/photo-4.jpg';
import photo5 from '../images/photos/photo-5.jpg';
import photo6 from '../images/photos/photo-6.jpg';
import photo7 from '../images/photos/photo-7.jpg';
import photo8 from '../images/photos/photo-8.jpg';
import './Photos.css';

const Photos = () => {
    return (
        <div className='photos'>
            <img src={photo1} alt="" />
            <img src={photo2} alt="" />
            <img src={photo3} alt="" />
            <img src={photo4} alt="" />
            <img src={photo5} alt="" />
            <img src={photo6} alt="" />
            <img src={photo7} alt="" />
            <img src={photo8} alt="" />
        </div>
    );
};

export default Photos;