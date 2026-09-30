import "./ProjectCard.css";
import { Link } from "react-router-dom";

export interface ProjectCardData {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
}

interface ProjectCardProps {
  project: ProjectCardData;
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <Link
        to={`/projects/${project.slug}`}
        className="project-title-link"
      >
        <h2>{project.title}</h2>
      </Link>

      <div className="project-card-body">
        <Link
          to={`/projects/${project.slug}`}
          className="project-image-link"
        >
          <div className="project-image">
            {project.image ? (
              <img src={project.image} alt={project.title} />
            ) : (
              <div className="project-image-placeholder">
                <span>{project.title}</span>
              </div>
            )}

            <div className="project-image-overlay">
              <span className="project-detail-button">Project Detail</span>
            </div>
          </div>
        </Link>

        <div className="project-content">
          <p className="project-description">{project.description}</p>

          <div className="project-technologies">
            {project.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>

          <div className="project-links">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            )}

            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;