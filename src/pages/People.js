import React from "react";
import "../styles/people.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { eboardMembers, projectManagers } from "../components/PeopleHelper";

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