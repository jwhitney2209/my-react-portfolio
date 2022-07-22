import React, { useState } from "react";
import AnimatePage from "../components/AnimatePage/AnimatePage";
import { MdGetApp } from "react-icons/md";

const Resume = () => {
  // eslint-disable-next-line
  const [frontEnd, setfrontEnd] = useState([
    { text: "HTML" },
    { text: "CSS" },
    { text: "JavaScript" },
    { text: "jQuery" },
    { text: "Responsive Design" },
    { text: "React" },
    { text: "Bootstrap" },
    { text: "Bulma" },
  ]);

  // eslint-disable-next-line
  const [backEnd, setbackEnd] = useState([
    { text: "APIs" },
    { text: "Node" },
    { text: "Express" },
    { text: "MySQL" },
    { text: "Sequelize" },
    { text: "MongoDB" },
    { text: "Mongoose" },
    { text: "REST" },
    { text: "NoSQL" },
    { text: "GraphQL" },
  ]);
  return (
    <AnimatePage>
      <div className="my-4 is-fluid m-4">
        <div className="content">
          <h2>Resume</h2>
          <p>Download my resume below</p>
          <a
            href="https://drive.google.com/file/d/10KNc_-kTcN9SMV1Tsu54TkSJqzFbcjU5/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="button is-danger is-outlined"
          >
            <span className="icon">
              <MdGetApp />
            </span>
            <span>Download CV</span>
          </a>
          <h3>Front-End Proficiencies</h3>
          <div className="tags">
            {frontEnd.map((front) => (
              <span className="tag is-dark">{front.text}</span>
            ))}
          </div>
          <h3>Back-End Proficiencies</h3>
          <div className="tags">
            {backEnd.map((back) => (
              <span className="tag is-dark">{back.text}</span>
            ))}
          </div>
        </div>
      </div>
    </AnimatePage>
  );
};

export default Resume;
