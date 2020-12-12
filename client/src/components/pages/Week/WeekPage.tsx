import React from 'react';
import styles from './Week.module.css';
import { Week } from './components/Week/Week';
import { Header } from '../../common/Header/Header';

export const WeekPage:React.FunctionComponent = () => {
    return (
        <>
            <Header />
            <Week />
        </>
    )
}