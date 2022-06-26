const ProjectList2 = (props) => {
  const projects = props.projects;

  return (
    <div className="column is-half my-2">
      {projects.map((project) => (
        <div className="card my-4">
          <div className="card-header">
            <div className="card-header-title">{project.title}</div>
          </div>
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={project.img} alt="Placeholder" />
            </figure>
          </div>
          <div className="card-content">{project.body}</div>
          <div className="card-footer">
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
      ))}
    </div>
  );
};

export default ProjectList2;
