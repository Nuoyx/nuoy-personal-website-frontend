import "./Projects.css";

const projects = [
  {
    title: "Nuoy Task Management",
    description:
      "A task management application with authentication, task management, and RESTful APIs.",
    technologies: ["Java", "Spring Boot", "MySQL", "React"],
  },
  {
    title: "Nuoy Take Out",
    description:
      "A backend management system featuring authentication, order processing, cloud storage, and scheduled tasks.",
    technologies: ["Java", "Spring Boot", "MyBatis", "AWS S3"],
  },
  {
    title: "AI Project",
    description:
      "An AI-focused project exploring machine learning and intelligent software systems.",
    technologies: ["Python", "AI", "Machine Learning"],
  },
];

function Projects() {
  return (
    <div className="projects">
      <div className="projects__container">

        <div className="projects__heading">
          <span>03</span>
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