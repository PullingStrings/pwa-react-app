import React, { Component } from 'react';
import html2canvas from 'html2canvas';


export default class LandingPage extends Component {
  render() {

    html2canvas(document.getElementById('.capture')).then(canvas => {
      document.body.appendChild(canvas);
    });
    return (
      <div>
        <div className="container">
          <h1>Hello</h1>
        </div>
        <div id="capture" style="padding: 10px; background: #f5da55">
          <h4 style="color: #000; ">Hello world!</h4>
        </div>
      </div>
    );
  }
}
