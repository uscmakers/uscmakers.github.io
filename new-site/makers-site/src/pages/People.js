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
import juan from "../images/eboard/juan.jpeg";
import nelson from "../images/eboard/nelson.jpg";
import jacob from "../images/eboard/jacob.jpeg";

import anoushka from "../images/projectmanagers/anoushka.jpeg";
import ashly from "../images/projectmanagers/ashly.jpeg";
import david from "../images/projectmanagers/david.jpeg";
import hayden from "../images/projectmanagers/hayden.jpeg";
import irith from "../images/projectmanagers/irith.jpeg";
import jack from "../images/projectmanagers/jack.jpg";
import mitch from "../images/projectmanagers/mitch.jpeg";
import yashvi from "../images/projectmanagers/yashvi.jpeg";

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
    name: "Irith Katiyar",
    title: "Dance Cam",
    photo: irith,
    linkedin: "https://www.linkedin.com/in/irith-katiyar/",
  },
  {
    name: "Yashvi Deliwala",
    title: "TerraTracer",
    photo: yashvi,
    linkedin: "https://www.linkedin.com/in/yashvideliwala/",
  },
  {
    name: "Anoushka Narayan",
    title: "ATE Ball",
    photo: anoushka,
    linkedin: "https://www.linkedin.com/in/anoushkanarayan/",
  },
  {
    name: "Ashly Lam",
    title: "Karate Kid",
    photo: ashly,
    linkedin: "https://www.linkedin.com/in/ashlylam/",
  },
  {
    name: "Hayden Ranshaw",
    title: "Anthony",
    photo: hayden,
    linkedin: "https://www.linkedin.com/in/hayden-ranshaw-502410297/",
  },
  {
    name: "Jack Nuttall",
    title: "Bulls-AI",
    photo: jack,
    linkedin: "https://www.linkedin.com/in/jack-nuttall-807702253//",
  },
  {
    name: "Jacob Rojit",
    title: "Kaleido-Kickz",
    photo: jacob,
    linkedin: "https://www.linkedin.com/in/jacobrojit/",
  },
  {
    name: "Mitchell Kirby",
    title: "Power Path",
    photo: mitch,
    linkedin: "https://www.linkedin.com/in/mitchell-kirby/",
  },
  {
    name: "David Bai",
    title: "BCD",
    photo: david,
    linkedin: "https://www.linkedin.com/in/david-bai/",
  },
  {
    name: "Vivien Chen",
    title: "Magic Mirror",
    photo: vivien,
    linkedin: "https://www.linkedin.com/in/vivien-chen-34745920b/",
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
      {/*
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
                <img src={member.photo} alt={member.name} className="team-image"/>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-position">{member.title}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
      */}

      <Footer />
    </main>
  );
};

export default People;
