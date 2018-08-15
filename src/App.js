// App.js

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Slideshow from './Components/Slideshow';
import Workprojects from './Components/Workprojects';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <br/>
        <Slideshow />
        <section className="mbr-section content4 cid-qBHoZGcwZ3" id="content4-5">
          <div className="container">
            <div className="media-container-row">
              <div className="title col-12 col-md-8">
                <h2 className="align-center pb-3 mbr-fonts-style display-2">My Work/Projects</h2>
              </div>
            </div>
          </div>
        </section>
        <Workprojects />
      </div>
    );
  }
}

export default App;
