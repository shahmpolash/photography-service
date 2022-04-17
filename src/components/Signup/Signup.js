import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import '../Signup/Signup.css';
import auth from '../../firebase.init';

const Signup = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate =  useNavigate();

    const navigateLogin =() =>{
        navigate('/login');
    }

    if(user){
        navigate('/home');
    }
    const handleSignup = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);

    }

    return (
        <div className='signup-form'>
            <h2>SignUp Now</h2>
            <form onSubmit={handleSignup} className='container'>
                <input type="text" name="name" id="" placeholder='Your Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Your Email' />
                <br />
                <input type="password" name="password" id="" placeholder='Your Password' />
                <br />
                <input className='bg-danger' type="submit" value="Signup" />
            </form>
            <p>Already Have an Account? <Link to='/login' className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
        
    );
};

export default Signup;