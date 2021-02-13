import React from 'react';
import { Link } from 'react-router-dom';
import { Buttons, Form } from './components';
import { Button } from '../../UI';
import styles from './LoginPage.module.css';

export const LoginPage:React.FunctionComponent = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <h2>Login</h2>
                <Buttons />
                <Form />
                <h3>Don't have an account yet?</h3>
                <Link to="/rega">
                    <Button>Proceed to Registration</Button>
                </Link>
            </div>
        </div> 
    )
}

