// App.js

import React, { Component } from 'react';
// import Navbar from './Components/Navbar';
// import Port from './Components/Port';
import Home from './Components/Port';
import Blog from './Components/LandingPage';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
              <li className="nav-item">
                <Link to="/" className="nav-link link display-4" >Home</Link>
              </li>
              <li>
                <Link to="/blog" className="nav-link link display-4" >Blog</Link>
              </li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
