import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import PrivateRoute from './utils/PrivateRoute'
import Home from './components/Home'
import Login from './components/Login'
import Friends from './components/Friends'

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="Nav">
          <ul className="NavItems">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/protected">Protected</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
          </ul>
        </nav>

        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <PrivateRoute exact path="/protected" component={Friends} />
      </div>
    </Router>
  );
}

export default App;
