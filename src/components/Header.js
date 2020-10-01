import React from 'react';
import '../css/Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__title">
                <h1>DeadTimer</h1>
                <h4>Make The Most Out Of Your Day</h4>
            </div>
            <div className="header__nav">
                <div className="header__nav__1">
                    <img src="#" alt=""/>
                    <h4>Login</h4>
                </div>
                <div className="header__nav__2">
                    <img src="#" alt=""/>
                    <h4>Settings</h4>
                </div>
                <div className="header__nav__3">
                    <img src="#" alt=""/>
                    <h4>Schedule</h4>
                </div>
            </div>
        </div>
    )
}

export default Header;
