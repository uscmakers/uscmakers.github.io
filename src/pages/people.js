// src/pages/people.js
import React from 'react';
import '../styles/people.css'; 
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

// import alexandra from '../images/eboard/alexandra.png';
// import alanna from '../images/eboard/alanna.png';
// import andrius from '../images/eboard/andrius.png';
// import austin from '../images/eboard/austin.png';
// import brennen from '../images/eboard/brennen.png';
// import brad from '../images/eboard/brad.png';
// import elizabeth from '../images/eboard/elizabeth.png';
// import jason from '../images/eboard/jason.png';
// import katherine from '../images/eboard/katherine.png';
// import pela from '../images/eboard/pela.png';

import marios from '../images/eboard/marios.jpeg'
import mary from '../images/eboard/mary.jpeg'
import may from '../images/eboard/may.jpg'
import vivien from '../images/eboard/vivien.jpg'
import nelson from '../images/eboard/NelsonHeadshot.jpg'
import jacob from '../images/eboard/headshot_jacob.jpeg'

import anoushka from '../images/projectmanagers/anoushka.jpeg';
import ashly from '../images/projectmanagers/ashly.jpeg';
import david from '../images/projectmanagers/david.jpeg';
import hayden from '../images/projectmanagers/hayden.jpeg';
import irith from '../images/projectmanagers/irith.jpeg';
import jack from '../images/projectmanagers/jack.jpg';
import mitch from '../images/projectmanagers/mitch.jpeg';
import yashvi from '../images/projectmanagers/yashvi.jpeg';

const eboardMembers = [
  { name: 'Jacob Rojit', title: 'President', photo: jacob, linkedin: '' },
  { name: 'Nelson Vo', title: 'Director of Membership', photo: nelson, linkedin: 'https://www.linkedin.com/in/alannanowlen/'},
  { name: 'Mary Karapetyan', title: 'Director of Events', photo: marios, linkedin: 'https://www.linkedin.com/in/alannanowlen/'},
  { name: 'Vivien Chen', title: 'Director of Project Oversight', photo: marios, linkedin: 'https://www.linkedin.com/in/bradmiller555/' },
  { name: 'May Khan', title: 'Director of Community Outreach', photo: marios, linkedin: 'https://www.linkedin.com/in/pelagia-karamanolis/' },
  { name: 'Hansini Ramachandran', title: 'Director of External Operations', photo: marios, linkedin: 'https://www.linkedin.com/in/austintsaiusc/' },
  { name: 'Juan Moreno Coronado', title: 'Director of Marketing', photo: marios, linkedin: 'https://www.linkedin.com/in/katherinezhou-/' },
  { name: 'Vardhan Jain', title: 'Director of Finance', photo: marios, linkedin: 'https://www.linkedin.com/in/brennenho/' },
  { name: 'Marios Tsotras', title: 'Director of Technical Operations', photo: marios, linkedin: 'https://www.linkedin.com/in/jwiemels/' },
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

