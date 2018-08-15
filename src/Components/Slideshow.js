// SlideShow.js
import React, { Component } from 'react';

const fullScreenStyle = {
  opacity: 0.6
};

// //creates images array with keys
// const images = require.context('../images', false, /\.(png|jpe?g|svg)$/);
// const keys = images.keys();
// const imgArr = keys.map(key => images(key));
//
// //loops through the images
// const imagesArrays = keys.map(image => {
//   console.log(keys);
//   return <img key={keys} src={require(`../images/${image}`)} alt=''/>;
// });
// function importAll(r) {
//   return r.keys().map(r);
// }

function importAll(r) {
  const images = {};
  r.keys().map((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
console.log(images);


export default class Slideshow extends Component {
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
                      <img src={images['laptop.jpg']} alt="couch laptop" />
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
                      <img src={images['playing.jpg']} alt='' />;
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
                  style={{backgroundImage: `url(${images['speacking.jpg']})`}}>
                  <div className="container container-slide">
                    <div className="image_wrapper">
                      <div className="mbr-overlay">
                      </div>
                      <img src={images['specking.jpg']} alt='' />;
                      <div className="carousel-caption justify-content-center">
                        <div className="col-10 align-left">
                          <h2 className="mbr-fonts-style display-1">Sibusiso Tito Zwane</h2>
                          <p className="lead mbr-text mbr-fonts-style display-5">Art &nbsp; lover.</p>
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
      </div>
    );
  }
}
