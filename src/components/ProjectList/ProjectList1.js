const ProjectList = (props) => {
  const projects = props.projects;

  return (
    <div className="columns">
      {projects.map((project) => (
        <div className="column mx-1" key={project.id}>
          <div className="card my-2">
            <div className="card-header">
              <div className="card-header-title is-centered">
                <p>{project.title}</p>
              </div>
            </div>
            <div className="card-image">
              <figure className="mx-2">
                <img src={project.img} alt="screenshot" />
              </figure>
            </div>
            <div className="card-content">{project.body}</div>
            <div className="card-footer">
              <div className="card-footer-item">
                <a
                  href={project.github}
                  className="button m-2 is-fullwidth is-info is-outlined"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href={project.deploy}
                  className="button m-2 is-fullwidth is-danger is-outlined"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
