import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/global.css";

export const ImageCarousel = () => {
  const images = [
    "/images/main_carousel/snow-yashvi.png",
    "/images/main_carousel/bartholomew.png",
    "/images/main_carousel/freshiepic.png",
    "/images/main_carousel/robokeeper.png",
    "/images/main_carousel/snowfrolic.png",
    "/images/main_carousel/smartender.png",
    "/images/main_carousel/snow-freshmen.png",
    "/images/main_carousel/brennen-jeremy.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index}>
            <img
              src={src}
              alt={`Carousel Image ${index + 1}`}
              style={{ width: "100%", height: "auto", borderRadius: "10px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
