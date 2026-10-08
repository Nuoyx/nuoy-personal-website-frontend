import "./Experience.css";
import { experiences } from "../../../data/experience";

function Experience() {
  return (
    <div className="home-section experience">
      <div className="home-section__container">

        <div className="home-section__heading">
          <h2>Experience</h2>
        </div>

        <div className="experience__timeline">
          {experiences.map((experience) => (
            <article
              className="experience__item"
              key={`${experience.role}-${experience.company}`}
            >
              <div className="experience__period">
                {experience.period}
              </div>

              <div className="experience__details">
                <h3>{experience.role}</h3>
                <h4>{experience.company}</h4>
                <ul className="experience__description">
                  {experience.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Experience;