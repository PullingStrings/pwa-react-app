import React, { Component } from 'react';

export default class Freelance extends Component {
  render() {
    return (
      <div>
        <section className="features15 cid-qXjrN9BDmq" id="features15-v">
          <div className="container">
            <h3 className="mbr-section-subtitle display-5 align-center mbr-fonts-style">Working across the entertainment industry in southern and eastern Africa, I created customised and fit-for-purpose websites to respond to the needs of a dedicated client base. Customers included art spaces, music projects, and radio stations.</h3>
            <div className="media-container-row container pt-5 mt-2">
              <div className="col-12 col-md-6 mb-4">
                <div className="card flip-card p-5 align-center">
                  <div className="card-front card_cont">
                    <a href="https://power.care.ca/">
                      <img src={require('../images/carepower.png')} alt="Power project " title="POWER project" /></a>
                  </div>
                  <div className="card_back card_cont">
                    <a href="https://power.care.ca/"><h4 className="card-title display-5 py-2 mbr-fonts-style">CARE Canada Youth Product project</h4></a>
                    <p className="mbr-text mbr-fonts-style display-7">ABOUT<br/>Using information probided by CARE, we developed a web-based report that is both engaging and rich in information, including hard data, statistics and analysis.The use of narrative and multimedia centred on the clients experiences.</p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <div className="card flip-card p-5 align-center">
                  <div className="card-front card_cont">
                    <a href="http://www.nafasiartspace.org/"><img src={require('../images/nafasi.png')} alt="Nafasi Art Space" title="Nafasi Art Space"/></a>
                  </div>
                  <div className="card_back card_cont">
                    <a href="http://www.nafasiartspace.org/"><h4 className="card-title py-2 mbr-fonts-style display-5">
                              Nafasi Art Space</h4></a>
                    <p className="mbr-text mbr-fonts-style display-7">
                    Nafasi Art Space hosts over 50 artists, 37 studios, and several exhibition spaces, They offer regular programmes including training and workshops, art talks, and public events, such as screenings, exhibitions, concerts, festivals and public art fairs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

}
