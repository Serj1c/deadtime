import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/common/Header/Header';
import { Week } from './components/pages/Week/Week';
import { Login } from './components/pages/Login/Login';
import { Landing } from './components/pages/Landing/Landing';
import { Rega } from './components/pages/Rega/Rega';
import Day from './components/Day';

function App() {
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
          <Header />
          <Week />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/day">
          <Header />
          <Day />
        </Route>
      </div>
    </Router>
  );
}

export default App;
