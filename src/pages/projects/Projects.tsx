import "./projects.css";
import ProjectCard, { type ProjectCardData } from "./project-card/ProjectCard";

const projects: ProjectCardData[] = [
  {
    slug: "nuoy-task-management",
    title: "Nuoy Task Management",
    description:
      "A full-stack task management application with user authentication, task management, and RESTful APIs.",
    technologies: ["React", "Spring Boot", "MyBatis", "MySQL", "JWT"],
    github: "#",
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