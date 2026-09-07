import "./projects.css";

import Header from "../../components/header/Header"
import { Link } from "react-router-dom";

interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    slug: "nuoy-task-management",
    title: "Nuoy Task Management",
    description:
      "A full-stack task management application with user authentication, task management, and RESTful APIs.",
    technologies: ["React", "Spring Boot", "MyBatis", "MySQL", "JWT"],
    github: "#",
    demo: "#",
  },
  {
    slug: "nuoy-take-out",
    title: "Nuoy Take-Out",
    description:
      "A backend management system for a take-out application, including employee management, dishes, orders, and scheduled order processing.",
    technologies: [
      "Java",
      "Spring Boot",
      "MyBatis",
      "MySQL",
      "Redis",
      "AWS S3",
    ],
    github: "#",
  },
];

function Projects() {
  return (
    <div className="projects-page">
      <Header />
      <div className="projects-container">
        <header className="projects-header">
          <h1>Projects</h1>
          <p className="projects-intro">
            A collection of projects I've built while developing my skills in
            software engineering and full-stack development.
          </p>
        </header>
        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className="project-card"
              key={project.slug}
            >
              {/* Project Title */}

              <Link
                to={`/projects/${project.slug}`}
                className="project-title-link"
              >
                <h2>{project.title}</h2>
              </Link>


              {/* Project Card Body */}

              <div className="project-card-body">

                {/* Project Image */}

                <Link
                  to={`/projects/${project.slug}`}
                  className="project-image-link"
                >
                  <div className="project-image">

                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                      />
                    ) : (
                      <div className="project-image-placeholder">
                        <span>{project.title}</span>
                      </div>
                    )}

                    {/* Hover Overlay */}

                    <div className="project-image-overlay">
                      <span className="project-detail-button">
                        Project Detail
                      </span>
                    </div>

                  </div>
                </Link>


                {/* Project Content */}

                <div className="project-content">

                  <p className="project-description">
                    {project.description}
                  </p>


                  {/* Technologies */}

                  <div className="project-technologies">
                    {project.technologies.map((technology) => (
                      <span key={technology}>
                        {technology}
                      </span>
                    ))}
                  </div>


                  {/* External Links */}

                  <div className="project-links">

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo
                      </a>
                    )}

                  </div>

                </div>

              </div>
            </article>
          ))}
        </div>
      </div>
    </div >
  );
}

export default Projects;