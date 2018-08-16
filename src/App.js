// App.js

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Port from './Components/Port';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <br/>
        <Port />
      </div>
    );
  }
}

export default App;
