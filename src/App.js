// App.js

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Slideshow from './Components/Slideshow';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <br/>
        <Slideshow />
      </div>
    );
  }
}

export default App;
