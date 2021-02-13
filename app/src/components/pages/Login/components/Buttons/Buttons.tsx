import React from 'react';
import { Button } from '../../../../UI';
import styles from './Buttons.module.css';

export const Buttons:React.FunctionComponent = () => {
    return (
        <div className={styles.root}>
                <Button>Google</Button>
                <Button>Facebook</Button>
        </div>
    )
}
