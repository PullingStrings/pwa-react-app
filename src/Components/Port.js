import React, { Component } from 'react';

// import Home from '../Components/Port';
// import Blog from '../Components/LandingPage';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const fullScreenStyle = {
  opacity: 0.6
};

function importAll(r) {
  const images = {};
  r.keys().map((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

export default class Port extends Component {
  render() {
    return (
      <div>
        <section className="engine"></section>
        <section className="carousel slide cid-qBHogvf7g9" data-interval="false" id="slider1-1">
          <div className="full-screen">
            <div className="mbr-slider slide carousel" data-pause="true" data-keyboard="false" data-ride="carousel" data-interval="5000">
              <ol className="carousel-indicators">
                <li data-app-prevent-settings="" data-target="#slider1-1" className=" active" data-slide-to="0"></li>
                <li data-app-prevent-settings="" data-target="#slider1-1" data-slide-to="1"></li>
                <li data-app-prevent-settings="" data-target="#slider1-1" data-slide-to="2"></li>
                <li data-app-prevent-settings="" data-target="#slider1-1" data-slide-to="3"></li>
              </ol>
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item slider-fullscreen-image active" data-bg-video-slide="false"
                  style={{backgroundImage: `url(${images['laptop.jpg']})`}}>
                  <div className="container container-slide">
                    <div className="image_wrapper">
                      <div className="mbr-overlay"
                        style={fullScreenStyle}>
                      </div>
                      <img src={require('../images/laptop.jpg')} alt='laptop' />
                      <div className="carousel-caption justify-content-center">
                        <div className="col-10 align-center">
                          <h2 className="mbr-fonts-style display-1">Sibusiso Tito Zwane</h2>
                          <p className="lead mbr-text mbr-fonts-style display-5">Web developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item slider-fullscreen-image" data-bg-video-slide="false"
                  style={{backgroundImage: `url(${images['playing.jpg']})`}}>
                  <div className="container container-slide">
                    <div className="image_wrapper">
                      <div className="mbr-overlay">
                      </div>
                      <img src={require('../images/playing.jpg')} alt='' />;
                      <div className="carousel-caption justify-content-center">
                        <div className="col-10 align-left">
                          <h2 className="mbr-fonts-style display-1">Sibusiso Tito Zwane</h2>
                          <p className="lead mbr-text mbr-fonts-style display-5">Music &nbsp;Lover</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item slider-fullscreen-image" data-bg-video-slide="false"
                  style={{backgroundImage: `url(${images['full-scan-full-edit-1870x1100.jpg']})`}}>
                  <div className="container container-slide">
                    <div className="image_wrapper">
                      <div className="mbr-overlay">
                      </div>
                      <img src={images['full-scan-full-edit-1870x1100.jpg']} alt='bikes' />;
                      <div className="carousel-caption justify-content-center">
                        <div className="col-10 align-left">
                          <h2 className="mbr-fonts-style display-1">Sibusiso Tito Zwane</h2>
                          <p className="lead mbr-text mbr-fonts-style display-5">Art &nbsp; lover.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item slider-fullscreen-image" data-bg-video-slide="false"
                  style={{backgroundImage: `url(${images['specking.jpg']})`}}>
                  <div className="container container-slide">
                    <div className="image_wrapper">
                      <div className="mbr-overlay">
                      </div>
                      <img src={images['specking.jpg']} alt='presenting' />;
                      <div className="carousel-caption justify-content-center">
                        <div className="col-10 align-left">
                          <h2 className="mbr-fonts-style display-1">Sibusiso Tito Zwane</h2>
                          <p className="lead mbr-text mbr-fonts-style display-5">World Traveller</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a data-app-prevent-settings="" className="carousel-control carousel-control-prev" role="button" data-slide="prev" href="#slider1-1">
                <span aria-hidden="true" className="mbri-left mbr-iconfont"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a data-app-prevent-settings="" className="carousel-control carousel-control-next" role="button" data-slide="next" href="#slider1-1">
                <span aria-hidden="true" className="mbri-right mbr-iconfont"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </section>
        <section className="mbr-section content4 cid-qBHoZGcwZ3" id="content4-5">
          <div className="container">
            <div className="media-container-row">
              <div className="title col-12 col-md-8">
                <h2 className="align-center pb-3 mbr-fonts-style display-2">My Work/Projects</h2>
              </div>
            </div>
          </div>
        </section>
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
        <section className="mbr-section content4 cid-qXjrC7Y4II" id="content4-u">
          <div className="container">
            <div className="media-container-row">
              <div className="title col-12 col-md-8">
                <h2 className="align-center pb-3 mbr-fonts-style display-2">Freelance Work</h2>
              </div>
            </div>
          </div>
        </section>
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
        <section className="mbr-section content4 cid-qBHUY5Rm18" id="content4-g">
          <div className="container">
            <div className="media-container-row">
              <div className="title col-12 col-md-8">
                <h2 className="align-center pb-3 mbr-fonts-style display-2">Experience</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="timeline1 cid-qBHvrY6ABK" id="timeline1-b">
          <div className="container align-center">
            <div className="container timelines-container" mbri-timelines="">
              <div className="row timeline-element  separline">
                <div className="timeline-date-panel col-xs-12 col-md-6 align-right">
                  <div className="time-line-date-content">
                    <p className="mbr-timeline-date mbr-fonts-style display-5">Jan 2018 - Jun 2018</p>
                  </div>
                </div>
                <span className="iconBackground"></span>
                <div className="col-xs-12 col-md-6 align-left ">
                  <div className="timeline-text-content">
                    <h4 className="mbr-timeline-title pb-3 mbr-fonts-style display-5">DemoMedia<br/>Junior Web developer</h4>
                    <p className="mbr-timeline-text mbr-fonts-style display-7">DemoMedia provides a full range of digital design services from web through to print and online branding. As a web developer I worked to:<br/>-Address bug issues on platform
                      <br/>-Code and program fixes on platform.
                      <br/>-Communicate with Demomeida clients and update all website/platforms made with Demomedia
                      <br/>-Update and fix marketing site for Demomedia.
                      <br/>-Support<br/>&nbsp;</p>
                  </div>
                </div>
              </div>
              <div className="row timeline-element reverse separline">
                <div className="timeline-date-panel col-xs-12 col-md-6  align-left">
                  <div className="time-line-date-content">
                    <p className="mbr-timeline-date mbr-fonts-style display-5">Feb 2018 - Jul 2018 &nbsp;</p>
                  </div>
                </div>
                <span className="iconBackground"></span>
                <div className="col-xs-12 col-md-6 align-right">
                  <div className="timeline-text-content">
                    <h4 className="mbr-timeline-title pb-3 mbr-fonts-style display-5">
                            Eventogy<br/>Software Engineer</h4>
                    <p className="mbr-timeline-text mbr-fonts-style display-7">Eventogy is a simple, secure and scalable corporate conferences and events management platform. As a php web developer I worked to:<br/>-Track and manage ticketing board system to fix any bugs with the platform.
                      <br />-Programme and test new features asked from senior engineers.
                      <br />-Create new themes/websites that are integrated within the Eventogy platform.
                      <br />-Engaging with clients via phone and email with Support of platform.
                      <br />-Routinely have security checks on software and platform.</p>
                  </div>
                </div>
              </div>
              <div className="row timeline-element  separline">
                <div className="timeline-date-panel col-xs-12 col-md-6  align-right">
                  <div className="time-line-date-content">
                    <p className="mbr-timeline-date mbr-fonts-style display-5">Jul 2017 - Nov 2017 &nbsp;</p>
                  </div>
                </div>
                <span className="iconBackground"></span>
                <div className="col-xs-12 col-md-6 align-left">
                  <div className="timeline-text-content">
                    <h4 className="mbr-timeline-title pb-3 mbr-fonts-style display-5">Web developer<br/>General Assembly</h4>
                    <p className="mbr-timeline-text mbr-fonts-style display-7">An intensive three-month full-time programme, teaching the fundamentals of<br/>Web Development through practical application delivered by industry<br/>experts. <br/><br/>In the three months, our responsibilities and assignments were to create code and deploy 4 web apps.</p>
                  </div>
                </div>
              </div>
              <div className="row timeline-element reverse separline">
                <div className="timeline-date-panel col-xs-12 col-md-6 align-left">
                  <div className="time-line-date-content">
                    <p className="mbr-timeline-date mbr-fonts-style display-5">Apr 2015 - Apr 2016</p>
                  </div>
                </div>
                <span className="iconBackground"></span>
                <div className="col-xs-12 col-md-6 align-right ">
                  <div className="timeline-text-content">
                    <h4 className="mbr-timeline-title pb-3 mbr-fonts-style display-5">Fuse Afrika<br/>Director-Dar es Salaam</h4>
                    <p className="mbr-timeline-text mbr-fonts-style display-7">FuseAfrika project is an experimental fusion musical concept that challenges and questions ideas around culture, language, and upbringing by working collaboratively with people of different backgrounds and ideologies through art and music.
                      <br/>- Manage and engage with participants from two different countries, helping participants network and communicate constructively
                      <br/>- Design and maintain an interactive, glossy website, as well as all other social media platforms for online media presence
                      <br/>- Develop and edit media content for all social media platforms, including documentary film, photographs, and storylines
                      <br/></p>
                  </div>
                </div>
              </div>
              <div className="row timeline-element separline">
                <div className="timeline-date-panel col-xs-12 col-md-6  align-right">
                  <div className="time-line-date-content">
                    <p className="mbr-timeline-date mbr-fonts-style display-5">Mar 2015 - Apr 2016</p>
                  </div>
                </div>
                <span className="iconBackground"></span>
                <div className="col-xs-12 col-md-6 align-left">
                  <div className="timeline-text-content">
                    <h4 className="mbr-timeline-title pb-3 mbr-fonts-style display-5">Projects and events coordinator<br/>Nafasi Art Space</h4>
                    <p className="mbr-timeline-text mbr-fonts-style display-7">Nafasi Art Space is a centre for visual and contemporary performing arts in Dar es Salaam, Tanzania. It is the leading contemporary artists space in East Africa that provides a platform for artists through development, production, and entrepreneurship by providing training, exchange, and exhibition of contemporary arts locally, regionally, and beyond.  I:<br/>- Managed and supported staff in the running of Namethe rehearsal spaces at Nafasi<br/>- Supported Nafasi Art Space in ICT related work, including website development and management, social media monitoring,   and IT consultancy<br/>- Supported events run through Nafasi featuring the performance arts<br/>- Assisted in managing +30 employees with the managing director.<br/><br/></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="mbr-section content4 cid-qBHZTIPs7t" id="content4-j">
          <div className="container">
            <div className="media-container-row">
              <div className="title col-12 col-md-8">
                <h2 className="align-center pb-3 mbr-fonts-style display-2">A bit about myself</h2>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials2 cid-qBHZHkwbBn" id="testimonials2-i">
          <div className="container">
            <div className="media-container-row">
              <div className="mbr-figure pr-lg-5"
                style={{width: '85%'}}>
                <img src={require('../images/profile-picture-600x450.png')} alt="profile" />
              </div>
              <div className="media-content px-3 align-self-center mbr-white py-2">
                <p className="mbr-text testimonial-text mbr-fonts-style display-7">I’ve worked in the performing-arts sector over the years, from social media monitoring, coordinating live music events and curating visual art exhibitions in Southern and Eastern Africa mostly.<br/><br/>Travelling between countries and continents, I often used my laptop to create personal sites for musicians and artists. To create these portfolios, I was using website builders.<br/><br/>They were expensive to maintain and limited regarding the scale of creativity and customisation for myself and ultimately the client. This is why, I decided that I would like to build my own website from start to finish.<br/><br/>Due to the limited resources and technologies back home in South Africa, I then moved to London and joined GA. I fully immersed myself in the web development community to unlock my potential in the digital sphere.<br/><br/>After discovering the various paths in web development, I learn and admire the fact that you can work in teams as a developer (like joining a band again). Getting my feet wet in front-end development is where I would like to start my journey with the possibility to later on jump back into back-end development to become a well rounded full-stack developer.<br/></p>
                <p className="mbr-author-name pt-4 mb-2 mbr-fonts-style display-7">Sibusiso Zwane.</p>
                <p className="mbr-author-desc mbr-fonts-style display-7">Web Developer<br/>
                  <br/>
                  <a href="https://github.com/PullingStrings" className="text-danger">https://github.com/PullingStrings</a><br/><a href="https://www.linkedin.com/in/titozwane/" className="text-secondary">https://www.linkedin.com/in/titozwane/</a><br/><a href="mailto:titozwane28@gmail.com" className="text-success">titozwane28@gmail.com</a><br/><br/><br/></p>
              </div>
            </div>
          </div>
        </section>
        <section className="cid-qBHvBdYyW7 mbr-reveal" id="footer7-c">
          <div className="container">
            <div className="media-container-row align-center mbr-white">
              <div className="row row-links">
                <ul className="foot-menu">
                  <li className="foot-menu-item mbr-fonts-style display-7"><a href="mailto:titozwane@gmail.com">Get in Touch</a></li></ul>
              </div>
              <div className="row social-row">
                <div className="social-list align-right pb-2">
                  <div className="soc-item">
                    <a href="https://github.com/PullingStrings" target="_blank" rel='noopener noreferrer'>
                      <span className="mbr-iconfont mbr-iconfont-social socicon-github socicon"></span>
                    </a>
                  </div>
                  <div className="soc-item">
                    <a href="mailto:titozwane28@gmail.com">
                      <span className="mbr-iconfont mbr-iconfont-social socicon-mail socicon"></span>
                    </a>
                  </div>
                  <div className="soc-item">
                    <a href="https://www.linkedin.com/in/titozwane/" target="_blank" rel='noopener noreferrer'>
                      <span className="mbr-iconfont mbr-iconfont-social socicon-linkedin socicon"></span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row row-copirayt">
                <p className="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7">
                        © Created my Sibusiso Tito Zwane</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
