import React from "react";
import "../styles/global.css";
import "../styles/ProjectHeader.css";

const ProjectHeader = () => {
  return (
    <header className="project-header">
      {/* Left Section: Logo */}
      <div>
        <a
          href="/" // plain anchor for homepage
          style={{
            textDecoration: "none",
            color: "#FFFFFF",
          }}
        >
          <img
            src="/images/makers_combined_logo.png"
            alt="Makers Logo"
            className="project-header-image"
          />
          <img
            src="/images/makers-crest-white.png"
            alt="Makers Crest"
            className="project-header-image-mobile"
          />
        </a>
      </div>

      {/* Right Section: Navigation Menu */}
      <div>
        <nav>
          <ul className="project-nav-container">
            {[
              "current projects",
              "2023-2024",
              "2022-2023",
              "2021-2022",
              "2018-2021",
            ].map((item, index) => (
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
