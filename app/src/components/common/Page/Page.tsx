import React, { ReactNode } from 'react';
import styles from './Page.module.css';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

interface Props {
    children: ReactNode
}

export const Page:React.FunctionComponent<Props> = ({ children }) => {
    return (
        <div className={styles.root}>
           <Header />
           {children}
           <Footer /> 
        </div>
    )
}
