import React from "react";
import "../styles/people.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import marios from "../images/eboard/marios.jpg";
import hansini from "../images/eboard/hansini.jpeg";
import mary from "../images/eboard/mary.jpg";
import may from "../images/eboard/may.jpg";
import vivien from "../images/eboard/vivien2.jpg";
import vardhan from "../images/eboard/vardhan.jpeg";
import juan from "../images/eboard/juan.png";
import nelson from "../images/eboard/nelson.jpg";
import jacob from "../images/eboard/jacob.jpeg";

import evangelos from "../images/projectmanagers/evangelos.png";
import hannah from "../images/projectmanagers/hannah.png";
import jason from "../images/projectmanagers/jason.png";
import kaylee from "../images/projectmanagers/kaylee.png";
import vrinda from "../images/projectmanagers/vrinda.png";
import zach from "../images/projectmanagers/zach.png";
import clay from "../images/projectmanagers/clay.png";
import cynthia from "../images/projectmanagers/cynthia.png";
import john from "../images/projectmanagers/john.png";
import raksheta from "../images/projectmanagers/raksheta.jpg";

const eboardMembers = [
  {
    name: "Jacob Rojit",
    title: "President",
    photo: jacob,
    linkedin: "https://www.linkedin.com/in/jacobrojit/",
  },
  {
    name: "Nelson Vo",
    title: "Director of Membership",
    photo: nelson,
    linkedin: "https://www.linkedin.com/in/nelson-vo/",
  },
  {
    name: "Mary Karapetyan",
    title: "Director of Events",
    photo: mary,
    linkedin: "https://www.linkedin.com/in/maryekarapetyan/",
  },
  {
    name: "Vivien Chen",
    title: "Director of Project Oversight",
    photo: vivien,
    linkedin: "https://www.linkedin.com/in/vivien-chen-34745920b/",
  },
  {
    name: "May Khan",
    title: "Director of Community Outreach",
    photo: may,
    linkedin: "https://www.linkedin.com/in/maymoonakhan/",
  },
  {
    name: "Hansini Ramachandran",
    title: "Director of External Ops",
    photo: hansini,
    linkedin: "https://www.linkedin.com/in/hansini-ramachandran/",
  },
  {
    name: "Juan Moreno Coronado",
    title: "Director of Marketing",
    photo: juan,
    linkedin: "https://www.linkedin.com/in/juanmorenocoronado/",
  },
  {
    name: "Vardhan Jain",
    title: "Director of Finance",
    photo: vardhan,
    linkedin: "https://www.linkedin.com/in/vardhanrj/",
  },
  {
    name: "Marios Tsotras",
    title: "Director of Technical Operations",
    photo: marios,
    linkedin: "https://www.linkedin.com/in/marios-tsotras-13ab56300/",
  },
];

const projectManagers = [
  {
    name: "Evangelos Neophytou ",
    title: "Hydro.",
    photo: evangelos,
    linkedin: "https://www.linkedin.com/in/evangelos-neophytou/",
  },
  {
    name: "Hannah Fonseca",
    title: "AutoChord",
    photo: hannah,
    linkedin: "https://www.linkedin.com/in/hannah-fonseca-/",
  },
  {
    name: "Jason Wiemels",
    title: "PAFT",
    photo: jason,
    linkedin: "https://www.linkedin.com/in/jwiemels/",
  },
  {
    name: "Kaylee Hou",
    title: "AeroPet",
    photo: kaylee,
    linkedin: "https://www.linkedin.com/in/kayleehou/",
  },
  {
    name: "Vrinda Gandhi",
    title: "Jeeves.",
    photo: vrinda,
    linkedin: "https://www.linkedin.com/in/vrindadgandhi/",
  },
  {
    name: "Zach Olson",
    title: "Rocket the Robot",
    photo: zach,
    linkedin: "https://www.linkedin.com/in/olsonzachary/",
  },
  {
    name: "Clay Koessler",
    title: "Sunshine Sleep Mask",
    photo: clay,
    linkedin: "https://www.linkedin.com/in/clayton-koessler/",
  },
  {
    name: "Cynthia Liu",
    title: "a(chord)ion",
    photo: cynthia,
    linkedin: "https://www.linkedin.com/in/cynthliu/",
  },
  {
    name: "John Peng",
    title: "Skate-Mo",
    photo: john,
    linkedin: "https://www.linkedin.com/in/yc-john-peng/",
  },
  {
    name: "Raksheta Kulkarni",
    title: "FIFO",
    photo: raksheta,
    linkedin: "https://www.linkedin.com/in/rakshetakulkarni/",
  },
];

const People = () => {
  return (
    <main>
      <Header />

      <div className="people-container">
        <h2 className="title">meet the executive board</h2>
        <div className="team-container">
          {eboardMembers.map((member, index) => (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="team-link"
            >
              <div className="team-card">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="team-image"
                />
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Project Managers Section (optional, uncomment if needed) */}
      {
        <div className="people-container">
          <h2 className="title">meet the project managers</h2>
          <div className="team-container">
            {projectManagers.map((member, index) => (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="team-link"
              >
                <div className="team-card">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="team-image"
                  />
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-position">{member.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      }

      <Footer />
    </main>
  );
};

export default People;
