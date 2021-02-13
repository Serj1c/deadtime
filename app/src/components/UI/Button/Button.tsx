import React, { ReactNode } from 'react';
import styles from './Button.module.css';

type Design = 'primary' | 'secondary' | 'danger' | 'success' | 'default';
type Size = 'l' | 'm' | 's';

interface Props {
    children?: ReactNode;
    icon?: ReactNode;
    design?: Design;
    size?: Size;
}

export const Button:React.FunctionComponent<Props> = ({ children, icon, design="default", size="m"}) => {
    return (
        <button type="button" className={styles.root}>
            {children}
        </button>
    )
}