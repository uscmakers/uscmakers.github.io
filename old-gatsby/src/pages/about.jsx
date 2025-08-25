import React, { useEffect, useRef } from 'react';
import { Link } from 'gatsby';
import './index.css';
import './about.css';
import "../styles/global.css"; // Ensure global styles file exists or create it.
import landscape from '../images/landscape.jpg';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import TypingEffect from "../components/TypingEffect";
import sp23retreat from '../images/sp23_retreat.jpg';
import alumniReach from '../images/alumni-reach.png';
import sponsors from '../images/sponsors.png';
import learnLogo from '../images/learn-logo.png';
import createLogo from '../images/create-logo.png';
import collabLogo from '../images/collab-logo.png';

const About = () => {

return (
  <main>
    {/* Header */}
    <Header />

    {/* Landing Section */}
    <div className="about-landing-container">
      <img
          src={ landscape }
          alt="Landscape"
        />
        <div className="about-cool-text">
        <h1>
        engineering<span className="conditional-space"> </span>meets <br />
        <TypingEffect />
        </h1>
      </div>
    </div>

  <section className="about-us-header">
  {/* Left Side: Text Content */}
    <h2>about us</h2>
  </section>

  <section className="about-us-body">
    <div>
    <p>
      Makers was founded in 2016 by three engineering students as an effort to promote
      more innovation and interest in electronics at the University of Southern California.
    </p>
    <p>
      Since then, we have built over <i>seventy</i> projects (which you can check out here!) and
      are currently working on another eleven!
    </p>
    <p>
      Beyond our projects, we are a tight-knit organization that strives to give back to our
      members and our community! All Makers have the opportunity to:
    </p>
    <ul>
      <li>Learn practical engineering skills through our <b>tutorial program</b></li>
      <li>Refine their resumes and interview skills through our <b>outreach program</b></li>
      <li>Receive guidance and advice through our <b>mentorship program</b></li>
      <li>Build lifelong friendships and connections through our <b>events program</b></li>
      <li>Develop leadership skills by becoming a <b>Project Manager</b> or <b>E-Board Member</b></li>
</ul>
    </div>
  

  {/* Right Side: Image */}
  <div>
      <img
          src={ sp23retreat }
          alt="spring 2023 retreat"
          style={{ maxWidth: '90%', height: 'auto', borderRadius: '20px' }}
        />
  </div>
</section>
{/* Core Pillars Section
<section style={{ padding: "20px 120px", display: "flex", flexDirection: "column", alignItems: "center" }}>
  {/* Horizontal Line 
  <hr className="centered-line" />

  {/* "Our Core Pillars" Text
  <div>
    <h2 style={{ fontSize: "3rem", color: "#622830", marginBottom: "20px", textAlign: "center" }}>
      our core pillars
    </h2>
  </div>

  <div>
      <h1>About Us</h1>
      <HoverGrid />
    </div>
    <hr className="centered-line" />

{/* </section> */}

{/* Alumni sectio */}
<section className="alumni">
<hr className="centered-line" />

  {/* Text Content */}
  <div style={{ flex: 1, paddingBottom: "20px" }}>
    <h2>
      alumni
    </h2>
    <p>
      Our alumni have gone on to do amazing things across the country!
      Check out some of the places former Makers are working and studying now:
    </p>
  </div>
  {/* Centered Image */}
  <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "20px" }}>
    <img 
      src={alumniReach} 
      alt="Alumni Reach" 
      style={{ maxWidth: "100%", height: "auto"}} 
    />
  </div>
</section>

{/* Sponsors Section */}
<section className="sponsors">
<hr className="centered-line" />

  {/* Text Content */}
  <div style={{ flex: 1, paddingBottom: "20px", color: "#622830" }}>
    <h2>
      sponsors
    </h2>
    <p>
    We are very grateful to the USC Ming Hsieh Institute, who fully sponsor our projects. 
    Without them, none of this magic could happen! A huge thank you to our other sponsors as well, 
    for providing us with the resources for guest and industry speakers, 
    as well as the resources to hold successful, 
    exciting showcases that invite our community to see our hard work!
    </p>
  </div>
  {/* Centered Image */}
  <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
    <img 
      src={sponsors} 
      alt="Sponsors"  
    />
  </div>
  <div style={{ flex: 1, paddingBottom: "20px" }}>
    <p>
    While we are very grateful for the help we currently receive, 
    we are always on the lookout for more sponsors to further the mission of Makers!
    </p>
    <p>
    If you’re interested in being a potential sponsor or partner, 
    please reach out to hear what we have to offer!
    </p>
  </div>
</section>
<Footer />
    </main>
);

};

export default About;
