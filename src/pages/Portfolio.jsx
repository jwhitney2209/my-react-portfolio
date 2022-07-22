import React, { useState } from "react";
import AnimatePage from "../components/AnimatePage/AnimatePage";
import ProjectList from "../components/ProjectList/ProjectList1";
// import ProjectList2 from "../components/ProjectList/ProjectList2";
import rate from "../assets/screen_rate.png";
import region from "../assets/screen_region.png";
import codeit from "../assets/screen_code.png";

const Portfolio = () => {
  // eslint-disable-next-line
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Code_It Note Taker",
      body: "Code_It is a noting-taking app made especially for your code. When you create a note, you can add code snippets and personal notations. You can also edit, delete, and share them at any time. Create folders to set up an organized directory or keep your notes in a random, piled collection. This application was made with GraphQL, React, MongoDB, Express.js, TailwindCSS, and JSX.",
      github: "https://github.com/jwhitney2209/code-it",
      deploy: "https://protected-headland-96637.herokuapp.com/",
      img: codeit,
    },
    {
      id: 2,
      title: "Rate My Playlist",
      body: "An application that lets authorized users share their favorite spotify playlists with the community. Users can favorite the playlists they love the most and the most favorited playlists are displayed on the homepage for all to see!",
      github: "https://github.com/jwhitney2209/rate-my-playlist",
      deploy: "https://protected-garden-77743.herokuapp.com/",
      img: rate,
    },
    {
      id: 3,
      title: "TMEA Region 28 Vocal Division",
      body: "This website was designed for the Texas Music Educators Association Region 28 Vocal Division. The purpose of the site is to be a hub of information and resources that members of the region can view and use as needed. The website utilizes Firebase Firestore as well as Hosting.",
      github: "https://github.com/jwhitney2209/region-28-website",
      deploy: "https://region28vocal.com",
      img: region,
    },
  ]);

  return (
    <AnimatePage>
      <div className="my-4 is-fluid m-4">
        <div className="content has-text-centered">
          <h2 className="title">Portfolio</h2>
          <p className="subtitle">Below you can see my most recent projects.</p>
        </div>
        <div className="">
          <ProjectList projects={projects} />
        </div>
      </div>
    </AnimatePage>
  );
};

export default Portfolio;
