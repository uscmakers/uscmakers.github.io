import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/global.css";
import "../styles/Header.css";

import logoCombined from "../images/makers_combined_logo.png";
import logoCrestWhite from "../images/makers-crest-white.png";

const projectYears = [
  {
    display: "2026-2027", 
    link: "2026-2027"
  },
  {
    display: "2024-2025",
    link: "2024-2025",
  },
  {
    display: "2021-2024",
    link: "2023-2024"
  },
  {
    display: "2018-2021",
    link: "2020-2021"
  },
];

const Header = () => {
  const [projectsOpen, setProjectsOpen] = useState(false);

  const closeDropdown = () => {
    setProjectsOpen(false);
  };

  return (
    <header className="header">
      {/* Logo */}
      <div>
        <Link to="/" className="header-logo-link">
          <img
            src={logoCombined}
            alt="USC Makers"
            className="header-image"
          />

          <img
            src={logoCrestWhite}
            alt="USC Makers"
            className="header-image-mobile"
          />
        </Link>
      </div>

      {/* Navigation */}
      <div>
        <nav aria-label="Main navigation">
          <ul className="nav-container">
            <li>
              <Link to="/about" className="nav-links">
                about
              </Link>
            </li>

            <li>
              <Link to="/people" className="nav-links">
                people
              </Link>
            </li>

            <li
              className={`nav-dropdown ${
                projectsOpen ? "nav-dropdown-open" : ""
              }`}
            >
              <div className="nav-dropdown-heading">
                <Link
                  to="/projects"
                  className="nav-links"
                  onClick={closeDropdown}
                >
                  projects
                </Link>
              </div>

              <ul className="nav-dropdown-menu">
                {/* <li>
                  <Link
                    to="/projects"
                    className="nav-dropdown-link"
                    onClick={closeDropdown}
                  >
                    all projects
                  </Link>
                </li> */}

                {projectYears.map((year) => (
                  <li key={year.link}>
                    <Link
                      to={`/projects?section=${year.link}`}
                      className="nav-dropdown-link"
                      onClick={closeDropdown}
                    >
                      {year.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link to="/join" className="nav-links">
                join
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;