import "./Skills.css";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "REST API", "MyBatis", "JWT", "Redis"],
  },
  {
    title: "Frontend",
    skills: ["React", "TypeScript", "HTML", "CSS", "React Router"],
  },
  {
    title: "Cloud & Tools",
    skills: ["AWS S3", "Git", "Docker", "Linux", "Nginx"],
  },
];

function Skills() {
  return (
    <div className="skills">
      <div className="skills__container">

        <div className="skills__heading">
          <h2>Skills</h2>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => (
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