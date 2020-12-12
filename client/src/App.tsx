import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { WeekPage } from './components/pages/Week/WeekPage';
import { Login } from './components/pages/Login/Login';
import { Landing } from './components/pages/Landing/Landing';
import { Rega } from './components/pages/Rega/Rega';

export const App:React.FunctionComponent = () => {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Landing />
        </Route>
        <Route path="/rega">
          <Rega />
        </Route>
        <Route path="/week">
          {/* <Header /> */}
          <WeekPage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </div>
    </Router>
  );
}
