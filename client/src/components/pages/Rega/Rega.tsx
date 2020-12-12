import { Link } from 'react-router-dom';
import React from 'react';
import './Rega.css';

export const Rega:React.FunctionComponent = () => {
    return (
        <div className="rega">
            <div className="rega__container">
                <h2>Registration</h2>
                <form className="rega__registration">
                    <input
                        type="text"
                        placeholder="Come up with a fancy username"
                        /* value="username" */
                    />
                    <input 
                        type="email"
                        placeholder="Enter your email"
                        /* value="email"  */   
                    />
                    <input 
                        type="password"
                        placeholder="Password"
                        /* value="password" */
                    />
                    <button className="rega__button signup">Sign Up</button>
                </form>
                <h3>Already have an account?</h3>
                <Link to="/login">
                    <button className="rega__button login">Proceed to Login Page</button>
                </Link>
            </div>
        </div>
    )
}
