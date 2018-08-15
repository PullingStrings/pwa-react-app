import React, { Component } from 'react';

export default class Workprojects extends Component {
  render() {
    return (
      <div>
        <section className="features3 cid-qBHp7sbsJG" id="features17-6">
          <div className="container-fluid">
            <div className="media-container-row">
              <div className="card p-3 col-12 col-md-6 col-lg-3">
                <div className="card-wrapper">
                  <div className="card-img">
                    <a href="https://pop-the-balloons.herokuapp.com/">
                      <img
                        src={require('../images/screen-shot-2017-11-22-at-11.40.16-1280x800.png')} alt='pop ballons game' />
                    </a>
                  </div>
                  <div className="card-box">
                    <h4 className="card-title pb-3 mbr-fonts-style display-7">Pop The Balloons</h4>
                    <p className="mbr-text mbr-fonts-style display-7">This was the first time I fully built something from the ground up just using CSS and HTML.
                      <br/>It was a fun but very challenging game to build which is  set at a night carnival, where you can pop some balloons for fun.
                      <br/>
                      <br/>Simple exciting game where you get to pop some balloons on your way home.
                      <br/>
                      <br/>
                      <a href="https://pop-the-balloons.herokuapp.com/" className="text-danger">https://pop-the-balloons.herokuapp.com/</a><br/></p>
                  </div>
                </div>
              </div>
              <div className="card p-3 col-12 col-md-6 col-lg-3">
                <div className="card-wrapper">
                  <div className="card-img">
                    <a href="https://learndancemzansi.herokuapp.com/">
                      <img
                        src={require('../images/screen-shot-2017-11-22-at-11.37.07-1278x798.png')} alt='learn to dance web app' />
                    </a>
                  </div>
                  <div className="card-box">
                    <h4 className="card-title pb-3 mbr-fonts-style display-7">Learn to dance mzansi</h4>
                    <p className="mbr-text mbr-fonts-style display-7">
                      This was an individual project. I have used EJS together with jQuery and Ajax as a front end tool to create a very slick looking web app that teaches you how to dance. Fully RESTful you can login and logout securely and upload videos that are kept in the database that I created from scratch using MongoDB and Express.<br/><br/><a href="https://learndancemzansi.herokuapp.com/" className="text-primary">https://learndancemzansi.herokuapp.com/</a><br/>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card p-3 col-12 col-md-6 col-lg-3">
                <div className="card-wrapper">
                  <div className="card-img">
                    <a href="https://lost-and-found-pets.herokuapp.com/">
                      <img
                        src={require('../images/screen-shot-2017-11-22-at-11.38.16-1280x800.png')} alt='pop ballons game' />
                    </a>
                  </div>
                  <div className="card-box">
                    <h4 className="card-title pb-3 mbr-fonts-style display-7">Lost &amp; Found pets</h4>
                    <p className="mbr-text mbr-fonts-style display-7">
                        This was a group project built to help pet owners to locate and find their lost pets. I did most of the styling for the whole app with advice from my team members using CSS and AngularJS.<br/><br/>A Web app that allows you to find your pet.<br/><br/><br/><a href="https://lost-and-found-pets.herokuapp.com/" className="text-warning">https://lost-and-found-pets.herokuapp.com/</a><br/>
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-3 col-12 col-md-6 col-lg-3">
                <div className="card-wrapper">
                  <div className="card-img">
                    <a href="https://playgenfinder.herokuapp.com/">
                      <img
                        src={require('../images/screen-shot-2017-11-22-at-11.39.01-1280x800.png')} alt='Play generator cover' />
                    </a>
                  </div>
                  <div className="card-box">
                    <h4 className="card-title pb-3 mbr-fonts-style display-7">Play-Gen Finder</h4>
                    <p className="mbr-text mbr-fonts-style display-7">
                       This was an individual project, that helps users discover playlists from other users in any area you are in and lets you follow their playlists built using React JS and Express as the backend, you will be able to login using Spotify and find music anywhere you are.<br/><br/><a href="https://playgenfinder.herokuapp.com/" className="text-black">https://playgenfinder.herokuapp.com/</a><br/>
                    </p>
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
