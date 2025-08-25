// src/components/BackgroundCarousel.js

import React from "react";
import { Link } from 'gatsby';

import Slider from "react-slick";
import "../styles/global.css"; // Ensure your global styles are applied
import "../pages/index.css";
import image1 from "../images/retreat-background.jpg";
import image2 from "../images/retreat-background2.jpg";
import image3 from "../images/retreat-background3.jpg";

const BackgroundCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        height: "100vh",
      }}
    >
      {/* Carousel */}
      <Slider {...settings}>
        <div>
          <img
            src={image1}
            alt="Carousel Image 1"
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
            }}
          />
        </div>
        <div>
          <img
            src={image2}
            alt="Carousel Image 2"
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
            }}
          />
        </div>
        <div>
          <img
            src={image3}
            alt="Carousel Image 3"
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
            }}
          />
        </div>
      </Slider>

      {/* Overlay Content */}
      <div className="background-carousel-overlay"
      >
        <h1>
          join a community&nbsp;of
        </h1>
        <p>
          60+&nbsp;Makers
        </p>
        <Link 
  to="/join"
  className="background-carousel-button"
  style={{opacity: 0.8}}
>
  get involved!
</Link>

      </div>
    </div>
  );
};

export default BackgroundCarousel;