import React, { useEffect, useState } from "react";
import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import "../styles/global.css";
import "../styles/projects.css";
import { useLocation } from "react-router-dom";

import {
  projects26_27,
  // projects25_26,
  projects24_25,
  projects23_24,
  projects22_23,
  projects21_22,
  projects20_21,
  projects19_20,
  projects18_19,
} from "../components/ProjectHelper.js";

const projectsList = [
  {
      projects: projects26_27,
      year: "2026-2027",
      title: "current projects",
  },
  // {
  //     projects: projects25_26,
  //     year: "2025-2026",
  //     title: "2025-2026 projects",
  // },
  {
      projects: projects24_25,
      year: "2024-2025",
      title: "2024-2025 projects"
  },
    {
      projects: projects23_24,
      year: "2023-2024",
      title: "2023-2024 projects"
  },
    {
      projects: projects22_23,
      year: "2022-2023",
      title: "2022-2023 projects"
  },
    {
      projects: projects21_22,
      year: "2021-2022",
      title: "2021-2022 projects"
  },
    {
      projects: projects20_21,
      year: "2020-2021",
      title: "2020-2021 projects",
      showcase: "https://www.youtube.com/watch?v=vPM-rD34ycs"
  },
    {
      projects: projects19_20,
      year: "2019-2020",
      title: "2019-2020 projects"
  },  
  {
      projects: projects18_19,
      year: "2018-2019",
      title: "2018-2019 projects"
  },
]

function ProjectCard({ project }) {
  const image = (
    <img
      src={project.image}
      alt={`${project.title} preview`}
      loading="lazy"
      decoding="async"
    />
  );

  return (
    <div className="project-section">
      <div className="project-content">
        <div className="project-text">
          <h2 className="project-title">{project.title}</h2>
          <h3 className="project-subtitle">{project.subtitle}</h3>
        </div>

        <div className="project-image">
          <div>
            {project.pdf ? (
              <a
                href={project.pdf}
                className="project-pdf-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} slides`}
              >
                {image}
              </a>
            ) : (
              image
            )}
          </div>
          <div>
            <p className="project-description">{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}


function ProjectSection({year, title, projects, showcase}) {
  return (    
    <section>
      <h1 className="page-title" id={year}>
          {title}
      </h1>
      {showcase && (
        <div className="showcase-recording-button">
          <a
            href={showcase}
            className="showcase-button-details"
            target="_blank"
            rel="noopener noreferrer"
          >
            watch the showcase video!
          </a>
        </div>
      )}
      <div>
        {projects.map((project) => (
          <ProjectCard
            project={project}
            key={title}
          />
        ))}
      </div>
      <hr className="centered-line" />
    </section>    
  );
}

const Projects = () => {
  const location = useLocation();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
  const params = new URLSearchParams(location.search);
  const section = params.get("section");

  if (!section) return;

  const timeout = setTimeout(() => {
    const element = document.getElementById(section);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 0);

  return () => clearTimeout(timeout);
  }, [location.search]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
    <Header />
    <main>
      
      <div className="projects-container">
        {projectsList.map((projectsSection) => (
          <ProjectSection
            key={projectsSection.year}
            year={projectsSection.year}
            title={projectsSection.title}
            projects={projectsSection.projects}
            showcase={projectsSection.showcase}
          />
          
        ))}
      </div>
      {showBackToTop && (
        <button
          type="button"
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <span aria-hidden="true">↑</span>
          <span>back to top</span>
        </button>
      )}

      
    </main>
    <Footer />
    </>
  );
};

export default Projects;
