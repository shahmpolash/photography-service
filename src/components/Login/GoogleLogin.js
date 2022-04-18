import React from 'react';
import google from '../images/google-icon.png'

const GoogleLogin = () => {
    return (
        <div>
            <button className='bg-danger text-white'><img style={{width: '30px'}} src={google} alt="" />Sign in With Google</button>
        </div>
    );
};

export default GoogleLogin;