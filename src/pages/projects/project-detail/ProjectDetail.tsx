import "./ProjectDetail.css";

import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../../../util/getProjectBySlug";
import Header from "../../../components/header/Header";


function ProjectDetail() {
  const { slug } = useParams();

  const project = slug
    ? getProjectBySlug(slug)
    : undefined;

  if (!project) {
    return (
      <div className="project-detail">
        <Header />
        <h1>Project Not Found</h1>

        <Link to="/projects">
          ← Back to Projects
        </Link>
      </div>
    );
  }
  return (
    <div className="project-detail">
      <Header />

      {/* =========================
          Project Header
          ========================= */}

      <header className="project-detail-header">

        <Link
          to="/projects"
          className="project-detail-back"
        >
          ← Back to Projects
        </Link>

        <p className="project-detail-category">
          {project.category}
        </p>

        <h1 className="project-detail-title">
          {project.title}
        </h1>

        <p className="project-detail-intro">
          {project.description}
        </p>

        {/* Technologies */}

        <div className="project-detail-technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>
              {technology}
            </span>
          ))}
        </div>

        {/* Links */}

        <div className="project-detail-links">

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

      </header>


      {/* =========================
          Project Image
          ========================= */}

      <section className="project-detail-image">

        <div className="project-detail-image-placeholder">
          <span>
            {project.title}
          </span>
        </div>

      </section>


      {/* =========================
          Overview
          ========================= */}

      <section className="project-detail-section">

        <h2>
          Overview
        </h2>

        {project.overview.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}

      </section>


      {/* =========================
          Features
          ========================= */}

      <section className="project-detail-section">

        <h2>
          Features
        </h2>

        <div className="project-detail-features">

          {project.features.map((feature) => (
            <article
              className="project-detail-feature"
              key={feature.title}
            >

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.description}
              </p>

            </article>
          ))}

        </div>

      </section>


      {/* =========================
          Architecture
          ========================= */}

      <section className="project-detail-section">

        <h2>
          Architecture
        </h2>

        <div className="project-detail-architecture">

          {project.architecture.map((item) => (
            <div
              key={item.title}
              className="project-detail-architecture-item"
            >

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* =========================
          Technical Details
          ========================= */}

      <section className="project-detail-section">

        <h2>
          Technical Implementation
        </h2>

        <div className="project-detail-technical">

          {project.technicalDetails.map((item) => (
            <article key={item.title}>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </article>
          ))}

        </div>

      </section>


      {/* =========================
          Challenges
          ========================= */}

      {project.challenges.length > 0 && (
        <section className="project-detail-section">

          <h2>
            Challenges & Solutions
          </h2>

          <div className="project-detail-challenges">

            {project.challenges.map((item, index) => (
              <article
                className="project-detail-challenge"
                key={index}
              >

                <h3>
                  Challenge
                </h3>

                <p>
                  {item.challenge}
                </p>

                <h3>
                  Solution
                </h3>

                <p>
                  {item.solution}
                </p>

              </article>
            ))}

          </div>

        </section>
      )}


      {/* =========================
          Screenshots
          ========================= */}

      {project.screenshots.length > 0 && (
        <section className="project-detail-section">

          <h2>
            Screenshots
          </h2>

          <div className="project-detail-screenshots">

            {project.screenshots.map((screenshot) => (
              <img
                key={screenshot.image}
                src={screenshot.image}
                alt={screenshot.alt}
              />
            ))}

          </div>

        </section>
      )}


      {/* =========================
          What I Learned
          ========================= */}

      <section className="project-detail-section">

        <h2>
          What I Learned
        </h2>

        <p>
          {project.learned}
        </p>

      </section>


      {/* =========================
          Future Improvements
          ========================= */}

      {project.futureImprovements &&
        project.futureImprovements.length > 0 && (
          <section className="project-detail-section">

            <h2>
              Future Improvements
            </h2>

            <ul className="project-detail-improvements">

              {project.futureImprovements.map((improvement) => (
                <li key={improvement}>
                  {improvement}
                </li>
              ))}

            </ul>

          </section>
        )}


      {/* =========================
          Footer
          ========================= */}

      <footer className="project-detail-footer">

        <Link
          to="/projects"
          className="project-detail-back"
        >
          ← Back to Projects
        </Link>

      </footer>

    </div>
  );
}

export default ProjectDetail;