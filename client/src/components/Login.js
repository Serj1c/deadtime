import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Login.css';

function Login() {
    return (
        <div className="loginpage">
            <div className="loginpage__container">
                <h2>Login</h2>
                <form action="#" method="POST" className="loginpage__registration">
                    <input
                        type="text"
                        placeholder="Enter your username"
                        /* value="username" */
                    />
                    <input 
                        type="password"
                        placeholder="Enter your password"
                        /* value="password" */
                    />
                    <button className="loginpage__button login">Sign In</button>
                </form>
                <h3>Don't have an account yet?</h3>
                <Link to="/rega">
                    <button className="loginpage__button signup">Proceed to Registration</button>
                </Link>
            </div>
        </div> 
    )
}

export default Login;

