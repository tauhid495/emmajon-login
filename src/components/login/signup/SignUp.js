import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import './SignUp.css'
import auth from '../../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';



const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();

    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }

    if (user) {
        navigate('/orders')
    }
    const handleCreateUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Password not matched')
            return;
        }
        if (password.length < 6) {
            setError('Password atleast 6 characters')
            return;
        }
        else {
            setError('')
        }
        createUserWithEmailAndPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Signup Here</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmail} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassword} type="password" name="Password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm password</label>
                        <input onBlur={handleConfirmPassword} type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'orangered' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>
                    Already have an account? <Link className='form-link' to='/login'>Login </Link>
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

export default SignUp;