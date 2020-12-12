import React from 'react';
import styles from './Day.module.css';
import { DeadTime } from './DeadTime.tsx/DeadTime';

interface Props {
    title: string
}

export const Day:React.FunctionComponent<Props> = ({ title }) => {
    return (
        <div className={styles.root}>
            <h3>{title}</h3>
            <DeadTime />
        </div>
    )
}
