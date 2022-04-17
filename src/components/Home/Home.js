import React from 'react';
import Services from '../Services/Services';
import '../Home/Home.css';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            
            <h3 className='bg-danger m-4 text-white p-4'>WEDDING VIDEOGRAPHY AND PHOTOGRAPHY SERVICES</h3>
            
            <div className='container'>
            <h4>Every story is worth sharing and as a group of dedicated film and photo artists, Riss Photography wants to take a part in making your most memorable love stories truly life changing. The unit is proud of their collective passion in film making and photography which exclusively serves as a guidance principle.</h4>
            <div id="services" className='service-container'>
            <Services></Services>
            </div>
            </div>
            
        </div>
    );
};

export default Home;