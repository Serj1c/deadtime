import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import Week from './components/Week';
import Login from './components/Login';
import Landing from './components/Landing';
import Rega from './components/Rega';

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
      </div>
    </Router>

  );
}

export default App;
