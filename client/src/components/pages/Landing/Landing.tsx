import React from 'react';
import styles from './Landing.module.css';
import { Form } from './Form/Form';

export const Landing: React.FunctionComponent = () => {
    return (
        <div className={styles.root}>
            <Form />
        </div> 
    )
}

