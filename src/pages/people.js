// src/pages/people.js
import React from 'react';
import '../styles/people.css'; // Add custom styles here
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import alexandra from '../images/eboard/alexandra.png';
import alanna from '../images/eboard/alanna.png';
import andrius from '../images/eboard/andrius.png';
import austin from '../images/eboard/austin.png';
import brennen from '../images/eboard/brennen.png';
import brad from '../images/eboard/brad.png';
import elizabeth from '../images/eboard/elizabeth.png';
import jason from '../images/eboard/jason.png';
import katherine from '../images/eboard/katherine.png';
import pela from '../images/eboard/pela.png';

import anoushka from '../images/projectmanagers/anoushka.jpeg';
import ashly from '../images/projectmanagers/ashly.jpeg';
import david from '../images/projectmanagers/david.jpeg';
import hayden from '../images/projectmanagers/hayden.jpeg';
import irith from '../images/projectmanagers/irith.jpeg';
import jack from '../images/projectmanagers/jack.jpg';
import jacob from '../images/projectmanagers/jacob.jpg';
import marios from '../images/projectmanagers/marios.jpeg';
import mitch from '../images/projectmanagers/mitch.jpeg';
import vivien from '../images/projectmanagers/vivien.jpeg';
import yashvi from '../images/projectmanagers/yashvi.jpeg';

const eboardMembers = [
  { name: 'Alexandra Somodi', title: 'Co-President', photo: alexandra, linkedin: 'https://www.linkedin.com/in/alexandra-somodi/' },
  { name: 'Elizabeth Finley', title: 'Co-President', photo: elizabeth, linkedin: 'https://www.linkedin.com/in/finleyelizabeth/'},
  { name: 'Alanna Nowlen', title: 'Director of Membership', photo: alanna, linkedin: 'https://www.linkedin.com/in/alannanowlen/'},
  { name: 'Andrius Stankus', title: 'Director of Events', photo: andrius, linkedin: 'https://www.linkedin.com/in/andrius-stankus/'},
  { name: 'Bradley Miller', title: 'Director of Project Oversight', photo: brad, linkedin: 'https://www.linkedin.com/in/bradmiller555/' },
  { name: 'Pela Karamanolis', title: 'Director of Outreach', photo: pela, linkedin: 'https://www.linkedin.com/in/pelagia-karamanolis/' },
  { name: 'Austin Tsai', title: 'Director of Tech Resources', photo: austin, linkedin: 'https://www.linkedin.com/in/austintsaiusc/' },
  { name: 'Katherine Zhou', title: 'Director of Marketing', photo: katherine, linkedin: 'https://www.linkedin.com/in/katherinezhou-/' },
  { name: 'Brennen Ho', title: 'Director of Finance', photo: brennen, linkedin: 'https://www.linkedin.com/in/brennenho/' },
  { name: 'Jason Wiemels', title: 'Director of Internal Ops', photo: jason, linkedin: 'https://www.linkedin.com/in/jwiemels/' },
]

const projectManagers = [
  { name: "Irith Katiyar", title: "Dance Cam", photo: irith, linkedin: 'https://www.linkedin.com/in/irith-katiyar/' },
  { name: "Yashvi Deliwala", title: "TerraTracer", photo: yashvi, linkedin: 'https://www.linkedin.com/in/yashvideliwala/' },
  { name: "Anoushka Narayan", title: "ATE Ball", photo: anoushka, linkedin: 'https://www.linkedin.com/in/anoushkanarayan/' },
  { name: "Ashly Lam", title: "Karate Kid", photo: ashly, linkedin: 'https://www.linkedin.com/in/ashlylam/' },
  { name: "Hayden Ranshaw", title: "Anthony", photo: hayden, linkedin: 'https://www.linkedin.com/in/hayden-ranshaw-502410297/' },
  { name: "Jack Nuttall", title: "Bulls-AI", photo: jack, linkedin: 'https://www.linkedin.com/in/jack-nuttall-807702253//' },
  { name: "Jacob Rojit", title: "Kaleido-Kickz", photo: jacob, linkedin: 'https://www.linkedin.com/in/jacobrojit/' },
  { name: "Mitchell Kirby", title: "Power Path", photo: mitch, linkedin: 'https://www.linkedin.com/in/mitchell-kirby/' },
  { name: "David Bai", title: "BCD", photo: david, linkedin: 'https://www.linkedin.com/in/david-bai/' },
  { name: "Marios Tsotras", title: "The Toppest Hat", photo: marios, linkedin: 'https://www.linkedin.com/in/marios-tsotras-13ab56300/' },
  { name: "Vivien Chen", title: "Magic Mirror", photo: vivien, linkedin: 'https://www.linkedin.com/in/vivien-chen-34745920b/' },
]

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
          text-decoration="none"
          >
          <div key={index} className="team-card">
            <img src={member.photo} className="team-image"/>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-position">{member.title}</p>
          </div>
          </a>
        ))}
      </div>
    </div>

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
            text-decoration="none"
            >

          <div key={index} className="team-card">
            <img src={member.photo} className="team-image"/>
            <h3 className="team-name">{member.name}</h3>
            <p className="team-position">{member.title}</p>
          </div>
          </a>
        ))}
      </div>
    </div>

    <Footer />
    </main>
  );
};

export default People;

