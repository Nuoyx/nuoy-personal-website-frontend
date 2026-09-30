import "./Projects.css";
import { projects } from "../../../data/projects";

function Projects() {
  return (
    <div className="projects">
      <div className="projects__container">

        <div className="projects__heading">
          <h2>Projects</h2>
        </div>

        <div className="projects__list">
          {projects.slice(0,2).map((project) => (
            <article
              className="project-card"
              key={project.title}
            >
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-card__technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}
              </div>

              <a href="/projects">
                View Project →
              </a>
            </article>
          ))}
        </div>

        <a
          href="/projects"
          className="projects__more"
        >
          View All Projects →
        </a>

      </div>
    </div>
  );
}


export default Projects;