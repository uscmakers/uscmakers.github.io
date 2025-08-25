import React from "react";
import "../styles/Footer.css"; // Import CSS styles
import socialIconsInstagram from "../images/social-icons/instagram.png";
import socialIconsLinkedin from "../images/social-icons/linkedin.png";
import socialIconsGithub from "../images/social-icons/github.png";
import socialIconsEmail from "../images/social-icons/email.png";
import makersCrestWhite from "../images/makers-crest-white.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Icons */}
        <div className="social-icons">
          <a
            href="https://www.instagram.com/makersusc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={socialIconsInstagram} alt="Instagram" />
          </a>
          <a
            href="https://www.linkedin.com/company/makers-usc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={socialIconsLinkedin} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/uscmakers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={socialIconsGithub} alt="GitHub" />
          </a>
          <a href="mailto:uscmakers@gmail.com">
            <img src={socialIconsEmail} alt="Email" />
          </a>
        </div>

        {/* Footer Logo */}
        <div className="footer-logo">
          <img src={makersCrestWhite} alt="Makers Logo" />
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>©2025 Makers USC</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
