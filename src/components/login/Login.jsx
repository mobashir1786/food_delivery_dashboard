import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;
        console.log(email, password);
        axios.post("http://ec2-3-7-9-101.ap-south-1.compute.amazonaws.com/app/saveUserDataloginSignUpAPI/api/login", { email, password })
            .then(res => {
                document.cookie = "token=" + res.data.user.loginTokenID + "; expires=" + Date.now() + 1 * 24 * 60 * 60 * 1000;
                window.location.href = 'http://localhost:3000/';
                console.log(res.data.user.loginTokenID)
            }).catch(e => {
                console.log(e);
            })
    }
    return (
        <div className='login'>
            <div className="loginleft"></div>
            <div className="loginRight">
                <form onSubmit={handleLogin} className='loginbox'>
                    <input placeholder='Email' type="email" required />
                    <input placeholder='Password' type="password" required />
                    <button type="submit" >Sign In</button>
                    <Link to="/forget" className='forget'>
                        <div className='changepassword'>
                            <hr className='leftline' /><span>Change or Forget Password</span><hr className='rightline' />
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login
