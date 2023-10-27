import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;

        axios.post("", { email: email, password: password })
            .then(res => {
                console.log(res)
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
                    <button type="submit" >Agree & Sign-up</button>
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
