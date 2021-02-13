import React from 'react';
import { Button } from '../../../../UI';
import styles from './Form.module.css';

export const Form:React.FunctionComponent = () => {
    return (
        <div className={styles.root}>
            <form action="#" method="POST" className="loginpage__registration">
                <input
                    type="text"
                    placeholder="Enter your username"
                    /* value="username" */
                />
                <input 
                    type="password"
                    placeholder="Enter your password"
                    /* value="password" */
                />
                <Button>Sign In</Button>
            </form>
        </div>
    )
}
