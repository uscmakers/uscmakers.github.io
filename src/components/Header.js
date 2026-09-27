import React from "react";
import { Link } from "react-router-dom"; // use React Router instead of Gatsby
import "../styles/global.css";
import "../styles/Header.css";
import logoCombined from "../images/makers_combined_logo.png";
import logoCrestWhite from "../images/makers-crest-white.png";

const Header = () => {
  return (
    <header className="header">
      {/* Left Section: Logo */}
      <div>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#FFFFFF",
          }}
        >
          <img src={logoCombined} alt="Makers Logo" className="header-image" />
          <img
            src={logoCrestWhite}
            alt="Makers Crest"
            className="header-image-mobile"
          />
        </Link>
      </div>

      {/* Right Section: Navigation Menu */}
      <div>
        <nav>
          <ul className="nav-container">
            {["about", "people", "projects", "join"].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase().replace(" ", "-")}`}
                  className="nav-links"
                  style={{ textDecoration: "none" }}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
