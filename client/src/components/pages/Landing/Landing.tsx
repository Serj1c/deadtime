import React from 'react';
import styles from './Landing.module.css';
import { Buttons } from './Buttons/Buttons';

export const Landing: React.FunctionComponent = () => {
    return (
        <div className={styles.root}>
            <h1>I am a landing page!</h1>
            <Buttons />
        </div> 
    )
}