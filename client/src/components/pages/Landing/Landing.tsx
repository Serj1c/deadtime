import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';

export const Landing: React.FunctionComponent = () => {
    return (
        <div>
            <h1>I am a landing page!</h1>
            <Link to="/rega">
                <button>Sign Up</button>
            </Link>
            <Link to="/login">
                <button>Sign In</button>
            </Link>
        </div> 
    )
}
