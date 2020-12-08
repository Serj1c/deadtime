import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Week.css';
import Day from './Day';

function Week() {
    return (
        <div className="container">
            <h2>Plan Your Week</h2>
            <div className="week__container">
                <Day title="Monday"/>
                <Day title="Tuesday"/>
                <Day title="Wednesday"/>
                <Day title="Thursday"/>
                <Day title="Friday"/>
                <Day title="Saturday"/>
                <Day title="Sunday"/>
            </div>
        </div>
    )
}

export default Week;
