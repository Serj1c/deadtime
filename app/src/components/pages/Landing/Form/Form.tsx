import React from 'react';
import { Buttons } from '../Buttons';
import styles from './Form.module.css';

export const Form:React.FunctionComponent = () => {
    return (
        <div className={styles.root}>
            <h1 className={styles.title}>DeadTimer</h1>
            <p className={styles.subtitle}>Make The Most Out of Your Day</p>
            <Buttons />
        </div>
    )
}
