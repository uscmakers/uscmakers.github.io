import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/join.css";
import recruitmentTimeline from "../images/recruitment-timeline.png";

const Join = () => {
  return (
    <main>
      <Header />

      {/* Header Section */}
      <section className="join-header">
        <div>
          <h1>fall 2025 recruitment</h1>
          <h2>interested in becoming a Maker?</h2>
        </div>
      </section>

      {/* Apply Section */}
      <section className="join-text">
        <div>
          <a
            href="https://forms.gle/mR6WrLgAaLueRBbq6"
            target="_blank"
            rel="noopener noreferrer"
            className="apply-button"
          >
            apply now!
          </a>
        </div>

        <div>
          <p>
            our applications open on monday, aug. 25th!
            <br />
            for more details on our timeline, see our Instagram @makersusc.
          </p>
        </div>
      </section>

      {/* Optional recruitment timeline image */}
      {/* <div style={{ textAlign: "center" }}>
        <img
          src={recruitmentTimeline}
          alt="Recruitment Timeline"
          className="recruitment-timeline"
        />
      </div> */}

      {/* Questions Section */}
      <section className="questions">
        <div>
          <h1>questions?</h1>
          <h2>
            contact our e-board on Instagram @makersusc or via email at
            uscmakers@gmail.com!
          </h2>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Join;
