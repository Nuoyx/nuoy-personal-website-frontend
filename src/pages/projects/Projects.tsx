import "./projects.css";
import ProjectCard from "./project-card/ProjectCard";
import { projects } from "../../data/projects";


function Projects() {
  return (
    <div className="projects-page">
      <div className="projects-container">
        <header className="projects-header">
          <h1>Projects</h1>
          <p className="projects-intro">
            A collection of projects I've built while developing my skills
          </p>
        </header>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;