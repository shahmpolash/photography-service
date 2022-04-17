import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import banner2 from '../images/banner/bnr-2.jpg';
import banner3 from '../images/banner/bnr-3.jpg';
import './Banner.css';

const Banner = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='display-2 text-primary'>Book online</h3>
                    <p>Your Perfocal photographer will be there at the arranged time with everything they need.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='display-2 text-primary'>Make it real</h3>
                    <p>
                    If you want, take the best of your gallery and turn it into a photobook, frame or print. It's a great gift idea. Read a media review about our service here.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;