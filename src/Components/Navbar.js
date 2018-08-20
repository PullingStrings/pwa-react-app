import React, { Component } from 'react';

// import Home from './Components/Port';
// import Blog from './Components/LandingPage';



export default class Navbar extends Component {
  render() {
    return (
      <div>
        <section className="menu cid-qBHnOYkNU6" id="menu2-0">
          <nav className="navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm bg-color transparent">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <div className="hamburger">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
            <div className="menu-logo">
              <div className="navbar-brand">
                <span className="navbar-caption-wrap"><a className="navbar-caption text-white display-4" href="#top">Sibusiso Tito Zwane</a></span>
              </div>
            </div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true">
                <li className="nav-item">
                  <a className="nav-link link text-white display-4" href="index.html#content4-5">My Work/Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link text-white display-4" href="index.html#content4-u">Freelance Work</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link link text-white display-4" href="index.html#content4-g">Experience</a>
                </li>
                <li className="nav-item"><a className="nav-link link text-white display-4" href="index.html#content4-j">A bit about myself</a>
                </li>
                <li className="nav-item"><a className="nav-link link text-white display-4" href="#bottom">Contact</a>
                </li>
              </ul>
            </div>
          </nav>
        </section>
      </div>
    );
  }
}
