import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/global.css";
import "../styles/index.css";

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

  const images = [
    "/images/retreat-background.jpg",
    "/images/retreat-background2.jpg",
    "/images/retreat-background3.jpg",
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        height: "100vh",
      }}
    >
      <Slider {...settings}>
        {images.map((src, idx) => (
          <div key={idx}>
            <img
              src={src}
              alt={`Carousel Image ${idx + 1}`}
              style={{ width: "100%", height: "100vh", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>

      <div className="background-carousel-overlay">
        <h1>join a community&nbsp;of</h1>
        <p>60+&nbsp;Makers</p>
        <Link
          to="/join"
          className="background-carousel-button"
          style={{ opacity: 0.8 }}
        >
          get involved!
        </Link>
      </div>
    </div>
  );
};

export default BackgroundCarousel;
