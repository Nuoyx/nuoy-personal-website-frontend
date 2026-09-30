import "./Skills.css";
import { skills } from "../../../data/skills";

function Skills() {
  return (
    <div className="skills">
      <div className="skills__container">

        <div className="skills__heading">
          <h2>Skills</h2>
        </div>

        <div className="skills__grid">
          {skills.map((group) => (
            <div className="skills__group" key={group.title}>
              <h3>{group.title}</h3>

              <div className="skills__list">
                {group.skills.map((skill) => (
                  <span key={skill} className="skills__item">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Skills;