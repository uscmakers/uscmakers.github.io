import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import { About } from './about.jsx'
import './index.css';
import "../styles/global.css"; 
import videoFile from "../images/makers-web-lava.mp4";
import mhiImage from '../images/mhi_white.png';
import { Header } from '../components/Header';
import { ImageCarousel } from '../components/MainCarousel';
import { Footer } from '../components/Footer';
import BackgroundCarousel from "../components/BackgroundCarousel";

const IndexPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if(videoRef.current) {
      videoRef.current.playbackRate = 2.0;
    }
}, []);
return (
  <main>
    {/* Header */}
    <Header />

    {/* Landing Section */}
    <section className="video-section">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="background-video"
        playsInline
        style={{ zIndex: 1, position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
      <h1>
        where engineering <br /> meets expression
      </h1>
        <p>
          A community of students bringing <br />their wildest ideas to life.</p>
      <img
          src={ mhiImage }
          alt="USC Ming Hsieh Institute"
          style={{
            position: 'absolute',
            bottom: '5%',
            left: '50%',
            transform: 'translateX(-50%)',  
            zIndex: 2, 
            }}
        />
      </div>

    </section>

    {/* Who We Are Section */}
    <section className="who-we-are-header">
  {/* Left Side: Text Content */}
    <h2>
      who we are
    </h2>
  </section>

  <section className="who-we-are-text">
    <div>
    <p>
      Makers is a community of USC students passionate about going beyond the textbook and turning
      our wildest ideas into real engineering projects.
    </p>
    <p>
      We work in teams of 5-7 to develop ~10 projects throughout the year. These projects are
      entirely student-led, from ideation to realization.
    </p>
    <p>
      We aim to facilitate exploration of topics within electrical, computer, and mechanical
      engineering, as well as computer science.
    </p>
    <p>
      Anyone with a passion for making is welcome to join our community!
    </p>
    </div>  

  {/* Right Side: Image */}
  <div>
    <ImageCarousel />
  </div>
</section>

{/* Centered Button */}
<div className="learn-more-button">
<Link 
to="/about"
className="learn-more-button-details"
>
learn more!
</Link>
</div>


  <section className="join-section" style= {{paddingTop: "80px" }}>
      {/* Background Carousel */}
      <BackgroundCarousel />
    </section>

    {/* Footer */}
    <Footer />
    </main>
);

};

export default IndexPage;
