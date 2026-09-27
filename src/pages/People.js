import React from "react";
import "../styles/people.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import cynthia from "../images/eboard/Cynthia-Headshot.jpg";
import emily from "../images/eboard/Emily-Headshot.jpg";
import john from "../images/eboard/John-Headshot.jpeg";
import kaylee from "../images/eboard/Kaylee-Headshot.JPG";
import marios from "../images/eboard/Marios-Headshot.jpeg";
import namirah from "../images/eboard/Namirah-Headshot.jpeg";
import nelson from "../images/eboard/Nelson-Headshot.JPG";
import raksheta from "../images/eboard/Raksheta-Headshot.JPG";
import reina from "../images/eboard/Reina-Headshot.jpeg";
import yihan from "../images/eboard/Yihan-Headshot.jpg";

import hannahg from "../images/projectmanagers/HannahG-Headshot.JPEG";
import hannahl from "../images/projectmanagers/HannahL-Headshot.jpg";
import jordan from "../images/projectmanagers/Jordan-Headshot.jpeg";
import juan from "../images/projectmanagers/Juan-Headshot.png";
import may from "../images/projectmanagers/May-Headshot.jpg";
import prital from "../images/projectmanagers/Prital-Headshot.jpeg";
import ruth from "../images/projectmanagers/Ruth-Headshot.PNG";
import sam from "../images/projectmanagers/Sam-Headshot.jpg";
import sohana from "../images/projectmanagers/Sohana-Headshot.jpg";
import vivien from "../images/projectmanagers/Vivien-Headshot.JPG";

const eboardMembers = [
  {
    name: "Marios Tsotras",
    title: "President",
    photo: marios,
    linkedin: "https://www.linkedin.com/in/marios-tsotras-13ab56300/",
  },
  {
    name: "Nelson Vo",
    title: "President",
    photo: nelson,
    linkedin: "https://www.linkedin.com/in/nelson-vo/",
  },
    {
    name: "Reina Mitra",
    title: "Director of Membership",
    photo: reina,
    linkedin: "https://www.linkedin.com/in/reina-mitra/",
    imagePosition: "center 10%"
  },
  {
    name: "Emily Liu",
    title: "Director of Events",
    photo: emily,
    linkedin: "https://www.linkedin.com/in/emily-liu-998630381/",
    imagePosition: "center 20%"
  },
  {
    name: "Kaylee Hou",
    title: "Director of Project Oversight",
    photo: kaylee,
    linkedin: "https://www.linkedin.com/in/kayleehou/",
    imagePosition: "center top"
  },
  {
    name: "Yihan Hong",
    title: "Director of Outreach",
    photo: yihan,
    linkedin: "https://www.linkedin.com/in/yihan-hon/",
  },
  {
    name: "Cynthia Liu",
    title: "Director of Marketing",
    photo: cynthia,
    linkedin: "https://www.linkedin.com/in/cynthliu/",
  },
  {
    name: "Namirah Chishtey",
    title: "Director of Finance",
    photo: namirah,
    linkedin: "https://www.linkedin.com/in/namirah-chishtey-69b271362/",
  },
  {
    name: "John Peng",
    title: "Director of Operations",
    photo: john,
    linkedin: "https://www.linkedin.com/in/yc-john-peng/",
    imagePosition: "center 10%"
  },
  {
    name: "Raksheta Kulkarni",
    title: "Director of Operations",
    photo: raksheta,
    linkedin: "https://www.linkedin.com/in/rakshetakulkarni/",
  },
];

const projectManagers = [
  {
    name: "Hannah Goldstein",
    title: "Puzzle Box",
    photo: hannahg,
    linkedin: "https://www.linkedin.com/in/hannah-goldstein1/",
  },
  {
    name: "Hannah Lee",
    title: "CP3AI",
    photo: hannahl,
    linkedin: "https://www.linkedin.com/in/hannah-lee1107/",
  },
  {
    name: "Jordan Yambao",
    title: "MakersMotion",
    photo: jordan,
    linkedin: "https://www.linkedin.com/in/jordan-yambao/",
  },
  {
    name: "Juan Moreno Coronado",
    title: "StarSabers",
    photo: juan,
    linkedin: "https://www.linkedin.com/in/juanmorenocoronado/",
  },
  {
    name: "Maymoona Khan",
    title: "Holo Bench",
    photo: may,
    linkedin: "https://www.linkedin.com/in/maymoonakhan/",
  },
  {
    name: "Prital Jariwala",
    title: "soundtrack",
    photo: prital,
    linkedin: "https://www.linkedin.com/in/prital-jariwala",
  },
  {
    name: "Ruth Thomson",
    title: "Trick or Treat",
    photo: ruth,
    linkedin: "https://www.linkedin.com/in/rthomson/",
    imagePosition: "center top"
  },
  {
    name: "Sam Doane",
    title: "PuckBot",
    photo: sam,
    linkedin: "https://www.linkedin.com/in/samdoane/",
    imagePosition: "center top"
  },
  {
    name: "Sohana Singh",
    title: "Artemis",
    photo: sohana,
    linkedin: "https://www.linkedin.com/in/sohana-singh-5a1146383/",
  },
  {
    name: "Vivien Chen",
    title: "ABC",
    photo: vivien,
    linkedin: "https://www.linkedin.com/in/vivien-chen-34745920b/",
  },
];

function MemberCard({ member }) {
  return (
    <a
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="team-link"
      aria-label={`View ${member.name}'s LinkedIn profile`}
    >
      <article className="team-card">
        <img
          src={member.photo}
          alt={`${member.name}, ${member.title}`}
          className="team-image"
          style={{ objectPosition: member.imagePosition || "center" }}
          loading="lazy"
        />

        <h3 className="team-name">{member.name}</h3>
        <p className="team-position">{member.title}</p>
      </article>
    </a>
  );
}

function TeamSection({ title, members }) {
  return (
    <section className="people-container">
      <h2 className="title">{title}</h2>

      <div className="team-container">
        {members.map((member) => (
          <MemberCard
            key={member.linkedin}
            member={member}
          />
        ))}
      </div>
    </section>
  );
}

function People() {
  return (
    <>
      <Header />

      <main>
        <TeamSection
          title="meet the executive board"
          members={eboardMembers}
        />

        <TeamSection
          title="meet the project managers"
          members={projectManagers}
        />
      </main>

      <Footer />
    </>
  );
}

export default People;