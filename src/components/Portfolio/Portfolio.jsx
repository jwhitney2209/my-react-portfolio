import React, { useState } from "react";
import AnimatePage from "../AnimatePage/AnimatePage";
import ProjectList1 from '../ProjectList/ProjectList1'
import ProjectList2 from "../ProjectList/ProjectList2";

const Portfolio = () => {
  const [projects1, setProjects1] = useState([
    { title: 'Project 1', body: 'lorem', github: '', deploy: '', img: '' },
    { title: 'Project 2', body: 'lorem', github: '', deploy: '', img: '' },
    { title: 'Project 3', body: 'lorem', github: '', deploy: '', img: '' },
  ]);

  const [projects2, setProjects2] = useState([
    { title: 'Project 4', body: 'lorem', github: '', deploy: '', img: '' },
    { title: 'Project 5', body: 'lorem', github: '', deploy: '', img: '' },
    { title: 'Project 6', body: 'lorem', github: '', deploy: '', img: '' },
  ]);

  return (
    <AnimatePage>
      <div className="my-4 is-fluid m-4">
        <div className="content has-text-centered">
          <h2 className="title">Portfolio</h2>
          <p className="subtitle">Below you can see my most recent projects.</p>
        </div>
        <div className="columns is-multiline">
        <ProjectList1 projects={projects1}/>
        <ProjectList2 projects={projects2} />
        </div>
      </div>
    </AnimatePage>
  );
};

export default Portfolio;
