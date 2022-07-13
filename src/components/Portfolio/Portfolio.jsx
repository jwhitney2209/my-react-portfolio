import React, { useState } from "react";
import AnimatePage from "../AnimatePage/AnimatePage";
import ProjectList1 from "../ProjectList/ProjectList1";
import ProjectList2 from "../ProjectList/ProjectList2";
import rate from "../../assets/ratemyplaylist.png";
import budget from "../../assets/budgettracker.png";
import thoughts from "../../assets/deepthoughts.png";
import notes from "../../assets/notetaker.png";
import food from "../../assets/foodfest.png";
import event from "../../assets/eventseeker.png";
import codeit from "../../assets/codeit.png";

const Portfolio = () => {
  // eslint-disable-next-line
  const [projects1, setProjects1] = useState([
    {
      title: "Code_It Note Taker",
      body: "Code_It is a noting-taking app made especially for your code. When you create a note, you can add code snippets and personal notations. You can also edit, delete, and share them at any time. Create folders to set up an organized directory or keep your notes in a random, piled collection. This application was made with GraphQL, React, MongoDB, Express.js, TailwindCSS, and JSX.",
      github: "https://github.com/jwhitney2209/code-it",
      deploy: "https://protected-headland-96637.herokuapp.com/",
      img: codeit,
    },
    {
      title: "Rate My Playlist",
      body: "An application that lets authorized users share their favorite spotify playlists with the community. Users can favorite the playlists they love the most and the most favorited playlists are displayed on the homepage for all to see!",
      github: "https://github.com/jwhitney2209/rate-my-playlist",
      deploy: "https://protected-garden-77743.herokuapp.com/",
      img: rate,
    },
    {
      title: "Budget Tracker",
      body: "This application allows you keep track of your budget. It also functions as a progressive web application, allowing you to use the app anywhere! Even if youre offline!",
      github: "",
      deploy: "https://pacific-dawn-84748.herokuapp.com/",
      img: budget,
    },
    {
      title: "Food Fest",
      body: "Food fest was designed to be used for an outdoor food event in where users may have trouble using the internet but can still use the application in its entirety.",
      github: "https://github.com/jwhitney2209/food-festival",
      deploy: "https://jwhitney2209.github.io/food-festival/",
      img: food,
    },
  ]);

  // eslint-disable-next-line
  const [projects2, setProjects2] = useState([
    {
      title: "Deep Thoughts",
      body: "A social media application built off the entire MERN stack. Users can create accounts, add friends, and share their deep thoughts!",
      github: "https://github.com/jwhitney2209/deep-thoughts",
      deploy: "https://lit-basin-77244.herokuapp.com/",
      img: thoughts,
    },
    {
      title: "Note Taker",
      body: "Note Taker can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.",
      github: "",
      deploy: "https://peaceful-bayou-40925.herokuapp.com/",
      img: notes,
    },
    {
      title: "Event Seeker",
      body: "Event Seeker was my first group project demonstrating front-end javascript while using multiple APIs, Event Seeker allows you to search for events in any given city as well as the weather forecast for that city.",
      github: "https://github.com/jwhitney2209/event-seeker",
      deploy: "https://jwhitney2209.github.io/event-seeker/",
      img: event,
    },
  ]);

  return (
    <AnimatePage>
      <div className="my-4 is-fluid m-4">
        <div className="content has-text-centered">
          <h2 className="title">Portfolio</h2>
          <p className="subtitle">Below you can see my most recent projects.</p>
        </div>
        <div className="columns is-multiline">
          <ProjectList1 projects={projects1} />
          <ProjectList2 projects={projects2} />
        </div>
      </div>
    </AnimatePage>
  );
};

export default Portfolio;
