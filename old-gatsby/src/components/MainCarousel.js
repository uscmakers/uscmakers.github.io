import React from "react";
import Slider from "react-slick";
import "../styles/global.css"; // Ensure global styles file exists or create it.
import YashviPic from "../images/main_carousel/snow-yashvi.png";
import Bartholomew from "../images/main_carousel/bartholomew.png";
import FreshiePic from "../images/main_carousel/freshiepic.png";
import RoboKeeper from "../images/main_carousel/robokeeper.png";
import SnowFrolic from "../images/main_carousel/snowfrolic.png";
import Smartender from "../images/main_carousel/smartender.png";
import SnowFreshmen from "../images/main_carousel/snow-freshmen.png";
import BrennenJeremy from "../images/main_carousel/brennen-jeremy.png";

export const ImageCarousel = () => {
  const images = [
    YashviPic, Bartholomew, FreshiePic, RoboKeeper, SnowFrolic, Smartender, SnowFreshmen, BrennenJeremy
  ];

  const settings = {
    dots: true, // Enables navigation dots
    infinite: true, // Allows infinite looping of images
    speed: 500, // Transition speed in ms
    slidesToShow: 1, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides scrolled at a time
    autoplay: true, // Enables autoplay
    autoplaySpeed: 3000, // Time in ms before auto-scrolling
    arrows: true, // Adds navigation arrows
  };

  return (

    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Carousel Image ${index + 1}`}
              style={{ width: "100%", height: "auto", borderRadius: "10px",
               }}
            />
          </div>
        ))}
      </Slider>
      </div>
  );
};

export default ImageCarousel;
