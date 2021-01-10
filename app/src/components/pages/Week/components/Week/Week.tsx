import React from 'react';
import styles from './Week.module.css';
import { Day } from './Day/Day';


export const Week:React.FunctionComponent = () => {

    return (
        <>
            <h2 style={{ textAlign: "center"}} >Plan Your Week</h2>
            <div className={styles.root}>
                <Day title="Monday"/>
                <Day title="Tuesday"/>
                <Day title="Wednesday"/>
                <Day title="Thursday"/>
                <Day title="Friday"/>
                <Day title="Saturday"/>
                <Day title="Sunday"/>
            </div>
        </>
    )
}
