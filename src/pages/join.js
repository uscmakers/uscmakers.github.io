// src/pages/contact.js
import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import "./join.css";
import { Link } from 'gatsby';
import recruitmentTimeline from "../images/recruitment-timeline.png";


const Join = () => {
  return (
    <main>
      <Header />
      <section className="join-header">
        <div>
          <h1>
            spring 2025 recruitment
          </h1>
          <h2>
            interested in becoming a Maker?
          </h2>
        </div>
      </section>

      <section className="join-text">
        <div>
            <Link 
              to="https://docs.google.com/forms/d/e/1FAIpQLSceoHD2so8d92mUxwROKNS97k83opMh5RknBTIsZzaFVKqsDQ/viewform"
              style={{
                backgroundColor: "#622830",
                color: "#fff",
                padding: "15px 20px",
                fontSize: "2.2rem",
                fontWeight: "normal",
                border: "none",
                borderRadius: "30px",
                cursor: "pointer",
                textAlign: "center",
                textDecoration: "none",
              }}
            >
              apply now!
            </Link>
          </div>        
        {/* Right Side: Text and Image */}
        <div>

          <p style={{ fontSize: "24px" }}>
            our applications open on monday, jan. 13th!
            <br /> for more details, see our recruitment timeline.
          </p>
          </div>
          </section>

          <div style={{ textAlign: "center", }}>
            <img
              src={recruitmentTimeline} 
              alt="Recruitment Timeline"
              className="recruitment-timeline"
            />
          </div>
        
      <section className="questions">
        <div>
          <h1>
            questions?
          </h1>
          <h2>
          contact our e-board on Instagram @makersusc or via email at uscmakers@gmail.com!
          </h2>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Join;
