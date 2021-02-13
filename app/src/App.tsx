import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { WeekPage } from './components/pages/Week/WeekPage';
import { LandingPage, LoginPage } from './components/pages';
import { Rega } from './components/pages/Rega/Rega';

export const App:React.FunctionComponent = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={LandingPage} />
        <Route path="/rega" component={Rega} />
        <Route path="/week" component={WeekPage} />
        <Route path="/login" component={LoginPage} />
      </div>
    </Router>
  );
}
