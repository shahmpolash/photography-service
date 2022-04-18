import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import '../Signup/Signup.css';
import auth from '../../firebase.init';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
      const [updateProfile, updating, undateError] = useUpdateProfile(auth);

    const navigate =  useNavigate();

    const navigateLogin =() =>{
        navigate('/login');
    }

   
    const handleSignup = async (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

       await createUserWithEmailAndPassword(email, password);
       await updateProfile({ displayName: name });
       navigate('/home');

    }

    return (
        <div className='signup-form'>
            <h2>SignUp Now</h2>
            <form onSubmit={handleSignup} className='container'>
                <input type="text" name="name" id="" placeholder='Your Name' required />
                <br />
                <input type="email" name="email" id="" placeholder='Your Email' required />
                <br />
                <input type="password" name="password" id="" placeholder='Your Password' required />
                <br />
                <input className='bg-danger' type="submit" value="Signup" />
            </form>
            <p>Already Have an Account? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
        
    );
};

export default Signup;