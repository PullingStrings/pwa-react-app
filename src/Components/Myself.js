import React, { Component } from 'react';

export default class Myself extends Component {
  render() {
    return (
      <div>
        <section className="testimonials2 cid-qBHZHkwbBn" id="testimonials2-i">
          <div className="container">
            <div className="media-container-row">
              <div className="mbr-figure pr-lg-5"
                style={{width: '85%;'}}>
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
      </div>
    );
  }
}
