import React from 'react';
import styles from './Landing.module.css';
import { Form } from './Form';

export const LandingPage: React.FunctionComponent = () => {
    return (
        <div className={styles.root}>
            <Form />
        </div> 
    )
}
