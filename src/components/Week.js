import React from 'react';
import '../css/Week.css';
import Day from './Day';

function Week() {
    return (
        <div className="container">
            <h2>Plan Your Week</h2>
            <div className="week__container">
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
                <Day />
            </div>
        </div>
    )
}

export default Week;
