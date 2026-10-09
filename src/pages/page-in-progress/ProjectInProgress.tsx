import "./ProjectInProgress.css";

import { Link } from "react-router-dom";

function ProjectInProgress() {

  return (
    <main className="project-progress">
      <div className="project-progress__content">
        <span className="project-progress__label">
          status: building
        </span>

        <h1>
          404: Finished Website Not Found
        </h1>

        <p>
          The developer is still coding...
        </p>

        <p>
          Check back later for more information.
        </p>

        <div className="project-progress__actions">
          <Link to="/">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ProjectInProgress;