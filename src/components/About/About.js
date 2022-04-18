import React from 'react';
import myphoto from '../images/shah.jpg'

const About = () => {
    return (
        <div className='container'>
            <h1>About Me</h1>
            <img src={myphoto} alt="" />
            <h2>I am Shah MD Polash</h2>
            <div>
                <h3>This is Shah Mohammad Polash, Founder of ShahMpolash.com. My main profession is to build profitable niche website and sell it on the marketplace.
Now I am providing niche site building service on ShahMpolash.com.</h3>
                <br />
                <h2>
                I have already built a team with 10 active members. They are also experts on SEO, content writing, WordPress. No matter how expert they are, I always guide them to my client's projects.
                </h2>
            </div>

        </div>
    );
};

export default About;