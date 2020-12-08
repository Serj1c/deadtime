import { Link } from 'react-router-dom';
import './Header.css';

export function Header() {
    return (
        <div className="header">
            <Link to="/">
                <div className="header__title">
                    <h1>DeadTimer</h1>
                    <h4>Make The Most Out Of Your Day</h4>
                </div>
            </Link>
            <div className="header__nav">
                {/* If user is not logged in only Login button is visible */}
                <Link to="/login">
                    <div className="header__nav__item nav__1">
                        <i className="fas fa-sign-in-alt"></i>
                        <h4>Login</h4>
                    </div>
                </Link>
                {/* Logout is visible only if user is logged in */}
                <div className="header__nav__item nav__4">
                    <i class="fas fa-sign-out-alt"></i>
                    <h4>Logout</h4>
                </div>
                {/* Settings and Schedule are visible only if user is logged in */}
                <div className="header__nav__item nav__2">
                    <i class="fas fa-cogs"></i>
                    <h4>Settings</h4>
                </div>
                <div className="header__nav__item nav__3">
                    <i className="far fa-calendar-alt"></i>
                    <h4>Schedule</h4>
                </div>
            </div>
        </div>
    )
}
