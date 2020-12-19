import React, { ReactNode } from 'react';
import styles from './Button.module.css';

interface Props {
    children: ReactNode
}

export const Button:React.FunctionComponent<Props> = ({ children }) => {
    return (
        <button type="button" className={styles.root}>
            {children}
        </button>
    )
}