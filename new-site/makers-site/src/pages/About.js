import React from "react";
import "../styles/About.css"; // Your CSS file
import mhiImage from "../images/mhi_white.png"; // Example image import
import BackgroundCarousel from "../components/BackgroundCarousel"; // if used
import Footer from "../components/Footer"; // if you have a Footer component

const About = () => {
  return (
    <main>
      {/* Landing Section */}
      <section className="about-landing-container">
        <img src={mhiImage} alt="MHI Logo" />
        <div className="about-cool-text">
          <h1>
            where engineering <br /> meets expression
          </h1>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="about-us-header">
        <h2>who we are</h2>
      </section>

      <section className="about-us-body">
        {/* Left side: text content */}
        <div>
          <p>
            Makers is a community of USC students passionate about going beyond
            the textbook and turning our wildest ideas into real engineering
            projects.
          </p>
          <p>
            We work in teams of 5-7 to develop ~10 projects throughout the year.
            These projects are entirely student-led, from ideation to
            realization.
          </p>
          <p>
            We aim to facilitate exploration of topics within electrical,
            computer, and mechanical engineering, as well as computer science.
          </p>
          <p>
            Anyone with a passion for making is welcome to join our community!
          </p>
        </div>

        {/* Right side: optional image or carousel */}
        <div>
          <BackgroundCarousel />
        </div>
      </section>

      {/* Alumni Section */}
      <section className="alumni">
        <h2>Alumni</h2>
        <p>
          Our alumni have gone on to work in tech, robotics, engineering, and
          startups, making a real-world impact with the skills they gained at
          Makers.
        </p>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors">
        <h2>Sponsors</h2>
        <p>
          We thank our sponsors for supporting our projects and making our
          community possible!
        </p>
        <img src={mhiImage} alt="Sponsor Logo" />
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default About;
