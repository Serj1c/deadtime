import { Link } from 'react-router-dom';
import React from 'react';
import styles from './Header.module.css';

export const Header: React.FunctionComponent = () => {
    return (
        <div className={styles.root}>
            <Link to="/">
                <div className={styles.header__title}>
                    <h1>DeadTimer</h1>
                    <h4>Make The Most Out Of Your Day</h4>
                </div>
            </Link>
            <div className={styles.root__navigation}>
                {/* If user is not logged in only Login button is visible */}
                <Link to="/login">
                    <div className={styles.navigation__item}>
                        <i className="fas fa-sign-in-alt"></i>
                        <h4>Login</h4>
                    </div>
                </Link>
                {/* Logout is visible only if user is logged in */}
                <div className={styles.navigation__item}>
                    <i className="fas fa-sign-out-alt"></i>
                    <h4>Logout</h4>
                </div>
                {/* Settings and Schedule are visible only if user is logged in */}
                <div className={styles.navigation__item}>
                    <i className="fas fa-cogs"></i>
                    <h4>Settings</h4>
                </div>
                <div className={styles.navigation__item}>
                    <i className="far fa-calendar-alt"></i>
                    <h4>Schedule</h4>
                </div>
            </div>
        </div>
    )
}
