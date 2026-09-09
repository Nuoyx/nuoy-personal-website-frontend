import "./ProjectInProgress.css";

import { Link } from "react-router-dom";

function ProjectInProgress() {

  return (
    <main className="project-progress">
      <div className="project-progress__content">
        <span className="project-progress__label">
          PROJECT IN PROGRESS
        </span>

        <h1>
          This project is still being built.
        </h1>

        <p>
          I'm currently working on this project and the
          detailed documentation isn't available yet.
        </p>

        <p>
          Check back later for more information, screenshots,
          technical details, and implementation notes.
        </p>

        <div className="project-progress__actions">
          <Link to="/projects">
            ← Back to Projects
          </Link>

          <Link to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ProjectInProgress;