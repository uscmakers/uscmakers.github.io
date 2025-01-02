import React from "react";
import "../styles/Footer.css"; // Import CSS styles
import mhiLogo from "../images/mhi_white.png";
import github from "../images/social-icons/github.png";
import instagram from "../images/social-icons/instagram.png";
import linkedin from "../images/social-icons/linkedin.png";
import email from "../images/social-icons/email.png";
import makersCrest from "../images/makers-crest-white.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-icons">
          <a href="https://www.instagram.com/makersusc/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/makers-usc" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://github.com/uscmakers" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
          <a href="mailto:uscmakers@gmail.com">
            <img src={email} alt="Email" />
          </a>
        </div>
        <div className="footer-logo">
          <img src={makersCrest} alt="Makers Logo" />
        </div>
        <div className="copyright">
          <p>©2025 Makers USC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
