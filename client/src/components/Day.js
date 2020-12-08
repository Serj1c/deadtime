import React from 'react';
import '../css/Day.css';
import DeadTime from './DeadTime';


function Day(props) {
    return (
        <div className="day">
            <h3>{props.title}</h3>
            <DeadTime />
        </div>
    )
}

export default Day;
