// App.js

import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Slideshow from './Components/Slideshow';
import Workprojects from './Components/Workprojects';
import Freelance from './Components/Freelance';
import Experience from './Components/Experience';
import Myself from './Components/Myself';
import Footer from './Components/Footer';

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
        <section className="mbr-section content4 cid-qXjrC7Y4II" id="content4-u">
          <div className="container">
            <div className="media-container-row">
              <div className="title col-12 col-md-8">
                <h2 className="align-center pb-3 mbr-fonts-style display-2">Freelance Work</h2>
              </div>
            </div>
          </div>
        </section>
        <Freelance />
        <section className="mbr-section content4 cid-qBHUY5Rm18" id="content4-g">
          <div className="container">
            <div className="media-container-row">
              <div className="title col-12 col-md-8">
                <h2 className="align-center pb-3 mbr-fonts-style display-2">Experience</h2>
              </div>
            </div>
          </div>
        </section>
        <Experience />
        <section className="mbr-section content4 cid-qBHZTIPs7t" id="content4-j">
          <div className="container">
            <div className="media-container-row">
              <div className="title col-12 col-md-8">
                <h2 className="align-center pb-3 mbr-fonts-style display-2">A bit about myself</h2>
              </div>
            </div>
          </div>
        </section>
        <Myself />
        <Footer />
      </div>
    );
  }
}

export default App;
