import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Carousel.css";
import { Link } from "react-router-dom";

const fadeImages = [
  "https://www.internetstores.com/wp-content/uploads/2019/07/mountainbike-mountain-biking-e1570611164631.jpg",
  "https://www.outsideonline.com/sites/default/files/styles/full-page/public/2017/10/12/c18_synapsebrunt_h.jpg?itok=T7NXqgsa",
  "https://i.pinimg.com/originals/86/c5/44/86c5442472f83930fbb6ec1a705cba9f.jpg",
  "https://p.vitalmtb.com/photos/users/12831/photos/30536/s1600_IMG_0001.jpg",
];

const Slideshow = (props) => {
  return (
    <div className="slide-container">
      <Fade pauseOnHover={false}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt="First" />
            <h2 className="slider-title">
              <Link
                to="/products"
                style={{ textDecoration: "none", color: "#e6e6f0" }}
              >
                Start your new adventure Here
              </Link>
            </h2>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt="Second" />
            <h2 className="slider-title">
              <Link
                to="/products"
                style={{ textDecoration: "none", color: "#e6e6f0" }}
              >
                Ready?
              </Link>
            </h2>
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt="Third" />
          </div>
          <h2 className="slider-title">
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "#e6e6f0" }}
            >
              Get started
            </Link>
          </h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[3]} alt="Fourth" />
          </div>
          <h2 className="slider-title">
            <Link
              to="/products"
              style={{ textDecoration: "none", color: "#e6e6f0" }}
            >
              Enjoy the freedom
            </Link>
          </h2>
          <h3 classname="slider-ready">Ready ?</h3>
        </div>
      </Fade>
    </div>
  );
};
export default Slideshow;
