import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../UI';
import styles from './Buttons.module.css';

export const Buttons:React.FunctionComponent = () => {
    return (
        <div className={styles.root}>
            <Link to="/rega">
                <Button design="default" size="m">Sign Up</Button>
            </Link>
            <Link to="/login">
                <Button design="default" size="m">Sign In</Button>
            </Link>
        </div>
    )
}
