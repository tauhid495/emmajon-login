import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from.pathname || '/';


    const handleEmail = event => {
        setEmail(event.target.value);

    }
    const handlePassword = event => {
        setPassword(event.target.value);

    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSignin = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Please Login</h2>
                <form onSubmit={handleSignin} >

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" name="Password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to Emma-John? <Link className='form-link' to='/signup'>Create an account</Link>
                </p>

                <div className='or-border'>
                    <div></div>
                    <p>Or</p>
                    <div></div>
                </div>

            </div>
        </div >
    );
};

export default Login;