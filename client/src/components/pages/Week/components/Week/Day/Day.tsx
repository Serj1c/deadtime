import React from 'react';
import styles from './Day.module.css';
import { DeadTime } from './DeadTime.tsx/DeadTime';

type weekDay = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

interface Props {
    title: weekDay
}

export const Day:React.FunctionComponent<Props> = ({ title }) => {
    return (
        <div className={styles.root}>
            <h3>{title}</h3>
            <DeadTime />
        </div>
    )
}
