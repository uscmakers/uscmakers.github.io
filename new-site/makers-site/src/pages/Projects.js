import React from "react";
import Header from "../components/Header.js";
import ProjectHeader from "../components/ProjectHeader.js";
import Footer from "../components/Footer.js";
import "../styles/global.css";
import "../styles/projects.css";
import { Link } from "react-router-dom";

import {
  projects,
  projects23_24,
  projects22_23,
  projects21_22,
  projects20_21,
  projects19_20,
  projects18_19,
} from "../components/ProjectHelper.js";

const Projects = () => {
  return (
    <main>
      <ProjectHeader />
      <div className="projects-container">
        {/* Current projects */}
        <h1 className="page-title" id="current-projects">
          current projects
        </h1>
        <p className="page-subtitle">
          explore our projects for the 2024-2025 academic year!
        </p>
        {projects.map((project, index) => (
          <div className="project-section" key={index}>
            <div className="project-content">
              <div className="project-text">
                <h2 className="project-title">{project.title}</h2>
                <h3 className="project-subtitle">{project.subtitle}</h3>
              </div>
              <div className="project-image">
                <div>
                  <img src={project.image} alt={`${project.title} image`} />
                </div>
                <div>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 2023-2024 projects */}
        <hr className="centered-line" />
        <h1 className="page-title" id="2023-2024">
          2023-2024 projects
        </h1>
        {projects23_24.map((project, index) => (
          <div className="project-section" key={index}>
            <div className="project-content">
              <div className="project-text">
                <h2 className="project-title">{project.title}</h2>
                <h3 className="project-subtitle">{project.subtitle}</h3>
              </div>
              <div className="project-image">
                <div>
                  <img src={project.image} alt={`${project.title} image`} />
                </div>
                <div>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 2022-2023 projects */}
        <hr className="centered-line" />
        <h1 className="page-title" id="2022-2023">
          2022-2023 projects
        </h1>
        {projects22_23.map((project, index) => (
          <div className="project-section" key={index}>
            <div className="project-content">
              <div className="project-text">
                <h2 className="project-title">{project.title}</h2>
                <h3 className="project-subtitle">{project.subtitle}</h3>
              </div>
              <div className="project-image">
                <div>
                  <img src={project.image} alt={`${project.title} image`} />
                </div>
                <div>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 2021-2022 projects */}
        <hr className="centered-line" />
        <h1 className="page-title" id="2021-2022">
          2021-2022 projects
        </h1>
        <div className="showcase-recording-button">
          <Link
            to="https://drive.google.com/file/d/1O-Uqm9p2cZto6ucCjlWrGEi3hjMsekZ9/view?usp=sharing"
            className="showcase-button-details"
          >
            watch the spring 2022 showcase
          </Link>
        </div>
        {projects21_22.map((project, index) => (
          <div className="project-section" key={index}>
            <div className="project-content">
              <div className="project-text">
                <h2 className="project-title">{project.title}</h2>
                <h3 className="project-subtitle">{project.subtitle}</h3>
              </div>
              <div className="project-image">
                <div>
                  <img src={project.image} alt={`${project.title} image`} />
                </div>
                <div>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 2020-2021 projects */}
        <hr className="centered-line" />
        <h1 className="page-title" id="2018-2021">
          2020-2021 projects
        </h1>
        <div className="showcase-recording-button">
          <Link
            to="https://www.youtube.com/watch?v=vPM-rD34ycs"
            className="showcase-button-details"
          >
            watch the spring 2021 showcase
          </Link>
        </div>
        {projects20_21.map((project, index) => (
          <div className="project-section" key={index}>
            <div className="project-content">
              <div className="project-text">
                <h2 className="project-title">{project.title}</h2>
                <h3 className="project-subtitle">{project.subtitle}</h3>
              </div>
              <div className="project-image">
                <div>
                  <img src={project.image} alt={`${project.title} image`} />
                </div>
                <div>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 2019-2020 projects */}
        <hr className="centered-line" />
        <h1 className="page-title">2019-2020 projects</h1>
        {projects19_20.map((project, index) => (
          <div className="project-section" key={index}>
            <div className="project-content">
              <div className="project-text">
                <h2 className="project-title">{project.title}</h2>
                <h3 className="project-subtitle">{project.subtitle}</h3>
              </div>
              <div className="project-image">
                <div>
                  <img src={project.image} alt={`${project.title} image`} />
                </div>
                <div>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* 2018-2019 projects */}
        <hr className="centered-line" />
        <h1 className="page-title">2018-2019 projects</h1>
        {projects18_19.map((project, index) => (
          <div className="project-section" key={index}>
            <div className="project-content">
              <div className="project-text">
                <h2 className="project-title">{project.title}</h2>
                <h3 className="project-subtitle">{project.subtitle}</h3>
              </div>
              <div className="project-image">
                <div>
                  <img src={project.image} alt={`${project.title}`} />
                </div>
                <div>
                  <p className="project-description">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default Projects;
