import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Landing.css';

function Landing() {
    return (
        <div>
            <h1>I am landing page!</h1>
            <Link to="/rega">
                <button>Sign Up</button>
            </Link>
            <Link to="/login">
                <button>Sign In</button>
            </Link>
        </div> 
    )
}

export default Landing;
