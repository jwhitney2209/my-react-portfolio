const ProjectList1 = (props) => {
  const projects = props.projects;

  return (
    <div className="column is-half my-2">
      {projects.map((project) => (
        <div className="card my-4">
        <div className="card-header">
          <div className="card-header-title">{ project.title }</div>
        </div>
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src="https://bulma.io/images/placeholders/1280x960.png"
              alt="Placeholder"
            />
          </figure>
        </div>
        <div className="card-content">{ project.body }</div>
        <div className="buttons">
          <a href={ project.github } className="button my-2 is-fullwidth is-danger">
            Github
          </a>
          <a href={ project.deploy } className="button is-fullwidth is-danger">
            Deployed
          </a>
        </div>
      </div>))}
      
    </div>
  );
};

export default ProjectList1;
