import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../UI/Button/Button';
import styles from './Buttons.module.css';

export const Buttons:React.FunctionComponent = () => {
    return (
        <div className={styles.root}>
            <Link to="/rega">
                <Button>Sign Up</Button>
            </Link>
            <Link to="/login">
                <Button>Sign In</Button>
            </Link>
        </div>
    )
}
