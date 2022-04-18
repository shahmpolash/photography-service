import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../images/google-icon.png'

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error) {
        
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        
      }

      if(user){
        navigate('/home');
      }
    return (
        <div>
            <button onClick={() => signInWithGoogle()} className='bg-danger text-white'><img style={{width: '30px'}} src={google} alt="" />Sign in With Google</button>
            {errorElement}
        </div>
    );
};

export default GoogleLogin;