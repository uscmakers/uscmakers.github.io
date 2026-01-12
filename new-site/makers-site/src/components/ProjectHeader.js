import React from "react";
import "../styles/global.css";
import "../styles/ProjectHeader.css";

const ProjectHeader = () => {
  const items = [
    "current projects",
    "2023-2024",
    "2022-2023",
    "2021-2022",
    "2018-2021",
  ];

  const toSectionId = (item) => {
    // Match your existing IDs in Projects.js:
    // "current projects" -> "current-projects"
    // "2023-2024" -> "2023-2024"
    if (item === "current projects") return "current-projects";
    return item;
  };

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
            {items.map((item, index) => {
              const sectionId = toSectionId(item);

              // ✅ Works with HashRouter:
              // Keeps route as "/projects" and passes target section via query param.
              const href = `/#/projects?section=${encodeURIComponent(
                sectionId
              )}`;

              return (
                <li key={index}>
                  <a
                    href={href}
                    className="project-nav-links"
                    style={{ textDecoration: "none" }}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default ProjectHeader;
