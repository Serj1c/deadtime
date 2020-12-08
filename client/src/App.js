import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Week from './components/Week';
import Login from './components/Login';
import Landing from './components/Landing';
import Rega from './components/Rega';
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
