import React from "react";
import { Link } from "gatsby";
import "../styles/global.css";
import "../styles/ProjectHeader.css";
import makersLogo from "../images/makers_combined_logo.png";
import makersCrest from "../images/makers-crest-white.png";

export const ProjectHeader = () => {
  return (
    <header className="project-header">
      {/* Left Section: Logo with a different background color */}

        <div
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "#FFFFFF",
            }}
          >
            <img src={makersLogo} alt="Makers Logo" className="project-header-image"/>
            <img src={makersCrest} alt="Makers Crest" className="project-header-image-mobile"/>
          </Link>
        </div>

      {/* Right Section: Navigation Menu */}
      <div>
  <nav>
    <ul className="project-nav-container">
      {["current projects", "2023-2024", "2022-2023", "2021-2022", "2018-2021"].map((item, index) => (
        <li key={index}>
          <a
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="project-nav-links"
            style={{ textDecoration: "none" }}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </nav>
</div>

    </header>
  );
};

export default ProjectHeader;
